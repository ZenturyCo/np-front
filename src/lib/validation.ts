import { z } from 'zod';

// Regex patterns
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9\s\-\+\(\)]{7,}$/; // Flexible international format
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Min 8 chars, 1 uppercase, 1 lowercase, 1 digit

// Registration schemas - step by step
export const step1Schema = z.object({
  fullName: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome não pode exceder 100 caracteres')
    .regex(/^[a-zA-Z\s'-]+$/, 'Nome contém caracteres inválidos'),
  email: z.string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido')
    .max(255, 'Email não pode exceder 255 caracteres'),
  phone: z.string()
    .optional()
    .refine(
      (val) => !val || PHONE_REGEX.test(val),
      'Telefone inválido'
    ),
});

export const step2Schema = z.object({
  emailOtp: z.string()
    .length(6, 'Código deve ter 6 dígitos')
    .regex(/^\d+$/, 'Código deve conter apenas números'),
});

export const step3Schema = z.object({
  phoneOtp: z.string()
    .length(6, 'Código deve ter 6 dígitos')
    .regex(/^\d+$/, 'Código deve conter apenas números')
    .optional(),
  skipPhone: z.boolean().optional(),
});

export const step4Schema = z.object({
  password: z.string()
    .min(8, 'Password deve ter pelo menos 8 caracteres')
    .regex(/[A-Z]/, 'Password deve conter pelo menos uma letra maiúscula')
    .regex(/[a-z]/, 'Password deve conter pelo menos uma letra minúscula')
    .regex(/\d/, 'Password deve conter pelo menos um número'),
  confirmPassword: z.string(),
  termsAccepted: z.boolean()
    .refine((val) => val === true, 'Deve aceitar os Termos & Condições'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords não combinam',
  path: ['confirmPassword'],
});

// Full registration schema
export const registrationSchema = z.object({
  fullName: step1Schema.shape.fullName,
  email: step1Schema.shape.email,
  phone: step1Schema.shape.phone,
  password: step4Schema.shape.password,
  emailOtp: step2Schema.shape.emailOtp,
  phoneOtp: step3Schema.shape.phoneOtp,
});

// Type exports
export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;
export type Step4Data = z.infer<typeof step4Schema>;
export type RegistrationData = z.infer<typeof registrationSchema>;

// Validation functions
export const validateStep1 = (data: unknown) => {
  const result = step1Schema.safeParse(data);
  return {
    success: result.success,
    data: result.data,
    errors: result.error?.flatten().fieldErrors,
  };
};

export const validateStep2 = (data: unknown) => {
  const result = step2Schema.safeParse(data);
  return {
    success: result.success,
    data: result.data,
    errors: result.error?.flatten().fieldErrors,
  };
};

export const validateStep3 = (data: unknown) => {
  const result = step3Schema.safeParse(data);
  return {
    success: result.success,
    data: result.data,
    errors: result.error?.flatten().fieldErrors,
  };
};

export const validateStep4 = (data: unknown) => {
  const result = step4Schema.safeParse(data);
  return {
    success: result.success,
    data: result.data,
    errors: result.error?.flatten().fieldErrors,
  };
};

// Password strength calculator
export const calculatePasswordStrength = (password: string): {
  score: number;
  label: string;
  color: string;
} => {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z\d]/.test(password)) score++;

  const labels = ['Muito fraca', 'Fraca', 'Normal', 'Forte', 'Muito forte', 'Excelente'];
  const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-lime-500', 'bg-green-500', 'bg-emerald-500'];

  return {
    score: Math.min(score, 5),
    label: labels[score],
    color: colors[score],
  };
};
