import { useRef, useState } from "react";
import { useLocation, useNavigate, Navigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/store/auth.store";
import { Loader2, ShieldCheck, KeyRound, ArrowLeft } from "lucide-react";

const TwoFactor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { loginWithTwoFactor, user } = useAuthStore();

  const email = (location.state as { email?: string } | null)?.email || user?.email || "";
  const password = (location.state as { password?: string } | null)?.password || "";

  const [code, setCode] = useState("");
  const [verifying, setVerifying] = useState(false);
  const submittedRef = useRef(false);

  if (!email || !password) {
    return <Navigate to="/login" replace />;
  }

  const handleVerify = async (value?: string) => {
    const finalCode = (value ?? code).trim();
    if (finalCode.length !== 6) return;

    setVerifying(true);
    try {
      await loginWithTwoFactor(email, password, finalCode);

      toast({
        title: "Sucesso",
        description: "Autenticação de dois fatores concluída.",
      });

      navigate("/", { replace: true });
    } catch (err: any) {
      setCode("");
      toast({
        title: "Código inválido",
        description: err?.response?.data?.message || "O código inserido está incorreto ou expirado.",
        variant: "destructive",
      });
    } finally {
      setVerifying(false);
      submittedRef.current = false;
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
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold">Verificação em Duas Etapas</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Insira o código de 6 dígitos da sua aplicação autenticadora.
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleVerify(); }} className="space-y-6 rounded-xl border bg-card p-6 shadow-sm">
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

          <Button type="submit" className="w-full" disabled={verifying || code.length !== 6}>
            {verifying ? <Loader2 className="h-4 w-4 animate-spin" /> : <KeyRound className="h-4 w-4" />}
            Verificar Código
          </Button>

          <div className="text-center">
            <Link to="/login" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-3.5 w-3.5" /> Voltar ao login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TwoFactor;
