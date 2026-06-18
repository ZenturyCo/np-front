import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";
import { projectApi, invitationApi } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Building2, FolderKanban, Users, Rocket, ChevronRight, ChevronLeft, Plus, X, Loader2,
  Radio, HardHat, Fuel, MoreHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sectors = [
  { id: "telecom", label: "Telecom", icon: Radio, color: "bg-primary/15 text-primary border-primary/30" },
  { id: "construction", label: "Construção", icon: HardHat, color: "bg-warning/15 text-warning border-warning/30" },
  { id: "oil_energy", label: "Oil & Energy", icon: Fuel, color: "bg-success/15 text-success border-success/30" },
  { id: "other", label: "Outro", icon: MoreHorizontal, color: "bg-muted text-muted-foreground border-border" },
];

const steps = [
  { title: "Bem-vindo", desc: "Seleccione o sector da sua empresa", icon: Building2 },
  { title: "Primeiro Projecto", desc: "Crie o seu primeiro projecto", icon: FolderKanban },
  { title: "Convide a Equipa", desc: "Adicione membros à equipa", icon: Users },
  { title: "Estás Pronto!", desc: "Comece a gerir os seus projectos", icon: Rocket },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, completeOnboarding } = useAuthStore();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  // Step 1
  const [sector, setSector] = useState("");

  // Step 2
  const [projectName, setProjectName] = useState("");

  // Step 3
  const [inviteEmails, setInviteEmails] = useState<string[]>([""]);

  const handleCreateProject = async () => {
    if (!projectName) {
      toast({ title: "Erro", description: "Dê um nome ao projecto.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      await projectApi.create({ name: projectName, industry: sector, tenantId: user?.tenantId });
      toast({ title: "Projecto criado!", description: `"${projectName}" está pronto.` });
      setStep(2);
    } catch {
      toast({ title: "Erro", description: "Não foi possível criar o projecto. Tente novamente.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleInvite = async () => {
    const validEmails = inviteEmails.filter((e) => e.trim() && e.includes("@"));
    if (validEmails.length === 0) {
      setStep(3);
      return;
    }
    setLoading(true);
    try {
      await Promise.all(validEmails.map((email) =>
        invitationApi.create({ email, fullName: email.split("@")[0], role: "member" })
      ));
      toast({ title: "Convites enviados!", description: `${validEmails.length} convite(s) enviado(s).` });
    } catch {
      toast({ title: "Aviso", description: "Alguns convites podem não ter sido enviados.", variant: "destructive" });
    } finally {
      setLoading(false);
      setStep(3);
    }
  };

  const handleFinish = () => {
    completeOnboarding();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-xl space-y-8">
        {/* Progress */}
        <div className="flex items-center justify-center gap-2">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors",
                i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className={cn("h-0.5 w-8 rounded-full", i < step ? "bg-primary" : "bg-muted")} />}
            </div>
          ))}
        </div>

        <div className="rounded-xl border bg-card p-8 shadow-sm">
          {/* Step header */}
          <div className="mb-6 text-center">
            {(() => { const Icon = steps[step].icon; return <Icon className="mx-auto h-10 w-10 text-primary" />; })()}
            <h2 className="mt-3 text-xl font-bold text-foreground">{steps[step].title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{steps[step].desc}</p>
          </div>

          {/* Step 0: Sector */}
          {step === 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {sectors.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSector(s.id)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all",
                        sector === s.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                      )}
                    >
                      <Icon className="h-6 w-6 shrink-0" />
                      <span className="text-sm font-medium">{s.label}</span>
                    </button>
                  );
                })}
              </div>
              <Button className="w-full gap-2" onClick={() => setStep(1)} disabled={!sector}>
                Continuar <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Step 1: Project */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Nome do projecto</Label>
                <Input placeholder="Ex: Tower Sharing — Luanda" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(0)} className="gap-2">
                  <ChevronLeft className="h-4 w-4" /> Voltar
                </Button>
                <Button className="flex-1 gap-2" onClick={handleCreateProject} disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <FolderKanban className="h-4 w-4" />}
                  Criar Projecto
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Invite */}
          {step === 2 && (
            <div className="space-y-4">
              {inviteEmails.map((email, i) => (
                <div key={i} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="email@exemplo.com"
                    value={email}
                    onChange={(e) => {
                      const copy = [...inviteEmails];
                      copy[i] = e.target.value;
                      setInviteEmails(copy);
                    }}
                  />
                  {inviteEmails.length > 1 && (
                    <Button variant="ghost" size="icon" onClick={() => setInviteEmails(inviteEmails.filter((_, j) => j !== i))}>
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              {inviteEmails.length < 5 && (
                <Button variant="outline" size="sm" className="gap-1" onClick={() => setInviteEmails([...inviteEmails, ""])}>
                  <Plus className="h-3 w-3" /> Adicionar mais
                </Button>
              )}
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(3)}>Skip</Button>
                <Button className="flex-1 gap-2" onClick={handleInvite} disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Users className="h-4 w-4" />}
                  Enviar Convites
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Done */}
          {step === 3 && (
            <div className="space-y-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/15">
                <Rocket className="h-8 w-8 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Tudo configurado! O seu workspace está pronto para começar a gerir projectos.
                </p>
              </div>
              <Button className="w-full gap-2" onClick={handleFinish}>
                <Rocket className="h-4 w-4" /> Ir para o Dashboard
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
