// Shared domain types for Templates & Projects (client-side)

export type TaskPriority = "low" | "normal" | "high" | "urgent";
export type Methodology = "Scrum" | "Kanban" | "Waterfall" | "PRINCE2" | "Lean" | "Agile";
export type ProjectStatus = "Planejamento" | "Em curso" | "Em pausa" | "Concluído" | "Atrasado";

export interface TemplateTask {
  title: string;
  description?: string;
  priority: TaskPriority;
  estimatedDays: number;
  phase: string;
}

export interface ProjectTemplate {
  id: string;
  name: string;
  industry: string;
  icon: string; // lucide icon name
  description: string;
  methodology: Methodology;
  phases: string[];
  tasks: TemplateTask[];
  bestPractices: string[];
  kpis: string[];
  durationWeeks: number;
  teamSize: number;
  popularity: number; // 0-100
}

export interface ProjectMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface ProjectTask extends TemplateTask {
  id: string;
  status: "todo" | "in_progress" | "review" | "done";
  assigneeId?: string;
  dueDate?: string;
}

export interface LocalProject {
  id: string;
  name: string;
  description?: string;
  industry: string;
  templateId: string;
  templateName: string;
  methodology: Methodology;
  phases: string[];
  tasks: ProjectTask[];
  team: ProjectMember[];
  status: ProjectStatus;
  progress: number;
  startDate: string;
  deadline?: string;
  bestPractices: string[];
  kpis: string[];
  createdAt: string;
}
