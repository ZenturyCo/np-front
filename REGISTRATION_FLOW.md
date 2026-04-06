# Multi-Step Registration Flow Documentation

## Overview

O novo fluxo de registro multi-etapas para Ngola Projects foi implementado com validação rigorosa, verificação de email e SMS, e requisitos de segurança aprimorados.

## Arquitetura

### Componentes Novos

1. **OTPInput** (`src/components/auth/OTPInput.tsx`)
   - Input para códigos OTP de 6 dígitos
   - Suporta auto-focus entre campos
   - Suporta paste de códigos
   - Validação em tempo real

2. **ProgressSteps** (`src/components/auth/ProgressSteps.tsx`)
   - Indicador visual de progresso (1/4, 2/4, 3/4, 4/4)
   - Estados: completado, ativo, pendente
   - Responsive (labels escondidas em mobile)

3. **PasswordStrength** (`src/components/auth/PasswordStrength.tsx`)
   - Barra de força visual
   - Checklist de requisitos
   - Feedback em tempo real

4. **PhoneInput** (`src/components/auth/PhoneInput.tsx`)
   - Seletor de país com bandeiras
   - Formatação automática
   - Suporta múltiplos formatos internacionais

5. **ResendButton** (`src/components/auth/ResendButton.tsx`)
   - Cooldown de 120 segundos
   - Countdown visual
   - Estados de loading

### Store (Zustand)

Extended `useAuthStore` com métodos para cada etapa:

```typescript
// Inicializar registro
initializeRegistration(fullName, email, phone?)

// Controlar steps
setRegistrationStep(step)
updateRegistrationData(data)

// OTP verification
requestEmailOtp(email)
verifyEmailOtp(email, otp)
requestPhoneOtp(phone)
verifyPhoneOtp(phone, otp)

// Finalizar
completeRegistration(password)
resetRegistration()
```

### Validação com Zod

Arquivo: `src/lib/validation.ts`

Schemas por etapa:
- `step1Schema` - Nome, Email, Telefone
- `step2Schema` - Email OTP
- `step3Schema` - Telefone OTP (opcional)
- `step4Schema` - Password & Termos

Requisitos de Password:
- Mínimo 8 caracteres
- 1 letra maiúscula
- 1 letra minúscula
- 1 número

### API Endpoints

Novos endpoints necessários no backend:

```typescript
// Multi-step registration
POST /auth/register-multi-step
{
  fullName: string
  email: string
  phone?: string (formato: +55XXXXXXXXX)
  password: string
  emailOtp: string
  phoneOtp?: string
}

// OTP requests
POST /auth/request-email-otp
{ email: string }

POST /auth/verify-email-otp
{ email: string, otp: string }

POST /auth/request-phone-otp
{ phone: string }

POST /auth/verify-phone-otp
{ phone: string, otp: string }
```

## Fluxo do Registro

### Step 1: Dados Pessoais
- Nome completo (obrigatório)
- Email (obrigatório)
- Telefone (opcional)
- Validação local com Zod
- Erro se email inválido ou nome muito curto
- Ao continuar: Envia OTP para email

### Step 2: Verificação de Email
- Exibe email para confirmação
- Input de código OTP (6 dígitos)
- Botão Resend com cooldown 120s
- Verificação na API
- Próximo passo: Step 3 (se telefone foi preenchido) ou Step 4

### Step 3: Verificação de Telefone (Condicional)

**Cenário A: Telefone preenchido no Step 1**
- Exibe telefone formatado
- Input de código SMS (6 dígitos)
- Resend com cooldown
- Avança para Step 4

**Cenário B: Telefone vazio no Step 1**
- Opção: "Deseja adicionar telefone?"
- Pode adicionar agora (recebe SMS)
- Ou pular para Step 4
- Se adicionar: Input telefone + verificação

### Step 4: Password & Termos
- Input password com força visual
- Confirm password
- Checkbox Termos & Condições
- Validação completa antes de submit
- Ao confirmar: Cria conta na API

## Fluxo de Dados

```
User Input (Step 1)
    ↓
Local Validation (Zod)
    ↓
API: requestEmailOtp
    ↓
User Input OTP (Step 2)
    ↓
API: verifyEmailOtp
    ↓
If phone: requestPhoneOtp (Step 3)
    ↓
If phone: verifyPhoneOtp
    ↓
User Input Password (Step 4)
    ↓
API: registerMultiStep
    ↓
Save tokens, redirect to onboarding
```

## Tratamento de Erros

- **Validação Local**: Exibido ao lado do campo
- **Verificação OTP**: Campo de erro abaixo do OTP input
- **Erros API**: Toast notificação com mensagem descritiva
- **Retry**: Botão Resend disponível para OTP

## States do Auth Store

```typescript
interface RegistrationState {
  fullName: string
  email: string
  phone?: string
  countryCode: string
  emailOtp?: string
  phoneOtp?: string
  currentStep: number
}
```

## Animações

- Fade-in + Slide-in ao mudar de step
- Progress steps com scale no step atual
- Spinner no botão durante loading
- Cores de feedback (green para completo, red para erro)

## Segurança

- Passwords com requisitos mínimos
- OTP com 6 dígitos (não salvo em localStorage)
- Validação server-side obrigatória
- Tokens armazenados em Zustand + localStorage (persist)
- Sessão com refresh token

## UX Improvements

- Auto-focus entre campos OTP
- Paste de código OTP
- Formatação automática de telefone
- Indicador de força de password
- Buttons desabilitados durante loading
- Mensagens de erro específicas por campo
- Contador de resend visible
- Back button em todos os steps

## Testing

### Manual Testing Checklist

- [ ] Step 1: Validar nome (mín 2 chars, sem números)
- [ ] Step 1: Validar email (formato correto)
- [ ] Step 1: Validar telefone (se preenchido)
- [ ] Step 2: OTP inválido (erro mostrado)
- [ ] Step 2: OTP válido (avança)
- [ ] Step 2: Resend cooldown funciona (120s)
- [ ] Step 3: Telefone vazio pode pular
- [ ] Step 3: Telefone preenchido obrigatório
- [ ] Step 4: Password requirements (8 chars, uppercase, lowercase, digit)
- [ ] Step 4: Passwords não combinam (erro)
- [ ] Step 4: Termos obrigatórios (checkbox)
- [ ] Final: Conta criada e login automático

## Próximas Melhorias (Future)

1. Social login (Google, GitHub)
2. Email verification com link (fallback)
3. Two-factor authentication 2FA
4. Biometric auth
5. Rate limiting em OTP requests
6. Account recovery flow
7. Email re-verification após login
8. Phone number updates
