# Quick Start Guide - Multi-Step Registration

## ⚡ 5-Minute Overview

Implementamos um fluxo de registro completo, seguro e elegante com 4 etapas:

1. **Dados Pessoais** → Nome, Email, Telefone (opcional)
2. **Email OTP** → Verificação com código de 6 dígitos
3. **SMS OTP** → Verificação de telefone (condicional)
4. **Password** → Requisitos de segurança + Termos

## 🎯 Key Features

✅ Validação com Zod em cada campo  
✅ Indicador de progresso visual (1/4, 2/4, etc)  
✅ Password strength com checklist de requisitos  
✅ Phone input com seletor de país  
✅ OTP input com auto-focus e paste support  
✅ Resend com cooldown de 120s  
✅ Back button preserva dados  
✅ Animações suaves entre steps  
✅ Fully responsive  
✅ Acessibilidade (a11y)  

## 🚀 Getting Started

### 1. Run Development Server

```bash
cd /vercel/share/v0-project
npm run dev
```

Abrir: http://localhost:5173/register

### 2. Test the Flow

**Happy Path**:
- Nome: "João Silva"
- Email: "joao@exemplo.com"  
- Telefone: "11987654321" (opcional)
- OTP Email: "123456" (ou mock response)
- OTP SMS: "654321" (se preencheu telefone)
- Password: "SecurePass123"
- Accept terms
- Click "Criar Conta"

**Result**: Redirect to `/onboarding` ✅

### 3. Backend Integration

Os 5 endpoints necessários estão documentados em:
- `src/lib/api.ts` (linhas 395-413)
- `REGISTRATION_FLOW.md` (seção API Endpoints)

**Endpoints para implementar**:

```typescript
// 1. Multi-step registration
POST /auth/register-multi-step
Request: {
  fullName: string
  email: string
  phone?: string (formato: +55XXXXXXXXX)
  password: string
  emailOtp: string
  phoneOtp?: string
}
Response: { accessToken, refreshToken, tokens?: {...} }

// 2-5. OTP endpoints
POST /auth/request-email-otp { email }
POST /auth/verify-email-otp { email, otp }
POST /auth/request-phone-otp { phone }
POST /auth/verify-phone-otp { phone, otp }
Response: { success: boolean }
```

## 📁 File Structure Quick Reference

```
New Components: src/components/auth/
├── OTPInput.tsx
├── ProgressSteps.tsx
├── PasswordStrength.tsx
├── PhoneInput.tsx
└── ResendButton.tsx

New Pages: src/pages/auth/
├── Register.tsx (rewritten)
└── VerifyEmail.tsx

New Libraries: src/lib/
├── validation.ts (Zod schemas)
└── auth-utils.ts (utilities)

Modified:
├── src/store/auth.store.ts (+9 methods)
├── src/lib/api.ts (+5 endpoints)
└── src/App.tsx (+1 route)
```

## 🧪 Testing Locally

### Quick Test ohne Backend

Adicione em `src/lib/api.ts`:

```typescript
// Mock responses (development only)
if (import.meta.env.DEV) {
  const originalApi = authApi;
  
  authApi.requestEmailOtp = async () => {
    console.log('✅ OTP enviado (mock)');
    return { success: true };
  };
  
  authApi.verifyEmailOtp = async (email, otp) => {
    if (otp === '123456') {
      console.log('✅ Email verificado (mock)');
      return { success: true };
    }
    throw new Error('Código inválido');
  };
  
  // Similar para phone OTP...
}
```

### Test Cases Essenciais

```
✅ Step 1: Validação de campos
  - Email inválido → Erro
  - Telefone inválido → Erro
  - Continuar → Envia email OTP

✅ Step 2: Email OTP
  - Código errado → Erro
  - Código certo → Avança
  - Resend funciona com cooldown

✅ Step 3: Phone OTP (condicional)
  - Se vazio: Opção de adicionar/pular
  - Se preenchido: OTP obrigatório

✅ Step 4: Password
  - Requisitos enforcados
  - Termos obrigatórios
  - Submit cria conta
```

## 📖 Documentation Quick Links

| Document | Purpose |
|----------|---------|
| [REGISTRATION_FLOW.md](./REGISTRATION_FLOW.md) | Arquitetura e fluxo completo |
| [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) | Sumário técnico e estatísticas |
| [TESTING_GUIDE.md](./TESTING_GUIDE.md) | Test cases detalhados |
| [NEW_FILES_INDEX.md](./NEW_FILES_INDEX.md) | Índice de todos os novos arquivos |

## 🔐 Security

- Passwords com requisitos mínimos (8 chars, upper, lower, digit)
- OTP 6 dígitos numéricos
- Cooldown 120s em resends
- Validação Zod em frontend + backend (importante!)
- Tokens armazenados seguros em Zustand + localStorage

## 🎨 Design

- Segue gradient Ngola (primário + sucesso)
- Dark mode automático
- Responsive mobile → desktop
- Animações suaves
- Acessibilidade (WCAG 2.1 AA)

## 🐛 Debugging

Abra DevTools Console e execute:

```javascript
// Ver estado do store
import { useAuthStore } from '@/store/auth.store';
const state = useAuthStore.getState();
console.log(state.registrationState);

// Limpar localStorage
localStorage.removeItem('ngola-auth');

// Simular erro
throw new Error('Teste erro em console');
```

## ⚙️ Environment

Nenhuma variável de ambiente nova necessária!  
Usa `FRONTEND_ENV.apiBaseUrl` existente.

## 📱 Responsive Design

- **Mobile** (<640px): Optimizado para toque, labels escondidas em progress
- **Tablet** (640-1024px): 2-column em algumas telas
- **Desktop** (>1024px): Full width com max-width 640px

## 🚀 Próximos Passos

1. **Hoje**: Implementar 5 endpoints no backend
2. **Amanhã**: Testar fluxo completo
3. **Semana**: QA completo + refinements
4. **Próxima Sprint**: Social login, 2FA, etc

## 💡 Pro Tips

**Tip 1**: Use `npm run dev` com DevTools aberto para debugar
**Tip 2**: Customize "países" em `PhoneInput.tsx` (linha ~30)
**Tip 3**: Customize "requisitos password" em `validation.ts`
**Tip 4**: Use `TESTING_GUIDE.md` como checklist pré-deploy

## ❓ FAQ

**P: Posso mudar a ordem dos steps?**  
R: Sim! Reorganize em `Register.tsx` e `STEPS` constant.

**P: Posso tornar o telefone obrigatório?**  
R: Sim! Em `Register.tsx` Step 3, remova botão "Pular".

**P: Onde adiciono reCAPTCHA?**  
R: No Step 1, antes de `handleStep1()`.

**P: Posso customizar código OTP?**  
R: Sim! Mude `length={6}` em `OTPInput.tsx`.

## 📞 Support

Se encontrar issues:
1. Verifique `TESTING_GUIDE.md`
2. Consulte `REGISTRATION_FLOW.md` para detalhes
3. Check console.log statements para debug
4. Verifique que endpoints estão implementados

---

**Status**: ✅ Ready to Use
**Last Updated**: 2026-04-06
**Version**: 1.0.0

Bom desenvolvimento! 🚀
