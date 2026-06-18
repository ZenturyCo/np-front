import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LocalProject, ProjectTask, ProjectTemplate } from "@/lib/types";

interface ProjectsState {
  projects: LocalProject[];
  createFromTemplate: (args: {
    template: ProjectTemplate;
    name: string;
    description?: string;
    deadline?: string;
    team?: LocalProject["team"];
  }) => LocalProject;
  update: (id: string, patch: Partial<LocalProject>) => void;
  remove: (id: string) => void;
  addTask: (projectId: string, task: ProjectTask) => void;
  updateTask: (projectId: string, taskId: string, patch: Partial<ProjectTask>) => void;
  addMember: (projectId: string, member: LocalProject["team"][number]) => void;
  removeMember: (projectId: string, memberId: string) => void;
}

const uid = (prefix: string) =>
  `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

const computeProgress = (tasks: ProjectTask[]) => {
  if (!tasks.length) return 0;
  const done = tasks.filter((t) => t.status === "done").length;
  return Math.round((done / tasks.length) * 100);
};

export const useProjectsStore = create<ProjectsState>()(
  persist(
    (set) => ({
      projects: [],
      createFromTemplate: ({ template, name, description, deadline, team }) => {
        const tasks: ProjectTask[] = template.tasks.map((t, i) => ({
          ...t,
          id: uid(`task-${i}`),
          status: "todo",
        }));
        const project: LocalProject = {
          id: uid("proj"),
          name,
          description,
          industry: template.industry,
          templateId: template.id,
          templateName: template.name,
          methodology: template.methodology,
          phases: template.phases,
          tasks,
          team: team ?? [],
          status: "Planejamento",
          progress: 0,
          startDate: new Date().toISOString().slice(0, 10),
          deadline,
          bestPractices: template.bestPractices,
          kpis: template.kpis,
          createdAt: new Date().toISOString(),
        };
        set((s) => ({ projects: [project, ...s.projects] }));
        return project;
      },
      update: (id, patch) =>
        set((s) => ({
          projects: s.projects.map((p) => (p.id === id ? { ...p, ...patch } : p)),
        })),
      remove: (id) => set((s) => ({ projects: s.projects.filter((p) => p.id !== id) })),
      addTask: (projectId, task) =>
        set((s) => ({
          projects: s.projects.map((p) =>
            p.id === projectId
              ? { ...p, tasks: [...p.tasks, task], progress: computeProgress([...p.tasks, task]) }
              : p
          ),
        })),
      updateTask: (projectId, taskId, patch) =>
        set((s) => ({
          projects: s.projects.map((p) => {
            if (p.id !== projectId) return p;
            const tasks = p.tasks.map((t) => (t.id === taskId ? { ...t, ...patch } : t));
            return { ...p, tasks, progress: computeProgress(tasks) };
          }),
        })),
      addMember: (projectId, member) =>
        set((s) => ({
          projects: s.projects.map((p) =>
            p.id === projectId ? { ...p, team: [...p.team, member] } : p
          ),
        })),
      removeMember: (projectId, memberId) =>
        set((s) => ({
          projects: s.projects.map((p) =>
            p.id === projectId ? { ...p, team: p.team.filter((m) => m.id !== memberId) } : p
          ),
        })),
    }),
    { name: "ngola-projects" }
  )
);

export { uid };
