// components/MetricCard.tsx
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type MetricColor = "primary" | "success" | "warning";

export interface MetricCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  color: MetricColor;           // Mantém o tipo estrito
}

export function MetricCard({ title, value, icon: Icon, color }: MetricCardProps) {
  // Proteção contra NaN
  const displayValue = Number.isNaN(Number(value)) ? 0 : value;

  const colorClasses = {
    primary: "text-primary border-primary/20 bg-primary/5",
    success: "text-success border-success/20 bg-success/5",
    warning: "text-warning border-warning/20 bg-warning/5",
  } as const;

  return (
    <div className={cn(
      "rounded-2xl border p-6 transition-all hover:shadow-md",
      colorClasses[color]
    )}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {typeof displayValue === "number" && title.includes("Taxa")
              ? `${displayValue}%`
              : displayValue}
          </p>
        </div>

        <div className={cn("rounded-xl p-3", colorClasses[color])}>
          <Icon className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}