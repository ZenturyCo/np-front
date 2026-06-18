import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Users, CheckCircle, TrendingUp, Activity, Search, Plus, Eye,
  MessageCircle, Shield, UserMinus, AlertCircle, RefreshCw,
} from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle,
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
  online: "bg-green-500", away: "bg-yellow-500", offline: "bg-muted-foreground/40",
};

const roleBadge: Record<string, { label: string; style: string }> = {
  admin:   { label: "Admin",   style: "bg-purple-500/15 text-purple-600 border-purple-500/20" },
  manager: { label: "Manager", style: "bg-primary/15 text-primary border-primary/20" },
  member:  { label: "Membro",  style: "bg-muted text-muted-foreground border-border" },
  viewer:  { label: "Viewer",  style: "bg-muted text-muted-foreground border-border" },
  guest:   { label: "Guest",   style: "bg-muted text-muted-foreground border-border" },
};

function getInitials(name: string) {
  return (name || "?").split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

const AVATAR_COLORS = [
  "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-red-500",
  "bg-purple-500", "bg-pink-500", "bg-cyan-500", "bg-emerald-500",
];
function getAvatarColor(id: string) {
  let hash = 0;
  for (const c of id) hash = (hash * 31 + c.charCodeAt(0)) & 0xffffffff;
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

// Normaliza membros que chegam da API sem campos de stats
function normalizeMember(m: any): TeamMember & {
  completedTasks: number; totalTasks: number; onTimeRate: number;
  projects: { id: string; name: string }[]; presence: string;
} {
  return {
    ...m,
    fullName:       m.fullName || m.name || m.email || "Sem nome",
    role:           m.role || "member",
    presence:       m.presence || "offline",
    completedTasks: m.completedTasks ?? 0,
    totalTasks:     m.totalTasks ?? 0,
    onTimeRate:     m.onTimeRate ?? 0,
    projects:       Array.isArray(m.projects) ? m.projects : [],
  };
}

const filterTabs = [
  { id: "all",     label: "Todos" },
  { id: "admin",   label: "Admins" },
  { id: "manager", label: "Managers" },
  { id: "member",  label: "Membros" },
  { id: "online",  label: "Online" },
];

// ── Member Card ──────────────────────────────────────────────

function MemberCard({ member, isAdmin, currentUserId, onViewProfile, onSendMessage, onChangeRole, onRemove }: {
  member: ReturnType<typeof normalizeMember>;
  isAdmin: boolean;
  currentUserId?: string;
  onViewProfile: () => void;
  onSendMessage: () => void;
  onChangeRole: () => void;
  onRemove: () => void;
}) {
  const badge = roleBadge[member.role] || roleBadge.member;
  const isSelf = member.id === currentUserId;

  return (
    <div className="group relative rounded-xl border bg-card p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="relative shrink-0">
          <div className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white",
            getAvatarColor(member.id)
          )}>
            {getInitials(member.fullName)}
          </div>
          <span className={cn(
            "absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card",
            presenceColors[member.presence] || presenceColors.offline
          )} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate">{member.fullName}</p>
          <p className="text-xs text-muted-foreground truncate">{member.email}</p>
        </div>
        <span className={cn("rounded-full border px-2 py-0.5 text-[11px] font-semibold shrink-0", badge.style)}>
          {badge.label}
        </span>
      </div>

      {/* Projectos */}
      {member.projects.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {member.projects.slice(0, 2).map((p) => (
            <span key={p.id} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
              {p.name}
            </span>
          ))}
          {member.projects.length > 2 && (
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
              +{member.projects.length - 2}
            </span>
          )}
        </div>
      )}

      {/* Acções hover */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1 rounded-b-xl bg-card/95 py-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 border-t">
        <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs" onClick={onViewProfile}>
          <Eye className="h-3 w-3" /> Ver perfil
        </Button>
        {!isSelf && (
          <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs" onClick={onSendMessage}>
            <MessageCircle className="h-3 w-3" /> Mensagem
          </Button>
        )}
        {isAdmin && !isSelf && member.role !== "admin" && (
          <>
            <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs" onClick={onChangeRole}>
              <Shield className="h-3 w-3" /> Role
            </Button>
            <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs text-destructive hover:text-destructive" onClick={onRemove}>
              <UserMinus className="h-3 w-3" /> Remover
            </Button>
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

  const [filter, setFilter]           = useState("all");
  const [search, setSearch]           = useState("");
  const [inviteOpen, setInviteOpen]   = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [removeOpen, setRemoveOpen]   = useState(false);
  const [roleOpen, setRoleOpen]       = useState(false);
  const [selectedMember, setSelectedMember] = useState<ReturnType<typeof normalizeMember> | null>(null);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteName, setInviteName]   = useState("");
  const [inviteRole, setInviteRole]   = useState("member");
  const [newRole, setNewRole]         = useState("");

  const { data: rawMembers = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["team-members"],
    queryFn: userApi.list,
    retry: 1,
  });

  const members = useMemo(() => (rawMembers as any[]).map(normalizeMember), [rawMembers]);

  const filtered = useMemo(() => {
    let r = members;
    if (filter === "online") r = r.filter((m) => m.presence === "online");
    else if (filter !== "all") r = r.filter((m) => m.role === filter);
    if (search.trim()) {
      const q = search.toLowerCase();
      r = r.filter((m) => m.fullName.toLowerCase().includes(q) || m.email.toLowerCase().includes(q));
    }
    return r;
  }, [members, filter, search]);

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
    onError: (err: any) => toast({ title: "Erro", description: err?.message, variant: "destructive" }),
  });

  const roleChangeMutation = useMutation({
    mutationFn: ({ id, role }: { id: string; role: string }) => userApi.updateRole(id, role),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["team-members"] });
      toast({ title: "Role alterado!" });
      setRoleOpen(false); setSelectedMember(null);
    },
    onError: (err: any) => toast({ title: "Erro", description: err?.message, variant: "destructive" }),
  });

  const isAdmin = currentUser?.role === "admin";
  const onlineNow = members.filter((m) => m.presence === "online").length;

  const metrics = [
    { title: "Total Membros",   value: members.length, icon: Users,       color: "primary" as const },
    { title: "Membros Activos", value: onlineNow,       icon: Activity,    color: "success" as const },
    { title: "Admins",          value: members.filter(m => m.role === "admin").length,   icon: Shield,     color: "primary" as const },
    { title: "Managers",        value: members.filter(m => m.role === "manager").length, icon: TrendingUp, color: "primary" as const },
  ];

  if (isError) return (
    <div className="flex flex-col items-center justify-center rounded-xl border bg-card p-12 shadow-sm gap-4">
      <AlertCircle className="h-12 w-12 text-destructive" />
      <h3 className="text-lg font-semibold">Erro ao carregar equipa</h3>
      <p className="text-sm text-muted-foreground">Verifique a ligação à API</p>
      <Button variant="outline" className="gap-2" onClick={() => refetch()}>
        <RefreshCw className="h-4 w-4" /> Tentar novamente
      </Button>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Métricas */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-28 rounded-xl" />)
          : metrics.map((m) => <MetricCard key={m.title} {...m} />)
        }
      </div>

      {/* Filtros + Search */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-1 rounded-lg bg-muted p-1 overflow-x-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
                filter === tab.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Pesquisar..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
          {isAdmin && (
            <Button size="sm" className="gap-1.5 shrink-0" onClick={() => setInviteOpen(true)}>
              <Plus className="h-4 w-4" /> Adicionar
            </Button>
          )}
        </div>
      </div>

      {/* Grid de membros */}
      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-36 rounded-xl" />)}
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-xl border bg-card p-12 text-center">
          <Users className="mx-auto h-10 w-10 text-muted-foreground/40" />
          <p className="mt-3 text-sm text-muted-foreground">
            {search ? `Nenhum membro para "${search}"` : "Nenhum membro neste filtro"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              isAdmin={isAdmin}
              currentUserId={currentUser?.id}
              onViewProfile={() => { setSelectedMember(member); setProfileOpen(true); }}
              onSendMessage={() => toast({ title: "Chat", description: `A abrir chat com ${member.fullName}…` })}
              onChangeRole={() => { setSelectedMember(member); setNewRole(member.role); setRoleOpen(true); }}
              onRemove={() => { setSelectedMember(member); setRemoveOpen(true); }}
            />
          ))}
        </div>
      )}

      {/* Modal: Convidar */}
      <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Adicionar Membro</DialogTitle>
            <DialogDescription>Envie um convite por email.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Email *</Label>
              <Input type="email" placeholder="email@exemplo.com" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Nome completo *</Label>
              <Input placeholder="Nome" value={inviteName} onChange={(e) => setInviteName(e.target.value)} />
            </div>
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
            <Button
              onClick={() => inviteMutation.mutate({ email: inviteEmail, fullName: inviteName, role: inviteRole })}
              disabled={inviteMutation.isPending || !inviteEmail || !inviteName}
            >
              {inviteMutation.isPending ? "A enviar…" : "Enviar Convite"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Perfil */}
      <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
        <DialogContent className="sm:max-w-md">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className={cn("flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white shrink-0", getAvatarColor(selectedMember.id))}>
                    {getInitials(selectedMember.fullName)}
                  </div>
                  <div>
                    <DialogTitle>{selectedMember.fullName}</DialogTitle>
                    <p className="text-sm text-muted-foreground">{selectedMember.email}</p>
                    <Badge variant="outline" className="mt-1 text-[11px]">
                      {roleBadge[selectedMember.role]?.label || selectedMember.role}
                    </Badge>
                  </div>
                </div>
              </DialogHeader>
              {selectedMember.projects.length > 0 && (
                <div className="py-2">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Projectos</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMember.projects.map((p) => (
                      <span key={p.id} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{p.name}</span>
                    ))}
                  </div>
                </div>
              )}
              <DialogFooter>
                <Button variant="outline" onClick={() => setProfileOpen(false)}>Fechar</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal: Alterar Role */}
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
            <Button
              onClick={() => selectedMember && roleChangeMutation.mutate({ id: selectedMember.id, role: newRole })}
              disabled={roleChangeMutation.isPending}
            >
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Remover */}
      <Dialog open={removeOpen} onOpenChange={setRemoveOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Remover Membro</DialogTitle>
            <DialogDescription>
              Tem a certeza que quer remover <strong>{selectedMember?.fullName}</strong>?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRemoveOpen(false)}>Cancelar</Button>
            <Button
              variant="destructive"
              onClick={() => selectedMember && removeMutation.mutate(selectedMember.id)}
              disabled={removeMutation.isPending}
            >
              {removeMutation.isPending ? "A remover…" : "Remover"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
