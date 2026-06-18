import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Check, Zap, Crown, Building2, ArrowLeft, CreditCard, Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "Sempre grátis",
    icon: Zap,
    color: "border-muted",
    features: [
      "5 membros da equipa",
      "3 projectos activos",
      "100 tarefas",
      "Chat básico",
      "1 GB armazenamento",
    ],
    cta: "Plano Actual",
    current: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: 29,
    period: "/mês por membro",
    icon: Crown,
    color: "border-primary",
    popular: true,
    features: [
      "25 membros da equipa",
      "Projectos ilimitados",
      "Tarefas ilimitadas",
      "Chat + Video + Gravação",
      "Resumos IA de reuniões",
      "Gantt + Kanban avançado",
      "25 GB armazenamento",
      "Suporte prioritário",
    ],
    cta: "Escolher Pro",
  },
  {
    id: "business",
    name: "Business",
    price: 59,
    period: "/mês por membro",
    icon: Building2,
    color: "border-success",
    features: [
      "Membros ilimitados",
      "Projectos ilimitados",
      "Tarefas ilimitadas",
      "Tudo do Pro +",
      "SSO / SAML",
      "Auditoria avançada",
      "API dedicada",
      "100 GB armazenamento",
      "SLA 99.9%",
      "Account Manager dedicado",
    ],
    cta: "Escolher Business",
  },
];

export default function Plans() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [processing, setProcessing] = useState(false);

  // Checkout form
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [seats, setSeats] = useState("5");

  const handleSelectPlan = (plan: typeof plans[0]) => {
    if (plan.current) return;
    setSelectedPlan(plan);
    setCheckoutOpen(true);
  };

  const handleCheckout = async () => {
    if (!cardName || !cardNumber || !cardExpiry || !cardCvc) {
      toast({ title: "Erro", description: "Preencha todos os dados do cartão.", variant: "destructive" });
      return;
    }
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 2500));
    setProcessing(false);
    setCheckoutOpen(false);
    toast({ title: "Plano activado!", description: `O plano ${selectedPlan?.name} está activo. Bem-vindo!` });
  };

  const getPrice = (price: number) => {
    if (billingCycle === "annual") return Math.round(price * 0.8);
    return price;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground">Escolha o plano ideal</h2>
        <p className="mt-2 text-sm text-muted-foreground">Comece grátis e faça upgrade quando precisar</p>

        {/* Billing toggle */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={cn("rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              billingCycle === "monthly" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Mensal
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={cn("rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              billingCycle === "annual" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Anual <span className="ml-1 rounded-full bg-success/15 px-2 py-0.5 text-[11px] font-semibold text-success">-20%</span>
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => {
          const Icon = plan.icon;
          const price = getPrice(plan.price);
          return (
            <div
              key={plan.id}
              className={cn(
                "relative rounded-2xl border-2 bg-card p-6 shadow-sm transition-all hover:shadow-md",
                plan.color,
                plan.popular && "ring-2 ring-primary/20"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  Mais Popular
                </span>
              )}
              <div className="mb-4 flex items-center gap-3">
                <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl",
                  plan.id === "free" ? "bg-muted text-muted-foreground" :
                  plan.id === "pro" ? "bg-primary/10 text-primary" :
                  "bg-success/10 text-success"
                )}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                </div>
              </div>

              <div className="mb-6">
                {plan.price === 0 ? (
                  <p className="text-3xl font-extrabold text-foreground">Grátis</p>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-foreground">${price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                )}
              </div>

              <ul className="mb-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className={cn("mt-0.5 h-4 w-4 shrink-0",
                      plan.id === "free" ? "text-muted-foreground" :
                      plan.id === "pro" ? "text-primary" : "text-success"
                    )} />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.current ? "outline" : "default"}
                disabled={plan.current}
                onClick={() => handleSelectPlan(plan)}
              >
                {plan.cta}
              </Button>
            </div>
          );
        })}
      </div>

      {/* Checkout Modal */}
      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Checkout — {selectedPlan?.name}
            </DialogTitle>
            <DialogDescription>
              {selectedPlan && selectedPlan.price > 0 && (
                <>
                  ${getPrice(selectedPlan.price)} × {seats} membros = <strong>${getPrice(selectedPlan.price) * parseInt(seats || "1")}/{billingCycle === "annual" ? "mês (cobrado anualmente)" : "mês"}</strong>
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Número de membros</Label>
              <Input type="number" min="1" max="500" value={seats} onChange={(e) => setSeats(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Nome no cartão</Label>
              <Input placeholder="Ariclene Santos" value={cardName} onChange={(e) => setCardName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Número do cartão</Label>
              <Input
                placeholder="4242 4242 4242 4242"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim())}
                maxLength={19}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Validade</Label>
                <Input placeholder="MM/AA" value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} maxLength={5} />
              </div>
              <div className="space-y-2">
                <Label>CVC</Label>
                <Input placeholder="123" value={cardCvc} onChange={(e) => setCardCvc(e.target.value)} maxLength={4} type="password" />
              </div>
            </div>
            <div className="rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
              🔒 Os dados do cartão são processados de forma segura. Pode cancelar a qualquer momento.
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCheckoutOpen(false)}>Cancelar</Button>
            <Button onClick={handleCheckout} disabled={processing} className="gap-1.5">
              {processing ? <Loader2 className="h-4 w-4 animate-spin" /> : <CreditCard className="h-4 w-4" />}
              Pagar ${selectedPlan ? getPrice(selectedPlan.price) * parseInt(seats || "1") : 0}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
