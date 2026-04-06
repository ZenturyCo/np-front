import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Users, Calendar, FolderKanban, AlertCircle, RefreshCw } from "lucide-react";

import { Progress } from "@/components/ui/progress";
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
import { projectApi, taskApi, type Project } from "@/lib/api";
import { useAuthStore } from "@/store/auth.store";

const tabs = ["Todos", "Telecom", "Construção", "Oil & Energy"];

const industryLabelMap: Record<string, string> = {
  telecom: "Telecom",
  construction: "Construção",
  oil_energy: "Oil & Energy",
  financial: "Financeiro",
  tech_startup: "Startup Tech",
  other: "Outros",
};

const toIndustryLabel = (industry?: string) => {
  if (!industry) return "Geral";
  return industryLabelMap[industry] ?? industry;
};

const isDoneStatus = (status?: string) => status === "done";
const isInProgressStatus = (status?: string) => status === "in_progress" || status === "review";

const getProjectProgress = (
  projectId: string,
  tasks: Array<{ projectId: string; status?: string }>,
  fallback?: number,
) => {
  const projectTasks = tasks.filter((task) => task.projectId === projectId);
  if (projectTasks.length === 0) return fallback ?? 0;
  const doneTasks = projectTasks.filter((task) => isDoneStatus(task.status)).length;
  return Math.round((doneTasks / projectTasks.length) * 100);
};

export default function Projects() {
  const { toast } = useToast();
  const qc = useQueryClient();
  const { user } = useAuthStore();

  const [activeTab, setActiveTab] = useState("Todos");
  const [createOpen, setCreateOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Form state
  const [formName, setFormName] = useState("");
  const [formVertical, setFormVertical] = useState("");
  const [formDeadline, setFormDeadline] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formPhase, setFormPhase] = useState("Fase 1 — Planeamento");

  const tenantId = user?.tenantId;

  // ==================== QUERIES ====================
  const {
    data: projects = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["projects", tenantId],
    queryFn: () => projectApi.list(tenantId!),
    enabled: !!tenantId,
    retry: false,
  });

  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks", tenantId],
    queryFn: () => taskApi.list(undefined, tenantId!),
    enabled: !!tenantId,
  });

  // ==================== MUTATION ====================
  const createMutation = useMutation({
    mutationFn: (data: Record<string, unknown>) => projectApi.create(data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["projects", tenantId] });
      toast({
        title: "✅ Projeto criado!",
        description: `${formName} foi adicionado com sucesso.`,
      });
      setCreateOpen(false);
      resetForm();
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message || err?.message || "Erro desconhecido";
      toast({
        title: "❌ Erro ao criar projeto",
        description: message,
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => projectApi.delete(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["projects", tenantId] });
      qc.invalidateQueries({ queryKey: ["tasks", tenantId] });
      toast({
        title: "🗑️ Projeto apagado",
        description: "O projeto foi removido com sucesso.",
      });
      setDetailOpen(false);
      setSelectedProject(null);
    },
    onError: (err: any) => {
      toast({
        title: "Erro ao apagar projeto",
        description: err?.response?.data?.message || err?.message || "Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const filteredProjects = activeTab === "Todos"
    ? projects
    : projects.filter((p) => toIndustryLabel(p.industry) === activeTab);

  const resetForm = () => {
    setFormName("");
    setFormVertical("");
    setFormDeadline("");
    setFormDescription("");
    setFormPhase("Fase 1 — Planeamento");
  };

  const handleCreate = () => {
    const name = formName.trim();
    if (!name || !formVertical) {
      toast({
        title: "Campos obrigatórios",
        description: "Nome do projeto e vertical são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    createMutation.mutate({
        name,
        industryVertical: formVertical,           
        description: formDescription.trim() || undefined,
        dueDate: formDeadline || undefined,       
        tenantId,
        createdBy: user?.id,                      
        status: 'planning',
        priority: 'medium',
    });
  };

  // ==================== RENDER ====================
  if (!tenantId) {
    return (
      <div className="flex flex-col items-center justify-center h-96 rounded-xl border bg-card">
        <AlertCircle className="h-12 w-12 text-destructive mb-4" />
        <h3 className="text-lg font-semibold">Tenant não identificado</h3>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border bg-card p-12 shadow-sm">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h3 className="mt-4 text-lg font-semibold">Erro ao carregar projetos</h3>
        <Button variant="outline" className="mt-4 gap-2" onClick={() => refetch()}>
          <RefreshCw className="h-4 w-4" /> Tentar novamente
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 rounded-lg bg-muted p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid de Projetos */}
      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-40 rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full rounded-xl border bg-card p-12 text-center">
              <FolderKanban className="mx-auto h-10 w-10 text-muted-foreground/40" />
              <p className="mt-3 text-sm text-muted-foreground">Nenhum projeto encontrado</p>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="cursor-pointer rounded-xl border bg-card p-5 shadow-sm transition-all hover:shadow-md"
                onClick={() => {
                  setSelectedProject(project);
                  setDetailOpen(true);
                }}
              >
                {(() => {
                  const progressValue = getProjectProgress(project.id, tasks, project.progress);
                  const projectTasks = tasks.filter((task) => task.projectId === project.id);
                  const totalTasks = projectTasks.length;
                  const doneTasks = projectTasks.filter((task) => isDoneStatus(task.status)).length;
                  const inProgressTasks = projectTasks.filter((task) => isInProgressStatus(task.status)).length;
                  const todoTasks = Math.max(totalTasks - doneTasks - inProgressTasks, 0);

                  return (
                    <>
                <div className="mb-3 flex items-start justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground truncate">{project.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {toIndustryLabel(project.industry)} · {project.phase || "Sem fase"}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white",
                      project.status === "Atrasado" ? "bg-danger" : project.status === "No prazo" ? "bg-success" : "bg-primary"
                    )}
                  >
                    {project.status || "Activo"}
                  </span>
                </div>

                <div className="mb-3 flex items-center gap-3">
                  <Progress value={progressValue} className="h-2 flex-1" />
                  <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                    {progressValue}%
                  </span>
                </div>

                <div className="mb-3 grid grid-cols-2 gap-2 rounded-lg border bg-muted/20 p-2 text-[11px] text-muted-foreground">
                  <span>Total: <strong className="text-foreground">{totalTasks}</strong></span>
                  <span>Concluídas: <strong className="text-foreground">{doneTasks}</strong></span>
                  <span>Em curso: <strong className="text-foreground">{inProgressTasks}</strong></span>
                  <span>A fazer: <strong className="text-foreground">{todoTasks}</strong></span>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {project.deadline || "Sem prazo"}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" /> {project.teamSize || 0}
                  </span>
                </div>
                    </>
                  );
                })()}
              </div>
            ))
          )}

          {/* Botão Criar Novo */}
          <button
            onClick={() => setCreateOpen(true)}
            className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border bg-card/50 p-8 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:bg-card"
          >
            <Plus className="h-8 w-8" />
            <span className="text-sm font-medium">Criar Novo Projeto</span>
          </button>
        </div>
      )}

      {/* ==================== MODAL CRIAR ==================== */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FolderKanban className="h-5 w-5 text-primary" />
              Criar Novo Projeto
            </DialogTitle>
            <DialogDescription>
              Preencha os dados abaixo para criar um novo projeto.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome do projeto *</Label>
              <Input
                id="name"
                placeholder="Ex: Expansão Rede — Huambo"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Vertical / Sector *</Label>
                <Select value={formVertical} onValueChange={setFormVertical}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="telecom">Telecom</SelectItem>
                    <SelectItem value="construction">Construção</SelectItem>
                    <SelectItem value="oil_energy">Oil & Energy</SelectItem>
                    <SelectItem value="tech_startup">Startup tech</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Fase inicial</Label>
                <Select value={formPhase} onValueChange={setFormPhase}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fase 1 — Planeamento">Fase 1 — Planeamento</SelectItem>
                    <SelectItem value="Fase 1 — Estudo">Fase 1 — Estudo</SelectItem>
                    <SelectItem value="Fase 2 — Procurement">Fase 2 — Procurement</SelectItem>
                    <SelectItem value="Fase 2 — Instalação">Fase 2 — Instalação</SelectItem>
                    <SelectItem value="Fase 3 — Construção">Fase 3 — Construção</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="deadline">Prazo</Label>
              <Input id="deadline" type="date" value={formDeadline} onChange={(e) => setFormDeadline(e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição (opcional)</Label>
              <Textarea
                id="description"
                placeholder="Descreva o objetivo do projeto..."
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                rows={3}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setCreateOpen(false);
                resetForm();
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleCreate}
              disabled={createMutation.isPending || !formName.trim() || !formVertical}
            >
              <Plus className="h-4 w-4 mr-2" />
              {createMutation.isPending ? "Criando..." : "Criar Projeto"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal de Detalhes */}
      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="sm:max-w-lg">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.name}</DialogTitle>
                <DialogDescription>
                  {toIndustryLabel(selectedProject.industry)} · {selectedProject.phase || "Sem fase"}
                </DialogDescription>
              </DialogHeader>
              {/* Você pode expandir este modal conforme necessário */}
              <DialogFooter>
                <Button
                  variant="destructive"
                  onClick={() => selectedProject?.id && deleteMutation.mutate(selectedProject.id)}
                  disabled={deleteMutation.isPending}
                >
                  {deleteMutation.isPending ? "A apagar..." : "Apagar projeto"}
                </Button>
                <Button variant="outline" onClick={() => setDetailOpen(false)}>
                  Fechar
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
