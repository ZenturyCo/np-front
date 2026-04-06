import { useState, useEffect, useRef } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { io, type Socket } from "socket.io-client";
import { Hash, Send, Plus, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { channelApi, messageApi, projectApi, userApi, type Channel, type Message } from "@/lib/api";
import { FRONTEND_ENV } from "@/lib/env";
import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/store/auth.store";

const SOCKET_URL = FRONTEND_ENV.socketUrl;

export default function Chat() {
  const { toast } = useToast();
  const { user } = useAuthStore();
  const qc = useQueryClient();
  const [activeChannel, setActiveChannel] = useState<string>("");
  const [message, setMessage] = useState("");
  const [createOpen, setCreateOpen] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [channelDescription, setChannelDescription] = useState("");
  const [projectId, setProjectId] = useState<string>("");
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [memberInput, setMemberInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);

  const { data: channels = [], isLoading: loadingChannels, isError: errorChannels, refetch: refetchChannels } = useQuery({
    queryKey: ["channels", user?.id],
    queryFn: () => channelApi.list(user!.id),
    enabled: !!user?.id,
  });

  // Auto-select first channel
  useEffect(() => {
    if (channels.length > 0 && !activeChannel) setActiveChannel(channels[0].id);
  }, [channels, activeChannel]);

  const { data: messages = [], isLoading: loadingMessages } = useQuery({
    queryKey: ["messages", activeChannel],
    queryFn: () => messageApi.list(activeChannel),
    enabled: !!activeChannel,
  });

  const { data: projects = [] } = useQuery({
    queryKey: ["projects", user?.tenantId],
    queryFn: () => projectApi.list(user!.tenantId),
    enabled: !!user?.tenantId,
  });

  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.tenantId],
    queryFn: () => userApi.list(),
    enabled: !!user?.tenantId,
  });

  const createChannelMutation = useMutation({
    mutationFn: (payload: Record<string, unknown>) => channelApi.create(payload),
    onSuccess: (channel) => {
      qc.invalidateQueries({ queryKey: ["channels", user?.id] });
      setActiveChannel(channel.id);
      setCreateOpen(false);
      setChannelName("");
      setChannelDescription("");
      setProjectId("");
      setSelectedMembers([]);
      setMemberInput("");
      toast({
        title: "Canal criado",
        description: `Canal "${channel.name || "novo canal"}" pronto para uso.`,
      });
    },
    onError: (err: any) => {
      toast({
        title: "Erro ao criar canal",
        description: err?.response?.data?.message || "Verifique os dados e tente novamente.",
        variant: "destructive",
      });
    },
  });

  // Socket.io
  useEffect(() => {
    if (!activeChannel || !user) return;

    const socket = io(SOCKET_URL, {
      auth: { token: localStorage.getItem("accessToken") },
      transports: ["websocket", "polling"],
    });
    socketRef.current = socket;

    socket.emit("channel:join", { channelId: activeChannel });

    socket.on("message", (msg: Message) => {
      qc.setQueryData<Message[]>(["messages", activeChannel], (old) => [...(old || []), msg]);
    });

    return () => {
      socket.emit("channel:leave", { channelId: activeChannel });
      socket.disconnect();
    };
  }, [activeChannel, user, qc]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim() || !activeChannel || !user) return;
    try {
      await messageApi.send({
        channelId: activeChannel,
        senderId: user.id,
        content: message.trim(),
      });
      setMessage("");
      qc.invalidateQueries({ queryKey: ["messages", activeChannel] });
    } catch {
      // Error handled silently
    }
  };

  const handleCreateChannel = () => {
    if (!user?.tenantId || !user?.id) return;
    if (!channelName.trim()) {
      toast({ title: "Nome obrigatório", description: "Informe o nome do chat.", variant: "destructive" });
      return;
    }
    if (!projectId) {
      toast({ title: "Projeto obrigatório", description: "Selecione o projeto do chat.", variant: "destructive" });
      return;
    }

    createChannelMutation.mutate({
      tenantId: user.tenantId,
      createdBy: user.id,
      type: "project",
      name: channelName.trim(),
      description: channelDescription.trim() || undefined,
      projectId,
      members: selectedMembers,
      isPrivate: false,
    });
  };

  const toggleMember = (userId: string) => {
    setSelectedMembers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const activeChannelData = channels.find((c) => c.id === activeChannel);

  if (errorChannels) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border bg-card p-12 shadow-sm">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">Erro ao carregar canais</h3>
        <Button variant="outline" className="mt-4 gap-2" onClick={() => refetchChannels()}>
          <RefreshCw className="h-4 w-4" /> Tentar novamente
        </Button>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-0 overflow-hidden rounded-xl border bg-card shadow-sm">
      {/* Sidebar */}
      <div className="w-64 shrink-0 border-r bg-muted/30">
        <div className="border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Canais</h3>
            <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => setCreateOpen(true)} title="Criar canal">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="p-2">
          {loadingChannels ? (
            <div className="space-y-2">{Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-9 rounded-lg" />)}</div>
          ) : channels.length === 0 ? (
            <p className="px-3 py-4 text-xs text-muted-foreground text-center">Sem canais disponíveis</p>
          ) : (
            channels.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveChannel(c.id)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                  activeChannel === c.id ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"
                )}
              >
                <Hash className="h-4 w-4" />
                <span className="flex-1 text-left truncate">{c.name}</span>
              </button>
            ))
          )}
        </div>
      </div>

      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Criar chat de equipa</DialogTitle>
            <DialogDescription>
              Defina o servidor/chat, selecione o projeto e os utilizadores que vão participar.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Nome do servidor/chat *</Label>
              <Input
                placeholder="Ex: Equipa Torre Norte"
                value={channelName}
                onChange={(event) => setChannelName(event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Projeto *</Label>
              <Select value={projectId} onValueChange={setProjectId}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um projeto" />
                </SelectTrigger>
                <SelectContent>
                  {projects.map((project) => (
                    <SelectItem key={project.id} value={project.id}>
                      {project.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Descrição (opcional)</Label>
              <Textarea
                value={channelDescription}
                onChange={(event) => setChannelDescription(event.target.value)}
                placeholder="Objetivo deste chat"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label>Utilizadores do chat</Label>
              <Select value={memberInput} onValueChange={(value) => {
                setMemberInput(value);
                toggleMember(value);
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Adicionar utilizador" />
                </SelectTrigger>
                <SelectContent>
                  {users
                    .filter((member) => member.id !== user?.id)
                    .map((member) => (
                      <SelectItem key={member.id} value={member.id}>
                        {member.fullName} ({member.email})
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>

              <div className="flex flex-wrap gap-2">
                {selectedMembers.map((memberId) => {
                  const member = users.find((u) => u.id === memberId);
                  return (
                    <button
                      key={memberId}
                      type="button"
                      onClick={() => toggleMember(memberId)}
                      className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary"
                    >
                      {member?.fullName || memberId} ×
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleCreateChannel} disabled={createChannelMutation.isPending}>
              {createChannelMutation.isPending ? "A criar..." : "Criar chat"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Messages */}
      <div className="flex flex-1 flex-col">
        <div className="border-b px-5 py-3">
          <h3 className="text-sm font-semibold text-foreground">
            <Hash className="mr-1 inline h-4 w-4" />
            {activeChannelData?.name || "Seleccione um canal"}
          </h3>
        </div>
        <div className="flex-1 space-y-4 overflow-auto p-5">
          {loadingMessages ? (
            <div className="space-y-3">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-16 rounded-lg" />)}</div>
          ) : messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Hash className="h-10 w-10 text-muted-foreground/30" />
              <p className="mt-3 text-sm text-muted-foreground">Sem mensagens neste canal</p>
              <p className="text-xs text-muted-foreground">Seja o primeiro a enviar uma mensagem!</p>
            </div>
          ) : (
            messages.map((m) => {
              const isMe = m.senderId === user?.id;
              const initials = m.senderName?.split(" ").map(n => n[0]).join("").slice(0, 2) || "??";
              return (
                <div key={m.id} className={cn("flex gap-3", isMe && "flex-row-reverse")}>
                  <div className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-primary-foreground", isMe ? "bg-primary" : "bg-muted-foreground/60")}>
                    {initials}
                  </div>
                  <div className={cn("max-w-md", isMe && "text-right")}>
                    <p className="mb-1 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{m.senderName || "Utilizador"}</span>
                      {m.createdAt && <> · {new Date(m.createdAt).toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })}</>}
                    </p>
                    <div className={cn("rounded-xl px-4 py-2.5 text-sm", isMe ? "bg-primary text-primary-foreground" : "bg-muted text-foreground")}>
                      {m.content}
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input
              placeholder={activeChannelData ? `Mensagem para #${activeChannelData.name}` : "Seleccione um canal..."}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1"
              disabled={!activeChannel}
            />
            <Button size="icon" onClick={handleSend} disabled={!message.trim() || !activeChannel}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
