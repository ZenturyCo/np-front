import React, { useState, useMemo, useRef, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Clock,
  Flag,
  LayoutGrid,
  List,
  BarChart3,
  AlertCircle,
  Plus,
  RefreshCw,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

import { taskApi, projectApi, type Task, type TaskStatus, type TaskPriority } from "@/lib/api";
import { useAuthStore } from "@/store/auth.store";

// ── Configurações ───────────────────────────────────────────────────────────

const priorityConfig: Record<TaskPriority, { label: string; style: string; icon: React.ElementType }> = {
  urgent: { label: "Urgente", style: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300", icon: AlertCircle },
  high:   { label: "Alta",    style: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300", icon: Flag },
  normal: { label: "Normal",  style: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300", icon: Flag },
  low:    { label: "Baixa",   style: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400", icon: Flag },
};

const statusConfig: Record<TaskStatus, { label: string; color: string }> = {
  todo:        { label: "A Fazer",      color: "bg-zinc-500" },
  in_progress: { label: "Em Progresso", color: "bg-blue-600" },
  review:      { label: "Revisão",      color: "bg-amber-600" },
  done:        { label: "Concluída",    color: "bg-emerald-600" },
};

const kanbanColumns: TaskStatus[] = ["todo", "in_progress", "review", "done"];

const viewTabs = [
  { id: "list" as const,   label: "Lista",   icon: List },
  { id: "kanban" as const, label: "Kanban",  icon: LayoutGrid },
  { id: "gantt" as const,  label: "Gantt",   icon: BarChart3 },
];

type ViewType = "list" | "kanban" | "gantt";

// ── Componentes Auxiliares ───────────────────────────────────────────────────

function TaskCard({ task, compact = false, onClick }: { task: Task; compact?: boolean; onClick?: () => void }) {
  const pri = priorityConfig[task.priority] ?? priorityConfig.normal;
  const PriIcon = pri.icon;
  const isDone = task.status === "done";

  return (
    <div
      onClick={onClick}
      className={cn(
        "group cursor-pointer rounded-xl border bg-card p-4 shadow-sm transition-all hover:shadow-md active:scale-[0.985]",
        isDone && "opacity-75"
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{task.projectName || "Sem projeto"}</span>
        <span className={cn("flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold", pri.style)}>
          <PriIcon className="h-3.5 w-3.5" />
          {pri.label}
        </span>
      </div>

      <h3 className={cn("font-semibold leading-snug", isDone && "line-through text-muted-foreground")}>
        {task.title}
      </h3>

      {!compact && task.description && (
        <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{task.description}</p>
      )}

      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary ring-2 ring-background">
            {task.assigneeName?.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) || "???"}
          </div>
          {!compact && (
            <span className="text-xs text-muted-foreground truncate max-w-[140px]">
              {task.assigneeName || "Não atribuído"}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString("pt-PT", { day: "numeric", month: "short" })
            : "Sem prazo"}
        </div>
      </div>
    </div>
  );
}

// ── List View ────────────────────────────────────────────────────────────────

function ListView({ tasks, onClickTask }: { tasks: Task[]; onClickTask: (task: Task) => void }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onClick={() => onClickTask(task)} />
      ))}
    </div>
  );
}

// ── Kanban View (Versão Corrigida e Melhorada) ───────────────────────────────

function KanbanView({ tasks, onClickTask }: { tasks: Task[]; onClickTask: (task: Task) => void }) {
  const getColumnLabel = (status: TaskStatus | string) =>
    statusConfig[status as TaskStatus]?.label || status || "Sem Status";

  const getColumnColor = (status: TaskStatus | string) =>
    statusConfig[status as TaskStatus]?.color || "bg-zinc-500";

  return (
    <div className="flex gap-6 overflow-x-auto pb-8 pt-2">
      {kanbanColumns.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col);

        return (
          <div key={col} className="w-80 min-w-[320px] shrink-0">
            <div className="mb-4 flex items-center gap-3 px-2">
              <div className={cn("h-3.5 w-3.5 rounded-full", getColumnColor(col))} />
              <h3 className="font-semibold text-foreground">{getColumnLabel(col)}</h3>
              <div className="ml-auto flex h-6 min-w-[26px] items-center justify-center rounded-full bg-muted px-2.5 text-xs font-medium text-muted-foreground">
                {colTasks.length}
              </div>
            </div>

            <div className="min-h-[400px] space-y-3 rounded-xl bg-muted/30 p-3">
              {colTasks.length > 0 ? (
                colTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    compact
                    onClick={() => onClickTask(task)}
                  />
                ))
              ) : (
                <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-border/60 bg-card/50">
                  <p className="text-sm text-muted-foreground">Sem tarefas</p>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Coluna de debug: tarefas com status desconhecido */}
      {tasks.some((t) => !kanbanColumns.includes(t.status as TaskStatus)) && (
        <div className="w-80 min-w-[320px] shrink-0 opacity-75">
          <div className="mb-4 flex items-center gap-3 px-2">
            <div className="h-3.5 w-3.5 rounded-full bg-zinc-400" />
            <h3 className="font-semibold text-foreground">Outros Status</h3>
            <div className="ml-auto flex h-6 min-w-[26px] items-center justify-center rounded-full bg-muted px-2.5 text-xs font-medium text-muted-foreground">
              {tasks.filter((t) => !kanbanColumns.includes(t.status as TaskStatus)).length}
            </div>
          </div>
          <div className="min-h-[400px] space-y-3 rounded-xl bg-muted/30 p-3">
            {tasks
              .filter((t) => !kanbanColumns.includes(t.status as TaskStatus))
              .map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  compact
                  onClick={() => onClickTask(task)}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Gantt View ───────────────────────────────────────────────────────────────

function GanttView({ tasks }: { tasks: Task[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const DAY_WIDTH = 52;
  const LEFT_WIDTH = 320;

  const validTasks = useMemo(() => {
    return tasks
      .filter((t) => t.startDate && t.endDate &&
        !isNaN(new Date(t.startDate).getTime()) &&
        !isNaN(new Date(t.endDate).getTime()))
      .map((t) => ({
        ...t,
        start: new Date(t.startDate!),
        end: new Date(t.endDate!),
      }))
      .sort((a, b) => a.start.getTime() - b.start.getTime());
  }, [tasks]);

  const { days, rangeStart, totalDays, todayOffset } = useMemo(() => {
    if (validTasks.length === 0) {
      return { days: [], rangeStart: new Date(), totalDays: 0, todayOffset: -1 };
    }

    const allDates = validTasks.flatMap((t) => [t.start, t.end]);
    let minD = new Date(Math.min(...allDates.map((d) => d.getTime())));
    let maxD = new Date(Math.max(...allDates.map((d) => d.getTime())));

    minD.setDate(minD.getDate() - 2);
    maxD.setDate(maxD.getDate() + 3);

    const total = Math.ceil((maxD.getTime() - minD.getTime()) / (1000 * 3600 * 24));

    const generatedDays = Array.from({ length: total }, (_, i) => {
      const d = new Date(minD);
      d.setDate(d.getDate() + i);
      return d;
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayOff = Math.floor((today.getTime() - minD.getTime()) / (1000 * 3600 * 24));

    return {
      days: generatedDays,
      rangeStart: minD,
      totalDays: total,
      todayOffset: todayOff,
    };
  }, [validTasks]);

  const getOffset = useCallback((date: Date) => {
    return Math.max(0, Math.floor((date.getTime() - rangeStart.getTime()) / (1000 * 3600 * 24)));
  }, [rangeStart]);

  if (validTasks.length === 0) {
    return (
      <div className="rounded-2xl border bg-card p-16 text-center">
        <BarChart3 className="mx-auto h-14 w-14 text-muted-foreground/40" />
        <p className="mt-4 text-lg font-medium">Sem tarefas com datas válidas</p>
        <p className="mt-1 text-sm text-muted-foreground">As tarefas precisam de data de início e fim.</p>
      </div>
    );
  }

  const minWidth = LEFT_WIDTH + totalDays * DAY_WIDTH;

  return (
    <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">
      <div className="overflow-x-auto" ref={containerRef}>
        <div className="relative" style={{ minWidth: `${minWidth}px` }}>
          {/* Header */}
          <div className="sticky top-0 z-30 flex border-b bg-muted/90 backdrop-blur-md">
            <div className="w-[320px] shrink-0 border-r px-6 py-4 text-sm font-semibold text-muted-foreground">
              TAREFA
            </div>
            <div className="flex">
              {days.map((day, i) => {
                const isToday = day.toDateString() === new Date().toDateString();
                const isWeekend = day.getDay() === 0 || day.getDay() === 6;

                return (
                  <div
                    key={i}
                    className={cn(
                      "flex flex-col items-center justify-center border-r py-3 text-center text-xs transition-colors",
                      isToday && "bg-primary/10",
                      isWeekend && "bg-muted/70"
                    )}
                    style={{ width: DAY_WIDTH }}
                  >
                    <span className="text-[10px] text-muted-foreground">
                      {day.toLocaleDateString("pt-PT", { weekday: "short" }).slice(0, 3).toUpperCase()}
                    </span>
                    <span className={cn("font-semibold text-sm", isToday && "text-primary")}>
                      {day.getDate()}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tasks */}
          {validTasks.map((task) => {
            const startOffset = getOffset(task.start);
            const endOffset = getOffset(task.end);
            const duration = Math.max(1, endOffset - startOffset + 1);
            const isDone = task.status === "done";

            const barLeft = startOffset * DAY_WIDTH + 8;
            const barWidth = Math.max(duration * DAY_WIDTH - 16, 40);

            return (
              <div key={task.id} className="group flex border-b last:border-b-0 hover:bg-muted/50 transition-colors">
                <div className="w-[320px] shrink-0 border-r px-6 py-4">
                  <p className={cn("font-medium leading-tight", isDone && "line-through text-muted-foreground")}>
                    {task.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {task.projectName || "Sem projeto"}
                  </p>
                </div>

                <div className="relative h-16 flex-1">
                  {days.map((day, i) =>
                    (day.getDay() === 0 || day.getDay() === 6) && (
                      <div
                        key={i}
                        className="absolute top-0 bottom-0 bg-muted/40"
                        style={{ left: i * DAY_WIDTH, width: DAY_WIDTH }}
                      />
                    )
                  )}

                  {todayOffset >= 0 && todayOffset < totalDays && (
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-primary z-10"
                      style={{ left: todayOffset * DAY_WIDTH + DAY_WIDTH / 2 }}
                    />
                  )}

                  <div
                    className={cn(
                      "absolute top-1/2 -translate-y-1/2 h-9 rounded-lg flex items-center px-3 text-xs font-medium text-white shadow-md transition-all hover:scale-105 cursor-pointer",
                      isDone ? "bg-emerald-600/90" :
                      task.priority === "urgent" ? "bg-rose-600" :
                      task.priority === "high" ? "bg-amber-600" : "bg-blue-600"
                    )}
                    style={{ left: barLeft, width: barWidth }}
                    title={`${task.title} • ${task.start.toLocaleDateString("pt-PT")} → ${task.end.toLocaleDateString("pt-PT")}`}
                  >
                    {duration >= 4 && <span className="truncate">{task.title}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function Tasks() {
  const { toast } = useToast();
  const qc = useQueryClient();
  const { user } = useAuthStore();

  const [view, setView] = useState<ViewType>("list");
  const [createOpen, setCreateOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [editTaskForm, setEditTaskForm] = useState<{
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: string;
  }>({
    status: "todo",
    priority: "normal",
    dueDate: "",
  });

  const [form, setForm] = useState({
    title: "",
    description: "",
    projectId: "",
    priority: "normal" as TaskPriority,
    status: "todo" as TaskStatus,
    assigneeId: "",
    dueDate: "",
  });

  const { data: tasks = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["tasks", user?.tenantId],
    queryFn: () => taskApi.list(undefined, user!.tenantId),
    enabled: !!user?.tenantId,
  });

  const { data: projects = [] } = useQuery({
    queryKey: ["projects", user?.tenantId],
    queryFn: () => projectApi.list(user!.tenantId),
    enabled: !!user?.tenantId,
  });

  const createMutation = useMutation({
    mutationFn: (data: any) => taskApi.create(data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["tasks", user?.tenantId] });
      toast({ title: "Tarefa criada com sucesso!" });
      setCreateOpen(false);
      setForm({ title: "", description: "", projectId: "", priority: "normal", status: "todo", assigneeId: "", dueDate: "" });
    },
    onError: (err: any) => {
      toast({
        title: "Erro ao criar tarefa",
        description: err?.response?.data?.message || "Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Record<string, unknown> }) => taskApi.update(id, data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["tasks", user?.tenantId] });
      toast({ title: "Tarefa actualizada com sucesso!" });
      setDetailOpen(false);
      setSelectedTask(null);
    },
    onError: (err: any) => {
      toast({
        title: "Erro ao actualizar tarefa",
        description: err?.response?.data?.message || "Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const handleCreate = () => {
    if (!form.title.trim() || !form.projectId) {
      toast({ title: "Campos obrigatórios", description: "Título e projeto são obrigatórios.", variant: "destructive" });
      return;
    }

    createMutation.mutate({
      title: form.title.trim(),
      description: form.description.trim() || undefined,
      projectId: form.projectId,
      tenantId: user?.tenantId,
      createdBy: user?.id,
      priority: form.priority,
      status: form.status,
      assigneeIds: form.assigneeId ? [form.assigneeId] : [],
      dueDate: form.dueDate || undefined,
      startDate: form.dueDate ? new Date(form.dueDate).toISOString() : undefined,
    });
  };

  const openTaskDetail = (task: Task) => {
    setSelectedTask(task);
    setEditTaskForm({
      status: task.status,
      priority: task.priority,
      dueDate: task.dueDate ? String(task.dueDate).slice(0, 10) : "",
    });
    setDetailOpen(true);
  };

  const handleUpdateTask = () => {
    if (!selectedTask) return;
    updateMutation.mutate({
      id: selectedTask.id,
      data: {
        status: editTaskForm.status,
        priority: editTaskForm.priority,
        dueDate: editTaskForm.dueDate || undefined,
      },
    });
  };

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border bg-card p-16">
        <AlertCircle className="h-14 w-14 text-destructive" />
        <h3 className="mt-6 text-xl font-semibold">Erro ao carregar tarefas</h3>
        <Button onClick={() => refetch()} className="mt-6 gap-2" variant="outline">
          <RefreshCw className="h-4 w-4" /> Tentar novamente
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-1 rounded-xl bg-muted p-1.5">
          {viewTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setView(tab.id)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all",
                  view === tab.id
                    ? "bg-background shadow text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <Button onClick={() => setCreateOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Nova Tarefa
        </Button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-40 rounded-2xl" />
          ))}
        </div>
      ) : tasks.length === 0 ? (
        <div className="rounded-2xl border bg-card p-16 text-center">
          <Flag className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <p className="mt-4 text-lg font-medium">Nenhuma tarefa encontrada</p>
        </div>
      ) : (
        <>
          {view === "list" && <ListView tasks={tasks} onClickTask={openTaskDetail} />}
          {view === "kanban" && <KanbanView tasks={tasks} onClickTask={openTaskDetail} />}
          {view === "gantt" && <GanttView tasks={tasks} />}
        </>
      )}

      {/* Modal Criar */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" /> Nova Tarefa
            </DialogTitle>
            <DialogDescription>Preencha os dados da nova tarefa.</DialogDescription>
          </DialogHeader>

          <div className="space-y-5 py-2">
            <div>
              <Label>Título *</Label>
              <Input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Ex: Revisão do sistema elétrico"
              />
            </div>

            <div>
              <Label>Descrição</Label>
              <Textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Detalhes da tarefa..."
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Projeto *</Label>
                <Select value={form.projectId} onValueChange={(v) => setForm({ ...form, projectId: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o projeto" />
                  </SelectTrigger>
                  <SelectContent>
                    {projects.map((p) => (
                      <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Prioridade</Label>
                <Select value={form.priority} onValueChange={(v) => setForm({ ...form, priority: v as TaskPriority })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgente</SelectItem>
                    <SelectItem value="high">Alta</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="low">Baixa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Estado Inicial</Label>
                <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v as TaskStatus })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todo">A Fazer</SelectItem>
                    <SelectItem value="in_progress">Em Progresso</SelectItem>
                    <SelectItem value="review">Revisão</SelectItem>
                    <SelectItem value="done">Concluída</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Prazo Final</Label>
                <Input
                  type="date"
                  value={form.dueDate}
                  onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateOpen(false)}>
              Cancelar
            </Button>
            <Button 
              onClick={handleCreate} 
              disabled={createMutation.isPending || !form.title.trim() || !form.projectId}
            >
              {createMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Criar Tarefa"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal Detalhe */}
      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="sm:max-w-md">
          {selectedTask && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedTask.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedTask.description || "Sem descrição adicional."}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Estado</Label>
                    <Select
                      value={editTaskForm.status}
                      onValueChange={(value) => setEditTaskForm((prev) => ({ ...prev, status: value as TaskStatus }))}
                    >
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todo">A Fazer</SelectItem>
                        <SelectItem value="in_progress">Em Progresso</SelectItem>
                        <SelectItem value="review">Revisão</SelectItem>
                        <SelectItem value="done">Concluída</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Prioridade</Label>
                    <Select
                      value={editTaskForm.priority}
                      onValueChange={(value) => setEditTaskForm((prev) => ({ ...prev, priority: value as TaskPriority }))}
                    >
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgente</SelectItem>
                        <SelectItem value="high">Alta</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="low">Baixa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label>Prazo</Label>
                  <Input
                    type="date"
                    value={editTaskForm.dueDate}
                    onChange={(event) => setEditTaskForm((prev) => ({ ...prev, dueDate: event.target.value }))}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDetailOpen(false)}>
                  Fechar
                </Button>
                <Button onClick={handleUpdateTask} disabled={updateMutation.isPending}>
                  {updateMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Salvar"}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
