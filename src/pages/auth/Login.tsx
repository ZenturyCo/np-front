import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { teamApi } from "@/lib/api";
import { useAuthStore } from "@/store/auth.store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, LogIn } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const inviteToken = searchParams.get("inviteToken");
  const { login } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Erro", description: "Preencha todos os campos.", variant: "destructive" });
      return;
    }

    setIsLoading(true);

    try {
      const response = await login(email, password);

      // Se o backend detectar que 2FA está ativado
      if (response?.requireTwoFactor) {
        navigate("/2fa", { 
          state: { 
            email,
            password,
            tempToken: response.tempToken // se o backend retornar
          } 
        });
        return;
      }

      // Login normal (sem 2FA)
      toast({ title: "Bem-vindo!", description: "Login efectuado com sucesso." });
      if (inviteToken) {
        try {
          const data = await teamApi.joinByInviteToken(inviteToken, { email });
          toast({ title: "Entraste na equipa!", description: `Bem-vindo à equipa ${data.teamName}.` });
        } catch { /* ignora erro de convite */ }
      }
      navigate("/");
    } catch (err: any) {
      const message = err?.response?.data?.message || err?.message || "Email ou password incorrectos.";
      if (String(message).includes("two-factor code required")) {
        navigate("/2fa", {
          state: {
            email,
            password,
          },
        });
        return;
      }
      toast({ title: "Erro de autenticação", description: message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-extrabold text-white" 
               style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--success)))" }}>
            N
          </div>
          <h1 className="text-2xl font-bold text-foreground">Bem-vindo de volta</h1>
          <p className="mt-1 text-sm text-muted-foreground">Inicie sessão na sua conta Ngola Projects</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border bg-card p-6 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="email@exemplo.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              autoComplete="email" 
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="/forgot-password" className="text-xs text-primary hover:underline">Esqueceu a password?</Link>
            </div>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              autoComplete="current-password" 
            />
          </div>
          <Button type="submit" className="w-full gap-2" disabled={isLoading}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogIn className="h-4 w-4" />}
            Entrar
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Não tem conta?{" "}
          <Link to="/register" className="font-medium text-primary hover:underline">Criar conta</Link>
        </p>
      </div>
    </div>
  );
}
