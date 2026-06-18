import { useQuery } from "@tanstack/react-query";
import { FolderKanban, CheckSquare, Video, Activity, AlertTriangle, Clock, TrendingUp, Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { projectApi, taskApi } from "@/lib/api";
import { useAuthStore } from "@/store/auth.store";

export default function Dashboard() {
  const { user } = useAuthStore();

  const { data: projects = [], isLoading: loadingProjects, isError: errorProjects, refetch: refetchProjects } = useQuery({
    queryKey: ["projects", user?.tenantId],
    queryFn: () => projectApi.list(user!.tenantId),
    enabled: !!user?.tenantId,
  });

const { data: tasks = [], isLoading: loadingTasks, isError: errorTasks, refetch: refetchTasks } = useQuery({
  queryKey: ["tasks", user?.tenantId],
  queryFn: () => taskApi.list(undefined, user!.tenantId),
  enabled: !!user?.tenantId,
});

  const isLoading = loadingProjects || loadingTasks;
  const isError = errorProjects || errorTasks;

  const activeTasks = tasks.filter((t) => t.status === "in_progress" || t.status === "todo");
  const completedToday = tasks.filter((t) => t.status === "done").length;
  const healthScore = projects.length > 0 ? Math.round(projects.reduce((s, p) => s + (p.progress || 0), 0) / projects.length) : 0;

  const metrics = [
    { title: "Projectos Activos", value: projects.length, icon: FolderKanban, trend: `${projects.filter(p => p.status === "Em progresso").length} em progresso`, trendUp: true, color: "primary" as const },
    { title: "Tarefas em Curso", value: activeTasks.length, icon: CheckSquare, trend: `${completedToday} concluídas`, trendUp: true, color: "success" as const },
    { title: "Reuniões Hoje", value: 3, icon: Video, color: "warning" as const },
    { title: "Score Saúde", value: `${healthScore}%`, icon: Activity, color: "primary" as const },
  ];

  const alerts = [
    { title: "Risco de atraso no projecto", desc: `${tasks.filter(t => t.priority === "urgent" && t.status !== "done").length} tarefas urgentes pendentes`, risk: 85, icon: AlertTriangle, color: "text-danger" },
    { title: "Prazo apertado", desc: `${tasks.filter(t => t.status === "review").length} tarefas em revisão`, risk: 72, icon: Clock, color: "text-warning" },
    { title: "Equipa activa", desc: `${tasks.filter(t => t.status === "in_progress").length} tarefas em progresso`, risk: 15, icon: TrendingUp, color: "text-success" },
  ];

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border bg-card p-12 shadow-sm">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">Erro ao carregar dados</h3>
        <p className="mt-1 text-sm text-muted-foreground">Não foi possível ligar à API.</p>
        <Button variant="outline" className="mt-4 gap-2" onClick={() => { refetchProjects(); refetchTasks(); }}>
          <RefreshCw className="h-4 w-4" /> Tentar novamente
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-28 rounded-xl" />)
          : metrics.map((m) => <MetricCard key={m.title} {...m} />)}
      </div>

      {/* Projects + Alerts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <h2 className="mb-4 text-base font-semibold text-foreground">Projectos Activos</h2>
          {isLoading ? (
            <div className="space-y-3">{Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-20 rounded-lg" />)}</div>
          ) : projects.length === 0 ? (
            <div className="rounded-lg bg-muted/50 p-8 text-center">
              <FolderKanban className="mx-auto h-8 w-8 text-muted-foreground/40" />
              <p className="mt-2 text-sm text-muted-foreground">Sem projectos ainda</p>
            </div>
          ) : (
            <div className="space-y-4">
              {projects.slice(0, 5).map((p) => (
                <div key={p.id} className="space-y-2 rounded-lg bg-muted/50 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.phase || p.industry || "Sem fase"}</p>
                    </div>
                    <span className={cn("rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white",
                      p.status === "Atrasado" ? "bg-danger" : p.status === "No prazo" ? "bg-success" : "bg-primary"
                    )}>
                      {p.status || "Activo"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={p.progress || 0} className="h-2 flex-1" />
                    <span className="text-xs font-medium text-muted-foreground">{p.progress || 0}%</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <h2 className="mb-4 text-base font-semibold text-foreground">Alertas IA</h2>
          <div className="space-y-3">
            {alerts.map((a) => (
              <div key={a.title} className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                <div className={cn("mt-0.5", a.color)}><a.icon className="h-5 w-5" /></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{a.title}</p>
                  <p className="text-xs text-muted-foreground">{a.desc}</p>
                </div>
                <span className={cn("text-sm font-bold", a.color)}>{a.risk}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Today's Tasks */}
      <div className="rounded-xl border bg-card p-5 shadow-sm">
        <h2 className="mb-4 text-base font-semibold text-foreground">Minhas Tarefas</h2>
        {isLoading ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-16 rounded-lg" />)}</div>
        ) : tasks.length === 0 ? (
          <div className="rounded-lg bg-muted/50 p-8 text-center">
            <CheckSquare className="mx-auto h-8 w-8 text-muted-foreground/40" />
            <p className="mt-2 text-sm text-muted-foreground">Sem tarefas atribuídas</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {tasks.slice(0, 8).map((t) => (
              <label key={t.id} className="flex cursor-pointer items-start gap-3 rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted">
                <input type="checkbox" defaultChecked={t.status === "done"} className="mt-0.5 h-4 w-4 rounded border-input accent-primary" />
                <div>
                  <p className={cn("text-sm font-medium", t.status === "done" ? "text-muted-foreground line-through" : "text-foreground")}>{t.title}</p>
                  <p className="text-xs text-muted-foreground">{t.projectName || "Projecto"}</p>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
