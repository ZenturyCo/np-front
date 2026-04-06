import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { RotateCcw } from 'lucide-react';

interface ResendButtonProps {
  onResend: () => Promise<void>;
  cooldownSeconds?: number;
  disabled?: boolean;
  loading?: boolean;
}

export function ResendButton({
  onResend,
  cooldownSeconds = 120,
  disabled = false,
  loading = false,
}: ResendButtonProps) {
  const [countdown, setCountdown] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const handleResend = async () => {
    try {
      setIsLoading(true);
      await onResend();
      setCountdown(cooldownSeconds);
    } catch (error) {
      console.error('[v0] Resend error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isDisabled = countdown > 0 || disabled || loading || isLoading;

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={handleResend}
        disabled={isDisabled}
        className={cn(
          'gap-2 transition-all',
          countdown > 0 && 'opacity-50 cursor-not-allowed'
        )}
      >
        <RotateCcw className={cn('w-4 h-4', isLoading && 'animate-spin')} />
        {countdown > 0 ? `Resend em ${countdown}s` : 'Reenviar código'}
      </Button>
      
      {countdown > 0 && (
        <p className="text-xs text-muted-foreground">
          Próxima tentativa em {countdown}s
        </p>
      )}
    </div>
  );
}
