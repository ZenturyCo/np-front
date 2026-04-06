import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, UserPlus } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { register, isLoading } = useAuthStore();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName?.trim() || !email?.trim() || !password?.trim()) {
      toast({ title: "Campos obrigatórios", description: "Preencha todos os campos.", variant: "destructive" });
      return;
    }
    if (password.length < 6) {
      toast({ title: "Erro", description: "A password deve ter pelo menos 6 caracteres.", variant: "destructive" });
      return;
    }
    try {
      await register({ email, password, fullName });
      toast({ title: "Conta criada!", description: "Bem-vindo ao Ngola Projects." });
      navigate("/onboarding");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Não foi possível criar a conta.";
      toast({ title: "Erro no registo", description: message, variant: "destructive" });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-extrabold text-white" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--success)))" }}>N</div>
          <h1 className="text-2xl font-bold text-foreground">Criar conta</h1>
          <p className="mt-1 text-sm text-muted-foreground">Comece a gerir os seus projectos hoje</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border bg-card p-6 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nome completo *</Label>
            <Input id="fullName" placeholder="O seu nome" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" placeholder="email@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password *</Label>
            <Input id="password" type="password" placeholder="Mínimo 6 caracteres" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
          </div>
          <Button type="submit" className="w-full gap-2" disabled={isLoading}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserPlus className="h-4 w-4" />}
            Criar Conta
          </Button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Já tem conta?{" "}
          <Link to="/login" className="font-medium text-primary hover:underline">Iniciar sessão</Link>
        </p>
      </div>
    </div>
  );
}
