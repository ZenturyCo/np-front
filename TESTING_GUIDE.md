# Testing Guide - Multi-Step Registration

## Setup Local Testing

### 1. Preparar Mock de API (Opcional)

Para testar sem backend real, você pode mockerar os endpoints. Adicione em `src/lib/api.ts`:

```typescript
// Apenas para desenvolvimento/teste
const USE_MOCK = false; // Mude para true para testar

if (USE_MOCK) {
  authApi.requestEmailOtp = async (email: string) => {
    console.log('Mock: Enviando OTP para', email);
    // Simular OTP: 123456
    return { success: true };
  };

  authApi.verifyEmailOtp = async (email: string, otp: string) => {
    console.log('Mock: Verificando OTP', otp);
    if (otp === '123456') {
      return { success: true };
    }
    throw new Error('Código inválido');
  };

  // ... Similar para phone OTP
}
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Abrir em Browser

```
http://localhost:5173/register
```

## Test Cases - Step by Step

### Step 1: Dados Pessoais

#### ✅ Happy Path
- **Input**: 
  - Nome: "João Silva"
  - Email: "joao@exemplo.com"
  - Telefone: "11987654321"
- **Expected**: Continuar button habilitado
- **Action**: Click "Continuar"
- **Result**: Avança para Step 2, email OTP é enviado

#### ❌ Nome Inválido
- **Input**: 
  - Nome: "J" (muito curto)
  - Email: "joao@exemplo.com"
- **Expected**: Erro "Nome deve ter pelo menos 2 caracteres"
- **Action**: Tentar continuar
- **Result**: Mensagem de erro vermelha, não avança

#### ❌ Email Inválido
- **Input**:
  - Nome: "João Silva"
  - Email: "invalid-email"
- **Expected**: Erro "Email inválido"
- **Action**: Tentar continuar
- **Result**: Mensagem de erro vermelha, não avança

#### ⚠️ Telefone Inválido
- **Input**:
  - Nome: "João Silva"
  - Email: "joao@exemplo.com"
  - Telefone: "123" (muito curto)
- **Expected**: Erro "Telefone inválido"
- **Action**: Tentar continuar
- **Result**: Mensagem de erro vermelha, não avança

#### 🔄 Telefone Opcional
- **Input**:
  - Nome: "João Silva"
  - Email: "joao@exemplo.com"
  - Telefone: "" (vazio)
- **Expected**: Continuar button habilitado
- **Action**: Click "Continuar"
- **Result**: Avança, telefone será opcional no Step 3

### Step 2: Verificação Email

#### ✅ OTP Válido
- **Expected**: Email exibido com últimos 4 caracteres
- **Input**: Inserir "123456"
- **Action**: Click "Verificar"
- **Result**: 
  - Se telefone no Step 1 → Avança para Step 3
  - Se sem telefone → Avança para Step 4

#### ❌ OTP Inválido
- **Input**: "000000"
- **Action**: Click "Verificar"
- **Result**: Erro "Código inválido" em vermelho

#### ⏱️ Resend Cooldown
- **Action**: Click "Reenviar código"
- **Result**:
  - Botão desabilita
  - Countdown mostra "Resend em 120s"
  - Esperar 120 segundos (ou usar DevTools para mock time)

#### 🔙 Back Button
- **Action**: Click "Voltar"
- **Result**: Retorna para Step 1, dados preservados

#### 📋 Copy-Paste OTP
- **Expected**: Suportar paste de múltiplos dígitos
- **Action**: Copiar "123456" e colar no primeiro campo
- **Result**: Preenchimento automático em todos os 6 campos

### Step 3: Verificação Telefone

#### Cenário A: Telefone foi preenchido (Step 1)

**✅ OTP SMS Válido**
- **Expected**: Telefone formatado exibido
- **Input**: "654321"
- **Action**: Click "Verificar"
- **Result**: Avança para Step 4

**❌ OTP SMS Inválido**
- **Input**: "000000"
- **Expected**: Erro "Código inválido"

**⏱️ Resend SMS**
- **Action**: Click "Reenviar código"
- **Result**: Cooldown 120s ativo

#### Cenário B: Telefone vazio (Step 1)

**➕ Adicionar Telefone Agora**
- **Expected**: Input de telefone visível
- **Input**: "11987654321"
- **Action**: Click "Adicionar"
- **Result**: SMS é enviado, input OTP aparece

**⏭️ Pular Telefone**
- **Action**: Click "Pular"
- **Result**: Avança direto para Step 4 sem SMS

### Step 4: Password & Termos

#### ✅ Password Válida
- **Input**:
  - Password: "SecurePass123"
  - Confirm: "SecurePass123"
  - Termos: checked
- **Expected**:
  - Barra de força verde ("Excelente")
  - Checklist com todos os checkmarks
- **Action**: Click "Criar Conta"
- **Result**: 
  - Loading spinner
  - Conta criada
  - Redirect para `/onboarding`

#### ❌ Password Muito Curta
- **Input**: "Pass1"
- **Expected**: Erro "Password deve ter pelo menos 8 caracteres"
- **Result**: Botão desabilitado

#### ❌ Sem Maiúsculas
- **Input**: "password123"
- **Expected**: Erro "Password deve conter... letra maiúscula"
- **Result**: Checklist marca requisito como não atendido

#### ❌ Sem Números
- **Input**: "PasswordAbc"
- **Expected**: Erro "Password deve conter... número"
- **Result**: Requisito incompleto

#### ❌ Passwords Não Combinam
- **Input**:
  - Password: "SecurePass123"
  - Confirm: "SecurePass124"
- **Expected**: Erro "Passwords não combinam"
- **Result**: Botão desabilitado

#### ❌ Termos Não Aceitos
- **Input**:
  - Password: "SecurePass123"
  - Confirm: "SecurePass123"
  - Termos: unchecked
- **Expected**: Erro "Deve aceitar... Termos & Condições"
- **Result**: Botão desabilitado

#### 📊 Password Strength Visual
- **Ação**: Digitar passwords diferentes
- **Expected**: Barra de força muda cor:
  - Vermelho (fraca)
  - Laranja (normal)
  - Amarelo (média)
  - Verde (forte)
  - Escuro/Excelente

## Browser DevTools Testing

### Mock API Responses

Abra DevTools → Console e execute:

```javascript
// Mock bem-sucedido
window.mockOtpResponse = { success: true };

// Mock erro
window.mockOtpError = new Error('Serviço temporariamente indisponível');
```

### Simular Latência

```javascript
// No arquivo api.ts, adicione delay
if (process.env.NODE_ENV === 'development') {
  await new Promise(resolve => setTimeout(resolve, 2000));
}
```

### Testar States do Store

```javascript
// No console
import { useAuthStore } from '@/store/auth.store';
const store = useAuthStore.getState();
console.log(store.registrationState);
```

## Validação de Componentes

### OTPInput
```javascript
// Testar paste
const pastedValue = '123456';
const event = new ClipboardEvent('paste', { 
  clipboardData: new DataTransfer() 
});
// Verificar que todos os 6 campos são preenchidos
```

### PasswordStrength
```javascript
// Testar diferentes passwords
const passwords = [
  'weak', // 0 requisitos
  'Strong1', // 4 requisitos
  'VeryStr0ng!@#', // 6 requisitos
];
// Verificar cor/label da barra
```

### PhoneInput
```javascript
// Testar diferentes países
const countries = ['+55', '+351', '+1', '+44'];
// Verificar formatação automática
```

## Accessibility Testing

### Keyboard Navigation
- [ ] Tab funciona através de todos os inputs
- [ ] Shift+Tab volta
- [ ] Enter em botões
- [ ] Escape cancela (se aplicável)

### Screen Reader
- [ ] Labels associados aos inputs
- [ ] Error messages anunciados
- [ ] Button purposes clear

### Color Contrast
- Verificar com ferramentas como WCAG Contrast Checker
- Mínimo 4.5:1 para texto

## Performance Testing

### Lighthouse
```bash
npm run build
npm run preview
# Abrir DevTools → Lighthouse
```

### Esperados
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+

## Integration Testing (E2E)

Usar Playwright para fluxo completo:

```typescript
// playwright.config.ts
test('Complete registration flow', async ({ page }) => {
  await page.goto('http://localhost:5173/register');
  
  // Step 1
  await page.fill('[name="fullName"]', 'João Silva');
  await page.fill('[name="email"]', 'joao@test.com');
  await page.click('button:has-text("Continuar")');
  
  // Step 2
  await page.waitForSelector('[data-otp-input]');
  await page.fill('[data-otp-input-0]', '1');
  // ... resto dos dígitos
  await page.click('button:has-text("Verificar")');
  
  // ... resto dos steps
  
  await page.waitForURL('**/onboarding');
});
```

## Checklist Completo

### Funcionalidade
- [ ] Todos os 4 steps funcionam
- [ ] Validação em cada step
- [ ] Back button preserva dados
- [ ] Telefone condicional funciona
- [ ] OTP validation funciona
- [ ] Password requirements enforcado
- [ ] Termos obrigatórios
- [ ] Redirect após sucesso

### UI/UX
- [ ] Progress bar visual
- [ ] Animações entre steps
- [ ] Loading states
- [ ] Error messages claras
- [ ] Success messages
- [ ] Responsive mobile/tablet/desktop

### Segurança
- [ ] Password não armazenado em plain
- [ ] OTP não visível em localStorage
- [ ] Tokens salvos seguros
- [ ] Validação server-side (quando backend pronto)

### Performance
- [ ] Carregamento rápido
- [ ] Sem memory leaks
- [ ] Sem excessive re-renders

---

**Status**: Ready for QA
**Last Updated**: 2026-04-06
