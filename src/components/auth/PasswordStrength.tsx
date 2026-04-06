import { calculatePasswordStrength } from '@/lib/validation';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  if (!password) {
    return null;
  }

  const { score, label, color } = calculatePasswordStrength(password);

  // Requirements checklist
  const requirements = [
    {
      label: 'Mínimo 8 caracteres',
      met: password.length >= 8,
    },
    {
      label: 'Uma letra maiúscula',
      met: /[A-Z]/.test(password),
    },
    {
      label: 'Uma letra minúscula',
      met: /[a-z]/.test(password),
    },
    {
      label: 'Um número',
      met: /\d/.test(password),
    },
  ];

  return (
    <div className="space-y-3">
      {/* Strength bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Força da password:</span>
          <span className="text-xs font-semibold text-primary">{label}</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={cn('h-full rounded-full transition-all duration-300', color)}
            style={{ width: `${((score + 1) / 6) * 100}%` }}
          />
        </div>
      </div>

      {/* Requirements */}
      <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground">Requisitos:</p>
        {requirements.map((req) => (
          <div
            key={req.label}
            className="flex items-center gap-2 text-xs transition-colors"
          >
            {req.met ? (
              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
            ) : (
              <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            )}
            <span
              className={cn(
                'transition-colors',
                req.met ? 'text-green-600' : 'text-muted-foreground'
              )}
            >
              {req.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
