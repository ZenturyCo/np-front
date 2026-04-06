/**
 * Authentication utilities for multi-step registration flow
 */

/**
 * Format phone number for display
 */
export function formatPhoneDisplay(phone: string): string {
  if (!phone) return '';
  
  // Remove non-digits
  const digits = phone.replace(/\D/g, '');
  
  // Format based on length
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format (basic check)
 */
export function isValidPhoneNumber(phone: string): boolean {
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  // Should have at least 7 digits
  const digits = cleaned.replace(/\D/g, '');
  return digits.length >= 7;
}

/**
 * Format full phone number with country code
 */
export function formatFullPhoneNumber(
  countryCode: string,
  phone: string
): string {
  const digits = phone.replace(/\D/g, '');
  return `${countryCode}${digits}`;
}

/**
 * Check if OTP is valid (6 digits)
 */
export function isValidOTP(otp: string): boolean {
  return /^\d{6}$/.test(otp);
}

/**
 * Format registration data for API submission
 */
export function formatRegistrationData(data: {
  fullName: string;
  email: string;
  phone?: string;
  countryCode?: string;
  password: string;
  emailOtp: string;
  phoneOtp?: string;
}) {
  return {
    fullName: data.fullName.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone
      ? formatFullPhoneNumber(data.countryCode || '+55', data.phone)
      : undefined,
    password: data.password,
    emailOtp: data.emailOtp,
    phoneOtp: data.phoneOtp,
  };
}

/**
 * Get error message for API responses
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error && typeof error === 'object' && 'message' in error) {
    return String(error.message);
  }
  return 'Algo correu mal. Tente novamente.';
}

/**
 * Debounce function for OTP input changes
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
