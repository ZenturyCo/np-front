import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { OTPInput } from "@/components/auth/OTPInput";
import { ProgressSteps } from "@/components/auth/ProgressSteps";
import { PasswordStrength } from "@/components/auth/PasswordStrength";
import { PhoneInput } from "@/components/auth/PhoneInput";
import { ResendButton } from "@/components/auth/ResendButton";
import {
  validateStep1,
  validateStep2,
  validateStep3,
  validateStep4,
} from "@/lib/validation";

const STEPS = [
  { number: 1, label: "Dados Pessoais" },
  { number: 2, label: "Email" },
  { number: 3, label: "Telefone" },
  { number: 4, label: "Password" },
];

export default function Register() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    registrationState,
    isLoading,
    initializeRegistration,
    setRegistrationStep,
    updateRegistrationData,
    requestEmailOtp,
    verifyEmailOtp,
    requestPhoneOtp,
    verifyPhoneOtp,
    completeRegistration,
    resetRegistration,
  } = useAuthStore();

  // Step 1 state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+55");
  const [step1Error, setStep1Error] = useState<Record<string, string[]>>({});

  // Step 2 state
  const [emailOtp, setEmailOtp] = useState("");
  const [emailOtpError, setEmailOtpError] = useState("");

  // Step 3 state
  const [phoneOtp, setPhoneOtp] = useState("");
  const [phoneOtpError, setPhoneOtpError] = useState("");
  const [skipPhone, setSkipPhone] = useState(false);

  // Step 4 state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [step4Error, setStep4Error] = useState<Record<string, string[]>>({});

  const currentStep = registrationState.currentStep;

  // Handle step 1 submission
  const handleStep1 = async () => {
    const validation = validateStep1({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
    });

    if (!validation.success) {
      setStep1Error(validation.errors || {});
      toast({
        title: "Campos inválidos",
        description: "Verifique os dados inseridos",
        variant: "destructive",
      });
      return;
    }

    try {
      initializeRegistration(
        fullName.trim(),
        email.trim(),
        phone.trim() || undefined
      );
      updateRegistrationData({ countryCode });

      // Request email OTP
      await requestEmailOtp(email.trim());

      setStep1Error({});
      setRegistrationStep(2);

      toast({
        title: "Email enviado",
        description: "Verifique a sua caixa de entrada",
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Erro ao enviar email";
      toast({
        title: "Erro",
        description: message,
        variant: "destructive",
      });
    }
  };

  // Handle step 2 submission
  const handleStep2 = async () => {
    const validation = validateStep2({ emailOtp });

    if (!validation.success) {
      setEmailOtpError(validation.errors?.emailOtp?.[0] || "Código inválido");
      return;
    }

    try {
      await verifyEmailOtp(registrationState.email, emailOtp);
      setEmailOtpError("");

      // Determine next step
      if (registrationState.phone) {
        setRegistrationStep(3);
        await requestPhoneOtp(registrationState.phone);
        toast({
          title: "SMS enviado",
          description: "Verifique a sua mensagem",
        });
      } else {
        setRegistrationStep(4);
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Código inválido";
      setEmailOtpError(message);
      toast({
        title: "Erro na verificação",
        description: message,
        variant: "destructive",
      });
    }
  };

  // Handle step 3 submission
  const handleStep3 = async () => {
    if (skipPhone) {
      setRegistrationStep(4);
      return;
    }

    if (registrationState.phone) {
      const validation = validateStep3({ phoneOtp });

      if (!validation.success) {
        setPhoneOtpError(
          validation.errors?.phoneOtp?.[0] || "Código inválido"
        );
        return;
      }

      try {
        await verifyPhoneOtp(registrationState.phone, phoneOtp);
        setPhoneOtpError("");
        setRegistrationStep(4);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Código inválido";
        setPhoneOtpError(message);
        toast({
          title: "Erro na verificação",
          description: message,
          variant: "destructive",
        });
      }
    }
  };

  // Handle step 4 submission (final registration)
  const handleStep4 = async () => {
    const validation = validateStep4({
      password,
      confirmPassword,
      termsAccepted,
    });

    if (!validation.success) {
      setStep4Error(validation.errors || {});
      toast({
        title: "Campos inválidos",
        description: "Verifique os dados inseridos",
        variant: "destructive",
      });
      return;
    }

    try {
      await completeRegistration(password);
      toast({
        title: "Conta criada!",
        description: "Bem-vindo ao Ngola Projects.",
      });
      navigate("/onboarding");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Erro na criação da conta";
      toast({
        title: "Erro",
        description: message,
        variant: "destructive",
      });
    }
  };

  const handleAddPhone = async () => {
    if (!phone.trim()) {
      toast({
        title: "Telefone obrigatório",
        description: "Preencha o número de telefone",
        variant: "destructive",
      });
      return;
    }

    try {
      updateRegistrationData({
        phone: phone.trim(),
        countryCode,
      });
      await requestPhoneOtp(phone.trim());
      setSkipPhone(false);
      toast({
        title: "SMS enviado",
        description: "Verifique a sua mensagem",
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Erro ao enviar SMS";
      toast({
        title: "Erro",
        description: message,
        variant: "destructive",
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setRegistrationStep(currentStep - 1);
      setEmailOtpError("");
      setPhoneOtpError("");
    }
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setCountryCode("+55");
    setEmailOtp("");
    setPhoneOtp("");
    setPassword("");
    setConfirmPassword("");
    setTermsAccepted(false);
    setSkipPhone(false);
    resetRegistration();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center">
          <div
            className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-extrabold text-white"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--success)))",
            }}
          >
            N
          </div>
          <h1 className="text-2xl font-bold text-foreground">Criar conta</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Comece a gerir os seus projectos hoje
          </p>
        </div>

        {/* Progress Steps */}
        <ProgressSteps
          steps={STEPS}
          currentStep={currentStep}
        />

        {/* Form Container */}
        <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
          {/* Step 1: Personal Data */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome completo *</Label>
                <Input
                  id="fullName"
                  placeholder="João Silva"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (step1Error.fullName) setStep1Error({});
                  }}
                  disabled={isLoading}
                  className={
                    step1Error.fullName ? "border-red-500" : ""
                  }
                />
                {step1Error.fullName && (
                  <p className="text-sm text-red-500">
                    {step1Error.fullName[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="joao@exemplo.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (step1Error.email) setStep1Error({});
                  }}
                  disabled={isLoading}
                  className={step1Error.email ? "border-red-500" : ""}
                />
                {step1Error.email && (
                  <p className="text-sm text-red-500">{step1Error.email[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Telefone{" "}
                  <span className="text-xs text-muted-foreground">
                    (opcional)
                  </span>
                </Label>
                <PhoneInput
                  value={phone}
                  onChange={setPhone}
                  countryCode={countryCode}
                  onCountryCodeChange={setCountryCode}
                  disabled={isLoading}
                  error={step1Error.phone ? step1Error.phone[0] : undefined}
                />
              </div>

              <Button
                onClick={handleStep1}
                disabled={isLoading}
                className="w-full gap-2"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
                Continuar
              </Button>
            </div>
          )}

          {/* Step 2: Email Verification */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Enviámos um código para:
                </p>
                <p className="font-medium text-foreground">
                  {registrationState.email}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="emailOtp">Código de verificação *</Label>
                <OTPInput
                  value={emailOtp}
                  onChange={setEmailOtp}
                  disabled={isLoading}
                  error={emailOtpError}
                />
              </div>

              <ResendButton
                onResend={() =>
                  requestEmailOtp(registrationState.email)
                }
                cooldownSeconds={120}
                disabled={isLoading}
                loading={isLoading}
              />

              <div className="flex gap-3">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  disabled={isLoading}
                  className="flex-1 gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar
                </Button>
                <Button
                  onClick={handleStep2}
                  disabled={isLoading || emailOtp.length !== 6}
                  className="flex-1 gap-2"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                  Verificar
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Phone Verification (Conditional) */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              {registrationState.phone && !skipPhone ? (
                <>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Enviámos um código SMS para:
                    </p>
                    <p className="font-medium text-foreground">
                      {registrationState.countryCode}{" "}
                      {registrationState.phone}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneOtp">Código SMS *</Label>
                    <OTPInput
                      value={phoneOtp}
                      onChange={setPhoneOtp}
                      disabled={isLoading}
                      error={phoneOtpError}
                    />
                  </div>

                  <ResendButton
                    onResend={() =>
                      requestPhoneOtp(registrationState.phone!)
                    }
                    cooldownSeconds={120}
                    disabled={isLoading}
                    loading={isLoading}
                  />

                  <div className="flex gap-3">
                    <Button
                      onClick={handleBack}
                      variant="outline"
                      disabled={isLoading}
                      className="flex-1 gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Voltar
                    </Button>
                    <Button
                      onClick={handleStep3}
                      disabled={isLoading || phoneOtp.length !== 6}
                      className="flex-1 gap-2"
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                      Verificar
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center space-y-4">
                    {!skipPhone && !registrationState.phone ? (
                      <>
                        <p className="text-sm text-foreground">
                          Deseja adicionar um telefone agora?
                        </p>

                        <div className="space-y-2">
                          <Label htmlFor="phoneNew">Telefone</Label>
                          <PhoneInput
                            value={phone}
                            onChange={setPhone}
                            countryCode={countryCode}
                            onCountryCodeChange={setCountryCode}
                            disabled={isLoading}
                          />
                        </div>

                        <div className="flex gap-3">
                          <Button
                            onClick={() => {
                              setSkipPhone(true);
                              setRegistrationStep(4);
                            }}
                            variant="outline"
                            disabled={isLoading}
                            className="flex-1"
                          >
                            Pular
                          </Button>
                          <Button
                            onClick={handleAddPhone}
                            disabled={isLoading || !phone.trim()}
                            className="flex-1 gap-2"
                          >
                            {isLoading ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <ArrowRight className="h-4 w-4" />
                            )}
                            Adicionar
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                        <p className="text-sm text-foreground">
                          Telefone verificado com sucesso!
                        </p>
                        <Button
                          onClick={() => setRegistrationStep(4)}
                          className="w-full gap-2"
                        >
                          <ArrowRight className="h-4 w-4" />
                          Continuar
                        </Button>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Step 4: Password & Terms */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Senha segura"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (step4Error.password) setStep4Error({});
                  }}
                  disabled={isLoading}
                  className={
                    step4Error.password ? "border-red-500" : ""
                  }
                />
                {step4Error.password && (
                  <p className="text-sm text-red-500">
                    {step4Error.password[0]}
                  </p>
                )}
              </div>

              {password && (
                <PasswordStrength password={password} />
              )}

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                  Confirmar password *
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirme a sua password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (step4Error.confirmPassword)
                      setStep4Error({});
                  }}
                  disabled={isLoading}
                  className={
                    step4Error.confirmPassword ? "border-red-500" : ""
                  }
                />
                {step4Error.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {step4Error.confirmPassword[0]}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) =>
                    setTermsAccepted(checked as boolean)
                  }
                  disabled={isLoading}
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer flex-1">
                  Aceito os{" "}
                  <Link
                    to="/terms"
                    className="text-primary hover:underline"
                  >
                    Termos & Condições
                  </Link>
                  {" "}e a{" "}
                  <Link
                    to="/privacy"
                    className="text-primary hover:underline"
                  >
                    Política de Privacidade
                  </Link>
                  {step4Error.termsAccepted && (
                    <span className="block text-red-500 mt-1">
                      {step4Error.termsAccepted[0]}
                    </span>
                  )}
                </label>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  disabled={isLoading}
                  className="flex-1 gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar
                </Button>
                <Button
                  onClick={handleStep4}
                  disabled={isLoading || !termsAccepted}
                  className="flex-1 gap-2"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <CheckCircle className="h-4 w-4" />
                  )}
                  Criar Conta
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground">
          Já tem conta?{" "}
          <Link
            to="/login"
            className="font-medium text-primary hover:underline"
          >
            Iniciar sessão
          </Link>
        </p>
      </div>
    </div>
  );
}
