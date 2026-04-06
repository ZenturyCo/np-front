import { useRef, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
}

export function OTPInput({
  length = 6,
  value,
  onChange,
  disabled = false,
  error,
}: OTPInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    setIsFilled(value.length === length);
  }, [value, length]);

  const handleChange = (index: number, val: string) => {
    const digit = val.replace(/\D/g, '');

    if (digit.length > 1) {
      // Handle paste
      const pastedValue = digit.slice(0, length);
      onChange(pastedValue);
      const nextIndex = Math.min(pastedValue.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    const newValue = value.split('');
    newValue[index] = digit;
    const updatedValue = newValue.join('').slice(0, length);
    onChange(updatedValue);

    // Auto focus to next input
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-center gap-2">
        {Array.from({ length }).map((_, index) => (
          <Input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            disabled={disabled}
            className={cn(
              'h-12 w-12 text-center text-lg font-semibold transition-all',
              'border-2 rounded-lg',
              error
                ? 'border-red-500 focus-visible:ring-red-500'
                : 'border-input focus-visible:ring-primary',
              isFilled && index === length - 1 && 'border-green-500',
            )}
          />
        ))}
      </div>
      {error && <p className="text-center text-sm text-red-500">{error}</p>}
    </div>
  );
}
