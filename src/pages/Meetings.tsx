import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Video, Clock, CheckCircle, ListChecks, Bot, Plus, Calendar, Loader2,
  Users, ExternalLink, Play, Mic, Search, Filter, FileText,
  MoreVertical, Copy, Share2, Link2, X, LogIn, KeyRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription,
} from "@/components/ui/sheet";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { meetingApi, projectApi, type Meeting, type MeetingSummary } from "@/lib/api";
import { useAuthStore } from "@/store/auth.store";
import { format, isToday, isTomorrow, isFuture, parseISO, isThisWeek } from "date-fns";
import { pt } from "date-fns/locale";

// ==================== HELPERS ====================

const VIDEO_BASE = import.meta.env.VITE_VIDEO_BASE_URL || "http://localhost:3005/api/v1";
const LIVEKIT_BASE = VIDEO_BASE.replace("/api/v1", "");

function getMeetingStatus(meeting: Meeting) {
  if (meeting.status === "completed" || meeting.status === "ended" || meeting.status === "cancelled") return "completed";
  if (meeting.status === "active" || meeting.status === "in_progress" || meeting.status === "live") return "live";
  if (!meeting.scheduledFor) return "scheduled";
  const scheduled = parseISO(meeting.scheduledFor);
  const diff = scheduled.getTime() - Date.now();
  if (diff < 0 && diff > -3600000) return "live";
  if (diff <= 0) return "completed";
  if (diff <= 30 * 60000) return "starting_soon";
  return "scheduled";
}

function formatMeetingTime(scheduledFor?: string) {
  if (!scheduledFor) return "Sem data";
  const d = parseISO(scheduledFor);
  const time = format(d, "HH:mm");
  if (isToday(d)) return `Hoje · ${time}`;
  if (isTomorrow(d)) return `Amanhã · ${time}`;
  return format(d, "dd MMM yyyy · HH:mm", { locale: pt });
}

function getMeetingLink(meetingId: string) {
  return `${LIVEKIT_BASE}/api/v1/meetings/${meetingId}/join`;
}

function getDemoUrl(meetingId: string, userId: string, name: string) {
  return `${LIVEKIT_BASE}/api/v1/meetings/${meetingId}/demo?userId=${encodeURIComponent(userId)}&role=host&name=${encodeURIComponent(name)}`;
}

function getMinDateTime() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 16);
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
    live: { label: "🔴 Em curso", variant: "destructive" },
    starting_soon: { label: "⏱ Em breve", variant: "default" },
    scheduled: { label: "Agendada", variant: "secondary" },
    completed: { label: "Concluída", variant: "outline" },
  };
  const info = map[status] || map.scheduled;
  return <Badge variant={info.variant} className="text-xs">{info.label}</Badge>;
}

// ==================== MOCK DATA ====================

const mockMeetings: Meeting[] = [
  {
    id: "m1", tenantId: "t1", createdBy: "u1", title: "Standup — Equipa Torres 5G",
    scheduledFor: new Date().toISOString().replace(/T.*/, "T09:00:00.000Z"),
    maxParticipants: 10, isRecorded: true, status: "completed",
    participants: [{ userId: "u1", name: "Ana Silva" }, { userId: "u2", name: "Carlos Mendes" }, { userId: "u3", name: "Maria João" }],
  },
  {
    id: "m2", tenantId: "t1", createdBy: "u1", title: "Review Sprint — Fibra Benguela",
    scheduledFor: new Date(Date.now() + 25 * 60000).toISOString(),
    maxParticipants: 15, isRecorded: true, status: "scheduled", projectId: "p1",
    participants: [{ userId: "u1", name: "Ana Silva" }, { userId: "u4", name: "Pedro Santos" }],
  },
  {
    id: "m3", tenantId: "t1", createdBy: "u2", title: "Sync com Cliente — Terminal Lobito",
    scheduledFor: new Date(Date.now() + 3 * 3600000).toISOString(),
    maxParticipants: 8, isRecorded: false, status: "scheduled",
    participants: [{ userId: "u2", name: "Carlos Mendes" }],
  },
  {
    id: "m4", tenantId: "t1", createdBy: "u1", title: "Planning Sprint #14",
    scheduledFor: new Date(Date.now() + 24 * 3600000).toISOString(),
    maxParticipants: 12, isRecorded: true, status: "scheduled", projectId: "p2",
    participants: [{ userId: "u1", name: "Ana Silva" }, { userId: "u3", name: "Maria João" }, { userId: "u5", name: "João Lopes" }],
  },
  {
    id: "m5", tenantId: "t1", createdBy: "u1", title: "Retrospectiva Sprint #13",
    scheduledFor: new Date(Date.now() - 24 * 3600000).toISOString(),
    maxParticipants: 10, isRecorded: true, status: "completed",
    participants: [{ userId: "u1", name: "Ana Silva" }, { userId: "u2", name: "Carlos Mendes" }],
  },
];

const mockSummary: MeetingSummary = {
  decisions: [
    "Priorizar instalação da Torre #12 esta semana",
    "Adiar manutenção da Torre #8 para próxima sprint",
    "Carlos Mendes vai contactar novo fornecedor de antenas",
  ],
  tasksCreated: [
    "Preparar relatório de instalação — Torre #12",
    "Contactar fornecedor AlphaTech — orçamento antenas",
    "Actualizar timeline no dashboard do projecto",
  ],
};

// ==================== CREATED MEETING INFO ====================

interface CreatedMeetingInfo {
  id: string;
  title: string;
  scheduledFor: string;
  link: string;
  isRecorded: boolean;
  maxParticipants: number;
}

// ==================== MAIN ====================

export default function Meetings() {
  const { toast } = useToast();
  const { user } = useAuthStore();
  const qc = useQueryClient();

  const [createOpen, setCreateOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  const [joinPassword, setJoinPassword] = useState("");
  const [joinLoading, setJoinLoading] = useState(false);
  const [createdMeeting, setCreatedMeeting] = useState<CreatedMeetingInfo | null>(null);
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [summaryOpen, setSummaryOpen] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState("");
  const [scheduledFor, setScheduledFor] = useState("");
  const [maxParticipants, setMaxParticipants] = useState("10");
  const [isRecorded, setIsRecorded] = useState(true);

  const { data: projects = [] } = useQuery({
    queryKey: ["projects", user?.tenantId],
    queryFn: () => projectApi.list(user!.tenantId),
    enabled: !!user?.tenantId,
  });

  const [localMeetings, setLocalMeetings] = useState<Meeting[]>([]);
  const meetings = [...mockMeetings, ...localMeetings];

  const createMutation = useMutation({
    mutationFn: (data: Record<string, unknown>) => meetingApi.create(data),
    onSuccess: (data) => {
      const info: CreatedMeetingInfo = {
        id: data.id,
        title: data.title || title,
        scheduledFor: data.scheduledFor || scheduledFor,
        link: getMeetingLink(data.id),
        isRecorded: data.isRecorded ?? isRecorded,
        maxParticipants: data.maxParticipants ?? parseInt(maxParticipants),
      };
      setCreatedMeeting(info);
      setLocalMeetings((prev) => [...prev, data]);
      setCreateOpen(false);
      resetForm();
      toast({ title: "Reunião criada!", description: `"${info.title}" agendada com sucesso.` });
      qc.invalidateQueries({ queryKey: ["meetings"] });
    },
    onError: () => {
      // Fallback: create locally
      const fakeId = `local-${Date.now()}`;
      const info: CreatedMeetingInfo = {
        id: fakeId,
        title: title.trim(),
        scheduledFor,
        link: getMeetingLink(fakeId),
        isRecorded,
        maxParticipants: parseInt(maxParticipants),
      };
      const fakeMeeting: Meeting = {
        id: fakeId, tenantId: user?.tenantId || "t1", createdBy: user?.id || "u1",
        title: title.trim(), description: description.trim() || undefined,
        projectId: projectId || undefined, scheduledFor,
        maxParticipants: parseInt(maxParticipants), isRecorded, status: "scheduled",
        participants: [{ userId: user?.id || "u1", name: user?.fullName || "Eu" }],
      };
      setCreatedMeeting(info);
      setLocalMeetings((prev) => [...prev, fakeMeeting]);
      setCreateOpen(false);
      resetForm();
      toast({ title: "Reunião criada (local)", description: `"${info.title}" criada offline.` });
    },
  });

  const resetForm = () => {
    setTitle(""); setDescription(""); setProjectId(""); setScheduledFor(""); setMaxParticipants("10"); setIsRecorded(true);
  };

  const handleCreate = () => {
    if (!title.trim()) { toast({ title: "Erro", description: "Título é obrigatório.", variant: "destructive" }); return; }
    if (!scheduledFor) { toast({ title: "Erro", description: "Data e hora são obrigatórios.", variant: "destructive" }); return; }
    const selectedDate = new Date(scheduledFor);
    if (selectedDate < new Date()) { toast({ title: "Erro", description: "A data não pode ser no passado.", variant: "destructive" }); return; }
    createMutation.mutate({
      title: title.trim(), description: description.trim() || undefined,
      projectId: projectId || undefined, tenantId: user?.tenantId, createdBy: user?.id,
      scheduledFor: new Date(scheduledFor).toISOString(), maxParticipants: parseInt(maxParticipants) || 10, isRecorded,
    });
  };

  const handleJoin = (meeting: Meeting) => {
    if (!user) { toast({ title: "Não autenticado", variant: "destructive" }); return; }
    const url = getDemoUrl(meeting.id, user.id, user.fullName || user.email);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopyLink = (meetingId: string) => {
    const link = getMeetingLink(meetingId);
    navigator.clipboard.writeText(link);
    toast({ title: "Link copiado!", description: "O link da reunião foi copiado." });
  };

  const handleJoinByCode = () => {
    const code = joinCode.trim();
    if (!code) { toast({ title: "Código obrigatório", description: "Introduza o código da sala.", variant: "destructive" }); return; }
    if (!joinPassword.trim()) { toast({ title: "Senha obrigatória", description: "Introduza a senha da sala.", variant: "destructive" }); return; }
    setJoinLoading(true);
    setTimeout(() => {
      setJoinLoading(false);
      const found = meetings.find((m) => m.id === code || m.id.endsWith(code));
      if (!found) {
        toast({ title: "Sala não encontrada", description: "Verifique o código de acesso.", variant: "destructive" });
        return;
      }
      // Mock: accept any non-empty password for the demo
      setJoinOpen(false);
      setJoinCode(""); setJoinPassword("");
      toast({ title: "A entrar na sala...", description: found.title });
      handleJoin(found);
    }, 600);
  };


  // Filters
  const filtered = meetings.filter((m) => {
    const status = getMeetingStatus(m);
    if (filterStatus !== "all" && status !== filterStatus) return false;
    if (searchQuery && !m.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const todayMeetings = filtered.filter((m) => m.scheduledFor && isToday(parseISO(m.scheduledFor)));
  const upcomingMeetings = filtered.filter((m) => {
    if (!m.scheduledFor) return false;
    const d = parseISO(m.scheduledFor);
    return isFuture(d) && !isToday(d);
  });
  const pastMeetings = filtered.filter((m) => getMeetingStatus(m) === "completed");
  const liveMeetings = meetings.filter((m) => ["live", "starting_soon"].includes(getMeetingStatus(m)));

  const totalToday = meetings.filter((m) => m.scheduledFor && isToday(parseISO(m.scheduledFor))).length;
  const totalWeek = meetings.filter((m) => m.scheduledFor && isThisWeek(parseISO(m.scheduledFor), { locale: pt })).length;
  const totalRecorded = meetings.filter((m) => m.isRecorded).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Reuniões</h1>
          <p className="text-sm text-muted-foreground">Agende, participe e reveja reuniões da equipa</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1.5" onClick={() => setJoinOpen(true)}>
            <LogIn className="h-4 w-4" /> Ingressar na reunião
          </Button>
          <Button className="gap-1.5" onClick={() => setCreateOpen(true)}>
            <Plus className="h-4 w-4" /> Nova Reunião
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { icon: Calendar, value: totalToday, label: "Hoje", bg: "bg-primary/10", color: "text-primary" },
          { icon: Video, value: liveMeetings.length, label: "Em curso", bg: "bg-destructive/10", color: "text-destructive" },
          { icon: Clock, value: totalWeek, label: "Esta semana", bg: "bg-secondary", color: "text-foreground" },
          { icon: Mic, value: totalRecorded, label: "Gravadas", bg: "bg-accent", color: "text-accent-foreground" },
        ].map(({ icon: Icon, value, label, bg, color }) => (
          <div key={label} className="rounded-xl border bg-card p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${bg} ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Live Banner */}
      {liveMeetings.length > 0 && (
        <div className="rounded-xl border-2 border-destructive/30 bg-destructive/5 p-4">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-destructive" />
            </span>
            Reuniões em curso ou a começar
          </h3>
          <div className="space-y-2">
            {liveMeetings.map((m) => (
              <div key={m.id} className="flex items-center justify-between rounded-lg bg-card p-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 text-destructive" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{m.title}</p>
                    <p className="text-xs text-muted-foreground">{formatMeetingTime(m.scheduledFor)} · {m.participants?.length || 0} participantes</p>
                  </div>
                </div>
                <Button size="sm" className="gap-1.5" onClick={() => handleJoin(m)}>
                  <Play className="h-3.5 w-3.5" /> Entrar
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search & Filter */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Pesquisar reuniões..." className="pl-9" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="live">Em curso</SelectItem>
            <SelectItem value="starting_soon">Em breve</SelectItem>
            <SelectItem value="scheduled">Agendadas</SelectItem>
            <SelectItem value="completed">Concluídas</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="today" className="w-full">
        <TabsList>
          <TabsTrigger value="today">Hoje ({todayMeetings.length})</TabsTrigger>
          <TabsTrigger value="upcoming">Próximas ({upcomingMeetings.length})</TabsTrigger>
          <TabsTrigger value="past">Passadas ({pastMeetings.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="mt-4 space-y-3">
          {todayMeetings.length === 0 ? <EmptyState message="Nenhuma reunião para hoje" /> :
            todayMeetings.map((m) => <MeetingCard key={m.id} meeting={m} onJoin={handleJoin} onDetails={setSelectedMeeting} onCopyLink={handleCopyLink} onViewSummary={setSummaryOpen} />)}
        </TabsContent>
        <TabsContent value="upcoming" className="mt-4 space-y-3">
          {upcomingMeetings.length === 0 ? <EmptyState message="Nenhuma reunião agendada" /> :
            upcomingMeetings.map((m) => <MeetingCard key={m.id} meeting={m} onJoin={handleJoin} onDetails={setSelectedMeeting} onCopyLink={handleCopyLink} onViewSummary={setSummaryOpen} />)}
        </TabsContent>
        <TabsContent value="past" className="mt-4 space-y-3">
          {pastMeetings.length === 0 ? <EmptyState message="Nenhuma reunião passada" /> :
            pastMeetings.map((m) => <MeetingCard key={m.id} meeting={m} onJoin={handleJoin} onDetails={setSelectedMeeting} onCopyLink={handleCopyLink} onViewSummary={setSummaryOpen} />)}
        </TabsContent>
      </Tabs>

      {/* ========== CREATE MEETING DIALOG ========== */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Video className="h-5 w-5 text-primary" /> Nova Reunião
            </DialogTitle>
            <DialogDescription>Preencha os dados para agendar uma reunião.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Título *</Label>
              <Input placeholder="Ex: Review Sprint #14" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Descrição</Label>
              <Textarea placeholder="Agenda da reunião..." value={description} onChange={(e) => setDescription(e.target.value)} rows={2} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Projecto</Label>
                <Select value={projectId} onValueChange={setProjectId}>
                  <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Nenhum</SelectItem>
                    {projects.map((p) => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Data & Hora *</Label>
                <Input type="datetime-local" value={scheduledFor} onChange={(e) => setScheduledFor(e.target.value)} min={getMinDateTime()} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Máx. Participantes</Label>
                <Input type="number" min="2" max="100" value={maxParticipants} onChange={(e) => setMaxParticipants(e.target.value)} />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <Label className="text-sm">Gravar reunião</Label>
                <Switch checked={isRecorded} onCheckedChange={setIsRecorded} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setCreateOpen(false); resetForm(); }}>Cancelar</Button>
            <Button onClick={handleCreate} disabled={createMutation.isPending} className="gap-1.5">
              {createMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Calendar className="h-4 w-4" />}
              Agendar Reunião
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ========== CREATED MEETING CONFIRMATION ========== */}
      <Dialog open={!!createdMeeting} onOpenChange={() => setCreatedMeeting(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" /> Reunião Criada!
            </DialogTitle>
            <DialogDescription>A sua reunião foi agendada com sucesso.</DialogDescription>
          </DialogHeader>
          {createdMeeting && (
            <div className="space-y-4 py-2">
              <div className="rounded-lg border bg-muted/30 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Título</span>
                  <span className="text-sm font-medium text-foreground">{createdMeeting.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Data & Hora</span>
                  <span className="text-sm font-medium text-foreground">
                    {formatMeetingTime(createdMeeting.scheduledFor ? new Date(createdMeeting.scheduledFor).toISOString() : undefined)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Participantes</span>
                  <span className="text-sm font-medium text-foreground">Máx. {createdMeeting.maxParticipants}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Gravação</span>
                  <Badge variant={createdMeeting.isRecorded ? "default" : "outline"} className="text-xs">
                    {createdMeeting.isRecorded ? "Ativada" : "Desativada"}
                  </Badge>
                </div>
              </div>

              {/* Access link */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Link de acesso</Label>
                <div className="flex items-center gap-2 rounded-lg border bg-card p-2.5">
                  <Link2 className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="flex-1 truncate text-xs font-mono text-muted-foreground">{createdMeeting.link}</span>
                  <Button size="sm" variant="ghost" className="h-7 gap-1 px-2 text-xs" onClick={() => { navigator.clipboard.writeText(createdMeeting.link); toast({ title: "Link copiado!" }); }}>
                    <Copy className="h-3 w-3" /> Copiar
                  </Button>
                </div>
              </div>
            </div>
          )}
          <DialogFooter className="flex-col gap-2 sm:flex-row">
            <Button variant="outline" className="gap-1.5" onClick={() => {
              if (createdMeeting) {
                const text = `Reunião: ${createdMeeting.title}\nData: ${formatMeetingTime(new Date(createdMeeting.scheduledFor).toISOString())}\nLink: ${createdMeeting.link}`;
                navigator.clipboard.writeText(text);
                toast({ title: "Detalhes copiados!" });
              }
            }}>
              <Share2 className="h-4 w-4" /> Partilhar
            </Button>
            <Button onClick={() => setCreatedMeeting(null)}>Concluir</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ========== MEETING DETAIL SHEET ========== */}
      <Sheet open={!!selectedMeeting} onOpenChange={(open) => { if (!open) setSelectedMeeting(null); }}>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto">
          {selectedMeeting && (
            <>
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-primary" />
                  {selectedMeeting.title}
                </SheetTitle>
                <SheetDescription>
                  <StatusBadge status={getMeetingStatus(selectedMeeting)} />
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                {/* Join / Share */}
                {getMeetingStatus(selectedMeeting) !== "completed" && (
                  <div className="space-y-3">
                    <Button className="w-full gap-2" onClick={() => handleJoin(selectedMeeting)}>
                      <Play className="h-4 w-4" />
                      {getMeetingStatus(selectedMeeting) === "live" ? "Entrar agora" : "Ingressar na reunião"}
                    </Button>
                    <div className="flex items-center gap-2 rounded-lg border bg-muted/30 p-2.5">
                      <Link2 className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <span className="flex-1 truncate text-xs font-mono text-muted-foreground">
                        {getMeetingLink(selectedMeeting.id)}
                      </span>
                      <Button size="sm" variant="ghost" className="h-7 gap-1 px-2 text-xs" onClick={() => handleCopyLink(selectedMeeting.id)}>
                        <Copy className="h-3 w-3" /> Copiar
                      </Button>
                    </div>
                    <Button variant="outline" className="w-full gap-2" onClick={() => {
                      const link = getMeetingLink(selectedMeeting.id);
                      const text = `Reunião: ${selectedMeeting.title}\nData: ${formatMeetingTime(selectedMeeting.scheduledFor)}\nLink: ${link}`;
                      navigator.clipboard.writeText(text);
                      toast({ title: "Detalhes copiados para partilhar!" });
                    }}>
                      <Share2 className="h-4 w-4" /> Partilhar link de acesso
                    </Button>
                  </div>
                )}

                {/* Details */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground">Detalhes</h3>
                  <div className="rounded-lg border bg-muted/20 divide-y">
                    {[
                      { label: "Data & Hora", value: formatMeetingTime(selectedMeeting.scheduledFor) },
                      { label: "Participantes", value: `${selectedMeeting.participants?.length || 0} / ${selectedMeeting.maxParticipants || "∞"}` },
                      { label: "Gravação", value: selectedMeeting.isRecorded ? "Ativada" : "Desativada" },
                      { label: "ID", value: selectedMeeting.id },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between px-3 py-2.5">
                        <span className="text-xs text-muted-foreground">{row.label}</span>
                        <span className="text-xs font-medium text-foreground">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                {selectedMeeting.description && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-foreground">Descrição</h3>
                    <p className="text-sm text-muted-foreground">{selectedMeeting.description}</p>
                  </div>
                )}

                {/* Participants */}
                {selectedMeeting.participants && selectedMeeting.participants.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-foreground">Participantes</h3>
                    <div className="space-y-1.5">
                      {selectedMeeting.participants.map((p, i) => (
                        <div key={i} className="flex items-center gap-2 rounded-lg border bg-card px-3 py-2">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                            {p.name?.charAt(0) || "?"}
                          </div>
                          <span className="text-sm text-foreground">{p.name || p.userId}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* AI Summary for completed */}
                {getMeetingStatus(selectedMeeting) === "completed" && (
                  <div className="space-y-3">
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Bot className="h-4 w-4 text-primary" /> Resumo IA
                    </h3>
                    <div className="rounded-lg border bg-primary/5 p-4 space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1.5">Decisões Tomadas</p>
                        <ul className="space-y-1 pl-4">
                          {mockSummary.decisions.map((d, i) => <li key={i} className="list-disc text-xs text-muted-foreground">{d}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1.5">Tarefas Criadas</p>
                        <ul className="space-y-1 pl-4">
                          {mockSummary.tasksCreated.map((t, i) => <li key={i} className="list-disc text-xs text-muted-foreground">{t}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      {/* ========== JOIN BY CODE DIALOG ========== */}
      <Dialog open={joinOpen} onOpenChange={(o) => { setJoinOpen(o); if (!o) { setJoinCode(""); setJoinPassword(""); } }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <LogIn className="h-5 w-5 text-primary" /> Ingressar na reunião
            </DialogTitle>
            <DialogDescription>Introduza o código de acesso e a senha da sala.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Código da sala *</Label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Ex: m2 ou abc-123-xyz"
                  className="pl-9 font-mono"
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Senha da sala *</Label>
              <Input
                type="password"
                placeholder="••••••••"
                value={joinPassword}
                onChange={(e) => setJoinPassword(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleJoinByCode(); }}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Recebeu um link de convite? Pode também colar o ID da reunião que vem após <code className="rounded bg-muted px-1">/meetings/</code>.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setJoinOpen(false)}>Cancelar</Button>
            <Button onClick={handleJoinByCode} disabled={joinLoading} className="gap-1.5">
              {joinLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogIn className="h-4 w-4" />}
              Entrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ========== AI SUMMARY DIALOG ========== */}
      <Dialog open={!!summaryOpen} onOpenChange={() => setSummaryOpen(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" /> Resumo IA
            </DialogTitle>
            <DialogDescription>Resumo gerado automaticamente pela IA</DialogDescription>
          </DialogHeader>
          <div className="space-y-5 py-2">
            <div>
              <h3 className="mb-2.5 flex items-center gap-2 text-sm font-semibold text-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" /> Decisões Tomadas
              </h3>
              <ul className="space-y-2 pl-6">
                {mockSummary.decisions.map((d, i) => <li key={i} className="list-disc text-sm text-muted-foreground">{d}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="mb-2.5 flex items-center gap-2 text-sm font-semibold text-foreground">
                <ListChecks className="h-4 w-4 text-primary" /> Tarefas Criadas
              </h3>
              <ul className="space-y-2 pl-6">
                {mockSummary.tasksCreated.map((t, i) => <li key={i} className="list-disc text-sm text-muted-foreground">{t}</li>)}
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSummaryOpen(null)}>Fechar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ==================== MEETING CARD ====================

function MeetingCard({
  meeting: m, onJoin, onDetails, onCopyLink, onViewSummary,
}: {
  meeting: Meeting;
  onJoin: (m: Meeting) => void;
  onDetails: (m: Meeting) => void;
  onCopyLink: (id: string) => void;
  onViewSummary: (id: string) => void;
}) {
  const status = getMeetingStatus(m);
  const isLive = status === "live" || status === "starting_soon";
  const isDone = status === "completed";

  return (
    <div
      className={`flex items-center gap-4 rounded-xl border p-4 shadow-sm transition-all cursor-pointer hover:shadow-md ${isLive ? "border-destructive/30 bg-destructive/5" : "bg-card hover:bg-accent/30"}`}
      onClick={() => onDetails(m)}
    >
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${isLive ? "bg-destructive/10 text-destructive" : isDone ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"}`}>
        <Video className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-medium text-foreground">{m.title}</p>
          <StatusBadge status={status} />
        </div>
        <div className="mt-0.5 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {formatMeetingTime(m.scheduledFor)}</span>
          <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {m.participants?.length || 0}/{m.maxParticipants || "∞"}</span>
          {m.isRecorded && <span className="flex items-center gap-1"><Mic className="h-3 w-3" /> Gravada</span>}
        </div>
        {m.participants && m.participants.length > 0 && (
          <div className="mt-1.5 flex items-center gap-1">
            {m.participants.slice(0, 4).map((p, i) => (
              <div key={i} className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] font-medium text-primary ring-2 ring-card" title={p.name}>
                {p.name?.charAt(0) || "?"}
              </div>
            ))}
            {m.participants.length > 4 && <span className="ml-1 text-xs text-muted-foreground">+{m.participants.length - 4}</span>}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
        {isLive && (
          <Button size="sm" className="gap-1.5" onClick={() => onJoin(m)}>
            <Play className="h-3.5 w-3.5" /> Entrar
          </Button>
        )}
        {isDone && (
          <Button size="sm" variant="outline" className="gap-1.5" onClick={() => onViewSummary(m.id)}>
            <Bot className="h-3.5 w-3.5" /> Resumo
          </Button>
        )}
        {!isLive && !isDone && (
          <Button size="sm" variant="outline" className="gap-1.5" onClick={() => onCopyLink(m.id)}>
            <Link2 className="h-3.5 w-3.5" /> Link
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="gap-2" onClick={() => onCopyLink(m.id)}><Copy className="h-4 w-4" /> Copiar link</DropdownMenuItem>
            <DropdownMenuItem className="gap-2" onClick={() => onDetails(m)}><FileText className="h-4 w-4" /> Ver detalhes</DropdownMenuItem>
            {isDone && <DropdownMenuItem className="gap-2" onClick={() => onViewSummary(m.id)}><Bot className="h-4 w-4" /> Ver resumo IA</DropdownMenuItem>}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

// ==================== EMPTY STATE ====================

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-muted/30 py-12 text-center">
      <Calendar className="mb-3 h-10 w-10 text-muted-foreground/50" />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
