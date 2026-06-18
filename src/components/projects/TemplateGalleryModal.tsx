import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Sparkles, ArrowRight, ArrowLeft, Clock, Users, Target,
  CheckCircle2, X, Radio, HardHat, Flame, Code, Stethoscope,
  GraduationCap, Landmark, ShoppingBag, Truck, Sprout, Megaphone,
  Scale, Film, Zap, Factory, Hotel, Briefcase, FlaskConical,
  Building2, FolderKanban, Plus, Trash2, type LucideIcon,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { PROJECT_TEMPLATES, INDUSTRIES } from "@/data/projectTemplates";
import type { ProjectTemplate, TemplateTask } from "@/lib/types";
import { useProjectsStore } from "@/store/projects.store";
import { projectApi } from "@/lib/api";

const ICONS: Record<string, LucideIcon> = {
  Radio, HardHat, Flame, Code, Stethoscope, GraduationCap, Landmark,
  ShoppingBag, Truck, Sprout, Megaphone, Users, Scale, Film, Zap,
  Factory, Hotel, Briefcase, FlaskConical, Building2, FolderKanban,
};

type Step = "gallery" | "configure" | "tasks";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreated?: (projectId: string) => void;
}

export default function TemplateGalleryModal({ open, onOpenChange, onCreated }: Props) {
  const { toast } = useToast();
  const createFromTemplate = useProjectsStore((s) => s.createFromTemplate);

  const [step, setStep] = useState<Step>("gallery");
  const [industry, setIndustry] = useState("Todas");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ProjectTemplate | null>(null);
  const [loading, setLoading] = useState(false);

  // Step 2 — configuração
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectDeadline, setProjectDeadline] = useState("");
  const [methodology, setMethodology] = useState("");

  // Step 3 — tarefas editáveis
  const [tasks, setTasks] = useState<TemplateTask[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECT_TEMPLATES.filter((t) => {
      if (industry !== "Todas" && t.industry !== industry) return false;
      if (q && !`${t.name} ${t.description}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [industry, query]);

  const handleSelectTemplate = (t: ProjectTemplate) => {
    setSelected(t);
    setProjectName(t.name);
    setProjectDesc(t.description);
    setMethodology(t.methodology);
    setTasks(t.tasks.map((tk) => ({ ...tk })));
    setStep("configure");
  };

  const handleToTasks = () => {
    if (!projectName.trim()) return;
    setStep("tasks");
  };

  const handleAddTask = () => {
    setTasks((prev) => [
      ...prev,
      { title: "", phase: selected?.phases[0] ?? "", priority: "normal", estimatedDays: 1 },
    ]);
  };

  const handleRemoveTask = (i: number) => setTasks((prev) => prev.filter((_, idx) => idx !== i));

  const handleTaskChange = (i: number, field: keyof TemplateTask, value: string | number) => {
    setTasks((prev) => prev.map((t, idx) => idx === i ? { ...t, [field]: value } : t));
  };

  const handleCreate = async () => {
    if (!selected || !projectName.trim()) return;
    setLoading(true);
    try {
      const res = await projectApi.create({
        name: projectName.trim(),
        description: projectDesc.trim() || undefined,
        deadline: projectDeadline || undefined,
        templateId: selected.id,
        industry: selected.industry,
        methodology,
        phases: selected.phases,
        tasks: tasks.filter((t) => t.title.trim()),
      });
      const projectId = (res as any)?.id;
      toast({ title: "Projeto criado!", description: `${projectName} criado com ${tasks.length} tarefas.` });
      handleClose();
      onCreated?.(projectId);
    } catch {
      // fallback local
      const p = createFromTemplate({
        template: { ...selected!, tasks, methodology: methodology as any },
        name: projectName.trim(),
        description: projectDesc.trim() || undefined,
        deadline: projectDeadline || undefined,
      });
      toast({ title: "Guardado localmente", description: "Será sincronizado quando a ligação for restaurada.", variant: "destructive" });
      handleClose();
      onCreated?.(p.id);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep("gallery");
      setSelected(null);
      setProjectName("");
      setProjectDesc("");
      setProjectDeadline("");
      setMethodology("");
      setTasks([]);
      setQuery("");
      setIndustry("Todas");
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[1100px] h-[90vh] p-0 overflow-hidden border-border/60 [&>button]:hidden">
        <AnimatePresence mode="wait">

          {/* ═══════════════ STEP 1 — GALERIA ═══════════════ */}
          {step === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -40 }}
              className="flex h-full"
            >
              {/* Sidebar indústrias */}
              <div className="w-56 border-r border-border/60 bg-muted/30 flex flex-col h-full">
                <div className="px-4 py-4 border-b border-border/60 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Templates</p>
                      <p className="text-[11px] text-muted-foreground">{PROJECT_TEMPLATES.length} disponíveis</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-2">
                  {["Todas", ...INDUSTRIES].map((ind) => {
                    const count = ind === "Todas"
                      ? PROJECT_TEMPLATES.length
                      : PROJECT_TEMPLATES.filter((t) => t.industry === ind).length;
                    return (
                      <button
                        key={ind}
                        onClick={() => setIndustry(ind)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition-all mb-0.5",
                          industry === ind
                            ? "bg-primary/15 text-foreground font-medium"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        )}
                      >
                        <span className="truncate">{ind}</span>
                        <span className="text-[10px] font-mono text-muted-foreground/60">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grid de templates */}
              <div className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 border-b border-border/60 flex items-center justify-between gap-4 shrink-0">
                  <div>
                    <h2 className="text-xl font-bold">Galeria de Templates</h2>
                    <p className="text-xs text-muted-foreground">Escolha o template ideal para o seu sector</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Buscar template…"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                    <Button variant="ghost" size="icon" onClick={handleClose}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Cards — scroll aqui */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
                    {filtered.map((t) => {
                      const Icon = ICONS[t.icon] ?? FolderKanban;
                      return (
                        <button
                          key={t.id}
                          onClick={() => handleSelectTemplate(t)}
                          className="text-left p-4 rounded-xl border border-border/60 bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-sm leading-snug line-clamp-2">{t.name}</p>
                              <p className="text-[11px] text-muted-foreground mt-0.5">{t.industry}</p>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{t.description}</p>
                          <div className="flex items-center gap-3 mt-3 text-[10px] text-muted-foreground">
                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{t.durationWeeks}s</span>
                            <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3" />{t.tasks.length} tarefas</span>
                            <span className="flex items-center gap-1"><Users className="h-3 w-3" />{t.teamSize}</span>
                          </div>
                        </button>
                      );
                    })}
                    {filtered.length === 0 && (
                      <div className="col-span-full text-center py-20 text-muted-foreground">
                        Nenhum template encontrado.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ═══════════════ STEP 2 — CONFIGURAR ═══════════════ */}
          {step === "configure" && selected && (
            <motion.div
              key="configure"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="flex flex-col h-full"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-border/60 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" onClick={() => setStep("gallery")}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <div>
                    <p className="text-xs text-muted-foreground">Passo 1 de 2</p>
                    <h2 className="text-lg font-bold">Configurar projecto</h2>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-primary border-primary/40">{selected.industry}</Badge>
                  <Button variant="ghost" size="icon" onClick={handleClose}><X className="h-4 w-4" /></Button>
                </div>
              </div>

              <div className="flex flex-1 overflow-hidden">
                {/* Formulário */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="max-w-xl space-y-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="p-name">Nome do projecto *</Label>
                      <Input
                        id="p-name"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="Ex: Rollout Telecom Angola 2025"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="p-desc">Descrição</Label>
                      <Textarea
                        id="p-desc"
                        rows={4}
                        value={projectDesc}
                        onChange={(e) => setProjectDesc(e.target.value)}
                        placeholder="Descreva o objectivo do projecto…"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="p-deadline">Prazo final</Label>
                        <Input
                          id="p-deadline"
                          type="date"
                          value={projectDeadline}
                          onChange={(e) => setProjectDeadline(e.target.value)}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Metodologia</Label>
                        <Select value={methodology} onValueChange={setMethodology}>
                          <SelectTrigger>
                            <SelectValue placeholder="Escolha…" />
                          </SelectTrigger>
                          <SelectContent>
                            {["Scrum", "Kanban", "Waterfall", "PRINCE2", "Lean", "Agile"].map((m) => (
                              <SelectItem key={m} value={m}>{m}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Fases */}
                    <div className="space-y-1.5">
                      <Label>Fases do projecto</Label>
                      <div className="flex flex-wrap gap-1.5">
                        {selected.phases.map((p) => (
                          <Badge key={p} variant="secondary">{p}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* KPIs */}
                    <div className="space-y-1.5">
                      <Label>KPIs sugeridos</Label>
                      <div className="flex flex-wrap gap-1.5">
                        {selected.kpis.map((k) => (
                          <Badge key={k} variant="outline" className="text-[11px]">
                            <Target className="h-2.5 w-2.5 mr-1" />{k}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preview lateral */}
                <div className="w-72 border-l border-border/60 bg-muted/20 overflow-y-auto p-4 shrink-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Boas práticas
                  </p>
                  <ul className="space-y-2">
                    {selected.bestPractices.map((b, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex gap-2">
                        <Sparkles className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-border/60 flex justify-end shrink-0">
                <Button
                  onClick={handleToTasks}
                  disabled={!projectName.trim()}
                  className="gap-2 bg-primary"
                >
                  Configurar tarefas <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* ═══════════════ STEP 3 — TAREFAS ═══════════════ */}
          {step === "tasks" && selected && (
            <motion.div
              key="tasks"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col h-full"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-border/60 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" onClick={() => setStep("configure")}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <div>
                    <p className="text-xs text-muted-foreground">Passo 2 de 2 — {projectName}</p>
                    <h2 className="text-lg font-bold">Tarefas do projecto</h2>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{tasks.filter(t => t.title.trim()).length} tarefas</span>
                  <Button variant="ghost" size="icon" onClick={handleClose}><X className="h-4 w-4" /></Button>
                </div>
              </div>

              {/* Lista de tarefas */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-2 max-w-3xl">
                  {tasks.map((task, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border/60 bg-card">
                      <div className="flex-1 grid grid-cols-12 gap-2 items-center">
                        <Input
                          className="col-span-5 h-8 text-sm"
                          placeholder="Nome da tarefa"
                          value={task.title}
                          onChange={(e) => handleTaskChange(i, "title", e.target.value)}
                        />
                        <Select
                          value={task.phase}
                          onValueChange={(v) => handleTaskChange(i, "phase", v)}
                        >
                          <SelectTrigger className="col-span-3 h-8 text-xs">
                            <SelectValue placeholder="Fase" />
                          </SelectTrigger>
                          <SelectContent>
                            {selected.phases.map((p) => (
                              <SelectItem key={p} value={p}>{p}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select
                          value={task.priority}
                          onValueChange={(v) => handleTaskChange(i, "priority", v)}
                        >
                          <SelectTrigger className="col-span-2 h-8 text-xs">
                            <SelectValue placeholder="Prioridade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Baixa</SelectItem>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="high">Alta</SelectItem>
                            <SelectItem value="urgent">Urgente</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          className="col-span-2 h-8 text-xs"
                          type="number"
                          min={1}
                          placeholder="Dias"
                          value={task.estimatedDays}
                          onChange={(e) => handleTaskChange(i, "estimatedDays", Number(e.target.value))}
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
                        onClick={() => handleRemoveTask(i)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  ))}

                  <Button variant="outline" size="sm" onClick={handleAddTask} className="w-full gap-2 border-dashed">
                    <Plus className="h-4 w-4" /> Adicionar tarefa
                  </Button>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-border/60 flex justify-between items-center shrink-0">
                <p className="text-xs text-muted-foreground">
                  Pode editar as tarefas depois de criar o projecto.
                </p>
                <Button onClick={handleCreate} disabled={loading || !projectName.trim()} className="gap-2 bg-primary">
                  {loading
                    ? <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    : <Sparkles className="h-4 w-4" />
                  }
                  Criar projecto
                </Button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
