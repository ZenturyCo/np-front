import { useState } from "react";
import { motion } from "framer-motion";
import {
  X, Layout, ListChecks, Users, Settings as SettingsIcon, Sparkles,
  Calendar, Target, Clock, CheckCircle2, Circle, Trash2, UserPlus, Plus,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useProjectsStore, uid } from "@/store/projects.store";
import type { LocalProject, ProjectTask, ProjectStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Props {
  project: LocalProject | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const STATUS_CHIP: Record<ProjectStatus, string> = {
  "Planejamento": "bg-blue-500/15 text-blue-300 border-blue-500/30",
  "Em curso": "bg-primary/15 text-primary border-primary/30",
  "Em pausa": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "Concluído": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "Atrasado": "bg-red-500/15 text-red-300 border-red-500/30",
};

const PRIORITY_CHIP: Record<string, string> = {
  urgent: "bg-red-500/15 text-red-300",
  high: "bg-amber-500/15 text-amber-300",
  normal: "bg-blue-500/15 text-blue-300",
  low: "bg-muted text-muted-foreground",
};

export default function ProjectDetailModal({ project, open, onOpenChange }: Props) {
  const { toast } = useToast();
  const update = useProjectsStore((s) => s.update);
  const remove = useProjectsStore((s) => s.remove);
  const addTask = useProjectsStore((s) => s.addTask);
  const updateTask = useProjectsStore((s) => s.updateTask);
  const addMember = useProjectsStore((s) => s.addMember);
  const removeMember = useProjectsStore((s) => s.removeMember);

  const [newTask, setNewTask] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberRole, setMemberRole] = useState("Member");

  if (!project) return null;

  const live = project;
  const tasksByPhase = live.phases.reduce<Record<string, ProjectTask[]>>((acc, ph) => {
    acc[ph] = live.tasks.filter((t) => t.phase === ph);
    return acc;
  }, {});

  const toggleTask = (t: ProjectTask) => {
    updateTask(live.id, t.id, { status: t.status === "done" ? "todo" : "done" });
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    addTask(live.id, {
      id: uid("task"),
      title: newTask.trim(),
      priority: "normal",
      estimatedDays: 3,
      phase: live.phases[0] ?? "Geral",
      status: "todo",
    });
    setNewTask("");
  };

  const handleAddMember = () => {
    if (!memberName.trim()) return;
    addMember(live.id, { id: uid("usr"), name: memberName.trim(), role: memberRole });
    setMemberName("");
    toast({ title: "Membro adicionado" });
  };

  const handleDelete = () => {
    remove(live.id);
    onOpenChange(false);
    toast({ title: "Projeto removido", variant: "destructive" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[1100px] h-[88vh] p-0 overflow-hidden border-border/60 glass-strong [&>button]:hidden">
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="px-7 py-5 border-b border-border/60 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
            <div className="relative flex items-start justify-between gap-6">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className={cn("border", STATUS_CHIP[live.status])}>{live.status}</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">{live.methodology}</Badge>
                  <span className="text-[11px] text-muted-foreground">· {live.industry}</span>
                </div>
                <h2 className="font-display font-bold text-2xl">{live.name}</h2>
                {live.description && <p className="text-sm text-muted-foreground mt-1 max-w-2xl">{live.description}</p>}
              </div>
              <div className="text-right shrink-0">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Progresso</p>
                <p className="font-display text-3xl font-bold text-gradient">{live.progress}%</p>
              </div>
            </div>
            <div className="mt-4 max-w-2xl">
              <Progress value={live.progress} className="h-1.5" />
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-surface-elevated hover:bg-primary/20 flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="flex-1 flex flex-col overflow-hidden">
            <TabsList className="rounded-none border-b border-border/60 bg-transparent justify-start px-6 h-12 shrink-0">
              <TabsTrigger value="overview" className="gap-1.5 data-[state=active]:text-primary"><Layout className="h-4 w-4" /> Visão geral</TabsTrigger>
              <TabsTrigger value="tasks" className="gap-1.5"><ListChecks className="h-4 w-4" /> Tarefas <span className="ml-1 text-[10px] text-muted-foreground">{live.tasks.length}</span></TabsTrigger>
              <TabsTrigger value="team" className="gap-1.5"><Users className="h-4 w-4" /> Equipa <span className="ml-1 text-[10px] text-muted-foreground">{live.team.length}</span></TabsTrigger>
              <TabsTrigger value="settings" className="gap-1.5"><SettingsIcon className="h-4 w-4" /> Configurações</TabsTrigger>
            </TabsList>

            {/* OVERVIEW */}
            <TabsContent value="overview" className="flex-1 overflow-auto m-0 p-7 space-y-6">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: "Tarefas", value: live.tasks.length, icon: ListChecks },
                  { label: "Concluídas", value: live.tasks.filter((t) => t.status === "done").length, icon: CheckCircle2 },
                  { label: "Equipa", value: live.team.length, icon: Users },
                  { label: "Prazo", value: live.deadline ?? "—", icon: Calendar },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-gradient-card border border-border/60 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
                      <s.icon className="h-4 w-4 text-primary/70" />
                    </div>
                    <p className="font-display text-xl font-bold mt-1">{s.value}</p>
                  </div>
                ))}
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-5">
                <div className="rounded-xl border border-border/60 bg-surface/50 p-5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-primary" /> Template aplicado
                  </p>
                  <p className="font-semibold">{live.templateName}</p>
                  <p className="text-xs text-muted-foreground mt-1">Metodologia: {live.methodology}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {live.phases.map((p) => (
                      <Badge key={p} variant="secondary" className="text-[10px]">{p}</Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-surface/50 p-5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <Target className="h-3.5 w-3.5 text-primary" /> KPIs do projeto
                  </p>
                  <ul className="space-y-1.5">
                    {live.kpis.map((k) => (
                      <li key={k} className="text-sm flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-border/60 bg-surface/50 p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-primary" /> Boas práticas
                </p>
                <div className="grid md:grid-cols-2 gap-2">
                  {live.bestPractices.map((b, i) => (
                    <div key={i} className="text-sm flex gap-2 p-2 rounded-md bg-surface-elevated/60">
                      <Sparkles className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* TASKS */}
            <TabsContent value="tasks" className="flex-1 overflow-auto m-0 p-7 space-y-5">
              <div className="flex gap-2">
                <Input
                  placeholder="Adicionar nova tarefa…"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
                  className="bg-surface border-border/60"
                />
                <Button onClick={handleAddTask} className="gap-1.5 bg-gradient-primary"><Plus className="h-4 w-4" /> Adicionar</Button>
              </div>

              <div className="space-y-5">
                {live.phases.map((phase) => {
                  const phaseTasks = tasksByPhase[phase] ?? [];
                  if (!phaseTasks.length) return null;
                  return (
                    <div key={phase}>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-display font-semibold text-sm">{phase}</h4>
                        <span className="text-[10px] text-muted-foreground">{phaseTasks.length}</span>
                      </div>
                      <div className="space-y-1.5">
                        {phaseTasks.map((t) => (
                          <motion.div
                            key={t.id}
                            layout
                            className={cn(
                              "group flex items-center gap-3 p-3 rounded-lg border border-border/60 bg-surface/40 hover:bg-surface-elevated/60 transition-colors",
                              t.status === "done" && "opacity-60"
                            )}
                          >
                            <button onClick={() => toggleTask(t)} className="shrink-0">
                              {t.status === "done"
                                ? <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                                : <Circle className="h-5 w-5 text-muted-foreground hover:text-primary" />}
                            </button>
                            <div className="flex-1 min-w-0">
                              <p className={cn("text-sm font-medium", t.status === "done" && "line-through")}>{t.title}</p>
                              {t.description && <p className="text-xs text-muted-foreground truncate">{t.description}</p>}
                            </div>
                            <Badge variant="secondary" className={cn("text-[10px]", PRIORITY_CHIP[t.priority])}>{t.priority}</Badge>
                            <span className="text-[10px] text-muted-foreground flex items-center gap-1 shrink-0">
                              <Clock className="h-3 w-3" />{t.estimatedDays}d
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/* TEAM */}
            <TabsContent value="team" className="flex-1 overflow-auto m-0 p-7 space-y-5">
              <div className="flex gap-2">
                <Input placeholder="Nome do membro" value={memberName} onChange={(e) => setMemberName(e.target.value)} className="bg-surface border-border/60" />
                <Select value={memberRole} onValueChange={setMemberRole}>
                  <SelectTrigger className="w-40 bg-surface border-border/60"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Owner">Owner</SelectItem>
                    <SelectItem value="Manager">Manager</SelectItem>
                    <SelectItem value="Member">Member</SelectItem>
                    <SelectItem value="Viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={handleAddMember} className="gap-1.5 bg-gradient-primary"><UserPlus className="h-4 w-4" /> Adicionar</Button>
              </div>

              {live.team.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground border border-dashed border-border/60 rounded-xl">
                  Nenhum membro ainda. Adicione pessoas para colaborar.
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-2">
                  {live.team.map((m) => (
                    <div key={m.id} className="flex items-center gap-3 p-3 rounded-lg border border-border/60 bg-surface/40">
                      <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold text-sm">
                        {m.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{m.name}</p>
                        <p className="text-xs text-muted-foreground">{m.role}</p>
                      </div>
                      <Button size="icon" variant="ghost" onClick={() => removeMember(live.id, m.id)}>
                        <Trash2 className="h-4 w-4 text-muted-foreground hover:text-red-400" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* SETTINGS */}
            <TabsContent value="settings" className="flex-1 overflow-auto m-0 p-7 space-y-5 max-w-2xl">
              <div className="space-y-2">
                <Label>Nome do projeto</Label>
                <Input value={live.name} onChange={(e) => update(live.id, { name: e.target.value })} className="bg-surface border-border/60" />
              </div>
              <div className="space-y-2">
                <Label>Descrição</Label>
                <Textarea rows={4} value={live.description ?? ""} onChange={(e) => update(live.id, { description: e.target.value })} className="bg-surface border-border/60" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select value={live.status} onValueChange={(v) => update(live.id, { status: v as ProjectStatus })}>
                    <SelectTrigger className="bg-surface border-border/60"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {(["Planejamento", "Em curso", "Em pausa", "Concluído", "Atrasado"] as ProjectStatus[]).map((s) =>
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Prazo</Label>
                  <Input type="date" value={live.deadline ?? ""} onChange={(e) => update(live.id, { deadline: e.target.value })} className="bg-surface border-border/60" />
                </div>
              </div>

              <div className="pt-6 border-t border-border/60">
                <p className="text-sm font-semibold text-red-400 mb-2">Zona de perigo</p>
                <Button variant="outline" onClick={handleDelete} className="gap-2 border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300">
                  <Trash2 className="h-4 w-4" /> Excluir projeto
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
