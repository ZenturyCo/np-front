import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Bell, Search, Check, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { notificationApi } from "@/lib/api";
import { useAuthStore } from "@/store/auth.store";

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  "/": { title: "Dashboard", subtitle: "Visão geral dos seus projectos" },
  "/projects": { title: "Projectos", subtitle: "Gerencie todos os seus projectos" },
  "/tasks": { title: "Tarefas", subtitle: "Gestão de tarefas e actividades" },
  "/team": { title: "Team", subtitle: "Gestão de membros e desempenho" },
  "/chat": { title: "Chat", subtitle: "Comunicação da equipa" },
  "/meetings": { title: "Reuniões", subtitle: "Agenda e resumos de reuniões" },
  "/reports": { title: "Relatórios", subtitle: "Análise e métricas de progresso" },
  "/ai": { title: "Assistente IA", subtitle: "Insights inteligentes" },
  "/settings": { title: "Definições", subtitle: "Configurações da conta" },
  "/plans": { title: "Planos", subtitle: "Escolha o plano ideal" },
};

export function Topbar() {
  const location = useLocation();
  const { user } = useAuthStore();
  const qc = useQueryClient();
  const page = pageTitles[location.pathname] || pageTitles["/"];
  const [notifOpen, setNotifOpen] = useState(false);

  const { data: notifications = [] } = useQuery({
    queryKey: ["notifications", user?.id],
    queryFn: () => notificationApi.list(user!.id),
    enabled: !!user?.id,
    refetchInterval: 30000,
  });

  const markReadMutation = useMutation({
    mutationFn: (id: string) => notificationApi.markRead(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notifications"] }),
  });

  const markAllReadMutation = useMutation({
    mutationFn: () => notificationApi.markAllRead(user!.id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notifications"] }),
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-muted-foreground" />
        <div>
          <h1 className="text-lg font-semibold text-foreground">{page.title}</h1>
          <p className="text-xs text-muted-foreground">{page.subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-muted-foreground"><Search className="h-5 w-5" /></Button>

        <Popover open={notifOpen} onOpenChange={setNotifOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative text-muted-foreground">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-danger px-1 text-[10px] font-bold text-danger-foreground">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <h3 className="text-sm font-semibold text-foreground">Notificações</h3>
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs text-primary" onClick={() => markAllReadMutation.mutate()}>
                  <CheckCheck className="h-3 w-3" /> Marcar todas
                </Button>
              )}
            </div>
            <ScrollArea className="max-h-80">
              {notifications.length === 0 ? (
                <div className="p-6 text-center">
                  <Bell className="mx-auto h-8 w-8 text-muted-foreground/30" />
                  <p className="mt-2 text-sm text-muted-foreground">Sem notificações</p>
                </div>
              ) : (
                <div className="divide-y">
                  {notifications.slice(0, 15).map((n) => (
                    <div
                      key={n.id}
                      className={cn("flex items-start gap-3 px-4 py-3 transition-colors hover:bg-muted/50 cursor-pointer", !n.read && "bg-primary/5")}
                      onClick={() => !n.read && markReadMutation.mutate(n.id)}
                    >
                      <div className={cn("mt-1 h-2 w-2 shrink-0 rounded-full", n.read ? "bg-transparent" : "bg-primary")} />
                      <div className="flex-1 min-w-0">
                        <p className={cn("text-sm", n.read ? "text-muted-foreground" : "text-foreground font-medium")}>{n.message}</p>
                        {n.createdAt && <p className="mt-0.5 text-[11px] text-muted-foreground">{new Date(n.createdAt).toLocaleDateString("pt-PT", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</p>}
                      </div>
                      {!n.read && <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0"><Check className="h-3 w-3" /></Button>}
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
