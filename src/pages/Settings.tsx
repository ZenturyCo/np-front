import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  User, Shield, Bell, Palette, CreditCard, Building2, LogOut,
  Save, Loader2, Lock, QrCode, CheckCircle2, AlertCircle, Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/store/auth.store";
import { authApi, tenantApi } from "@/lib/api";

const tabs = [
  { id: "profile",       label: "Perfil",        icon: User },
  { id: "security",      label: "Segurança",      icon: Shield },
  { id: "notifications", label: "Notificações",   icon: Bell },
  { id: "appearance",    label: "Aparência",      icon: Palette },
  { id: "organization",  label: "Organização",    icon: Building2 },
  { id: "billing",       label: "Facturação",     icon: CreditCard },
];

const applyTheme = (theme: string) => {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else if (theme === "light") {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark", prefersDark);
    localStorage.setItem("theme", "system");
  }
};

const getStoredTheme = (): string => localStorage.getItem("theme") || "light";

export default function Settings() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const { user, logout, setUser } = useAuthStore();
  const [activeTab, setActiveTab] = useState("profile");

  // ── Profile ──────────────────────────────────────────────────────────────
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [language, setLanguage] = useState((user as any)?.preferences?.language || "pt");
  const [timezone, setTimezone] = useState((user as any)?.preferences?.timezone || "Africa/Luanda");

  useEffect(() => {
    if (user?.fullName) setFullName(user.fullName);
  }, [user?.fullName]);

  const profileMutation = useMutation({
    mutationFn: () => authApi.updateMe({ fullName, preferences: { language, timezone } }),
    onSuccess: (updated: any) => {
      if (setUser) setUser({ ...user!, ...updated });
      qc.invalidateQueries({ queryKey: ["me"] });
      toast({ title: "Perfil actualizado." });
    },
    onError: (err: any) => {
      toast({
        title: "Erro ao guardar perfil",
        description: err?.message || "Verifique e tente novamente.",
        variant: "destructive",
      });
    },
  });

  // ── Security ─────────────────────────────────────────────────────────────
  const [currentPassword,  setCurrentPassword]  = useState("");
  const [newPassword,      setNewPassword]       = useState("");
  const [confirmPassword,  setConfirmPassword]   = useState("");
  const [twoFactorEnabled, setTwoFactorEnabled]  = useState(false);
  const [qrCode,           setQrCode]            = useState<string | null>(null);
  const [totpSecret,       setTotpSecret]        = useState<string | null>(null);
  const [otpAuthUrl,       setOtpAuthUrl]        = useState<string | null>(null);
  const [totpCode,         setTotpCode]          = useState("");
  const [totpVerified,     setTotpVerified]      = useState(false);

  useEffect(() => {
    const enabled = Boolean(user?.twoFactorEnabled);
    setTwoFactorEnabled(enabled);
    setTotpVerified(enabled);
  }, [user?.twoFactorEnabled]);

  const changePasswordMutation = useMutation({
    mutationFn: () => {
      if (newPassword !== confirmPassword) throw new Error("As passwords não coincidem.");
      if (newPassword.length < 8) throw new Error("A password deve ter pelo menos 8 caracteres.");
      return authApi.changePassword(currentPassword, newPassword);
    },
    onSuccess: () => {
      setCurrentPassword(""); setNewPassword(""); setConfirmPassword("");
      toast({ title: "Password alterada com sucesso." });
    },
    onError: (err: any) => {
      toast({
        title: "Erro ao alterar password",
        description: err?.message || "Verifique a password actual.",
        variant: "destructive",
      });
    },
  });

  const enable2FAMutation = useMutation({
    mutationFn: () => authApi.enable2FA(),
    onSuccess: (data) => {
      setQrCode(data.qrCode ?? null);
      setTotpSecret(data.secret ?? null);
      setOtpAuthUrl(data.otpauthUrl ?? null);
      setTotpCode("");
      toast({ title: "2FA preparado", description: "Scaneie o QR code ou introduza a chave manual." });
    },
    onError: (err: any) => {
      setTwoFactorEnabled(false);
      toast({
        title: "Erro ao activar 2FA",
        description: err?.message || "Não foi possível gerar o QR code e a chave.",
        variant: "destructive",
      });
    },
  });

  const verify2FAMutation = useMutation({
    mutationFn: () => authApi.verify2FA(totpCode),
    onSuccess: () => {
      setTotpVerified(true);
      setQrCode(null);
      setTotpSecret(null);
      setOtpAuthUrl(null);
      toast({ title: "2FA activado com sucesso!" });
    },
    onError: () => toast({ title: "Código inválido. Tente novamente.", variant: "destructive" }),
  });

  const handle2FAToggle = (enabled: boolean) => {
    setTwoFactorEnabled(enabled);
    if (enabled && !totpVerified) enable2FAMutation.mutate();
    if (!enabled && !totpVerified) {
      setQrCode(null);
      setTotpSecret(null);
      setOtpAuthUrl(null);
      setTotpCode("");
    }
  };

  const copyTotpSecret = async () => {
    if (!totpSecret) return;
    await navigator.clipboard.writeText(totpSecret);
    toast({ title: "Chave 2FA copiada." });
  };

  // ── Notifications ─────────────────────────────────────────────────────────
  const prefs = (user as any)?.preferences || {};
  const [emailNotifs,   setEmailNotifs]   = useState(prefs.emailNotifs   ?? true);
  const [pushNotifs,    setPushNotifs]    = useState(prefs.pushNotifs    ?? true);
  const [taskNotifs,    setTaskNotifs]    = useState(prefs.taskNotifs    ?? true);
  const [meetingNotifs, setMeetingNotifs] = useState(prefs.meetingNotifs ?? true);
  const [chatNotifs,    setChatNotifs]    = useState(prefs.chatNotifs    ?? true);
  const [reportNotifs,  setReportNotifs]  = useState(prefs.reportNotifs  ?? false);

  const notifMutation = useMutation({
    mutationFn: () => authApi.updateMe({
      preferences: { language, timezone, emailNotifs, pushNotifs, taskNotifs, meetingNotifs, chatNotifs, reportNotifs },
    }),
    onSuccess: () => toast({ title: "Preferências de notificações guardadas." }),
    onError:   () => toast({ title: "Erro ao guardar notificações.", variant: "destructive" }),
  });

  // ── Appearance ────────────────────────────────────────────────────────────
  const [theme, setTheme] = useState(getStoredTheme);

  const handleThemeChange = (value: string) => {
    setTheme(value);
    applyTheme(value);
    toast({ title: `Tema: ${value === "system" ? "Sistema" : value === "dark" ? "Escuro" : "Claro"}` });
  };

  // ── Organization ─────────────────────────────────────────────────────────
  const { data: tenantData } = useQuery({
    queryKey: ["tenant", user?.tenantId],
    queryFn:  () => tenantApi.get(user!.tenantId),
    enabled:  !!user?.tenantId,
  });

  const [orgName,          setOrgName]          = useState("");
  const [orgIndustry,      setOrgIndustry]      = useState("telecom");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  useEffect(() => {
    if (tenantData) {
      setOrgName((tenantData as any).name || "");
      setOrgIndustry((tenantData as any).industryVertical || "telecom");
    }
  }, [tenantData]);

  const orgMutation = useMutation({
    mutationFn: () => tenantApi.update(user!.tenantId, { name: orgName, industryVertical: orgIndustry }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["tenant", user?.tenantId] });
      toast({ title: "Organização actualizada." });
    },
    onError: () => toast({ title: "Erro ao actualizar organização.", variant: "destructive" }),
  });

  const deleteOrgMutation = useMutation({
    mutationFn: () => tenantApi.delete(user!.tenantId),
    onSuccess: () => { logout(); navigate("/login"); },
    onError: () => toast({ title: "Erro ao eliminar organização.", variant: "destructive" }),
  });

  const handleLogout = () => { logout(); navigate("/login"); };

  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <div className="w-56 shrink-0 space-y-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
        <Separator className="my-3" />
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-destructive hover:bg-destructive/10"
        >
          <LogOut className="h-4 w-4" /> Terminar Sessão
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 rounded-xl border bg-card p-6 shadow-sm">

        {/* PROFILE */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Perfil</h2>
              <p className="text-sm text-muted-foreground">Gerencie as suas informações pessoais</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                {user?.fullName?.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "??"}
              </div>
              <div>
                <p className="font-semibold">{user?.fullName}</p>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
                <p className="text-xs text-muted-foreground capitalize mt-0.5">{user?.role || "member"}</p>
              </div>
            </div>
            <Separator />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nome completo</Label>
                <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input value={user?.email || ""} disabled className="opacity-60" />
              </div>
              <div className="space-y-2">
                <Label>Idioma</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt">Português</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Fuso horário</Label>
                <Select value={timezone} onValueChange={setTimezone}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Africa/Luanda">Africa/Luanda (WAT)</SelectItem>
                    <SelectItem value="Europe/Lisbon">Europe/Lisbon (WET)</SelectItem>
                    <SelectItem value="America/Sao_Paulo">América/São Paulo (BRT)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="gap-2" onClick={() => profileMutation.mutate()} disabled={profileMutation.isPending}>
              {profileMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Guardar Alterações
            </Button>
          </div>
        )}

        {/* SECURITY */}
        {activeTab === "security" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Segurança</h2>
              <p className="text-sm text-muted-foreground">Proteja a sua conta</p>
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="font-medium">Alterar password</h3>
              <div className="grid grid-cols-1 gap-4 max-w-md">
                <div className="space-y-2">
                  <Label>Password actual</Label>
                  <Input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} autoComplete="current-password" />
                </div>
                <div className="space-y-2">
                  <Label>Nova password</Label>
                  <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} autoComplete="new-password" />
                </div>
                <div className="space-y-2">
                  <Label>Confirmar nova password</Label>
                  <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="new-password" />
                </div>
              </div>
              <Button variant="outline" className="gap-2" onClick={() => changePasswordMutation.mutate()} disabled={changePasswordMutation.isPending || !currentPassword || !newPassword}>
                {changePasswordMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />}
                Alterar Password
              </Button>
            </div>
            <Separator />
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">Autenticação de dois factores (2FA)</p>
                  <p className="text-sm text-muted-foreground">
                    {totpVerified ? "2FA activado e verificado." : "Adicione uma camada extra de segurança"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {totpVerified && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                  <Switch checked={twoFactorEnabled} onCheckedChange={handle2FAToggle} disabled={enable2FAMutation.isPending} />
                </div>
              </div>
              {(qrCode || totpSecret || otpAuthUrl) && !totpVerified && (
                <div className="rounded-lg border p-4 space-y-4 max-w-md">
                  <div>
                    <p className="text-sm font-medium">Scaneie com o Google Authenticator</p>
                    <p className="text-xs text-muted-foreground">Se o QR code não aparecer, use a chave manual abaixo.</p>
                  </div>

                  {qrCode && (
                    <img
                      src={qrCode}
                      alt="QR Code 2FA"
                      className="h-36 w-36 rounded border bg-white p-2"
                    />
                  )}

                  {totpSecret && (
                    <div className="space-y-2">
                      <Label>Chave manual</Label>
                      <div className="flex gap-2">
                        <Input value={totpSecret} readOnly className="font-mono text-xs" />
                        <Button type="button" variant="outline" size="icon" onClick={copyTotpSecret}>
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {otpAuthUrl && (
                    <a className="text-xs font-medium text-primary hover:underline" href={otpAuthUrl}>
                      Abrir na aplicação autenticadora
                    </a>
                  )}

                  <div className="space-y-2">
                    <Label>Código de verificação (6 dígitos)</Label>
                    <Input value={totpCode} onChange={(e) => setTotpCode(e.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="000000" maxLength={6} />
                  </div>
                  <Button size="sm" onClick={() => verify2FAMutation.mutate()} disabled={totpCode.length < 6 || verify2FAMutation.isPending}>
                    {verify2FAMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <QrCode className="h-4 w-4 mr-2" />}
                    Verificar e Activar
                  </Button>
                </div>
              )}
            </div>
            <Separator />
            <div className="rounded-lg border p-4">
              <p className="font-medium">Sessões activas</p>
              <p className="mt-1 text-sm text-muted-foreground">1 sessão activa — Este dispositivo</p>
              <Button variant="outline" size="sm" className="mt-3">Terminar todas as outras sessões</Button>
            </div>
          </div>
        )}

        {/* NOTIFICATIONS */}
        {activeTab === "notifications" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Notificações</h2>
              <p className="text-sm text-muted-foreground">Controle como recebe notificações</p>
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="font-medium">Canais</h3>
              {[
                { label: "Notificações por email", desc: "Receba alertas no seu email", value: emailNotifs, set: setEmailNotifs },
                { label: "Notificações push",      desc: "Alertas no navegador",         value: pushNotifs,  set: setPushNotifs },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-lg border p-4">
                  <div><p className="font-medium">{item.label}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                  <Switch checked={item.value} onCheckedChange={item.set} />
                </div>
              ))}
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="font-medium">Tipos de notificação</h3>
              {[
                { label: "Tarefas",    desc: "Atribuições, prazos, alterações de status", value: taskNotifs,    set: setTaskNotifs },
                { label: "Reuniões",   desc: "Convites, lembretes, resumos",               value: meetingNotifs, set: setMeetingNotifs },
                { label: "Chat",       desc: "Mensagens directas e menções",               value: chatNotifs,    set: setChatNotifs },
                { label: "Relatórios", desc: "Relatórios semanais e mensais",              value: reportNotifs,  set: setReportNotifs },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-lg border p-4">
                  <div><p className="font-medium">{item.label}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                  <Switch checked={item.value} onCheckedChange={item.set} />
                </div>
              ))}
            </div>
            <Button className="gap-2" onClick={() => notifMutation.mutate()} disabled={notifMutation.isPending}>
              {notifMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Guardar Preferências
            </Button>
          </div>
        )}

        {/* APPEARANCE */}
        {activeTab === "appearance" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Aparência</h2>
              <p className="text-sm text-muted-foreground">Personalize a interface</p>
            </div>
            <Separator />
            <div className="space-y-4">
              <Label>Tema</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "light",  label: "Claro",   preview: "bg-background border" },
                  { id: "dark",   label: "Escuro",  preview: "bg-[hsl(216,56%,10%)] border-[hsl(216,30%,18%)]" },
                  { id: "system", label: "Sistema", preview: "bg-gradient-to-r from-background to-[hsl(216,56%,10%)] border" },
                ].map((t) => (
                  <button key={t.id} onClick={() => handleThemeChange(t.id)}
                    className={cn("rounded-xl border-2 p-4 text-center transition-all", theme === t.id ? "border-primary" : "border-border hover:border-primary/40")}>
                    <div className={cn("mx-auto mb-3 h-12 w-20 rounded-lg", t.preview)} />
                    <span className="text-sm font-medium">{t.label}</span>
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">A preferência é guardada localmente no browser.</p>
            </div>
          </div>
        )}

        {/* ORGANIZATION */}
        {activeTab === "organization" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Organização</h2>
              <p className="text-sm text-muted-foreground">Configurações do workspace</p>
            </div>
            <Separator />
            {!tenantData ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" /> A carregar dados da organização...
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 max-w-lg">
                <div className="space-y-2">
                  <Label>Nome da organização</Label>
                  <Input value={orgName} onChange={(e) => setOrgName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Sector</Label>
                  <Select value={orgIndustry} onValueChange={setOrgIndustry}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="telecom">Telecom</SelectItem>
                      <SelectItem value="construction">Construção</SelectItem>
                      <SelectItem value="oil_energy">Oil & Energy</SelectItem>
                      <SelectItem value="tech">Tecnologia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            <Button className="gap-2" onClick={() => orgMutation.mutate()} disabled={orgMutation.isPending || !tenantData}>
              {orgMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Guardar
            </Button>
            <Separator />
            <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle className="h-4 w-4 text-destructive" />
                <p className="font-medium text-destructive">Zona de perigo</p>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Eliminar a organização apaga todos os dados permanentemente.</p>
              <Button variant="destructive" size="sm" onClick={() => setDeleteDialogOpen(true)}>Eliminar Organização</Button>
            </div>
          </div>
        )}

        {/* BILLING */}
        {activeTab === "billing" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Facturação</h2>
              <p className="text-sm text-muted-foreground">Gerencie o seu plano e pagamentos</p>
            </div>
            <Separator />
            <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Plano actual</p>
                  <p className="text-2xl font-bold">Free</p>
                  <p className="mt-1 text-sm text-muted-foreground">5 membros · 3 projectos · 100 tarefas</p>
                </div>
                <Button onClick={() => navigate("/plans")} className="gap-1.5">
                  <CreditCard className="h-4 w-4" /> Upgrade
                </Button>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium">Histórico de pagamentos</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Sem pagamentos registados.{" "}
                <span className="text-xs opacity-60">(Disponível após activar um plano pago)</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Delete org dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Eliminar organização?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acção é irreversível. Todos os projectos, tarefas, membros e dados serão eliminados permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteOrgMutation.mutate()} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              {deleteOrgMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              Sim, eliminar tudo
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}