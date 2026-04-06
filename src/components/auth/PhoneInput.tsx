import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  countryCode?: string;
  onCountryCodeChange?: (code: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}

// Common country codes
const COUNTRY_CODES = [
  { code: '+55', country: 'Brasil', flag: '🇧🇷' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
  { code: '+34', country: 'Espanha', flag: '🇪🇸' },
  { code: '+33', country: 'França', flag: '🇫🇷' },
  { code: '+44', country: 'Reino Unido', flag: '🇬🇧' },
  { code: '+49', country: 'Alemanha', flag: '🇩🇪' },
  { code: '+1', country: 'EUA/Canadá', flag: '🇺🇸' },
  { code: '+39', country: 'Itália', flag: '🇮🇹' },
  { code: '+31', country: 'Holanda', flag: '🇳🇱' },
  { code: '+358', country: 'Finlândia', flag: '🇫🇮' },
];

export function PhoneInput({
  value,
  onChange,
  countryCode = '+55',
  onCountryCodeChange,
  placeholder = (11) 98765-4321',
  error,
  disabled = false,
}: PhoneInputProps) {
  const phoneNumber = value.replace(/\D/g, '');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 15);
    onChange(val);
  };

  const formatPhoneDisplay = (phone: string) => {
    if (!phone) return '';

    // Format based on length for better UX
    if (phone.length <= 2) return phone;
    if (phone.length <= 7) return `(${phone.slice(0, 2)}) ${phone.slice(2)}`;
    return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Select value={countryCode} onValueChange={onCountryCodeChange}>
          <SelectTrigger className="w-28">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {COUNTRY_CODES.map((item) => (
              <SelectItem key={item.code} value={item.code}>
                <span>{item.flag}</span>
                <span className="ml-2">{item.code}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          type="tel"
          inputMode="numeric"
          value={formatPhoneDisplay(phoneNumber)}
          onChange={handlePhoneChange}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            'flex-1',
            error && 'border-red-500 focus-visible:ring-red-500'
          )}
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
      {phoneNumber && (
        <p className="text-xs text-muted-foreground">
          Número completo: {countryCode} {formatPhoneDisplay(phoneNumber)}
        </p>
      )}
    </div>
  );
}
