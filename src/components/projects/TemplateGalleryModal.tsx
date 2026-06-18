import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Sparkles, ArrowRight, Clock, Users, Target, CheckCircle2, X,
  Radio, HardHat, Flame, Code, Stethoscope, GraduationCap, Landmark, ShoppingBag,
  Truck, Sprout, Megaphone, Scale, Film, Zap, Factory, Hotel, Briefcase,
  FlaskConical, Building2, FolderKanban, type LucideIcon,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { PROJECT_TEMPLATES, INDUSTRIES } from "@/data/projectTemplates";
import type { ProjectTemplate } from "@/lib/types";
import { useProjectsStore } from "@/store/projects.store";
import { projectApi } from "@/lib/api";

const ICONS: Record<string, LucideIcon> = {
  Radio, HardHat, Flame, Code, Stethoscope, GraduationCap, Landmark,
  ShoppingBag, Truck, Sprout, Megaphone, Users, Scale, Film, Zap, Factory,
  Hotel, Briefcase, FlaskConical, Building2, FolderKanban,
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreated?: (projectId: string) => void;
}

export default function TemplateGalleryModal({ open, onOpenChange, onCreated }: Props) {
  const { toast } = useToast();
  const createFromTemplate = useProjectsStore((s) => s.createFromTemplate);
  const [industry, setIndustry] = useState<string>("Todas");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ProjectTemplate | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectDeadline, setProjectDeadline] = useState("");
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECT_TEMPLATES.filter((t) => {
      if (industry !== "Todas" && t.industry !== industry) return false;
      if (q && !`${t.name} ${t.description}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [industry, query]);

  const handleUseTemplate = () => {
    if (!selected) return;
    setProjectName(selected.name);
    setProjectDesc(selected.description);
    setConfirmOpen(true);
  };

  const handleConfirm = async () => {
    if (!selected || !projectName.trim()) return;
    setLoading(true);
    try {
      // Tenta criar na API primeiro
      const res = await projectApi.create({
        name: projectName.trim(),
        description: projectDesc.trim() || undefined,
        deadline: projectDeadline || undefined,
        templateId: selected.id,
        industry: selected.industry,
        methodology: selected.methodology,
        phases: selected.phases,
        tasks: selected.tasks,
      });
      const projectId = (res as any)?.id;
      toast({
        title: "Projeto criado!",
        description: `${projectName} foi criado com ${selected.tasks.length} tarefas pré-configuradas.`,
      });
      setConfirmOpen(false);
      onOpenChange(false);
      onCreated?.(projectId);
    } catch (err: any) {
      // Se a API falhar, guarda localmente como fallback
      const p = createFromTemplate({
        template: selected,
        name: projectName.trim(),
        description: projectDesc.trim() || undefined,
        deadline: projectDeadline || undefined,
      });
      toast({
        title: "Projeto criado localmente",
        description: `${p.name} foi guardado com ${p.tasks.length} tarefas. Será sincronizado quando a ligação for restaurada.`,
        variant: "destructive",
      });
      setConfirmOpen(false);
      onOpenChange(false);
      onCreated?.(p.id);
    } finally {
      setLoading(false);
      setSelected(null);
      setProjectName("");
      setProjectDesc("");
      setProjectDeadline("");
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        {/* [&>button]:hidden esconde o X automático do shadcn para usarmos o nosso dentro do grid */}
        <DialogContent className="max-w-[1200px] h-[88vh] p-0 overflow-hidden border-border/60 glass-strong [&>button]:hidden">
          <div className="grid h-full grid-cols-[260px_1fr_400px] relative">

            {/* Botão fechar — dentro do grid, posicionado absolutamente */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 z-50 h-8 w-8 rounded-full bg-surface-elevated hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Sidebar — industries */}
            <aside className="border-r border-border/60 bg-surface/60 flex flex-col min-h-0">
              <div className="px-5 py-5 border-b border-border/60 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm">Templates</p>
                    <p className="text-[11px] text-muted-foreground">{PROJECT_TEMPLATES.length} disponíveis</p>
                  </div>
                </div>
              </div>
              <ScrollArea className="flex-1">
                <div className="p-2">
                  {["Todas", ...INDUSTRIES].map((ind) => {
                    const count = ind === "Todas"
                      ? PROJECT_TEMPLATES.length
                      : PROJECT_TEMPLATES.filter((t) => t.industry === ind).length;
                    const active = industry === ind;
                    return (
                      <button
                        key={ind}
                        onClick={() => setIndustry(ind)}
                        className={cn(
                          "w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center justify-between transition-all",
                          active
                            ? "bg-primary/15 text-foreground ring-1 ring-primary/30"
                            : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                        )}
                      >
                        <span className="truncate">{ind}</span>
                        <span className={cn("text-[10px] font-mono", active ? "text-primary" : "text-muted-foreground/60")}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </ScrollArea>
            </aside>

            {/* Grid de templates */}
            <div className="flex flex-col min-h-0 overflow-hidden">
              <div className="px-6 py-5 border-b border-border/60 flex items-center justify-between gap-4 shrink-0">
                <div>
                  <h2 className="font-display text-xl font-bold">Galeria de Templates</h2>
                  <p className="text-xs text-muted-foreground">
                    Comece com o template ideal para o seu setor — tarefas, fases e boas práticas prontas.
                  </p>
                </div>
                <div className="relative w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar template…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-9 bg-surface border-border/60"
                  />
                </div>
              </div>
              <ScrollArea className="flex-1">
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((t, i) => {
                      const Icon = ICONS[t.icon] ?? FolderKanban;
                      const isSelected = selected?.id === t.id;
                      return (
                        <motion.button
                          key={t.id}
                          layout
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.18, delay: Math.min(i, 8) * 0.015 }}
                          onClick={() => setSelected(t)}
                          className={cn(
                            "text-left p-4 rounded-xl border transition-all hover-lift relative overflow-hidden group",
                            isSelected
                              ? "border-primary/60 bg-primary/8 ring-1 ring-primary/40"
                              : "border-border/60 bg-gradient-card hover:border-primary/40"
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <div className={cn(
                              "h-10 w-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                              isSelected ? "bg-gradient-primary text-white" : "bg-surface-elevated text-primary group-hover:bg-primary/15"
                            )}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-sm leading-snug line-clamp-2">{t.name}</p>
                              <p className="text-[11px] text-muted-foreground mt-0.5">{t.industry}</p>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-3 line-clamp-2">{t.description}</p>
                          <div className="flex items-center gap-3 mt-3 text-[10px] text-muted-foreground">
                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{t.durationWeeks}w</span>
                            <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3" />{t.tasks.length} tarefas</span>
                            <span className="flex items-center gap-1"><Users className="h-3 w-3" />{t.teamSize}</span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </AnimatePresence>
                  {filtered.length === 0 && (
                    <div className="col-span-full text-center py-16 text-muted-foreground">
                      Nenhum template corresponde aos filtros.
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>

            {/* Preview */}
            <aside className="border-l border-border/60 bg-surface/40 flex flex-col min-h-0 overflow-hidden">
              {selected ? (
                <>
                  <div className="px-6 py-5 border-b border-border/60 shrink-0">
                    <Badge variant="outline" className="mb-2 border-primary/40 text-primary text-[10px]">
                      {selected.methodology}
                    </Badge>
                    <h3 className="font-display font-bold text-lg leading-tight">{selected.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{selected.industry}</p>
                  </div>
                  <ScrollArea className="flex-1">
                    <div className="px-6 py-4 space-y-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{selected.description}</p>

                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground/70 font-semibold mb-2">Fases</p>
                        <div className="flex flex-wrap gap-1.5">
                          {selected.phases.map((p) => (
                            <Badge key={p} variant="secondary" className="text-[10px]">{p}</Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground/70 font-semibold mb-2">
                          Tarefas pré-configuradas ({selected.tasks.length})
                        </p>
                        <div className="space-y-1.5">
                          {selected.tasks.slice(0, 6).map((t, i) => (
                            <div key={i} className="text-xs flex items-start gap-2 p-2 rounded-md bg-surface-elevated/60">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              <div className="min-w-0">
                                <p className="font-medium truncate">{t.title}</p>
                                <p className="text-muted-foreground/70 text-[10px]">{t.phase} · {t.estimatedDays}d</p>
                              </div>
                            </div>
                          ))}
                          {selected.tasks.length > 6 && (
                            <p className="text-[10px] text-muted-foreground pl-2">+ {selected.tasks.length - 6} mais…</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground/70 font-semibold mb-2">Boas práticas</p>
                        <ul className="space-y-1.5">
                          {selected.bestPractices.slice(0, 3).map((b, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex gap-2">
                              <Sparkles className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground/70 font-semibold mb-2">KPIs sugeridos</p>
                        <div className="flex flex-wrap gap-1.5">
                          {selected.kpis.map((k) => (
                            <Badge key={k} variant="outline" className="text-[10px] border-border/60">
                              <Target className="h-2.5 w-2.5 mr-1" />{k}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                  <div className="p-4 border-t border-border/60 shrink-0">
                    <Button onClick={handleUseTemplate} className="w-full gap-2 bg-gradient-primary hover:opacity-90 shadow-glow">
                      Usar este template <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-7 w-7 text-primary" />
                  </div>
                  <p className="font-display font-semibold">Selecione um template</p>
                  <p className="text-xs text-muted-foreground mt-1 max-w-[240px]">
                    Veja fases, tarefas, boas práticas e KPIs antes de criar o projeto.
                  </p>
                </div>
              )}
            </aside>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de confirmação */}
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent className="max-w-md">
          <div className="space-y-1 mb-2">
            <h3 className="font-display text-lg font-bold">Criar projeto</h3>
            <p className="text-xs text-muted-foreground">
              Baseado em <span className="text-primary">{selected?.name}</span>
            </p>
          </div>
          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label htmlFor="np-name">Nome do projeto *</Label>
              <Input id="np-name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="np-desc">Descrição</Label>
              <Textarea id="np-desc" rows={3} value={projectDesc} onChange={(e) => setProjectDesc(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="np-dl">Prazo final</Label>
              <Input id="np-dl" type="date" value={projectDeadline} onChange={(e) => setProjectDeadline(e.target.value)} />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setConfirmOpen(false)} disabled={loading}>
              Cancelar
            </Button>
            <Button onClick={handleConfirm} className="bg-gradient-primary gap-2" disabled={loading || !projectName.trim()}>
              {loading ? (
                <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Sparkles className="h-4 w-4" />
              )}
              Criar projeto
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
