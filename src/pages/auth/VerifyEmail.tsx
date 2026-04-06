import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { OTPInput } from "@/components/auth/OTPInput";
import { ResendButton } from "@/components/auth/ResendButton";
import { Loader2, Mail, ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import { authApi } from "@/lib/api";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const email = searchParams.get("email") || "";
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!email) {
      toast({
        title: "Email inválido",
        description: "Volte ao registo e tente novamente",
        variant: "destructive",
      });
      navigate("/register");
    }
  }, [email, navigate, toast]);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      setOtpError("Código deve ter 6 dígitos");
      return;
    }

    setIsLoading(true);
    try {
      await authApi.verifyEmailOtp(email, otp);
      toast({
        title: "Email verificado!",
        description: "Prossiga com o registo",
      });
      navigate(`/register?email=${encodeURIComponent(email)}`);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Código inválido";
      setOtpError(message);
      toast({
        title: "Erro na verificação",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      await authApi.requestEmailOtp(email);
      toast({
        title: "Código reenviado",
        description: "Verifique a sua caixa de entrada",
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Erro ao reenviar código";
      toast({
        title: "Erro",
        description: message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-success text-white">
            <Mail className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            Verificar Email
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Enviámos um código para <span className="font-medium">{email}</span>
          </p>
        </div>

        {/* Form */}
        <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
          <div className="space-y-2">
            <Label htmlFor="otp">Código de verificação *</Label>
            <OTPInput
              value={otp}
              onChange={setOtp}
              disabled={isLoading}
              error={otpError}
            />
          </div>

          <ResendButton
            onResend={handleResend}
            cooldownSeconds={120}
            disabled={isLoading}
            loading={isLoading}
          />

          <div className="flex gap-3">
            <Button
              onClick={() => navigate("/register")}
              variant="outline"
              disabled={isLoading}
              className="flex-1 gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
            <Button
              onClick={handleVerify}
              disabled={isLoading || otp.length !== 6}
              className="flex-1 gap-2"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : null}
              Verificar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
