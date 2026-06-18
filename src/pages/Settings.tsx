import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User, Shield, Bell, Palette, Globe, CreditCard, Building2, LogOut, Save, Loader2, Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/store/auth.store";

const tabs = [
  { id: "profile", label: "Perfil", icon: User },
  { id: "security", label: "Segurança", icon: Shield },
  { id: "notifications", label: "Notificações", icon: Bell },
  { id: "appearance", label: "Aparência", icon: Palette },
  { id: "organization", label: "Organização", icon: Building2 },
  { id: "billing", label: "Facturação", icon: CreditCard },
];

export default function Settings() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState("profile");
  const [saving, setSaving] = useState(false);

  // Profile state
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [email] = useState(user?.email || "");
  const [language, setLanguage] = useState("pt");
  const [timezone, setTimezone] = useState("Africa/Luanda");

  // Security state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // Notification preferences
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [taskNotifs, setTaskNotifs] = useState(true);
  const [meetingNotifs, setMeetingNotifs] = useState(true);
  const [chatNotifs, setChatNotifs] = useState(true);
  const [reportNotifs, setReportNotifs] = useState(false);

  // Appearance
  const [theme, setTheme] = useState("light");

  // Organization
  const [orgName, setOrgName] = useState("Ngola Projects");
  const [orgIndustry, setOrgIndustry] = useState("telecom");

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSaving(false);
    toast({ title: "Definições guardadas!", description: "As suas alterações foram aplicadas." });
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
        <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-danger hover:bg-danger/10">
          <LogOut className="h-4 w-4" /> Terminar Sessão
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 rounded-xl border bg-card p-6 shadow-sm">
        {/* Profile */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Perfil</h2>
              <p className="text-sm text-muted-foreground">Gerencie as suas informações pessoais</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                {user?.fullName?.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "??"}
              </div>
              <div>
                <p className="font-semibold text-foreground">{user?.fullName}</p>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
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
                <Input value={email} disabled className="opacity-60" />
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
                    <SelectItem value="America/Sao_Paulo">America/São Paulo (BRT)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="gap-2" onClick={handleSave} disabled={saving}>
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Guardar Alterações
            </Button>
          </div>
        )}

        {/* Security */}
        {activeTab === "security" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Segurança</h2>
              <p className="text-sm text-muted-foreground">Proteja a sua conta</p>
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Alterar password</h3>
              <div className="grid grid-cols-1 gap-4 max-w-md">
                <div className="space-y-2">
                  <Label>Password actual</Label>
                  <Input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Nova password</Label>
                  <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Confirmar nova password</Label>
                  <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                <Lock className="h-4 w-4" /> Alterar Password
              </Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-medium text-foreground">Autenticação de dois factores (2FA)</p>
                <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança</p>
              </div>
              <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">Sessões activas</p>
              <p className="mt-1 text-sm text-muted-foreground">1 sessão activa — Este dispositivo</p>
              <Button variant="outline" size="sm" className="mt-3">Terminar todas as outras sessões</Button>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeTab === "notifications" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Notificações</h2>
              <p className="text-sm text-muted-foreground">Controle como recebe notificações</p>
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Canais</h3>
              {[
                { label: "Notificações por email", desc: "Receba alertas no seu email", value: emailNotifs, set: setEmailNotifs },
                { label: "Notificações push", desc: "Alertas no navegador", value: pushNotifs, set: setPushNotifs },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-lg border p-4">
                  <div><p className="font-medium text-foreground">{item.label}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                  <Switch checked={item.value} onCheckedChange={item.set} />
                </div>
              ))}
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Tipos de notificação</h3>
              {[
                { label: "Tarefas", desc: "Atribuições, prazos, alterações de status", value: taskNotifs, set: setTaskNotifs },
                { label: "Reuniões", desc: "Convites, lembretes, resumos", value: meetingNotifs, set: setMeetingNotifs },
                { label: "Chat", desc: "Mensagens directas e menções", value: chatNotifs, set: setChatNotifs },
                { label: "Relatórios", desc: "Relatórios semanais e mensais", value: reportNotifs, set: setReportNotifs },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-lg border p-4">
                  <div><p className="font-medium text-foreground">{item.label}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                  <Switch checked={item.value} onCheckedChange={item.set} />
                </div>
              ))}
            </div>
            <Button className="gap-2" onClick={handleSave} disabled={saving}>
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Guardar Preferências
            </Button>
          </div>
        )}

        {/* Appearance */}
        {activeTab === "appearance" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Aparência</h2>
              <p className="text-sm text-muted-foreground">Personalize a interface</p>
            </div>
            <Separator />
            <div className="space-y-4">
              <Label>Tema</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "light", label: "Claro", preview: "bg-background border" },
                  { id: "dark", label: "Escuro", preview: "bg-[hsl(216,56%,10%)] border-[hsl(216,30%,18%)]" },
                  { id: "system", label: "Sistema", preview: "bg-gradient-to-r from-background to-[hsl(216,56%,10%)] border" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={cn(
                      "rounded-xl border-2 p-4 text-center transition-all",
                      theme === t.id ? "border-primary" : "border-border hover:border-primary/40"
                    )}
                  >
                    <div className={cn("mx-auto mb-3 h-12 w-20 rounded-lg", t.preview)} />
                    <span className="text-sm font-medium">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Organization */}
        {activeTab === "organization" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Organização</h2>
              <p className="text-sm text-muted-foreground">Configurações do workspace</p>
            </div>
            <Separator />
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
            <div className="rounded-lg border border-danger/20 bg-danger/5 p-4">
              <p className="font-medium text-danger">Zona de perigo</p>
              <p className="mt-1 text-sm text-muted-foreground">Eliminar a organização irá apagar todos os dados permanentemente.</p>
              <Button variant="destructive" size="sm" className="mt-3">Eliminar Organização</Button>
            </div>
            <Button className="gap-2" onClick={handleSave} disabled={saving}>
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Guardar
            </Button>
          </div>
        )}

        {/* Billing */}
        {activeTab === "billing" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Facturação</h2>
              <p className="text-sm text-muted-foreground">Gerencie o seu plano e pagamentos</p>
            </div>
            <Separator />
            <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Plano actual</p>
                  <p className="text-2xl font-bold text-foreground">Free</p>
                  <p className="mt-1 text-sm text-muted-foreground">5 membros · 3 projectos · 100 tarefas</p>
                </div>
                <Button onClick={() => navigate("/plans")} className="gap-1.5">
                  <CreditCard className="h-4 w-4" /> Upgrade
                </Button>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">Histórico de pagamentos</p>
              <p className="mt-1 text-sm text-muted-foreground">Sem pagamentos registados</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
