import { CheckCircle, TrendingUp, Video, Download } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const reportMetrics = [
  { title: "Projectos Concluídos", value: 3, icon: CheckCircle, color: "success" as const },
  { title: "Taxa de Entrega", value: "87%", icon: TrendingUp, trend: "+12% vs mês anterior", trendUp: true, color: "primary" as const },
  { title: "Reuniões Realizadas", value: 24, icon: Video, color: "warning" as const },
];

const projectProgress = [
  { name: "Rollout Torres 5G — Luanda", vertical: "Telecom", progress: 65 },
  { name: "Expansão Rede Fibra — Benguela", vertical: "Telecom", progress: 30 },
  { name: "Terminal Portuário — Lobito", vertical: "Construção", progress: 78 },
  { name: "Plataforma Offshore — Cabinda", vertical: "Oil & Energy", progress: 15 },
  { name: "Data Center — Luanda Sul", vertical: "Telecom", progress: 45 },
  { name: "Ponte Kwanza — Viana", vertical: "Construção", progress: 52 },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {reportMetrics.map((m) => (
          <MetricCard key={m.title} {...m} />
        ))}
      </div>

      <div className="rounded-xl border bg-card p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-foreground">Progresso por Projecto</h2>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="h-4 w-4" /> Exportar PDF
          </Button>
        </div>
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-xs uppercase text-muted-foreground">
                <th className="pb-3 pr-4 font-medium">Projecto</th>
                <th className="pb-3 pr-4 font-medium">Vertical</th>
                <th className="pb-3 pr-4 font-medium">Progresso</th>
                <th className="pb-3 font-medium w-16"></th>
              </tr>
            </thead>
            <tbody>
              {projectProgress.map((p) => (
                <tr key={p.name} className="border-b last:border-0">
                  <td className="py-3 pr-4 font-medium text-foreground">{p.name}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{p.vertical}</td>
                  <td className="py-3 pr-4">
                    <Progress value={p.progress} className="h-2 w-32" />
                  </td>
                  <td className="py-3 text-right font-medium text-muted-foreground">{p.progress}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
