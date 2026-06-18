import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Users, CheckCircle, TrendingUp, Activity, Search, Plus, Eye, MessageCircle,
  Shield, UserMinus, AlertCircle, RefreshCw,
} from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { userApi, invitationApi, type TeamMember } from "@/lib/api";
import { useAuthStore } from "@/store/auth.store";

// ── Helpers ──────────────────────────────────────────────────

const presenceColors: Record<string, string> = {
  online: "bg-success", away: "bg-warning", offline: "bg-muted-foreground/40",
};

const roleBadge: Record<string, { label: string; style: string }> = {
  admin: { label: "Admin", style: "bg-purple-500/15 text-purple-600 border-purple-500/20" },
  manager: { label: "Manager", style: "bg-primary/15 text-primary border-primary/20" },
  member: { label: "Membro", style: "bg-muted text-muted-foreground border-border" },
};

function getPerformanceColor(rate: number) { return rate >= 80 ? "text-success" : rate >= 60 ? "text-warning" : "text-danger"; }
function getPerformanceBarColor(rate: number) { return rate >= 80 ? "bg-success" : rate >= 60 ? "bg-warning" : "bg-danger"; }
function getInitials(name: string) { return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase(); }
function getAvatarColor(id: string) {
  const colors = ["bg-primary", "bg-success", "bg-warning", "bg-danger", "bg-purple-500", "bg-pink-500", "bg-cyan-500", "bg-emerald-500"];
  return colors[parseInt(id, 10) % colors.length] || colors[0];
}

const filterTabs = [
  { id: "all", label: "Todos" }, { id: "admin", label: "Admins" },
  { id: "manager", label: "Managers" }, { id: "member", label: "Membros" },
  { id: "online", label: "Online agora" },
];

// ── Member Card ──────────────────────────────────────────────

function MemberCard({ member, canSeeStats, isAdmin, onViewProfile, onSendMessage, onChangeRole, onRemove }: {
  member: TeamMember; canSeeStats: boolean; isAdmin: boolean;
  onViewProfile: () => void; onSendMessage: () => void; onChangeRole: () => void; onRemove: () => void;
}) {
  const badge = roleBadge[member.role] || roleBadge.member;
  return (
    <div className="group relative rounded-xl border bg-card p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className={cn("flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white", getAvatarColor(member.id))}>
            {getInitials(member.fullName)}
          </div>
          <span className={cn("absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card", presenceColors[member.presence] || presenceColors.offline)} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{member.fullName}</p>
          <p className="text-xs text-muted-foreground truncate">{member.email}</p>
        </div>
        <span className={cn("rounded-full border px-2 py-0.5 text-[11px] font-semibold", badge.style)}>{badge.label}</span>
      </div>

      {canSeeStats ? (
        <>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-muted/50 p-2 text-center">
              <p className="text-lg font-bold text-foreground">{member.completedTasks}</p>
              <p className="text-[10px] text-muted-foreground">Concluídas</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-2 text-center">
              <p className="text-lg font-bold text-foreground">{member.totalTasks}</p>
              <p className="text-[10px] text-muted-foreground">Total</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-2 text-center">
              <p className={cn("text-lg font-bold", getPerformanceColor(member.onTimeRate))}>{member.onTimeRate}%</p>
              <p className="text-[10px] text-muted-foreground">No prazo</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted-foreground">Desempenho</span>
              <span className={cn("text-xs font-semibold", getPerformanceColor(member.onTimeRate))}>{member.onTimeRate}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted">
              <div className={cn("h-2 rounded-full transition-all", getPerformanceBarColor(member.onTimeRate))} style={{ width: `${member.onTimeRate}%` }} />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1">
            {member.projects.slice(0, 2).map((p) => (
              <span key={p.id} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">{p.name}</span>
            ))}
            {member.projects.length > 2 && <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">+{member.projects.length - 2}</span>}
          </div>
        </>
      ) : (
        <div className="mt-4 rounded-lg bg-muted/30 p-4 text-center"><p className="text-xs text-muted-foreground">Métricas restritas</p></div>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1 rounded-b-xl bg-card/95 py-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 border-t">
        <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs" onClick={onViewProfile}><Eye className="h-3 w-3" /> Ver perfil</Button>
        <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs" onClick={onSendMessage}><MessageCircle className="h-3 w-3" /> Mensagem</Button>
        {isAdmin && member.role !== "admin" && (
          <>
            <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs" onClick={onChangeRole}><Shield className="h-3 w-3" /> Role</Button>
            <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs text-danger hover:text-danger" onClick={onRemove}><UserMinus className="h-3 w-3" /> Remover</Button>
          </>
        )}
      </div>
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────

export default function Team() {
  const { toast } = useToast();
  const qc = useQueryClient();
  const { user: currentUser } = useAuthStore();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [inviteOpen, setInviteOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteName, setInviteName] = useState("");
  const [inviteRole, setInviteRole] = useState("member");
  const [newRole, setNewRole] = useState("");

  const { data: members = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["team-members"],
    queryFn: userApi.list,
  });

  const inviteMutation = useMutation({
    mutationFn: (data: { email: string; fullName: string; role: string }) => invitationApi.create(data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["team-members"] });
      toast({ title: "Convite enviado!", description: `Convite enviado para ${inviteEmail}` });
      setInviteOpen(false); setInviteEmail(""); setInviteName(""); setInviteRole("member");
    },
    onError: (err: any) => toast({ title: "Erro", description: err?.message || "Falha ao enviar convite.", variant: "destructive" }),
  });

  const removeMutation = useMutation({
    mutationFn: (id: string) => userApi.remove(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["team-members"] });
      toast({ title: "Membro removido" });
      setRemoveOpen(false); setSelectedMember(null);
    },
  });

  const roleChangeMutation = useMutation({
    mutationFn: ({ id, role }: { id: string; role: string }) => userApi.updateRole(id, role),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["team-members"] });
      toast({ title: "Role alterado!" });
      setRoleOpen(false); setSelectedMember(null);
    },
  });

  const isAdmin = currentUser?.role === "admin";
  const isManagerOrAdmin = currentUser?.role === "admin" || currentUser?.role === "manager";

  const filtered = useMemo(() => {
    let result = members;
    if (filter === "online") result = result.filter((m) => m.presence === "online");
    else if (filter !== "all") result = result.filter((m) => m.role === filter);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((m) => m.fullName.toLowerCase().includes(q) || m.email.toLowerCase().includes(q));
    }
    return result;
  }, [members, filter, search]);

  const totalMembers = members.length;
  const avgOnTime = members.length > 0 ? Math.round(members.reduce((s, m) => s + m.onTimeRate, 0) / members.length) : 0;
  const totalCompleted = members.reduce((s, m) => s + m.completedTasks, 0);
  const onlineNow = members.filter((m) => m.presence === "online").length;

  const metrics = [
    { title: "Total Membros", value: totalMembers, icon: Users, color: "primary" as const },
    { title: "Taxa Entrega no Prazo", value: `${avgOnTime}%`, icon: TrendingUp, color: (avgOnTime >= 75 ? "success" : "warning") as "success" | "warning" },
    { title: "Tarefas Concluídas", value: totalCompleted, icon: CheckCircle, color: "primary" as const },
    { title: "Membros Activos", value: onlineNow, icon: Activity, color: "success" as const },
  ];

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border bg-card p-12 shadow-sm">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">Erro ao carregar equipa</h3>
        <Button variant="outline" className="mt-4 gap-2" onClick={() => refetch()}><RefreshCw className="h-4 w-4" /> Tentar novamente</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-28 rounded-xl" />) : metrics.map((m) => <MetricCard key={m.title} {...m} />)}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-1 rounded-lg bg-muted p-1">
          {filterTabs.map((tab) => (
            <button key={tab.id} onClick={() => setFilter(tab.id)} className={cn("rounded-md px-3 py-1.5 text-sm font-medium transition-colors", filter === tab.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Pesquisar..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
          {isAdmin && <Button size="sm" className="gap-1.5" onClick={() => setInviteOpen(true)}><Plus className="h-4 w-4" /> Adicionar</Button>}
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-48 rounded-xl" />)}
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-xl border bg-card p-12 text-center">
          <Users className="mx-auto h-10 w-10 text-muted-foreground/40" />
          <p className="mt-3 text-sm text-muted-foreground">{search ? `Nenhum membro para "${search}"` : "Nenhum membro neste filtro"}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              canSeeStats={isManagerOrAdmin || member.id === currentUser?.id}
              isAdmin={isAdmin}
              onViewProfile={() => { setSelectedMember(member); setProfileOpen(true); }}
              onSendMessage={() => toast({ title: "Chat", description: `A abrir chat com ${member.fullName}...` })}
              onChangeRole={() => { setSelectedMember(member); setNewRole(member.role); setRoleOpen(true); }}
              onRemove={() => { setSelectedMember(member); setRemoveOpen(true); }}
            />
          ))}
        </div>
      )}

      {/* Modal: Invite */}
      <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Adicionar Membro</DialogTitle>
            <DialogDescription>Envie um convite por email.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2"><Label>Email *</Label><Input type="email" placeholder="email@exemplo.com" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} /></div>
            <div className="space-y-2"><Label>Nome completo *</Label><Input placeholder="Nome" value={inviteName} onChange={(e) => setInviteName(e.target.value)} /></div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Select value={inviteRole} onValueChange={setInviteRole}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="member">Membro</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setInviteOpen(false)}>Cancelar</Button>
            <Button onClick={() => inviteMutation.mutate({ email: inviteEmail, fullName: inviteName, role: inviteRole })} disabled={inviteMutation.isPending}>Enviar Convite</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Profile */}
      <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
        <DialogContent className="sm:max-w-md">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className={cn("flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white", getAvatarColor(selectedMember.id))}>
                    {getInitials(selectedMember.fullName)}
                  </div>
                  <div>
                    <DialogTitle>{selectedMember.fullName}</DialogTitle>
                    <p className="text-sm text-muted-foreground">{selectedMember.email}</p>
                  </div>
                </div>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-muted/50 p-3 text-center">
                    <p className="text-xl font-bold text-foreground">{selectedMember.completedTasks}</p>
                    <p className="text-[10px] text-muted-foreground">Concluídas</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3 text-center">
                    <p className="text-xl font-bold text-foreground">{selectedMember.totalTasks}</p>
                    <p className="text-[10px] text-muted-foreground">Total</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3 text-center">
                    <p className={cn("text-xl font-bold", getPerformanceColor(selectedMember.onTimeRate))}>{selectedMember.onTimeRate}%</p>
                    <p className="text-[10px] text-muted-foreground">No prazo</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Projectos</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMember.projects.map((p) => (
                      <span key={p.id} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{p.name}</span>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter><Button variant="outline" onClick={() => setProfileOpen(false)}>Fechar</Button></DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal: Change Role */}
      <Dialog open={roleOpen} onOpenChange={setRoleOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Alterar Role</DialogTitle>
            <DialogDescription>{selectedMember?.fullName}</DialogDescription>
          </DialogHeader>
          <Select value={newRole} onValueChange={setNewRole}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="member">Membro</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRoleOpen(false)}>Cancelar</Button>
            <Button onClick={() => selectedMember && roleChangeMutation.mutate({ id: selectedMember.id, role: newRole })} disabled={roleChangeMutation.isPending}>Confirmar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Remove */}
      <Dialog open={removeOpen} onOpenChange={setRemoveOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Remover Membro</DialogTitle>
            <DialogDescription>Tem a certeza que quer remover {selectedMember?.fullName}?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRemoveOpen(false)}>Cancelar</Button>
            <Button variant="destructive" onClick={() => selectedMember && removeMutation.mutate(selectedMember.id)} disabled={removeMutation.isPending}>Remover</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
