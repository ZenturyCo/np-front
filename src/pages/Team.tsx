import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Users, CheckCircle, TrendingUp, Activity,
  Search, Plus, AlertCircle, RefreshCw,
  UserPlus, LogIn, Copy, Check, X,
} from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { teamsApi, type BackendTeam, type TeamMember } from "@/lib/api";
import { useAuthStore } from "@/store/auth.store";

// ─────────────────────────────────────────────
// Utilitários
// ─────────────────────────────────────────────
const PALETTE = [
  "#6366f1","#8b5cf6","#ec4899","#f59e0b",
  "#10b981","#3b82f6","#ef4444","#14b8a6",
];

function colorForId(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = id.charCodeAt(i) + ((hash << 5) - hash);
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

function getInitials(name: string) {
  return (name || "?").split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

const presenceRing: Record<string, string> = {
  online:  "ring-emerald-500",
  away:    "ring-amber-500",
  offline: "ring-muted-foreground/40",
};

const filterTabs = [
  { id: "all",    label: "Todas" },
  { id: "online", label: "Com membros online" },
  { id: "large",  label: "3+ membros" },
] as const;
type FilterId = (typeof filterTabs)[number]["id"];

// ─────────────────────────────────────────────
// MetricCard
// ─────────────────────────────────────────────
function MetricCard({ label, value, icon, tone = "default" }: {
  label: string; value: number | string;
  icon: React.ReactNode; tone?: "default" | "emerald" | "amber";
}) {
  const toneClasses = {
    default: "bg-primary/10 text-primary",
    emerald: "bg-emerald-500/15 text-emerald-600",
    amber:   "bg-amber-500/15 text-amber-600",
  }[tone];
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className={cn("flex h-8 w-8 items-center justify-center rounded-lg", toneClasses)}>{icon}</span>
      </div>
      <div className="mt-3 text-2xl font-semibold text-foreground">{value}</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// TeamCard
// ─────────────────────────────────────────────
function TeamCard({ team, members, onOpenDetails }: {
  team: BackendTeam; members: TeamMember[]; onOpenDetails: () => void;
}) {
  const color    = team.avatarColor || colorForId(team.id);
  const online   = members.filter((m) => m.presence === "online").length;
  const completed = members.reduce((s, m) => s + (m.completedTasks ?? 0), 0);
  const onTime   = members.length
    ? Math.round(members.reduce((s, m) => s + (m.onTimeRate ?? 0), 0) / members.length)
    : 0;
  const visible  = members.slice(0, 6);
  const overflow = Math.max(0, members.length - visible.length);

  return (
    <div className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-white shadow-sm" style={{ backgroundColor: color }}>
          {getInitials(team.name)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="truncate text-lg font-semibold text-foreground">{team.name}</h3>
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
              {members.length} {members.length === 1 ? "membro" : "membros"}
            </span>
          </div>
          {team.description && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{team.description}</p>}
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex -space-x-2">
          {visible.map((m) => (
            <div key={m.id} title={m.fullName}
              className={cn("flex h-9 w-9 items-center justify-center rounded-full border-2 border-card bg-muted text-xs font-medium text-foreground ring-2", presenceRing[m.presence ?? "offline"])}>
              {getInitials(m.fullName)}
            </div>
          ))}
          {overflow > 0 && (
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-card bg-muted text-xs font-medium text-muted-foreground">+{overflow}</div>
          )}
          {members.length === 0 && <span className="text-sm text-muted-foreground">Sem membros ainda</span>}
        </div>
        <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />{online} online
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 border-t border-border pt-4">
        <Metric icon={<Users className="h-4 w-4" />}       label="Membros"    value={members.length} />
        <Metric icon={<CheckCircle className="h-4 w-4" />} label="Concluídas" value={completed} />
        <Metric icon={<TrendingUp className="h-4 w-4" />}  label="No prazo"   value={`${onTime}%`} />
      </div>

      <Button variant="outline" size="sm" className="w-full" onClick={onOpenDetails}>
        <Activity className="mr-2 h-4 w-4" /> Ver detalhes
      </Button>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: number | string }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1 text-xs text-muted-foreground">{icon}{label}</div>
      <div className="mt-1 text-lg font-semibold text-foreground">{value}</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CreateTeamCard
// ─────────────────────────────────────────────
function CreateTeamCard({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick}
      className="group flex min-h-[280px] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-card/40 p-6 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-card hover:text-foreground">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-dashed border-current text-2xl font-light transition-transform group-hover:scale-110">+</div>
      <div className="text-center">
        <div className="font-medium">Criar nova equipa</div>
        <div className="mt-1 text-xs">Convida membros e organiza o trabalho</div>
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────
// ✅ CreateTeamDialog — modal dedicado para criar equipa
// ─────────────────────────────────────────────
function CreateTeamDialog({ open, onOpenChange, onCreated }: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onCreated: (teamId: string) => void;
}) {
  const [name, setName]               = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor]             = useState(PALETTE[0]);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole]   = useState<"member" | "admin" | "manager" | "viewer" | "guest">("member");
  const [inviteLink, setInviteLink]   = useState<string | null>(null);
  const [copied, setCopied]           = useState(false);

  function reset() {
    setName(""); setDescription(""); setColor(PALETTE[0]);
    setInviteEmail(""); setInviteLink(null); setCopied(false);
  }

  const createMutation = useMutation({
    mutationFn: () =>
      teamsApi.createInviteLink({
        teamName:      name.trim(),
        description:   description.trim() || undefined,
        email:         inviteEmail.trim() || undefined,
        role:          inviteRole,
        expiresInDays: 7,
      }),
    onSuccess: (data) => {
      setInviteLink(data.inviteUrl || `${window.location.origin}/join/${data.token}`);
      toast.success(`Equipa "${name}" criada com sucesso!`);
      onCreated(data.teamId);
    },
    onError: () => toast.error("Erro ao criar equipa. Tenta novamente."),
  });

  function copyLink() {
    if (!inviteLink) return;
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Link copiado!");
  }

  const canSubmit = name.trim().length >= 2;

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) reset(); }}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Criar nova equipa</DialogTitle>
          <DialogDescription>Define o nome e convida o primeiro membro via link.</DialogDescription>
        </DialogHeader>

        {!inviteLink ? (
          <>
            <div className="space-y-4 py-2">
              {/* Preview */}
              <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/40 p-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl text-base font-semibold text-white"
                  style={{ backgroundColor: color }}>
                  {getInitials(name || "NE")}
                </div>
                <div className="min-w-0">
                  <div className="truncate font-medium text-foreground">{name || "Nome da equipa"}</div>
                  <div className="truncate text-xs text-muted-foreground">{description || "Descrição..."}</div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Nome da equipa *</Label>
                <Input placeholder="Ex.: Engenharia" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label>Descrição (opcional)</Label>
                <Textarea placeholder="O que faz esta equipa?" rows={2} value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>

              {/* Cor */}
              <div className="space-y-2">
                <Label>Cor do avatar</Label>
                <div className="flex flex-wrap gap-2">
                  {PALETTE.map((c) => (
                    <button key={c} type="button" onClick={() => setColor(c)}
                      className={cn("relative h-8 w-8 rounded-full border-2 transition-transform hover:scale-110", color === c ? "border-foreground" : "border-transparent")}
                      style={{ backgroundColor: c }}>
                      {color === c && <Check className="absolute inset-0 m-auto h-4 w-4 text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Convidar primeiro membro */}
              <div className="space-y-2 rounded-lg border border-border bg-muted/30 p-3">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Convidar primeiro membro (opcional)</Label>
                <Input type="email" placeholder="email@exemplo.com" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} />
                <Select value={inviteRole} onValueChange={(v) => setInviteRole(v as typeof inviteRole)}>
                  <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="member">Membro</SelectItem>
                    <SelectItem value="viewer">Visualizador</SelectItem>
                    <SelectItem value="guest">Convidado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
              <Button onClick={() => createMutation.mutate()} disabled={!canSubmit || createMutation.isPending}>
                {createMutation.isPending ? "A criar..." : "Criar equipa"}
              </Button>
            </DialogFooter>
          </>
        ) : (
          /* Passo 2 — mostrar link gerado */
          <div className="space-y-4 py-2">
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
              <Check className="mx-auto h-8 w-8 text-emerald-600" />
              <p className="mt-2 font-medium text-foreground">Equipa criada!</p>
              <p className="mt-1 text-xs text-muted-foreground">Partilha o link abaixo para convidar membros.</p>
            </div>

            <div className="rounded-lg border border-border bg-muted/50 p-3 space-y-2">
              <p className="text-xs font-medium text-muted-foreground">Link de convite (válido 7 dias):</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 truncate rounded bg-muted px-2 py-1.5 text-xs text-foreground">{inviteLink}</code>
                <Button size="icon" variant="ghost" className="h-8 w-8 shrink-0" onClick={copyLink}>
                  {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <DialogFooter>
              <Button className="w-full" onClick={() => { onOpenChange(false); reset(); }}>
                <X className="mr-2 h-4 w-4" /> Fechar
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ─────────────────────────────────────────────
// JoinTeamDialog
// ─────────────────────────────────────────────
function JoinTeamDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { user } = useAuthStore();
  const qc = useQueryClient();
  const [token, setToken] = useState("");

  const mutation = useMutation({
    mutationFn: () => {
      const extracted = token.trim().split("/").pop() ?? token.trim();
      return teamsApi.joinByToken(extracted, { email: user?.email, fullName: user?.fullName });
    },
    onSuccess: (data) => {
      toast.success(`Entraste na equipa "${data.teamName}"!`);
      qc.invalidateQueries({ queryKey: ["teams"] });
      onOpenChange(false);
      setToken("");
    },
    onError: () => toast.error("Token inválido ou expirado.", { description: "Verifica o link e tenta novamente." }),
  });

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setToken(""); }}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Entrar numa equipa</DialogTitle>
          <DialogDescription>Cola o link de convite ou o código token que recebeste.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <Label>Link ou código de convite</Label>
            <Input placeholder="https://... ou só o token" value={token} onChange={(e) => setToken(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button onClick={() => mutation.mutate()} disabled={!token.trim() || mutation.isPending}>
            <LogIn className="mr-2 h-4 w-4" />
            {mutation.isPending ? "A entrar..." : "Entrar na equipa"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ─────────────────────────────────────────────
// TeamDetailsDialog
// ─────────────────────────────────────────────
function TeamDetailsDialog({ team, members, open, onOpenChange }: {
  team: BackendTeam | null; members: TeamMember[];
  open: boolean; onOpenChange: (v: boolean) => void;
}) {
  const [tab, setTab]                 = useState<"members" | "invite">("members");
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole]   = useState<"member" | "admin" | "manager" | "viewer" | "guest">("member");
  const [inviteLink, setInviteLink]   = useState<string | null>(null);
  const [copied, setCopied]           = useState(false);

  const inviteMutation = useMutation({
    mutationFn: () => teamsApi.createInviteLink({
      teamId: team?.id, teamName: team?.name,
      email: inviteEmail.trim() || undefined,
      role: inviteRole, expiresInDays: 7,
    }),
    onSuccess: (data) => {
      setInviteLink(data.inviteUrl || `${window.location.origin}/join/${data.token}`);
      toast.success("Link de convite gerado!");
      setInviteEmail("");
    },
    onError: () => toast.error("Erro ao gerar convite."),
  });

  function copyLink() {
    if (!inviteLink) return;
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Link copiado!");
  }

  // ✅ Não retorna null — fica montado mas com open=false o Dialog não mostra nada
  const color = team ? (team.avatarColor || colorForId(team.id)) : PALETTE[0];

  return (
    <Dialog open={open && !!team} onOpenChange={(v) => {
      onOpenChange(v);
      if (!v) { setTab("members"); setInviteLink(null); setInviteEmail(""); }
    }}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden flex flex-col p-0">
        {team && (
          <>
            <DialogHeader className="border-b border-border p-6 pb-4">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-white" style={{ backgroundColor: color }}>
                  {getInitials(team.name)}
                </div>
                <div className="flex-1">
                  <DialogTitle className="text-xl">{team.name}</DialogTitle>
                  {team.description && <p className="mt-1 text-sm text-muted-foreground">{team.description}</p>}
                </div>
              </div>
              <div className="mt-4 flex gap-1 rounded-lg bg-muted p-1">
                {(["members", "invite"] as const).map((t) => (
                  <button key={t} onClick={() => setTab(t)}
                    className={cn("flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                      tab === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
                    {t === "members" ? `Membros (${members.length})` : "Convidar membro"}
                  </button>
                ))}
              </div>
            </DialogHeader>

            <div className="flex-1 overflow-y-auto p-6">
              {tab === "members" ? (
                <div className="space-y-2">
                  {members.length === 0 && (
                    <div className="py-12 text-center text-sm text-muted-foreground">
                      Esta equipa ainda não tem membros.
                      <br />
                      <button className="mt-2 text-primary underline" onClick={() => setTab("invite")}>Convidar alguém</button>
                    </div>
                  )}
                  {members.map((m) => (
                    <div key={m.id} className="flex items-center gap-3 rounded-lg border border-border p-3">
                      <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium">{getInitials(m.fullName)}</div>
                        <span className={cn("absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card",
                          m.presence === "online" ? "bg-emerald-500" : m.presence === "away" ? "bg-amber-500" : "bg-muted-foreground/40")} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-medium text-foreground">{m.fullName}</div>
                        <div className="text-xs text-muted-foreground">{m.email}</div>
                      </div>
                      <div className="text-right text-xs text-muted-foreground">
                        <div>{m.completedTasks ?? 0}/{m.totalTasks ?? 0} tarefas</div>
                        <div>{m.onTimeRate ?? 0}% no prazo</div>
                      </div>
                      <span className={cn("rounded-full border px-2 py-0.5 text-xs font-medium",
                        m.role === "admin"   ? "bg-purple-500/15 text-purple-600 border-purple-500/30" :
                        m.role === "manager" ? "bg-primary/15 text-primary border-primary/30" :
                                              "bg-muted text-muted-foreground border-border")}>
                        {m.role}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-5">
                  <p className="text-sm text-muted-foreground">Gera um link de convite para adicionar um novo membro. Expira em 7 dias.</p>
                  <div className="space-y-2">
                    <Label>Email do convidado (opcional)</Label>
                    <Input type="email" placeholder="nome@exemplo.com" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} />
                    <p className="text-xs text-muted-foreground">Se preenchido, o convite fica reservado para este email.</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Papel na equipa</Label>
                    <Select value={inviteRole} onValueChange={(v) => setInviteRole(v as typeof inviteRole)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="member">Membro</SelectItem>
                        <SelectItem value="viewer">Visualizador</SelectItem>
                        <SelectItem value="guest">Convidado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={() => inviteMutation.mutate()} disabled={inviteMutation.isPending} className="w-full gap-2">
                    <UserPlus className="h-4 w-4" />
                    {inviteMutation.isPending ? "A gerar..." : "Gerar link de convite"}
                  </Button>
                  {inviteLink && (
                    <div className="rounded-lg border border-border bg-muted/50 p-3 space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Link gerado:</p>
                      <div className="flex items-center gap-2">
                        <code className="flex-1 truncate rounded bg-muted px-2 py-1 text-xs text-foreground">{inviteLink}</code>
                        <Button size="icon" variant="ghost" className="h-8 w-8 shrink-0" onClick={copyLink}>
                          {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ─────────────────────────────────────────────
// TeamPage — componente principal
// ─────────────────────────────────────────────
export default function TeamPage() {
  const { user } = useAuthStore();
  const qc = useQueryClient();

  const [filter,       setFilter]      = useState<FilterId>("all");
  const [search,       setSearch]      = useState("");
  const [joinOpen,     setJoinOpen]    = useState(false);
  const [createOpen,   setCreateOpen]  = useState(false); // ✅ estado dedicado para criar
  const [detailsOpen,  setDetailsOpen] = useState(false);
  const [selectedId,   setSelectedId]  = useState<string | null>(null);

  const {
    data: teams = [],
    isLoading: loadingTeams,
    isError: errorTeams,
    refetch: refetchTeams,
  } = useQuery({
    queryKey: ["teams"],
    queryFn:  () => teamsApi.list(),
    enabled:  !!user,
    staleTime: 30_000,
  });

const {
  data: membersMap = {},
  isLoading: loadingMembers,
} = useQuery({
  queryKey: ["teams-members", teams.map((t) => t.id).join(",")],

  queryFn: async () => {
    const entries = await Promise.all(
      teams.map(async (t) => {
        try {
          const raw = await teamsApi.members(t.id);

          const members: TeamMember[] =
            Array.isArray(raw)
              ? raw
              : Array.isArray(raw?.members)
                ? raw.members
                : Array.isArray(raw?.data)
                  ? raw.data
                  : [];

          return [t.id, members] as [string, TeamMember[]];
        } catch {
          return [t.id, []] as [string, TeamMember[]];
        }
      })
    );

    return Object.fromEntries(entries) as Record<string, TeamMember[]>;
  },

  enabled: teams.length > 0,
  staleTime: 30_000,
});

  const isLoading = loadingTeams || loadingMembers;

  const totals = useMemo(() => {
    const allMembers = Object.values(membersMap).flat();
    const unique     = Array.from(new Map(allMembers.map((m) => [m.id, m])).values());
    const completed  = unique.reduce((s, m) => s + (m.completedTasks ?? 0), 0);
    const onTime     = unique.length ? Math.round(unique.reduce((s, m) => s + (m.onTimeRate ?? 0), 0) / unique.length) : 0;
    const online     = unique.filter((m) => m.presence === "online").length;
    return { teamsCount: teams.length, online, completed, onTime };
  }, [teams, membersMap]);

  const filtered = useMemo(() => {
    let r = teams;
    if (filter === "online") r = r.filter((t) => (membersMap[t.id] ?? []).some((m) => m.presence === "online"));
    if (filter === "large")  r = r.filter((t) => (membersMap[t.id] ?? []).length >= 3);
    if (search.trim()) {
      const q = search.toLowerCase();
      r = r.filter((t) =>
        t.name.toLowerCase().includes(q) ||
        (t.description ?? "").toLowerCase().includes(q) ||
        (membersMap[t.id] ?? []).some((m) => m.fullName.toLowerCase().includes(q) || m.email.toLowerCase().includes(q))
      );
    }
    return r;
  }, [teams, membersMap, filter, search]);

  const selectedTeam    = teams.find((t) => t.id === selectedId) ?? null;
  const selectedMembers = selectedId ? (membersMap[selectedId] ?? []) : [];

  if (errorTeams) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border bg-card p-12 shadow-sm">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">Erro ao carregar equipas</h3>
        <p className="mt-1 text-sm text-muted-foreground">Verifique a ligação e tente novamente.</p>
        <Button variant="outline" className="mt-4 gap-2" onClick={() => refetchTeams()}>
          <RefreshCw className="h-4 w-4" /> Tentar novamente
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Métricas */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-28 rounded-2xl" />)
          : <>
              <MetricCard label="Equipas"            value={totals.teamsCount} icon={<Users className="h-4 w-4" />} />
              <MetricCard label="Membros online"      value={totals.online}     icon={<Activity className="h-4 w-4" />}     tone="emerald" />
              <MetricCard label="Tarefas concluídas"  value={totals.completed}  icon={<CheckCircle className="h-4 w-4" />} />
              <MetricCard label="Taxa no prazo"       value={`${totals.onTime}%`} icon={<TrendingUp className="h-4 w-4" />} tone={totals.onTime >= 75 ? "emerald" : "amber"} />
            </>
        }
      </div>

      {/* Filtros + procura + botões */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-1 rounded-lg bg-muted p-1">
          {filterTabs.map((tab) => (
            <button key={tab.id} onClick={() => setFilter(tab.id)}
              className={cn("rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                filter === tab.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-1 gap-2 md:max-w-lg">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Procurar equipas ou membros..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
          <Button variant="outline" onClick={() => setJoinOpen(true)} className="gap-2 shrink-0">
            <LogIn className="h-4 w-4" /> Entrar numa equipa
          </Button>
          {/* ✅ Agora abre createOpen, não detailsOpen */}
          <Button onClick={() => setCreateOpen(true)} className="gap-2 shrink-0">
            <Plus className="h-4 w-4" /> Nova equipa
          </Button>
        </div>
      </div>

      {/* Grelha */}
      {isLoading ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-72 rounded-2xl" />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((team) => (
            <TeamCard key={team.id} team={team} members={membersMap[team.id] ?? []}
              onOpenDetails={() => { setSelectedId(team.id); setDetailsOpen(true); }} />
          ))}
          {/* ✅ CreateTeamCard também abre createOpen */}
          {filter === "all" && !search.trim() && (
            <CreateTeamCard onClick={() => setCreateOpen(true)} />
          )}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-border bg-card/40 p-12 text-center">
              <Users className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
              <div className="text-sm text-muted-foreground">
                {search.trim() ? `Nenhuma equipa para "${search}"` : "Nenhuma equipa neste filtro"}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ✅ Modal criar equipa — estado próprio, não depende de selectedTeam */}
      <CreateTeamDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        onCreated={() => {
          qc.invalidateQueries({ queryKey: ["teams"] });
          setCreateOpen(false);
        }}
      />

      {/* Modal entrar por token */}
      <JoinTeamDialog open={joinOpen} onOpenChange={setJoinOpen} />

      {/* Modal detalhes — só abre quando há equipa seleccionada */}
      <TeamDetailsDialog
        team={selectedTeam}
        members={selectedMembers}
        open={detailsOpen}
        onOpenChange={(v) => {
          setDetailsOpen(v);
          if (!v) qc.invalidateQueries({ queryKey: ["teams-members"] });
        }}
      />
    </div>
  );
}