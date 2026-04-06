import { useState } from "react";
import { Bot, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const initialMessages = [
  {
    role: "assistant" as const,
    text: "Olá Ariclene! Sou o assistente IA do Ngola Projects. Aqui está um resumo rápido dos seus projectos:",
  },
  {
    role: "assistant" as const,
    text: "⚠️ O projecto **Torres 5G** tem um score de risco de **85%**. Existem 3 tarefas bloqueadas há mais de 48 horas que precisam de atenção imediata.\n\n📊 O projecto **Terminal Lobito** está com performance **20% acima** do previsto — a equipa está a fazer um excelente trabalho.\n\n⏰ O **Fibra Benguela** tem deadline em 5 dias com 70% por completar. Recomendo realocar recursos.",
  },
  {
    role: "user" as const,
    text: "Quais são as tarefas bloqueadas no projecto Torres 5G?",
  },
  {
    role: "assistant" as const,
    text: "As 3 tarefas bloqueadas no projecto **Torres 5G** são:\n\n1. **Instalação de antena — Torre #8** — Bloqueada por falta de equipamento (fornecedor atrasado)\n2. **Teste de conectividade — Torre #5** — Dependente da conclusão da tarefa anterior\n3. **Certificação técnica — Lote Norte** — Aguarda aprovação do regulador\n\nRecomendo contactar o fornecedor AlphaTech para acelerar a entrega e escalar a certificação com o INACOM.",
  },
];

export default function AIAssistant() {
  const [messages] = useState(initialMessages);
  const [input, setInput] = useState("");

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col rounded-xl border bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b px-5 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Assistente IA</p>
          <p className="text-xs text-muted-foreground">Insights inteligentes sobre os seus projectos</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-auto p-5">
        {messages.map((m, i) => (
          <div key={i} className={cn("flex gap-3", m.role === "user" && "flex-row-reverse")}>
            <div className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold", m.role === "assistant" ? "bg-primary/10 text-primary" : "bg-primary text-primary-foreground")}>
              {m.role === "assistant" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
            </div>
            <div className={cn("max-w-xl rounded-xl px-4 py-3 text-sm leading-relaxed", m.role === "assistant" ? "bg-muted text-foreground" : "bg-primary text-primary-foreground")}>
              {m.text.split("\n").map((line, j) => (
                <p key={j} className={cn(j > 0 && "mt-1")}>
                  {line.split(/(\*\*.*?\*\*)/).map((part, k) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={k}>{part.slice(2, -2)}</strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            placeholder="Pergunte algo sobre os seus projectos..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
