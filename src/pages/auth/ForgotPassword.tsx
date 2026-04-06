import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Loader2, Mail } from "lucide-react";

export default function ForgotPassword() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({ title: "Erro", description: "Introduza o seu email.", variant: "destructive" });
      return;
    }
    setLoading(true);
    // Simulate API call (no forgotPassword endpoint yet)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
    toast({ title: "Email enviado!", description: "Verifique a sua caixa de entrada." });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-extrabold text-white" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--success)))" }}>
            N
          </div>
          <h1 className="text-2xl font-bold text-foreground">Recuperar password</h1>
          <p className="mt-1 text-sm text-muted-foreground">Enviaremos instruções para o seu email</p>
        </div>

        {sent ? (
          <div className="rounded-xl border bg-card p-8 text-center shadow-sm">
            <Mail className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-lg font-semibold text-foreground">Verifique o seu email</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Enviámos instruções de recuperação para <strong>{email}</strong>
            </p>
            <Link to="/login">
              <Button variant="outline" className="mt-6 gap-2">
                <ArrowLeft className="h-4 w-4" /> Voltar ao login
              </Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            </div>
            <Button type="submit" className="w-full gap-2" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
              Enviar instruções
            </Button>
          </form>
        )}

        <p className="text-center text-sm text-muted-foreground">
          <Link to="/login" className="font-medium text-primary hover:underline">← Voltar ao login</Link>
        </p>
      </div>
    </div>
  );
}
