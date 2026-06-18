import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, Navigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/store/auth.store";
import { Loader2, ShieldCheck, KeyRound, ArrowLeft } from "lucide-react";

const RESEND_SECONDS = 30;

export default function TwoFactor() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { user, accessToken } = useAuthStore();

  // Email passed via navigate state from the Login page; fallback to user.email
  const email = (location.state as { email?: string } | null)?.email || user?.email || "";

  const [code, setCode] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(RESEND_SECONDS);
  const submittedRef = useRef(false);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((c) => (c > 0 ? c - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  // If there's no pending login context at all, send user back to login
  if (!email && !accessToken) {
    return <Navigate to="/login" replace />;
  }

  const handleVerify = async (value?: string) => {
    const finalCode = (value ?? code).trim();
    if (finalCode.length !== 6) {
      toast({ title: "Código inválido", description: "Insira os 6 dígitos enviados.", variant: "destructive" });
      return;
    }
    setVerifying(true);
    try {
      // TODO: integrate real 2FA verification endpoint
      await new Promise((r) => setTimeout(r, 900));
      // Demo behaviour: accept any 6-digit code except "000000"
      if (finalCode === "000000") throw new Error("Código incorrecto ou expirado.");
      toast({ title: "Verificado", description: "Autenticação de dois factores concluída." });
      navigate("/", { replace: true });
    } catch (err: any) {
      submittedRef.current = false;
      setCode("");
      toast({ title: "Falha", description: err?.message || "Não foi possível verificar o código.", variant: "destructive" });
    } finally {
      setVerifying(false);
    }
  };

  const handleResend = async () => {
    if (cooldown > 0) return;
    setResending(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      setCooldown(RESEND_SECONDS);
      toast({ title: "Código reenviado", description: `Novo código enviado para ${email}.` });
    } finally {
      setResending(false);
    }
  };

  const onChange = (val: string) => {
    setCode(val);
    if (val.length === 6 && !submittedRef.current) {
      submittedRef.current = true;
      handleVerify(val);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div
            className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-white"
            style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--success)))" }}
          >
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Verificação em duas etapas</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Insira o código de 6 dígitos {email ? <>enviado para <span className="font-medium text-foreground">{email}</span></> : "da sua app autenticadora"}.
          </p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); handleVerify(); }}
          className="space-y-6 rounded-xl border bg-card p-6 shadow-sm"
        >
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={code} onChange={onChange} disabled={verifying} autoFocus>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <Button type="submit" className="w-full gap-2" disabled={verifying || code.length !== 6}>
            {verifying ? <Loader2 className="h-4 w-4 animate-spin" /> : <KeyRound className="h-4 w-4" />}
            Verificar código
          </Button>

          <div className="flex items-center justify-between text-sm">
            <Link to="/login" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-3.5 w-3.5" /> Voltar
            </Link>
            <button
              type="button"
              onClick={handleResend}
              disabled={cooldown > 0 || resending}
              className="font-medium text-primary hover:underline disabled:opacity-60 disabled:no-underline disabled:cursor-not-allowed"
            >
              {resending ? "A reenviar..." : cooldown > 0 ? `Reenviar em ${cooldown}s` : "Reenviar código"}
            </button>
          </div>
        </form>

        <p className="text-center text-xs text-muted-foreground">
          Problemas com o código? Contacte o suporte para recuperar o acesso.
        </p>
      </div>
    </div>
  );
}
