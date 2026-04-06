import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  number: number;
  label: string;
  completed?: boolean;
}

interface ProgressStepsProps {
  steps: Step[];
  currentStep: number;
}

export function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  return (
    <div className="space-y-6">
      {/* Visual progress indicator */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center flex-1">
            {/* Circle indicator */}
            <div
              className={cn(
                'flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300',
                step.completed
                  ? 'bg-green-500 text-white'
                  : currentStep === step.number
                    ? 'bg-gradient-to-br from-primary to-success text-white scale-110'
                    : 'bg-muted text-muted-foreground'
              )}
            >
              {step.completed ? (
                <Check className="w-5 h-5" />
              ) : (
                <span>{step.number}</span>
              )}
            </div>

            {/* Label */}
            <p
              className={cn(
                'mt-2 text-xs font-medium text-center hidden sm:block',
                step.completed || currentStep === step.number
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {step.label}
            </p>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'absolute h-1 w-full ml-6 mt-5 transition-all duration-300',
                  index < currentStep - 1
                    ? 'bg-gradient-to-r from-primary to-success'
                    : 'bg-muted'
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step counter */}
      <div className="text-center text-sm text-muted-foreground">
        Passo {currentStep} de {steps.length}
      </div>
    </div>
  );
}
