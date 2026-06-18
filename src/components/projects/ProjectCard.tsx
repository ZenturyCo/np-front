import { motion } from "framer-motion";
import { Calendar, Users, Sparkles, ArrowUpRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { LocalProject, ProjectStatus } from "@/lib/types";

const STATUS_CHIP: Record<ProjectStatus, string> = {
  "Planejamento": "bg-blue-500/15 text-blue-300 border-blue-500/30",
  "Em curso": "bg-primary/15 text-primary border-primary/30",
  "Em pausa": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "Concluído": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "Atrasado": "bg-red-500/15 text-red-300 border-red-500/30",
};

interface Props {
  project: LocalProject;
  index?: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index = 0, onClick }: Props) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index, 8) * 0.04 }}
      onClick={onClick}
      className="group text-left rounded-2xl border border-border/60 bg-gradient-card p-5 hover-lift relative overflow-hidden"
    >
      <div className="absolute inset-x-0 -top-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />

      <div className="relative flex items-start justify-between mb-3">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Badge variant="outline" className={cn("text-[10px] border", STATUS_CHIP[project.status])}>
              {project.status}
            </Badge>
            <Badge variant="outline" className="text-[10px] border-primary/30 text-primary">{project.methodology}</Badge>
          </div>
          <h3 className="font-display font-bold text-base leading-tight line-clamp-2">{project.name}</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5 flex items-center gap-1">
            <Sparkles className="h-3 w-3" /> {project.templateName}
          </p>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>

      <div className="relative">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1.5">
          <span>Progresso</span>
          <span className="font-mono">{project.progress}%</span>
        </div>
        <Progress value={project.progress} className="h-1.5" />
      </div>

      <div className="relative mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3 w-3" /> {project.deadline ?? "Sem prazo"}
        </span>
        <span className="flex items-center gap-1.5">
          <Users className="h-3 w-3" /> {project.team.length || "—"}
        </span>
        <span className="text-[10px]">{project.tasks.length} tarefas</span>
      </div>
    </motion.button>
  );
}
