import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, FolderKanban, Sparkles, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useProjectsStore } from "@/store/projects.store";
import { INDUSTRIES } from "@/data/projectTemplates";
import TemplateGalleryModal from "@/components/projects/TemplateGalleryModal";
import ProjectDetailModal from "@/components/projects/ProjectDetailModal";
import ProjectCard from "@/components/projects/ProjectCard";
import type { LocalProject } from "@/lib/types";

export default function Projects() {
  const projects = useProjectsStore((s) => s.projects);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [detail, setDetail] = useState<LocalProject | null>(null);
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState<string>("Todas");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (industry !== "Todas" && p.industry !== industry) return false;
      if (q && !`${p.name} ${p.templateName}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [projects, query, industry]);

  // Refresh detail with latest store data when modal open
  const detailLive = detail ? projects.find((p) => p.id === detail.id) ?? null : null;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero header */}
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-card p-6 lg:p-8">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60 pointer-events-none" />
        <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary mb-3">
              <Sparkles className="h-3 w-3" /> 250 templates curados por especialistas
            </div>
            <h1 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
              Os seus <span className="text-gradient">projetos</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl">
              Comece com um template do seu setor — fases, tarefas, KPIs e boas práticas já configurados. Personalize à sua medida.
            </p>
          </div>
          <Button onClick={() => setGalleryOpen(true)} size="lg" className="gap-2 bg-gradient-primary shadow-glow hover:opacity-95">
            <Plus className="h-4 w-4" /> Novo projeto
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex flex-col sm:flex-row gap-2 flex-1 max-w-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar projeto…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9 bg-surface border-border/60"
            />
          </div>
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger className="w-full sm:w-56 bg-surface border-border/60">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="max-h-72">
              <SelectItem value="Todas">Todas as indústrias</SelectItem>
              {INDUSTRIES.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="inline-flex rounded-lg border border-border/60 bg-surface p-0.5">
          <button onClick={() => setView("grid")} className={cn("h-8 w-8 rounded-md flex items-center justify-center transition-colors", view === "grid" ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground")}>
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button onClick={() => setView("list")} className={cn("h-8 w-8 rounded-md flex items-center justify-center transition-colors", view === "list" ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground")}>
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-dashed border-border/60 bg-surface/40 p-12 text-center"
        >
          <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-primary/15 flex items-center justify-center mb-4">
            <FolderKanban className="h-7 w-7 text-primary" />
          </div>
          <h3 className="font-display font-bold text-lg">Sem projetos ainda</h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
            Escolha entre <strong>250 templates</strong> prontos por indústria e comece em segundos.
          </p>
          <Button onClick={() => setGalleryOpen(true)} className="mt-5 gap-2 bg-gradient-primary shadow-glow">
            <Sparkles className="h-4 w-4" /> Explorar templates
          </Button>
        </motion.div>
      ) : (
        <div className={cn(
          view === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
            : "flex flex-col gap-3"
        )}>
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onClick={() => setDetail(p)} />
          ))}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setGalleryOpen(true)}
            className="rounded-2xl border-2 border-dashed border-border/60 hover:border-primary/60 hover:bg-primary/5 transition-all p-8 flex flex-col items-center justify-center gap-3 text-muted-foreground hover:text-primary min-h-[180px]"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Plus className="h-6 w-6" />
            </div>
            <span className="font-medium text-sm">Criar novo projeto</span>
            <span className="text-[11px] text-muted-foreground">a partir de template</span>
          </motion.button>
        </div>
      )}

      <TemplateGalleryModal
        open={galleryOpen}
        onOpenChange={setGalleryOpen}
        onCreated={(id) => {
          const created = useProjectsStore.getState().projects.find((p) => p.id === id);
          if (created) setDetail(created);
        }}
      />
      <ProjectDetailModal
        project={detailLive}
        open={!!detail}
        onOpenChange={(o) => !o && setDetail(null)}
      />
    </div>
  );
}
