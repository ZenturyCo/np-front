import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, FolderKanban, CheckSquare, Users, MessageCircle,
  Video, BarChart3, Bot, Settings, LogOut,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth.store";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Projectos", url: "/projects", icon: FolderKanban },
  { title: "Tarefas", url: "/tasks", icon: CheckSquare },
  { title: "Team", url: "/team", icon: Users },
  { title: "Chat", url: "/chat", icon: MessageCircle },
  { title: "Reuniões", url: "/meetings", icon: Video },
  { title: "Relatórios", url: "/reports", icon: BarChart3 },
  { title: "Assistente IA", url: "/ai", icon: Bot },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const initials = user?.fullName
    ? user.fullName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
    : "??";

  return (
    <Sidebar collapsible="icon" className="border-r-0" style={{ "--sidebar-width": "260px" } as React.CSSProperties}>
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl font-extrabold text-white" style={{ background: "linear-gradient(135deg, #1E90FF, #00C896)" }}>
          N
        </div>
        {!collapsed && (
          <div>
            <span className="text-base font-bold text-sidebar-primary-foreground">Ngola</span>
            <span className="ml-1 text-base font-light text-sidebar-foreground">Projects</span>
          </div>
        )}
      </div>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const active = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={active} tooltip={item.title}>
                      <Link
                        to={item.url}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                          active ? "bg-primary/15 text-primary" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        )}
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        {!collapsed && <span className="flex-1">{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <SidebarGroup className="mt-auto">
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/settings" className="flex items-center gap-3 px-3 py-2.5 text-sm text-sidebar-foreground hover:bg-sidebar-accent">
                      <Settings className="h-5 w-5" />
                      <span>Definições</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      {!collapsed && (
        <SidebarFooter className="border-t border-sidebar-border px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {initials}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-medium text-sidebar-primary-foreground">
                {user?.fullName || "Utilizador"}
              </p>
              <p className="truncate text-xs text-sidebar-foreground">
                {user?.email || ""}
              </p>
            </div>
            <button onClick={handleLogout} className="text-sidebar-foreground hover:text-sidebar-primary-foreground" title="Sair">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
