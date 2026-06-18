import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Calendar, Clock, Flag, LayoutGrid, List, BarChart3, AlertCircle, Plus, RefreshCw, Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { taskApi, projectApi, userApi, type Task, type TaskStatus, type TaskPriority } from "@/lib/api";
import { useAuthStore } from "@/store/auth.store";

// ── Config ───────────────────────────────────────────────────

const priorityConfig: Record<TaskPriority, { label: string; style: string; icon: typeof Flag }> = {
  urgent: { label: "Urgente", style: "bg-danger/15 text-danger", icon: AlertCircle },
  high: { label: "Alta", style: "bg-warning/15 text-warning", icon: Flag },
  normal: { label: "Normal", style: "bg-primary/15 text-primary", icon: Flag },
  low: { label: "Baixa", style: "bg-muted text-muted-foreground", icon: Flag },
};

const statusConfig: Record<TaskStatus, { label: string; color: string }> = {
  todo: { label: "A Fazer", color: "bg-muted-foreground" },
  in_progress: { label: "Em Progresso", color: "bg-primary" },
  review: { label: "Revisão", color: "bg-warning" },
  done: { label: "Concluída", color: "bg-success" },
};

const kanbanColumns: TaskStatus[] = ["todo", "in_progress", "review", "done"];

const viewTabs = [
  { id: "list" as const, label: "Lista", icon: List },
  { id: "kanban" as const, label: "Kanban", icon: LayoutGrid },
  { id: "gantt" as const, label: "Gantt", icon: BarChart3 },
];

type ViewType = "list" | "kanban" | "gantt";

// ── Task Card ────────────────────────────────────────────────

function TaskCard({ task, compact = false, onClick }: { task: Task; compact?: boolean; onClick?: () => void }) {
  const pri = priorityConfig[task.priority] || priorityConfig.normal;
  const PriIcon = pri.icon;
  const isDone = task.status === "done";

  return (
    <div onClick={onClick} className={cn("group cursor-pointer rounded-xl border bg-card p-4 shadow-sm transition-all hover:shadow-md", isDone && "opacity-60")}>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">{task.projectName || "Projecto"}</span>
        <span className={cn("flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold", pri.style)}>
          <PriIcon className="h-3 w-3" /> {pri.label}
        </span>
      </div>
      <h3 className={cn("text-sm font-semibold text-foreground leading-snug", isDone && "line-through text-muted-foreground")}>
        {task.title}
      </h3>
      {!compact && task.description && <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{task.description}</p>}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary">
            {task.assigneeName?.split(" ").map(n => n[0]).join("").slice(0, 2) || "?"}
          </div>
          {!compact && <span className="text-xs text-muted-foreground">{task.assigneeName || "Não atribuído"}</span>}
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {task.dueDate ? new Date(task.dueDate).toLocaleDateString("pt-PT", { day: "numeric", month: "short" }) : "Sem prazo"}
        </div>
      </div>
    </div>
  );
}

// ── List View ────────────────────────────────────────────────

function ListView({ tasks, onClickTask }: { tasks: Task[]; onClickTask?: (t: Task) => void }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
      {tasks.map((t) => <TaskCard key={t.id} task={t} onClick={() => onClickTask?.(t)} />)}
    </div>
  );
}

// ── Kanban View ──────────────────────────────────────────────

function KanbanView({ tasks, onClickTask, onUpdateStatus }: { tasks: Task[]; onClickTask?: (t: Task) => void; onUpdateStatus?: (id: string, status: TaskStatus) => void }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {kanbanColumns.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col);
        const status = statusConfig[col];
        return (
          <div key={col} className="w-72 shrink-0 rounded-xl bg-muted/50 p-3">
            <div className="mb-3 flex items-center gap-2">
              <span className={cn("h-2.5 w-2.5 rounded-full", status.color)} />
              <span className="text-sm font-semibold text-foreground">{status.label}</span>
              <span className="ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full bg-muted px-1.5 text-[11px] font-semibold text-muted-foreground">
                {colTasks.length}
              </span>
            </div>
            <div className="space-y-3">
              {colTasks.map((t) => <TaskCard key={t.id} task={t} compact onClick={() => onClickTask?.(t)} />)}
              {colTasks.length === 0 && (
                <div className="rounded-lg border-2 border-dashed border-border p-6 text-center text-xs text-muted-foreground">Sem tarefas</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Gantt View ───────────────────────────────────────────────

function GanttView({ tasks }: { tasks: Task[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tasksWithDates = tasks.filter((t) => t.startDate && t.endDate);

  if (tasksWithDates.length === 0) {
    return (
      <div className="rounded-xl border bg-card p-12 text-center shadow-sm">
        <BarChart3 className="mx-auto h-10 w-10 text-muted-foreground/40" />
        <p className="mt-3 text-sm text-muted-foreground">Sem tarefas com datas para mostrar no Gantt</p>
      </div>
    );
  }

  const allDates = tasksWithDates.flatMap((t) => [new Date(t.startDate!), new Date(t.endDate!)]);
  const minDate = new Date(Math.min(...allDates.map((d) => d.getTime())));
  const maxDate = new Date(Math.max(...allDates.map((d) => d.getTime())));
  const rangeStart = new Date(minDate); rangeStart.setDate(rangeStart.getDate() - 1);
  const rangeEnd = new Date(maxDate); rangeEnd.setDate(rangeEnd.getDate() + 2);
  const totalDays = Math.ceil((rangeEnd.getTime() - rangeStart.getTime()) / (1000 * 60 * 60 * 24));
  const dayWidth = 48;
  const days = Array.from({ length: totalDays }, (_, i) => { const d = new Date(rangeStart); d.setDate(d.getDate() + i); return d; });
  const getOffset = (dateStr: string) => Math.max(0, Math.ceil((new Date(dateStr).getTime() - rangeStart.getTime()) / (1000 * 60 * 60 * 24)));
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const todayOffset = Math.ceil((today.getTime() - rangeStart.getTime()) / (1000 * 60 * 60 * 24));
  const sorted = [...tasksWithDates].sort((a, b) => new Date(a.startDate!).getTime() - new Date(b.startDate!).getTime());

  return (
    <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
      <div className="overflow-x-auto" ref={containerRef}>
        <div style={{ minWidth: `${280 + totalDays * dayWidth}px` }}>
          <div className="flex border-b bg-muted/30">
            <div className="w-[280px] shrink-0 border-r px-4 py-2 text-xs font-medium uppercase text-muted-foreground">Tarefa</div>
            <div className="flex">
              {days.map((d, i) => {
                const isToday = d.toDateString() === today.toDateString();
                const isWeekend = d.getDay() === 0 || d.getDay() === 6;
                return (
                  <div key={i} className={cn("flex flex-col items-center justify-center border-r py-1.5", isToday && "bg-primary/10", isWeekend && "bg-muted/50")} style={{ width: dayWidth }}>
                    <span className="text-[10px] text-muted-foreground">{d.toLocaleDateString("pt-PT", { weekday: "short" }).slice(0, 3)}</span>
                    <span className={cn("text-xs font-medium", isToday ? "text-primary" : "text-foreground")}>{d.getDate()}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {sorted.map((task) => {
            const start = getOffset(task.startDate!);
            const end = getOffset(task.endDate!);
            const duration = Math.max(1, end - start);
            const barColor = task.status === "done" ? "bg-success/70" : task.priority === "urgent" ? "bg-danger/80" : task.priority === "high" ? "bg-warning/80" : "bg-primary/70";
            return (
              <div key={task.id} className="flex border-b last:border-0 hover:bg-muted/20">
                <div className="w-[280px] shrink-0 border-r px-4 py-2.5 flex items-center gap-2.5">
                  <div className="min-w-0 flex-1">
                    <p className={cn("text-sm font-medium text-foreground truncate", task.status === "done" && "line-through text-muted-foreground")}>{task.title}</p>
                    <p className="text-[11px] text-muted-foreground">{task.projectName || "Projecto"}</p>
                  </div>
                </div>
                <div className="relative flex-1">
                  {days.map((d, i) => (d.getDay() === 0 || d.getDay() === 6) ? <div key={i} className="absolute top-0 bottom-0 bg-muted/30" style={{ left: i * dayWidth, width: dayWidth }} /> : null)}
                  {todayOffset >= 0 && todayOffset < totalDays && <div className="absolute top-0 bottom-0 w-px bg-primary/50" style={{ left: todayOffset * dayWidth + dayWidth / 2 }} />}
                  <div className={cn("absolute top-2 h-7 rounded-md flex items-center justify-center text-[10px] font-semibold text-white shadow-sm", barColor)} style={{ left: start * dayWidth + 4, width: Math.max(duration * dayWidth - 8, 24) }}>
                    {duration >= 3 && <span className="truncate px-1">{task.title.split("—")[0].trim()}</span>}
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

// ── Main Tasks Page ──────────────────────────────────────────

export default function Tasks() {
  const { toast } = useToast();
  const qc = useQueryClient();
  const { user } = useAuthStore();
  const [view, setView] = useState<ViewType>("list");
  const [createOpen, setCreateOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // Form
  const [fTitle, setFTitle] = useState("");
  const [fDesc, setFDesc] = useState("");
  const [fProjectId, setFProjectId] = useState("");
  const [fPriority, setFPriority] = useState<TaskPriority>("normal");
  const [fStatus, setFStatus] = useState<TaskStatus>("todo");
  const [fAssignee, setFAssignee] = useState("");
  const [fDueDate, setFDueDate] = useState("");

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

  const { data: members = [] } = useQuery({
    queryKey: ["users", user?.tenantId],
    queryFn: () => userApi.list(),
    enabled: !!user?.tenantId,
  });

  const createMutation = useMutation({
    mutationFn: (data: Record<string, unknown>) => taskApi.create(data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["tasks"] });
      toast({ title: "Tarefa criada!", description: `"${fTitle}" foi adicionada.` });
      setCreateOpen(false);
      resetForm();
    },
    onError: (err: any) => {
      toast({ title: "Erro", description: err?.message || "Não foi possível criar a tarefa.", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Record<string, unknown> }) => taskApi.update(id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const resetForm = () => {
    setFTitle(""); setFDesc(""); setFProjectId(""); setFPriority("normal"); setFStatus("todo"); setFAssignee(""); setFDueDate("");
  };

  const handleCreate = () => {
    if (!fTitle || !fProjectId) {
      toast({ title: "Erro", description: "Título e projecto são obrigatórios.", variant: "destructive" });
      return;
    }
    createMutation.mutate({
      title: fTitle,
      description: fDesc || undefined,
      projectId: fProjectId,
      priority: fPriority,
      status: fStatus,
      assigneeId: fAssignee || undefined,
      dueDate: fDueDate || undefined,
    });
  };

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border bg-card p-12 shadow-sm">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">Erro ao carregar tarefas</h3>
        <Button variant="outline" className="mt-4 gap-2" onClick={() => refetch()}><RefreshCw className="h-4 w-4" /> Tentar novamente</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* View Tabs + Create */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1 rounded-lg bg-muted p-1">
          {viewTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button key={tab.id} onClick={() => setView(tab.id)} className={cn("flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors", view === tab.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
                <Icon className="h-4 w-4" /> {tab.label}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 md:flex">
            {kanbanColumns.map((col) => {
              const count = tasks.filter((t) => t.status === col).length;
              const status = statusConfig[col];
              return (
                <div key={col} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className={cn("h-2 w-2 rounded-full", status.color)} />
                  {status.label}: <span className="font-semibold text-foreground">{count}</span>
                </div>
              );
            })}
          </div>
          <Button size="sm" className="gap-1.5" onClick={() => setCreateOpen(true)}>
            <Plus className="h-4 w-4" /> Nova Tarefa
          </Button>
        </div>
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-32 rounded-xl" />)}
        </div>
      ) : tasks.length === 0 ? (
        <div className="rounded-xl border bg-card p-12 text-center shadow-sm">
          <Flag className="mx-auto h-10 w-10 text-muted-foreground/40" />
          <p className="mt-3 text-sm text-muted-foreground">Sem tarefas criadas</p>
          <Button size="sm" className="mt-4 gap-1.5" onClick={() => setCreateOpen(true)}>
            <Plus className="h-4 w-4" /> Criar primeira tarefa
          </Button>
        </div>
      ) : (
        <>
          {view === "list" && <ListView tasks={tasks} onClickTask={(t) => { setSelectedTask(t); setDetailOpen(true); }} />}
          {view === "kanban" && <KanbanView tasks={tasks} onClickTask={(t) => { setSelectedTask(t); setDetailOpen(true); }} onUpdateStatus={(id, status) => updateMutation.mutate({ id, data: { status } })} />}
          {view === "gantt" && <GanttView tasks={tasks} />}
        </>
      )}

      {/* Modal: Criar Tarefa */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2"><Plus className="h-5 w-5 text-primary" /> Nova Tarefa</DialogTitle>
            <DialogDescription>Crie uma nova tarefa e atribua a um membro da equipa.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="task-title">Título *</Label>
              <Input id="task-title" placeholder="Ex: Inspecção do terreno" value={fTitle} onChange={(e) => setFTitle(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="task-desc">Descrição</Label>
              <Textarea id="task-desc" placeholder="Detalhes..." value={fDesc} onChange={(e) => setFDesc(e.target.value)} rows={2} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Projecto *</Label>
                <Select value={fProjectId} onValueChange={setFProjectId}>
                  <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    {projects.map((p) => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Prioridade</Label>
                <Select value={fPriority} onValueChange={(v) => setFPriority(v as TaskPriority)}>
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
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={fStatus} onValueChange={(v) => setFStatus(v as TaskStatus)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todo">A Fazer</SelectItem>
                    <SelectItem value="in_progress">Em Progresso</SelectItem>
                    <SelectItem value="review">Revisão</SelectItem>
                    <SelectItem value="done">Concluída</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="task-due">Prazo</Label>
                <Input id="task-due" type="date" value={fDueDate} onChange={(e) => setFDueDate(e.target.value)} />
              </div>
            <div className="space-y-2">
              <Label>Atribuir a (responsável)</Label>
              <Select value={fAssignee} onValueChange={setFAssignee}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar responsável" />
                </SelectTrigger>
                <SelectContent>
                  {members.length === 0 && (
                    <SelectItem value="none" disabled>Sem membros disponíveis</SelectItem>
                  )}
                  {members.map((m) => (
                    <SelectItem key={m.id} value={m.id}>
                      {m.fullName} {m.email ? `· ${m.email}` : ""}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-[11px] text-muted-foreground">Pessoa responsável por tratar desta tarefa.</p>
            </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setCreateOpen(false); resetForm(); }}>Cancelar</Button>
            <Button onClick={handleCreate} disabled={createMutation.isPending} className="gap-1.5">
              {createMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />} Criar Tarefa
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Detalhe */}
      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="sm:max-w-md">
          {selectedTask && (() => {
            const pri = priorityConfig[selectedTask.priority] || priorityConfig.normal;
            const PriIcon = pri.icon;
            const sts = statusConfig[selectedTask.status];
            return (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-muted-foreground">{selectedTask.projectName || "Projecto"}</span>
                    <span className={cn("ml-auto flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold", pri.style)}>
                      <PriIcon className="h-3 w-3" /> {pri.label}
                    </span>
                  </div>
                  <DialogTitle>{selectedTask.title}</DialogTitle>
                  {selectedTask.description && <DialogDescription>{selectedTask.description}</DialogDescription>}
                </DialogHeader>
                <div className="space-y-3 py-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-[10px] text-muted-foreground mb-1">Status</p>
                      <div className="flex items-center gap-1.5">
                        <span className={cn("h-2 w-2 rounded-full", sts.color)} />
                        <span className="text-sm font-medium text-foreground">{sts.label}</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-[10px] text-muted-foreground mb-1">Prazo</p>
                      <span className="text-sm font-medium text-foreground">
                        {selectedTask.dueDate ? new Date(selectedTask.dueDate).toLocaleDateString("pt-PT") : "Sem prazo"}
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-[10px] text-muted-foreground mb-1">Atribuído a</p>
                    <span className="text-sm font-medium text-foreground">{selectedTask.assigneeName || "Não atribuído"}</span>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setDetailOpen(false)}>Fechar</Button>
                </DialogFooter>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
}
