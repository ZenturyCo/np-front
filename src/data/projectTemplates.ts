// AUTO-GENERATED — 250 project templates across 20 industries
// Do not edit by hand; regenerate via scripts/gen_templates.py
import type { ProjectTemplate } from "@/lib/types";

export const PROJECT_TEMPLATES: ProjectTemplate[] = [
  {
    "id": "tpl-001",
    "name": "Expansão de Rede 5G",
    "industry": "Telecomunicações",
    "icon": "Radio",
    "description": "Implementação de cobertura 5G em região metropolitana",
    "methodology": "Agile",
    "phases": [
      "Estudo de viabilidade",
      "Engenharia",
      "Procurement",
      "Implementação",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Levantamento de site survey",
        "description": "Análise técnica dos sites candidatos",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Plano de monitorização 24/7",
        "description": "NOC e alarmística",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "RFQ a fornecedores",
        "description": "Pedido de cotação para equipamentos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Engenharia"
      },
      {
        "title": "Desenho de cobertura RF",
        "description": "Simulação de propagação e capacidade",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Procurement"
      },
      {
        "title": "Optimização KPI de RF",
        "description": "Tuning de parâmetros e tilts",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Procurement"
      },
      {
        "title": "Licenciamento ANACOM/INACOM",
        "description": "Submissão regulatória e aprovações",
        "priority": "urgent",
        "estimatedDays": 15,
        "phase": "Implementação"
      },
      {
        "title": "Negociação com proprietários",
        "description": "Contratos de aluguer/uso de espaço",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Comissionamento"
      },
      {
        "title": "Importação de equipamentos",
        "description": "Logística internacional e desalfandegamento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Comissionamento"
      },
      {
        "title": "Obra civil de torre",
        "description": "Construção/reforço de infraestrutura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Realize site surveys conjuntos com fornecedores para reduzir retrabalho.",
      "Antecipe licenciamento regulatório — geralmente é o caminho crítico.",
      "Mantenha stock de spare parts críticos para reduzir MTTR.",
      "Documente KPI baseline antes do go-live para comparação objectiva.",
      "Integre SOC desde o desenho — segurança não é add-on."
    ],
    "kpis": [
      "Cobertura (km²)",
      "Sites no ar / planeados",
      "SLA 99.9%",
      "MTTR (h)",
      "CAPEX vs orçamento"
    ],
    "durationWeeks": 13,
    "teamSize": 6,
    "popularity": 77
  },
  {
    "id": "tpl-002",
    "name": "Migração para Fibra Óptica",
    "industry": "Telecomunicações",
    "icon": "Radio",
    "description": "Substituição de infraestrutura de cobre por fibra",
    "methodology": "PRINCE2",
    "phases": [
      "Estudo de viabilidade",
      "Engenharia",
      "Procurement",
      "Implementação",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Levantamento de site survey",
        "description": "Análise técnica dos sites candidatos",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Aceitação final do cliente",
        "description": "Sign-off técnico e contratual",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Negociação com proprietários",
        "description": "Contratos de aluguer/uso de espaço",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Engenharia"
      },
      {
        "title": "Desenho de cobertura RF",
        "description": "Simulação de propagação e capacidade",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Engenharia"
      },
      {
        "title": "Optimização KPI de RF",
        "description": "Tuning de parâmetros e tilts",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Procurement"
      },
      {
        "title": "Comissionamento e integração",
        "description": "Conexão ao core network",
        "priority": "urgent",
        "estimatedDays": 4,
        "phase": "Procurement"
      },
      {
        "title": "Treino de equipas de O&M",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Implementação"
      },
      {
        "title": "RFQ a fornecedores",
        "description": "Pedido de cotação para equipamentos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Plano de monitorização 24/7",
        "description": "NOC e alarmística",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Comissionamento"
      },
      {
        "title": "Obra civil de torre",
        "description": "Construção/reforço de infraestrutura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Comissionamento"
      },
      {
        "title": "Testes drive-test",
        "description": "Validação de cobertura em campo",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Operação"
      },
      {
        "title": "Instalação de RRH e antenas",
        "description": "Montagem de unidades remotas e radiantes",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Realize site surveys conjuntos com fornecedores para reduzir retrabalho.",
      "Antecipe licenciamento regulatório — geralmente é o caminho crítico.",
      "Mantenha stock de spare parts críticos para reduzir MTTR.",
      "Documente KPI baseline antes do go-live para comparação objectiva.",
      "Integre SOC desde o desenho — segurança não é add-on."
    ],
    "kpis": [
      "Cobertura (km²)",
      "Sites no ar / planeados",
      "SLA 99.9%",
      "MTTR (h)",
      "CAPEX vs orçamento"
    ],
    "durationWeeks": 10,
    "teamSize": 22,
    "popularity": 57
  },
  {
    "id": "tpl-003",
    "name": "Implementação BSS/OSS",
    "industry": "Telecomunicações",
    "icon": "Radio",
    "description": "Sistemas de suporte ao negócio e operações",
    "methodology": "Waterfall",
    "phases": [
      "Estudo de viabilidade",
      "Engenharia",
      "Procurement",
      "Implementação",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Treino de equipas de O&M",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Aceitação final do cliente",
        "description": "Sign-off técnico e contratual",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Licenciamento ANACOM/INACOM",
        "description": "Submissão regulatória e aprovações",
        "priority": "urgent",
        "estimatedDays": 15,
        "phase": "Engenharia"
      },
      {
        "title": "Obra civil de torre",
        "description": "Construção/reforço de infraestrutura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Procurement"
      },
      {
        "title": "Importação de equipamentos",
        "description": "Logística internacional e desalfandegamento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Procurement"
      },
      {
        "title": "RFQ a fornecedores",
        "description": "Pedido de cotação para equipamentos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Plano de monitorização 24/7",
        "description": "NOC e alarmística",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Comissionamento"
      },
      {
        "title": "Negociação com proprietários",
        "description": "Contratos de aluguer/uso de espaço",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Comissionamento"
      },
      {
        "title": "Instalação de RRH e antenas",
        "description": "Montagem de unidades remotas e radiantes",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Realize site surveys conjuntos com fornecedores para reduzir retrabalho.",
      "Antecipe licenciamento regulatório — geralmente é o caminho crítico.",
      "Mantenha stock de spare parts críticos para reduzir MTTR.",
      "Documente KPI baseline antes do go-live para comparação objectiva.",
      "Integre SOC desde o desenho — segurança não é add-on."
    ],
    "kpis": [
      "Cobertura (km²)",
      "Sites no ar / planeados",
      "SLA 99.9%",
      "MTTR (h)",
      "CAPEX vs orçamento"
    ],
    "durationWeeks": 12,
    "teamSize": 6,
    "popularity": 64
  },
  {
    "id": "tpl-004",
    "name": "Lançamento de MVNO",
    "industry": "Telecomunicações",
    "icon": "Radio",
    "description": "Operação móvel virtual de nova marca",
    "methodology": "Agile",
    "phases": [
      "Estudo de viabilidade",
      "Engenharia",
      "Procurement",
      "Implementação",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Importação de equipamentos",
        "description": "Logística internacional e desalfandegamento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Aceitação final do cliente",
        "description": "Sign-off técnico e contratual",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Testes drive-test",
        "description": "Validação de cobertura em campo",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Engenharia"
      },
      {
        "title": "RFQ a fornecedores",
        "description": "Pedido de cotação para equipamentos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Procurement"
      },
      {
        "title": "Levantamento de site survey",
        "description": "Análise técnica dos sites candidatos",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Procurement"
      },
      {
        "title": "Instalação de RRH e antenas",
        "description": "Montagem de unidades remotas e radiantes",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Implementação"
      },
      {
        "title": "Negociação com proprietários",
        "description": "Contratos de aluguer/uso de espaço",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Comissionamento"
      },
      {
        "title": "Desenho de cobertura RF",
        "description": "Simulação de propagação e capacidade",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Comissionamento"
      },
      {
        "title": "Plano de monitorização 24/7",
        "description": "NOC e alarmística",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Realize site surveys conjuntos com fornecedores para reduzir retrabalho.",
      "Antecipe licenciamento regulatório — geralmente é o caminho crítico.",
      "Mantenha stock de spare parts críticos para reduzir MTTR.",
      "Documente KPI baseline antes do go-live para comparação objectiva.",
      "Integre SOC desde o desenho — segurança não é add-on."
    ],
    "kpis": [
      "Cobertura (km²)",
      "Sites no ar / planeados",
      "SLA 99.9%",
      "MTTR (h)",
      "CAPEX vs orçamento"
    ],
    "durationWeeks": 9,
    "teamSize": 13,
    "popularity": 93
  },
  {
    "id": "tpl-005",
    "name": "Modernização de Data Center",
    "industry": "Telecomunicações",
    "icon": "Radio",
    "description": "Atualização de equipamentos e cooling",
    "methodology": "PRINCE2",
    "phases": [
      "Estudo de viabilidade",
      "Engenharia",
      "Procurement",
      "Implementação",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Aceitação final do cliente",
        "description": "Sign-off técnico e contratual",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Importação de equipamentos",
        "description": "Logística internacional e desalfandegamento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Testes drive-test",
        "description": "Validação de cobertura em campo",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Desenho de cobertura RF",
        "description": "Simulação de propagação e capacidade",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Engenharia"
      },
      {
        "title": "Negociação com proprietários",
        "description": "Contratos de aluguer/uso de espaço",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Engenharia"
      },
      {
        "title": "Levantamento de site survey",
        "description": "Análise técnica dos sites candidatos",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Procurement"
      },
      {
        "title": "Optimização KPI de RF",
        "description": "Tuning de parâmetros e tilts",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Procurement"
      },
      {
        "title": "Obra civil de torre",
        "description": "Construção/reforço de infraestrutura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Licenciamento ANACOM/INACOM",
        "description": "Submissão regulatória e aprovações",
        "priority": "urgent",
        "estimatedDays": 15,
        "phase": "Implementação"
      },
      {
        "title": "Comissionamento e integração",
        "description": "Conexão ao core network",
        "priority": "urgent",
        "estimatedDays": 4,
        "phase": "Comissionamento"
      },
      {
        "title": "Plano de monitorização 24/7",
        "description": "NOC e alarmística",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Comissionamento"
      },
      {
        "title": "RFQ a fornecedores",
        "description": "Pedido de cotação para equipamentos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Operação"
      },
      {
        "title": "Instalação de RRH e antenas",
        "description": "Montagem de unidades remotas e radiantes",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Realize site surveys conjuntos com fornecedores para reduzir retrabalho.",
      "Antecipe licenciamento regulatório — geralmente é o caminho crítico.",
      "Mantenha stock de spare parts críticos para reduzir MTTR.",
      "Documente KPI baseline antes do go-live para comparação objectiva.",
      "Integre SOC desde o desenho — segurança não é add-on."
    ],
    "kpis": [
      "Cobertura (km²)",
      "Sites no ar / planeados",
      "SLA 99.9%",
      "MTTR (h)",
      "CAPEX vs orçamento"
    ],
    "durationWeeks": 15,
    "teamSize": 18,
    "popularity": 80
  },
  {
    "id": "tpl-006",
    "name": "Rollout de Torres Rurais",
    "industry": "Telecomunicações",
    "icon": "Radio",
    "description": "Cobertura de zonas rurais com microtorres",
    "methodology": "PRINCE2",
    "phases": [
      "Estudo de viabilidade",
      "Engenharia",
      "Procurement",
      "Implementação",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Licenciamento ANACOM/INACOM",
        "description": "Submissão regulatória e aprovações",
        "priority": "urgent",
        "estimatedDays": 15,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Importação de equipamentos",
        "description": "Logística internacional e desalfandegamento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Treino de equipas de O&M",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Engenharia"
      },
      {
        "title": "Desenho de cobertura RF",
        "description": "Simulação de propagação e capacidade",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Engenharia"
      },
      {
        "title": "RFQ a fornecedores",
        "description": "Pedido de cotação para equipamentos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Procurement"
      },
      {
        "title": "Negociação com proprietários",
        "description": "Contratos de aluguer/uso de espaço",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Procurement"
      },
      {
        "title": "Aceitação final do cliente",
        "description": "Sign-off técnico e contratual",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Implementação"
      },
      {
        "title": "Testes drive-test",
        "description": "Validação de cobertura em campo",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Implementação"
      },
      {
        "title": "Plano de monitorização 24/7",
        "description": "NOC e alarmística",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Comissionamento"
      },
      {
        "title": "Comissionamento e integração",
        "description": "Conexão ao core network",
        "priority": "urgent",
        "estimatedDays": 4,
        "phase": "Comissionamento"
      },
      {
        "title": "Obra civil de torre",
        "description": "Construção/reforço de infraestrutura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Realize site surveys conjuntos com fornecedores para reduzir retrabalho.",
      "Antecipe licenciamento regulatório — geralmente é o caminho crítico.",
      "Mantenha stock de spare parts críticos para reduzir MTTR.",
      "Documente KPI baseline antes do go-live para comparação objectiva.",
      "Integre SOC desde o desenho — segurança não é add-on."
    ],
    "kpis": [
      "Cobertura (km²)",
      "Sites no ar / planeados",
      "SLA 99.9%",
      "MTTR (h)",
      "CAPEX vs orçamento"
    ],
    "durationWeeks": 13,
    "teamSize": 16,
    "popularity": 57
  },
  {
    "id": "tpl-007",
    "name": "Plataforma de IoT/M2M",
    "industry": "Telecomunicações",
    "icon": "Radio",
    "description": "Conectividade massiva para sensores",
    "methodology": "Waterfall",
    "phases": [
      "Estudo de viabilidade",
      "Engenharia",
      "Procurement",
      "Implementação",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Desenho de cobertura RF",
        "description": "Simulação de propagação e capacidade",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Optimização KPI de RF",
        "description": "Tuning de parâmetros e tilts",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Importação de equipamentos",
        "description": "Logística internacional e desalfandegamento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Levantamento de site survey",
        "description": "Análise técnica dos sites candidatos",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Engenharia"
      },
      {
        "title": "Aceitação final do cliente",
        "description": "Sign-off técnico e contratual",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Engenharia"
      },
      {
        "title": "Treino de equipas de O&M",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Procurement"
      },
      {
        "title": "Plano de monitorização 24/7",
        "description": "NOC e alarmística",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Procurement"
      },
      {
        "title": "Testes drive-test",
        "description": "Validação de cobertura em campo",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Implementação"
      },
      {
        "title": "Licenciamento ANACOM/INACOM",
        "description": "Submissão regulatória e aprovações",
        "priority": "urgent",
        "estimatedDays": 15,
        "phase": "Implementação"
      },
      {
        "title": "Comissionamento e integração",
        "description": "Conexão ao core network",
        "priority": "urgent",
        "estimatedDays": 4,
        "phase": "Comissionamento"
      },
      {
        "title": "Negociação com proprietários",
        "description": "Contratos de aluguer/uso de espaço",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Comissionamento"
      },
      {
        "title": "Instalação de RRH e antenas",
        "description": "Montagem de unidades remotas e radiantes",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Operação"
      },
      {
        "title": "Obra civil de torre",
        "description": "Construção/reforço de infraestrutura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Realize site surveys conjuntos com fornecedores para reduzir retrabalho.",
      "Antecipe licenciamento regulatório — geralmente é o caminho crítico.",
      "Mantenha stock de spare parts críticos para reduzir MTTR.",
      "Documente KPI baseline antes do go-live para comparação objectiva.",
      "Integre SOC desde o desenho — segurança não é add-on."
    ],
    "kpis": [
      "Cobertura (km²)",
      "Sites no ar / planeados",
      "SLA 99.9%",
      "MTTR (h)",
      "CAPEX vs orçamento"
    ],
    "durationWeeks": 14,
    "teamSize": 24,
    "popularity": 71
  },
  {
    "id": "tpl-008",
    "name": "Programa NPS de Clientes",
    "industry": "Telecomunicações",
    "icon": "Radio",
    "description": "Melhoria de experiência e retenção",
    "methodology": "Waterfall",
    "phases": [
      "Estudo de viabilidade",
      "Engenharia",
      "Procurement",
      "Implementação",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Optimização KPI de RF",
        "description": "Tuning de parâmetros e tilts",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Instalação de RRH e antenas",
        "description": "Montagem de unidades remotas e radiantes",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Licenciamento ANACOM/INACOM",
        "description": "Submissão regulatória e aprovações",
        "priority": "urgent",
        "estimatedDays": 15,
        "phase": "Engenharia"
      },
      {
        "title": "RFQ a fornecedores",
        "description": "Pedido de cotação para equipamentos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Engenharia"
      },
      {
        "title": "Plano de monitorização 24/7",
        "description": "NOC e alarmística",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Procurement"
      },
      {
        "title": "Desenho de cobertura RF",
        "description": "Simulação de propagação e capacidade",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Procurement"
      },
      {
        "title": "Aceitação final do cliente",
        "description": "Sign-off técnico e contratual",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Implementação"
      },
      {
        "title": "Importação de equipamentos",
        "description": "Logística internacional e desalfandegamento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Treino de equipas de O&M",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Comissionamento"
      },
      {
        "title": "Comissionamento e integração",
        "description": "Conexão ao core network",
        "priority": "urgent",
        "estimatedDays": 4,
        "phase": "Comissionamento"
      },
      {
        "title": "Obra civil de torre",
        "description": "Construção/reforço de infraestrutura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Operação"
      },
      {
        "title": "Negociação com proprietários",
        "description": "Contratos de aluguer/uso de espaço",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Realize site surveys conjuntos com fornecedores para reduzir retrabalho.",
      "Antecipe licenciamento regulatório — geralmente é o caminho crítico.",
      "Mantenha stock de spare parts críticos para reduzir MTTR.",
      "Documente KPI baseline antes do go-live para comparação objectiva.",
      "Integre SOC desde o desenho — segurança não é add-on."
    ],
    "kpis": [
      "Cobertura (km²)",
      "Sites no ar / planeados",
      "SLA 99.9%",
      "MTTR (h)",
      "CAPEX vs orçamento"
    ],
    "durationWeeks": 14,
    "teamSize": 8,
    "popularity": 72
  },
  {
    "id": "tpl-009",
    "name": "Submarine Cable Landing",
    "industry": "Telecomunicações",
    "icon": "Radio",
    "description": "Conexão internacional via cabo submarino",
    "methodology": "PRINCE2",
    "phases": [
      "Estudo de viabilidade",
      "Engenharia",
      "Procurement",
      "Implementação",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Negociação com proprietários",
        "description": "Contratos de aluguer/uso de espaço",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Treino de equipas de O&M",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Levantamento de site survey",
        "description": "Análise técnica dos sites candidatos",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Engenharia"
      },
      {
        "title": "Aceitação final do cliente",
        "description": "Sign-off técnico e contratual",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Engenharia"
      },
      {
        "title": "Licenciamento ANACOM/INACOM",
        "description": "Submissão regulatória e aprovações",
        "priority": "urgent",
        "estimatedDays": 15,
        "phase": "Procurement"
      },
      {
        "title": "Testes drive-test",
        "description": "Validação de cobertura em campo",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Procurement"
      },
      {
        "title": "Obra civil de torre",
        "description": "Construção/reforço de infraestrutura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "RFQ a fornecedores",
        "description": "Pedido de cotação para equipamentos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Plano de monitorização 24/7",
        "description": "NOC e alarmística",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Comissionamento"
      },
      {
        "title": "Desenho de cobertura RF",
        "description": "Simulação de propagação e capacidade",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Comissionamento"
      },
      {
        "title": "Instalação de RRH e antenas",
        "description": "Montagem de unidades remotas e radiantes",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Operação"
      },
      {
        "title": "Comissionamento e integração",
        "description": "Conexão ao core network",
        "priority": "urgent",
        "estimatedDays": 4,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Realize site surveys conjuntos com fornecedores para reduzir retrabalho.",
      "Antecipe licenciamento regulatório — geralmente é o caminho crítico.",
      "Mantenha stock de spare parts críticos para reduzir MTTR.",
      "Documente KPI baseline antes do go-live para comparação objectiva.",
      "Integre SOC desde o desenho — segurança não é add-on."
    ],
    "kpis": [
      "Cobertura (km²)",
      "Sites no ar / planeados",
      "SLA 99.9%",
      "MTTR (h)",
      "CAPEX vs orçamento"
    ],
    "durationWeeks": 11,
    "teamSize": 20,
    "popularity": 56
  },
  {
    "id": "tpl-010",
    "name": "Núcleo VoLTE/VoNR",
    "industry": "Telecomunicações",
    "icon": "Radio",
    "description": "Implementação de voz sobre LTE/5G",
    "methodology": "Agile",
    "phases": [
      "Estudo de viabilidade",
      "Engenharia",
      "Procurement",
      "Implementação",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Aceitação final do cliente",
        "description": "Sign-off técnico e contratual",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Levantamento de site survey",
        "description": "Análise técnica dos sites candidatos",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Optimização KPI de RF",
        "description": "Tuning de parâmetros e tilts",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Negociação com proprietários",
        "description": "Contratos de aluguer/uso de espaço",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Engenharia"
      },
      {
        "title": "Comissionamento e integração",
        "description": "Conexão ao core network",
        "priority": "urgent",
        "estimatedDays": 4,
        "phase": "Engenharia"
      },
      {
        "title": "RFQ a fornecedores",
        "description": "Pedido de cotação para equipamentos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Procurement"
      },
      {
        "title": "Importação de equipamentos",
        "description": "Logística internacional e desalfandegamento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Procurement"
      },
      {
        "title": "Treino de equipas de O&M",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Implementação"
      },
      {
        "title": "Licenciamento ANACOM/INACOM",
        "description": "Submissão regulatória e aprovações",
        "priority": "urgent",
        "estimatedDays": 15,
        "phase": "Implementação"
      },
      {
        "title": "Desenho de cobertura RF",
        "description": "Simulação de propagação e capacidade",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Comissionamento"
      },
      {
        "title": "Plano de monitorização 24/7",
        "description": "NOC e alarmística",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Comissionamento"
      },
      {
        "title": "Testes drive-test",
        "description": "Validação de cobertura em campo",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Operação"
      },
      {
        "title": "Obra civil de torre",
        "description": "Construção/reforço de infraestrutura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Realize site surveys conjuntos com fornecedores para reduzir retrabalho.",
      "Antecipe licenciamento regulatório — geralmente é o caminho crítico.",
      "Mantenha stock de spare parts críticos para reduzir MTTR.",
      "Documente KPI baseline antes do go-live para comparação objectiva.",
      "Integre SOC desde o desenho — segurança não é add-on."
    ],
    "kpis": [
      "Cobertura (km²)",
      "Sites no ar / planeados",
      "SLA 99.9%",
      "MTTR (h)",
      "CAPEX vs orçamento"
    ],
    "durationWeeks": 15,
    "teamSize": 12,
    "popularity": 72
  },
  {
    "id": "tpl-011",
    "name": "Monitorização SLA Enterprise",
    "industry": "Telecomunicações",
    "icon": "Radio",
    "description": "Painel de SLAs para clientes corporativos",
    "methodology": "Agile",
    "phases": [
      "Estudo de viabilidade",
      "Engenharia",
      "Procurement",
      "Implementação",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Comissionamento e integração",
        "description": "Conexão ao core network",
        "priority": "urgent",
        "estimatedDays": 4,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Negociação com proprietários",
        "description": "Contratos de aluguer/uso de espaço",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Optimização KPI de RF",
        "description": "Tuning de parâmetros e tilts",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Engenharia"
      },
      {
        "title": "RFQ a fornecedores",
        "description": "Pedido de cotação para equipamentos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Engenharia"
      },
      {
        "title": "Aceitação final do cliente",
        "description": "Sign-off técnico e contratual",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Procurement"
      },
      {
        "title": "Desenho de cobertura RF",
        "description": "Simulação de propagação e capacidade",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Licenciamento ANACOM/INACOM",
        "description": "Submissão regulatória e aprovações",
        "priority": "urgent",
        "estimatedDays": 15,
        "phase": "Implementação"
      },
      {
        "title": "Instalação de RRH e antenas",
        "description": "Montagem de unidades remotas e radiantes",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Comissionamento"
      },
      {
        "title": "Treino de equipas de O&M",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Comissionamento"
      },
      {
        "title": "Plano de monitorização 24/7",
        "description": "NOC e alarmística",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Realize site surveys conjuntos com fornecedores para reduzir retrabalho.",
      "Antecipe licenciamento regulatório — geralmente é o caminho crítico.",
      "Mantenha stock de spare parts críticos para reduzir MTTR.",
      "Documente KPI baseline antes do go-live para comparação objectiva.",
      "Integre SOC desde o desenho — segurança não é add-on."
    ],
    "kpis": [
      "Cobertura (km²)",
      "Sites no ar / planeados",
      "SLA 99.9%",
      "MTTR (h)",
      "CAPEX vs orçamento"
    ],
    "durationWeeks": 9,
    "teamSize": 4,
    "popularity": 78
  },
  {
    "id": "tpl-012",
    "name": "Programa de Cibersegurança Telco",
    "industry": "Telecomunicações",
    "icon": "Radio",
    "description": "Hardening de rede e SOC",
    "methodology": "Agile",
    "phases": [
      "Estudo de viabilidade",
      "Engenharia",
      "Procurement",
      "Implementação",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Instalação de RRH e antenas",
        "description": "Montagem de unidades remotas e radiantes",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Levantamento de site survey",
        "description": "Análise técnica dos sites candidatos",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Negociação com proprietários",
        "description": "Contratos de aluguer/uso de espaço",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Engenharia"
      },
      {
        "title": "Importação de equipamentos",
        "description": "Logística internacional e desalfandegamento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Engenharia"
      },
      {
        "title": "RFQ a fornecedores",
        "description": "Pedido de cotação para equipamentos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Procurement"
      },
      {
        "title": "Desenho de cobertura RF",
        "description": "Simulação de propagação e capacidade",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Procurement"
      },
      {
        "title": "Treino de equipas de O&M",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Implementação"
      },
      {
        "title": "Plano de monitorização 24/7",
        "description": "NOC e alarmística",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Implementação"
      },
      {
        "title": "Testes drive-test",
        "description": "Validação de cobertura em campo",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Comissionamento"
      },
      {
        "title": "Aceitação final do cliente",
        "description": "Sign-off técnico e contratual",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Comissionamento"
      },
      {
        "title": "Optimização KPI de RF",
        "description": "Tuning de parâmetros e tilts",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Realize site surveys conjuntos com fornecedores para reduzir retrabalho.",
      "Antecipe licenciamento regulatório — geralmente é o caminho crítico.",
      "Mantenha stock de spare parts críticos para reduzir MTTR.",
      "Documente KPI baseline antes do go-live para comparação objectiva.",
      "Integre SOC desde o desenho — segurança não é add-on."
    ],
    "kpis": [
      "Cobertura (km²)",
      "Sites no ar / planeados",
      "SLA 99.9%",
      "MTTR (h)",
      "CAPEX vs orçamento"
    ],
    "durationWeeks": 11,
    "teamSize": 19,
    "popularity": 92
  },
  {
    "id": "tpl-013",
    "name": "Convergência Fixo-Móvel",
    "industry": "Telecomunicações",
    "icon": "Radio",
    "description": "Ofertas combinadas residenciais",
    "methodology": "Agile",
    "phases": [
      "Estudo de viabilidade",
      "Engenharia",
      "Procurement",
      "Implementação",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Treino de equipas de O&M",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Comissionamento e integração",
        "description": "Conexão ao core network",
        "priority": "urgent",
        "estimatedDays": 4,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Licenciamento ANACOM/INACOM",
        "description": "Submissão regulatória e aprovações",
        "priority": "urgent",
        "estimatedDays": 15,
        "phase": "Engenharia"
      },
      {
        "title": "Plano de monitorização 24/7",
        "description": "NOC e alarmística",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Procurement"
      },
      {
        "title": "Instalação de RRH e antenas",
        "description": "Montagem de unidades remotas e radiantes",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Procurement"
      },
      {
        "title": "Aceitação final do cliente",
        "description": "Sign-off técnico e contratual",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Implementação"
      },
      {
        "title": "Optimização KPI de RF",
        "description": "Tuning de parâmetros e tilts",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Comissionamento"
      },
      {
        "title": "Testes drive-test",
        "description": "Validação de cobertura em campo",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Comissionamento"
      },
      {
        "title": "RFQ a fornecedores",
        "description": "Pedido de cotação para equipamentos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Realize site surveys conjuntos com fornecedores para reduzir retrabalho.",
      "Antecipe licenciamento regulatório — geralmente é o caminho crítico.",
      "Mantenha stock de spare parts críticos para reduzir MTTR.",
      "Documente KPI baseline antes do go-live para comparação objectiva.",
      "Integre SOC desde o desenho — segurança não é add-on."
    ],
    "kpis": [
      "Cobertura (km²)",
      "Sites no ar / planeados",
      "SLA 99.9%",
      "MTTR (h)",
      "CAPEX vs orçamento"
    ],
    "durationWeeks": 7,
    "teamSize": 17,
    "popularity": 53
  },
  {
    "id": "tpl-014",
    "name": "Edifício Residencial Multi-andar",
    "industry": "Construção",
    "icon": "HardHat",
    "description": "Torre habitacional de 12+ pisos",
    "methodology": "PRINCE2",
    "phases": [
      "Anteprojeto",
      "Projeto executivo",
      "Procurement",
      "Fundações",
      "Estrutura",
      "Acabamentos",
      "Entrega"
    ],
    "tasks": [
      {
        "title": "Concurso de empreitada",
        "description": "Seleção do construtor principal",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Anteprojeto"
      },
      {
        "title": "Instalações elétricas",
        "description": "Cabeamento, quadros e iluminação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Anteprojeto"
      },
      {
        "title": "Licenciamento municipal",
        "description": "Aprovação de projeto e alvará",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Projeto executivo"
      },
      {
        "title": "Vistoria final e habite-se",
        "description": "Inspeção municipal de ocupação",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Projeto executivo"
      },
      {
        "title": "Alvenarias e vedações",
        "description": "Paredes internas e externas",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Procurement"
      },
      {
        "title": "Testes de comissionamento",
        "description": "Validação de sistemas prediais",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Procurement"
      },
      {
        "title": "Estudo de impacto ambiental",
        "description": "Documentação ambiental e mitigação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Fundações"
      },
      {
        "title": "Mobilização do estaleiro",
        "description": "Instalação de canteiro de obra",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Fundações"
      },
      {
        "title": "Escavações e fundações",
        "description": "Terraplanagem e sapatas/estacas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Estrutura"
      },
      {
        "title": "Estudo geotécnico",
        "description": "Sondagens e relatório de solo",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Estrutura"
      },
      {
        "title": "Projeto arquitetónico",
        "description": "Plantas, cortes e fachadas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Acabamentos"
      },
      {
        "title": "Estrutura de concreto armado",
        "description": "Pilares, vigas e lajes",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Acabamentos"
      },
      {
        "title": "Instalações hidráulicas",
        "description": "Tubulações de água e esgoto",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Entrega"
      }
    ],
    "bestPractices": [
      "Não comprima o projeto executivo — atrasos aqui custam 10x na obra.",
      "Mantenha registo fotográfico diário do canteiro para histórico legal.",
      "Compatibilize MEP em BIM antes de iniciar instalações.",
      "Negocie cláusulas claras de reajuste com fornecedores de aço/cimento.",
      "Faça reuniões semanais de obra com ata assinada por todos."
    ],
    "kpis": [
      "% Avanço físico",
      "% Avanço financeiro",
      "Acidentes (TRIR)",
      "Reclamações de fornecedor",
      "Desvio de prazo (dias)"
    ],
    "durationWeeks": 56,
    "teamSize": 4,
    "popularity": 77
  },
  {
    "id": "tpl-015",
    "name": "Centro Comercial",
    "industry": "Construção",
    "icon": "HardHat",
    "description": "Galeria comercial com âncoras e food court",
    "methodology": "PRINCE2",
    "phases": [
      "Anteprojeto",
      "Projeto executivo",
      "Procurement",
      "Fundações",
      "Estrutura",
      "Acabamentos",
      "Entrega"
    ],
    "tasks": [
      {
        "title": "Mobilização do estaleiro",
        "description": "Instalação de canteiro de obra",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Anteprojeto"
      },
      {
        "title": "Estrutura de concreto armado",
        "description": "Pilares, vigas e lajes",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Anteprojeto"
      },
      {
        "title": "Projeto MEP",
        "description": "Hidráulico, elétrico e mecânico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Projeto executivo"
      },
      {
        "title": "Estudo geotécnico",
        "description": "Sondagens e relatório de solo",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Projeto executivo"
      },
      {
        "title": "Projeto arquitetónico",
        "description": "Plantas, cortes e fachadas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Procurement"
      },
      {
        "title": "Alvenarias e vedações",
        "description": "Paredes internas e externas",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Procurement"
      },
      {
        "title": "Instalações hidráulicas",
        "description": "Tubulações de água e esgoto",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Fundações"
      },
      {
        "title": "Acabamentos e revestimentos",
        "description": "Pisos, pinturas e azulejos",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Fundações"
      },
      {
        "title": "Instalações elétricas",
        "description": "Cabeamento, quadros e iluminação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Estrutura"
      },
      {
        "title": "Testes de comissionamento",
        "description": "Validação de sistemas prediais",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Estrutura"
      },
      {
        "title": "Cálculo estrutural",
        "description": "Dimensionamento e memórias de cálculo",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Acabamentos"
      },
      {
        "title": "Concurso de empreitada",
        "description": "Seleção do construtor principal",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Acabamentos"
      },
      {
        "title": "Vistoria final e habite-se",
        "description": "Inspeção municipal de ocupação",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Entrega"
      }
    ],
    "bestPractices": [
      "Não comprima o projeto executivo — atrasos aqui custam 10x na obra.",
      "Mantenha registo fotográfico diário do canteiro para histórico legal.",
      "Compatibilize MEP em BIM antes de iniciar instalações.",
      "Negocie cláusulas claras de reajuste com fornecedores de aço/cimento.",
      "Faça reuniões semanais de obra com ata assinada por todos."
    ],
    "kpis": [
      "% Avanço físico",
      "% Avanço financeiro",
      "Acidentes (TRIR)",
      "Reclamações de fornecedor",
      "Desvio de prazo (dias)"
    ],
    "durationWeeks": 53,
    "teamSize": 25,
    "popularity": 71
  },
  {
    "id": "tpl-016",
    "name": "Hospital Público",
    "industry": "Construção",
    "icon": "HardHat",
    "description": "Unidade hospitalar de média complexidade",
    "methodology": "Waterfall",
    "phases": [
      "Anteprojeto",
      "Projeto executivo",
      "Procurement",
      "Fundações",
      "Estrutura",
      "Acabamentos",
      "Entrega"
    ],
    "tasks": [
      {
        "title": "Licenciamento municipal",
        "description": "Aprovação de projeto e alvará",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Anteprojeto"
      },
      {
        "title": "Instalações elétricas",
        "description": "Cabeamento, quadros e iluminação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Anteprojeto"
      },
      {
        "title": "Estrutura de concreto armado",
        "description": "Pilares, vigas e lajes",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Projeto executivo"
      },
      {
        "title": "Acabamentos e revestimentos",
        "description": "Pisos, pinturas e azulejos",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Procurement"
      },
      {
        "title": "Mobilização do estaleiro",
        "description": "Instalação de canteiro de obra",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Procurement"
      },
      {
        "title": "Projeto MEP",
        "description": "Hidráulico, elétrico e mecânico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Fundações"
      },
      {
        "title": "Testes de comissionamento",
        "description": "Validação de sistemas prediais",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Estrutura"
      },
      {
        "title": "Concurso de empreitada",
        "description": "Seleção do construtor principal",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Estrutura"
      },
      {
        "title": "Alvenarias e vedações",
        "description": "Paredes internas e externas",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Acabamentos"
      },
      {
        "title": "Estudo geotécnico",
        "description": "Sondagens e relatório de solo",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Entrega"
      }
    ],
    "bestPractices": [
      "Não comprima o projeto executivo — atrasos aqui custam 10x na obra.",
      "Mantenha registo fotográfico diário do canteiro para histórico legal.",
      "Compatibilize MEP em BIM antes de iniciar instalações.",
      "Negocie cláusulas claras de reajuste com fornecedores de aço/cimento.",
      "Faça reuniões semanais de obra com ata assinada por todos."
    ],
    "kpis": [
      "% Avanço físico",
      "% Avanço financeiro",
      "Acidentes (TRIR)",
      "Reclamações de fornecedor",
      "Desvio de prazo (dias)"
    ],
    "durationWeeks": 46,
    "teamSize": 25,
    "popularity": 67
  },
  {
    "id": "tpl-017",
    "name": "Escola Pública",
    "industry": "Construção",
    "icon": "HardHat",
    "description": "Complexo escolar com 24 salas",
    "methodology": "Waterfall",
    "phases": [
      "Anteprojeto",
      "Projeto executivo",
      "Procurement",
      "Fundações",
      "Estrutura",
      "Acabamentos",
      "Entrega"
    ],
    "tasks": [
      {
        "title": "Acabamentos e revestimentos",
        "description": "Pisos, pinturas e azulejos",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Anteprojeto"
      },
      {
        "title": "Concurso de empreitada",
        "description": "Seleção do construtor principal",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Anteprojeto"
      },
      {
        "title": "Mobilização do estaleiro",
        "description": "Instalação de canteiro de obra",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Projeto executivo"
      },
      {
        "title": "Instalações elétricas",
        "description": "Cabeamento, quadros e iluminação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Projeto executivo"
      },
      {
        "title": "Estudo geotécnico",
        "description": "Sondagens e relatório de solo",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Procurement"
      },
      {
        "title": "Alvenarias e vedações",
        "description": "Paredes internas e externas",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Fundações"
      },
      {
        "title": "Projeto arquitetónico",
        "description": "Plantas, cortes e fachadas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Fundações"
      },
      {
        "title": "Instalações hidráulicas",
        "description": "Tubulações de água e esgoto",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Estrutura"
      },
      {
        "title": "Testes de comissionamento",
        "description": "Validação de sistemas prediais",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Acabamentos"
      },
      {
        "title": "Estudo de impacto ambiental",
        "description": "Documentação ambiental e mitigação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Acabamentos"
      },
      {
        "title": "Cálculo estrutural",
        "description": "Dimensionamento e memórias de cálculo",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Entrega"
      }
    ],
    "bestPractices": [
      "Não comprima o projeto executivo — atrasos aqui custam 10x na obra.",
      "Mantenha registo fotográfico diário do canteiro para histórico legal.",
      "Compatibilize MEP em BIM antes de iniciar instalações.",
      "Negocie cláusulas claras de reajuste com fornecedores de aço/cimento.",
      "Faça reuniões semanais de obra com ata assinada por todos."
    ],
    "kpis": [
      "% Avanço físico",
      "% Avanço financeiro",
      "Acidentes (TRIR)",
      "Reclamações de fornecedor",
      "Desvio de prazo (dias)"
    ],
    "durationWeeks": 40,
    "teamSize": 11,
    "popularity": 52
  },
  {
    "id": "tpl-018",
    "name": "Estrada Asfaltada Inter-Provincial",
    "industry": "Construção",
    "icon": "HardHat",
    "description": "Pavimentação de 80km",
    "methodology": "Waterfall",
    "phases": [
      "Anteprojeto",
      "Projeto executivo",
      "Procurement",
      "Fundações",
      "Estrutura",
      "Acabamentos",
      "Entrega"
    ],
    "tasks": [
      {
        "title": "Testes de comissionamento",
        "description": "Validação de sistemas prediais",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Anteprojeto"
      },
      {
        "title": "Cálculo estrutural",
        "description": "Dimensionamento e memórias de cálculo",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Anteprojeto"
      },
      {
        "title": "Concurso de empreitada",
        "description": "Seleção do construtor principal",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Projeto executivo"
      },
      {
        "title": "Vistoria final e habite-se",
        "description": "Inspeção municipal de ocupação",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Procurement"
      },
      {
        "title": "Licenciamento municipal",
        "description": "Aprovação de projeto e alvará",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Procurement"
      },
      {
        "title": "Mobilização do estaleiro",
        "description": "Instalação de canteiro de obra",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Fundações"
      },
      {
        "title": "Projeto MEP",
        "description": "Hidráulico, elétrico e mecânico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Estrutura"
      },
      {
        "title": "Projeto arquitetónico",
        "description": "Plantas, cortes e fachadas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Estrutura"
      },
      {
        "title": "Alvenarias e vedações",
        "description": "Paredes internas e externas",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Acabamentos"
      },
      {
        "title": "Acabamentos e revestimentos",
        "description": "Pisos, pinturas e azulejos",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Entrega"
      }
    ],
    "bestPractices": [
      "Não comprima o projeto executivo — atrasos aqui custam 10x na obra.",
      "Mantenha registo fotográfico diário do canteiro para histórico legal.",
      "Compatibilize MEP em BIM antes de iniciar instalações.",
      "Negocie cláusulas claras de reajuste com fornecedores de aço/cimento.",
      "Faça reuniões semanais de obra com ata assinada por todos."
    ],
    "kpis": [
      "% Avanço físico",
      "% Avanço financeiro",
      "Acidentes (TRIR)",
      "Reclamações de fornecedor",
      "Desvio de prazo (dias)"
    ],
    "durationWeeks": 36,
    "teamSize": 5,
    "popularity": 81
  },
  {
    "id": "tpl-019",
    "name": "Ponte de Concreto Armado",
    "industry": "Construção",
    "icon": "HardHat",
    "description": "Travessia rodoviária de 250m",
    "methodology": "PRINCE2",
    "phases": [
      "Anteprojeto",
      "Projeto executivo",
      "Procurement",
      "Fundações",
      "Estrutura",
      "Acabamentos",
      "Entrega"
    ],
    "tasks": [
      {
        "title": "Estudo geotécnico",
        "description": "Sondagens e relatório de solo",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Anteprojeto"
      },
      {
        "title": "Projeto arquitetónico",
        "description": "Plantas, cortes e fachadas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Anteprojeto"
      },
      {
        "title": "Instalações hidráulicas",
        "description": "Tubulações de água e esgoto",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Projeto executivo"
      },
      {
        "title": "Projeto MEP",
        "description": "Hidráulico, elétrico e mecânico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Projeto executivo"
      },
      {
        "title": "Cálculo estrutural",
        "description": "Dimensionamento e memórias de cálculo",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Procurement"
      },
      {
        "title": "Concurso de empreitada",
        "description": "Seleção do construtor principal",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Procurement"
      },
      {
        "title": "Mobilização do estaleiro",
        "description": "Instalação de canteiro de obra",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Fundações"
      },
      {
        "title": "Estrutura de concreto armado",
        "description": "Pilares, vigas e lajes",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Fundações"
      },
      {
        "title": "Acabamentos e revestimentos",
        "description": "Pisos, pinturas e azulejos",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Estrutura"
      },
      {
        "title": "Alvenarias e vedações",
        "description": "Paredes internas e externas",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Estrutura"
      },
      {
        "title": "Escavações e fundações",
        "description": "Terraplanagem e sapatas/estacas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Acabamentos"
      },
      {
        "title": "Vistoria final e habite-se",
        "description": "Inspeção municipal de ocupação",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Acabamentos"
      },
      {
        "title": "Testes de comissionamento",
        "description": "Validação de sistemas prediais",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Entrega"
      }
    ],
    "bestPractices": [
      "Não comprima o projeto executivo — atrasos aqui custam 10x na obra.",
      "Mantenha registo fotográfico diário do canteiro para histórico legal.",
      "Compatibilize MEP em BIM antes de iniciar instalações.",
      "Negocie cláusulas claras de reajuste com fornecedores de aço/cimento.",
      "Faça reuniões semanais de obra com ata assinada por todos."
    ],
    "kpis": [
      "% Avanço físico",
      "% Avanço financeiro",
      "Acidentes (TRIR)",
      "Reclamações de fornecedor",
      "Desvio de prazo (dias)"
    ],
    "durationWeeks": 53,
    "teamSize": 4,
    "popularity": 64
  },
  {
    "id": "tpl-020",
    "name": "Parque Industrial",
    "industry": "Construção",
    "icon": "HardHat",
    "description": "Loteamento e infraestruturas industriais",
    "methodology": "Waterfall",
    "phases": [
      "Anteprojeto",
      "Projeto executivo",
      "Procurement",
      "Fundações",
      "Estrutura",
      "Acabamentos",
      "Entrega"
    ],
    "tasks": [
      {
        "title": "Testes de comissionamento",
        "description": "Validação de sistemas prediais",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Anteprojeto"
      },
      {
        "title": "Licenciamento municipal",
        "description": "Aprovação de projeto e alvará",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Anteprojeto"
      },
      {
        "title": "Concurso de empreitada",
        "description": "Seleção do construtor principal",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Projeto executivo"
      },
      {
        "title": "Instalações elétricas",
        "description": "Cabeamento, quadros e iluminação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Projeto executivo"
      },
      {
        "title": "Instalações hidráulicas",
        "description": "Tubulações de água e esgoto",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Procurement"
      },
      {
        "title": "Escavações e fundações",
        "description": "Terraplanagem e sapatas/estacas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Fundações"
      },
      {
        "title": "Mobilização do estaleiro",
        "description": "Instalação de canteiro de obra",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Fundações"
      },
      {
        "title": "Cálculo estrutural",
        "description": "Dimensionamento e memórias de cálculo",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Estrutura"
      },
      {
        "title": "Projeto MEP",
        "description": "Hidráulico, elétrico e mecânico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Acabamentos"
      },
      {
        "title": "Alvenarias e vedações",
        "description": "Paredes internas e externas",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Acabamentos"
      },
      {
        "title": "Projeto arquitetónico",
        "description": "Plantas, cortes e fachadas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Entrega"
      }
    ],
    "bestPractices": [
      "Não comprima o projeto executivo — atrasos aqui custam 10x na obra.",
      "Mantenha registo fotográfico diário do canteiro para histórico legal.",
      "Compatibilize MEP em BIM antes de iniciar instalações.",
      "Negocie cláusulas claras de reajuste com fornecedores de aço/cimento.",
      "Faça reuniões semanais de obra com ata assinada por todos."
    ],
    "kpis": [
      "% Avanço físico",
      "% Avanço financeiro",
      "Acidentes (TRIR)",
      "Reclamações de fornecedor",
      "Desvio de prazo (dias)"
    ],
    "durationWeeks": 41,
    "teamSize": 22,
    "popularity": 87
  },
  {
    "id": "tpl-021",
    "name": "Hotel 4 Estrelas",
    "industry": "Construção",
    "icon": "HardHat",
    "description": "Empreendimento hoteleiro com 120 quartos",
    "methodology": "Waterfall",
    "phases": [
      "Anteprojeto",
      "Projeto executivo",
      "Procurement",
      "Fundações",
      "Estrutura",
      "Acabamentos",
      "Entrega"
    ],
    "tasks": [
      {
        "title": "Projeto arquitetónico",
        "description": "Plantas, cortes e fachadas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Anteprojeto"
      },
      {
        "title": "Instalações elétricas",
        "description": "Cabeamento, quadros e iluminação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Anteprojeto"
      },
      {
        "title": "Estudo de impacto ambiental",
        "description": "Documentação ambiental e mitigação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Projeto executivo"
      },
      {
        "title": "Estudo geotécnico",
        "description": "Sondagens e relatório de solo",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Projeto executivo"
      },
      {
        "title": "Instalações hidráulicas",
        "description": "Tubulações de água e esgoto",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Procurement"
      },
      {
        "title": "Estrutura de concreto armado",
        "description": "Pilares, vigas e lajes",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Procurement"
      },
      {
        "title": "Mobilização do estaleiro",
        "description": "Instalação de canteiro de obra",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Fundações"
      },
      {
        "title": "Escavações e fundações",
        "description": "Terraplanagem e sapatas/estacas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Fundações"
      },
      {
        "title": "Cálculo estrutural",
        "description": "Dimensionamento e memórias de cálculo",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Estrutura"
      },
      {
        "title": "Testes de comissionamento",
        "description": "Validação de sistemas prediais",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Estrutura"
      },
      {
        "title": "Licenciamento municipal",
        "description": "Aprovação de projeto e alvará",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Acabamentos"
      },
      {
        "title": "Concurso de empreitada",
        "description": "Seleção do construtor principal",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Acabamentos"
      },
      {
        "title": "Vistoria final e habite-se",
        "description": "Inspeção municipal de ocupação",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Entrega"
      }
    ],
    "bestPractices": [
      "Não comprima o projeto executivo — atrasos aqui custam 10x na obra.",
      "Mantenha registo fotográfico diário do canteiro para histórico legal.",
      "Compatibilize MEP em BIM antes de iniciar instalações.",
      "Negocie cláusulas claras de reajuste com fornecedores de aço/cimento.",
      "Faça reuniões semanais de obra com ata assinada por todos."
    ],
    "kpis": [
      "% Avanço físico",
      "% Avanço financeiro",
      "Acidentes (TRIR)",
      "Reclamações de fornecedor",
      "Desvio de prazo (dias)"
    ],
    "durationWeeks": 52,
    "teamSize": 23,
    "popularity": 44
  },
  {
    "id": "tpl-022",
    "name": "Estádio Municipal",
    "industry": "Construção",
    "icon": "HardHat",
    "description": "Equipamento desportivo para 8.000 lugares",
    "methodology": "PRINCE2",
    "phases": [
      "Anteprojeto",
      "Projeto executivo",
      "Procurement",
      "Fundações",
      "Estrutura",
      "Acabamentos",
      "Entrega"
    ],
    "tasks": [
      {
        "title": "Instalações hidráulicas",
        "description": "Tubulações de água e esgoto",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Anteprojeto"
      },
      {
        "title": "Projeto arquitetónico",
        "description": "Plantas, cortes e fachadas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Anteprojeto"
      },
      {
        "title": "Estrutura de concreto armado",
        "description": "Pilares, vigas e lajes",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Projeto executivo"
      },
      {
        "title": "Projeto MEP",
        "description": "Hidráulico, elétrico e mecânico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Procurement"
      },
      {
        "title": "Acabamentos e revestimentos",
        "description": "Pisos, pinturas e azulejos",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Procurement"
      },
      {
        "title": "Instalações elétricas",
        "description": "Cabeamento, quadros e iluminação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Fundações"
      },
      {
        "title": "Estudo geotécnico",
        "description": "Sondagens e relatório de solo",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Estrutura"
      },
      {
        "title": "Testes de comissionamento",
        "description": "Validação de sistemas prediais",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Estrutura"
      },
      {
        "title": "Concurso de empreitada",
        "description": "Seleção do construtor principal",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Acabamentos"
      },
      {
        "title": "Estudo de impacto ambiental",
        "description": "Documentação ambiental e mitigação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Entrega"
      }
    ],
    "bestPractices": [
      "Não comprima o projeto executivo — atrasos aqui custam 10x na obra.",
      "Mantenha registo fotográfico diário do canteiro para histórico legal.",
      "Compatibilize MEP em BIM antes de iniciar instalações.",
      "Negocie cláusulas claras de reajuste com fornecedores de aço/cimento.",
      "Faça reuniões semanais de obra com ata assinada por todos."
    ],
    "kpis": [
      "% Avanço físico",
      "% Avanço financeiro",
      "Acidentes (TRIR)",
      "Reclamações de fornecedor",
      "Desvio de prazo (dias)"
    ],
    "durationWeeks": 45,
    "teamSize": 12,
    "popularity": 53
  },
  {
    "id": "tpl-023",
    "name": "Aeroporto Regional",
    "industry": "Construção",
    "icon": "HardHat",
    "description": "Terminal de passageiros e pista",
    "methodology": "Waterfall",
    "phases": [
      "Anteprojeto",
      "Projeto executivo",
      "Procurement",
      "Fundações",
      "Estrutura",
      "Acabamentos",
      "Entrega"
    ],
    "tasks": [
      {
        "title": "Mobilização do estaleiro",
        "description": "Instalação de canteiro de obra",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Anteprojeto"
      },
      {
        "title": "Licenciamento municipal",
        "description": "Aprovação de projeto e alvará",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Anteprojeto"
      },
      {
        "title": "Concurso de empreitada",
        "description": "Seleção do construtor principal",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Projeto executivo"
      },
      {
        "title": "Cálculo estrutural",
        "description": "Dimensionamento e memórias de cálculo",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Projeto executivo"
      },
      {
        "title": "Alvenarias e vedações",
        "description": "Paredes internas e externas",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Procurement"
      },
      {
        "title": "Instalações elétricas",
        "description": "Cabeamento, quadros e iluminação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Fundações"
      },
      {
        "title": "Testes de comissionamento",
        "description": "Validação de sistemas prediais",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Fundações"
      },
      {
        "title": "Vistoria final e habite-se",
        "description": "Inspeção municipal de ocupação",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Estrutura"
      },
      {
        "title": "Estudo de impacto ambiental",
        "description": "Documentação ambiental e mitigação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Acabamentos"
      },
      {
        "title": "Acabamentos e revestimentos",
        "description": "Pisos, pinturas e azulejos",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Acabamentos"
      },
      {
        "title": "Estudo geotécnico",
        "description": "Sondagens e relatório de solo",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Entrega"
      }
    ],
    "bestPractices": [
      "Não comprima o projeto executivo — atrasos aqui custam 10x na obra.",
      "Mantenha registo fotográfico diário do canteiro para histórico legal.",
      "Compatibilize MEP em BIM antes de iniciar instalações.",
      "Negocie cláusulas claras de reajuste com fornecedores de aço/cimento.",
      "Faça reuniões semanais de obra com ata assinada por todos."
    ],
    "kpis": [
      "% Avanço físico",
      "% Avanço financeiro",
      "Acidentes (TRIR)",
      "Reclamações de fornecedor",
      "Desvio de prazo (dias)"
    ],
    "durationWeeks": 39,
    "teamSize": 18,
    "popularity": 79
  },
  {
    "id": "tpl-024",
    "name": "Reabilitação Urbana",
    "industry": "Construção",
    "icon": "HardHat",
    "description": "Requalificação de centro histórico",
    "methodology": "PRINCE2",
    "phases": [
      "Anteprojeto",
      "Projeto executivo",
      "Procurement",
      "Fundações",
      "Estrutura",
      "Acabamentos",
      "Entrega"
    ],
    "tasks": [
      {
        "title": "Projeto MEP",
        "description": "Hidráulico, elétrico e mecânico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Anteprojeto"
      },
      {
        "title": "Projeto arquitetónico",
        "description": "Plantas, cortes e fachadas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Anteprojeto"
      },
      {
        "title": "Escavações e fundações",
        "description": "Terraplanagem e sapatas/estacas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Projeto executivo"
      },
      {
        "title": "Vistoria final e habite-se",
        "description": "Inspeção municipal de ocupação",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Projeto executivo"
      },
      {
        "title": "Acabamentos e revestimentos",
        "description": "Pisos, pinturas e azulejos",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Procurement"
      },
      {
        "title": "Licenciamento municipal",
        "description": "Aprovação de projeto e alvará",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Procurement"
      },
      {
        "title": "Cálculo estrutural",
        "description": "Dimensionamento e memórias de cálculo",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Fundações"
      },
      {
        "title": "Estudo de impacto ambiental",
        "description": "Documentação ambiental e mitigação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Fundações"
      },
      {
        "title": "Testes de comissionamento",
        "description": "Validação de sistemas prediais",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Estrutura"
      },
      {
        "title": "Mobilização do estaleiro",
        "description": "Instalação de canteiro de obra",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Estrutura"
      },
      {
        "title": "Estrutura de concreto armado",
        "description": "Pilares, vigas e lajes",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Acabamentos"
      },
      {
        "title": "Instalações elétricas",
        "description": "Cabeamento, quadros e iluminação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Acabamentos"
      },
      {
        "title": "Concurso de empreitada",
        "description": "Seleção do construtor principal",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Entrega"
      }
    ],
    "bestPractices": [
      "Não comprima o projeto executivo — atrasos aqui custam 10x na obra.",
      "Mantenha registo fotográfico diário do canteiro para histórico legal.",
      "Compatibilize MEP em BIM antes de iniciar instalações.",
      "Negocie cláusulas claras de reajuste com fornecedores de aço/cimento.",
      "Faça reuniões semanais de obra com ata assinada por todos."
    ],
    "kpis": [
      "% Avanço físico",
      "% Avanço financeiro",
      "Acidentes (TRIR)",
      "Reclamações de fornecedor",
      "Desvio de prazo (dias)"
    ],
    "durationWeeks": 55,
    "teamSize": 21,
    "popularity": 85
  },
  {
    "id": "tpl-025",
    "name": "Saneamento Básico",
    "industry": "Construção",
    "icon": "HardHat",
    "description": "Rede de esgotos e ETAR",
    "methodology": "Waterfall",
    "phases": [
      "Anteprojeto",
      "Projeto executivo",
      "Procurement",
      "Fundações",
      "Estrutura",
      "Acabamentos",
      "Entrega"
    ],
    "tasks": [
      {
        "title": "Estudo geotécnico",
        "description": "Sondagens e relatório de solo",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Anteprojeto"
      },
      {
        "title": "Alvenarias e vedações",
        "description": "Paredes internas e externas",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Anteprojeto"
      },
      {
        "title": "Acabamentos e revestimentos",
        "description": "Pisos, pinturas e azulejos",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Projeto executivo"
      },
      {
        "title": "Escavações e fundações",
        "description": "Terraplanagem e sapatas/estacas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Projeto executivo"
      },
      {
        "title": "Licenciamento municipal",
        "description": "Aprovação de projeto e alvará",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Procurement"
      },
      {
        "title": "Testes de comissionamento",
        "description": "Validação de sistemas prediais",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Fundações"
      },
      {
        "title": "Projeto arquitetónico",
        "description": "Plantas, cortes e fachadas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Fundações"
      },
      {
        "title": "Cálculo estrutural",
        "description": "Dimensionamento e memórias de cálculo",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Estrutura"
      },
      {
        "title": "Instalações elétricas",
        "description": "Cabeamento, quadros e iluminação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Acabamentos"
      },
      {
        "title": "Vistoria final e habite-se",
        "description": "Inspeção municipal de ocupação",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Acabamentos"
      },
      {
        "title": "Concurso de empreitada",
        "description": "Seleção do construtor principal",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Entrega"
      }
    ],
    "bestPractices": [
      "Não comprima o projeto executivo — atrasos aqui custam 10x na obra.",
      "Mantenha registo fotográfico diário do canteiro para histórico legal.",
      "Compatibilize MEP em BIM antes de iniciar instalações.",
      "Negocie cláusulas claras de reajuste com fornecedores de aço/cimento.",
      "Faça reuniões semanais de obra com ata assinada por todos."
    ],
    "kpis": [
      "% Avanço físico",
      "% Avanço financeiro",
      "Acidentes (TRIR)",
      "Reclamações de fornecedor",
      "Desvio de prazo (dias)"
    ],
    "durationWeeks": 43,
    "teamSize": 12,
    "popularity": 58
  },
  {
    "id": "tpl-026",
    "name": "Barragem Hidráulica",
    "industry": "Construção",
    "icon": "HardHat",
    "description": "Reservatório e tomada de água",
    "methodology": "PRINCE2",
    "phases": [
      "Anteprojeto",
      "Projeto executivo",
      "Procurement",
      "Fundações",
      "Estrutura",
      "Acabamentos",
      "Entrega"
    ],
    "tasks": [
      {
        "title": "Concurso de empreitada",
        "description": "Seleção do construtor principal",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Anteprojeto"
      },
      {
        "title": "Instalações elétricas",
        "description": "Cabeamento, quadros e iluminação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Anteprojeto"
      },
      {
        "title": "Estudo de impacto ambiental",
        "description": "Documentação ambiental e mitigação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Projeto executivo"
      },
      {
        "title": "Projeto MEP",
        "description": "Hidráulico, elétrico e mecânico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Projeto executivo"
      },
      {
        "title": "Alvenarias e vedações",
        "description": "Paredes internas e externas",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Procurement"
      },
      {
        "title": "Testes de comissionamento",
        "description": "Validação de sistemas prediais",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Procurement"
      },
      {
        "title": "Licenciamento municipal",
        "description": "Aprovação de projeto e alvará",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Fundações"
      },
      {
        "title": "Escavações e fundações",
        "description": "Terraplanagem e sapatas/estacas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Fundações"
      },
      {
        "title": "Mobilização do estaleiro",
        "description": "Instalação de canteiro de obra",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Estrutura"
      },
      {
        "title": "Cálculo estrutural",
        "description": "Dimensionamento e memórias de cálculo",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Estrutura"
      },
      {
        "title": "Estudo geotécnico",
        "description": "Sondagens e relatório de solo",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Acabamentos"
      },
      {
        "title": "Acabamentos e revestimentos",
        "description": "Pisos, pinturas e azulejos",
        "priority": "normal",
        "estimatedDays": 45,
        "phase": "Acabamentos"
      },
      {
        "title": "Instalações hidráulicas",
        "description": "Tubulações de água e esgoto",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Entrega"
      }
    ],
    "bestPractices": [
      "Não comprima o projeto executivo — atrasos aqui custam 10x na obra.",
      "Mantenha registo fotográfico diário do canteiro para histórico legal.",
      "Compatibilize MEP em BIM antes de iniciar instalações.",
      "Negocie cláusulas claras de reajuste com fornecedores de aço/cimento.",
      "Faça reuniões semanais de obra com ata assinada por todos."
    ],
    "kpis": [
      "% Avanço físico",
      "% Avanço financeiro",
      "Acidentes (TRIR)",
      "Reclamações de fornecedor",
      "Desvio de prazo (dias)"
    ],
    "durationWeeks": 49,
    "teamSize": 5,
    "popularity": 40
  },
  {
    "id": "tpl-027",
    "name": "Perfuração de Poço Onshore",
    "industry": "Óleo & Gás",
    "icon": "Flame",
    "description": "Campanha de perfuração terrestre",
    "methodology": "Waterfall",
    "phases": [
      "Concept",
      "FEED",
      "EPC",
      "Comissionamento",
      "Start-up",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Programa de manutenção preventiva",
        "description": "Plano de M&M",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Concept"
      },
      {
        "title": "FEED engineering",
        "description": "Front-end engineering design",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Concept"
      },
      {
        "title": "Pre-startup safety review",
        "description": "PSSR antes do start-up",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "FEED"
      },
      {
        "title": "Aprovação regulatória ANPG",
        "description": "Submissões à agência reguladora",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "FEED"
      },
      {
        "title": "Auditoria HSE",
        "description": "Inspeção independente",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "EPC"
      },
      {
        "title": "Construção de módulos",
        "description": "Fabricação em estaleiro",
        "priority": "high",
        "estimatedDays": 120,
        "phase": "EPC"
      },
      {
        "title": "Long-lead items",
        "description": "Equipamentos de longo prazo de entrega",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Comissionamento"
      },
      {
        "title": "First oil/gas",
        "description": "Marco de produção inicial",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Comissionamento"
      },
      {
        "title": "Estudo de viabilidade",
        "description": "Análise técnica e económica",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Start-up"
      },
      {
        "title": "Contrato EPC",
        "description": "Engineering, procurement, construction",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Start-up"
      },
      {
        "title": "Transporte e içamento",
        "description": "Logística pesada offshore",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Trate HSE como prioridade #1 — zero compromissos.",
      "Long-lead items determinam o cronograma; encomende cedo.",
      "Faça FEED robusto: alterações em EPC custam 5-10x mais.",
      "Mantenha contingency mínima de 15% para projetos offshore.",
      "Documente lessons learned após cada marco crítico."
    ],
    "kpis": [
      "TRIR (recordable rate)",
      "% Avanço EPC",
      "First oil date",
      "CAPEX vs FID",
      "Disponibilidade da unidade %"
    ],
    "durationWeeks": 80,
    "teamSize": 21,
    "popularity": 42
  },
  {
    "id": "tpl-028",
    "name": "Plataforma Offshore",
    "industry": "Óleo & Gás",
    "icon": "Flame",
    "description": "Instalação de plataforma fixa",
    "methodology": "Waterfall",
    "phases": [
      "Concept",
      "FEED",
      "EPC",
      "Comissionamento",
      "Start-up",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Hook-up e comissionamento",
        "description": "Conexões e testes finais",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Concept"
      },
      {
        "title": "Transporte e içamento",
        "description": "Logística pesada offshore",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Concept"
      },
      {
        "title": "FEED engineering",
        "description": "Front-end engineering design",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "FEED"
      },
      {
        "title": "Long-lead items",
        "description": "Equipamentos de longo prazo de entrega",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "FEED"
      },
      {
        "title": "First oil/gas",
        "description": "Marco de produção inicial",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "EPC"
      },
      {
        "title": "Estudo de viabilidade",
        "description": "Análise técnica e económica",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "EPC"
      },
      {
        "title": "Aprovação regulatória ANPG",
        "description": "Submissões à agência reguladora",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Comissionamento"
      },
      {
        "title": "Auditoria HSE",
        "description": "Inspeção independente",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Comissionamento"
      },
      {
        "title": "Programa de manutenção preventiva",
        "description": "Plano de M&M",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Start-up"
      },
      {
        "title": "Pre-startup safety review",
        "description": "PSSR antes do start-up",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Start-up"
      },
      {
        "title": "Estudo geológico/geofísico",
        "description": "Caracterização do reservatório",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Trate HSE como prioridade #1 — zero compromissos.",
      "Long-lead items determinam o cronograma; encomende cedo.",
      "Faça FEED robusto: alterações em EPC custam 5-10x mais.",
      "Mantenha contingency mínima de 15% para projetos offshore.",
      "Documente lessons learned após cada marco crítico."
    ],
    "kpis": [
      "TRIR (recordable rate)",
      "% Avanço EPC",
      "First oil date",
      "CAPEX vs FID",
      "Disponibilidade da unidade %"
    ],
    "durationWeeks": 71,
    "teamSize": 25,
    "popularity": 46
  },
  {
    "id": "tpl-029",
    "name": "Pipeline de Crude",
    "industry": "Óleo & Gás",
    "icon": "Flame",
    "description": "Construção de oleoduto de 120km",
    "methodology": "Waterfall",
    "phases": [
      "Concept",
      "FEED",
      "EPC",
      "Comissionamento",
      "Start-up",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Programa de manutenção preventiva",
        "description": "Plano de M&M",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Concept"
      },
      {
        "title": "Transporte e içamento",
        "description": "Logística pesada offshore",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Concept"
      },
      {
        "title": "Long-lead items",
        "description": "Equipamentos de longo prazo de entrega",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "FEED"
      },
      {
        "title": "Hook-up e comissionamento",
        "description": "Conexões e testes finais",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "FEED"
      },
      {
        "title": "FEED engineering",
        "description": "Front-end engineering design",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "EPC"
      },
      {
        "title": "Avaliação de impacto ambiental",
        "description": "EIA e plano de gestão",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "EPC"
      },
      {
        "title": "Pre-startup safety review",
        "description": "PSSR antes do start-up",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Comissionamento"
      },
      {
        "title": "First oil/gas",
        "description": "Marco de produção inicial",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Comissionamento"
      },
      {
        "title": "Estudo geológico/geofísico",
        "description": "Caracterização do reservatório",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Start-up"
      },
      {
        "title": "Auditoria HSE",
        "description": "Inspeção independente",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Start-up"
      },
      {
        "title": "Estudo de viabilidade",
        "description": "Análise técnica e económica",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Trate HSE como prioridade #1 — zero compromissos.",
      "Long-lead items determinam o cronograma; encomende cedo.",
      "Faça FEED robusto: alterações em EPC custam 5-10x mais.",
      "Mantenha contingency mínima de 15% para projetos offshore.",
      "Documente lessons learned após cada marco crítico."
    ],
    "kpis": [
      "TRIR (recordable rate)",
      "% Avanço EPC",
      "First oil date",
      "CAPEX vs FID",
      "Disponibilidade da unidade %"
    ],
    "durationWeeks": 74,
    "teamSize": 14,
    "popularity": 90
  },
  {
    "id": "tpl-030",
    "name": "Refinaria de Hidrocrackeamento",
    "industry": "Óleo & Gás",
    "icon": "Flame",
    "description": "Unidade de processamento secundária",
    "methodology": "PRINCE2",
    "phases": [
      "Concept",
      "FEED",
      "EPC",
      "Comissionamento",
      "Start-up",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Programa de manutenção preventiva",
        "description": "Plano de M&M",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Concept"
      },
      {
        "title": "Pre-startup safety review",
        "description": "PSSR antes do start-up",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Concept"
      },
      {
        "title": "First oil/gas",
        "description": "Marco de produção inicial",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "FEED"
      },
      {
        "title": "Avaliação de impacto ambiental",
        "description": "EIA e plano de gestão",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "FEED"
      },
      {
        "title": "Aprovação regulatória ANPG",
        "description": "Submissões à agência reguladora",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "EPC"
      },
      {
        "title": "FEED engineering",
        "description": "Front-end engineering design",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "EPC"
      },
      {
        "title": "Estudo geológico/geofísico",
        "description": "Caracterização do reservatório",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Comissionamento"
      },
      {
        "title": "Auditoria HSE",
        "description": "Inspeção independente",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Comissionamento"
      },
      {
        "title": "Estudo de viabilidade",
        "description": "Análise técnica e económica",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Start-up"
      },
      {
        "title": "Long-lead items",
        "description": "Equipamentos de longo prazo de entrega",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Start-up"
      },
      {
        "title": "Construção de módulos",
        "description": "Fabricação em estaleiro",
        "priority": "high",
        "estimatedDays": 120,
        "phase": "Operação"
      },
      {
        "title": "Contrato EPC",
        "description": "Engineering, procurement, construction",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Trate HSE como prioridade #1 — zero compromissos.",
      "Long-lead items determinam o cronograma; encomende cedo.",
      "Faça FEED robusto: alterações em EPC custam 5-10x mais.",
      "Mantenha contingency mínima de 15% para projetos offshore.",
      "Documente lessons learned após cada marco crítico."
    ],
    "kpis": [
      "TRIR (recordable rate)",
      "% Avanço EPC",
      "First oil date",
      "CAPEX vs FID",
      "Disponibilidade da unidade %"
    ],
    "durationWeeks": 91,
    "teamSize": 15,
    "popularity": 59
  },
  {
    "id": "tpl-031",
    "name": "Terminal de GNL",
    "industry": "Óleo & Gás",
    "icon": "Flame",
    "description": "Liquefação e exportação de gás natural",
    "methodology": "PRINCE2",
    "phases": [
      "Concept",
      "FEED",
      "EPC",
      "Comissionamento",
      "Start-up",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Avaliação de impacto ambiental",
        "description": "EIA e plano de gestão",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Concept"
      },
      {
        "title": "Estudo de viabilidade",
        "description": "Análise técnica e económica",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Concept"
      },
      {
        "title": "Pre-startup safety review",
        "description": "PSSR antes do start-up",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "FEED"
      },
      {
        "title": "Auditoria HSE",
        "description": "Inspeção independente",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "FEED"
      },
      {
        "title": "Long-lead items",
        "description": "Equipamentos de longo prazo de entrega",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "EPC"
      },
      {
        "title": "Contrato EPC",
        "description": "Engineering, procurement, construction",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Comissionamento"
      },
      {
        "title": "Aprovação regulatória ANPG",
        "description": "Submissões à agência reguladora",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Comissionamento"
      },
      {
        "title": "Hook-up e comissionamento",
        "description": "Conexões e testes finais",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Start-up"
      },
      {
        "title": "Programa de manutenção preventiva",
        "description": "Plano de M&M",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Start-up"
      },
      {
        "title": "FEED engineering",
        "description": "Front-end engineering design",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Trate HSE como prioridade #1 — zero compromissos.",
      "Long-lead items determinam o cronograma; encomende cedo.",
      "Faça FEED robusto: alterações em EPC custam 5-10x mais.",
      "Mantenha contingency mínima de 15% para projetos offshore.",
      "Documente lessons learned após cada marco crítico."
    ],
    "kpis": [
      "TRIR (recordable rate)",
      "% Avanço EPC",
      "First oil date",
      "CAPEX vs FID",
      "Disponibilidade da unidade %"
    ],
    "durationWeeks": 73,
    "teamSize": 24,
    "popularity": 72
  },
  {
    "id": "tpl-032",
    "name": "Sísmica 3D",
    "industry": "Óleo & Gás",
    "icon": "Flame",
    "description": "Aquisição de dados sísmicos para exploração",
    "methodology": "PRINCE2",
    "phases": [
      "Concept",
      "FEED",
      "EPC",
      "Comissionamento",
      "Start-up",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Pre-startup safety review",
        "description": "PSSR antes do start-up",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Concept"
      },
      {
        "title": "Transporte e içamento",
        "description": "Logística pesada offshore",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Concept"
      },
      {
        "title": "Contrato EPC",
        "description": "Engineering, procurement, construction",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "FEED"
      },
      {
        "title": "Estudo de viabilidade",
        "description": "Análise técnica e económica",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "FEED"
      },
      {
        "title": "Estudo geológico/geofísico",
        "description": "Caracterização do reservatório",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "EPC"
      },
      {
        "title": "Aprovação regulatória ANPG",
        "description": "Submissões à agência reguladora",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "EPC"
      },
      {
        "title": "FEED engineering",
        "description": "Front-end engineering design",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Comissionamento"
      },
      {
        "title": "Programa de manutenção preventiva",
        "description": "Plano de M&M",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Comissionamento"
      },
      {
        "title": "Construção de módulos",
        "description": "Fabricação em estaleiro",
        "priority": "high",
        "estimatedDays": 120,
        "phase": "Start-up"
      },
      {
        "title": "Auditoria HSE",
        "description": "Inspeção independente",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Start-up"
      },
      {
        "title": "Long-lead items",
        "description": "Equipamentos de longo prazo de entrega",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Operação"
      },
      {
        "title": "First oil/gas",
        "description": "Marco de produção inicial",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Trate HSE como prioridade #1 — zero compromissos.",
      "Long-lead items determinam o cronograma; encomende cedo.",
      "Faça FEED robusto: alterações em EPC custam 5-10x mais.",
      "Mantenha contingency mínima de 15% para projetos offshore.",
      "Documente lessons learned após cada marco crítico."
    ],
    "kpis": [
      "TRIR (recordable rate)",
      "% Avanço EPC",
      "First oil date",
      "CAPEX vs FID",
      "Disponibilidade da unidade %"
    ],
    "durationWeeks": 86,
    "teamSize": 15,
    "popularity": 86
  },
  {
    "id": "tpl-033",
    "name": "Decommissioning de Plataforma",
    "industry": "Óleo & Gás",
    "icon": "Flame",
    "description": "Desativação e remoção de estrutura",
    "methodology": "Waterfall",
    "phases": [
      "Concept",
      "FEED",
      "EPC",
      "Comissionamento",
      "Start-up",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Long-lead items",
        "description": "Equipamentos de longo prazo de entrega",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Concept"
      },
      {
        "title": "Hook-up e comissionamento",
        "description": "Conexões e testes finais",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Concept"
      },
      {
        "title": "Transporte e içamento",
        "description": "Logística pesada offshore",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "FEED"
      },
      {
        "title": "Estudo geológico/geofísico",
        "description": "Caracterização do reservatório",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "FEED"
      },
      {
        "title": "Auditoria HSE",
        "description": "Inspeção independente",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "EPC"
      },
      {
        "title": "Avaliação de impacto ambiental",
        "description": "EIA e plano de gestão",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "EPC"
      },
      {
        "title": "Aprovação regulatória ANPG",
        "description": "Submissões à agência reguladora",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Comissionamento"
      },
      {
        "title": "Estudo de viabilidade",
        "description": "Análise técnica e económica",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Comissionamento"
      },
      {
        "title": "Contrato EPC",
        "description": "Engineering, procurement, construction",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Start-up"
      },
      {
        "title": "First oil/gas",
        "description": "Marco de produção inicial",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Start-up"
      },
      {
        "title": "Programa de manutenção preventiva",
        "description": "Plano de M&M",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Trate HSE como prioridade #1 — zero compromissos.",
      "Long-lead items determinam o cronograma; encomende cedo.",
      "Faça FEED robusto: alterações em EPC custam 5-10x mais.",
      "Mantenha contingency mínima de 15% para projetos offshore.",
      "Documente lessons learned após cada marco crítico."
    ],
    "kpis": [
      "TRIR (recordable rate)",
      "% Avanço EPC",
      "First oil date",
      "CAPEX vs FID",
      "Disponibilidade da unidade %"
    ],
    "durationWeeks": 70,
    "teamSize": 15,
    "popularity": 67
  },
  {
    "id": "tpl-034",
    "name": "FPSO Charter",
    "industry": "Óleo & Gás",
    "icon": "Flame",
    "description": "Contratação e operação de FPSO",
    "methodology": "PRINCE2",
    "phases": [
      "Concept",
      "FEED",
      "EPC",
      "Comissionamento",
      "Start-up",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Pre-startup safety review",
        "description": "PSSR antes do start-up",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Concept"
      },
      {
        "title": "Contrato EPC",
        "description": "Engineering, procurement, construction",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Concept"
      },
      {
        "title": "Hook-up e comissionamento",
        "description": "Conexões e testes finais",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "FEED"
      },
      {
        "title": "Programa de manutenção preventiva",
        "description": "Plano de M&M",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "EPC"
      },
      {
        "title": "Estudo geológico/geofísico",
        "description": "Caracterização do reservatório",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "EPC"
      },
      {
        "title": "Aprovação regulatória ANPG",
        "description": "Submissões à agência reguladora",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Comissionamento"
      },
      {
        "title": "Transporte e içamento",
        "description": "Logística pesada offshore",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Start-up"
      },
      {
        "title": "Auditoria HSE",
        "description": "Inspeção independente",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Start-up"
      },
      {
        "title": "Avaliação de impacto ambiental",
        "description": "EIA e plano de gestão",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Trate HSE como prioridade #1 — zero compromissos.",
      "Long-lead items determinam o cronograma; encomende cedo.",
      "Faça FEED robusto: alterações em EPC custam 5-10x mais.",
      "Mantenha contingency mínima de 15% para projetos offshore.",
      "Documente lessons learned após cada marco crítico."
    ],
    "kpis": [
      "TRIR (recordable rate)",
      "% Avanço EPC",
      "First oil date",
      "CAPEX vs FID",
      "Disponibilidade da unidade %"
    ],
    "durationWeeks": 40,
    "teamSize": 16,
    "popularity": 84
  },
  {
    "id": "tpl-035",
    "name": "Estação de Compressão",
    "industry": "Óleo & Gás",
    "icon": "Flame",
    "description": "Compressão de gás para transporte",
    "methodology": "PRINCE2",
    "phases": [
      "Concept",
      "FEED",
      "EPC",
      "Comissionamento",
      "Start-up",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Transporte e içamento",
        "description": "Logística pesada offshore",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Concept"
      },
      {
        "title": "FEED engineering",
        "description": "Front-end engineering design",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Concept"
      },
      {
        "title": "Avaliação de impacto ambiental",
        "description": "EIA e plano de gestão",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "FEED"
      },
      {
        "title": "Long-lead items",
        "description": "Equipamentos de longo prazo de entrega",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "FEED"
      },
      {
        "title": "Pre-startup safety review",
        "description": "PSSR antes do start-up",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "EPC"
      },
      {
        "title": "Programa de manutenção preventiva",
        "description": "Plano de M&M",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "EPC"
      },
      {
        "title": "Aprovação regulatória ANPG",
        "description": "Submissões à agência reguladora",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Comissionamento"
      },
      {
        "title": "First oil/gas",
        "description": "Marco de produção inicial",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Comissionamento"
      },
      {
        "title": "Construção de módulos",
        "description": "Fabricação em estaleiro",
        "priority": "high",
        "estimatedDays": 120,
        "phase": "Start-up"
      },
      {
        "title": "Estudo de viabilidade",
        "description": "Análise técnica e económica",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Start-up"
      },
      {
        "title": "Auditoria HSE",
        "description": "Inspeção independente",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Trate HSE como prioridade #1 — zero compromissos.",
      "Long-lead items determinam o cronograma; encomende cedo.",
      "Faça FEED robusto: alterações em EPC custam 5-10x mais.",
      "Mantenha contingency mínima de 15% para projetos offshore.",
      "Documente lessons learned após cada marco crítico."
    ],
    "kpis": [
      "TRIR (recordable rate)",
      "% Avanço EPC",
      "First oil date",
      "CAPEX vs FID",
      "Disponibilidade da unidade %"
    ],
    "durationWeeks": 84,
    "teamSize": 10,
    "popularity": 67
  },
  {
    "id": "tpl-036",
    "name": "Programa HSE Corporativo",
    "industry": "Óleo & Gás",
    "icon": "Flame",
    "description": "Saúde, segurança e meio ambiente",
    "methodology": "Waterfall",
    "phases": [
      "Concept",
      "FEED",
      "EPC",
      "Comissionamento",
      "Start-up",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Hook-up e comissionamento",
        "description": "Conexões e testes finais",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Concept"
      },
      {
        "title": "Pre-startup safety review",
        "description": "PSSR antes do start-up",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Concept"
      },
      {
        "title": "Contrato EPC",
        "description": "Engineering, procurement, construction",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Concept"
      },
      {
        "title": "Construção de módulos",
        "description": "Fabricação em estaleiro",
        "priority": "high",
        "estimatedDays": 120,
        "phase": "FEED"
      },
      {
        "title": "Programa de manutenção preventiva",
        "description": "Plano de M&M",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "FEED"
      },
      {
        "title": "Auditoria HSE",
        "description": "Inspeção independente",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "EPC"
      },
      {
        "title": "Avaliação de impacto ambiental",
        "description": "EIA e plano de gestão",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "EPC"
      },
      {
        "title": "Aprovação regulatória ANPG",
        "description": "Submissões à agência reguladora",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Comissionamento"
      },
      {
        "title": "Transporte e içamento",
        "description": "Logística pesada offshore",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Comissionamento"
      },
      {
        "title": "Estudo geológico/geofísico",
        "description": "Caracterização do reservatório",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Start-up"
      },
      {
        "title": "Estudo de viabilidade",
        "description": "Análise técnica e económica",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Start-up"
      },
      {
        "title": "Long-lead items",
        "description": "Equipamentos de longo prazo de entrega",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Operação"
      },
      {
        "title": "FEED engineering",
        "description": "Front-end engineering design",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Trate HSE como prioridade #1 — zero compromissos.",
      "Long-lead items determinam o cronograma; encomende cedo.",
      "Faça FEED robusto: alterações em EPC custam 5-10x mais.",
      "Mantenha contingency mínima de 15% para projetos offshore.",
      "Documente lessons learned após cada marco crítico."
    ],
    "kpis": [
      "TRIR (recordable rate)",
      "% Avanço EPC",
      "First oil date",
      "CAPEX vs FID",
      "Disponibilidade da unidade %"
    ],
    "durationWeeks": 100,
    "teamSize": 11,
    "popularity": 83
  },
  {
    "id": "tpl-037",
    "name": "Reabilitação de Poço",
    "industry": "Óleo & Gás",
    "icon": "Flame",
    "description": "Workover e estimulação",
    "methodology": "PRINCE2",
    "phases": [
      "Concept",
      "FEED",
      "EPC",
      "Comissionamento",
      "Start-up",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Avaliação de impacto ambiental",
        "description": "EIA e plano de gestão",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Concept"
      },
      {
        "title": "Programa de manutenção preventiva",
        "description": "Plano de M&M",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Concept"
      },
      {
        "title": "Auditoria HSE",
        "description": "Inspeção independente",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "FEED"
      },
      {
        "title": "FEED engineering",
        "description": "Front-end engineering design",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "FEED"
      },
      {
        "title": "Estudo de viabilidade",
        "description": "Análise técnica e económica",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "EPC"
      },
      {
        "title": "Hook-up e comissionamento",
        "description": "Conexões e testes finais",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "EPC"
      },
      {
        "title": "First oil/gas",
        "description": "Marco de produção inicial",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Comissionamento"
      },
      {
        "title": "Construção de módulos",
        "description": "Fabricação em estaleiro",
        "priority": "high",
        "estimatedDays": 120,
        "phase": "Comissionamento"
      },
      {
        "title": "Aprovação regulatória ANPG",
        "description": "Submissões à agência reguladora",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Start-up"
      },
      {
        "title": "Transporte e içamento",
        "description": "Logística pesada offshore",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Start-up"
      },
      {
        "title": "Long-lead items",
        "description": "Equipamentos de longo prazo de entrega",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Trate HSE como prioridade #1 — zero compromissos.",
      "Long-lead items determinam o cronograma; encomende cedo.",
      "Faça FEED robusto: alterações em EPC custam 5-10x mais.",
      "Mantenha contingency mínima de 15% para projetos offshore.",
      "Documente lessons learned após cada marco crítico."
    ],
    "kpis": [
      "TRIR (recordable rate)",
      "% Avanço EPC",
      "First oil date",
      "CAPEX vs FID",
      "Disponibilidade da unidade %"
    ],
    "durationWeeks": 89,
    "teamSize": 24,
    "popularity": 76
  },
  {
    "id": "tpl-038",
    "name": "Plataforma EOR",
    "industry": "Óleo & Gás",
    "icon": "Flame",
    "description": "Recuperação avançada de petróleo",
    "methodology": "Waterfall",
    "phases": [
      "Concept",
      "FEED",
      "EPC",
      "Comissionamento",
      "Start-up",
      "Operação"
    ],
    "tasks": [
      {
        "title": "First oil/gas",
        "description": "Marco de produção inicial",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Concept"
      },
      {
        "title": "Auditoria HSE",
        "description": "Inspeção independente",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Concept"
      },
      {
        "title": "Long-lead items",
        "description": "Equipamentos de longo prazo de entrega",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "FEED"
      },
      {
        "title": "Construção de módulos",
        "description": "Fabricação em estaleiro",
        "priority": "high",
        "estimatedDays": 120,
        "phase": "FEED"
      },
      {
        "title": "Programa de manutenção preventiva",
        "description": "Plano de M&M",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "EPC"
      },
      {
        "title": "Avaliação de impacto ambiental",
        "description": "EIA e plano de gestão",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Comissionamento"
      },
      {
        "title": "FEED engineering",
        "description": "Front-end engineering design",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Comissionamento"
      },
      {
        "title": "Contrato EPC",
        "description": "Engineering, procurement, construction",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Start-up"
      },
      {
        "title": "Hook-up e comissionamento",
        "description": "Conexões e testes finais",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Start-up"
      },
      {
        "title": "Estudo de viabilidade",
        "description": "Análise técnica e económica",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Trate HSE como prioridade #1 — zero compromissos.",
      "Long-lead items determinam o cronograma; encomende cedo.",
      "Faça FEED robusto: alterações em EPC custam 5-10x mais.",
      "Mantenha contingency mínima de 15% para projetos offshore.",
      "Documente lessons learned após cada marco crítico."
    ],
    "kpis": [
      "TRIR (recordable rate)",
      "% Avanço EPC",
      "First oil date",
      "CAPEX vs FID",
      "Disponibilidade da unidade %"
    ],
    "durationWeeks": 83,
    "teamSize": 17,
    "popularity": 54
  },
  {
    "id": "tpl-039",
    "name": "Perfuração de Poço Onshore — Pequena Escala",
    "industry": "Óleo & Gás",
    "icon": "Flame",
    "description": "Campanha de perfuração terrestre (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Concept",
      "FEED",
      "EPC",
      "Comissionamento",
      "Start-up",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Programa de manutenção preventiva",
        "description": "Plano de M&M",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Concept"
      },
      {
        "title": "First oil/gas",
        "description": "Marco de produção inicial",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Concept"
      },
      {
        "title": "Transporte e içamento",
        "description": "Logística pesada offshore",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "FEED"
      },
      {
        "title": "Construção de módulos",
        "description": "Fabricação em estaleiro",
        "priority": "high",
        "estimatedDays": 120,
        "phase": "FEED"
      },
      {
        "title": "Estudo de viabilidade",
        "description": "Análise técnica e económica",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "EPC"
      },
      {
        "title": "Auditoria HSE",
        "description": "Inspeção independente",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Comissionamento"
      },
      {
        "title": "Avaliação de impacto ambiental",
        "description": "EIA e plano de gestão",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Comissionamento"
      },
      {
        "title": "Long-lead items",
        "description": "Equipamentos de longo prazo de entrega",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Start-up"
      },
      {
        "title": "Hook-up e comissionamento",
        "description": "Conexões e testes finais",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Start-up"
      },
      {
        "title": "Pre-startup safety review",
        "description": "PSSR antes do start-up",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Trate HSE como prioridade #1 — zero compromissos.",
      "Long-lead items determinam o cronograma; encomende cedo.",
      "Faça FEED robusto: alterações em EPC custam 5-10x mais.",
      "Mantenha contingency mínima de 15% para projetos offshore.",
      "Documente lessons learned após cada marco crítico."
    ],
    "kpis": [
      "TRIR (recordable rate)",
      "% Avanço EPC",
      "First oil date",
      "CAPEX vs FID",
      "Disponibilidade da unidade %"
    ],
    "durationWeeks": 71,
    "teamSize": 18,
    "popularity": 82
  },
  {
    "id": "tpl-040",
    "name": "SaaS B2B Multi-tenant",
    "industry": "TI & Software",
    "icon": "Code",
    "description": "Plataforma SaaS para empresas",
    "methodology": "Kanban",
    "phases": [
      "Discovery",
      "Design",
      "Desenvolvimento",
      "QA",
      "UAT",
      "Deploy",
      "Hypercare"
    ],
    "tasks": [
      {
        "title": "Performance e load testing",
        "description": "Benchmarks e otimização",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Discovery"
      },
      {
        "title": "Treinamento de usuários",
        "description": "Capacitação dos key users",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Discovery"
      },
      {
        "title": "Integrações com sistemas legados",
        "description": "Conectores e ETL",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Design"
      },
      {
        "title": "Pentest e revisão de segurança",
        "description": "OWASP e correção de vulnerabilidades",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Design"
      },
      {
        "title": "Documentação técnica",
        "description": "API docs e runbooks",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Testes automatizados",
        "description": "Unit, integration, E2E",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Frontend MVP",
        "description": "Implementação da UI principal",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "QA"
      },
      {
        "title": "Hypercare pós-deploy",
        "description": "Suporte intensivo inicial",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "QA"
      },
      {
        "title": "UAT com stakeholders",
        "description": "Validação de aceitação",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "UAT"
      },
      {
        "title": "Mapeamento de user journeys",
        "description": "Personas e fluxos principais",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "UAT"
      },
      {
        "title": "Desenvolvimento de API core",
        "description": "Endpoints e modelos de dados",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Deploy"
      },
      {
        "title": "Setup de ambiente dev",
        "description": "Repos, CI/CD e ferramentas",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Deploy"
      },
      {
        "title": "Sprint planning inicial",
        "description": "Backlog priorizado e estimativas",
        "priority": "high",
        "estimatedDays": 2,
        "phase": "Hypercare"
      }
    ],
    "bestPractices": [
      "Entregue valor incremental a cada sprint — evite big bang.",
      "Invista em testes automatizados desde o dia 1.",
      "Trate segurança como requisito, não como feature.",
      "Documente decisões arquiteturais em ADRs versionados.",
      "Tenha um plano de rollback claro antes de cada deploy."
    ],
    "kpis": [
      "Velocity de sprint",
      "DORA metrics (DF, LT, MTTR, CFR)",
      "Cobertura de testes %",
      "Bugs em produção",
      "NPS interno"
    ],
    "durationWeeks": 23,
    "teamSize": 11,
    "popularity": 93
  },
  {
    "id": "tpl-041",
    "name": "Aplicação Mobile Bancária",
    "industry": "TI & Software",
    "icon": "Code",
    "description": "App iOS/Android para banco",
    "methodology": "Agile",
    "phases": [
      "Discovery",
      "Design",
      "Desenvolvimento",
      "QA",
      "UAT",
      "Deploy",
      "Hypercare"
    ],
    "tasks": [
      {
        "title": "Hypercare pós-deploy",
        "description": "Suporte intensivo inicial",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Discovery"
      },
      {
        "title": "Performance e load testing",
        "description": "Benchmarks e otimização",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Discovery"
      },
      {
        "title": "Setup de ambiente dev",
        "description": "Repos, CI/CD e ferramentas",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Design"
      },
      {
        "title": "Sprint planning inicial",
        "description": "Backlog priorizado e estimativas",
        "priority": "high",
        "estimatedDays": 2,
        "phase": "Design"
      },
      {
        "title": "Integrações com sistemas legados",
        "description": "Conectores e ETL",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Mapeamento de user journeys",
        "description": "Personas e fluxos principais",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "QA"
      },
      {
        "title": "Treinamento de usuários",
        "description": "Capacitação dos key users",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "QA"
      },
      {
        "title": "UAT com stakeholders",
        "description": "Validação de aceitação",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "UAT"
      },
      {
        "title": "Pentest e revisão de segurança",
        "description": "OWASP e correção de vulnerabilidades",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Deploy"
      },
      {
        "title": "Arquitetura técnica",
        "description": "Diagramas C4 e ADRs",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Deploy"
      },
      {
        "title": "Frontend MVP",
        "description": "Implementação da UI principal",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Hypercare"
      }
    ],
    "bestPractices": [
      "Entregue valor incremental a cada sprint — evite big bang.",
      "Invista em testes automatizados desde o dia 1.",
      "Trate segurança como requisito, não como feature.",
      "Documente decisões arquiteturais em ADRs versionados.",
      "Tenha um plano de rollback claro antes de cada deploy."
    ],
    "kpis": [
      "Velocity de sprint",
      "DORA metrics (DF, LT, MTTR, CFR)",
      "Cobertura de testes %",
      "Bugs em produção",
      "NPS interno"
    ],
    "durationWeeks": 16,
    "teamSize": 6,
    "popularity": 48
  },
  {
    "id": "tpl-042",
    "name": "Migração para Cloud AWS",
    "industry": "TI & Software",
    "icon": "Code",
    "description": "Re-hosting de workloads para cloud",
    "methodology": "Agile",
    "phases": [
      "Discovery",
      "Design",
      "Desenvolvimento",
      "QA",
      "UAT",
      "Deploy",
      "Hypercare"
    ],
    "tasks": [
      {
        "title": "Integrações com sistemas legados",
        "description": "Conectores e ETL",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Discovery"
      },
      {
        "title": "Frontend MVP",
        "description": "Implementação da UI principal",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Discovery"
      },
      {
        "title": "Documentação técnica",
        "description": "API docs e runbooks",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Design"
      },
      {
        "title": "Arquitetura técnica",
        "description": "Diagramas C4 e ADRs",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Desenvolvimento"
      },
      {
        "title": "UAT com stakeholders",
        "description": "Validação de aceitação",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Setup de ambiente dev",
        "description": "Repos, CI/CD e ferramentas",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "QA"
      },
      {
        "title": "Mapeamento de user journeys",
        "description": "Personas e fluxos principais",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "UAT"
      },
      {
        "title": "Cutover e go-live",
        "description": "Migração para produção",
        "priority": "urgent",
        "estimatedDays": 3,
        "phase": "UAT"
      },
      {
        "title": "Testes automatizados",
        "description": "Unit, integration, E2E",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Deploy"
      },
      {
        "title": "Treinamento de usuários",
        "description": "Capacitação dos key users",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Hypercare"
      }
    ],
    "bestPractices": [
      "Entregue valor incremental a cada sprint — evite big bang.",
      "Invista em testes automatizados desde o dia 1.",
      "Trate segurança como requisito, não como feature.",
      "Documente decisões arquiteturais em ADRs versionados.",
      "Tenha um plano de rollback claro antes de cada deploy."
    ],
    "kpis": [
      "Velocity de sprint",
      "DORA metrics (DF, LT, MTTR, CFR)",
      "Cobertura de testes %",
      "Bugs em produção",
      "NPS interno"
    ],
    "durationWeeks": 15,
    "teamSize": 18,
    "popularity": 66
  },
  {
    "id": "tpl-043",
    "name": "Implementação de ERP",
    "industry": "TI & Software",
    "icon": "Code",
    "description": "SAP/Oracle ERP corporativo",
    "methodology": "Scrum",
    "phases": [
      "Discovery",
      "Design",
      "Desenvolvimento",
      "QA",
      "UAT",
      "Deploy",
      "Hypercare"
    ],
    "tasks": [
      {
        "title": "Frontend MVP",
        "description": "Implementação da UI principal",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Discovery"
      },
      {
        "title": "UAT com stakeholders",
        "description": "Validação de aceitação",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Discovery"
      },
      {
        "title": "Hypercare pós-deploy",
        "description": "Suporte intensivo inicial",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Design"
      },
      {
        "title": "Cutover e go-live",
        "description": "Migração para produção",
        "priority": "urgent",
        "estimatedDays": 3,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Pentest e revisão de segurança",
        "description": "OWASP e correção de vulnerabilidades",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "QA"
      },
      {
        "title": "Workshop de descoberta",
        "description": "Entendimento de requisitos com stakeholders",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "QA"
      },
      {
        "title": "Documentação técnica",
        "description": "API docs e runbooks",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "UAT"
      },
      {
        "title": "Treinamento de usuários",
        "description": "Capacitação dos key users",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Deploy"
      },
      {
        "title": "Integrações com sistemas legados",
        "description": "Conectores e ETL",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Hypercare"
      }
    ],
    "bestPractices": [
      "Entregue valor incremental a cada sprint — evite big bang.",
      "Invista em testes automatizados desde o dia 1.",
      "Trate segurança como requisito, não como feature.",
      "Documente decisões arquiteturais em ADRs versionados.",
      "Tenha um plano de rollback claro antes de cada deploy."
    ],
    "kpis": [
      "Velocity de sprint",
      "DORA metrics (DF, LT, MTTR, CFR)",
      "Cobertura de testes %",
      "Bugs em produção",
      "NPS interno"
    ],
    "durationWeeks": 14,
    "teamSize": 15,
    "popularity": 59
  },
  {
    "id": "tpl-044",
    "name": "Data Lakehouse",
    "industry": "TI & Software",
    "icon": "Code",
    "description": "Plataforma analítica unificada",
    "methodology": "Scrum",
    "phases": [
      "Discovery",
      "Design",
      "Desenvolvimento",
      "QA",
      "UAT",
      "Deploy",
      "Hypercare"
    ],
    "tasks": [
      {
        "title": "UAT com stakeholders",
        "description": "Validação de aceitação",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Discovery"
      },
      {
        "title": "Testes automatizados",
        "description": "Unit, integration, E2E",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Discovery"
      },
      {
        "title": "Documentação técnica",
        "description": "API docs e runbooks",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Design"
      },
      {
        "title": "Hypercare pós-deploy",
        "description": "Suporte intensivo inicial",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Design"
      },
      {
        "title": "Cutover e go-live",
        "description": "Migração para produção",
        "priority": "urgent",
        "estimatedDays": 3,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Pentest e revisão de segurança",
        "description": "OWASP e correção de vulnerabilidades",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Setup de ambiente dev",
        "description": "Repos, CI/CD e ferramentas",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "QA"
      },
      {
        "title": "Integrações com sistemas legados",
        "description": "Conectores e ETL",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "UAT"
      },
      {
        "title": "Performance e load testing",
        "description": "Benchmarks e otimização",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "UAT"
      },
      {
        "title": "Arquitetura técnica",
        "description": "Diagramas C4 e ADRs",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Deploy"
      },
      {
        "title": "Treinamento de usuários",
        "description": "Capacitação dos key users",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Deploy"
      },
      {
        "title": "Desenvolvimento de API core",
        "description": "Endpoints e modelos de dados",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Hypercare"
      }
    ],
    "bestPractices": [
      "Entregue valor incremental a cada sprint — evite big bang.",
      "Invista em testes automatizados desde o dia 1.",
      "Trate segurança como requisito, não como feature.",
      "Documente decisões arquiteturais em ADRs versionados.",
      "Tenha um plano de rollback claro antes de cada deploy."
    ],
    "kpis": [
      "Velocity de sprint",
      "DORA metrics (DF, LT, MTTR, CFR)",
      "Cobertura de testes %",
      "Bugs em produção",
      "NPS interno"
    ],
    "durationWeeks": 19,
    "teamSize": 16,
    "popularity": 61
  },
  {
    "id": "tpl-045",
    "name": "Marketplace E-commerce",
    "industry": "TI & Software",
    "icon": "Code",
    "description": "Plataforma multi-vendor",
    "methodology": "Scrum",
    "phases": [
      "Discovery",
      "Design",
      "Desenvolvimento",
      "QA",
      "UAT",
      "Deploy",
      "Hypercare"
    ],
    "tasks": [
      {
        "title": "Desenvolvimento de API core",
        "description": "Endpoints e modelos de dados",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Discovery"
      },
      {
        "title": "UAT com stakeholders",
        "description": "Validação de aceitação",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Discovery"
      },
      {
        "title": "Integrações com sistemas legados",
        "description": "Conectores e ETL",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Design"
      },
      {
        "title": "Arquitetura técnica",
        "description": "Diagramas C4 e ADRs",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Design"
      },
      {
        "title": "Pentest e revisão de segurança",
        "description": "OWASP e correção de vulnerabilidades",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Testes automatizados",
        "description": "Unit, integration, E2E",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Workshop de descoberta",
        "description": "Entendimento de requisitos com stakeholders",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "QA"
      },
      {
        "title": "Frontend MVP",
        "description": "Implementação da UI principal",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "UAT"
      },
      {
        "title": "Documentação técnica",
        "description": "API docs e runbooks",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "UAT"
      },
      {
        "title": "Cutover e go-live",
        "description": "Migração para produção",
        "priority": "urgent",
        "estimatedDays": 3,
        "phase": "Deploy"
      },
      {
        "title": "Hypercare pós-deploy",
        "description": "Suporte intensivo inicial",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Deploy"
      },
      {
        "title": "Setup de ambiente dev",
        "description": "Repos, CI/CD e ferramentas",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Hypercare"
      }
    ],
    "bestPractices": [
      "Entregue valor incremental a cada sprint — evite big bang.",
      "Invista em testes automatizados desde o dia 1.",
      "Trate segurança como requisito, não como feature.",
      "Documente decisões arquiteturais em ADRs versionados.",
      "Tenha um plano de rollback claro antes de cada deploy."
    ],
    "kpis": [
      "Velocity de sprint",
      "DORA metrics (DF, LT, MTTR, CFR)",
      "Cobertura de testes %",
      "Bugs em produção",
      "NPS interno"
    ],
    "durationWeeks": 22,
    "teamSize": 18,
    "popularity": 51
  },
  {
    "id": "tpl-046",
    "name": "Sistema de BI Corporativo",
    "industry": "TI & Software",
    "icon": "Code",
    "description": "Dashboards executivos e self-service",
    "methodology": "Kanban",
    "phases": [
      "Discovery",
      "Design",
      "Desenvolvimento",
      "QA",
      "UAT",
      "Deploy",
      "Hypercare"
    ],
    "tasks": [
      {
        "title": "Testes automatizados",
        "description": "Unit, integration, E2E",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Discovery"
      },
      {
        "title": "Frontend MVP",
        "description": "Implementação da UI principal",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Discovery"
      },
      {
        "title": "Desenvolvimento de API core",
        "description": "Endpoints e modelos de dados",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Design"
      },
      {
        "title": "Setup de ambiente dev",
        "description": "Repos, CI/CD e ferramentas",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Integrações com sistemas legados",
        "description": "Conectores e ETL",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "QA"
      },
      {
        "title": "UAT com stakeholders",
        "description": "Validação de aceitação",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "QA"
      },
      {
        "title": "Performance e load testing",
        "description": "Benchmarks e otimização",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "UAT"
      },
      {
        "title": "Cutover e go-live",
        "description": "Migração para produção",
        "priority": "urgent",
        "estimatedDays": 3,
        "phase": "Deploy"
      },
      {
        "title": "Sprint planning inicial",
        "description": "Backlog priorizado e estimativas",
        "priority": "high",
        "estimatedDays": 2,
        "phase": "Hypercare"
      }
    ],
    "bestPractices": [
      "Entregue valor incremental a cada sprint — evite big bang.",
      "Invista em testes automatizados desde o dia 1.",
      "Trate segurança como requisito, não como feature.",
      "Documente decisões arquiteturais em ADRs versionados.",
      "Tenha um plano de rollback claro antes de cada deploy."
    ],
    "kpis": [
      "Velocity de sprint",
      "DORA metrics (DF, LT, MTTR, CFR)",
      "Cobertura de testes %",
      "Bugs em produção",
      "NPS interno"
    ],
    "durationWeeks": 18,
    "teamSize": 12,
    "popularity": 93
  },
  {
    "id": "tpl-047",
    "name": "DevOps Transformation",
    "industry": "TI & Software",
    "icon": "Code",
    "description": "CI/CD e cultura DevOps",
    "methodology": "Scrum",
    "phases": [
      "Discovery",
      "Design",
      "Desenvolvimento",
      "QA",
      "UAT",
      "Deploy",
      "Hypercare"
    ],
    "tasks": [
      {
        "title": "Hypercare pós-deploy",
        "description": "Suporte intensivo inicial",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Discovery"
      },
      {
        "title": "Workshop de descoberta",
        "description": "Entendimento de requisitos com stakeholders",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Discovery"
      },
      {
        "title": "Documentação técnica",
        "description": "API docs e runbooks",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Design"
      },
      {
        "title": "Testes automatizados",
        "description": "Unit, integration, E2E",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Cutover e go-live",
        "description": "Migração para produção",
        "priority": "urgent",
        "estimatedDays": 3,
        "phase": "QA"
      },
      {
        "title": "Desenvolvimento de API core",
        "description": "Endpoints e modelos de dados",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "QA"
      },
      {
        "title": "Setup de ambiente dev",
        "description": "Repos, CI/CD e ferramentas",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "UAT"
      },
      {
        "title": "Mapeamento de user journeys",
        "description": "Personas e fluxos principais",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Deploy"
      },
      {
        "title": "UAT com stakeholders",
        "description": "Validação de aceitação",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Hypercare"
      }
    ],
    "bestPractices": [
      "Entregue valor incremental a cada sprint — evite big bang.",
      "Invista em testes automatizados desde o dia 1.",
      "Trate segurança como requisito, não como feature.",
      "Documente decisões arquiteturais em ADRs versionados.",
      "Tenha um plano de rollback claro antes de cada deploy."
    ],
    "kpis": [
      "Velocity de sprint",
      "DORA metrics (DF, LT, MTTR, CFR)",
      "Cobertura de testes %",
      "Bugs em produção",
      "NPS interno"
    ],
    "durationWeeks": 13,
    "teamSize": 11,
    "popularity": 52
  },
  {
    "id": "tpl-048",
    "name": "Microsserviços Refactor",
    "industry": "TI & Software",
    "icon": "Code",
    "description": "Decomposição de monólito",
    "methodology": "Agile",
    "phases": [
      "Discovery",
      "Design",
      "Desenvolvimento",
      "QA",
      "UAT",
      "Deploy",
      "Hypercare"
    ],
    "tasks": [
      {
        "title": "Sprint planning inicial",
        "description": "Backlog priorizado e estimativas",
        "priority": "high",
        "estimatedDays": 2,
        "phase": "Discovery"
      },
      {
        "title": "Setup de ambiente dev",
        "description": "Repos, CI/CD e ferramentas",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Discovery"
      },
      {
        "title": "Arquitetura técnica",
        "description": "Diagramas C4 e ADRs",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Design"
      },
      {
        "title": "Integrações com sistemas legados",
        "description": "Conectores e ETL",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Performance e load testing",
        "description": "Benchmarks e otimização",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "QA"
      },
      {
        "title": "Mapeamento de user journeys",
        "description": "Personas e fluxos principais",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "QA"
      },
      {
        "title": "Pentest e revisão de segurança",
        "description": "OWASP e correção de vulnerabilidades",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "UAT"
      },
      {
        "title": "Cutover e go-live",
        "description": "Migração para produção",
        "priority": "urgent",
        "estimatedDays": 3,
        "phase": "Deploy"
      },
      {
        "title": "Treinamento de usuários",
        "description": "Capacitação dos key users",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Hypercare"
      }
    ],
    "bestPractices": [
      "Entregue valor incremental a cada sprint — evite big bang.",
      "Invista em testes automatizados desde o dia 1.",
      "Trate segurança como requisito, não como feature.",
      "Documente decisões arquiteturais em ADRs versionados.",
      "Tenha um plano de rollback claro antes de cada deploy."
    ],
    "kpis": [
      "Velocity de sprint",
      "DORA metrics (DF, LT, MTTR, CFR)",
      "Cobertura de testes %",
      "Bugs em produção",
      "NPS interno"
    ],
    "durationWeeks": 9,
    "teamSize": 12,
    "popularity": 89
  },
  {
    "id": "tpl-049",
    "name": "Plataforma de Identidade SSO",
    "industry": "TI & Software",
    "icon": "Code",
    "description": "IAM corporativo unificado",
    "methodology": "Kanban",
    "phases": [
      "Discovery",
      "Design",
      "Desenvolvimento",
      "QA",
      "UAT",
      "Deploy",
      "Hypercare"
    ],
    "tasks": [
      {
        "title": "Desenvolvimento de API core",
        "description": "Endpoints e modelos de dados",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Discovery"
      },
      {
        "title": "Pentest e revisão de segurança",
        "description": "OWASP e correção de vulnerabilidades",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Discovery"
      },
      {
        "title": "Cutover e go-live",
        "description": "Migração para produção",
        "priority": "urgent",
        "estimatedDays": 3,
        "phase": "Design"
      },
      {
        "title": "Documentação técnica",
        "description": "API docs e runbooks",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Design"
      },
      {
        "title": "Treinamento de usuários",
        "description": "Capacitação dos key users",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Mapeamento de user journeys",
        "description": "Personas e fluxos principais",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "QA"
      },
      {
        "title": "Arquitetura técnica",
        "description": "Diagramas C4 e ADRs",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "QA"
      },
      {
        "title": "Sprint planning inicial",
        "description": "Backlog priorizado e estimativas",
        "priority": "high",
        "estimatedDays": 2,
        "phase": "UAT"
      },
      {
        "title": "Performance e load testing",
        "description": "Benchmarks e otimização",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Deploy"
      },
      {
        "title": "Testes automatizados",
        "description": "Unit, integration, E2E",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Deploy"
      },
      {
        "title": "Workshop de descoberta",
        "description": "Entendimento de requisitos com stakeholders",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Hypercare"
      }
    ],
    "bestPractices": [
      "Entregue valor incremental a cada sprint — evite big bang.",
      "Invista em testes automatizados desde o dia 1.",
      "Trate segurança como requisito, não como feature.",
      "Documente decisões arquiteturais em ADRs versionados.",
      "Tenha um plano de rollback claro antes de cada deploy."
    ],
    "kpis": [
      "Velocity de sprint",
      "DORA metrics (DF, LT, MTTR, CFR)",
      "Cobertura de testes %",
      "Bugs em produção",
      "NPS interno"
    ],
    "durationWeeks": 14,
    "teamSize": 22,
    "popularity": 83
  },
  {
    "id": "tpl-050",
    "name": "Programa de Cibersegurança",
    "industry": "TI & Software",
    "icon": "Code",
    "description": "Maturidade de segurança NIST",
    "methodology": "Scrum",
    "phases": [
      "Discovery",
      "Design",
      "Desenvolvimento",
      "QA",
      "UAT",
      "Deploy",
      "Hypercare"
    ],
    "tasks": [
      {
        "title": "Treinamento de usuários",
        "description": "Capacitação dos key users",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Discovery"
      },
      {
        "title": "Documentação técnica",
        "description": "API docs e runbooks",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Discovery"
      },
      {
        "title": "Setup de ambiente dev",
        "description": "Repos, CI/CD e ferramentas",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Design"
      },
      {
        "title": "Mapeamento de user journeys",
        "description": "Personas e fluxos principais",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Design"
      },
      {
        "title": "Pentest e revisão de segurança",
        "description": "OWASP e correção de vulnerabilidades",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Performance e load testing",
        "description": "Benchmarks e otimização",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenvolvimento"
      },
      {
        "title": "UAT com stakeholders",
        "description": "Validação de aceitação",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "QA"
      },
      {
        "title": "Hypercare pós-deploy",
        "description": "Suporte intensivo inicial",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "UAT"
      },
      {
        "title": "Sprint planning inicial",
        "description": "Backlog priorizado e estimativas",
        "priority": "high",
        "estimatedDays": 2,
        "phase": "UAT"
      },
      {
        "title": "Frontend MVP",
        "description": "Implementação da UI principal",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Deploy"
      },
      {
        "title": "Desenvolvimento de API core",
        "description": "Endpoints e modelos de dados",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Deploy"
      },
      {
        "title": "Integrações com sistemas legados",
        "description": "Conectores e ETL",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Hypercare"
      }
    ],
    "bestPractices": [
      "Entregue valor incremental a cada sprint — evite big bang.",
      "Invista em testes automatizados desde o dia 1.",
      "Trate segurança como requisito, não como feature.",
      "Documente decisões arquiteturais em ADRs versionados.",
      "Tenha um plano de rollback claro antes de cada deploy."
    ],
    "kpis": [
      "Velocity de sprint",
      "DORA metrics (DF, LT, MTTR, CFR)",
      "Cobertura de testes %",
      "Bugs em produção",
      "NPS interno"
    ],
    "durationWeeks": 20,
    "teamSize": 22,
    "popularity": 90
  },
  {
    "id": "tpl-051",
    "name": "RPA de Backoffice",
    "industry": "TI & Software",
    "icon": "Code",
    "description": "Automação de processos repetitivos",
    "methodology": "Kanban",
    "phases": [
      "Discovery",
      "Design",
      "Desenvolvimento",
      "QA",
      "UAT",
      "Deploy",
      "Hypercare"
    ],
    "tasks": [
      {
        "title": "Documentação técnica",
        "description": "API docs e runbooks",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Discovery"
      },
      {
        "title": "Testes automatizados",
        "description": "Unit, integration, E2E",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Discovery"
      },
      {
        "title": "Frontend MVP",
        "description": "Implementação da UI principal",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Design"
      },
      {
        "title": "Performance e load testing",
        "description": "Benchmarks e otimização",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Desenvolvimento de API core",
        "description": "Endpoints e modelos de dados",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "QA"
      },
      {
        "title": "Mapeamento de user journeys",
        "description": "Personas e fluxos principais",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "QA"
      },
      {
        "title": "Cutover e go-live",
        "description": "Migração para produção",
        "priority": "urgent",
        "estimatedDays": 3,
        "phase": "UAT"
      },
      {
        "title": "Hypercare pós-deploy",
        "description": "Suporte intensivo inicial",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Deploy"
      },
      {
        "title": "Workshop de descoberta",
        "description": "Entendimento de requisitos com stakeholders",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Hypercare"
      }
    ],
    "bestPractices": [
      "Entregue valor incremental a cada sprint — evite big bang.",
      "Invista em testes automatizados desde o dia 1.",
      "Trate segurança como requisito, não como feature.",
      "Documente decisões arquiteturais em ADRs versionados.",
      "Tenha um plano de rollback claro antes de cada deploy."
    ],
    "kpis": [
      "Velocity de sprint",
      "DORA metrics (DF, LT, MTTR, CFR)",
      "Cobertura de testes %",
      "Bugs em produção",
      "NPS interno"
    ],
    "durationWeeks": 17,
    "teamSize": 19,
    "popularity": 46
  },
  {
    "id": "tpl-052",
    "name": "LLM/AI Copilot Interno",
    "industry": "TI & Software",
    "icon": "Code",
    "description": "Assistente IA para colaboradores",
    "methodology": "Kanban",
    "phases": [
      "Discovery",
      "Design",
      "Desenvolvimento",
      "QA",
      "UAT",
      "Deploy",
      "Hypercare"
    ],
    "tasks": [
      {
        "title": "Documentação técnica",
        "description": "API docs e runbooks",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Discovery"
      },
      {
        "title": "Performance e load testing",
        "description": "Benchmarks e otimização",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Discovery"
      },
      {
        "title": "UAT com stakeholders",
        "description": "Validação de aceitação",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Design"
      },
      {
        "title": "Integrações com sistemas legados",
        "description": "Conectores e ETL",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Design"
      },
      {
        "title": "Hypercare pós-deploy",
        "description": "Suporte intensivo inicial",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Arquitetura técnica",
        "description": "Diagramas C4 e ADRs",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Desenvolvimento"
      },
      {
        "title": "Frontend MVP",
        "description": "Implementação da UI principal",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "QA"
      },
      {
        "title": "Cutover e go-live",
        "description": "Migração para produção",
        "priority": "urgent",
        "estimatedDays": 3,
        "phase": "UAT"
      },
      {
        "title": "Sprint planning inicial",
        "description": "Backlog priorizado e estimativas",
        "priority": "high",
        "estimatedDays": 2,
        "phase": "UAT"
      },
      {
        "title": "Treinamento de usuários",
        "description": "Capacitação dos key users",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Deploy"
      },
      {
        "title": "Pentest e revisão de segurança",
        "description": "OWASP e correção de vulnerabilidades",
        "priority": "urgent",
        "estimatedDays": 10,
        "phase": "Deploy"
      },
      {
        "title": "Setup de ambiente dev",
        "description": "Repos, CI/CD e ferramentas",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Hypercare"
      }
    ],
    "bestPractices": [
      "Entregue valor incremental a cada sprint — evite big bang.",
      "Invista em testes automatizados desde o dia 1.",
      "Trate segurança como requisito, não como feature.",
      "Documente decisões arquiteturais em ADRs versionados.",
      "Tenha um plano de rollback claro antes de cada deploy."
    ],
    "kpis": [
      "Velocity de sprint",
      "DORA metrics (DF, LT, MTTR, CFR)",
      "Cobertura de testes %",
      "Bugs em produção",
      "NPS interno"
    ],
    "durationWeeks": 16,
    "teamSize": 17,
    "popularity": 92
  },
  {
    "id": "tpl-053",
    "name": "Implementação de Prontuário Eletrônico",
    "industry": "Saúde",
    "icon": "Stethoscope",
    "description": "EMR/HIS hospitalar",
    "methodology": "PRINCE2",
    "phases": [
      "Planejamento clínico",
      "Aprovação ética",
      "Recrutamento",
      "Execução",
      "Análise",
      "Publicação"
    ],
    "tasks": [
      {
        "title": "Adequação NR-32 / biossegurança",
        "description": "Conformidade ocupacional em saúde",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Validação de prontuário",
        "description": "Testes de fluxo clínico",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Compra de equipamentos médicos",
        "description": "Aquisição e instalação",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Aprovação ética"
      },
      {
        "title": "Integração com SUS/ANS",
        "description": "Faturamento e prestação de contas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aprovação ética"
      },
      {
        "title": "Protocolo clínico",
        "description": "Desenho do estudo e endpoints",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Recrutamento"
      },
      {
        "title": "Treinamento de equipas clínicas",
        "description": "Capacitação em protocolo",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Auditoria de prontuários",
        "description": "QA clínico e compliance",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Campanha de comunicação",
        "description": "Engajamento de pacientes",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Submissão à comissão de ética",
        "description": "CEP/CONEP ou equivalente",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Análise"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados clínicos",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Publicação"
      }
    ],
    "bestPractices": [
      "Coloque o paciente no centro de todas as decisões.",
      "Comissão de ética antes de qualquer coleta de dados.",
      "Treine a equipe clínica em protocolos antes do start.",
      "Audite prontuários regularmente — não espere a inspeção.",
      "LGPD/HIPAA: dados de saúde exigem máxima proteção."
    ],
    "kpis": [
      "Taxa de adesão de pacientes",
      "Tempo médio de atendimento",
      "Satisfação NPS",
      "Eventos adversos",
      "% Acreditação"
    ],
    "durationWeeks": 35,
    "teamSize": 4,
    "popularity": 71
  },
  {
    "id": "tpl-054",
    "name": "Campanha de Vacinação Massiva",
    "industry": "Saúde",
    "icon": "Stethoscope",
    "description": "Imunização populacional",
    "methodology": "Waterfall",
    "phases": [
      "Planejamento clínico",
      "Aprovação ética",
      "Recrutamento",
      "Execução",
      "Análise",
      "Publicação"
    ],
    "tasks": [
      {
        "title": "Treinamento de equipas clínicas",
        "description": "Capacitação em protocolo",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Auditoria de prontuários",
        "description": "QA clínico e compliance",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Compra de equipamentos médicos",
        "description": "Aquisição e instalação",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Aprovação ética"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados clínicos",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aprovação ética"
      },
      {
        "title": "Integração com SUS/ANS",
        "description": "Faturamento e prestação de contas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Recrutamento"
      },
      {
        "title": "Validação de prontuário",
        "description": "Testes de fluxo clínico",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Adequação NR-32 / biossegurança",
        "description": "Conformidade ocupacional em saúde",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Campanha de comunicação",
        "description": "Engajamento de pacientes",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Submissão à comissão de ética",
        "description": "CEP/CONEP ou equivalente",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Análise"
      },
      {
        "title": "Protocolo clínico",
        "description": "Desenho do estudo e endpoints",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Publicação"
      }
    ],
    "bestPractices": [
      "Coloque o paciente no centro de todas as decisões.",
      "Comissão de ética antes de qualquer coleta de dados.",
      "Treine a equipe clínica em protocolos antes do start.",
      "Audite prontuários regularmente — não espere a inspeção.",
      "LGPD/HIPAA: dados de saúde exigem máxima proteção."
    ],
    "kpis": [
      "Taxa de adesão de pacientes",
      "Tempo médio de atendimento",
      "Satisfação NPS",
      "Eventos adversos",
      "% Acreditação"
    ],
    "durationWeeks": 35,
    "teamSize": 6,
    "popularity": 55
  },
  {
    "id": "tpl-055",
    "name": "Construção de Centro de Diagnóstico",
    "industry": "Saúde",
    "icon": "Stethoscope",
    "description": "Imagem e laboratório",
    "methodology": "Waterfall",
    "phases": [
      "Planejamento clínico",
      "Aprovação ética",
      "Recrutamento",
      "Execução",
      "Análise",
      "Publicação"
    ],
    "tasks": [
      {
        "title": "Auditoria de prontuários",
        "description": "QA clínico e compliance",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Campanha de comunicação",
        "description": "Engajamento de pacientes",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Compra de equipamentos médicos",
        "description": "Aquisição e instalação",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Aprovação ética"
      },
      {
        "title": "Validação de prontuário",
        "description": "Testes de fluxo clínico",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Aprovação ética"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados clínicos",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Recrutamento"
      },
      {
        "title": "Integração com SUS/ANS",
        "description": "Faturamento e prestação de contas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Execução"
      },
      {
        "title": "Adequação NR-32 / biossegurança",
        "description": "Conformidade ocupacional em saúde",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Protocolo clínico",
        "description": "Desenho do estudo e endpoints",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Treinamento de equipas clínicas",
        "description": "Capacitação em protocolo",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Análise"
      },
      {
        "title": "Submissão à comissão de ética",
        "description": "CEP/CONEP ou equivalente",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Publicação"
      }
    ],
    "bestPractices": [
      "Coloque o paciente no centro de todas as decisões.",
      "Comissão de ética antes de qualquer coleta de dados.",
      "Treine a equipe clínica em protocolos antes do start.",
      "Audite prontuários regularmente — não espere a inspeção.",
      "LGPD/HIPAA: dados de saúde exigem máxima proteção."
    ],
    "kpis": [
      "Taxa de adesão de pacientes",
      "Tempo médio de atendimento",
      "Satisfação NPS",
      "Eventos adversos",
      "% Acreditação"
    ],
    "durationWeeks": 35,
    "teamSize": 16,
    "popularity": 84
  },
  {
    "id": "tpl-056",
    "name": "Telemedicina Regional",
    "industry": "Saúde",
    "icon": "Stethoscope",
    "description": "Atendimento remoto multi-postos",
    "methodology": "PRINCE2",
    "phases": [
      "Planejamento clínico",
      "Aprovação ética",
      "Recrutamento",
      "Execução",
      "Análise",
      "Publicação"
    ],
    "tasks": [
      {
        "title": "Adequação NR-32 / biossegurança",
        "description": "Conformidade ocupacional em saúde",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Validação de prontuário",
        "description": "Testes de fluxo clínico",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Auditoria de prontuários",
        "description": "QA clínico e compliance",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Aprovação ética"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados clínicos",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aprovação ética"
      },
      {
        "title": "Integração com SUS/ANS",
        "description": "Faturamento e prestação de contas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Recrutamento"
      },
      {
        "title": "Treinamento de equipas clínicas",
        "description": "Capacitação em protocolo",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Compra de equipamentos médicos",
        "description": "Aquisição e instalação",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Execução"
      },
      {
        "title": "Campanha de comunicação",
        "description": "Engajamento de pacientes",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Submissão à comissão de ética",
        "description": "CEP/CONEP ou equivalente",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Análise"
      },
      {
        "title": "Protocolo clínico",
        "description": "Desenho do estudo e endpoints",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Publicação"
      }
    ],
    "bestPractices": [
      "Coloque o paciente no centro de todas as decisões.",
      "Comissão de ética antes de qualquer coleta de dados.",
      "Treine a equipe clínica em protocolos antes do start.",
      "Audite prontuários regularmente — não espere a inspeção.",
      "LGPD/HIPAA: dados de saúde exigem máxima proteção."
    ],
    "kpis": [
      "Taxa de adesão de pacientes",
      "Tempo médio de atendimento",
      "Satisfação NPS",
      "Eventos adversos",
      "% Acreditação"
    ],
    "durationWeeks": 35,
    "teamSize": 12,
    "popularity": 59
  },
  {
    "id": "tpl-057",
    "name": "Acreditação Hospitalar JCI",
    "industry": "Saúde",
    "icon": "Stethoscope",
    "description": "Certificação internacional de qualidade",
    "methodology": "PRINCE2",
    "phases": [
      "Planejamento clínico",
      "Aprovação ética",
      "Recrutamento",
      "Execução",
      "Análise",
      "Publicação"
    ],
    "tasks": [
      {
        "title": "Compra de equipamentos médicos",
        "description": "Aquisição e instalação",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Submissão à comissão de ética",
        "description": "CEP/CONEP ou equivalente",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados clínicos",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aprovação ética"
      },
      {
        "title": "Treinamento de equipas clínicas",
        "description": "Capacitação em protocolo",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Aprovação ética"
      },
      {
        "title": "Protocolo clínico",
        "description": "Desenho do estudo e endpoints",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Recrutamento"
      },
      {
        "title": "Adequação NR-32 / biossegurança",
        "description": "Conformidade ocupacional em saúde",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Campanha de comunicação",
        "description": "Engajamento de pacientes",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Validação de prontuário",
        "description": "Testes de fluxo clínico",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Integração com SUS/ANS",
        "description": "Faturamento e prestação de contas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Análise"
      },
      {
        "title": "Auditoria de prontuários",
        "description": "QA clínico e compliance",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Publicação"
      }
    ],
    "bestPractices": [
      "Coloque o paciente no centro de todas as decisões.",
      "Comissão de ética antes de qualquer coleta de dados.",
      "Treine a equipe clínica em protocolos antes do start.",
      "Audite prontuários regularmente — não espere a inspeção.",
      "LGPD/HIPAA: dados de saúde exigem máxima proteção."
    ],
    "kpis": [
      "Taxa de adesão de pacientes",
      "Tempo médio de atendimento",
      "Satisfação NPS",
      "Eventos adversos",
      "% Acreditação"
    ],
    "durationWeeks": 35,
    "teamSize": 22,
    "popularity": 88
  },
  {
    "id": "tpl-058",
    "name": "Programa de Saúde Mental Corporativo",
    "industry": "Saúde",
    "icon": "Stethoscope",
    "description": "Bem-estar e psicoterapia",
    "methodology": "Waterfall",
    "phases": [
      "Planejamento clínico",
      "Aprovação ética",
      "Recrutamento",
      "Execução",
      "Análise",
      "Publicação"
    ],
    "tasks": [
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados clínicos",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Adequação NR-32 / biossegurança",
        "description": "Conformidade ocupacional em saúde",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Submissão à comissão de ética",
        "description": "CEP/CONEP ou equivalente",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Aprovação ética"
      },
      {
        "title": "Integração com SUS/ANS",
        "description": "Faturamento e prestação de contas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aprovação ética"
      },
      {
        "title": "Auditoria de prontuários",
        "description": "QA clínico e compliance",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Recrutamento"
      },
      {
        "title": "Treinamento de equipas clínicas",
        "description": "Capacitação em protocolo",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Validação de prontuário",
        "description": "Testes de fluxo clínico",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Compra de equipamentos médicos",
        "description": "Aquisição e instalação",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Análise"
      },
      {
        "title": "Protocolo clínico",
        "description": "Desenho do estudo e endpoints",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Campanha de comunicação",
        "description": "Engajamento de pacientes",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Publicação"
      }
    ],
    "bestPractices": [
      "Coloque o paciente no centro de todas as decisões.",
      "Comissão de ética antes de qualquer coleta de dados.",
      "Treine a equipe clínica em protocolos antes do start.",
      "Audite prontuários regularmente — não espere a inspeção.",
      "LGPD/HIPAA: dados de saúde exigem máxima proteção."
    ],
    "kpis": [
      "Taxa de adesão de pacientes",
      "Tempo médio de atendimento",
      "Satisfação NPS",
      "Eventos adversos",
      "% Acreditação"
    ],
    "durationWeeks": 35,
    "teamSize": 21,
    "popularity": 48
  },
  {
    "id": "tpl-059",
    "name": "Renovação de UTI",
    "industry": "Saúde",
    "icon": "Stethoscope",
    "description": "Modernização de unidade crítica",
    "methodology": "PRINCE2",
    "phases": [
      "Planejamento clínico",
      "Aprovação ética",
      "Recrutamento",
      "Execução",
      "Análise",
      "Publicação"
    ],
    "tasks": [
      {
        "title": "Protocolo clínico",
        "description": "Desenho do estudo e endpoints",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados clínicos",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Adequação NR-32 / biossegurança",
        "description": "Conformidade ocupacional em saúde",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Aprovação ética"
      },
      {
        "title": "Validação de prontuário",
        "description": "Testes de fluxo clínico",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Aprovação ética"
      },
      {
        "title": "Submissão à comissão de ética",
        "description": "CEP/CONEP ou equivalente",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Recrutamento"
      },
      {
        "title": "Compra de equipamentos médicos",
        "description": "Aquisição e instalação",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Execução"
      },
      {
        "title": "Campanha de comunicação",
        "description": "Engajamento de pacientes",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Auditoria de prontuários",
        "description": "QA clínico e compliance",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Análise"
      },
      {
        "title": "Integração com SUS/ANS",
        "description": "Faturamento e prestação de contas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Análise"
      },
      {
        "title": "Treinamento de equipas clínicas",
        "description": "Capacitação em protocolo",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Publicação"
      }
    ],
    "bestPractices": [
      "Coloque o paciente no centro de todas as decisões.",
      "Comissão de ética antes de qualquer coleta de dados.",
      "Treine a equipe clínica em protocolos antes do start.",
      "Audite prontuários regularmente — não espere a inspeção.",
      "LGPD/HIPAA: dados de saúde exigem máxima proteção."
    ],
    "kpis": [
      "Taxa de adesão de pacientes",
      "Tempo médio de atendimento",
      "Satisfação NPS",
      "Eventos adversos",
      "% Acreditação"
    ],
    "durationWeeks": 35,
    "teamSize": 18,
    "popularity": 61
  },
  {
    "id": "tpl-060",
    "name": "Pesquisa Clínica Fase III",
    "industry": "Saúde",
    "icon": "Stethoscope",
    "description": "Ensaio clínico randomizado",
    "methodology": "Waterfall",
    "phases": [
      "Planejamento clínico",
      "Aprovação ética",
      "Recrutamento",
      "Execução",
      "Análise",
      "Publicação"
    ],
    "tasks": [
      {
        "title": "Protocolo clínico",
        "description": "Desenho do estudo e endpoints",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Adequação NR-32 / biossegurança",
        "description": "Conformidade ocupacional em saúde",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Auditoria de prontuários",
        "description": "QA clínico e compliance",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Aprovação ética"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados clínicos",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aprovação ética"
      },
      {
        "title": "Integração com SUS/ANS",
        "description": "Faturamento e prestação de contas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Recrutamento"
      },
      {
        "title": "Compra de equipamentos médicos",
        "description": "Aquisição e instalação",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Execução"
      },
      {
        "title": "Campanha de comunicação",
        "description": "Engajamento de pacientes",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Validação de prontuário",
        "description": "Testes de fluxo clínico",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Treinamento de equipas clínicas",
        "description": "Capacitação em protocolo",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Análise"
      },
      {
        "title": "Submissão à comissão de ética",
        "description": "CEP/CONEP ou equivalente",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Publicação"
      }
    ],
    "bestPractices": [
      "Coloque o paciente no centro de todas as decisões.",
      "Comissão de ética antes de qualquer coleta de dados.",
      "Treine a equipe clínica em protocolos antes do start.",
      "Audite prontuários regularmente — não espere a inspeção.",
      "LGPD/HIPAA: dados de saúde exigem máxima proteção."
    ],
    "kpis": [
      "Taxa de adesão de pacientes",
      "Tempo médio de atendimento",
      "Satisfação NPS",
      "Eventos adversos",
      "% Acreditação"
    ],
    "durationWeeks": 35,
    "teamSize": 22,
    "popularity": 100
  },
  {
    "id": "tpl-061",
    "name": "Implementação LIS",
    "industry": "Saúde",
    "icon": "Stethoscope",
    "description": "Sistema laboratorial integrado",
    "methodology": "PRINCE2",
    "phases": [
      "Planejamento clínico",
      "Aprovação ética",
      "Recrutamento",
      "Execução",
      "Análise",
      "Publicação"
    ],
    "tasks": [
      {
        "title": "Submissão à comissão de ética",
        "description": "CEP/CONEP ou equivalente",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Compra de equipamentos médicos",
        "description": "Aquisição e instalação",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados clínicos",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aprovação ética"
      },
      {
        "title": "Adequação NR-32 / biossegurança",
        "description": "Conformidade ocupacional em saúde",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Aprovação ética"
      },
      {
        "title": "Campanha de comunicação",
        "description": "Engajamento de pacientes",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Recrutamento"
      },
      {
        "title": "Integração com SUS/ANS",
        "description": "Faturamento e prestação de contas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Execução"
      },
      {
        "title": "Auditoria de prontuários",
        "description": "QA clínico e compliance",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Treinamento de equipas clínicas",
        "description": "Capacitação em protocolo",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Análise"
      },
      {
        "title": "Validação de prontuário",
        "description": "Testes de fluxo clínico",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Protocolo clínico",
        "description": "Desenho do estudo e endpoints",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Publicação"
      }
    ],
    "bestPractices": [
      "Coloque o paciente no centro de todas as decisões.",
      "Comissão de ética antes de qualquer coleta de dados.",
      "Treine a equipe clínica em protocolos antes do start.",
      "Audite prontuários regularmente — não espere a inspeção.",
      "LGPD/HIPAA: dados de saúde exigem máxima proteção."
    ],
    "kpis": [
      "Taxa de adesão de pacientes",
      "Tempo médio de atendimento",
      "Satisfação NPS",
      "Eventos adversos",
      "% Acreditação"
    ],
    "durationWeeks": 35,
    "teamSize": 13,
    "popularity": 95
  },
  {
    "id": "tpl-062",
    "name": "Triagem Comunitária",
    "industry": "Saúde",
    "icon": "Stethoscope",
    "description": "Rastreamento de doenças crônicas",
    "methodology": "Waterfall",
    "phases": [
      "Planejamento clínico",
      "Aprovação ética",
      "Recrutamento",
      "Execução",
      "Análise",
      "Publicação"
    ],
    "tasks": [
      {
        "title": "Integração com SUS/ANS",
        "description": "Faturamento e prestação de contas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Adequação NR-32 / biossegurança",
        "description": "Conformidade ocupacional em saúde",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Protocolo clínico",
        "description": "Desenho do estudo e endpoints",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Aprovação ética"
      },
      {
        "title": "Campanha de comunicação",
        "description": "Engajamento de pacientes",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Aprovação ética"
      },
      {
        "title": "Validação de prontuário",
        "description": "Testes de fluxo clínico",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Recrutamento"
      },
      {
        "title": "Auditoria de prontuários",
        "description": "QA clínico e compliance",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Submissão à comissão de ética",
        "description": "CEP/CONEP ou equivalente",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Execução"
      },
      {
        "title": "Treinamento de equipas clínicas",
        "description": "Capacitação em protocolo",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Análise"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados clínicos",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Análise"
      },
      {
        "title": "Compra de equipamentos médicos",
        "description": "Aquisição e instalação",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Publicação"
      }
    ],
    "bestPractices": [
      "Coloque o paciente no centro de todas as decisões.",
      "Comissão de ética antes de qualquer coleta de dados.",
      "Treine a equipe clínica em protocolos antes do start.",
      "Audite prontuários regularmente — não espere a inspeção.",
      "LGPD/HIPAA: dados de saúde exigem máxima proteção."
    ],
    "kpis": [
      "Taxa de adesão de pacientes",
      "Tempo médio de atendimento",
      "Satisfação NPS",
      "Eventos adversos",
      "% Acreditação"
    ],
    "durationWeeks": 35,
    "teamSize": 9,
    "popularity": 55
  },
  {
    "id": "tpl-063",
    "name": "Banco de Sangue Regional",
    "industry": "Saúde",
    "icon": "Stethoscope",
    "description": "Coleta, processamento e distribuição",
    "methodology": "PRINCE2",
    "phases": [
      "Planejamento clínico",
      "Aprovação ética",
      "Recrutamento",
      "Execução",
      "Análise",
      "Publicação"
    ],
    "tasks": [
      {
        "title": "Campanha de comunicação",
        "description": "Engajamento de pacientes",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Submissão à comissão de ética",
        "description": "CEP/CONEP ou equivalente",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Treinamento de equipas clínicas",
        "description": "Capacitação em protocolo",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Aprovação ética"
      },
      {
        "title": "Protocolo clínico",
        "description": "Desenho do estudo e endpoints",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Aprovação ética"
      },
      {
        "title": "Compra de equipamentos médicos",
        "description": "Aquisição e instalação",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Recrutamento"
      },
      {
        "title": "Validação de prontuário",
        "description": "Testes de fluxo clínico",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Adequação NR-32 / biossegurança",
        "description": "Conformidade ocupacional em saúde",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados clínicos",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Análise"
      },
      {
        "title": "Integração com SUS/ANS",
        "description": "Faturamento e prestação de contas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Análise"
      },
      {
        "title": "Auditoria de prontuários",
        "description": "QA clínico e compliance",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Publicação"
      }
    ],
    "bestPractices": [
      "Coloque o paciente no centro de todas as decisões.",
      "Comissão de ética antes de qualquer coleta de dados.",
      "Treine a equipe clínica em protocolos antes do start.",
      "Audite prontuários regularmente — não espere a inspeção.",
      "LGPD/HIPAA: dados de saúde exigem máxima proteção."
    ],
    "kpis": [
      "Taxa de adesão de pacientes",
      "Tempo médio de atendimento",
      "Satisfação NPS",
      "Eventos adversos",
      "% Acreditação"
    ],
    "durationWeeks": 35,
    "teamSize": 13,
    "popularity": 84
  },
  {
    "id": "tpl-064",
    "name": "Implementação de Prontuário Eletrônico — Pequena Escala",
    "industry": "Saúde",
    "icon": "Stethoscope",
    "description": "EMR/HIS hospitalar (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Planejamento clínico",
      "Aprovação ética",
      "Recrutamento",
      "Execução",
      "Análise",
      "Publicação"
    ],
    "tasks": [
      {
        "title": "Submissão à comissão de ética",
        "description": "CEP/CONEP ou equivalente",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Compra de equipamentos médicos",
        "description": "Aquisição e instalação",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Adequação NR-32 / biossegurança",
        "description": "Conformidade ocupacional em saúde",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Aprovação ética"
      },
      {
        "title": "Integração com SUS/ANS",
        "description": "Faturamento e prestação de contas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aprovação ética"
      },
      {
        "title": "Validação de prontuário",
        "description": "Testes de fluxo clínico",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Recrutamento"
      },
      {
        "title": "Auditoria de prontuários",
        "description": "QA clínico e compliance",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados clínicos",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Execução"
      },
      {
        "title": "Campanha de comunicação",
        "description": "Engajamento de pacientes",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Protocolo clínico",
        "description": "Desenho do estudo e endpoints",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Treinamento de equipas clínicas",
        "description": "Capacitação em protocolo",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Publicação"
      }
    ],
    "bestPractices": [
      "Coloque o paciente no centro de todas as decisões.",
      "Comissão de ética antes de qualquer coleta de dados.",
      "Treine a equipe clínica em protocolos antes do start.",
      "Audite prontuários regularmente — não espere a inspeção.",
      "LGPD/HIPAA: dados de saúde exigem máxima proteção."
    ],
    "kpis": [
      "Taxa de adesão de pacientes",
      "Tempo médio de atendimento",
      "Satisfação NPS",
      "Eventos adversos",
      "% Acreditação"
    ],
    "durationWeeks": 35,
    "teamSize": 12,
    "popularity": 92
  },
  {
    "id": "tpl-065",
    "name": "Campanha de Vacinação Massiva — Pequena Escala",
    "industry": "Saúde",
    "icon": "Stethoscope",
    "description": "Imunização populacional (Pequena Escala)",
    "methodology": "PRINCE2",
    "phases": [
      "Planejamento clínico",
      "Aprovação ética",
      "Recrutamento",
      "Execução",
      "Análise",
      "Publicação"
    ],
    "tasks": [
      {
        "title": "Submissão à comissão de ética",
        "description": "CEP/CONEP ou equivalente",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Protocolo clínico",
        "description": "Desenho do estudo e endpoints",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Planejamento clínico"
      },
      {
        "title": "Treinamento de equipas clínicas",
        "description": "Capacitação em protocolo",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Aprovação ética"
      },
      {
        "title": "Integração com SUS/ANS",
        "description": "Faturamento e prestação de contas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aprovação ética"
      },
      {
        "title": "Auditoria de prontuários",
        "description": "QA clínico e compliance",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Recrutamento"
      },
      {
        "title": "Adequação NR-32 / biossegurança",
        "description": "Conformidade ocupacional em saúde",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Validação de prontuário",
        "description": "Testes de fluxo clínico",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados clínicos",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Análise"
      },
      {
        "title": "Campanha de comunicação",
        "description": "Engajamento de pacientes",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Compra de equipamentos médicos",
        "description": "Aquisição e instalação",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Publicação"
      }
    ],
    "bestPractices": [
      "Coloque o paciente no centro de todas as decisões.",
      "Comissão de ética antes de qualquer coleta de dados.",
      "Treine a equipe clínica em protocolos antes do start.",
      "Audite prontuários regularmente — não espere a inspeção.",
      "LGPD/HIPAA: dados de saúde exigem máxima proteção."
    ],
    "kpis": [
      "Taxa de adesão de pacientes",
      "Tempo médio de atendimento",
      "Satisfação NPS",
      "Eventos adversos",
      "% Acreditação"
    ],
    "durationWeeks": 35,
    "teamSize": 16,
    "popularity": 100
  },
  {
    "id": "tpl-066",
    "name": "Implementação de LMS",
    "industry": "Educação",
    "icon": "GraduationCap",
    "description": "Moodle/Canvas para universidade",
    "methodology": "Waterfall",
    "phases": [
      "Planeamento académico",
      "Aprovação institucional",
      "Recrutamento",
      "Execução letiva",
      "Avaliação",
      "Certificação"
    ],
    "tasks": [
      {
        "title": "Avaliações periódicas",
        "description": "Provas e trabalhos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento académico"
      },
      {
        "title": "Cerimónia de certificação",
        "description": "Diplomação e entrega",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Planeamento académico"
      },
      {
        "title": "Acompanhamento pedagógico",
        "description": "Mentoria e suporte",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Edital de alunos",
        "description": "Inscrições e processo seletivo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Desenho curricular",
        "description": "Ementa, bibliografia e competências",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Recrutamento"
      },
      {
        "title": "Aquisição de bibliografia",
        "description": "Compra de acervo",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Execução letiva"
      },
      {
        "title": "Setup de LMS",
        "description": "Configuração e cursos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução letiva"
      },
      {
        "title": "Aprovação no conselho académico",
        "description": "Colegiado e MEC",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Avaliação"
      },
      {
        "title": "Recrutamento de professores",
        "description": "Edital e seleção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Treinamento docente em EAD",
        "description": "Capacitação metodológica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Certificação"
      }
    ],
    "bestPractices": [
      "Envolva docentes desde o design curricular.",
      "LMS é meio, não fim — invista em metodologia.",
      "Avalie o aluno por competências, não só por nota.",
      "Mantenha comunicação ativa com pais/responsáveis.",
      "Use dados de evasão para intervir cedo."
    ],
    "kpis": [
      "Taxa de retenção",
      "Taxa de aprovação",
      "NPS alunos",
      "% Empregabilidade",
      "Avaliação MEC"
    ],
    "durationWeeks": 32,
    "teamSize": 6,
    "popularity": 54
  },
  {
    "id": "tpl-067",
    "name": "Programa de Bolsas",
    "industry": "Educação",
    "icon": "GraduationCap",
    "description": "Bolsas de mérito e socioeconómicas",
    "methodology": "Waterfall",
    "phases": [
      "Planeamento académico",
      "Aprovação institucional",
      "Recrutamento",
      "Execução letiva",
      "Avaliação",
      "Certificação"
    ],
    "tasks": [
      {
        "title": "Cerimónia de certificação",
        "description": "Diplomação e entrega",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Planeamento académico"
      },
      {
        "title": "Desenho curricular",
        "description": "Ementa, bibliografia e competências",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento académico"
      },
      {
        "title": "Aquisição de bibliografia",
        "description": "Compra de acervo",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Acompanhamento pedagógico",
        "description": "Mentoria e suporte",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Avaliações periódicas",
        "description": "Provas e trabalhos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Recrutamento"
      },
      {
        "title": "Aprovação no conselho académico",
        "description": "Colegiado e MEC",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Execução letiva"
      },
      {
        "title": "Edital de alunos",
        "description": "Inscrições e processo seletivo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução letiva"
      },
      {
        "title": "Recrutamento de professores",
        "description": "Edital e seleção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Treinamento docente em EAD",
        "description": "Capacitação metodológica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Setup de LMS",
        "description": "Configuração e cursos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Certificação"
      }
    ],
    "bestPractices": [
      "Envolva docentes desde o design curricular.",
      "LMS é meio, não fim — invista em metodologia.",
      "Avalie o aluno por competências, não só por nota.",
      "Mantenha comunicação ativa com pais/responsáveis.",
      "Use dados de evasão para intervir cedo."
    ],
    "kpis": [
      "Taxa de retenção",
      "Taxa de aprovação",
      "NPS alunos",
      "% Empregabilidade",
      "Avaliação MEC"
    ],
    "durationWeeks": 32,
    "teamSize": 22,
    "popularity": 67
  },
  {
    "id": "tpl-068",
    "name": "Construção de Campus Universitário",
    "industry": "Educação",
    "icon": "GraduationCap",
    "description": "Novo campus com salas e laboratórios",
    "methodology": "Agile",
    "phases": [
      "Planeamento académico",
      "Aprovação institucional",
      "Recrutamento",
      "Execução letiva",
      "Avaliação",
      "Certificação"
    ],
    "tasks": [
      {
        "title": "Aprovação no conselho académico",
        "description": "Colegiado e MEC",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Planeamento académico"
      },
      {
        "title": "Acompanhamento pedagógico",
        "description": "Mentoria e suporte",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Planeamento académico"
      },
      {
        "title": "Setup de LMS",
        "description": "Configuração e cursos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Edital de alunos",
        "description": "Inscrições e processo seletivo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Recrutamento de professores",
        "description": "Edital e seleção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Recrutamento"
      },
      {
        "title": "Avaliações periódicas",
        "description": "Provas e trabalhos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução letiva"
      },
      {
        "title": "Desenho curricular",
        "description": "Ementa, bibliografia e competências",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução letiva"
      },
      {
        "title": "Treinamento docente em EAD",
        "description": "Capacitação metodológica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Cerimónia de certificação",
        "description": "Diplomação e entrega",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Avaliação"
      },
      {
        "title": "Aquisição de bibliografia",
        "description": "Compra de acervo",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Certificação"
      }
    ],
    "bestPractices": [
      "Envolva docentes desde o design curricular.",
      "LMS é meio, não fim — invista em metodologia.",
      "Avalie o aluno por competências, não só por nota.",
      "Mantenha comunicação ativa com pais/responsáveis.",
      "Use dados de evasão para intervir cedo."
    ],
    "kpis": [
      "Taxa de retenção",
      "Taxa de aprovação",
      "NPS alunos",
      "% Empregabilidade",
      "Avaliação MEC"
    ],
    "durationWeeks": 32,
    "teamSize": 13,
    "popularity": 82
  },
  {
    "id": "tpl-069",
    "name": "Reforma Curricular",
    "industry": "Educação",
    "icon": "GraduationCap",
    "description": "Reformulação de cursos de graduação",
    "methodology": "Agile",
    "phases": [
      "Planeamento académico",
      "Aprovação institucional",
      "Recrutamento",
      "Execução letiva",
      "Avaliação",
      "Certificação"
    ],
    "tasks": [
      {
        "title": "Avaliações periódicas",
        "description": "Provas e trabalhos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento académico"
      },
      {
        "title": "Desenho curricular",
        "description": "Ementa, bibliografia e competências",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento académico"
      },
      {
        "title": "Acompanhamento pedagógico",
        "description": "Mentoria e suporte",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Cerimónia de certificação",
        "description": "Diplomação e entrega",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Recrutamento de professores",
        "description": "Edital e seleção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Recrutamento"
      },
      {
        "title": "Setup de LMS",
        "description": "Configuração e cursos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução letiva"
      },
      {
        "title": "Aquisição de bibliografia",
        "description": "Compra de acervo",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Execução letiva"
      },
      {
        "title": "Treinamento docente em EAD",
        "description": "Capacitação metodológica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Aprovação no conselho académico",
        "description": "Colegiado e MEC",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Avaliação"
      },
      {
        "title": "Edital de alunos",
        "description": "Inscrições e processo seletivo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Certificação"
      }
    ],
    "bestPractices": [
      "Envolva docentes desde o design curricular.",
      "LMS é meio, não fim — invista em metodologia.",
      "Avalie o aluno por competências, não só por nota.",
      "Mantenha comunicação ativa com pais/responsáveis.",
      "Use dados de evasão para intervir cedo."
    ],
    "kpis": [
      "Taxa de retenção",
      "Taxa de aprovação",
      "NPS alunos",
      "% Empregabilidade",
      "Avaliação MEC"
    ],
    "durationWeeks": 32,
    "teamSize": 17,
    "popularity": 43
  },
  {
    "id": "tpl-070",
    "name": "EAD Pós-graduação",
    "industry": "Educação",
    "icon": "GraduationCap",
    "description": "Lançamento de programa de pós a distância",
    "methodology": "Agile",
    "phases": [
      "Planeamento académico",
      "Aprovação institucional",
      "Recrutamento",
      "Execução letiva",
      "Avaliação",
      "Certificação"
    ],
    "tasks": [
      {
        "title": "Avaliações periódicas",
        "description": "Provas e trabalhos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento académico"
      },
      {
        "title": "Setup de LMS",
        "description": "Configuração e cursos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento académico"
      },
      {
        "title": "Acompanhamento pedagógico",
        "description": "Mentoria e suporte",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Cerimónia de certificação",
        "description": "Diplomação e entrega",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Edital de alunos",
        "description": "Inscrições e processo seletivo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Recrutamento"
      },
      {
        "title": "Desenho curricular",
        "description": "Ementa, bibliografia e competências",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução letiva"
      },
      {
        "title": "Aprovação no conselho académico",
        "description": "Colegiado e MEC",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Execução letiva"
      },
      {
        "title": "Treinamento docente em EAD",
        "description": "Capacitação metodológica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Aquisição de bibliografia",
        "description": "Compra de acervo",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Avaliação"
      },
      {
        "title": "Recrutamento de professores",
        "description": "Edital e seleção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Certificação"
      }
    ],
    "bestPractices": [
      "Envolva docentes desde o design curricular.",
      "LMS é meio, não fim — invista em metodologia.",
      "Avalie o aluno por competências, não só por nota.",
      "Mantenha comunicação ativa com pais/responsáveis.",
      "Use dados de evasão para intervir cedo."
    ],
    "kpis": [
      "Taxa de retenção",
      "Taxa de aprovação",
      "NPS alunos",
      "% Empregabilidade",
      "Avaliação MEC"
    ],
    "durationWeeks": 32,
    "teamSize": 19,
    "popularity": 47
  },
  {
    "id": "tpl-071",
    "name": "Programa de Bilinguismo",
    "industry": "Educação",
    "icon": "GraduationCap",
    "description": "Educação bilíngue em escolas",
    "methodology": "Waterfall",
    "phases": [
      "Planeamento académico",
      "Aprovação institucional",
      "Recrutamento",
      "Execução letiva",
      "Avaliação",
      "Certificação"
    ],
    "tasks": [
      {
        "title": "Cerimónia de certificação",
        "description": "Diplomação e entrega",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Planeamento académico"
      },
      {
        "title": "Edital de alunos",
        "description": "Inscrições e processo seletivo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento académico"
      },
      {
        "title": "Recrutamento de professores",
        "description": "Edital e seleção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Acompanhamento pedagógico",
        "description": "Mentoria e suporte",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Recrutamento"
      },
      {
        "title": "Aquisição de bibliografia",
        "description": "Compra de acervo",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Recrutamento"
      },
      {
        "title": "Desenho curricular",
        "description": "Ementa, bibliografia e competências",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução letiva"
      },
      {
        "title": "Avaliações periódicas",
        "description": "Provas e trabalhos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Setup de LMS",
        "description": "Configuração e cursos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Treinamento docente em EAD",
        "description": "Capacitação metodológica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Certificação"
      }
    ],
    "bestPractices": [
      "Envolva docentes desde o design curricular.",
      "LMS é meio, não fim — invista em metodologia.",
      "Avalie o aluno por competências, não só por nota.",
      "Mantenha comunicação ativa com pais/responsáveis.",
      "Use dados de evasão para intervir cedo."
    ],
    "kpis": [
      "Taxa de retenção",
      "Taxa de aprovação",
      "NPS alunos",
      "% Empregabilidade",
      "Avaliação MEC"
    ],
    "durationWeeks": 25,
    "teamSize": 18,
    "popularity": 100
  },
  {
    "id": "tpl-072",
    "name": "Olimpíada Nacional de Conhecimento",
    "industry": "Educação",
    "icon": "GraduationCap",
    "description": "Concurso académico nacional",
    "methodology": "Waterfall",
    "phases": [
      "Planeamento académico",
      "Aprovação institucional",
      "Recrutamento",
      "Execução letiva",
      "Avaliação",
      "Certificação"
    ],
    "tasks": [
      {
        "title": "Recrutamento de professores",
        "description": "Edital e seleção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento académico"
      },
      {
        "title": "Acompanhamento pedagógico",
        "description": "Mentoria e suporte",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Planeamento académico"
      },
      {
        "title": "Aquisição de bibliografia",
        "description": "Compra de acervo",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Avaliações periódicas",
        "description": "Provas e trabalhos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Recrutamento"
      },
      {
        "title": "Setup de LMS",
        "description": "Configuração e cursos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Recrutamento"
      },
      {
        "title": "Cerimónia de certificação",
        "description": "Diplomação e entrega",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Execução letiva"
      },
      {
        "title": "Edital de alunos",
        "description": "Inscrições e processo seletivo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Aprovação no conselho académico",
        "description": "Colegiado e MEC",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Avaliação"
      },
      {
        "title": "Treinamento docente em EAD",
        "description": "Capacitação metodológica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Certificação"
      }
    ],
    "bestPractices": [
      "Envolva docentes desde o design curricular.",
      "LMS é meio, não fim — invista em metodologia.",
      "Avalie o aluno por competências, não só por nota.",
      "Mantenha comunicação ativa com pais/responsáveis.",
      "Use dados de evasão para intervir cedo."
    ],
    "kpis": [
      "Taxa de retenção",
      "Taxa de aprovação",
      "NPS alunos",
      "% Empregabilidade",
      "Avaliação MEC"
    ],
    "durationWeeks": 27,
    "teamSize": 18,
    "popularity": 75
  },
  {
    "id": "tpl-073",
    "name": "Avaliação Externa Institucional",
    "industry": "Educação",
    "icon": "GraduationCap",
    "description": "MEC/agência de qualidade",
    "methodology": "Agile",
    "phases": [
      "Planeamento académico",
      "Aprovação institucional",
      "Recrutamento",
      "Execução letiva",
      "Avaliação",
      "Certificação"
    ],
    "tasks": [
      {
        "title": "Treinamento docente em EAD",
        "description": "Capacitação metodológica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Planeamento académico"
      },
      {
        "title": "Edital de alunos",
        "description": "Inscrições e processo seletivo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento académico"
      },
      {
        "title": "Recrutamento de professores",
        "description": "Edital e seleção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Cerimónia de certificação",
        "description": "Diplomação e entrega",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Desenho curricular",
        "description": "Ementa, bibliografia e competências",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Recrutamento"
      },
      {
        "title": "Acompanhamento pedagógico",
        "description": "Mentoria e suporte",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Execução letiva"
      },
      {
        "title": "Avaliações periódicas",
        "description": "Provas e trabalhos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução letiva"
      },
      {
        "title": "Aprovação no conselho académico",
        "description": "Colegiado e MEC",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Avaliação"
      },
      {
        "title": "Aquisição de bibliografia",
        "description": "Compra de acervo",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Avaliação"
      },
      {
        "title": "Setup de LMS",
        "description": "Configuração e cursos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Certificação"
      }
    ],
    "bestPractices": [
      "Envolva docentes desde o design curricular.",
      "LMS é meio, não fim — invista em metodologia.",
      "Avalie o aluno por competências, não só por nota.",
      "Mantenha comunicação ativa com pais/responsáveis.",
      "Use dados de evasão para intervir cedo."
    ],
    "kpis": [
      "Taxa de retenção",
      "Taxa de aprovação",
      "NPS alunos",
      "% Empregabilidade",
      "Avaliação MEC"
    ],
    "durationWeeks": 32,
    "teamSize": 13,
    "popularity": 93
  },
  {
    "id": "tpl-074",
    "name": "Robótica e STEAM nas Escolas",
    "industry": "Educação",
    "icon": "GraduationCap",
    "description": "Currículo de inovação",
    "methodology": "Agile",
    "phases": [
      "Planeamento académico",
      "Aprovação institucional",
      "Recrutamento",
      "Execução letiva",
      "Avaliação",
      "Certificação"
    ],
    "tasks": [
      {
        "title": "Cerimónia de certificação",
        "description": "Diplomação e entrega",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Planeamento académico"
      },
      {
        "title": "Acompanhamento pedagógico",
        "description": "Mentoria e suporte",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Planeamento académico"
      },
      {
        "title": "Recrutamento de professores",
        "description": "Edital e seleção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Edital de alunos",
        "description": "Inscrições e processo seletivo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Aquisição de bibliografia",
        "description": "Compra de acervo",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Recrutamento"
      },
      {
        "title": "Treinamento docente em EAD",
        "description": "Capacitação metodológica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Execução letiva"
      },
      {
        "title": "Avaliações periódicas",
        "description": "Provas e trabalhos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução letiva"
      },
      {
        "title": "Aprovação no conselho académico",
        "description": "Colegiado e MEC",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Avaliação"
      },
      {
        "title": "Setup de LMS",
        "description": "Configuração e cursos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Desenho curricular",
        "description": "Ementa, bibliografia e competências",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Certificação"
      }
    ],
    "bestPractices": [
      "Envolva docentes desde o design curricular.",
      "LMS é meio, não fim — invista em metodologia.",
      "Avalie o aluno por competências, não só por nota.",
      "Mantenha comunicação ativa com pais/responsáveis.",
      "Use dados de evasão para intervir cedo."
    ],
    "kpis": [
      "Taxa de retenção",
      "Taxa de aprovação",
      "NPS alunos",
      "% Empregabilidade",
      "Avaliação MEC"
    ],
    "durationWeeks": 32,
    "teamSize": 10,
    "popularity": 84
  },
  {
    "id": "tpl-075",
    "name": "Programa de Educação Continuada",
    "industry": "Educação",
    "icon": "GraduationCap",
    "description": "Capacitação de professores",
    "methodology": "Agile",
    "phases": [
      "Planeamento académico",
      "Aprovação institucional",
      "Recrutamento",
      "Execução letiva",
      "Avaliação",
      "Certificação"
    ],
    "tasks": [
      {
        "title": "Cerimónia de certificação",
        "description": "Diplomação e entrega",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Planeamento académico"
      },
      {
        "title": "Treinamento docente em EAD",
        "description": "Capacitação metodológica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Planeamento académico"
      },
      {
        "title": "Edital de alunos",
        "description": "Inscrições e processo seletivo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Avaliações periódicas",
        "description": "Provas e trabalhos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Acompanhamento pedagógico",
        "description": "Mentoria e suporte",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Recrutamento"
      },
      {
        "title": "Desenho curricular",
        "description": "Ementa, bibliografia e competências",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução letiva"
      },
      {
        "title": "Recrutamento de professores",
        "description": "Edital e seleção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução letiva"
      },
      {
        "title": "Setup de LMS",
        "description": "Configuração e cursos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Aprovação no conselho académico",
        "description": "Colegiado e MEC",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Avaliação"
      },
      {
        "title": "Aquisição de bibliografia",
        "description": "Compra de acervo",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Certificação"
      }
    ],
    "bestPractices": [
      "Envolva docentes desde o design curricular.",
      "LMS é meio, não fim — invista em metodologia.",
      "Avalie o aluno por competências, não só por nota.",
      "Mantenha comunicação ativa com pais/responsáveis.",
      "Use dados de evasão para intervir cedo."
    ],
    "kpis": [
      "Taxa de retenção",
      "Taxa de aprovação",
      "NPS alunos",
      "% Empregabilidade",
      "Avaliação MEC"
    ],
    "durationWeeks": 32,
    "teamSize": 25,
    "popularity": 90
  },
  {
    "id": "tpl-076",
    "name": "Implementação de LMS — Pequena Escala",
    "industry": "Educação",
    "icon": "GraduationCap",
    "description": "Moodle/Canvas para universidade (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Planeamento académico",
      "Aprovação institucional",
      "Recrutamento",
      "Execução letiva",
      "Avaliação",
      "Certificação"
    ],
    "tasks": [
      {
        "title": "Acompanhamento pedagógico",
        "description": "Mentoria e suporte",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Planeamento académico"
      },
      {
        "title": "Desenho curricular",
        "description": "Ementa, bibliografia e competências",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento académico"
      },
      {
        "title": "Recrutamento de professores",
        "description": "Edital e seleção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Aquisição de bibliografia",
        "description": "Compra de acervo",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Treinamento docente em EAD",
        "description": "Capacitação metodológica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Recrutamento"
      },
      {
        "title": "Cerimónia de certificação",
        "description": "Diplomação e entrega",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Execução letiva"
      },
      {
        "title": "Avaliações periódicas",
        "description": "Provas e trabalhos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução letiva"
      },
      {
        "title": "Aprovação no conselho académico",
        "description": "Colegiado e MEC",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Avaliação"
      },
      {
        "title": "Edital de alunos",
        "description": "Inscrições e processo seletivo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Setup de LMS",
        "description": "Configuração e cursos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Certificação"
      }
    ],
    "bestPractices": [
      "Envolva docentes desde o design curricular.",
      "LMS é meio, não fim — invista em metodologia.",
      "Avalie o aluno por competências, não só por nota.",
      "Mantenha comunicação ativa com pais/responsáveis.",
      "Use dados de evasão para intervir cedo."
    ],
    "kpis": [
      "Taxa de retenção",
      "Taxa de aprovação",
      "NPS alunos",
      "% Empregabilidade",
      "Avaliação MEC"
    ],
    "durationWeeks": 32,
    "teamSize": 8,
    "popularity": 66
  },
  {
    "id": "tpl-077",
    "name": "Programa de Bolsas — Pequena Escala",
    "industry": "Educação",
    "icon": "GraduationCap",
    "description": "Bolsas de mérito e socioeconómicas (Pequena Escala)",
    "methodology": "Agile",
    "phases": [
      "Planeamento académico",
      "Aprovação institucional",
      "Recrutamento",
      "Execução letiva",
      "Avaliação",
      "Certificação"
    ],
    "tasks": [
      {
        "title": "Aprovação no conselho académico",
        "description": "Colegiado e MEC",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Planeamento académico"
      },
      {
        "title": "Acompanhamento pedagógico",
        "description": "Mentoria e suporte",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Planeamento académico"
      },
      {
        "title": "Aquisição de bibliografia",
        "description": "Compra de acervo",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Recrutamento de professores",
        "description": "Edital e seleção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Avaliações periódicas",
        "description": "Provas e trabalhos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Recrutamento"
      },
      {
        "title": "Edital de alunos",
        "description": "Inscrições e processo seletivo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução letiva"
      },
      {
        "title": "Desenho curricular",
        "description": "Ementa, bibliografia e competências",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução letiva"
      },
      {
        "title": "Cerimónia de certificação",
        "description": "Diplomação e entrega",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Avaliação"
      },
      {
        "title": "Treinamento docente em EAD",
        "description": "Capacitação metodológica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Setup de LMS",
        "description": "Configuração e cursos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Certificação"
      }
    ],
    "bestPractices": [
      "Envolva docentes desde o design curricular.",
      "LMS é meio, não fim — invista em metodologia.",
      "Avalie o aluno por competências, não só por nota.",
      "Mantenha comunicação ativa com pais/responsáveis.",
      "Use dados de evasão para intervir cedo."
    ],
    "kpis": [
      "Taxa de retenção",
      "Taxa de aprovação",
      "NPS alunos",
      "% Empregabilidade",
      "Avaliação MEC"
    ],
    "durationWeeks": 32,
    "teamSize": 21,
    "popularity": 42
  },
  {
    "id": "tpl-078",
    "name": "Construção de Campus Universitário — Pequena Escala",
    "industry": "Educação",
    "icon": "GraduationCap",
    "description": "Novo campus com salas e laboratórios (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Planeamento académico",
      "Aprovação institucional",
      "Recrutamento",
      "Execução letiva",
      "Avaliação",
      "Certificação"
    ],
    "tasks": [
      {
        "title": "Aprovação no conselho académico",
        "description": "Colegiado e MEC",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Planeamento académico"
      },
      {
        "title": "Edital de alunos",
        "description": "Inscrições e processo seletivo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento académico"
      },
      {
        "title": "Aquisição de bibliografia",
        "description": "Compra de acervo",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Cerimónia de certificação",
        "description": "Diplomação e entrega",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Aprovação institucional"
      },
      {
        "title": "Setup de LMS",
        "description": "Configuração e cursos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Recrutamento"
      },
      {
        "title": "Desenho curricular",
        "description": "Ementa, bibliografia e competências",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução letiva"
      },
      {
        "title": "Avaliações periódicas",
        "description": "Provas e trabalhos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução letiva"
      },
      {
        "title": "Acompanhamento pedagógico",
        "description": "Mentoria e suporte",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Recrutamento de professores",
        "description": "Edital e seleção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Treinamento docente em EAD",
        "description": "Capacitação metodológica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Certificação"
      }
    ],
    "bestPractices": [
      "Envolva docentes desde o design curricular.",
      "LMS é meio, não fim — invista em metodologia.",
      "Avalie o aluno por competências, não só por nota.",
      "Mantenha comunicação ativa com pais/responsáveis.",
      "Use dados de evasão para intervir cedo."
    ],
    "kpis": [
      "Taxa de retenção",
      "Taxa de aprovação",
      "NPS alunos",
      "% Empregabilidade",
      "Avaliação MEC"
    ],
    "durationWeeks": 32,
    "teamSize": 13,
    "popularity": 97
  },
  {
    "id": "tpl-079",
    "name": "Implementação Basileia III",
    "industry": "Finanças",
    "icon": "Landmark",
    "description": "Conformidade prudencial bancária",
    "methodology": "PRINCE2",
    "phases": [
      "Strategy",
      "Due diligence",
      "Estruturação",
      "Aprovações regulatórias",
      "Implementação",
      "Go-live"
    ],
    "tasks": [
      {
        "title": "Análise de viabilidade económica",
        "description": "Business case e ROI",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Strategy"
      },
      {
        "title": "Implementação de controles internos",
        "description": "Matriz COSO e SOX",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Strategy"
      },
      {
        "title": "Comunicação ao mercado",
        "description": "Press release e IR",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Due diligence"
      },
      {
        "title": "Due diligence legal",
        "description": "Análise de contratos e contingências",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Estruturação"
      },
      {
        "title": "Treinamento de equipa comercial",
        "description": "Capacitação em novo produto",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Estruturação"
      },
      {
        "title": "Auditoria pré go-live",
        "description": "Big4 independente",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Aprovação BNA/BCB",
        "description": "Submissão ao regulador central",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Implementação"
      },
      {
        "title": "Setup de monitorização AML",
        "description": "Regras e alertas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Modelagem de risco",
        "description": "VaR, stress test e cenários",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Go-live"
      }
    ],
    "bestPractices": [
      "Compliance regulatório é caminho crítico — antecipe.",
      "Documente trilhas de auditoria desde o desenho.",
      "Faça stress test em cenários extremos antes do go-live.",
      "Tenha plano de contingência para fraude e ciberataques.",
      "Comunicação ao mercado deve ser sincronizada com legal."
    ],
    "kpis": [
      "ROE",
      "Cost-income ratio",
      "NPL ratio",
      "Tier 1 capital",
      "Tempo de aprovação regulatória"
    ],
    "durationWeeks": 30,
    "teamSize": 22,
    "popularity": 83
  },
  {
    "id": "tpl-080",
    "name": "Lançamento de Cartão Crédito",
    "industry": "Finanças",
    "icon": "Landmark",
    "description": "Novo produto de crédito",
    "methodology": "PRINCE2",
    "phases": [
      "Strategy",
      "Due diligence",
      "Estruturação",
      "Aprovações regulatórias",
      "Implementação",
      "Go-live"
    ],
    "tasks": [
      {
        "title": "Due diligence legal",
        "description": "Análise de contratos e contingências",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Strategy"
      },
      {
        "title": "Comunicação ao mercado",
        "description": "Press release e IR",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Strategy"
      },
      {
        "title": "Due diligence financeira",
        "description": "Análise contábil e fiscal",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Due diligence"
      },
      {
        "title": "Modelagem de risco",
        "description": "VaR, stress test e cenários",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Due diligence"
      },
      {
        "title": "Aprovação BNA/BCB",
        "description": "Submissão ao regulador central",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Estruturação"
      },
      {
        "title": "Treinamento de equipa comercial",
        "description": "Capacitação em novo produto",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Setup de monitorização AML",
        "description": "Regras e alertas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Implementação de controles internos",
        "description": "Matriz COSO e SOX",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Análise de viabilidade económica",
        "description": "Business case e ROI",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Auditoria pré go-live",
        "description": "Big4 independente",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Go-live"
      }
    ],
    "bestPractices": [
      "Compliance regulatório é caminho crítico — antecipe.",
      "Documente trilhas de auditoria desde o desenho.",
      "Faça stress test em cenários extremos antes do go-live.",
      "Tenha plano de contingência para fraude e ciberataques.",
      "Comunicação ao mercado deve ser sincronizada com legal."
    ],
    "kpis": [
      "ROE",
      "Cost-income ratio",
      "NPL ratio",
      "Tier 1 capital",
      "Tempo de aprovação regulatória"
    ],
    "durationWeeks": 35,
    "teamSize": 24,
    "popularity": 56
  },
  {
    "id": "tpl-081",
    "name": "Migração Core Banking",
    "industry": "Finanças",
    "icon": "Landmark",
    "description": "Substituição de sistema central",
    "methodology": "PRINCE2",
    "phases": [
      "Strategy",
      "Due diligence",
      "Estruturação",
      "Aprovações regulatórias",
      "Implementação",
      "Go-live"
    ],
    "tasks": [
      {
        "title": "Modelagem de risco",
        "description": "VaR, stress test e cenários",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Strategy"
      },
      {
        "title": "Análise de viabilidade económica",
        "description": "Business case e ROI",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Strategy"
      },
      {
        "title": "Setup de monitorização AML",
        "description": "Regras e alertas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Due diligence"
      },
      {
        "title": "Due diligence legal",
        "description": "Análise de contratos e contingências",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Due diligence"
      },
      {
        "title": "Implementação de controles internos",
        "description": "Matriz COSO e SOX",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Estruturação"
      },
      {
        "title": "Comunicação ao mercado",
        "description": "Press release e IR",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Due diligence financeira",
        "description": "Análise contábil e fiscal",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Auditoria pré go-live",
        "description": "Big4 independente",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Aprovação BNA/BCB",
        "description": "Submissão ao regulador central",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Implementação"
      },
      {
        "title": "Treinamento de equipa comercial",
        "description": "Capacitação em novo produto",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Go-live"
      }
    ],
    "bestPractices": [
      "Compliance regulatório é caminho crítico — antecipe.",
      "Documente trilhas de auditoria desde o desenho.",
      "Faça stress test em cenários extremos antes do go-live.",
      "Tenha plano de contingência para fraude e ciberataques.",
      "Comunicação ao mercado deve ser sincronizada com legal."
    ],
    "kpis": [
      "ROE",
      "Cost-income ratio",
      "NPL ratio",
      "Tier 1 capital",
      "Tempo de aprovação regulatória"
    ],
    "durationWeeks": 35,
    "teamSize": 24,
    "popularity": 67
  },
  {
    "id": "tpl-082",
    "name": "Programa Anti-Lavagem (AML)",
    "industry": "Finanças",
    "icon": "Landmark",
    "description": "Compliance KYC e monitorização",
    "methodology": "PRINCE2",
    "phases": [
      "Strategy",
      "Due diligence",
      "Estruturação",
      "Aprovações regulatórias",
      "Implementação",
      "Go-live"
    ],
    "tasks": [
      {
        "title": "Setup de monitorização AML",
        "description": "Regras e alertas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Strategy"
      },
      {
        "title": "Modelagem de risco",
        "description": "VaR, stress test e cenários",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Strategy"
      },
      {
        "title": "Aprovação BNA/BCB",
        "description": "Submissão ao regulador central",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Due diligence"
      },
      {
        "title": "Comunicação ao mercado",
        "description": "Press release e IR",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Due diligence"
      },
      {
        "title": "Treinamento de equipa comercial",
        "description": "Capacitação em novo produto",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Estruturação"
      },
      {
        "title": "Análise de viabilidade económica",
        "description": "Business case e ROI",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Due diligence financeira",
        "description": "Análise contábil e fiscal",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Implementação de controles internos",
        "description": "Matriz COSO e SOX",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Due diligence legal",
        "description": "Análise de contratos e contingências",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Auditoria pré go-live",
        "description": "Big4 independente",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Go-live"
      }
    ],
    "bestPractices": [
      "Compliance regulatório é caminho crítico — antecipe.",
      "Documente trilhas de auditoria desde o desenho.",
      "Faça stress test em cenários extremos antes do go-live.",
      "Tenha plano de contingência para fraude e ciberataques.",
      "Comunicação ao mercado deve ser sincronizada com legal."
    ],
    "kpis": [
      "ROE",
      "Cost-income ratio",
      "NPL ratio",
      "Tier 1 capital",
      "Tempo de aprovação regulatória"
    ],
    "durationWeeks": 35,
    "teamSize": 4,
    "popularity": 93
  },
  {
    "id": "tpl-083",
    "name": "Open Banking/PIX",
    "industry": "Finanças",
    "icon": "Landmark",
    "description": "Implementação de pagamentos instantâneos",
    "methodology": "Waterfall",
    "phases": [
      "Strategy",
      "Due diligence",
      "Estruturação",
      "Aprovações regulatórias",
      "Implementação",
      "Go-live"
    ],
    "tasks": [
      {
        "title": "Modelagem de risco",
        "description": "VaR, stress test e cenários",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Strategy"
      },
      {
        "title": "Análise de viabilidade económica",
        "description": "Business case e ROI",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Strategy"
      },
      {
        "title": "Auditoria pré go-live",
        "description": "Big4 independente",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Due diligence"
      },
      {
        "title": "Comunicação ao mercado",
        "description": "Press release e IR",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Due diligence"
      },
      {
        "title": "Implementação de controles internos",
        "description": "Matriz COSO e SOX",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Estruturação"
      },
      {
        "title": "Aprovação BNA/BCB",
        "description": "Submissão ao regulador central",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Due diligence legal",
        "description": "Análise de contratos e contingências",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Setup de monitorização AML",
        "description": "Regras e alertas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Due diligence financeira",
        "description": "Análise contábil e fiscal",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Treinamento de equipa comercial",
        "description": "Capacitação em novo produto",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Go-live"
      }
    ],
    "bestPractices": [
      "Compliance regulatório é caminho crítico — antecipe.",
      "Documente trilhas de auditoria desde o desenho.",
      "Faça stress test em cenários extremos antes do go-live.",
      "Tenha plano de contingência para fraude e ciberataques.",
      "Comunicação ao mercado deve ser sincronizada com legal."
    ],
    "kpis": [
      "ROE",
      "Cost-income ratio",
      "NPL ratio",
      "Tier 1 capital",
      "Tempo de aprovação regulatória"
    ],
    "durationWeeks": 35,
    "teamSize": 23,
    "popularity": 56
  },
  {
    "id": "tpl-084",
    "name": "IPO de empresa",
    "industry": "Finanças",
    "icon": "Landmark",
    "description": "Abertura de capital em bolsa",
    "methodology": "PRINCE2",
    "phases": [
      "Strategy",
      "Due diligence",
      "Estruturação",
      "Aprovações regulatórias",
      "Implementação",
      "Go-live"
    ],
    "tasks": [
      {
        "title": "Due diligence financeira",
        "description": "Análise contábil e fiscal",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Strategy"
      },
      {
        "title": "Análise de viabilidade económica",
        "description": "Business case e ROI",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Strategy"
      },
      {
        "title": "Modelagem de risco",
        "description": "VaR, stress test e cenários",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Due diligence"
      },
      {
        "title": "Treinamento de equipa comercial",
        "description": "Capacitação em novo produto",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Due diligence"
      },
      {
        "title": "Aprovação BNA/BCB",
        "description": "Submissão ao regulador central",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Estruturação"
      },
      {
        "title": "Auditoria pré go-live",
        "description": "Big4 independente",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Due diligence legal",
        "description": "Análise de contratos e contingências",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Implementação de controles internos",
        "description": "Matriz COSO e SOX",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Setup de monitorização AML",
        "description": "Regras e alertas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Comunicação ao mercado",
        "description": "Press release e IR",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Go-live"
      }
    ],
    "bestPractices": [
      "Compliance regulatório é caminho crítico — antecipe.",
      "Documente trilhas de auditoria desde o desenho.",
      "Faça stress test em cenários extremos antes do go-live.",
      "Tenha plano de contingência para fraude e ciberataques.",
      "Comunicação ao mercado deve ser sincronizada com legal."
    ],
    "kpis": [
      "ROE",
      "Cost-income ratio",
      "NPL ratio",
      "Tier 1 capital",
      "Tempo de aprovação regulatória"
    ],
    "durationWeeks": 35,
    "teamSize": 14,
    "popularity": 87
  },
  {
    "id": "tpl-085",
    "name": "M&A — Aquisição estratégica",
    "industry": "Finanças",
    "icon": "Landmark",
    "description": "Due diligence e integração",
    "methodology": "PRINCE2",
    "phases": [
      "Strategy",
      "Due diligence",
      "Estruturação",
      "Aprovações regulatórias",
      "Implementação",
      "Go-live"
    ],
    "tasks": [
      {
        "title": "Due diligence legal",
        "description": "Análise de contratos e contingências",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Strategy"
      },
      {
        "title": "Aprovação BNA/BCB",
        "description": "Submissão ao regulador central",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Strategy"
      },
      {
        "title": "Comunicação ao mercado",
        "description": "Press release e IR",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Due diligence"
      },
      {
        "title": "Treinamento de equipa comercial",
        "description": "Capacitação em novo produto",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Due diligence"
      },
      {
        "title": "Modelagem de risco",
        "description": "VaR, stress test e cenários",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Estruturação"
      },
      {
        "title": "Setup de monitorização AML",
        "description": "Regras e alertas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Implementação de controles internos",
        "description": "Matriz COSO e SOX",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Análise de viabilidade económica",
        "description": "Business case e ROI",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Due diligence financeira",
        "description": "Análise contábil e fiscal",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Auditoria pré go-live",
        "description": "Big4 independente",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Go-live"
      }
    ],
    "bestPractices": [
      "Compliance regulatório é caminho crítico — antecipe.",
      "Documente trilhas de auditoria desde o desenho.",
      "Faça stress test em cenários extremos antes do go-live.",
      "Tenha plano de contingência para fraude e ciberataques.",
      "Comunicação ao mercado deve ser sincronizada com legal."
    ],
    "kpis": [
      "ROE",
      "Cost-income ratio",
      "NPL ratio",
      "Tier 1 capital",
      "Tempo de aprovação regulatória"
    ],
    "durationWeeks": 35,
    "teamSize": 14,
    "popularity": 91
  },
  {
    "id": "tpl-086",
    "name": "Plataforma de Trading Algorítmico",
    "industry": "Finanças",
    "icon": "Landmark",
    "description": "Sistema de execução automatizada",
    "methodology": "Waterfall",
    "phases": [
      "Strategy",
      "Due diligence",
      "Estruturação",
      "Aprovações regulatórias",
      "Implementação",
      "Go-live"
    ],
    "tasks": [
      {
        "title": "Setup de monitorização AML",
        "description": "Regras e alertas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Strategy"
      },
      {
        "title": "Due diligence financeira",
        "description": "Análise contábil e fiscal",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Strategy"
      },
      {
        "title": "Due diligence legal",
        "description": "Análise de contratos e contingências",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Due diligence"
      },
      {
        "title": "Treinamento de equipa comercial",
        "description": "Capacitação em novo produto",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Estruturação"
      },
      {
        "title": "Auditoria pré go-live",
        "description": "Big4 independente",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Estruturação"
      },
      {
        "title": "Aprovação BNA/BCB",
        "description": "Submissão ao regulador central",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Comunicação ao mercado",
        "description": "Press release e IR",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Implementação"
      },
      {
        "title": "Análise de viabilidade económica",
        "description": "Business case e ROI",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Implementação de controles internos",
        "description": "Matriz COSO e SOX",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Go-live"
      }
    ],
    "bestPractices": [
      "Compliance regulatório é caminho crítico — antecipe.",
      "Documente trilhas de auditoria desde o desenho.",
      "Faça stress test em cenários extremos antes do go-live.",
      "Tenha plano de contingência para fraude e ciberataques.",
      "Comunicação ao mercado deve ser sincronizada com legal."
    ],
    "kpis": [
      "ROE",
      "Cost-income ratio",
      "NPL ratio",
      "Tier 1 capital",
      "Tempo de aprovação regulatória"
    ],
    "durationWeeks": 32,
    "teamSize": 12,
    "popularity": 74
  },
  {
    "id": "tpl-087",
    "name": "Programa de Risco de Crédito",
    "industry": "Finanças",
    "icon": "Landmark",
    "description": "Modelos de scoring",
    "methodology": "PRINCE2",
    "phases": [
      "Strategy",
      "Due diligence",
      "Estruturação",
      "Aprovações regulatórias",
      "Implementação",
      "Go-live"
    ],
    "tasks": [
      {
        "title": "Setup de monitorização AML",
        "description": "Regras e alertas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Strategy"
      },
      {
        "title": "Implementação de controles internos",
        "description": "Matriz COSO e SOX",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Strategy"
      },
      {
        "title": "Modelagem de risco",
        "description": "VaR, stress test e cenários",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Due diligence"
      },
      {
        "title": "Comunicação ao mercado",
        "description": "Press release e IR",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Estruturação"
      },
      {
        "title": "Aprovação BNA/BCB",
        "description": "Submissão ao regulador central",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Estruturação"
      },
      {
        "title": "Due diligence legal",
        "description": "Análise de contratos e contingências",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Análise de viabilidade económica",
        "description": "Business case e ROI",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Treinamento de equipa comercial",
        "description": "Capacitação em novo produto",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Auditoria pré go-live",
        "description": "Big4 independente",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Go-live"
      }
    ],
    "bestPractices": [
      "Compliance regulatório é caminho crítico — antecipe.",
      "Documente trilhas de auditoria desde o desenho.",
      "Faça stress test em cenários extremos antes do go-live.",
      "Tenha plano de contingência para fraude e ciberataques.",
      "Comunicação ao mercado deve ser sincronizada com legal."
    ],
    "kpis": [
      "ROE",
      "Cost-income ratio",
      "NPL ratio",
      "Tier 1 capital",
      "Tempo de aprovação regulatória"
    ],
    "durationWeeks": 30,
    "teamSize": 4,
    "popularity": 79
  },
  {
    "id": "tpl-088",
    "name": "Auditoria SOX",
    "industry": "Finanças",
    "icon": "Landmark",
    "description": "Conformidade Sarbanes-Oxley",
    "methodology": "Waterfall",
    "phases": [
      "Strategy",
      "Due diligence",
      "Estruturação",
      "Aprovações regulatórias",
      "Implementação",
      "Go-live"
    ],
    "tasks": [
      {
        "title": "Implementação de controles internos",
        "description": "Matriz COSO e SOX",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Strategy"
      },
      {
        "title": "Aprovação BNA/BCB",
        "description": "Submissão ao regulador central",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Strategy"
      },
      {
        "title": "Due diligence financeira",
        "description": "Análise contábil e fiscal",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Due diligence"
      },
      {
        "title": "Comunicação ao mercado",
        "description": "Press release e IR",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Due diligence"
      },
      {
        "title": "Auditoria pré go-live",
        "description": "Big4 independente",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Estruturação"
      },
      {
        "title": "Due diligence legal",
        "description": "Análise de contratos e contingências",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Treinamento de equipa comercial",
        "description": "Capacitação em novo produto",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Análise de viabilidade económica",
        "description": "Business case e ROI",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Modelagem de risco",
        "description": "VaR, stress test e cenários",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Setup de monitorização AML",
        "description": "Regras e alertas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Go-live"
      }
    ],
    "bestPractices": [
      "Compliance regulatório é caminho crítico — antecipe.",
      "Documente trilhas de auditoria desde o desenho.",
      "Faça stress test em cenários extremos antes do go-live.",
      "Tenha plano de contingência para fraude e ciberataques.",
      "Comunicação ao mercado deve ser sincronizada com legal."
    ],
    "kpis": [
      "ROE",
      "Cost-income ratio",
      "NPL ratio",
      "Tier 1 capital",
      "Tempo de aprovação regulatória"
    ],
    "durationWeeks": 35,
    "teamSize": 13,
    "popularity": 71
  },
  {
    "id": "tpl-089",
    "name": "Implementação Basileia III — Pequena Escala",
    "industry": "Finanças",
    "icon": "Landmark",
    "description": "Conformidade prudencial bancária (Pequena Escala)",
    "methodology": "PRINCE2",
    "phases": [
      "Strategy",
      "Due diligence",
      "Estruturação",
      "Aprovações regulatórias",
      "Implementação",
      "Go-live"
    ],
    "tasks": [
      {
        "title": "Due diligence financeira",
        "description": "Análise contábil e fiscal",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Strategy"
      },
      {
        "title": "Aprovação BNA/BCB",
        "description": "Submissão ao regulador central",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Strategy"
      },
      {
        "title": "Due diligence legal",
        "description": "Análise de contratos e contingências",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Due diligence"
      },
      {
        "title": "Auditoria pré go-live",
        "description": "Big4 independente",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Estruturação"
      },
      {
        "title": "Treinamento de equipa comercial",
        "description": "Capacitação em novo produto",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Estruturação"
      },
      {
        "title": "Setup de monitorização AML",
        "description": "Regras e alertas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Implementação de controles internos",
        "description": "Matriz COSO e SOX",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Modelagem de risco",
        "description": "VaR, stress test e cenários",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Análise de viabilidade económica",
        "description": "Business case e ROI",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Go-live"
      }
    ],
    "bestPractices": [
      "Compliance regulatório é caminho crítico — antecipe.",
      "Documente trilhas de auditoria desde o desenho.",
      "Faça stress test em cenários extremos antes do go-live.",
      "Tenha plano de contingência para fraude e ciberataques.",
      "Comunicação ao mercado deve ser sincronizada com legal."
    ],
    "kpis": [
      "ROE",
      "Cost-income ratio",
      "NPL ratio",
      "Tier 1 capital",
      "Tempo de aprovação regulatória"
    ],
    "durationWeeks": 34,
    "teamSize": 24,
    "popularity": 46
  },
  {
    "id": "tpl-090",
    "name": "Lançamento de Cartão Crédito — Pequena Escala",
    "industry": "Finanças",
    "icon": "Landmark",
    "description": "Novo produto de crédito (Pequena Escala)",
    "methodology": "PRINCE2",
    "phases": [
      "Strategy",
      "Due diligence",
      "Estruturação",
      "Aprovações regulatórias",
      "Implementação",
      "Go-live"
    ],
    "tasks": [
      {
        "title": "Comunicação ao mercado",
        "description": "Press release e IR",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Strategy"
      },
      {
        "title": "Treinamento de equipa comercial",
        "description": "Capacitação em novo produto",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Strategy"
      },
      {
        "title": "Modelagem de risco",
        "description": "VaR, stress test e cenários",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Due diligence"
      },
      {
        "title": "Análise de viabilidade económica",
        "description": "Business case e ROI",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Due diligence"
      },
      {
        "title": "Implementação de controles internos",
        "description": "Matriz COSO e SOX",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Estruturação"
      },
      {
        "title": "Due diligence legal",
        "description": "Análise de contratos e contingências",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Due diligence financeira",
        "description": "Análise contábil e fiscal",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Aprovação BNA/BCB",
        "description": "Submissão ao regulador central",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Implementação"
      },
      {
        "title": "Setup de monitorização AML",
        "description": "Regras e alertas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Auditoria pré go-live",
        "description": "Big4 independente",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Go-live"
      }
    ],
    "bestPractices": [
      "Compliance regulatório é caminho crítico — antecipe.",
      "Documente trilhas de auditoria desde o desenho.",
      "Faça stress test em cenários extremos antes do go-live.",
      "Tenha plano de contingência para fraude e ciberataques.",
      "Comunicação ao mercado deve ser sincronizada com legal."
    ],
    "kpis": [
      "ROE",
      "Cost-income ratio",
      "NPL ratio",
      "Tier 1 capital",
      "Tempo de aprovação regulatória"
    ],
    "durationWeeks": 35,
    "teamSize": 7,
    "popularity": 83
  },
  {
    "id": "tpl-091",
    "name": "Migração Core Banking — Pequena Escala",
    "industry": "Finanças",
    "icon": "Landmark",
    "description": "Substituição de sistema central (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Strategy",
      "Due diligence",
      "Estruturação",
      "Aprovações regulatórias",
      "Implementação",
      "Go-live"
    ],
    "tasks": [
      {
        "title": "Auditoria pré go-live",
        "description": "Big4 independente",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Strategy"
      },
      {
        "title": "Implementação de controles internos",
        "description": "Matriz COSO e SOX",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Strategy"
      },
      {
        "title": "Análise de viabilidade económica",
        "description": "Business case e ROI",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Due diligence"
      },
      {
        "title": "Aprovação BNA/BCB",
        "description": "Submissão ao regulador central",
        "priority": "urgent",
        "estimatedDays": 60,
        "phase": "Due diligence"
      },
      {
        "title": "Due diligence legal",
        "description": "Análise de contratos e contingências",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Estruturação"
      },
      {
        "title": "Due diligence financeira",
        "description": "Análise contábil e fiscal",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Setup de monitorização AML",
        "description": "Regras e alertas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aprovações regulatórias"
      },
      {
        "title": "Modelagem de risco",
        "description": "VaR, stress test e cenários",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Treinamento de equipa comercial",
        "description": "Capacitação em novo produto",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Comunicação ao mercado",
        "description": "Press release e IR",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Go-live"
      }
    ],
    "bestPractices": [
      "Compliance regulatório é caminho crítico — antecipe.",
      "Documente trilhas de auditoria desde o desenho.",
      "Faça stress test em cenários extremos antes do go-live.",
      "Tenha plano de contingência para fraude e ciberataques.",
      "Comunicação ao mercado deve ser sincronizada com legal."
    ],
    "kpis": [
      "ROE",
      "Cost-income ratio",
      "NPL ratio",
      "Tier 1 capital",
      "Tempo de aprovação regulatória"
    ],
    "durationWeeks": 35,
    "teamSize": 5,
    "popularity": 90
  },
  {
    "id": "tpl-092",
    "name": "Abertura de Loja Física Flagship",
    "industry": "Varejo & E-commerce",
    "icon": "ShoppingBag",
    "description": "Loja conceito de marca",
    "methodology": "Agile",
    "phases": [
      "Pesquisa de mercado",
      "Sourcing",
      "Setup",
      "Pré-lançamento",
      "Lançamento",
      "Operação contínua"
    ],
    "tasks": [
      {
        "title": "Integração ERP/PDV",
        "description": "Conexão de estoque e vendas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Setup de plataforma e-commerce",
        "description": "Shopify/VTEX/Magento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Análise pós-lançamento",
        "description": "KPIs e ajustes",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Sourcing"
      },
      {
        "title": "Estudo de localização",
        "description": "Análise de fluxo e concorrência",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sourcing"
      },
      {
        "title": "Onboarding de fornecedores",
        "description": "Cadastro e contratos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Setup"
      },
      {
        "title": "Negociação de imóvel/contrato",
        "description": "Locação e adequação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Curadoria de catálogo",
        "description": "Seleção de produtos e fotos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Campanha de mídia digital",
        "description": "Google/Meta Ads e SEO",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Lançamento"
      },
      {
        "title": "Treinamento de equipa de loja",
        "description": "Atendimento e operação",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Lançamento"
      },
      {
        "title": "Soft launch",
        "description": "Operação assistida inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Operação contínua"
      }
    ],
    "bestPractices": [
      "Conheça profundamente sua persona antes de qualquer pixel.",
      "Otimize checkout — cada step a menos é mais conversão.",
      "Logística reversa é parte da experiência do cliente.",
      "Use dados de comportamento para personalizar ofertas.",
      "Black Friday se planeja em agosto, não em novembro."
    ],
    "kpis": [
      "Conversion rate",
      "Ticket médio",
      "CAC vs LTV",
      "NPS",
      "Sell-through rate"
    ],
    "durationWeeks": 23,
    "teamSize": 12,
    "popularity": 94
  },
  {
    "id": "tpl-093",
    "name": "Lançamento de E-commerce",
    "industry": "Varejo & E-commerce",
    "icon": "ShoppingBag",
    "description": "Loja online com checkout",
    "methodology": "Agile",
    "phases": [
      "Pesquisa de mercado",
      "Sourcing",
      "Setup",
      "Pré-lançamento",
      "Lançamento",
      "Operação contínua"
    ],
    "tasks": [
      {
        "title": "Setup de plataforma e-commerce",
        "description": "Shopify/VTEX/Magento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Soft launch",
        "description": "Operação assistida inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Onboarding de fornecedores",
        "description": "Cadastro e contratos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Sourcing"
      },
      {
        "title": "Campanha de mídia digital",
        "description": "Google/Meta Ads e SEO",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sourcing"
      },
      {
        "title": "Negociação de imóvel/contrato",
        "description": "Locação e adequação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Setup"
      },
      {
        "title": "Estudo de localização",
        "description": "Análise de fluxo e concorrência",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Treinamento de equipa de loja",
        "description": "Atendimento e operação",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Integração ERP/PDV",
        "description": "Conexão de estoque e vendas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Lançamento"
      },
      {
        "title": "Análise pós-lançamento",
        "description": "KPIs e ajustes",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Lançamento"
      },
      {
        "title": "Curadoria de catálogo",
        "description": "Seleção de produtos e fotos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Operação contínua"
      }
    ],
    "bestPractices": [
      "Conheça profundamente sua persona antes de qualquer pixel.",
      "Otimize checkout — cada step a menos é mais conversão.",
      "Logística reversa é parte da experiência do cliente.",
      "Use dados de comportamento para personalizar ofertas.",
      "Black Friday se planeja em agosto, não em novembro."
    ],
    "kpis": [
      "Conversion rate",
      "Ticket médio",
      "CAC vs LTV",
      "NPS",
      "Sell-through rate"
    ],
    "durationWeeks": 23,
    "teamSize": 22,
    "popularity": 60
  },
  {
    "id": "tpl-094",
    "name": "Omnichannel — Click & Collect",
    "industry": "Varejo & E-commerce",
    "icon": "ShoppingBag",
    "description": "Integração loja + online",
    "methodology": "Kanban",
    "phases": [
      "Pesquisa de mercado",
      "Sourcing",
      "Setup",
      "Pré-lançamento",
      "Lançamento",
      "Operação contínua"
    ],
    "tasks": [
      {
        "title": "Setup de plataforma e-commerce",
        "description": "Shopify/VTEX/Magento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Onboarding de fornecedores",
        "description": "Cadastro e contratos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Estudo de localização",
        "description": "Análise de fluxo e concorrência",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sourcing"
      },
      {
        "title": "Negociação de imóvel/contrato",
        "description": "Locação e adequação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Setup"
      },
      {
        "title": "Curadoria de catálogo",
        "description": "Seleção de produtos e fotos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Setup"
      },
      {
        "title": "Integração ERP/PDV",
        "description": "Conexão de estoque e vendas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Treinamento de equipa de loja",
        "description": "Atendimento e operação",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Lançamento"
      },
      {
        "title": "Análise pós-lançamento",
        "description": "KPIs e ajustes",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Lançamento"
      },
      {
        "title": "Soft launch",
        "description": "Operação assistida inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Operação contínua"
      }
    ],
    "bestPractices": [
      "Conheça profundamente sua persona antes de qualquer pixel.",
      "Otimize checkout — cada step a menos é mais conversão.",
      "Logística reversa é parte da experiência do cliente.",
      "Use dados de comportamento para personalizar ofertas.",
      "Black Friday se planeja em agosto, não em novembro."
    ],
    "kpis": [
      "Conversion rate",
      "Ticket médio",
      "CAC vs LTV",
      "NPS",
      "Sell-through rate"
    ],
    "durationWeeks": 21,
    "teamSize": 18,
    "popularity": 89
  },
  {
    "id": "tpl-095",
    "name": "Programa de Fidelidade",
    "industry": "Varejo & E-commerce",
    "icon": "ShoppingBag",
    "description": "Loyalty com gamification",
    "methodology": "Agile",
    "phases": [
      "Pesquisa de mercado",
      "Sourcing",
      "Setup",
      "Pré-lançamento",
      "Lançamento",
      "Operação contínua"
    ],
    "tasks": [
      {
        "title": "Soft launch",
        "description": "Operação assistida inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Negociação de imóvel/contrato",
        "description": "Locação e adequação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Treinamento de equipa de loja",
        "description": "Atendimento e operação",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sourcing"
      },
      {
        "title": "Onboarding de fornecedores",
        "description": "Cadastro e contratos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Sourcing"
      },
      {
        "title": "Análise pós-lançamento",
        "description": "KPIs e ajustes",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Setup"
      },
      {
        "title": "Campanha de mídia digital",
        "description": "Google/Meta Ads e SEO",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Estudo de localização",
        "description": "Análise de fluxo e concorrência",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Setup de plataforma e-commerce",
        "description": "Shopify/VTEX/Magento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Lançamento"
      },
      {
        "title": "Curadoria de catálogo",
        "description": "Seleção de produtos e fotos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Lançamento"
      },
      {
        "title": "Integração ERP/PDV",
        "description": "Conexão de estoque e vendas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Operação contínua"
      }
    ],
    "bestPractices": [
      "Conheça profundamente sua persona antes de qualquer pixel.",
      "Otimize checkout — cada step a menos é mais conversão.",
      "Logística reversa é parte da experiência do cliente.",
      "Use dados de comportamento para personalizar ofertas.",
      "Black Friday se planeja em agosto, não em novembro."
    ],
    "kpis": [
      "Conversion rate",
      "Ticket médio",
      "CAC vs LTV",
      "NPS",
      "Sell-through rate"
    ],
    "durationWeeks": 23,
    "teamSize": 5,
    "popularity": 70
  },
  {
    "id": "tpl-096",
    "name": "Black Friday Operacional",
    "industry": "Varejo & E-commerce",
    "icon": "ShoppingBag",
    "description": "Preparação de campanha sazonal",
    "methodology": "Agile",
    "phases": [
      "Pesquisa de mercado",
      "Sourcing",
      "Setup",
      "Pré-lançamento",
      "Lançamento",
      "Operação contínua"
    ],
    "tasks": [
      {
        "title": "Campanha de mídia digital",
        "description": "Google/Meta Ads e SEO",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Negociação de imóvel/contrato",
        "description": "Locação e adequação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Treinamento de equipa de loja",
        "description": "Atendimento e operação",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sourcing"
      },
      {
        "title": "Curadoria de catálogo",
        "description": "Seleção de produtos e fotos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Sourcing"
      },
      {
        "title": "Integração ERP/PDV",
        "description": "Conexão de estoque e vendas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Setup"
      },
      {
        "title": "Estudo de localização",
        "description": "Análise de fluxo e concorrência",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Onboarding de fornecedores",
        "description": "Cadastro e contratos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Soft launch",
        "description": "Operação assistida inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Lançamento"
      },
      {
        "title": "Análise pós-lançamento",
        "description": "KPIs e ajustes",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Lançamento"
      },
      {
        "title": "Setup de plataforma e-commerce",
        "description": "Shopify/VTEX/Magento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Operação contínua"
      }
    ],
    "bestPractices": [
      "Conheça profundamente sua persona antes de qualquer pixel.",
      "Otimize checkout — cada step a menos é mais conversão.",
      "Logística reversa é parte da experiência do cliente.",
      "Use dados de comportamento para personalizar ofertas.",
      "Black Friday se planeja em agosto, não em novembro."
    ],
    "kpis": [
      "Conversion rate",
      "Ticket médio",
      "CAC vs LTV",
      "NPS",
      "Sell-through rate"
    ],
    "durationWeeks": 23,
    "teamSize": 12,
    "popularity": 79
  },
  {
    "id": "tpl-097",
    "name": "Renovação de Centro de Distribuição",
    "industry": "Varejo & E-commerce",
    "icon": "ShoppingBag",
    "description": "Modernização logística",
    "methodology": "Agile",
    "phases": [
      "Pesquisa de mercado",
      "Sourcing",
      "Setup",
      "Pré-lançamento",
      "Lançamento",
      "Operação contínua"
    ],
    "tasks": [
      {
        "title": "Soft launch",
        "description": "Operação assistida inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Curadoria de catálogo",
        "description": "Seleção de produtos e fotos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Campanha de mídia digital",
        "description": "Google/Meta Ads e SEO",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sourcing"
      },
      {
        "title": "Onboarding de fornecedores",
        "description": "Cadastro e contratos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Sourcing"
      },
      {
        "title": "Treinamento de equipa de loja",
        "description": "Atendimento e operação",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Setup"
      },
      {
        "title": "Setup de plataforma e-commerce",
        "description": "Shopify/VTEX/Magento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Integração ERP/PDV",
        "description": "Conexão de estoque e vendas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Análise pós-lançamento",
        "description": "KPIs e ajustes",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Lançamento"
      },
      {
        "title": "Negociação de imóvel/contrato",
        "description": "Locação e adequação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Lançamento"
      },
      {
        "title": "Estudo de localização",
        "description": "Análise de fluxo e concorrência",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Operação contínua"
      }
    ],
    "bestPractices": [
      "Conheça profundamente sua persona antes de qualquer pixel.",
      "Otimize checkout — cada step a menos é mais conversão.",
      "Logística reversa é parte da experiência do cliente.",
      "Use dados de comportamento para personalizar ofertas.",
      "Black Friday se planeja em agosto, não em novembro."
    ],
    "kpis": [
      "Conversion rate",
      "Ticket médio",
      "CAC vs LTV",
      "NPS",
      "Sell-through rate"
    ],
    "durationWeeks": 23,
    "teamSize": 24,
    "popularity": 81
  },
  {
    "id": "tpl-098",
    "name": "Marketplace Próprio",
    "industry": "Varejo & E-commerce",
    "icon": "ShoppingBag",
    "description": "Plataforma para terceiros venderem",
    "methodology": "Kanban",
    "phases": [
      "Pesquisa de mercado",
      "Sourcing",
      "Setup",
      "Pré-lançamento",
      "Lançamento",
      "Operação contínua"
    ],
    "tasks": [
      {
        "title": "Integração ERP/PDV",
        "description": "Conexão de estoque e vendas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Campanha de mídia digital",
        "description": "Google/Meta Ads e SEO",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Treinamento de equipa de loja",
        "description": "Atendimento e operação",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sourcing"
      },
      {
        "title": "Negociação de imóvel/contrato",
        "description": "Locação e adequação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Sourcing"
      },
      {
        "title": "Análise pós-lançamento",
        "description": "KPIs e ajustes",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Setup"
      },
      {
        "title": "Setup de plataforma e-commerce",
        "description": "Shopify/VTEX/Magento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Curadoria de catálogo",
        "description": "Seleção de produtos e fotos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Soft launch",
        "description": "Operação assistida inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Lançamento"
      },
      {
        "title": "Onboarding de fornecedores",
        "description": "Cadastro e contratos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Lançamento"
      },
      {
        "title": "Estudo de localização",
        "description": "Análise de fluxo e concorrência",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Operação contínua"
      }
    ],
    "bestPractices": [
      "Conheça profundamente sua persona antes de qualquer pixel.",
      "Otimize checkout — cada step a menos é mais conversão.",
      "Logística reversa é parte da experiência do cliente.",
      "Use dados de comportamento para personalizar ofertas.",
      "Black Friday se planeja em agosto, não em novembro."
    ],
    "kpis": [
      "Conversion rate",
      "Ticket médio",
      "CAC vs LTV",
      "NPS",
      "Sell-through rate"
    ],
    "durationWeeks": 23,
    "teamSize": 17,
    "popularity": 60
  },
  {
    "id": "tpl-099",
    "name": "Implementação WMS",
    "industry": "Varejo & E-commerce",
    "icon": "ShoppingBag",
    "description": "Warehouse management system",
    "methodology": "Agile",
    "phases": [
      "Pesquisa de mercado",
      "Sourcing",
      "Setup",
      "Pré-lançamento",
      "Lançamento",
      "Operação contínua"
    ],
    "tasks": [
      {
        "title": "Curadoria de catálogo",
        "description": "Seleção de produtos e fotos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Setup de plataforma e-commerce",
        "description": "Shopify/VTEX/Magento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Treinamento de equipa de loja",
        "description": "Atendimento e operação",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sourcing"
      },
      {
        "title": "Estudo de localização",
        "description": "Análise de fluxo e concorrência",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sourcing"
      },
      {
        "title": "Campanha de mídia digital",
        "description": "Google/Meta Ads e SEO",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Setup"
      },
      {
        "title": "Análise pós-lançamento",
        "description": "KPIs e ajustes",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Onboarding de fornecedores",
        "description": "Cadastro e contratos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Negociação de imóvel/contrato",
        "description": "Locação e adequação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Lançamento"
      },
      {
        "title": "Integração ERP/PDV",
        "description": "Conexão de estoque e vendas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Lançamento"
      },
      {
        "title": "Soft launch",
        "description": "Operação assistida inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Operação contínua"
      }
    ],
    "bestPractices": [
      "Conheça profundamente sua persona antes de qualquer pixel.",
      "Otimize checkout — cada step a menos é mais conversão.",
      "Logística reversa é parte da experiência do cliente.",
      "Use dados de comportamento para personalizar ofertas.",
      "Black Friday se planeja em agosto, não em novembro."
    ],
    "kpis": [
      "Conversion rate",
      "Ticket médio",
      "CAC vs LTV",
      "NPS",
      "Sell-through rate"
    ],
    "durationWeeks": 23,
    "teamSize": 21,
    "popularity": 43
  },
  {
    "id": "tpl-100",
    "name": "Expansão Internacional",
    "industry": "Varejo & E-commerce",
    "icon": "ShoppingBag",
    "description": "Entrada em novo país",
    "methodology": "Kanban",
    "phases": [
      "Pesquisa de mercado",
      "Sourcing",
      "Setup",
      "Pré-lançamento",
      "Lançamento",
      "Operação contínua"
    ],
    "tasks": [
      {
        "title": "Soft launch",
        "description": "Operação assistida inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Análise pós-lançamento",
        "description": "KPIs e ajustes",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Curadoria de catálogo",
        "description": "Seleção de produtos e fotos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Sourcing"
      },
      {
        "title": "Treinamento de equipa de loja",
        "description": "Atendimento e operação",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sourcing"
      },
      {
        "title": "Estudo de localização",
        "description": "Análise de fluxo e concorrência",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Setup"
      },
      {
        "title": "Integração ERP/PDV",
        "description": "Conexão de estoque e vendas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Setup de plataforma e-commerce",
        "description": "Shopify/VTEX/Magento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Onboarding de fornecedores",
        "description": "Cadastro e contratos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Lançamento"
      },
      {
        "title": "Negociação de imóvel/contrato",
        "description": "Locação e adequação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Lançamento"
      },
      {
        "title": "Campanha de mídia digital",
        "description": "Google/Meta Ads e SEO",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Operação contínua"
      }
    ],
    "bestPractices": [
      "Conheça profundamente sua persona antes de qualquer pixel.",
      "Otimize checkout — cada step a menos é mais conversão.",
      "Logística reversa é parte da experiência do cliente.",
      "Use dados de comportamento para personalizar ofertas.",
      "Black Friday se planeja em agosto, não em novembro."
    ],
    "kpis": [
      "Conversion rate",
      "Ticket médio",
      "CAC vs LTV",
      "NPS",
      "Sell-through rate"
    ],
    "durationWeeks": 23,
    "teamSize": 23,
    "popularity": 59
  },
  {
    "id": "tpl-101",
    "name": "Private Label",
    "industry": "Varejo & E-commerce",
    "icon": "ShoppingBag",
    "description": "Lançamento de marca própria",
    "methodology": "Agile",
    "phases": [
      "Pesquisa de mercado",
      "Sourcing",
      "Setup",
      "Pré-lançamento",
      "Lançamento",
      "Operação contínua"
    ],
    "tasks": [
      {
        "title": "Negociação de imóvel/contrato",
        "description": "Locação e adequação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Soft launch",
        "description": "Operação assistida inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Integração ERP/PDV",
        "description": "Conexão de estoque e vendas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Sourcing"
      },
      {
        "title": "Análise pós-lançamento",
        "description": "KPIs e ajustes",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Sourcing"
      },
      {
        "title": "Curadoria de catálogo",
        "description": "Seleção de produtos e fotos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Setup"
      },
      {
        "title": "Treinamento de equipa de loja",
        "description": "Atendimento e operação",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Campanha de mídia digital",
        "description": "Google/Meta Ads e SEO",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Estudo de localização",
        "description": "Análise de fluxo e concorrência",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Lançamento"
      },
      {
        "title": "Onboarding de fornecedores",
        "description": "Cadastro e contratos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Lançamento"
      },
      {
        "title": "Setup de plataforma e-commerce",
        "description": "Shopify/VTEX/Magento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Operação contínua"
      }
    ],
    "bestPractices": [
      "Conheça profundamente sua persona antes de qualquer pixel.",
      "Otimize checkout — cada step a menos é mais conversão.",
      "Logística reversa é parte da experiência do cliente.",
      "Use dados de comportamento para personalizar ofertas.",
      "Black Friday se planeja em agosto, não em novembro."
    ],
    "kpis": [
      "Conversion rate",
      "Ticket médio",
      "CAC vs LTV",
      "NPS",
      "Sell-through rate"
    ],
    "durationWeeks": 23,
    "teamSize": 12,
    "popularity": 76
  },
  {
    "id": "tpl-102",
    "name": "Abertura de Loja Física Flagship — Pequena Escala",
    "industry": "Varejo & E-commerce",
    "icon": "ShoppingBag",
    "description": "Loja conceito de marca (Pequena Escala)",
    "methodology": "Kanban",
    "phases": [
      "Pesquisa de mercado",
      "Sourcing",
      "Setup",
      "Pré-lançamento",
      "Lançamento",
      "Operação contínua"
    ],
    "tasks": [
      {
        "title": "Campanha de mídia digital",
        "description": "Google/Meta Ads e SEO",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Soft launch",
        "description": "Operação assistida inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Estudo de localização",
        "description": "Análise de fluxo e concorrência",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sourcing"
      },
      {
        "title": "Onboarding de fornecedores",
        "description": "Cadastro e contratos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Sourcing"
      },
      {
        "title": "Curadoria de catálogo",
        "description": "Seleção de produtos e fotos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Setup"
      },
      {
        "title": "Setup de plataforma e-commerce",
        "description": "Shopify/VTEX/Magento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Treinamento de equipa de loja",
        "description": "Atendimento e operação",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Integração ERP/PDV",
        "description": "Conexão de estoque e vendas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Lançamento"
      },
      {
        "title": "Negociação de imóvel/contrato",
        "description": "Locação e adequação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Lançamento"
      },
      {
        "title": "Análise pós-lançamento",
        "description": "KPIs e ajustes",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Operação contínua"
      }
    ],
    "bestPractices": [
      "Conheça profundamente sua persona antes de qualquer pixel.",
      "Otimize checkout — cada step a menos é mais conversão.",
      "Logística reversa é parte da experiência do cliente.",
      "Use dados de comportamento para personalizar ofertas.",
      "Black Friday se planeja em agosto, não em novembro."
    ],
    "kpis": [
      "Conversion rate",
      "Ticket médio",
      "CAC vs LTV",
      "NPS",
      "Sell-through rate"
    ],
    "durationWeeks": 23,
    "teamSize": 15,
    "popularity": 40
  },
  {
    "id": "tpl-103",
    "name": "Lançamento de E-commerce — Pequena Escala",
    "industry": "Varejo & E-commerce",
    "icon": "ShoppingBag",
    "description": "Loja online com checkout (Pequena Escala)",
    "methodology": "Kanban",
    "phases": [
      "Pesquisa de mercado",
      "Sourcing",
      "Setup",
      "Pré-lançamento",
      "Lançamento",
      "Operação contínua"
    ],
    "tasks": [
      {
        "title": "Setup de plataforma e-commerce",
        "description": "Shopify/VTEX/Magento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Campanha de mídia digital",
        "description": "Google/Meta Ads e SEO",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Negociação de imóvel/contrato",
        "description": "Locação e adequação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Sourcing"
      },
      {
        "title": "Treinamento de equipa de loja",
        "description": "Atendimento e operação",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sourcing"
      },
      {
        "title": "Curadoria de catálogo",
        "description": "Seleção de produtos e fotos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Setup"
      },
      {
        "title": "Estudo de localização",
        "description": "Análise de fluxo e concorrência",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Onboarding de fornecedores",
        "description": "Cadastro e contratos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Análise pós-lançamento",
        "description": "KPIs e ajustes",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Lançamento"
      },
      {
        "title": "Integração ERP/PDV",
        "description": "Conexão de estoque e vendas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Lançamento"
      },
      {
        "title": "Soft launch",
        "description": "Operação assistida inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Operação contínua"
      }
    ],
    "bestPractices": [
      "Conheça profundamente sua persona antes de qualquer pixel.",
      "Otimize checkout — cada step a menos é mais conversão.",
      "Logística reversa é parte da experiência do cliente.",
      "Use dados de comportamento para personalizar ofertas.",
      "Black Friday se planeja em agosto, não em novembro."
    ],
    "kpis": [
      "Conversion rate",
      "Ticket médio",
      "CAC vs LTV",
      "NPS",
      "Sell-through rate"
    ],
    "durationWeeks": 23,
    "teamSize": 18,
    "popularity": 61
  },
  {
    "id": "tpl-104",
    "name": "Omnichannel — Click & Collect — Pequena Escala",
    "industry": "Varejo & E-commerce",
    "icon": "ShoppingBag",
    "description": "Integração loja + online (Pequena Escala)",
    "methodology": "Agile",
    "phases": [
      "Pesquisa de mercado",
      "Sourcing",
      "Setup",
      "Pré-lançamento",
      "Lançamento",
      "Operação contínua"
    ],
    "tasks": [
      {
        "title": "Curadoria de catálogo",
        "description": "Seleção de produtos e fotos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Onboarding de fornecedores",
        "description": "Cadastro e contratos",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Pesquisa de mercado"
      },
      {
        "title": "Análise pós-lançamento",
        "description": "KPIs e ajustes",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Sourcing"
      },
      {
        "title": "Campanha de mídia digital",
        "description": "Google/Meta Ads e SEO",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sourcing"
      },
      {
        "title": "Soft launch",
        "description": "Operação assistida inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Setup"
      },
      {
        "title": "Treinamento de equipa de loja",
        "description": "Atendimento e operação",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Estudo de localização",
        "description": "Análise de fluxo e concorrência",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pré-lançamento"
      },
      {
        "title": "Integração ERP/PDV",
        "description": "Conexão de estoque e vendas",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Lançamento"
      },
      {
        "title": "Setup de plataforma e-commerce",
        "description": "Shopify/VTEX/Magento",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Lançamento"
      },
      {
        "title": "Negociação de imóvel/contrato",
        "description": "Locação e adequação",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Operação contínua"
      }
    ],
    "bestPractices": [
      "Conheça profundamente sua persona antes de qualquer pixel.",
      "Otimize checkout — cada step a menos é mais conversão.",
      "Logística reversa é parte da experiência do cliente.",
      "Use dados de comportamento para personalizar ofertas.",
      "Black Friday se planeja em agosto, não em novembro."
    ],
    "kpis": [
      "Conversion rate",
      "Ticket médio",
      "CAC vs LTV",
      "NPS",
      "Sell-through rate"
    ],
    "durationWeeks": 23,
    "teamSize": 25,
    "popularity": 45
  },
  {
    "id": "tpl-105",
    "name": "Implementação TMS",
    "industry": "Logística & Supply Chain",
    "icon": "Truck",
    "description": "Transport management system",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Implementação",
      "Piloto",
      "Rollout",
      "Continuous improvement"
    ],
    "tasks": [
      {
        "title": "Rollout nacional",
        "description": "Expansão para todas as praças",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Diagnóstico"
      },
      {
        "title": "Treinamento de motoristas",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Programa de melhoria contínua",
        "description": "Kaizen mensal",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Desenho"
      },
      {
        "title": "Implementação de tracking",
        "description": "GPS e telemetria",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Desenho"
      },
      {
        "title": "Negociação com transportadoras",
        "description": "Tarifas e SLAs",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Piloto em uma região",
        "description": "Operação controlada",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Piloto"
      },
      {
        "title": "Selecção de TMS/WMS",
        "description": "RFP e prova de conceito",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Piloto"
      },
      {
        "title": "Mapeamento as-is",
        "description": "Fluxos atuais e gargalos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Rollout"
      },
      {
        "title": "Monitorização de KPIs",
        "description": "Dashboards e alertas",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Rollout"
      },
      {
        "title": "Desenho to-be",
        "description": "Nova malha logística",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Continuous improvement"
      }
    ],
    "bestPractices": [
      "Last mile é 50% do custo — desenhe com obsessão.",
      "Rastreio em tempo real é commodity, não diferencial.",
      "Negocie SLAs com cláusulas claras de penalização.",
      "Use dados históricos para forecasting de demanda.",
      "Sustentabilidade vira KPI obrigatório em 2-3 anos."
    ],
    "kpis": [
      "OTIF (On Time In Full)",
      "Custo por entrega",
      "Lead time",
      "Ocupação de frota %",
      "Reverse logistics rate"
    ],
    "durationWeeks": 32,
    "teamSize": 7,
    "popularity": 58
  },
  {
    "id": "tpl-106",
    "name": "Otimização de Rede de Distribuição",
    "industry": "Logística & Supply Chain",
    "icon": "Truck",
    "description": "Redesenho de CDs e rotas",
    "methodology": "Lean",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Implementação",
      "Piloto",
      "Rollout",
      "Continuous improvement"
    ],
    "tasks": [
      {
        "title": "Rollout nacional",
        "description": "Expansão para todas as praças",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Diagnóstico"
      },
      {
        "title": "Monitorização de KPIs",
        "description": "Dashboards e alertas",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Implementação de tracking",
        "description": "GPS e telemetria",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Desenho"
      },
      {
        "title": "Mapeamento as-is",
        "description": "Fluxos atuais e gargalos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho"
      },
      {
        "title": "Desenho to-be",
        "description": "Nova malha logística",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Negociação com transportadoras",
        "description": "Tarifas e SLAs",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Piloto"
      },
      {
        "title": "Treinamento de motoristas",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Piloto"
      },
      {
        "title": "Programa de melhoria contínua",
        "description": "Kaizen mensal",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Rollout"
      },
      {
        "title": "Selecção de TMS/WMS",
        "description": "RFP e prova de conceito",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Rollout"
      },
      {
        "title": "Piloto em uma região",
        "description": "Operação controlada",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Continuous improvement"
      }
    ],
    "bestPractices": [
      "Last mile é 50% do custo — desenhe com obsessão.",
      "Rastreio em tempo real é commodity, não diferencial.",
      "Negocie SLAs com cláusulas claras de penalização.",
      "Use dados históricos para forecasting de demanda.",
      "Sustentabilidade vira KPI obrigatório em 2-3 anos."
    ],
    "kpis": [
      "OTIF (On Time In Full)",
      "Custo por entrega",
      "Lead time",
      "Ocupação de frota %",
      "Reverse logistics rate"
    ],
    "durationWeeks": 32,
    "teamSize": 8,
    "popularity": 88
  },
  {
    "id": "tpl-107",
    "name": "Lastmile Delivery",
    "industry": "Logística & Supply Chain",
    "icon": "Truck",
    "description": "Operação de entrega urbana",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Implementação",
      "Piloto",
      "Rollout",
      "Continuous improvement"
    ],
    "tasks": [
      {
        "title": "Implementação de tracking",
        "description": "GPS e telemetria",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Piloto em uma região",
        "description": "Operação controlada",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Desenho to-be",
        "description": "Nova malha logística",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho"
      },
      {
        "title": "Mapeamento as-is",
        "description": "Fluxos atuais e gargalos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho"
      },
      {
        "title": "Negociação com transportadoras",
        "description": "Tarifas e SLAs",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Monitorização de KPIs",
        "description": "Dashboards e alertas",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Piloto"
      },
      {
        "title": "Rollout nacional",
        "description": "Expansão para todas as praças",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Piloto"
      },
      {
        "title": "Treinamento de motoristas",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Rollout"
      },
      {
        "title": "Programa de melhoria contínua",
        "description": "Kaizen mensal",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Rollout"
      },
      {
        "title": "Selecção de TMS/WMS",
        "description": "RFP e prova de conceito",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Continuous improvement"
      }
    ],
    "bestPractices": [
      "Last mile é 50% do custo — desenhe com obsessão.",
      "Rastreio em tempo real é commodity, não diferencial.",
      "Negocie SLAs com cláusulas claras de penalização.",
      "Use dados históricos para forecasting de demanda.",
      "Sustentabilidade vira KPI obrigatório em 2-3 anos."
    ],
    "kpis": [
      "OTIF (On Time In Full)",
      "Custo por entrega",
      "Lead time",
      "Ocupação de frota %",
      "Reverse logistics rate"
    ],
    "durationWeeks": 32,
    "teamSize": 6,
    "popularity": 65
  },
  {
    "id": "tpl-108",
    "name": "Cross-docking Hub",
    "industry": "Logística & Supply Chain",
    "icon": "Truck",
    "description": "Operação de transbordo rápido",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Implementação",
      "Piloto",
      "Rollout",
      "Continuous improvement"
    ],
    "tasks": [
      {
        "title": "Treinamento de motoristas",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Mapeamento as-is",
        "description": "Fluxos atuais e gargalos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Rollout nacional",
        "description": "Expansão para todas as praças",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Desenho"
      },
      {
        "title": "Monitorização de KPIs",
        "description": "Dashboards e alertas",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Selecção de TMS/WMS",
        "description": "RFP e prova de conceito",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Implementação de tracking",
        "description": "GPS e telemetria",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Piloto"
      },
      {
        "title": "Negociação com transportadoras",
        "description": "Tarifas e SLAs",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Rollout"
      },
      {
        "title": "Piloto em uma região",
        "description": "Operação controlada",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Rollout"
      },
      {
        "title": "Desenho to-be",
        "description": "Nova malha logística",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Continuous improvement"
      }
    ],
    "bestPractices": [
      "Last mile é 50% do custo — desenhe com obsessão.",
      "Rastreio em tempo real é commodity, não diferencial.",
      "Negocie SLAs com cláusulas claras de penalização.",
      "Use dados históricos para forecasting de demanda.",
      "Sustentabilidade vira KPI obrigatório em 2-3 anos."
    ],
    "kpis": [
      "OTIF (On Time In Full)",
      "Custo por entrega",
      "Lead time",
      "Ocupação de frota %",
      "Reverse logistics rate"
    ],
    "durationWeeks": 28,
    "teamSize": 13,
    "popularity": 47
  },
  {
    "id": "tpl-109",
    "name": "Cold Chain Pharma",
    "industry": "Logística & Supply Chain",
    "icon": "Truck",
    "description": "Cadeia fria para medicamentos",
    "methodology": "Lean",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Implementação",
      "Piloto",
      "Rollout",
      "Continuous improvement"
    ],
    "tasks": [
      {
        "title": "Mapeamento as-is",
        "description": "Fluxos atuais e gargalos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Piloto em uma região",
        "description": "Operação controlada",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Selecção de TMS/WMS",
        "description": "RFP e prova de conceito",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Desenho"
      },
      {
        "title": "Treinamento de motoristas",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Implementação de tracking",
        "description": "GPS e telemetria",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Negociação com transportadoras",
        "description": "Tarifas e SLAs",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Piloto"
      },
      {
        "title": "Rollout nacional",
        "description": "Expansão para todas as praças",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Piloto"
      },
      {
        "title": "Programa de melhoria contínua",
        "description": "Kaizen mensal",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Rollout"
      },
      {
        "title": "Desenho to-be",
        "description": "Nova malha logística",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Rollout"
      },
      {
        "title": "Monitorização de KPIs",
        "description": "Dashboards e alertas",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Continuous improvement"
      }
    ],
    "bestPractices": [
      "Last mile é 50% do custo — desenhe com obsessão.",
      "Rastreio em tempo real é commodity, não diferencial.",
      "Negocie SLAs com cláusulas claras de penalização.",
      "Use dados históricos para forecasting de demanda.",
      "Sustentabilidade vira KPI obrigatório em 2-3 anos."
    ],
    "kpis": [
      "OTIF (On Time In Full)",
      "Custo por entrega",
      "Lead time",
      "Ocupação de frota %",
      "Reverse logistics rate"
    ],
    "durationWeeks": 32,
    "teamSize": 17,
    "popularity": 77
  },
  {
    "id": "tpl-110",
    "name": "Frota Própria vs Terceirizada",
    "industry": "Logística & Supply Chain",
    "icon": "Truck",
    "description": "Decisão make-or-buy",
    "methodology": "Lean",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Implementação",
      "Piloto",
      "Rollout",
      "Continuous improvement"
    ],
    "tasks": [
      {
        "title": "Monitorização de KPIs",
        "description": "Dashboards e alertas",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Desenho to-be",
        "description": "Nova malha logística",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Treinamento de motoristas",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Rollout nacional",
        "description": "Expansão para todas as praças",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Desenho"
      },
      {
        "title": "Selecção de TMS/WMS",
        "description": "RFP e prova de conceito",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Piloto em uma região",
        "description": "Operação controlada",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Piloto"
      },
      {
        "title": "Programa de melhoria contínua",
        "description": "Kaizen mensal",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Piloto"
      },
      {
        "title": "Negociação com transportadoras",
        "description": "Tarifas e SLAs",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Rollout"
      },
      {
        "title": "Mapeamento as-is",
        "description": "Fluxos atuais e gargalos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Rollout"
      },
      {
        "title": "Implementação de tracking",
        "description": "GPS e telemetria",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Continuous improvement"
      }
    ],
    "bestPractices": [
      "Last mile é 50% do custo — desenhe com obsessão.",
      "Rastreio em tempo real é commodity, não diferencial.",
      "Negocie SLAs com cláusulas claras de penalização.",
      "Use dados históricos para forecasting de demanda.",
      "Sustentabilidade vira KPI obrigatório em 2-3 anos."
    ],
    "kpis": [
      "OTIF (On Time In Full)",
      "Custo por entrega",
      "Lead time",
      "Ocupação de frota %",
      "Reverse logistics rate"
    ],
    "durationWeeks": 32,
    "teamSize": 20,
    "popularity": 72
  },
  {
    "id": "tpl-111",
    "name": "Implementação de Track & Trace",
    "industry": "Logística & Supply Chain",
    "icon": "Truck",
    "description": "Rastreio end-to-end",
    "methodology": "Lean",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Implementação",
      "Piloto",
      "Rollout",
      "Continuous improvement"
    ],
    "tasks": [
      {
        "title": "Piloto em uma região",
        "description": "Operação controlada",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Programa de melhoria contínua",
        "description": "Kaizen mensal",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Selecção de TMS/WMS",
        "description": "RFP e prova de conceito",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Desenho"
      },
      {
        "title": "Desenho to-be",
        "description": "Nova malha logística",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho"
      },
      {
        "title": "Mapeamento as-is",
        "description": "Fluxos atuais e gargalos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Treinamento de motoristas",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Piloto"
      },
      {
        "title": "Rollout nacional",
        "description": "Expansão para todas as praças",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Piloto"
      },
      {
        "title": "Monitorização de KPIs",
        "description": "Dashboards e alertas",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Rollout"
      },
      {
        "title": "Negociação com transportadoras",
        "description": "Tarifas e SLAs",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Rollout"
      },
      {
        "title": "Implementação de tracking",
        "description": "GPS e telemetria",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Continuous improvement"
      }
    ],
    "bestPractices": [
      "Last mile é 50% do custo — desenhe com obsessão.",
      "Rastreio em tempo real é commodity, não diferencial.",
      "Negocie SLAs com cláusulas claras de penalização.",
      "Use dados históricos para forecasting de demanda.",
      "Sustentabilidade vira KPI obrigatório em 2-3 anos."
    ],
    "kpis": [
      "OTIF (On Time In Full)",
      "Custo por entrega",
      "Lead time",
      "Ocupação de frota %",
      "Reverse logistics rate"
    ],
    "durationWeeks": 32,
    "teamSize": 9,
    "popularity": 100
  },
  {
    "id": "tpl-112",
    "name": "Importação Just-in-Time",
    "industry": "Logística & Supply Chain",
    "icon": "Truck",
    "description": "Suprimento sincronizado",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Implementação",
      "Piloto",
      "Rollout",
      "Continuous improvement"
    ],
    "tasks": [
      {
        "title": "Rollout nacional",
        "description": "Expansão para todas as praças",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Diagnóstico"
      },
      {
        "title": "Programa de melhoria contínua",
        "description": "Kaizen mensal",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Piloto em uma região",
        "description": "Operação controlada",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Desenho"
      },
      {
        "title": "Treinamento de motoristas",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Monitorização de KPIs",
        "description": "Dashboards e alertas",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Selecção de TMS/WMS",
        "description": "RFP e prova de conceito",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Piloto"
      },
      {
        "title": "Desenho to-be",
        "description": "Nova malha logística",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Piloto"
      },
      {
        "title": "Negociação com transportadoras",
        "description": "Tarifas e SLAs",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Rollout"
      },
      {
        "title": "Mapeamento as-is",
        "description": "Fluxos atuais e gargalos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Rollout"
      },
      {
        "title": "Implementação de tracking",
        "description": "GPS e telemetria",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Continuous improvement"
      }
    ],
    "bestPractices": [
      "Last mile é 50% do custo — desenhe com obsessão.",
      "Rastreio em tempo real é commodity, não diferencial.",
      "Negocie SLAs com cláusulas claras de penalização.",
      "Use dados históricos para forecasting de demanda.",
      "Sustentabilidade vira KPI obrigatório em 2-3 anos."
    ],
    "kpis": [
      "OTIF (On Time In Full)",
      "Custo por entrega",
      "Lead time",
      "Ocupação de frota %",
      "Reverse logistics rate"
    ],
    "durationWeeks": 32,
    "teamSize": 24,
    "popularity": 59
  },
  {
    "id": "tpl-113",
    "name": "Programa S&OP",
    "industry": "Logística & Supply Chain",
    "icon": "Truck",
    "description": "Sales & operations planning",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Implementação",
      "Piloto",
      "Rollout",
      "Continuous improvement"
    ],
    "tasks": [
      {
        "title": "Programa de melhoria contínua",
        "description": "Kaizen mensal",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Mapeamento as-is",
        "description": "Fluxos atuais e gargalos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Piloto em uma região",
        "description": "Operação controlada",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Desenho"
      },
      {
        "title": "Implementação de tracking",
        "description": "GPS e telemetria",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Desenho"
      },
      {
        "title": "Monitorização de KPIs",
        "description": "Dashboards e alertas",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Selecção de TMS/WMS",
        "description": "RFP e prova de conceito",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Piloto"
      },
      {
        "title": "Negociação com transportadoras",
        "description": "Tarifas e SLAs",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Piloto"
      },
      {
        "title": "Desenho to-be",
        "description": "Nova malha logística",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Rollout"
      },
      {
        "title": "Rollout nacional",
        "description": "Expansão para todas as praças",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Rollout"
      },
      {
        "title": "Treinamento de motoristas",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Continuous improvement"
      }
    ],
    "bestPractices": [
      "Last mile é 50% do custo — desenhe com obsessão.",
      "Rastreio em tempo real é commodity, não diferencial.",
      "Negocie SLAs com cláusulas claras de penalização.",
      "Use dados históricos para forecasting de demanda.",
      "Sustentabilidade vira KPI obrigatório em 2-3 anos."
    ],
    "kpis": [
      "OTIF (On Time In Full)",
      "Custo por entrega",
      "Lead time",
      "Ocupação de frota %",
      "Reverse logistics rate"
    ],
    "durationWeeks": 32,
    "teamSize": 13,
    "popularity": 44
  },
  {
    "id": "tpl-114",
    "name": "Auditoria de Fornecedores",
    "industry": "Logística & Supply Chain",
    "icon": "Truck",
    "description": "Avaliação de suppliers críticos",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Implementação",
      "Piloto",
      "Rollout",
      "Continuous improvement"
    ],
    "tasks": [
      {
        "title": "Programa de melhoria contínua",
        "description": "Kaizen mensal",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Monitorização de KPIs",
        "description": "Dashboards e alertas",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Treinamento de motoristas",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Negociação com transportadoras",
        "description": "Tarifas e SLAs",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Implementação de tracking",
        "description": "GPS e telemetria",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Piloto em uma região",
        "description": "Operação controlada",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Piloto"
      },
      {
        "title": "Mapeamento as-is",
        "description": "Fluxos atuais e gargalos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Rollout"
      },
      {
        "title": "Desenho to-be",
        "description": "Nova malha logística",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Rollout"
      },
      {
        "title": "Rollout nacional",
        "description": "Expansão para todas as praças",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Continuous improvement"
      }
    ],
    "bestPractices": [
      "Last mile é 50% do custo — desenhe com obsessão.",
      "Rastreio em tempo real é commodity, não diferencial.",
      "Negocie SLAs com cláusulas claras de penalização.",
      "Use dados históricos para forecasting de demanda.",
      "Sustentabilidade vira KPI obrigatório em 2-3 anos."
    ],
    "kpis": [
      "OTIF (On Time In Full)",
      "Custo por entrega",
      "Lead time",
      "Ocupação de frota %",
      "Reverse logistics rate"
    ],
    "durationWeeks": 28,
    "teamSize": 23,
    "popularity": 70
  },
  {
    "id": "tpl-115",
    "name": "Implementação TMS — Pequena Escala",
    "industry": "Logística & Supply Chain",
    "icon": "Truck",
    "description": "Transport management system (Pequena Escala)",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Implementação",
      "Piloto",
      "Rollout",
      "Continuous improvement"
    ],
    "tasks": [
      {
        "title": "Selecção de TMS/WMS",
        "description": "RFP e prova de conceito",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Mapeamento as-is",
        "description": "Fluxos atuais e gargalos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Rollout nacional",
        "description": "Expansão para todas as praças",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Desenho"
      },
      {
        "title": "Monitorização de KPIs",
        "description": "Dashboards e alertas",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Programa de melhoria contínua",
        "description": "Kaizen mensal",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Treinamento de motoristas",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Piloto"
      },
      {
        "title": "Desenho to-be",
        "description": "Nova malha logística",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Piloto"
      },
      {
        "title": "Implementação de tracking",
        "description": "GPS e telemetria",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Rollout"
      },
      {
        "title": "Piloto em uma região",
        "description": "Operação controlada",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Rollout"
      },
      {
        "title": "Negociação com transportadoras",
        "description": "Tarifas e SLAs",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Continuous improvement"
      }
    ],
    "bestPractices": [
      "Last mile é 50% do custo — desenhe com obsessão.",
      "Rastreio em tempo real é commodity, não diferencial.",
      "Negocie SLAs com cláusulas claras de penalização.",
      "Use dados históricos para forecasting de demanda.",
      "Sustentabilidade vira KPI obrigatório em 2-3 anos."
    ],
    "kpis": [
      "OTIF (On Time In Full)",
      "Custo por entrega",
      "Lead time",
      "Ocupação de frota %",
      "Reverse logistics rate"
    ],
    "durationWeeks": 32,
    "teamSize": 20,
    "popularity": 73
  },
  {
    "id": "tpl-116",
    "name": "Otimização de Rede de Distribuição — Pequena Escala",
    "industry": "Logística & Supply Chain",
    "icon": "Truck",
    "description": "Redesenho de CDs e rotas (Pequena Escala)",
    "methodology": "Lean",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Implementação",
      "Piloto",
      "Rollout",
      "Continuous improvement"
    ],
    "tasks": [
      {
        "title": "Selecção de TMS/WMS",
        "description": "RFP e prova de conceito",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Piloto em uma região",
        "description": "Operação controlada",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Monitorização de KPIs",
        "description": "Dashboards e alertas",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Programa de melhoria contínua",
        "description": "Kaizen mensal",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Desenho"
      },
      {
        "title": "Negociação com transportadoras",
        "description": "Tarifas e SLAs",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Rollout nacional",
        "description": "Expansão para todas as praças",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Piloto"
      },
      {
        "title": "Treinamento de motoristas",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Piloto"
      },
      {
        "title": "Implementação de tracking",
        "description": "GPS e telemetria",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Rollout"
      },
      {
        "title": "Mapeamento as-is",
        "description": "Fluxos atuais e gargalos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Rollout"
      },
      {
        "title": "Desenho to-be",
        "description": "Nova malha logística",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Continuous improvement"
      }
    ],
    "bestPractices": [
      "Last mile é 50% do custo — desenhe com obsessão.",
      "Rastreio em tempo real é commodity, não diferencial.",
      "Negocie SLAs com cláusulas claras de penalização.",
      "Use dados históricos para forecasting de demanda.",
      "Sustentabilidade vira KPI obrigatório em 2-3 anos."
    ],
    "kpis": [
      "OTIF (On Time In Full)",
      "Custo por entrega",
      "Lead time",
      "Ocupação de frota %",
      "Reverse logistics rate"
    ],
    "durationWeeks": 32,
    "teamSize": 14,
    "popularity": 46
  },
  {
    "id": "tpl-117",
    "name": "Lastmile Delivery — Pequena Escala",
    "industry": "Logística & Supply Chain",
    "icon": "Truck",
    "description": "Operação de entrega urbana (Pequena Escala)",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Implementação",
      "Piloto",
      "Rollout",
      "Continuous improvement"
    ],
    "tasks": [
      {
        "title": "Treinamento de motoristas",
        "description": "Capacitação operacional",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Implementação de tracking",
        "description": "GPS e telemetria",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Monitorização de KPIs",
        "description": "Dashboards e alertas",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Piloto em uma região",
        "description": "Operação controlada",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Desenho"
      },
      {
        "title": "Programa de melhoria contínua",
        "description": "Kaizen mensal",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Rollout nacional",
        "description": "Expansão para todas as praças",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Piloto"
      },
      {
        "title": "Desenho to-be",
        "description": "Nova malha logística",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Piloto"
      },
      {
        "title": "Negociação com transportadoras",
        "description": "Tarifas e SLAs",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Rollout"
      },
      {
        "title": "Mapeamento as-is",
        "description": "Fluxos atuais e gargalos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Rollout"
      },
      {
        "title": "Selecção de TMS/WMS",
        "description": "RFP e prova de conceito",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Continuous improvement"
      }
    ],
    "bestPractices": [
      "Last mile é 50% do custo — desenhe com obsessão.",
      "Rastreio em tempo real é commodity, não diferencial.",
      "Negocie SLAs com cláusulas claras de penalização.",
      "Use dados históricos para forecasting de demanda.",
      "Sustentabilidade vira KPI obrigatório em 2-3 anos."
    ],
    "kpis": [
      "OTIF (On Time In Full)",
      "Custo por entrega",
      "Lead time",
      "Ocupação de frota %",
      "Reverse logistics rate"
    ],
    "durationWeeks": 32,
    "teamSize": 13,
    "popularity": 81
  },
  {
    "id": "tpl-118",
    "name": "Plantio de Soja em Larga Escala",
    "industry": "Agronegócio",
    "icon": "Sprout",
    "description": "Safra anual de grãos",
    "methodology": "Lean",
    "phases": [
      "Planejamento safra",
      "Preparo de solo",
      "Plantio",
      "Tratos culturais",
      "Colheita",
      "Comercialização"
    ],
    "tasks": [
      {
        "title": "Preparo de solo",
        "description": "Aração, gradagem, calagem",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planejamento safra"
      },
      {
        "title": "Compra de insumos",
        "description": "Sementes, defensivos, adubo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planejamento safra"
      },
      {
        "title": "Manejo integrado de pragas",
        "description": "MIP e monitorização",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Preparo de solo"
      },
      {
        "title": "Armazenagem em silo",
        "description": "Secagem e conservação",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Preparo de solo"
      },
      {
        "title": "Plantio mecanizado",
        "description": "Semeadura com plantadeira",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Plantio"
      },
      {
        "title": "Análise de resultado de safra",
        "description": "Produtividade e custos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Tratos culturais"
      },
      {
        "title": "Comercialização",
        "description": "Negociação com tradings",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Tratos culturais"
      },
      {
        "title": "Colheita mecanizada",
        "description": "Operação de colheitadeiras",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Colheita"
      },
      {
        "title": "Análise de solo",
        "description": "Macro e micronutrientes",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Colheita"
      },
      {
        "title": "Adubação de cobertura",
        "description": "Nitrogenada e potássica",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Comercialização"
      }
    ],
    "bestPractices": [
      "Análise de solo é o ROI mais alto do agronegócio.",
      "MIP reduz custos e protege o meio ambiente.",
      "Hedge cambial protege margens da volatilidade.",
      "Tecnologia embarcada não substitui o olho do agrônomo.",
      "Sustentabilidade é o novo green premium."
    ],
    "kpis": [
      "Produtividade (sacas/ha)",
      "Custo por hectare",
      "% perdas pós-colheita",
      "Margem bruta",
      "ESG score"
    ],
    "durationWeeks": 32,
    "teamSize": 4,
    "popularity": 63
  },
  {
    "id": "tpl-119",
    "name": "Pecuária de Precisão",
    "industry": "Agronegócio",
    "icon": "Sprout",
    "description": "Confinamento com tecnologia",
    "methodology": "Lean",
    "phases": [
      "Planejamento safra",
      "Preparo de solo",
      "Plantio",
      "Tratos culturais",
      "Colheita",
      "Comercialização"
    ],
    "tasks": [
      {
        "title": "Preparo de solo",
        "description": "Aração, gradagem, calagem",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planejamento safra"
      },
      {
        "title": "Plantio mecanizado",
        "description": "Semeadura com plantadeira",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Adubação de cobertura",
        "description": "Nitrogenada e potássica",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Preparo de solo"
      },
      {
        "title": "Colheita mecanizada",
        "description": "Operação de colheitadeiras",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Preparo de solo"
      },
      {
        "title": "Comercialização",
        "description": "Negociação com tradings",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Plantio"
      },
      {
        "title": "Compra de insumos",
        "description": "Sementes, defensivos, adubo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Tratos culturais"
      },
      {
        "title": "Manejo integrado de pragas",
        "description": "MIP e monitorização",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Tratos culturais"
      },
      {
        "title": "Análise de solo",
        "description": "Macro e micronutrientes",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Colheita"
      },
      {
        "title": "Análise de resultado de safra",
        "description": "Produtividade e custos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Colheita"
      },
      {
        "title": "Armazenagem em silo",
        "description": "Secagem e conservação",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Comercialização"
      }
    ],
    "bestPractices": [
      "Análise de solo é o ROI mais alto do agronegócio.",
      "MIP reduz custos e protege o meio ambiente.",
      "Hedge cambial protege margens da volatilidade.",
      "Tecnologia embarcada não substitui o olho do agrônomo.",
      "Sustentabilidade é o novo green premium."
    ],
    "kpis": [
      "Produtividade (sacas/ha)",
      "Custo por hectare",
      "% perdas pós-colheita",
      "Margem bruta",
      "ESG score"
    ],
    "durationWeeks": 32,
    "teamSize": 7,
    "popularity": 72
  },
  {
    "id": "tpl-120",
    "name": "Irrigação por Pivô Central",
    "industry": "Agronegócio",
    "icon": "Sprout",
    "description": "Sistema de irrigação automatizada",
    "methodology": "Waterfall",
    "phases": [
      "Planejamento safra",
      "Preparo de solo",
      "Plantio",
      "Tratos culturais",
      "Colheita",
      "Comercialização"
    ],
    "tasks": [
      {
        "title": "Comercialização",
        "description": "Negociação com tradings",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planejamento safra"
      },
      {
        "title": "Análise de solo",
        "description": "Macro e micronutrientes",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Adubação de cobertura",
        "description": "Nitrogenada e potássica",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Preparo de solo"
      },
      {
        "title": "Colheita mecanizada",
        "description": "Operação de colheitadeiras",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Preparo de solo"
      },
      {
        "title": "Manejo integrado de pragas",
        "description": "MIP e monitorização",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Plantio"
      },
      {
        "title": "Compra de insumos",
        "description": "Sementes, defensivos, adubo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Tratos culturais"
      },
      {
        "title": "Plantio mecanizado",
        "description": "Semeadura com plantadeira",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Tratos culturais"
      },
      {
        "title": "Análise de resultado de safra",
        "description": "Produtividade e custos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Colheita"
      },
      {
        "title": "Preparo de solo",
        "description": "Aração, gradagem, calagem",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Colheita"
      },
      {
        "title": "Armazenagem em silo",
        "description": "Secagem e conservação",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Comercialização"
      }
    ],
    "bestPractices": [
      "Análise de solo é o ROI mais alto do agronegócio.",
      "MIP reduz custos e protege o meio ambiente.",
      "Hedge cambial protege margens da volatilidade.",
      "Tecnologia embarcada não substitui o olho do agrônomo.",
      "Sustentabilidade é o novo green premium."
    ],
    "kpis": [
      "Produtividade (sacas/ha)",
      "Custo por hectare",
      "% perdas pós-colheita",
      "Margem bruta",
      "ESG score"
    ],
    "durationWeeks": 32,
    "teamSize": 18,
    "popularity": 42
  },
  {
    "id": "tpl-121",
    "name": "Certificação Orgânica",
    "industry": "Agronegócio",
    "icon": "Sprout",
    "description": "Conversão para sistema orgânico",
    "methodology": "Lean",
    "phases": [
      "Planejamento safra",
      "Preparo de solo",
      "Plantio",
      "Tratos culturais",
      "Colheita",
      "Comercialização"
    ],
    "tasks": [
      {
        "title": "Adubação de cobertura",
        "description": "Nitrogenada e potássica",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Plantio mecanizado",
        "description": "Semeadura com plantadeira",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Armazenagem em silo",
        "description": "Secagem e conservação",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Preparo de solo"
      },
      {
        "title": "Manejo integrado de pragas",
        "description": "MIP e monitorização",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Preparo de solo"
      },
      {
        "title": "Preparo de solo",
        "description": "Aração, gradagem, calagem",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Plantio"
      },
      {
        "title": "Comercialização",
        "description": "Negociação com tradings",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Tratos culturais"
      },
      {
        "title": "Compra de insumos",
        "description": "Sementes, defensivos, adubo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Tratos culturais"
      },
      {
        "title": "Análise de resultado de safra",
        "description": "Produtividade e custos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Colheita"
      },
      {
        "title": "Análise de solo",
        "description": "Macro e micronutrientes",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Colheita"
      },
      {
        "title": "Colheita mecanizada",
        "description": "Operação de colheitadeiras",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Comercialização"
      }
    ],
    "bestPractices": [
      "Análise de solo é o ROI mais alto do agronegócio.",
      "MIP reduz custos e protege o meio ambiente.",
      "Hedge cambial protege margens da volatilidade.",
      "Tecnologia embarcada não substitui o olho do agrônomo.",
      "Sustentabilidade é o novo green premium."
    ],
    "kpis": [
      "Produtividade (sacas/ha)",
      "Custo por hectare",
      "% perdas pós-colheita",
      "Margem bruta",
      "ESG score"
    ],
    "durationWeeks": 32,
    "teamSize": 10,
    "popularity": 63
  },
  {
    "id": "tpl-122",
    "name": "Agricultura de Precisão com Drones",
    "industry": "Agronegócio",
    "icon": "Sprout",
    "description": "Mapeamento NDVI e pulverização",
    "methodology": "Lean",
    "phases": [
      "Planejamento safra",
      "Preparo de solo",
      "Plantio",
      "Tratos culturais",
      "Colheita",
      "Comercialização"
    ],
    "tasks": [
      {
        "title": "Armazenagem em silo",
        "description": "Secagem e conservação",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Análise de resultado de safra",
        "description": "Produtividade e custos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Planejamento safra"
      },
      {
        "title": "Manejo integrado de pragas",
        "description": "MIP e monitorização",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Preparo de solo"
      },
      {
        "title": "Colheita mecanizada",
        "description": "Operação de colheitadeiras",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Preparo de solo"
      },
      {
        "title": "Plantio mecanizado",
        "description": "Semeadura com plantadeira",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Plantio"
      },
      {
        "title": "Comercialização",
        "description": "Negociação com tradings",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Tratos culturais"
      },
      {
        "title": "Adubação de cobertura",
        "description": "Nitrogenada e potássica",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Tratos culturais"
      },
      {
        "title": "Análise de solo",
        "description": "Macro e micronutrientes",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Colheita"
      },
      {
        "title": "Preparo de solo",
        "description": "Aração, gradagem, calagem",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Colheita"
      },
      {
        "title": "Compra de insumos",
        "description": "Sementes, defensivos, adubo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Comercialização"
      }
    ],
    "bestPractices": [
      "Análise de solo é o ROI mais alto do agronegócio.",
      "MIP reduz custos e protege o meio ambiente.",
      "Hedge cambial protege margens da volatilidade.",
      "Tecnologia embarcada não substitui o olho do agrônomo.",
      "Sustentabilidade é o novo green premium."
    ],
    "kpis": [
      "Produtividade (sacas/ha)",
      "Custo por hectare",
      "% perdas pós-colheita",
      "Margem bruta",
      "ESG score"
    ],
    "durationWeeks": 32,
    "teamSize": 5,
    "popularity": 81
  },
  {
    "id": "tpl-123",
    "name": "Beneficiamento de Café",
    "industry": "Agronegócio",
    "icon": "Sprout",
    "description": "Pós-colheita e classificação",
    "methodology": "Lean",
    "phases": [
      "Planejamento safra",
      "Preparo de solo",
      "Plantio",
      "Tratos culturais",
      "Colheita",
      "Comercialização"
    ],
    "tasks": [
      {
        "title": "Adubação de cobertura",
        "description": "Nitrogenada e potássica",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Comercialização",
        "description": "Negociação com tradings",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planejamento safra"
      },
      {
        "title": "Compra de insumos",
        "description": "Sementes, defensivos, adubo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Preparo de solo"
      },
      {
        "title": "Análise de resultado de safra",
        "description": "Produtividade e custos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Preparo de solo"
      },
      {
        "title": "Manejo integrado de pragas",
        "description": "MIP e monitorização",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Plantio"
      },
      {
        "title": "Análise de solo",
        "description": "Macro e micronutrientes",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Tratos culturais"
      },
      {
        "title": "Preparo de solo",
        "description": "Aração, gradagem, calagem",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Tratos culturais"
      },
      {
        "title": "Colheita mecanizada",
        "description": "Operação de colheitadeiras",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Colheita"
      },
      {
        "title": "Plantio mecanizado",
        "description": "Semeadura com plantadeira",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Colheita"
      },
      {
        "title": "Armazenagem em silo",
        "description": "Secagem e conservação",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Comercialização"
      }
    ],
    "bestPractices": [
      "Análise de solo é o ROI mais alto do agronegócio.",
      "MIP reduz custos e protege o meio ambiente.",
      "Hedge cambial protege margens da volatilidade.",
      "Tecnologia embarcada não substitui o olho do agrônomo.",
      "Sustentabilidade é o novo green premium."
    ],
    "kpis": [
      "Produtividade (sacas/ha)",
      "Custo por hectare",
      "% perdas pós-colheita",
      "Margem bruta",
      "ESG score"
    ],
    "durationWeeks": 32,
    "teamSize": 20,
    "popularity": 49
  },
  {
    "id": "tpl-124",
    "name": "Silo Pulmão",
    "industry": "Agronegócio",
    "icon": "Sprout",
    "description": "Armazenagem de grãos",
    "methodology": "Lean",
    "phases": [
      "Planejamento safra",
      "Preparo de solo",
      "Plantio",
      "Tratos culturais",
      "Colheita",
      "Comercialização"
    ],
    "tasks": [
      {
        "title": "Compra de insumos",
        "description": "Sementes, defensivos, adubo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planejamento safra"
      },
      {
        "title": "Plantio mecanizado",
        "description": "Semeadura com plantadeira",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Armazenagem em silo",
        "description": "Secagem e conservação",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Preparo de solo"
      },
      {
        "title": "Preparo de solo",
        "description": "Aração, gradagem, calagem",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Preparo de solo"
      },
      {
        "title": "Análise de solo",
        "description": "Macro e micronutrientes",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Plantio"
      },
      {
        "title": "Comercialização",
        "description": "Negociação com tradings",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Tratos culturais"
      },
      {
        "title": "Adubação de cobertura",
        "description": "Nitrogenada e potássica",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Tratos culturais"
      },
      {
        "title": "Análise de resultado de safra",
        "description": "Produtividade e custos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Colheita"
      },
      {
        "title": "Colheita mecanizada",
        "description": "Operação de colheitadeiras",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Colheita"
      },
      {
        "title": "Manejo integrado de pragas",
        "description": "MIP e monitorização",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Comercialização"
      }
    ],
    "bestPractices": [
      "Análise de solo é o ROI mais alto do agronegócio.",
      "MIP reduz custos e protege o meio ambiente.",
      "Hedge cambial protege margens da volatilidade.",
      "Tecnologia embarcada não substitui o olho do agrônomo.",
      "Sustentabilidade é o novo green premium."
    ],
    "kpis": [
      "Produtividade (sacas/ha)",
      "Custo por hectare",
      "% perdas pós-colheita",
      "Margem bruta",
      "ESG score"
    ],
    "durationWeeks": 32,
    "teamSize": 6,
    "popularity": 63
  },
  {
    "id": "tpl-125",
    "name": "Biogás de Resíduos",
    "industry": "Agronegócio",
    "icon": "Sprout",
    "description": "Aproveitamento energético",
    "methodology": "Lean",
    "phases": [
      "Planejamento safra",
      "Preparo de solo",
      "Plantio",
      "Tratos culturais",
      "Colheita",
      "Comercialização"
    ],
    "tasks": [
      {
        "title": "Análise de solo",
        "description": "Macro e micronutrientes",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Adubação de cobertura",
        "description": "Nitrogenada e potássica",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Compra de insumos",
        "description": "Sementes, defensivos, adubo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Preparo de solo"
      },
      {
        "title": "Colheita mecanizada",
        "description": "Operação de colheitadeiras",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Preparo de solo"
      },
      {
        "title": "Comercialização",
        "description": "Negociação com tradings",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Plantio"
      },
      {
        "title": "Preparo de solo",
        "description": "Aração, gradagem, calagem",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Tratos culturais"
      },
      {
        "title": "Armazenagem em silo",
        "description": "Secagem e conservação",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Tratos culturais"
      },
      {
        "title": "Análise de resultado de safra",
        "description": "Produtividade e custos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Colheita"
      },
      {
        "title": "Manejo integrado de pragas",
        "description": "MIP e monitorização",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Colheita"
      },
      {
        "title": "Plantio mecanizado",
        "description": "Semeadura com plantadeira",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Comercialização"
      }
    ],
    "bestPractices": [
      "Análise de solo é o ROI mais alto do agronegócio.",
      "MIP reduz custos e protege o meio ambiente.",
      "Hedge cambial protege margens da volatilidade.",
      "Tecnologia embarcada não substitui o olho do agrônomo.",
      "Sustentabilidade é o novo green premium."
    ],
    "kpis": [
      "Produtividade (sacas/ha)",
      "Custo por hectare",
      "% perdas pós-colheita",
      "Margem bruta",
      "ESG score"
    ],
    "durationWeeks": 32,
    "teamSize": 8,
    "popularity": 88
  },
  {
    "id": "tpl-126",
    "name": "Exportação Agrícola",
    "industry": "Agronegócio",
    "icon": "Sprout",
    "description": "Logística internacional",
    "methodology": "Lean",
    "phases": [
      "Planejamento safra",
      "Preparo de solo",
      "Plantio",
      "Tratos culturais",
      "Colheita",
      "Comercialização"
    ],
    "tasks": [
      {
        "title": "Armazenagem em silo",
        "description": "Secagem e conservação",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Análise de solo",
        "description": "Macro e micronutrientes",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Compra de insumos",
        "description": "Sementes, defensivos, adubo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Preparo de solo"
      },
      {
        "title": "Comercialização",
        "description": "Negociação com tradings",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Preparo de solo"
      },
      {
        "title": "Preparo de solo",
        "description": "Aração, gradagem, calagem",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Plantio"
      },
      {
        "title": "Análise de resultado de safra",
        "description": "Produtividade e custos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Tratos culturais"
      },
      {
        "title": "Manejo integrado de pragas",
        "description": "MIP e monitorização",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Tratos culturais"
      },
      {
        "title": "Adubação de cobertura",
        "description": "Nitrogenada e potássica",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Colheita"
      },
      {
        "title": "Plantio mecanizado",
        "description": "Semeadura com plantadeira",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Colheita"
      },
      {
        "title": "Colheita mecanizada",
        "description": "Operação de colheitadeiras",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Comercialização"
      }
    ],
    "bestPractices": [
      "Análise de solo é o ROI mais alto do agronegócio.",
      "MIP reduz custos e protege o meio ambiente.",
      "Hedge cambial protege margens da volatilidade.",
      "Tecnologia embarcada não substitui o olho do agrônomo.",
      "Sustentabilidade é o novo green premium."
    ],
    "kpis": [
      "Produtividade (sacas/ha)",
      "Custo por hectare",
      "% perdas pós-colheita",
      "Margem bruta",
      "ESG score"
    ],
    "durationWeeks": 32,
    "teamSize": 11,
    "popularity": 59
  },
  {
    "id": "tpl-127",
    "name": "Programa de ATER",
    "industry": "Agronegócio",
    "icon": "Sprout",
    "description": "Assistência técnica rural",
    "methodology": "Waterfall",
    "phases": [
      "Planejamento safra",
      "Preparo de solo",
      "Plantio",
      "Tratos culturais",
      "Colheita",
      "Comercialização"
    ],
    "tasks": [
      {
        "title": "Análise de solo",
        "description": "Macro e micronutrientes",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Plantio mecanizado",
        "description": "Semeadura com plantadeira",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Colheita mecanizada",
        "description": "Operação de colheitadeiras",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Preparo de solo"
      },
      {
        "title": "Adubação de cobertura",
        "description": "Nitrogenada e potássica",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Plantio"
      },
      {
        "title": "Manejo integrado de pragas",
        "description": "MIP e monitorização",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Plantio"
      },
      {
        "title": "Comercialização",
        "description": "Negociação com tradings",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Tratos culturais"
      },
      {
        "title": "Análise de resultado de safra",
        "description": "Produtividade e custos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Colheita"
      },
      {
        "title": "Armazenagem em silo",
        "description": "Secagem e conservação",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Colheita"
      },
      {
        "title": "Compra de insumos",
        "description": "Sementes, defensivos, adubo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Comercialização"
      }
    ],
    "bestPractices": [
      "Análise de solo é o ROI mais alto do agronegócio.",
      "MIP reduz custos e protege o meio ambiente.",
      "Hedge cambial protege margens da volatilidade.",
      "Tecnologia embarcada não substitui o olho do agrônomo.",
      "Sustentabilidade é o novo green premium."
    ],
    "kpis": [
      "Produtividade (sacas/ha)",
      "Custo por hectare",
      "% perdas pós-colheita",
      "Margem bruta",
      "ESG score"
    ],
    "durationWeeks": 29,
    "teamSize": 24,
    "popularity": 72
  },
  {
    "id": "tpl-128",
    "name": "Plantio de Soja em Larga Escala — Pequena Escala",
    "industry": "Agronegócio",
    "icon": "Sprout",
    "description": "Safra anual de grãos (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Planejamento safra",
      "Preparo de solo",
      "Plantio",
      "Tratos culturais",
      "Colheita",
      "Comercialização"
    ],
    "tasks": [
      {
        "title": "Plantio mecanizado",
        "description": "Semeadura com plantadeira",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Preparo de solo",
        "description": "Aração, gradagem, calagem",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planejamento safra"
      },
      {
        "title": "Manejo integrado de pragas",
        "description": "MIP e monitorização",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Preparo de solo"
      },
      {
        "title": "Análise de resultado de safra",
        "description": "Produtividade e custos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Preparo de solo"
      },
      {
        "title": "Análise de solo",
        "description": "Macro e micronutrientes",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Plantio"
      },
      {
        "title": "Armazenagem em silo",
        "description": "Secagem e conservação",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Tratos culturais"
      },
      {
        "title": "Comercialização",
        "description": "Negociação com tradings",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Tratos culturais"
      },
      {
        "title": "Adubação de cobertura",
        "description": "Nitrogenada e potássica",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Colheita"
      },
      {
        "title": "Compra de insumos",
        "description": "Sementes, defensivos, adubo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Colheita"
      },
      {
        "title": "Colheita mecanizada",
        "description": "Operação de colheitadeiras",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Comercialização"
      }
    ],
    "bestPractices": [
      "Análise de solo é o ROI mais alto do agronegócio.",
      "MIP reduz custos e protege o meio ambiente.",
      "Hedge cambial protege margens da volatilidade.",
      "Tecnologia embarcada não substitui o olho do agrônomo.",
      "Sustentabilidade é o novo green premium."
    ],
    "kpis": [
      "Produtividade (sacas/ha)",
      "Custo por hectare",
      "% perdas pós-colheita",
      "Margem bruta",
      "ESG score"
    ],
    "durationWeeks": 32,
    "teamSize": 20,
    "popularity": 63
  },
  {
    "id": "tpl-129",
    "name": "Pecuária de Precisão — Pequena Escala",
    "industry": "Agronegócio",
    "icon": "Sprout",
    "description": "Confinamento com tecnologia (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Planejamento safra",
      "Preparo de solo",
      "Plantio",
      "Tratos culturais",
      "Colheita",
      "Comercialização"
    ],
    "tasks": [
      {
        "title": "Comercialização",
        "description": "Negociação com tradings",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planejamento safra"
      },
      {
        "title": "Análise de resultado de safra",
        "description": "Produtividade e custos",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Planejamento safra"
      },
      {
        "title": "Análise de solo",
        "description": "Macro e micronutrientes",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Preparo de solo"
      },
      {
        "title": "Plantio mecanizado",
        "description": "Semeadura com plantadeira",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Plantio"
      },
      {
        "title": "Colheita mecanizada",
        "description": "Operação de colheitadeiras",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Plantio"
      },
      {
        "title": "Armazenagem em silo",
        "description": "Secagem e conservação",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Tratos culturais"
      },
      {
        "title": "Adubação de cobertura",
        "description": "Nitrogenada e potássica",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Colheita"
      },
      {
        "title": "Compra de insumos",
        "description": "Sementes, defensivos, adubo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Colheita"
      },
      {
        "title": "Preparo de solo",
        "description": "Aração, gradagem, calagem",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Comercialização"
      }
    ],
    "bestPractices": [
      "Análise de solo é o ROI mais alto do agronegócio.",
      "MIP reduz custos e protege o meio ambiente.",
      "Hedge cambial protege margens da volatilidade.",
      "Tecnologia embarcada não substitui o olho do agrônomo.",
      "Sustentabilidade é o novo green premium."
    ],
    "kpis": [
      "Produtividade (sacas/ha)",
      "Custo por hectare",
      "% perdas pós-colheita",
      "Margem bruta",
      "ESG score"
    ],
    "durationWeeks": 23,
    "teamSize": 15,
    "popularity": 90
  },
  {
    "id": "tpl-130",
    "name": "Irrigação por Pivô Central — Pequena Escala",
    "industry": "Agronegócio",
    "icon": "Sprout",
    "description": "Sistema de irrigação automatizada (Pequena Escala)",
    "methodology": "Lean",
    "phases": [
      "Planejamento safra",
      "Preparo de solo",
      "Plantio",
      "Tratos culturais",
      "Colheita",
      "Comercialização"
    ],
    "tasks": [
      {
        "title": "Adubação de cobertura",
        "description": "Nitrogenada e potássica",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Plantio mecanizado",
        "description": "Semeadura com plantadeira",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planejamento safra"
      },
      {
        "title": "Compra de insumos",
        "description": "Sementes, defensivos, adubo",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Preparo de solo"
      },
      {
        "title": "Colheita mecanizada",
        "description": "Operação de colheitadeiras",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Plantio"
      },
      {
        "title": "Manejo integrado de pragas",
        "description": "MIP e monitorização",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Plantio"
      },
      {
        "title": "Preparo de solo",
        "description": "Aração, gradagem, calagem",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Tratos culturais"
      },
      {
        "title": "Armazenagem em silo",
        "description": "Secagem e conservação",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Colheita"
      },
      {
        "title": "Análise de solo",
        "description": "Macro e micronutrientes",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Colheita"
      },
      {
        "title": "Comercialização",
        "description": "Negociação com tradings",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Comercialização"
      }
    ],
    "bestPractices": [
      "Análise de solo é o ROI mais alto do agronegócio.",
      "MIP reduz custos e protege o meio ambiente.",
      "Hedge cambial protege margens da volatilidade.",
      "Tecnologia embarcada não substitui o olho do agrônomo.",
      "Sustentabilidade é o novo green premium."
    ],
    "kpis": [
      "Produtividade (sacas/ha)",
      "Custo por hectare",
      "% perdas pós-colheita",
      "Margem bruta",
      "ESG score"
    ],
    "durationWeeks": 31,
    "teamSize": 24,
    "popularity": 51
  },
  {
    "id": "tpl-131",
    "name": "Lançamento de Produto",
    "industry": "Marketing",
    "icon": "Megaphone",
    "description": "Go-to-market multicanal",
    "methodology": "Agile",
    "phases": [
      "Briefing",
      "Estratégia",
      "Criação",
      "Produção",
      "Veiculação",
      "Mensuração"
    ],
    "tasks": [
      {
        "title": "Influencer outreach",
        "description": "Briefing e contratação",
        "priority": "normal",
        "estimatedDays": 10,
        "phase": "Briefing"
      },
      {
        "title": "Definição de big idea",
        "description": "Plataforma criativa",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Briefing"
      },
      {
        "title": "Tracking e dashboards",
        "description": "Pixels, GA4 e BI",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Estratégia"
      },
      {
        "title": "Briefing com cliente",
        "description": "Objetivos, público, KPI",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Estratégia"
      },
      {
        "title": "Plano de mídia",
        "description": "Mix on/off e budget",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Criação"
      },
      {
        "title": "Storyboard e roteiros",
        "description": "Criação de peças",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Produção"
      },
      {
        "title": "Setup de campanhas pagas",
        "description": "Google/Meta/TikTok Ads",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Produção"
      },
      {
        "title": "Pesquisa e insights",
        "description": "Desk research e entrevistas",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Veiculação"
      },
      {
        "title": "Produção de vídeo",
        "description": "Filmagem e pós-produção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Veiculação"
      },
      {
        "title": "Relatório de campanha",
        "description": "Análise e learnings",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Mensuração"
      }
    ],
    "bestPractices": [
      "Brief curto + insight forte > brief extenso sem foco.",
      "Teste criatividade pequena antes de escalar mídia.",
      "Mensure brand lift, não só clicks.",
      "Comunidade > audiência. Construa relacionamento.",
      "Owned media é o ativo de longo prazo."
    ],
    "kpis": [
      "CAC",
      "ROAS",
      "Brand awareness",
      "Engagement rate",
      "Conversion rate"
    ],
    "durationWeeks": 12,
    "teamSize": 5,
    "popularity": 60
  },
  {
    "id": "tpl-132",
    "name": "Rebranding Corporativo",
    "industry": "Marketing",
    "icon": "Megaphone",
    "description": "Nova identidade de marca",
    "methodology": "Kanban",
    "phases": [
      "Briefing",
      "Estratégia",
      "Criação",
      "Produção",
      "Veiculação",
      "Mensuração"
    ],
    "tasks": [
      {
        "title": "Tracking e dashboards",
        "description": "Pixels, GA4 e BI",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Briefing"
      },
      {
        "title": "Setup de campanhas pagas",
        "description": "Google/Meta/TikTok Ads",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Briefing"
      },
      {
        "title": "Influencer outreach",
        "description": "Briefing e contratação",
        "priority": "normal",
        "estimatedDays": 10,
        "phase": "Estratégia"
      },
      {
        "title": "Definição de big idea",
        "description": "Plataforma criativa",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Estratégia"
      },
      {
        "title": "Briefing com cliente",
        "description": "Objetivos, público, KPI",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Criação"
      },
      {
        "title": "Pesquisa e insights",
        "description": "Desk research e entrevistas",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Produção"
      },
      {
        "title": "Relatório de campanha",
        "description": "Análise e learnings",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Produção"
      },
      {
        "title": "Produção de vídeo",
        "description": "Filmagem e pós-produção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Veiculação"
      },
      {
        "title": "Plano de mídia",
        "description": "Mix on/off e budget",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Veiculação"
      },
      {
        "title": "Storyboard e roteiros",
        "description": "Criação de peças",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Mensuração"
      }
    ],
    "bestPractices": [
      "Brief curto + insight forte > brief extenso sem foco.",
      "Teste criatividade pequena antes de escalar mídia.",
      "Mensure brand lift, não só clicks.",
      "Comunidade > audiência. Construa relacionamento.",
      "Owned media é o ativo de longo prazo."
    ],
    "kpis": [
      "CAC",
      "ROAS",
      "Brand awareness",
      "Engagement rate",
      "Conversion rate"
    ],
    "durationWeeks": 12,
    "teamSize": 7,
    "popularity": 91
  },
  {
    "id": "tpl-133",
    "name": "Campanha de Performance",
    "industry": "Marketing",
    "icon": "Megaphone",
    "description": "Aquisição paga digital",
    "methodology": "Kanban",
    "phases": [
      "Briefing",
      "Estratégia",
      "Criação",
      "Produção",
      "Veiculação",
      "Mensuração"
    ],
    "tasks": [
      {
        "title": "Setup de campanhas pagas",
        "description": "Google/Meta/TikTok Ads",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Briefing"
      },
      {
        "title": "Relatório de campanha",
        "description": "Análise e learnings",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Briefing"
      },
      {
        "title": "Influencer outreach",
        "description": "Briefing e contratação",
        "priority": "normal",
        "estimatedDays": 10,
        "phase": "Estratégia"
      },
      {
        "title": "Storyboard e roteiros",
        "description": "Criação de peças",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Estratégia"
      },
      {
        "title": "Definição de big idea",
        "description": "Plataforma criativa",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Criação"
      },
      {
        "title": "Pesquisa e insights",
        "description": "Desk research e entrevistas",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Produção"
      },
      {
        "title": "Tracking e dashboards",
        "description": "Pixels, GA4 e BI",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Produção"
      },
      {
        "title": "Plano de mídia",
        "description": "Mix on/off e budget",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Veiculação"
      },
      {
        "title": "Produção de vídeo",
        "description": "Filmagem e pós-produção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Veiculação"
      },
      {
        "title": "Briefing com cliente",
        "description": "Objetivos, público, KPI",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Mensuração"
      }
    ],
    "bestPractices": [
      "Brief curto + insight forte > brief extenso sem foco.",
      "Teste criatividade pequena antes de escalar mídia.",
      "Mensure brand lift, não só clicks.",
      "Comunidade > audiência. Construa relacionamento.",
      "Owned media é o ativo de longo prazo."
    ],
    "kpis": [
      "CAC",
      "ROAS",
      "Brand awareness",
      "Engagement rate",
      "Conversion rate"
    ],
    "durationWeeks": 12,
    "teamSize": 6,
    "popularity": 86
  },
  {
    "id": "tpl-134",
    "name": "Inbound Marketing",
    "industry": "Marketing",
    "icon": "Megaphone",
    "description": "SEO + conteúdo + automação",
    "methodology": "Kanban",
    "phases": [
      "Briefing",
      "Estratégia",
      "Criação",
      "Produção",
      "Veiculação",
      "Mensuração"
    ],
    "tasks": [
      {
        "title": "Pesquisa e insights",
        "description": "Desk research e entrevistas",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Briefing"
      },
      {
        "title": "Setup de campanhas pagas",
        "description": "Google/Meta/TikTok Ads",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Briefing"
      },
      {
        "title": "Definição de big idea",
        "description": "Plataforma criativa",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Estratégia"
      },
      {
        "title": "Produção de vídeo",
        "description": "Filmagem e pós-produção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Estratégia"
      },
      {
        "title": "Influencer outreach",
        "description": "Briefing e contratação",
        "priority": "normal",
        "estimatedDays": 10,
        "phase": "Criação"
      },
      {
        "title": "Plano de mídia",
        "description": "Mix on/off e budget",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Produção"
      },
      {
        "title": "Briefing com cliente",
        "description": "Objetivos, público, KPI",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Produção"
      },
      {
        "title": "Storyboard e roteiros",
        "description": "Criação de peças",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Veiculação"
      },
      {
        "title": "Relatório de campanha",
        "description": "Análise e learnings",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Veiculação"
      },
      {
        "title": "Tracking e dashboards",
        "description": "Pixels, GA4 e BI",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Mensuração"
      }
    ],
    "bestPractices": [
      "Brief curto + insight forte > brief extenso sem foco.",
      "Teste criatividade pequena antes de escalar mídia.",
      "Mensure brand lift, não só clicks.",
      "Comunidade > audiência. Construa relacionamento.",
      "Owned media é o ativo de longo prazo."
    ],
    "kpis": [
      "CAC",
      "ROAS",
      "Brand awareness",
      "Engagement rate",
      "Conversion rate"
    ],
    "durationWeeks": 12,
    "teamSize": 18,
    "popularity": 78
  },
  {
    "id": "tpl-135",
    "name": "Programa de Influência",
    "industry": "Marketing",
    "icon": "Megaphone",
    "description": "Influencers e UGC",
    "methodology": "Kanban",
    "phases": [
      "Briefing",
      "Estratégia",
      "Criação",
      "Produção",
      "Veiculação",
      "Mensuração"
    ],
    "tasks": [
      {
        "title": "Definição de big idea",
        "description": "Plataforma criativa",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Briefing"
      },
      {
        "title": "Influencer outreach",
        "description": "Briefing e contratação",
        "priority": "normal",
        "estimatedDays": 10,
        "phase": "Briefing"
      },
      {
        "title": "Plano de mídia",
        "description": "Mix on/off e budget",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Estratégia"
      },
      {
        "title": "Storyboard e roteiros",
        "description": "Criação de peças",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Estratégia"
      },
      {
        "title": "Briefing com cliente",
        "description": "Objetivos, público, KPI",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Criação"
      },
      {
        "title": "Relatório de campanha",
        "description": "Análise e learnings",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Produção"
      },
      {
        "title": "Setup de campanhas pagas",
        "description": "Google/Meta/TikTok Ads",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Produção"
      },
      {
        "title": "Pesquisa e insights",
        "description": "Desk research e entrevistas",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Veiculação"
      },
      {
        "title": "Tracking e dashboards",
        "description": "Pixels, GA4 e BI",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Veiculação"
      },
      {
        "title": "Produção de vídeo",
        "description": "Filmagem e pós-produção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Mensuração"
      }
    ],
    "bestPractices": [
      "Brief curto + insight forte > brief extenso sem foco.",
      "Teste criatividade pequena antes de escalar mídia.",
      "Mensure brand lift, não só clicks.",
      "Comunidade > audiência. Construa relacionamento.",
      "Owned media é o ativo de longo prazo."
    ],
    "kpis": [
      "CAC",
      "ROAS",
      "Brand awareness",
      "Engagement rate",
      "Conversion rate"
    ],
    "durationWeeks": 12,
    "teamSize": 15,
    "popularity": 72
  },
  {
    "id": "tpl-136",
    "name": "Evento Anual de Marca",
    "industry": "Marketing",
    "icon": "Megaphone",
    "description": "Brand experience presencial",
    "methodology": "Kanban",
    "phases": [
      "Briefing",
      "Estratégia",
      "Criação",
      "Produção",
      "Veiculação",
      "Mensuração"
    ],
    "tasks": [
      {
        "title": "Briefing com cliente",
        "description": "Objetivos, público, KPI",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Briefing"
      },
      {
        "title": "Definição de big idea",
        "description": "Plataforma criativa",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Briefing"
      },
      {
        "title": "Influencer outreach",
        "description": "Briefing e contratação",
        "priority": "normal",
        "estimatedDays": 10,
        "phase": "Estratégia"
      },
      {
        "title": "Relatório de campanha",
        "description": "Análise e learnings",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Estratégia"
      },
      {
        "title": "Pesquisa e insights",
        "description": "Desk research e entrevistas",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Criação"
      },
      {
        "title": "Setup de campanhas pagas",
        "description": "Google/Meta/TikTok Ads",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Produção"
      },
      {
        "title": "Plano de mídia",
        "description": "Mix on/off e budget",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Produção"
      },
      {
        "title": "Tracking e dashboards",
        "description": "Pixels, GA4 e BI",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Veiculação"
      },
      {
        "title": "Storyboard e roteiros",
        "description": "Criação de peças",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Veiculação"
      },
      {
        "title": "Produção de vídeo",
        "description": "Filmagem e pós-produção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Mensuração"
      }
    ],
    "bestPractices": [
      "Brief curto + insight forte > brief extenso sem foco.",
      "Teste criatividade pequena antes de escalar mídia.",
      "Mensure brand lift, não só clicks.",
      "Comunidade > audiência. Construa relacionamento.",
      "Owned media é o ativo de longo prazo."
    ],
    "kpis": [
      "CAC",
      "ROAS",
      "Brand awareness",
      "Engagement rate",
      "Conversion rate"
    ],
    "durationWeeks": 12,
    "teamSize": 22,
    "popularity": 42
  },
  {
    "id": "tpl-137",
    "name": "Pesquisa de Mercado",
    "industry": "Marketing",
    "icon": "Megaphone",
    "description": "Estudo quantitativo nacional",
    "methodology": "Kanban",
    "phases": [
      "Briefing",
      "Estratégia",
      "Criação",
      "Produção",
      "Veiculação",
      "Mensuração"
    ],
    "tasks": [
      {
        "title": "Definição de big idea",
        "description": "Plataforma criativa",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Briefing"
      },
      {
        "title": "Influencer outreach",
        "description": "Briefing e contratação",
        "priority": "normal",
        "estimatedDays": 10,
        "phase": "Briefing"
      },
      {
        "title": "Plano de mídia",
        "description": "Mix on/off e budget",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Estratégia"
      },
      {
        "title": "Relatório de campanha",
        "description": "Análise e learnings",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Estratégia"
      },
      {
        "title": "Storyboard e roteiros",
        "description": "Criação de peças",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Criação"
      },
      {
        "title": "Briefing com cliente",
        "description": "Objetivos, público, KPI",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Produção"
      },
      {
        "title": "Pesquisa e insights",
        "description": "Desk research e entrevistas",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Produção"
      },
      {
        "title": "Setup de campanhas pagas",
        "description": "Google/Meta/TikTok Ads",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Veiculação"
      },
      {
        "title": "Tracking e dashboards",
        "description": "Pixels, GA4 e BI",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Veiculação"
      },
      {
        "title": "Produção de vídeo",
        "description": "Filmagem e pós-produção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Mensuração"
      }
    ],
    "bestPractices": [
      "Brief curto + insight forte > brief extenso sem foco.",
      "Teste criatividade pequena antes de escalar mídia.",
      "Mensure brand lift, não só clicks.",
      "Comunidade > audiência. Construa relacionamento.",
      "Owned media é o ativo de longo prazo."
    ],
    "kpis": [
      "CAC",
      "ROAS",
      "Brand awareness",
      "Engagement rate",
      "Conversion rate"
    ],
    "durationWeeks": 12,
    "teamSize": 24,
    "popularity": 57
  },
  {
    "id": "tpl-138",
    "name": "Plataforma de CRM",
    "industry": "Marketing",
    "icon": "Megaphone",
    "description": "Implementação Salesforce/HubSpot",
    "methodology": "Agile",
    "phases": [
      "Briefing",
      "Estratégia",
      "Criação",
      "Produção",
      "Veiculação",
      "Mensuração"
    ],
    "tasks": [
      {
        "title": "Pesquisa e insights",
        "description": "Desk research e entrevistas",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Briefing"
      },
      {
        "title": "Briefing com cliente",
        "description": "Objetivos, público, KPI",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Briefing"
      },
      {
        "title": "Definição de big idea",
        "description": "Plataforma criativa",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Estratégia"
      },
      {
        "title": "Storyboard e roteiros",
        "description": "Criação de peças",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Estratégia"
      },
      {
        "title": "Produção de vídeo",
        "description": "Filmagem e pós-produção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Criação"
      },
      {
        "title": "Setup de campanhas pagas",
        "description": "Google/Meta/TikTok Ads",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Produção"
      },
      {
        "title": "Tracking e dashboards",
        "description": "Pixels, GA4 e BI",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Produção"
      },
      {
        "title": "Relatório de campanha",
        "description": "Análise e learnings",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Veiculação"
      },
      {
        "title": "Influencer outreach",
        "description": "Briefing e contratação",
        "priority": "normal",
        "estimatedDays": 10,
        "phase": "Veiculação"
      },
      {
        "title": "Plano de mídia",
        "description": "Mix on/off e budget",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Mensuração"
      }
    ],
    "bestPractices": [
      "Brief curto + insight forte > brief extenso sem foco.",
      "Teste criatividade pequena antes de escalar mídia.",
      "Mensure brand lift, não só clicks.",
      "Comunidade > audiência. Construa relacionamento.",
      "Owned media é o ativo de longo prazo."
    ],
    "kpis": [
      "CAC",
      "ROAS",
      "Brand awareness",
      "Engagement rate",
      "Conversion rate"
    ],
    "durationWeeks": 12,
    "teamSize": 23,
    "popularity": 58
  },
  {
    "id": "tpl-139",
    "name": "Trade Marketing",
    "industry": "Marketing",
    "icon": "Megaphone",
    "description": "Ativação em pontos de venda",
    "methodology": "Kanban",
    "phases": [
      "Briefing",
      "Estratégia",
      "Criação",
      "Produção",
      "Veiculação",
      "Mensuração"
    ],
    "tasks": [
      {
        "title": "Storyboard e roteiros",
        "description": "Criação de peças",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Briefing"
      },
      {
        "title": "Pesquisa e insights",
        "description": "Desk research e entrevistas",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Briefing"
      },
      {
        "title": "Definição de big idea",
        "description": "Plataforma criativa",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Estratégia"
      },
      {
        "title": "Setup de campanhas pagas",
        "description": "Google/Meta/TikTok Ads",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Estratégia"
      },
      {
        "title": "Briefing com cliente",
        "description": "Objetivos, público, KPI",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Criação"
      },
      {
        "title": "Relatório de campanha",
        "description": "Análise e learnings",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Produção"
      },
      {
        "title": "Tracking e dashboards",
        "description": "Pixels, GA4 e BI",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Produção"
      },
      {
        "title": "Influencer outreach",
        "description": "Briefing e contratação",
        "priority": "normal",
        "estimatedDays": 10,
        "phase": "Veiculação"
      },
      {
        "title": "Produção de vídeo",
        "description": "Filmagem e pós-produção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Veiculação"
      },
      {
        "title": "Plano de mídia",
        "description": "Mix on/off e budget",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Mensuração"
      }
    ],
    "bestPractices": [
      "Brief curto + insight forte > brief extenso sem foco.",
      "Teste criatividade pequena antes de escalar mídia.",
      "Mensure brand lift, não só clicks.",
      "Comunidade > audiência. Construa relacionamento.",
      "Owned media é o ativo de longo prazo."
    ],
    "kpis": [
      "CAC",
      "ROAS",
      "Brand awareness",
      "Engagement rate",
      "Conversion rate"
    ],
    "durationWeeks": 12,
    "teamSize": 25,
    "popularity": 62
  },
  {
    "id": "tpl-140",
    "name": "Brand Tracking",
    "industry": "Marketing",
    "icon": "Megaphone",
    "description": "Monitorização de awareness",
    "methodology": "Agile",
    "phases": [
      "Briefing",
      "Estratégia",
      "Criação",
      "Produção",
      "Veiculação",
      "Mensuração"
    ],
    "tasks": [
      {
        "title": "Tracking e dashboards",
        "description": "Pixels, GA4 e BI",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Briefing"
      },
      {
        "title": "Relatório de campanha",
        "description": "Análise e learnings",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Briefing"
      },
      {
        "title": "Produção de vídeo",
        "description": "Filmagem e pós-produção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Estratégia"
      },
      {
        "title": "Definição de big idea",
        "description": "Plataforma criativa",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Criação"
      },
      {
        "title": "Pesquisa e insights",
        "description": "Desk research e entrevistas",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Criação"
      },
      {
        "title": "Plano de mídia",
        "description": "Mix on/off e budget",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Produção"
      },
      {
        "title": "Setup de campanhas pagas",
        "description": "Google/Meta/TikTok Ads",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Veiculação"
      },
      {
        "title": "Storyboard e roteiros",
        "description": "Criação de peças",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Veiculação"
      },
      {
        "title": "Briefing com cliente",
        "description": "Objetivos, público, KPI",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Mensuração"
      }
    ],
    "bestPractices": [
      "Brief curto + insight forte > brief extenso sem foco.",
      "Teste criatividade pequena antes de escalar mídia.",
      "Mensure brand lift, não só clicks.",
      "Comunidade > audiência. Construa relacionamento.",
      "Owned media é o ativo de longo prazo."
    ],
    "kpis": [
      "CAC",
      "ROAS",
      "Brand awareness",
      "Engagement rate",
      "Conversion rate"
    ],
    "durationWeeks": 11,
    "teamSize": 10,
    "popularity": 90
  },
  {
    "id": "tpl-141",
    "name": "Lançamento de Produto — Pequena Escala",
    "industry": "Marketing",
    "icon": "Megaphone",
    "description": "Go-to-market multicanal (Pequena Escala)",
    "methodology": "Agile",
    "phases": [
      "Briefing",
      "Estratégia",
      "Criação",
      "Produção",
      "Veiculação",
      "Mensuração"
    ],
    "tasks": [
      {
        "title": "Storyboard e roteiros",
        "description": "Criação de peças",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Briefing"
      },
      {
        "title": "Influencer outreach",
        "description": "Briefing e contratação",
        "priority": "normal",
        "estimatedDays": 10,
        "phase": "Briefing"
      },
      {
        "title": "Briefing com cliente",
        "description": "Objetivos, público, KPI",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Estratégia"
      },
      {
        "title": "Definição de big idea",
        "description": "Plataforma criativa",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Estratégia"
      },
      {
        "title": "Produção de vídeo",
        "description": "Filmagem e pós-produção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Criação"
      },
      {
        "title": "Plano de mídia",
        "description": "Mix on/off e budget",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Produção"
      },
      {
        "title": "Setup de campanhas pagas",
        "description": "Google/Meta/TikTok Ads",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Produção"
      },
      {
        "title": "Pesquisa e insights",
        "description": "Desk research e entrevistas",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Veiculação"
      },
      {
        "title": "Tracking e dashboards",
        "description": "Pixels, GA4 e BI",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Veiculação"
      },
      {
        "title": "Relatório de campanha",
        "description": "Análise e learnings",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Mensuração"
      }
    ],
    "bestPractices": [
      "Brief curto + insight forte > brief extenso sem foco.",
      "Teste criatividade pequena antes de escalar mídia.",
      "Mensure brand lift, não só clicks.",
      "Comunidade > audiência. Construa relacionamento.",
      "Owned media é o ativo de longo prazo."
    ],
    "kpis": [
      "CAC",
      "ROAS",
      "Brand awareness",
      "Engagement rate",
      "Conversion rate"
    ],
    "durationWeeks": 12,
    "teamSize": 13,
    "popularity": 65
  },
  {
    "id": "tpl-142",
    "name": "Rebranding Corporativo — Pequena Escala",
    "industry": "Marketing",
    "icon": "Megaphone",
    "description": "Nova identidade de marca (Pequena Escala)",
    "methodology": "Kanban",
    "phases": [
      "Briefing",
      "Estratégia",
      "Criação",
      "Produção",
      "Veiculação",
      "Mensuração"
    ],
    "tasks": [
      {
        "title": "Tracking e dashboards",
        "description": "Pixels, GA4 e BI",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Briefing"
      },
      {
        "title": "Setup de campanhas pagas",
        "description": "Google/Meta/TikTok Ads",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Briefing"
      },
      {
        "title": "Relatório de campanha",
        "description": "Análise e learnings",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Estratégia"
      },
      {
        "title": "Influencer outreach",
        "description": "Briefing e contratação",
        "priority": "normal",
        "estimatedDays": 10,
        "phase": "Estratégia"
      },
      {
        "title": "Produção de vídeo",
        "description": "Filmagem e pós-produção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Criação"
      },
      {
        "title": "Briefing com cliente",
        "description": "Objetivos, público, KPI",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Produção"
      },
      {
        "title": "Pesquisa e insights",
        "description": "Desk research e entrevistas",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Produção"
      },
      {
        "title": "Storyboard e roteiros",
        "description": "Criação de peças",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Veiculação"
      },
      {
        "title": "Plano de mídia",
        "description": "Mix on/off e budget",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Veiculação"
      },
      {
        "title": "Definição de big idea",
        "description": "Plataforma criativa",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Mensuração"
      }
    ],
    "bestPractices": [
      "Brief curto + insight forte > brief extenso sem foco.",
      "Teste criatividade pequena antes de escalar mídia.",
      "Mensure brand lift, não só clicks.",
      "Comunidade > audiência. Construa relacionamento.",
      "Owned media é o ativo de longo prazo."
    ],
    "kpis": [
      "CAC",
      "ROAS",
      "Brand awareness",
      "Engagement rate",
      "Conversion rate"
    ],
    "durationWeeks": 12,
    "teamSize": 25,
    "popularity": 73
  },
  {
    "id": "tpl-143",
    "name": "Implementação de HRIS",
    "industry": "Recursos Humanos",
    "icon": "Users",
    "description": "Sistema integrado de RH",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Comunicação",
      "Execução",
      "Avaliação",
      "Sustentação"
    ],
    "tasks": [
      {
        "title": "Aprovação do comité executivo",
        "description": "Sponsor C-level",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reconhecimento e premiação",
        "description": "Celebração de resultados",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reporte ao board",
        "description": "Update trimestral",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Desenho"
      },
      {
        "title": "Mensuração de NPS interno",
        "description": "Eng pulse surveys",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Desenho do programa",
        "description": "Estrutura e processos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Comunicação"
      },
      {
        "title": "Plano de comunicação interna",
        "description": "Endomarketing",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Diagnóstico inicial",
        "description": "Entrevistas e dados",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Treinamento de lideranças",
        "description": "Capacitação de gestores",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Ajustes e melhorias",
        "description": "Iteração contínua",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Rollout para colaboradores",
        "description": "Lançamento e adesão",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Sustentação"
      }
    ],
    "bestPractices": [
      "Mudança cultural sem sponsorship executivo morre.",
      "Comunique frequentemente — pessoas esquecem rápido.",
      "Lidere pelo exemplo: cultura é o que se faz, não o que se diz.",
      "Meça eNPS regularmente — turnover é tarde demais.",
      "Diversidade sem inclusão é tokenismo."
    ],
    "kpis": [
      "eNPS",
      "Turnover voluntário",
      "Tempo de hire",
      "ROI de treinamento",
      "% diversidade liderança"
    ],
    "durationWeeks": 18,
    "teamSize": 9,
    "popularity": 60
  },
  {
    "id": "tpl-144",
    "name": "Programa de Onboarding",
    "industry": "Recursos Humanos",
    "icon": "Users",
    "description": "Integração de novos colaboradores",
    "methodology": "Waterfall",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Comunicação",
      "Execução",
      "Avaliação",
      "Sustentação"
    ],
    "tasks": [
      {
        "title": "Rollout para colaboradores",
        "description": "Lançamento e adesão",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reconhecimento e premiação",
        "description": "Celebração de resultados",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Diagnóstico"
      },
      {
        "title": "Treinamento de lideranças",
        "description": "Capacitação de gestores",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho"
      },
      {
        "title": "Mensuração de NPS interno",
        "description": "Eng pulse surveys",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Diagnóstico inicial",
        "description": "Entrevistas e dados",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Comunicação"
      },
      {
        "title": "Aprovação do comité executivo",
        "description": "Sponsor C-level",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Desenho do programa",
        "description": "Estrutura e processos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Ajustes e melhorias",
        "description": "Iteração contínua",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Plano de comunicação interna",
        "description": "Endomarketing",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Reporte ao board",
        "description": "Update trimestral",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Sustentação"
      }
    ],
    "bestPractices": [
      "Mudança cultural sem sponsorship executivo morre.",
      "Comunique frequentemente — pessoas esquecem rápido.",
      "Lidere pelo exemplo: cultura é o que se faz, não o que se diz.",
      "Meça eNPS regularmente — turnover é tarde demais.",
      "Diversidade sem inclusão é tokenismo."
    ],
    "kpis": [
      "eNPS",
      "Turnover voluntário",
      "Tempo de hire",
      "ROI de treinamento",
      "% diversidade liderança"
    ],
    "durationWeeks": 18,
    "teamSize": 23,
    "popularity": 74
  },
  {
    "id": "tpl-145",
    "name": "Plano de Carreira e Sucessão",
    "industry": "Recursos Humanos",
    "icon": "Users",
    "description": "Trilhas e mapeamento",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Comunicação",
      "Execução",
      "Avaliação",
      "Sustentação"
    ],
    "tasks": [
      {
        "title": "Reconhecimento e premiação",
        "description": "Celebração de resultados",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Diagnóstico"
      },
      {
        "title": "Aprovação do comité executivo",
        "description": "Sponsor C-level",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reporte ao board",
        "description": "Update trimestral",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Desenho"
      },
      {
        "title": "Desenho do programa",
        "description": "Estrutura e processos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Comunicação"
      },
      {
        "title": "Rollout para colaboradores",
        "description": "Lançamento e adesão",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Comunicação"
      },
      {
        "title": "Treinamento de lideranças",
        "description": "Capacitação de gestores",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Ajustes e melhorias",
        "description": "Iteração contínua",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Plano de comunicação interna",
        "description": "Endomarketing",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Diagnóstico inicial",
        "description": "Entrevistas e dados",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      }
    ],
    "bestPractices": [
      "Mudança cultural sem sponsorship executivo morre.",
      "Comunique frequentemente — pessoas esquecem rápido.",
      "Lidere pelo exemplo: cultura é o que se faz, não o que se diz.",
      "Meça eNPS regularmente — turnover é tarde demais.",
      "Diversidade sem inclusão é tokenismo."
    ],
    "kpis": [
      "eNPS",
      "Turnover voluntário",
      "Tempo de hire",
      "ROI de treinamento",
      "% diversidade liderança"
    ],
    "durationWeeks": 17,
    "teamSize": 6,
    "popularity": 42
  },
  {
    "id": "tpl-146",
    "name": "Pesquisa de Clima Organizacional",
    "industry": "Recursos Humanos",
    "icon": "Users",
    "description": "Diagnóstico anual",
    "methodology": "Waterfall",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Comunicação",
      "Execução",
      "Avaliação",
      "Sustentação"
    ],
    "tasks": [
      {
        "title": "Treinamento de lideranças",
        "description": "Capacitação de gestores",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Plano de comunicação interna",
        "description": "Endomarketing",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Mensuração de NPS interno",
        "description": "Eng pulse surveys",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Reporte ao board",
        "description": "Update trimestral",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Desenho"
      },
      {
        "title": "Rollout para colaboradores",
        "description": "Lançamento e adesão",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Comunicação"
      },
      {
        "title": "Diagnóstico inicial",
        "description": "Entrevistas e dados",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Reconhecimento e premiação",
        "description": "Celebração de resultados",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Execução"
      },
      {
        "title": "Aprovação do comité executivo",
        "description": "Sponsor C-level",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Desenho do programa",
        "description": "Estrutura e processos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Ajustes e melhorias",
        "description": "Iteração contínua",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Sustentação"
      }
    ],
    "bestPractices": [
      "Mudança cultural sem sponsorship executivo morre.",
      "Comunique frequentemente — pessoas esquecem rápido.",
      "Lidere pelo exemplo: cultura é o que se faz, não o que se diz.",
      "Meça eNPS regularmente — turnover é tarde demais.",
      "Diversidade sem inclusão é tokenismo."
    ],
    "kpis": [
      "eNPS",
      "Turnover voluntário",
      "Tempo de hire",
      "ROI de treinamento",
      "% diversidade liderança"
    ],
    "durationWeeks": 18,
    "teamSize": 11,
    "popularity": 91
  },
  {
    "id": "tpl-147",
    "name": "Programa de Diversidade & Inclusão",
    "industry": "Recursos Humanos",
    "icon": "Users",
    "description": "D&I corporativo",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Comunicação",
      "Execução",
      "Avaliação",
      "Sustentação"
    ],
    "tasks": [
      {
        "title": "Treinamento de lideranças",
        "description": "Capacitação de gestores",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Ajustes e melhorias",
        "description": "Iteração contínua",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Desenho do programa",
        "description": "Estrutura e processos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho"
      },
      {
        "title": "Rollout para colaboradores",
        "description": "Lançamento e adesão",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Desenho"
      },
      {
        "title": "Diagnóstico inicial",
        "description": "Entrevistas e dados",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Comunicação"
      },
      {
        "title": "Reconhecimento e premiação",
        "description": "Celebração de resultados",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Execução"
      },
      {
        "title": "Plano de comunicação interna",
        "description": "Endomarketing",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Reporte ao board",
        "description": "Update trimestral",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Avaliação"
      },
      {
        "title": "Aprovação do comité executivo",
        "description": "Sponsor C-level",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Mensuração de NPS interno",
        "description": "Eng pulse surveys",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Sustentação"
      }
    ],
    "bestPractices": [
      "Mudança cultural sem sponsorship executivo morre.",
      "Comunique frequentemente — pessoas esquecem rápido.",
      "Lidere pelo exemplo: cultura é o que se faz, não o que se diz.",
      "Meça eNPS regularmente — turnover é tarde demais.",
      "Diversidade sem inclusão é tokenismo."
    ],
    "kpis": [
      "eNPS",
      "Turnover voluntário",
      "Tempo de hire",
      "ROI de treinamento",
      "% diversidade liderança"
    ],
    "durationWeeks": 18,
    "teamSize": 14,
    "popularity": 78
  },
  {
    "id": "tpl-148",
    "name": "Universidade Corporativa",
    "industry": "Recursos Humanos",
    "icon": "Users",
    "description": "Centro de aprendizagem interno",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Comunicação",
      "Execução",
      "Avaliação",
      "Sustentação"
    ],
    "tasks": [
      {
        "title": "Rollout para colaboradores",
        "description": "Lançamento e adesão",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reporte ao board",
        "description": "Update trimestral",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reconhecimento e premiação",
        "description": "Celebração de resultados",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Desenho"
      },
      {
        "title": "Plano de comunicação interna",
        "description": "Endomarketing",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Desenho do programa",
        "description": "Estrutura e processos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Comunicação"
      },
      {
        "title": "Aprovação do comité executivo",
        "description": "Sponsor C-level",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Diagnóstico inicial",
        "description": "Entrevistas e dados",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Ajustes e melhorias",
        "description": "Iteração contínua",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Mensuração de NPS interno",
        "description": "Eng pulse surveys",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Treinamento de lideranças",
        "description": "Capacitação de gestores",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      }
    ],
    "bestPractices": [
      "Mudança cultural sem sponsorship executivo morre.",
      "Comunique frequentemente — pessoas esquecem rápido.",
      "Lidere pelo exemplo: cultura é o que se faz, não o que se diz.",
      "Meça eNPS regularmente — turnover é tarde demais.",
      "Diversidade sem inclusão é tokenismo."
    ],
    "kpis": [
      "eNPS",
      "Turnover voluntário",
      "Tempo de hire",
      "ROI de treinamento",
      "% diversidade liderança"
    ],
    "durationWeeks": 18,
    "teamSize": 12,
    "popularity": 68
  },
  {
    "id": "tpl-149",
    "name": "Reforma de Pacote de Benefícios",
    "industry": "Recursos Humanos",
    "icon": "Users",
    "description": "Revisão de comp & ben",
    "methodology": "Waterfall",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Comunicação",
      "Execução",
      "Avaliação",
      "Sustentação"
    ],
    "tasks": [
      {
        "title": "Aprovação do comité executivo",
        "description": "Sponsor C-level",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Desenho do programa",
        "description": "Estrutura e processos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Diagnóstico inicial",
        "description": "Entrevistas e dados",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho"
      },
      {
        "title": "Reporte ao board",
        "description": "Update trimestral",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Desenho"
      },
      {
        "title": "Plano de comunicação interna",
        "description": "Endomarketing",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Comunicação"
      },
      {
        "title": "Treinamento de lideranças",
        "description": "Capacitação de gestores",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Rollout para colaboradores",
        "description": "Lançamento e adesão",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução"
      },
      {
        "title": "Ajustes e melhorias",
        "description": "Iteração contínua",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Mensuração de NPS interno",
        "description": "Eng pulse surveys",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Reconhecimento e premiação",
        "description": "Celebração de resultados",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Sustentação"
      }
    ],
    "bestPractices": [
      "Mudança cultural sem sponsorship executivo morre.",
      "Comunique frequentemente — pessoas esquecem rápido.",
      "Lidere pelo exemplo: cultura é o que se faz, não o que se diz.",
      "Meça eNPS regularmente — turnover é tarde demais.",
      "Diversidade sem inclusão é tokenismo."
    ],
    "kpis": [
      "eNPS",
      "Turnover voluntário",
      "Tempo de hire",
      "ROI de treinamento",
      "% diversidade liderança"
    ],
    "durationWeeks": 18,
    "teamSize": 10,
    "popularity": 88
  },
  {
    "id": "tpl-150",
    "name": "Recrutamento em Massa",
    "industry": "Recursos Humanos",
    "icon": "Users",
    "description": "Hiring blitz para nova operação",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Comunicação",
      "Execução",
      "Avaliação",
      "Sustentação"
    ],
    "tasks": [
      {
        "title": "Ajustes e melhorias",
        "description": "Iteração contínua",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reconhecimento e premiação",
        "description": "Celebração de resultados",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reporte ao board",
        "description": "Update trimestral",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Desenho"
      },
      {
        "title": "Plano de comunicação interna",
        "description": "Endomarketing",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Aprovação do comité executivo",
        "description": "Sponsor C-level",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Comunicação"
      },
      {
        "title": "Mensuração de NPS interno",
        "description": "Eng pulse surveys",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Diagnóstico inicial",
        "description": "Entrevistas e dados",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Treinamento de lideranças",
        "description": "Capacitação de gestores",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Desenho do programa",
        "description": "Estrutura e processos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Rollout para colaboradores",
        "description": "Lançamento e adesão",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Sustentação"
      }
    ],
    "bestPractices": [
      "Mudança cultural sem sponsorship executivo morre.",
      "Comunique frequentemente — pessoas esquecem rápido.",
      "Lidere pelo exemplo: cultura é o que se faz, não o que se diz.",
      "Meça eNPS regularmente — turnover é tarde demais.",
      "Diversidade sem inclusão é tokenismo."
    ],
    "kpis": [
      "eNPS",
      "Turnover voluntário",
      "Tempo de hire",
      "ROI de treinamento",
      "% diversidade liderança"
    ],
    "durationWeeks": 18,
    "teamSize": 10,
    "popularity": 77
  },
  {
    "id": "tpl-151",
    "name": "Programa de Mentoring",
    "industry": "Recursos Humanos",
    "icon": "Users",
    "description": "Mentores internos",
    "methodology": "Waterfall",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Comunicação",
      "Execução",
      "Avaliação",
      "Sustentação"
    ],
    "tasks": [
      {
        "title": "Diagnóstico inicial",
        "description": "Entrevistas e dados",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reporte ao board",
        "description": "Update trimestral",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Diagnóstico"
      },
      {
        "title": "Treinamento de lideranças",
        "description": "Capacitação de gestores",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho"
      },
      {
        "title": "Plano de comunicação interna",
        "description": "Endomarketing",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Ajustes e melhorias",
        "description": "Iteração contínua",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Comunicação"
      },
      {
        "title": "Mensuração de NPS interno",
        "description": "Eng pulse surveys",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Aprovação do comité executivo",
        "description": "Sponsor C-level",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Rollout para colaboradores",
        "description": "Lançamento e adesão",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Reconhecimento e premiação",
        "description": "Celebração de resultados",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Avaliação"
      },
      {
        "title": "Desenho do programa",
        "description": "Estrutura e processos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      }
    ],
    "bestPractices": [
      "Mudança cultural sem sponsorship executivo morre.",
      "Comunique frequentemente — pessoas esquecem rápido.",
      "Lidere pelo exemplo: cultura é o que se faz, não o que se diz.",
      "Meça eNPS regularmente — turnover é tarde demais.",
      "Diversidade sem inclusão é tokenismo."
    ],
    "kpis": [
      "eNPS",
      "Turnover voluntário",
      "Tempo de hire",
      "ROI de treinamento",
      "% diversidade liderança"
    ],
    "durationWeeks": 18,
    "teamSize": 8,
    "popularity": 96
  },
  {
    "id": "tpl-152",
    "name": "Mudança Cultural",
    "industry": "Recursos Humanos",
    "icon": "Users",
    "description": "Transformação de mindset",
    "methodology": "Waterfall",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Comunicação",
      "Execução",
      "Avaliação",
      "Sustentação"
    ],
    "tasks": [
      {
        "title": "Rollout para colaboradores",
        "description": "Lançamento e adesão",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Mensuração de NPS interno",
        "description": "Eng pulse surveys",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reporte ao board",
        "description": "Update trimestral",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Desenho"
      },
      {
        "title": "Diagnóstico inicial",
        "description": "Entrevistas e dados",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho"
      },
      {
        "title": "Plano de comunicação interna",
        "description": "Endomarketing",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Comunicação"
      },
      {
        "title": "Reconhecimento e premiação",
        "description": "Celebração de resultados",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Execução"
      },
      {
        "title": "Desenho do programa",
        "description": "Estrutura e processos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Ajustes e melhorias",
        "description": "Iteração contínua",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Aprovação do comité executivo",
        "description": "Sponsor C-level",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Treinamento de lideranças",
        "description": "Capacitação de gestores",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      }
    ],
    "bestPractices": [
      "Mudança cultural sem sponsorship executivo morre.",
      "Comunique frequentemente — pessoas esquecem rápido.",
      "Lidere pelo exemplo: cultura é o que se faz, não o que se diz.",
      "Meça eNPS regularmente — turnover é tarde demais.",
      "Diversidade sem inclusão é tokenismo."
    ],
    "kpis": [
      "eNPS",
      "Turnover voluntário",
      "Tempo de hire",
      "ROI de treinamento",
      "% diversidade liderança"
    ],
    "durationWeeks": 18,
    "teamSize": 20,
    "popularity": 68
  },
  {
    "id": "tpl-153",
    "name": "Implementação de HRIS — Pequena Escala",
    "industry": "Recursos Humanos",
    "icon": "Users",
    "description": "Sistema integrado de RH (Pequena Escala)",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Comunicação",
      "Execução",
      "Avaliação",
      "Sustentação"
    ],
    "tasks": [
      {
        "title": "Treinamento de lideranças",
        "description": "Capacitação de gestores",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Desenho do programa",
        "description": "Estrutura e processos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Aprovação do comité executivo",
        "description": "Sponsor C-level",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Desenho"
      },
      {
        "title": "Diagnóstico inicial",
        "description": "Entrevistas e dados",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho"
      },
      {
        "title": "Plano de comunicação interna",
        "description": "Endomarketing",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Comunicação"
      },
      {
        "title": "Ajustes e melhorias",
        "description": "Iteração contínua",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Execução"
      },
      {
        "title": "Reporte ao board",
        "description": "Update trimestral",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Execução"
      },
      {
        "title": "Rollout para colaboradores",
        "description": "Lançamento e adesão",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Reconhecimento e premiação",
        "description": "Celebração de resultados",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Avaliação"
      },
      {
        "title": "Mensuração de NPS interno",
        "description": "Eng pulse surveys",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Sustentação"
      }
    ],
    "bestPractices": [
      "Mudança cultural sem sponsorship executivo morre.",
      "Comunique frequentemente — pessoas esquecem rápido.",
      "Lidere pelo exemplo: cultura é o que se faz, não o que se diz.",
      "Meça eNPS regularmente — turnover é tarde demais.",
      "Diversidade sem inclusão é tokenismo."
    ],
    "kpis": [
      "eNPS",
      "Turnover voluntário",
      "Tempo de hire",
      "ROI de treinamento",
      "% diversidade liderança"
    ],
    "durationWeeks": 18,
    "teamSize": 23,
    "popularity": 72
  },
  {
    "id": "tpl-154",
    "name": "Programa de Onboarding — Pequena Escala",
    "industry": "Recursos Humanos",
    "icon": "Users",
    "description": "Integração de novos colaboradores (Pequena Escala)",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho",
      "Comunicação",
      "Execução",
      "Avaliação",
      "Sustentação"
    ],
    "tasks": [
      {
        "title": "Reconhecimento e premiação",
        "description": "Celebração de resultados",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Diagnóstico"
      },
      {
        "title": "Diagnóstico inicial",
        "description": "Entrevistas e dados",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reporte ao board",
        "description": "Update trimestral",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Desenho"
      },
      {
        "title": "Ajustes e melhorias",
        "description": "Iteração contínua",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Desenho"
      },
      {
        "title": "Desenho do programa",
        "description": "Estrutura e processos",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Comunicação"
      },
      {
        "title": "Aprovação do comité executivo",
        "description": "Sponsor C-level",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Plano de comunicação interna",
        "description": "Endomarketing",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Treinamento de lideranças",
        "description": "Capacitação de gestores",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Rollout para colaboradores",
        "description": "Lançamento e adesão",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Mensuração de NPS interno",
        "description": "Eng pulse surveys",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Sustentação"
      }
    ],
    "bestPractices": [
      "Mudança cultural sem sponsorship executivo morre.",
      "Comunique frequentemente — pessoas esquecem rápido.",
      "Lidere pelo exemplo: cultura é o que se faz, não o que se diz.",
      "Meça eNPS regularmente — turnover é tarde demais.",
      "Diversidade sem inclusão é tokenismo."
    ],
    "kpis": [
      "eNPS",
      "Turnover voluntário",
      "Tempo de hire",
      "ROI de treinamento",
      "% diversidade liderança"
    ],
    "durationWeeks": 18,
    "teamSize": 14,
    "popularity": 99
  },
  {
    "id": "tpl-155",
    "name": "Programa de Compliance LGPD/GDPR",
    "industry": "Jurídico & Compliance",
    "icon": "Scale",
    "description": "Conformidade com proteção de dados",
    "methodology": "PRINCE2",
    "phases": [
      "Avaliação",
      "Planeamento",
      "Documentação",
      "Implementação",
      "Auditoria",
      "Monitorização"
    ],
    "tasks": [
      {
        "title": "Revisão contratual com fornecedores",
        "description": "Cláusulas de proteção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Elaboração de políticas",
        "description": "PSI, ética, anticorrupção",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Auditoria interna anual",
        "description": "Verificação de controles",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento"
      },
      {
        "title": "Implementação de DPO",
        "description": "Encarregado de proteção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planeamento"
      },
      {
        "title": "Reporte ao conselho",
        "description": "Update de compliance",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Documentação"
      },
      {
        "title": "Resposta a incidentes",
        "description": "Plano de IRP",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Canal de denúncias operacional",
        "description": "Whistleblowing 24/7",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Treinamento obrigatório",
        "description": "E-learning para 100% staff",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Auditoria"
      },
      {
        "title": "Avaliação de risco jurídico",
        "description": "Matriz de risco legal",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Auditoria"
      },
      {
        "title": "Mapeamento de processos de dados",
        "description": "Inventário ROPA",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Monitorização"
      }
    ],
    "bestPractices": [
      "Compliance é cultura, não checklist.",
      "Tone-at-the-top: liderança define os padrões.",
      "Documente decisões — defesa começa nos registos.",
      "Trate canal de denúncias com seriedade absoluta.",
      "Reveja contratos com IA assistida + revisão humana."
    ],
    "kpis": [
      "Incidentes reportados",
      "% staff treinado",
      "Tempo de resposta a auditoria",
      "Multas evitadas",
      "Score de maturidade"
    ],
    "durationWeeks": 25,
    "teamSize": 4,
    "popularity": 63
  },
  {
    "id": "tpl-156",
    "name": "Due Diligence M&A",
    "industry": "Jurídico & Compliance",
    "icon": "Scale",
    "description": "Análise jurídica de aquisição",
    "methodology": "PRINCE2",
    "phases": [
      "Avaliação",
      "Planeamento",
      "Documentação",
      "Implementação",
      "Auditoria",
      "Monitorização"
    ],
    "tasks": [
      {
        "title": "Avaliação de risco jurídico",
        "description": "Matriz de risco legal",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Auditoria interna anual",
        "description": "Verificação de controles",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Implementação de DPO",
        "description": "Encarregado de proteção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planeamento"
      },
      {
        "title": "Resposta a incidentes",
        "description": "Plano de IRP",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Planeamento"
      },
      {
        "title": "Revisão contratual com fornecedores",
        "description": "Cláusulas de proteção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Documentação"
      },
      {
        "title": "Mapeamento de processos de dados",
        "description": "Inventário ROPA",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Treinamento obrigatório",
        "description": "E-learning para 100% staff",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Reporte ao conselho",
        "description": "Update de compliance",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Auditoria"
      },
      {
        "title": "Canal de denúncias operacional",
        "description": "Whistleblowing 24/7",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Auditoria"
      },
      {
        "title": "Elaboração de políticas",
        "description": "PSI, ética, anticorrupção",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Monitorização"
      }
    ],
    "bestPractices": [
      "Compliance é cultura, não checklist.",
      "Tone-at-the-top: liderança define os padrões.",
      "Documente decisões — defesa começa nos registos.",
      "Trate canal de denúncias com seriedade absoluta.",
      "Reveja contratos com IA assistida + revisão humana."
    ],
    "kpis": [
      "Incidentes reportados",
      "% staff treinado",
      "Tempo de resposta a auditoria",
      "Multas evitadas",
      "Score de maturidade"
    ],
    "durationWeeks": 25,
    "teamSize": 9,
    "popularity": 73
  },
  {
    "id": "tpl-157",
    "name": "Litígio Estratégico",
    "industry": "Jurídico & Compliance",
    "icon": "Scale",
    "description": "Caso de alto impacto",
    "methodology": "PRINCE2",
    "phases": [
      "Avaliação",
      "Planeamento",
      "Documentação",
      "Implementação",
      "Auditoria",
      "Monitorização"
    ],
    "tasks": [
      {
        "title": "Auditoria interna anual",
        "description": "Verificação de controles",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Elaboração de políticas",
        "description": "PSI, ética, anticorrupção",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Treinamento obrigatório",
        "description": "E-learning para 100% staff",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento"
      },
      {
        "title": "Mapeamento de processos de dados",
        "description": "Inventário ROPA",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Planeamento"
      },
      {
        "title": "Implementação de DPO",
        "description": "Encarregado de proteção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Documentação"
      },
      {
        "title": "Reporte ao conselho",
        "description": "Update de compliance",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Implementação"
      },
      {
        "title": "Avaliação de risco jurídico",
        "description": "Matriz de risco legal",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Revisão contratual com fornecedores",
        "description": "Cláusulas de proteção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Auditoria"
      },
      {
        "title": "Canal de denúncias operacional",
        "description": "Whistleblowing 24/7",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Auditoria"
      },
      {
        "title": "Resposta a incidentes",
        "description": "Plano de IRP",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Monitorização"
      }
    ],
    "bestPractices": [
      "Compliance é cultura, não checklist.",
      "Tone-at-the-top: liderança define os padrões.",
      "Documente decisões — defesa começa nos registos.",
      "Trate canal de denúncias com seriedade absoluta.",
      "Reveja contratos com IA assistida + revisão humana."
    ],
    "kpis": [
      "Incidentes reportados",
      "% staff treinado",
      "Tempo de resposta a auditoria",
      "Multas evitadas",
      "Score de maturidade"
    ],
    "durationWeeks": 25,
    "teamSize": 8,
    "popularity": 66
  },
  {
    "id": "tpl-158",
    "name": "Revisão de Contratos Padrão",
    "industry": "Jurídico & Compliance",
    "icon": "Scale",
    "description": "Templates corporativos",
    "methodology": "PRINCE2",
    "phases": [
      "Avaliação",
      "Planeamento",
      "Documentação",
      "Implementação",
      "Auditoria",
      "Monitorização"
    ],
    "tasks": [
      {
        "title": "Auditoria interna anual",
        "description": "Verificação de controles",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Resposta a incidentes",
        "description": "Plano de IRP",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Canal de denúncias operacional",
        "description": "Whistleblowing 24/7",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planeamento"
      },
      {
        "title": "Reporte ao conselho",
        "description": "Update de compliance",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Planeamento"
      },
      {
        "title": "Revisão contratual com fornecedores",
        "description": "Cláusulas de proteção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Documentação"
      },
      {
        "title": "Mapeamento de processos de dados",
        "description": "Inventário ROPA",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Avaliação de risco jurídico",
        "description": "Matriz de risco legal",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Elaboração de políticas",
        "description": "PSI, ética, anticorrupção",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Auditoria"
      },
      {
        "title": "Implementação de DPO",
        "description": "Encarregado de proteção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Auditoria"
      },
      {
        "title": "Treinamento obrigatório",
        "description": "E-learning para 100% staff",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Monitorização"
      }
    ],
    "bestPractices": [
      "Compliance é cultura, não checklist.",
      "Tone-at-the-top: liderança define os padrões.",
      "Documente decisões — defesa começa nos registos.",
      "Trate canal de denúncias com seriedade absoluta.",
      "Reveja contratos com IA assistida + revisão humana."
    ],
    "kpis": [
      "Incidentes reportados",
      "% staff treinado",
      "Tempo de resposta a auditoria",
      "Multas evitadas",
      "Score de maturidade"
    ],
    "durationWeeks": 25,
    "teamSize": 20,
    "popularity": 64
  },
  {
    "id": "tpl-159",
    "name": "Programa Anticorrupção",
    "industry": "Jurídico & Compliance",
    "icon": "Scale",
    "description": "Lei 12.846 / FCPA / UK Bribery Act",
    "methodology": "PRINCE2",
    "phases": [
      "Avaliação",
      "Planeamento",
      "Documentação",
      "Implementação",
      "Auditoria",
      "Monitorização"
    ],
    "tasks": [
      {
        "title": "Elaboração de políticas",
        "description": "PSI, ética, anticorrupção",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Canal de denúncias operacional",
        "description": "Whistleblowing 24/7",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Avaliação"
      },
      {
        "title": "Revisão contratual com fornecedores",
        "description": "Cláusulas de proteção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento"
      },
      {
        "title": "Implementação de DPO",
        "description": "Encarregado de proteção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planeamento"
      },
      {
        "title": "Reporte ao conselho",
        "description": "Update de compliance",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Documentação"
      },
      {
        "title": "Resposta a incidentes",
        "description": "Plano de IRP",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Treinamento obrigatório",
        "description": "E-learning para 100% staff",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Mapeamento de processos de dados",
        "description": "Inventário ROPA",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Auditoria"
      },
      {
        "title": "Auditoria interna anual",
        "description": "Verificação de controles",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Auditoria"
      },
      {
        "title": "Avaliação de risco jurídico",
        "description": "Matriz de risco legal",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Monitorização"
      }
    ],
    "bestPractices": [
      "Compliance é cultura, não checklist.",
      "Tone-at-the-top: liderança define os padrões.",
      "Documente decisões — defesa começa nos registos.",
      "Trate canal de denúncias com seriedade absoluta.",
      "Reveja contratos com IA assistida + revisão humana."
    ],
    "kpis": [
      "Incidentes reportados",
      "% staff treinado",
      "Tempo de resposta a auditoria",
      "Multas evitadas",
      "Score de maturidade"
    ],
    "durationWeeks": 25,
    "teamSize": 11,
    "popularity": 100
  },
  {
    "id": "tpl-160",
    "name": "Implementação de Canal de Denúncia",
    "industry": "Jurídico & Compliance",
    "icon": "Scale",
    "description": "Whistleblowing channel",
    "methodology": "PRINCE2",
    "phases": [
      "Avaliação",
      "Planeamento",
      "Documentação",
      "Implementação",
      "Auditoria",
      "Monitorização"
    ],
    "tasks": [
      {
        "title": "Implementação de DPO",
        "description": "Encarregado de proteção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Avaliação"
      },
      {
        "title": "Treinamento obrigatório",
        "description": "E-learning para 100% staff",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Canal de denúncias operacional",
        "description": "Whistleblowing 24/7",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planeamento"
      },
      {
        "title": "Elaboração de políticas",
        "description": "PSI, ética, anticorrupção",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento"
      },
      {
        "title": "Resposta a incidentes",
        "description": "Plano de IRP",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Documentação"
      },
      {
        "title": "Auditoria interna anual",
        "description": "Verificação de controles",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Reporte ao conselho",
        "description": "Update de compliance",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Implementação"
      },
      {
        "title": "Avaliação de risco jurídico",
        "description": "Matriz de risco legal",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Auditoria"
      },
      {
        "title": "Mapeamento de processos de dados",
        "description": "Inventário ROPA",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Auditoria"
      },
      {
        "title": "Revisão contratual com fornecedores",
        "description": "Cláusulas de proteção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Monitorização"
      }
    ],
    "bestPractices": [
      "Compliance é cultura, não checklist.",
      "Tone-at-the-top: liderança define os padrões.",
      "Documente decisões — defesa começa nos registos.",
      "Trate canal de denúncias com seriedade absoluta.",
      "Reveja contratos com IA assistida + revisão humana."
    ],
    "kpis": [
      "Incidentes reportados",
      "% staff treinado",
      "Tempo de resposta a auditoria",
      "Multas evitadas",
      "Score de maturidade"
    ],
    "durationWeeks": 25,
    "teamSize": 15,
    "popularity": 89
  },
  {
    "id": "tpl-161",
    "name": "Defesa em Investigação",
    "industry": "Jurídico & Compliance",
    "icon": "Scale",
    "description": "Resposta a autoridade",
    "methodology": "Waterfall",
    "phases": [
      "Avaliação",
      "Planeamento",
      "Documentação",
      "Implementação",
      "Auditoria",
      "Monitorização"
    ],
    "tasks": [
      {
        "title": "Implementação de DPO",
        "description": "Encarregado de proteção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Avaliação"
      },
      {
        "title": "Mapeamento de processos de dados",
        "description": "Inventário ROPA",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Avaliação"
      },
      {
        "title": "Reporte ao conselho",
        "description": "Update de compliance",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Planeamento"
      },
      {
        "title": "Revisão contratual com fornecedores",
        "description": "Cláusulas de proteção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento"
      },
      {
        "title": "Resposta a incidentes",
        "description": "Plano de IRP",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Documentação"
      },
      {
        "title": "Elaboração de políticas",
        "description": "PSI, ética, anticorrupção",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Treinamento obrigatório",
        "description": "E-learning para 100% staff",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Canal de denúncias operacional",
        "description": "Whistleblowing 24/7",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Auditoria"
      },
      {
        "title": "Avaliação de risco jurídico",
        "description": "Matriz de risco legal",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Auditoria"
      },
      {
        "title": "Auditoria interna anual",
        "description": "Verificação de controles",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Monitorização"
      }
    ],
    "bestPractices": [
      "Compliance é cultura, não checklist.",
      "Tone-at-the-top: liderança define os padrões.",
      "Documente decisões — defesa começa nos registos.",
      "Trate canal de denúncias com seriedade absoluta.",
      "Reveja contratos com IA assistida + revisão humana."
    ],
    "kpis": [
      "Incidentes reportados",
      "% staff treinado",
      "Tempo de resposta a auditoria",
      "Multas evitadas",
      "Score de maturidade"
    ],
    "durationWeeks": 25,
    "teamSize": 10,
    "popularity": 92
  },
  {
    "id": "tpl-162",
    "name": "Reestruturação Societária",
    "industry": "Jurídico & Compliance",
    "icon": "Scale",
    "description": "Holding e governança",
    "methodology": "Waterfall",
    "phases": [
      "Avaliação",
      "Planeamento",
      "Documentação",
      "Implementação",
      "Auditoria",
      "Monitorização"
    ],
    "tasks": [
      {
        "title": "Implementação de DPO",
        "description": "Encarregado de proteção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Avaliação"
      },
      {
        "title": "Resposta a incidentes",
        "description": "Plano de IRP",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Avaliação"
      },
      {
        "title": "Reporte ao conselho",
        "description": "Update de compliance",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Planeamento"
      },
      {
        "title": "Avaliação de risco jurídico",
        "description": "Matriz de risco legal",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento"
      },
      {
        "title": "Mapeamento de processos de dados",
        "description": "Inventário ROPA",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Documentação"
      },
      {
        "title": "Canal de denúncias operacional",
        "description": "Whistleblowing 24/7",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Auditoria interna anual",
        "description": "Verificação de controles",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Revisão contratual com fornecedores",
        "description": "Cláusulas de proteção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Auditoria"
      },
      {
        "title": "Elaboração de políticas",
        "description": "PSI, ética, anticorrupção",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Auditoria"
      },
      {
        "title": "Treinamento obrigatório",
        "description": "E-learning para 100% staff",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Monitorização"
      }
    ],
    "bestPractices": [
      "Compliance é cultura, não checklist.",
      "Tone-at-the-top: liderança define os padrões.",
      "Documente decisões — defesa começa nos registos.",
      "Trate canal de denúncias com seriedade absoluta.",
      "Reveja contratos com IA assistida + revisão humana."
    ],
    "kpis": [
      "Incidentes reportados",
      "% staff treinado",
      "Tempo de resposta a auditoria",
      "Multas evitadas",
      "Score de maturidade"
    ],
    "durationWeeks": 25,
    "teamSize": 5,
    "popularity": 46
  },
  {
    "id": "tpl-163",
    "name": "Programa de Compliance LGPD/GDPR — Pequena Escala",
    "industry": "Jurídico & Compliance",
    "icon": "Scale",
    "description": "Conformidade com proteção de dados (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Avaliação",
      "Planeamento",
      "Documentação",
      "Implementação",
      "Auditoria",
      "Monitorização"
    ],
    "tasks": [
      {
        "title": "Revisão contratual com fornecedores",
        "description": "Cláusulas de proteção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Canal de denúncias operacional",
        "description": "Whistleblowing 24/7",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Avaliação"
      },
      {
        "title": "Avaliação de risco jurídico",
        "description": "Matriz de risco legal",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento"
      },
      {
        "title": "Reporte ao conselho",
        "description": "Update de compliance",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Planeamento"
      },
      {
        "title": "Resposta a incidentes",
        "description": "Plano de IRP",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Documentação"
      },
      {
        "title": "Mapeamento de processos de dados",
        "description": "Inventário ROPA",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Implementação"
      },
      {
        "title": "Auditoria interna anual",
        "description": "Verificação de controles",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Treinamento obrigatório",
        "description": "E-learning para 100% staff",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Auditoria"
      },
      {
        "title": "Elaboração de políticas",
        "description": "PSI, ética, anticorrupção",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Auditoria"
      },
      {
        "title": "Implementação de DPO",
        "description": "Encarregado de proteção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Monitorização"
      }
    ],
    "bestPractices": [
      "Compliance é cultura, não checklist.",
      "Tone-at-the-top: liderança define os padrões.",
      "Documente decisões — defesa começa nos registos.",
      "Trate canal de denúncias com seriedade absoluta.",
      "Reveja contratos com IA assistida + revisão humana."
    ],
    "kpis": [
      "Incidentes reportados",
      "% staff treinado",
      "Tempo de resposta a auditoria",
      "Multas evitadas",
      "Score de maturidade"
    ],
    "durationWeeks": 25,
    "teamSize": 13,
    "popularity": 60
  },
  {
    "id": "tpl-164",
    "name": "Due Diligence M&A — Pequena Escala",
    "industry": "Jurídico & Compliance",
    "icon": "Scale",
    "description": "Análise jurídica de aquisição (Pequena Escala)",
    "methodology": "PRINCE2",
    "phases": [
      "Avaliação",
      "Planeamento",
      "Documentação",
      "Implementação",
      "Auditoria",
      "Monitorização"
    ],
    "tasks": [
      {
        "title": "Mapeamento de processos de dados",
        "description": "Inventário ROPA",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Avaliação"
      },
      {
        "title": "Avaliação de risco jurídico",
        "description": "Matriz de risco legal",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Treinamento obrigatório",
        "description": "E-learning para 100% staff",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento"
      },
      {
        "title": "Implementação de DPO",
        "description": "Encarregado de proteção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planeamento"
      },
      {
        "title": "Revisão contratual com fornecedores",
        "description": "Cláusulas de proteção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Documentação"
      },
      {
        "title": "Reporte ao conselho",
        "description": "Update de compliance",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Implementação"
      },
      {
        "title": "Resposta a incidentes",
        "description": "Plano de IRP",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Canal de denúncias operacional",
        "description": "Whistleblowing 24/7",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Auditoria"
      },
      {
        "title": "Auditoria interna anual",
        "description": "Verificação de controles",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Auditoria"
      },
      {
        "title": "Elaboração de políticas",
        "description": "PSI, ética, anticorrupção",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Monitorização"
      }
    ],
    "bestPractices": [
      "Compliance é cultura, não checklist.",
      "Tone-at-the-top: liderança define os padrões.",
      "Documente decisões — defesa começa nos registos.",
      "Trate canal de denúncias com seriedade absoluta.",
      "Reveja contratos com IA assistida + revisão humana."
    ],
    "kpis": [
      "Incidentes reportados",
      "% staff treinado",
      "Tempo de resposta a auditoria",
      "Multas evitadas",
      "Score de maturidade"
    ],
    "durationWeeks": 25,
    "teamSize": 19,
    "popularity": 51
  },
  {
    "id": "tpl-165",
    "name": "Litígio Estratégico — Pequena Escala",
    "industry": "Jurídico & Compliance",
    "icon": "Scale",
    "description": "Caso de alto impacto (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Avaliação",
      "Planeamento",
      "Documentação",
      "Implementação",
      "Auditoria",
      "Monitorização"
    ],
    "tasks": [
      {
        "title": "Mapeamento de processos de dados",
        "description": "Inventário ROPA",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Avaliação"
      },
      {
        "title": "Reporte ao conselho",
        "description": "Update de compliance",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Avaliação"
      },
      {
        "title": "Implementação de DPO",
        "description": "Encarregado de proteção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planeamento"
      },
      {
        "title": "Canal de denúncias operacional",
        "description": "Whistleblowing 24/7",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planeamento"
      },
      {
        "title": "Auditoria interna anual",
        "description": "Verificação de controles",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Documentação"
      },
      {
        "title": "Resposta a incidentes",
        "description": "Plano de IRP",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Elaboração de políticas",
        "description": "PSI, ética, anticorrupção",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Avaliação de risco jurídico",
        "description": "Matriz de risco legal",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Auditoria"
      },
      {
        "title": "Treinamento obrigatório",
        "description": "E-learning para 100% staff",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Auditoria"
      },
      {
        "title": "Revisão contratual com fornecedores",
        "description": "Cláusulas de proteção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Monitorização"
      }
    ],
    "bestPractices": [
      "Compliance é cultura, não checklist.",
      "Tone-at-the-top: liderança define os padrões.",
      "Documente decisões — defesa começa nos registos.",
      "Trate canal de denúncias com seriedade absoluta.",
      "Reveja contratos com IA assistida + revisão humana."
    ],
    "kpis": [
      "Incidentes reportados",
      "% staff treinado",
      "Tempo de resposta a auditoria",
      "Multas evitadas",
      "Score de maturidade"
    ],
    "durationWeeks": 25,
    "teamSize": 20,
    "popularity": 69
  },
  {
    "id": "tpl-166",
    "name": "Revisão de Contratos Padrão — Pequena Escala",
    "industry": "Jurídico & Compliance",
    "icon": "Scale",
    "description": "Templates corporativos (Pequena Escala)",
    "methodology": "PRINCE2",
    "phases": [
      "Avaliação",
      "Planeamento",
      "Documentação",
      "Implementação",
      "Auditoria",
      "Monitorização"
    ],
    "tasks": [
      {
        "title": "Treinamento obrigatório",
        "description": "E-learning para 100% staff",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      },
      {
        "title": "Avaliação de risco jurídico",
        "description": "Matriz de risco legal",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      },
      {
        "title": "Revisão contratual com fornecedores",
        "description": "Cláusulas de proteção",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento"
      },
      {
        "title": "Resposta a incidentes",
        "description": "Plano de IRP",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Planeamento"
      },
      {
        "title": "Canal de denúncias operacional",
        "description": "Whistleblowing 24/7",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Documentação"
      },
      {
        "title": "Reporte ao conselho",
        "description": "Update de compliance",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Implementação"
      },
      {
        "title": "Elaboração de políticas",
        "description": "PSI, ética, anticorrupção",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Implementação de DPO",
        "description": "Encarregado de proteção",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Auditoria"
      },
      {
        "title": "Mapeamento de processos de dados",
        "description": "Inventário ROPA",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Auditoria"
      },
      {
        "title": "Auditoria interna anual",
        "description": "Verificação de controles",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Monitorização"
      }
    ],
    "bestPractices": [
      "Compliance é cultura, não checklist.",
      "Tone-at-the-top: liderança define os padrões.",
      "Documente decisões — defesa começa nos registos.",
      "Trate canal de denúncias com seriedade absoluta.",
      "Reveja contratos com IA assistida + revisão humana."
    ],
    "kpis": [
      "Incidentes reportados",
      "% staff treinado",
      "Tempo de resposta a auditoria",
      "Multas evitadas",
      "Score de maturidade"
    ],
    "durationWeeks": 25,
    "teamSize": 13,
    "popularity": 76
  },
  {
    "id": "tpl-167",
    "name": "Produção de Longa-metragem",
    "industry": "Mídia & Entretenimento",
    "icon": "Film",
    "description": "Filme cinematográfico",
    "methodology": "Waterfall",
    "phases": [
      "Pré-produção",
      "Pré-produção avançada",
      "Produção",
      "Pós-produção",
      "Distribuição",
      "Promoção"
    ],
    "tasks": [
      {
        "title": "Casting",
        "description": "Seleção de elenco",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-produção"
      },
      {
        "title": "Pós-produção de som e VFX",
        "description": "Mixagem e efeitos",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Pré-produção"
      },
      {
        "title": "Campanha de marketing",
        "description": "PR e mídia",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Filmagem principal",
        "description": "Período de gravação",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Premiere e estreia",
        "description": "Evento de lançamento",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Produção"
      },
      {
        "title": "Desenvolvimento de roteiro",
        "description": "Argumento e tratamento",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Pós-produção"
      },
      {
        "title": "Locação e cenografia",
        "description": "Scouting e set design",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pós-produção"
      },
      {
        "title": "Edição e montagem",
        "description": "Cortes e ritmo",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Distribuição"
      },
      {
        "title": "Plano de distribuição",
        "description": "Janelas e plataformas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Distribuição"
      },
      {
        "title": "Pitch para financiadores",
        "description": "Captação de recursos",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Promoção"
      }
    ],
    "bestPractices": [
      "Roteiro é rei — invista no desenvolvimento.",
      "Plano B para tudo: clima, ator, equipamento.",
      "Mantenha continuity rigorosa em filmagem.",
      "Festivais antes do streaming aumentam o valor.",
      "Direitos autorais: documente cada licença."
    ],
    "kpis": [
      "Audiência / views",
      "Receita de bilheteria",
      "ROI da produção",
      "Engajamento social",
      "Indicações a prémios"
    ],
    "durationWeeks": 49,
    "teamSize": 19,
    "popularity": 60
  },
  {
    "id": "tpl-168",
    "name": "Lançamento de Série Streaming",
    "industry": "Mídia & Entretenimento",
    "icon": "Film",
    "description": "Série original para plataforma",
    "methodology": "Agile",
    "phases": [
      "Pré-produção",
      "Pré-produção avançada",
      "Produção",
      "Pós-produção",
      "Distribuição",
      "Promoção"
    ],
    "tasks": [
      {
        "title": "Desenvolvimento de roteiro",
        "description": "Argumento e tratamento",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Pré-produção"
      },
      {
        "title": "Filmagem principal",
        "description": "Período de gravação",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Pré-produção"
      },
      {
        "title": "Pós-produção de som e VFX",
        "description": "Mixagem e efeitos",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Pitch para financiadores",
        "description": "Captação de recursos",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Locação e cenografia",
        "description": "Scouting e set design",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Produção"
      },
      {
        "title": "Casting",
        "description": "Seleção de elenco",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pós-produção"
      },
      {
        "title": "Campanha de marketing",
        "description": "PR e mídia",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pós-produção"
      },
      {
        "title": "Plano de distribuição",
        "description": "Janelas e plataformas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Distribuição"
      },
      {
        "title": "Premiere e estreia",
        "description": "Evento de lançamento",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Distribuição"
      },
      {
        "title": "Edição e montagem",
        "description": "Cortes e ritmo",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Promoção"
      }
    ],
    "bestPractices": [
      "Roteiro é rei — invista no desenvolvimento.",
      "Plano B para tudo: clima, ator, equipamento.",
      "Mantenha continuity rigorosa em filmagem.",
      "Festivais antes do streaming aumentam o valor.",
      "Direitos autorais: documente cada licença."
    ],
    "kpis": [
      "Audiência / views",
      "Receita de bilheteria",
      "ROI da produção",
      "Engajamento social",
      "Indicações a prémios"
    ],
    "durationWeeks": 49,
    "teamSize": 11,
    "popularity": 43
  },
  {
    "id": "tpl-169",
    "name": "Festival Cultural",
    "industry": "Mídia & Entretenimento",
    "icon": "Film",
    "description": "Evento multi-dia com atrações",
    "methodology": "Agile",
    "phases": [
      "Pré-produção",
      "Pré-produção avançada",
      "Produção",
      "Pós-produção",
      "Distribuição",
      "Promoção"
    ],
    "tasks": [
      {
        "title": "Plano de distribuição",
        "description": "Janelas e plataformas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-produção"
      },
      {
        "title": "Filmagem principal",
        "description": "Período de gravação",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Pré-produção"
      },
      {
        "title": "Casting",
        "description": "Seleção de elenco",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Locação e cenografia",
        "description": "Scouting e set design",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Produção"
      },
      {
        "title": "Edição e montagem",
        "description": "Cortes e ritmo",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Produção"
      },
      {
        "title": "Campanha de marketing",
        "description": "PR e mídia",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pós-produção"
      },
      {
        "title": "Premiere e estreia",
        "description": "Evento de lançamento",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Distribuição"
      },
      {
        "title": "Pós-produção de som e VFX",
        "description": "Mixagem e efeitos",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Distribuição"
      },
      {
        "title": "Desenvolvimento de roteiro",
        "description": "Argumento e tratamento",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Promoção"
      }
    ],
    "bestPractices": [
      "Roteiro é rei — invista no desenvolvimento.",
      "Plano B para tudo: clima, ator, equipamento.",
      "Mantenha continuity rigorosa em filmagem.",
      "Festivais antes do streaming aumentam o valor.",
      "Direitos autorais: documente cada licença."
    ],
    "kpis": [
      "Audiência / views",
      "Receita de bilheteria",
      "ROI da produção",
      "Engajamento social",
      "Indicações a prémios"
    ],
    "durationWeeks": 45,
    "teamSize": 15,
    "popularity": 79
  },
  {
    "id": "tpl-170",
    "name": "Lançamento de Álbum",
    "industry": "Mídia & Entretenimento",
    "icon": "Film",
    "description": "Gravação e divulgação",
    "methodology": "Waterfall",
    "phases": [
      "Pré-produção",
      "Pré-produção avançada",
      "Produção",
      "Pós-produção",
      "Distribuição",
      "Promoção"
    ],
    "tasks": [
      {
        "title": "Locação e cenografia",
        "description": "Scouting e set design",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-produção"
      },
      {
        "title": "Casting",
        "description": "Seleção de elenco",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-produção"
      },
      {
        "title": "Plano de distribuição",
        "description": "Janelas e plataformas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Pitch para financiadores",
        "description": "Captação de recursos",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Premiere e estreia",
        "description": "Evento de lançamento",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Produção"
      },
      {
        "title": "Filmagem principal",
        "description": "Período de gravação",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Pós-produção"
      },
      {
        "title": "Campanha de marketing",
        "description": "PR e mídia",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pós-produção"
      },
      {
        "title": "Pós-produção de som e VFX",
        "description": "Mixagem e efeitos",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Distribuição"
      },
      {
        "title": "Edição e montagem",
        "description": "Cortes e ritmo",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Distribuição"
      },
      {
        "title": "Desenvolvimento de roteiro",
        "description": "Argumento e tratamento",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Promoção"
      }
    ],
    "bestPractices": [
      "Roteiro é rei — invista no desenvolvimento.",
      "Plano B para tudo: clima, ator, equipamento.",
      "Mantenha continuity rigorosa em filmagem.",
      "Festivais antes do streaming aumentam o valor.",
      "Direitos autorais: documente cada licença."
    ],
    "kpis": [
      "Audiência / views",
      "Receita de bilheteria",
      "ROI da produção",
      "Engajamento social",
      "Indicações a prémios"
    ],
    "durationWeeks": 49,
    "teamSize": 25,
    "popularity": 88
  },
  {
    "id": "tpl-171",
    "name": "Documentário Investigativo",
    "industry": "Mídia & Entretenimento",
    "icon": "Film",
    "description": "Produção factual",
    "methodology": "Waterfall",
    "phases": [
      "Pré-produção",
      "Pré-produção avançada",
      "Produção",
      "Pós-produção",
      "Distribuição",
      "Promoção"
    ],
    "tasks": [
      {
        "title": "Pitch para financiadores",
        "description": "Captação de recursos",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Pré-produção"
      },
      {
        "title": "Campanha de marketing",
        "description": "PR e mídia",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-produção"
      },
      {
        "title": "Plano de distribuição",
        "description": "Janelas e plataformas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Filmagem principal",
        "description": "Período de gravação",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Edição e montagem",
        "description": "Cortes e ritmo",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Produção"
      },
      {
        "title": "Casting",
        "description": "Seleção de elenco",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pós-produção"
      },
      {
        "title": "Desenvolvimento de roteiro",
        "description": "Argumento e tratamento",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Pós-produção"
      },
      {
        "title": "Pós-produção de som e VFX",
        "description": "Mixagem e efeitos",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Distribuição"
      },
      {
        "title": "Locação e cenografia",
        "description": "Scouting e set design",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Distribuição"
      },
      {
        "title": "Premiere e estreia",
        "description": "Evento de lançamento",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Promoção"
      }
    ],
    "bestPractices": [
      "Roteiro é rei — invista no desenvolvimento.",
      "Plano B para tudo: clima, ator, equipamento.",
      "Mantenha continuity rigorosa em filmagem.",
      "Festivais antes do streaming aumentam o valor.",
      "Direitos autorais: documente cada licença."
    ],
    "kpis": [
      "Audiência / views",
      "Receita de bilheteria",
      "ROI da produção",
      "Engajamento social",
      "Indicações a prémios"
    ],
    "durationWeeks": 49,
    "teamSize": 22,
    "popularity": 74
  },
  {
    "id": "tpl-172",
    "name": "Plataforma de Streaming Própria",
    "industry": "Mídia & Entretenimento",
    "icon": "Film",
    "description": "OTT proprietário",
    "methodology": "Agile",
    "phases": [
      "Pré-produção",
      "Pré-produção avançada",
      "Produção",
      "Pós-produção",
      "Distribuição",
      "Promoção"
    ],
    "tasks": [
      {
        "title": "Casting",
        "description": "Seleção de elenco",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-produção"
      },
      {
        "title": "Edição e montagem",
        "description": "Cortes e ritmo",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Pré-produção"
      },
      {
        "title": "Plano de distribuição",
        "description": "Janelas e plataformas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Desenvolvimento de roteiro",
        "description": "Argumento e tratamento",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Campanha de marketing",
        "description": "PR e mídia",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Produção"
      },
      {
        "title": "Pitch para financiadores",
        "description": "Captação de recursos",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Pós-produção"
      },
      {
        "title": "Locação e cenografia",
        "description": "Scouting e set design",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pós-produção"
      },
      {
        "title": "Pós-produção de som e VFX",
        "description": "Mixagem e efeitos",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Distribuição"
      },
      {
        "title": "Filmagem principal",
        "description": "Período de gravação",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Distribuição"
      },
      {
        "title": "Premiere e estreia",
        "description": "Evento de lançamento",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Promoção"
      }
    ],
    "bestPractices": [
      "Roteiro é rei — invista no desenvolvimento.",
      "Plano B para tudo: clima, ator, equipamento.",
      "Mantenha continuity rigorosa em filmagem.",
      "Festivais antes do streaming aumentam o valor.",
      "Direitos autorais: documente cada licença."
    ],
    "kpis": [
      "Audiência / views",
      "Receita de bilheteria",
      "ROI da produção",
      "Engajamento social",
      "Indicações a prémios"
    ],
    "durationWeeks": 49,
    "teamSize": 8,
    "popularity": 72
  },
  {
    "id": "tpl-173",
    "name": "Cobertura de Megaevento",
    "industry": "Mídia & Entretenimento",
    "icon": "Film",
    "description": "Transmissão ao vivo",
    "methodology": "Waterfall",
    "phases": [
      "Pré-produção",
      "Pré-produção avançada",
      "Produção",
      "Pós-produção",
      "Distribuição",
      "Promoção"
    ],
    "tasks": [
      {
        "title": "Plano de distribuição",
        "description": "Janelas e plataformas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-produção"
      },
      {
        "title": "Desenvolvimento de roteiro",
        "description": "Argumento e tratamento",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Pré-produção"
      },
      {
        "title": "Premiere e estreia",
        "description": "Evento de lançamento",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Edição e montagem",
        "description": "Cortes e ritmo",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Casting",
        "description": "Seleção de elenco",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Produção"
      },
      {
        "title": "Campanha de marketing",
        "description": "PR e mídia",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pós-produção"
      },
      {
        "title": "Locação e cenografia",
        "description": "Scouting e set design",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pós-produção"
      },
      {
        "title": "Pitch para financiadores",
        "description": "Captação de recursos",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Distribuição"
      },
      {
        "title": "Filmagem principal",
        "description": "Período de gravação",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Distribuição"
      },
      {
        "title": "Pós-produção de som e VFX",
        "description": "Mixagem e efeitos",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Promoção"
      }
    ],
    "bestPractices": [
      "Roteiro é rei — invista no desenvolvimento.",
      "Plano B para tudo: clima, ator, equipamento.",
      "Mantenha continuity rigorosa em filmagem.",
      "Festivais antes do streaming aumentam o valor.",
      "Direitos autorais: documente cada licença."
    ],
    "kpis": [
      "Audiência / views",
      "Receita de bilheteria",
      "ROI da produção",
      "Engajamento social",
      "Indicações a prémios"
    ],
    "durationWeeks": 49,
    "teamSize": 5,
    "popularity": 67
  },
  {
    "id": "tpl-174",
    "name": "Podcast Original",
    "industry": "Mídia & Entretenimento",
    "icon": "Film",
    "description": "Série de podcast com patrocinadores",
    "methodology": "Agile",
    "phases": [
      "Pré-produção",
      "Pré-produção avançada",
      "Produção",
      "Pós-produção",
      "Distribuição",
      "Promoção"
    ],
    "tasks": [
      {
        "title": "Pitch para financiadores",
        "description": "Captação de recursos",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Pré-produção"
      },
      {
        "title": "Campanha de marketing",
        "description": "PR e mídia",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-produção"
      },
      {
        "title": "Desenvolvimento de roteiro",
        "description": "Argumento e tratamento",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Plano de distribuição",
        "description": "Janelas e plataformas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Locação e cenografia",
        "description": "Scouting e set design",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Produção"
      },
      {
        "title": "Pós-produção de som e VFX",
        "description": "Mixagem e efeitos",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Pós-produção"
      },
      {
        "title": "Casting",
        "description": "Seleção de elenco",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pós-produção"
      },
      {
        "title": "Premiere e estreia",
        "description": "Evento de lançamento",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Distribuição"
      },
      {
        "title": "Filmagem principal",
        "description": "Período de gravação",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Distribuição"
      },
      {
        "title": "Edição e montagem",
        "description": "Cortes e ritmo",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Promoção"
      }
    ],
    "bestPractices": [
      "Roteiro é rei — invista no desenvolvimento.",
      "Plano B para tudo: clima, ator, equipamento.",
      "Mantenha continuity rigorosa em filmagem.",
      "Festivais antes do streaming aumentam o valor.",
      "Direitos autorais: documente cada licença."
    ],
    "kpis": [
      "Audiência / views",
      "Receita de bilheteria",
      "ROI da produção",
      "Engajamento social",
      "Indicações a prémios"
    ],
    "durationWeeks": 49,
    "teamSize": 15,
    "popularity": 97
  },
  {
    "id": "tpl-175",
    "name": "Tour de Concertos",
    "industry": "Mídia & Entretenimento",
    "icon": "Film",
    "description": "Turnê nacional/internacional",
    "methodology": "Waterfall",
    "phases": [
      "Pré-produção",
      "Pré-produção avançada",
      "Produção",
      "Pós-produção",
      "Distribuição",
      "Promoção"
    ],
    "tasks": [
      {
        "title": "Plano de distribuição",
        "description": "Janelas e plataformas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-produção"
      },
      {
        "title": "Pós-produção de som e VFX",
        "description": "Mixagem e efeitos",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Pré-produção"
      },
      {
        "title": "Campanha de marketing",
        "description": "PR e mídia",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Desenvolvimento de roteiro",
        "description": "Argumento e tratamento",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Edição e montagem",
        "description": "Cortes e ritmo",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Produção"
      },
      {
        "title": "Filmagem principal",
        "description": "Período de gravação",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Pós-produção"
      },
      {
        "title": "Pitch para financiadores",
        "description": "Captação de recursos",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Pós-produção"
      },
      {
        "title": "Casting",
        "description": "Seleção de elenco",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Distribuição"
      },
      {
        "title": "Locação e cenografia",
        "description": "Scouting e set design",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Distribuição"
      },
      {
        "title": "Premiere e estreia",
        "description": "Evento de lançamento",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Promoção"
      }
    ],
    "bestPractices": [
      "Roteiro é rei — invista no desenvolvimento.",
      "Plano B para tudo: clima, ator, equipamento.",
      "Mantenha continuity rigorosa em filmagem.",
      "Festivais antes do streaming aumentam o valor.",
      "Direitos autorais: documente cada licença."
    ],
    "kpis": [
      "Audiência / views",
      "Receita de bilheteria",
      "ROI da produção",
      "Engajamento social",
      "Indicações a prémios"
    ],
    "durationWeeks": 49,
    "teamSize": 21,
    "popularity": 65
  },
  {
    "id": "tpl-176",
    "name": "Produção de Longa-metragem — Pequena Escala",
    "industry": "Mídia & Entretenimento",
    "icon": "Film",
    "description": "Filme cinematográfico (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Pré-produção",
      "Pré-produção avançada",
      "Produção",
      "Pós-produção",
      "Distribuição",
      "Promoção"
    ],
    "tasks": [
      {
        "title": "Casting",
        "description": "Seleção de elenco",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-produção"
      },
      {
        "title": "Locação e cenografia",
        "description": "Scouting e set design",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-produção"
      },
      {
        "title": "Desenvolvimento de roteiro",
        "description": "Argumento e tratamento",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Pós-produção de som e VFX",
        "description": "Mixagem e efeitos",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Plano de distribuição",
        "description": "Janelas e plataformas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Produção"
      },
      {
        "title": "Premiere e estreia",
        "description": "Evento de lançamento",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Pós-produção"
      },
      {
        "title": "Campanha de marketing",
        "description": "PR e mídia",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pós-produção"
      },
      {
        "title": "Filmagem principal",
        "description": "Período de gravação",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Distribuição"
      },
      {
        "title": "Pitch para financiadores",
        "description": "Captação de recursos",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Distribuição"
      },
      {
        "title": "Edição e montagem",
        "description": "Cortes e ritmo",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Promoção"
      }
    ],
    "bestPractices": [
      "Roteiro é rei — invista no desenvolvimento.",
      "Plano B para tudo: clima, ator, equipamento.",
      "Mantenha continuity rigorosa em filmagem.",
      "Festivais antes do streaming aumentam o valor.",
      "Direitos autorais: documente cada licença."
    ],
    "kpis": [
      "Audiência / views",
      "Receita de bilheteria",
      "ROI da produção",
      "Engajamento social",
      "Indicações a prémios"
    ],
    "durationWeeks": 49,
    "teamSize": 11,
    "popularity": 69
  },
  {
    "id": "tpl-177",
    "name": "Lançamento de Série Streaming — Pequena Escala",
    "industry": "Mídia & Entretenimento",
    "icon": "Film",
    "description": "Série original para plataforma (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Pré-produção",
      "Pré-produção avançada",
      "Produção",
      "Pós-produção",
      "Distribuição",
      "Promoção"
    ],
    "tasks": [
      {
        "title": "Casting",
        "description": "Seleção de elenco",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-produção"
      },
      {
        "title": "Filmagem principal",
        "description": "Período de gravação",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Pré-produção"
      },
      {
        "title": "Locação e cenografia",
        "description": "Scouting e set design",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Edição e montagem",
        "description": "Cortes e ritmo",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Desenvolvimento de roteiro",
        "description": "Argumento e tratamento",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Produção"
      },
      {
        "title": "Pós-produção de som e VFX",
        "description": "Mixagem e efeitos",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Pós-produção"
      },
      {
        "title": "Plano de distribuição",
        "description": "Janelas e plataformas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pós-produção"
      },
      {
        "title": "Premiere e estreia",
        "description": "Evento de lançamento",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Distribuição"
      },
      {
        "title": "Campanha de marketing",
        "description": "PR e mídia",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Distribuição"
      },
      {
        "title": "Pitch para financiadores",
        "description": "Captação de recursos",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Promoção"
      }
    ],
    "bestPractices": [
      "Roteiro é rei — invista no desenvolvimento.",
      "Plano B para tudo: clima, ator, equipamento.",
      "Mantenha continuity rigorosa em filmagem.",
      "Festivais antes do streaming aumentam o valor.",
      "Direitos autorais: documente cada licença."
    ],
    "kpis": [
      "Audiência / views",
      "Receita de bilheteria",
      "ROI da produção",
      "Engajamento social",
      "Indicações a prémios"
    ],
    "durationWeeks": 49,
    "teamSize": 6,
    "popularity": 46
  },
  {
    "id": "tpl-178",
    "name": "Festival Cultural — Pequena Escala",
    "industry": "Mídia & Entretenimento",
    "icon": "Film",
    "description": "Evento multi-dia com atrações (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Pré-produção",
      "Pré-produção avançada",
      "Produção",
      "Pós-produção",
      "Distribuição",
      "Promoção"
    ],
    "tasks": [
      {
        "title": "Desenvolvimento de roteiro",
        "description": "Argumento e tratamento",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Pré-produção"
      },
      {
        "title": "Plano de distribuição",
        "description": "Janelas e plataformas",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-produção"
      },
      {
        "title": "Premiere e estreia",
        "description": "Evento de lançamento",
        "priority": "high",
        "estimatedDays": 3,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Pitch para financiadores",
        "description": "Captação de recursos",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Pré-produção avançada"
      },
      {
        "title": "Edição e montagem",
        "description": "Cortes e ritmo",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Produção"
      },
      {
        "title": "Campanha de marketing",
        "description": "PR e mídia",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pós-produção"
      },
      {
        "title": "Locação e cenografia",
        "description": "Scouting e set design",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pós-produção"
      },
      {
        "title": "Pós-produção de som e VFX",
        "description": "Mixagem e efeitos",
        "priority": "high",
        "estimatedDays": 45,
        "phase": "Distribuição"
      },
      {
        "title": "Filmagem principal",
        "description": "Período de gravação",
        "priority": "urgent",
        "estimatedDays": 45,
        "phase": "Distribuição"
      },
      {
        "title": "Casting",
        "description": "Seleção de elenco",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Promoção"
      }
    ],
    "bestPractices": [
      "Roteiro é rei — invista no desenvolvimento.",
      "Plano B para tudo: clima, ator, equipamento.",
      "Mantenha continuity rigorosa em filmagem.",
      "Festivais antes do streaming aumentam o valor.",
      "Direitos autorais: documente cada licença."
    ],
    "kpis": [
      "Audiência / views",
      "Receita de bilheteria",
      "ROI da produção",
      "Engajamento social",
      "Indicações a prémios"
    ],
    "durationWeeks": 49,
    "teamSize": 8,
    "popularity": 72
  },
  {
    "id": "tpl-179",
    "name": "Parque Solar Fotovoltaico",
    "industry": "Energia & Utilities",
    "icon": "Zap",
    "description": "Geração solar de grande porte",
    "methodology": "Waterfall",
    "phases": [
      "Estudo de viabilidade",
      "Licenciamento",
      "Engenharia",
      "Construção",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Conexão ao SIN",
        "description": "Acesso à rede elétrica",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Projeto executivo",
        "description": "Engenharia detalhada",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Montagem eletromecânica",
        "description": "Instalação de equipamentos",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Licenciamento"
      },
      {
        "title": "Licenciamento ambiental",
        "description": "LP, LI, LO",
        "priority": "urgent",
        "estimatedDays": 120,
        "phase": "Licenciamento"
      },
      {
        "title": "Outorga de uso de água",
        "description": "Quando aplicável",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Engenharia"
      },
      {
        "title": "Compra de equipamentos principais",
        "description": "Aerogeradores/painéis/turbinas",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Construção"
      },
      {
        "title": "Leilão de energia",
        "description": "ANEEL ou bilateral",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Construção"
      },
      {
        "title": "Comissionamento e energização",
        "description": "Testes e entrega ao SIN",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Comissionamento"
      },
      {
        "title": "Obras civis",
        "description": "Fundações e acessos",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Comissionamento"
      },
      {
        "title": "Estudo de recurso (sol/vento/hídrico)",
        "description": "Medições e séries históricas",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Licenciamento ambiental é o gargalo — comece cedo.",
      "Medições de recurso de pelo menos 12 meses dão bankability.",
      "Conexão à rede é tão crítico quanto a geração.",
      "ESG é exigência de financiadores, não opção.",
      "O&M de longo prazo determina o IRR real."
    ],
    "kpis": [
      "Capacity factor %",
      "LCOE (US$/MWh)",
      "Disponibilidade %",
      "Tempo até COD",
      "CAPEX vs orçado"
    ],
    "durationWeeks": 115,
    "teamSize": 21,
    "popularity": 100
  },
  {
    "id": "tpl-180",
    "name": "Parque Eólico Onshore",
    "industry": "Energia & Utilities",
    "icon": "Zap",
    "description": "Geração eólica terrestre",
    "methodology": "Waterfall",
    "phases": [
      "Estudo de viabilidade",
      "Licenciamento",
      "Engenharia",
      "Construção",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Outorga de uso de água",
        "description": "Quando aplicável",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Compra de equipamentos principais",
        "description": "Aerogeradores/painéis/turbinas",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Obras civis",
        "description": "Fundações e acessos",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Licenciamento"
      },
      {
        "title": "Estudo de recurso (sol/vento/hídrico)",
        "description": "Medições e séries históricas",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Licenciamento"
      },
      {
        "title": "Comissionamento e energização",
        "description": "Testes e entrega ao SIN",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Engenharia"
      },
      {
        "title": "Conexão ao SIN",
        "description": "Acesso à rede elétrica",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Construção"
      },
      {
        "title": "Projeto executivo",
        "description": "Engenharia detalhada",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Construção"
      },
      {
        "title": "Leilão de energia",
        "description": "ANEEL ou bilateral",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Comissionamento"
      },
      {
        "title": "Licenciamento ambiental",
        "description": "LP, LI, LO",
        "priority": "urgent",
        "estimatedDays": 120,
        "phase": "Comissionamento"
      },
      {
        "title": "Montagem eletromecânica",
        "description": "Instalação de equipamentos",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Licenciamento ambiental é o gargalo — comece cedo.",
      "Medições de recurso de pelo menos 12 meses dão bankability.",
      "Conexão à rede é tão crítico quanto a geração.",
      "ESG é exigência de financiadores, não opção.",
      "O&M de longo prazo determina o IRR real."
    ],
    "kpis": [
      "Capacity factor %",
      "LCOE (US$/MWh)",
      "Disponibilidade %",
      "Tempo até COD",
      "CAPEX vs orçado"
    ],
    "durationWeeks": 115,
    "teamSize": 13,
    "popularity": 64
  },
  {
    "id": "tpl-181",
    "name": "Subestação de Transmissão",
    "industry": "Energia & Utilities",
    "icon": "Zap",
    "description": "Subestação de alta tensão",
    "methodology": "PRINCE2",
    "phases": [
      "Estudo de viabilidade",
      "Licenciamento",
      "Engenharia",
      "Construção",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Montagem eletromecânica",
        "description": "Instalação de equipamentos",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Obras civis",
        "description": "Fundações e acessos",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Conexão ao SIN",
        "description": "Acesso à rede elétrica",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Licenciamento"
      },
      {
        "title": "Compra de equipamentos principais",
        "description": "Aerogeradores/painéis/turbinas",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Licenciamento"
      },
      {
        "title": "Licenciamento ambiental",
        "description": "LP, LI, LO",
        "priority": "urgent",
        "estimatedDays": 120,
        "phase": "Engenharia"
      },
      {
        "title": "Outorga de uso de água",
        "description": "Quando aplicável",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Construção"
      },
      {
        "title": "Projeto executivo",
        "description": "Engenharia detalhada",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Construção"
      },
      {
        "title": "Comissionamento e energização",
        "description": "Testes e entrega ao SIN",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Comissionamento"
      },
      {
        "title": "Estudo de recurso (sol/vento/hídrico)",
        "description": "Medições e séries históricas",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Comissionamento"
      },
      {
        "title": "Leilão de energia",
        "description": "ANEEL ou bilateral",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Licenciamento ambiental é o gargalo — comece cedo.",
      "Medições de recurso de pelo menos 12 meses dão bankability.",
      "Conexão à rede é tão crítico quanto a geração.",
      "ESG é exigência de financiadores, não opção.",
      "O&M de longo prazo determina o IRR real."
    ],
    "kpis": [
      "Capacity factor %",
      "LCOE (US$/MWh)",
      "Disponibilidade %",
      "Tempo até COD",
      "CAPEX vs orçado"
    ],
    "durationWeeks": 115,
    "teamSize": 21,
    "popularity": 73
  },
  {
    "id": "tpl-182",
    "name": "Linha de Transmissão",
    "industry": "Energia & Utilities",
    "icon": "Zap",
    "description": "LT de longa distância",
    "methodology": "Waterfall",
    "phases": [
      "Estudo de viabilidade",
      "Licenciamento",
      "Engenharia",
      "Construção",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Compra de equipamentos principais",
        "description": "Aerogeradores/painéis/turbinas",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Conexão ao SIN",
        "description": "Acesso à rede elétrica",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Leilão de energia",
        "description": "ANEEL ou bilateral",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Licenciamento"
      },
      {
        "title": "Licenciamento ambiental",
        "description": "LP, LI, LO",
        "priority": "urgent",
        "estimatedDays": 120,
        "phase": "Licenciamento"
      },
      {
        "title": "Outorga de uso de água",
        "description": "Quando aplicável",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Engenharia"
      },
      {
        "title": "Estudo de recurso (sol/vento/hídrico)",
        "description": "Medições e séries históricas",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Construção"
      },
      {
        "title": "Montagem eletromecânica",
        "description": "Instalação de equipamentos",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Construção"
      },
      {
        "title": "Comissionamento e energização",
        "description": "Testes e entrega ao SIN",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Comissionamento"
      },
      {
        "title": "Obras civis",
        "description": "Fundações e acessos",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Comissionamento"
      },
      {
        "title": "Projeto executivo",
        "description": "Engenharia detalhada",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Licenciamento ambiental é o gargalo — comece cedo.",
      "Medições de recurso de pelo menos 12 meses dão bankability.",
      "Conexão à rede é tão crítico quanto a geração.",
      "ESG é exigência de financiadores, não opção.",
      "O&M de longo prazo determina o IRR real."
    ],
    "kpis": [
      "Capacity factor %",
      "LCOE (US$/MWh)",
      "Disponibilidade %",
      "Tempo até COD",
      "CAPEX vs orçado"
    ],
    "durationWeeks": 115,
    "teamSize": 12,
    "popularity": 64
  },
  {
    "id": "tpl-183",
    "name": "Distribuição Urbana",
    "industry": "Energia & Utilities",
    "icon": "Zap",
    "description": "Redes de baixa/média tensão",
    "methodology": "PRINCE2",
    "phases": [
      "Estudo de viabilidade",
      "Licenciamento",
      "Engenharia",
      "Construção",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Comissionamento e energização",
        "description": "Testes e entrega ao SIN",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Estudo de recurso (sol/vento/hídrico)",
        "description": "Medições e séries históricas",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Licenciamento ambiental",
        "description": "LP, LI, LO",
        "priority": "urgent",
        "estimatedDays": 120,
        "phase": "Licenciamento"
      },
      {
        "title": "Obras civis",
        "description": "Fundações e acessos",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Licenciamento"
      },
      {
        "title": "Leilão de energia",
        "description": "ANEEL ou bilateral",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Engenharia"
      },
      {
        "title": "Projeto executivo",
        "description": "Engenharia detalhada",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Construção"
      },
      {
        "title": "Compra de equipamentos principais",
        "description": "Aerogeradores/painéis/turbinas",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Construção"
      },
      {
        "title": "Conexão ao SIN",
        "description": "Acesso à rede elétrica",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Comissionamento"
      },
      {
        "title": "Montagem eletromecânica",
        "description": "Instalação de equipamentos",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Comissionamento"
      },
      {
        "title": "Outorga de uso de água",
        "description": "Quando aplicável",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Licenciamento ambiental é o gargalo — comece cedo.",
      "Medições de recurso de pelo menos 12 meses dão bankability.",
      "Conexão à rede é tão crítico quanto a geração.",
      "ESG é exigência de financiadores, não opção.",
      "O&M de longo prazo determina o IRR real."
    ],
    "kpis": [
      "Capacity factor %",
      "LCOE (US$/MWh)",
      "Disponibilidade %",
      "Tempo até COD",
      "CAPEX vs orçado"
    ],
    "durationWeeks": 115,
    "teamSize": 4,
    "popularity": 53
  },
  {
    "id": "tpl-184",
    "name": "Smart Grid",
    "industry": "Energia & Utilities",
    "icon": "Zap",
    "description": "Rede elétrica inteligente",
    "methodology": "PRINCE2",
    "phases": [
      "Estudo de viabilidade",
      "Licenciamento",
      "Engenharia",
      "Construção",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Licenciamento ambiental",
        "description": "LP, LI, LO",
        "priority": "urgent",
        "estimatedDays": 120,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Obras civis",
        "description": "Fundações e acessos",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Conexão ao SIN",
        "description": "Acesso à rede elétrica",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Licenciamento"
      },
      {
        "title": "Projeto executivo",
        "description": "Engenharia detalhada",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Licenciamento"
      },
      {
        "title": "Leilão de energia",
        "description": "ANEEL ou bilateral",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Engenharia"
      },
      {
        "title": "Comissionamento e energização",
        "description": "Testes e entrega ao SIN",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Construção"
      },
      {
        "title": "Montagem eletromecânica",
        "description": "Instalação de equipamentos",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Construção"
      },
      {
        "title": "Estudo de recurso (sol/vento/hídrico)",
        "description": "Medições e séries históricas",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Comissionamento"
      },
      {
        "title": "Compra de equipamentos principais",
        "description": "Aerogeradores/painéis/turbinas",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Comissionamento"
      },
      {
        "title": "Outorga de uso de água",
        "description": "Quando aplicável",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Licenciamento ambiental é o gargalo — comece cedo.",
      "Medições de recurso de pelo menos 12 meses dão bankability.",
      "Conexão à rede é tão crítico quanto a geração.",
      "ESG é exigência de financiadores, não opção.",
      "O&M de longo prazo determina o IRR real."
    ],
    "kpis": [
      "Capacity factor %",
      "LCOE (US$/MWh)",
      "Disponibilidade %",
      "Tempo até COD",
      "CAPEX vs orçado"
    ],
    "durationWeeks": 115,
    "teamSize": 18,
    "popularity": 74
  },
  {
    "id": "tpl-185",
    "name": "Mini-hidrelétrica (PCH)",
    "industry": "Energia & Utilities",
    "icon": "Zap",
    "description": "Pequena central hidrelétrica",
    "methodology": "Waterfall",
    "phases": [
      "Estudo de viabilidade",
      "Licenciamento",
      "Engenharia",
      "Construção",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Leilão de energia",
        "description": "ANEEL ou bilateral",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Comissionamento e energização",
        "description": "Testes e entrega ao SIN",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Projeto executivo",
        "description": "Engenharia detalhada",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Licenciamento"
      },
      {
        "title": "Montagem eletromecânica",
        "description": "Instalação de equipamentos",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Licenciamento"
      },
      {
        "title": "Conexão ao SIN",
        "description": "Acesso à rede elétrica",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Engenharia"
      },
      {
        "title": "Obras civis",
        "description": "Fundações e acessos",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Construção"
      },
      {
        "title": "Estudo de recurso (sol/vento/hídrico)",
        "description": "Medições e séries históricas",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Construção"
      },
      {
        "title": "Outorga de uso de água",
        "description": "Quando aplicável",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Comissionamento"
      },
      {
        "title": "Licenciamento ambiental",
        "description": "LP, LI, LO",
        "priority": "urgent",
        "estimatedDays": 120,
        "phase": "Comissionamento"
      },
      {
        "title": "Compra de equipamentos principais",
        "description": "Aerogeradores/painéis/turbinas",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Licenciamento ambiental é o gargalo — comece cedo.",
      "Medições de recurso de pelo menos 12 meses dão bankability.",
      "Conexão à rede é tão crítico quanto a geração.",
      "ESG é exigência de financiadores, não opção.",
      "O&M de longo prazo determina o IRR real."
    ],
    "kpis": [
      "Capacity factor %",
      "LCOE (US$/MWh)",
      "Disponibilidade %",
      "Tempo até COD",
      "CAPEX vs orçado"
    ],
    "durationWeeks": 115,
    "teamSize": 15,
    "popularity": 60
  },
  {
    "id": "tpl-186",
    "name": "Biomassa Cogeração",
    "industry": "Energia & Utilities",
    "icon": "Zap",
    "description": "Aproveitamento energético de biomassa",
    "methodology": "PRINCE2",
    "phases": [
      "Estudo de viabilidade",
      "Licenciamento",
      "Engenharia",
      "Construção",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Estudo de recurso (sol/vento/hídrico)",
        "description": "Medições e séries históricas",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Conexão ao SIN",
        "description": "Acesso à rede elétrica",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Outorga de uso de água",
        "description": "Quando aplicável",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Licenciamento"
      },
      {
        "title": "Comissionamento e energização",
        "description": "Testes e entrega ao SIN",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Licenciamento"
      },
      {
        "title": "Obras civis",
        "description": "Fundações e acessos",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Engenharia"
      },
      {
        "title": "Leilão de energia",
        "description": "ANEEL ou bilateral",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Construção"
      },
      {
        "title": "Montagem eletromecânica",
        "description": "Instalação de equipamentos",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Construção"
      },
      {
        "title": "Licenciamento ambiental",
        "description": "LP, LI, LO",
        "priority": "urgent",
        "estimatedDays": 120,
        "phase": "Comissionamento"
      },
      {
        "title": "Compra de equipamentos principais",
        "description": "Aerogeradores/painéis/turbinas",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Comissionamento"
      },
      {
        "title": "Projeto executivo",
        "description": "Engenharia detalhada",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Licenciamento ambiental é o gargalo — comece cedo.",
      "Medições de recurso de pelo menos 12 meses dão bankability.",
      "Conexão à rede é tão crítico quanto a geração.",
      "ESG é exigência de financiadores, não opção.",
      "O&M de longo prazo determina o IRR real."
    ],
    "kpis": [
      "Capacity factor %",
      "LCOE (US$/MWh)",
      "Disponibilidade %",
      "Tempo até COD",
      "CAPEX vs orçado"
    ],
    "durationWeeks": 115,
    "teamSize": 11,
    "popularity": 64
  },
  {
    "id": "tpl-187",
    "name": "Armazenamento BESS",
    "industry": "Energia & Utilities",
    "icon": "Zap",
    "description": "Baterias em larga escala",
    "methodology": "Waterfall",
    "phases": [
      "Estudo de viabilidade",
      "Licenciamento",
      "Engenharia",
      "Construção",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Conexão ao SIN",
        "description": "Acesso à rede elétrica",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Obras civis",
        "description": "Fundações e acessos",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Projeto executivo",
        "description": "Engenharia detalhada",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Licenciamento"
      },
      {
        "title": "Outorga de uso de água",
        "description": "Quando aplicável",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Licenciamento"
      },
      {
        "title": "Comissionamento e energização",
        "description": "Testes e entrega ao SIN",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Engenharia"
      },
      {
        "title": "Montagem eletromecânica",
        "description": "Instalação de equipamentos",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Construção"
      },
      {
        "title": "Leilão de energia",
        "description": "ANEEL ou bilateral",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Construção"
      },
      {
        "title": "Estudo de recurso (sol/vento/hídrico)",
        "description": "Medições e séries históricas",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Comissionamento"
      },
      {
        "title": "Licenciamento ambiental",
        "description": "LP, LI, LO",
        "priority": "urgent",
        "estimatedDays": 120,
        "phase": "Comissionamento"
      },
      {
        "title": "Compra de equipamentos principais",
        "description": "Aerogeradores/painéis/turbinas",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Licenciamento ambiental é o gargalo — comece cedo.",
      "Medições de recurso de pelo menos 12 meses dão bankability.",
      "Conexão à rede é tão crítico quanto a geração.",
      "ESG é exigência de financiadores, não opção.",
      "O&M de longo prazo determina o IRR real."
    ],
    "kpis": [
      "Capacity factor %",
      "LCOE (US$/MWh)",
      "Disponibilidade %",
      "Tempo até COD",
      "CAPEX vs orçado"
    ],
    "durationWeeks": 115,
    "teamSize": 21,
    "popularity": 71
  },
  {
    "id": "tpl-188",
    "name": "Mobilidade Elétrica",
    "industry": "Energia & Utilities",
    "icon": "Zap",
    "description": "Rede de carregadores EV",
    "methodology": "Waterfall",
    "phases": [
      "Estudo de viabilidade",
      "Licenciamento",
      "Engenharia",
      "Construção",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Montagem eletromecânica",
        "description": "Instalação de equipamentos",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Estudo de recurso (sol/vento/hídrico)",
        "description": "Medições e séries históricas",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Comissionamento e energização",
        "description": "Testes e entrega ao SIN",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Licenciamento"
      },
      {
        "title": "Compra de equipamentos principais",
        "description": "Aerogeradores/painéis/turbinas",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Licenciamento"
      },
      {
        "title": "Obras civis",
        "description": "Fundações e acessos",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Engenharia"
      },
      {
        "title": "Projeto executivo",
        "description": "Engenharia detalhada",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Construção"
      },
      {
        "title": "Leilão de energia",
        "description": "ANEEL ou bilateral",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Construção"
      },
      {
        "title": "Licenciamento ambiental",
        "description": "LP, LI, LO",
        "priority": "urgent",
        "estimatedDays": 120,
        "phase": "Comissionamento"
      },
      {
        "title": "Conexão ao SIN",
        "description": "Acesso à rede elétrica",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Comissionamento"
      },
      {
        "title": "Outorga de uso de água",
        "description": "Quando aplicável",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Licenciamento ambiental é o gargalo — comece cedo.",
      "Medições de recurso de pelo menos 12 meses dão bankability.",
      "Conexão à rede é tão crítico quanto a geração.",
      "ESG é exigência de financiadores, não opção.",
      "O&M de longo prazo determina o IRR real."
    ],
    "kpis": [
      "Capacity factor %",
      "LCOE (US$/MWh)",
      "Disponibilidade %",
      "Tempo até COD",
      "CAPEX vs orçado"
    ],
    "durationWeeks": 115,
    "teamSize": 8,
    "popularity": 40
  },
  {
    "id": "tpl-189",
    "name": "Parque Solar Fotovoltaico — Pequena Escala",
    "industry": "Energia & Utilities",
    "icon": "Zap",
    "description": "Geração solar de grande porte (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Estudo de viabilidade",
      "Licenciamento",
      "Engenharia",
      "Construção",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Montagem eletromecânica",
        "description": "Instalação de equipamentos",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Obras civis",
        "description": "Fundações e acessos",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Projeto executivo",
        "description": "Engenharia detalhada",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Licenciamento"
      },
      {
        "title": "Estudo de recurso (sol/vento/hídrico)",
        "description": "Medições e séries históricas",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Licenciamento"
      },
      {
        "title": "Leilão de energia",
        "description": "ANEEL ou bilateral",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Engenharia"
      },
      {
        "title": "Comissionamento e energização",
        "description": "Testes e entrega ao SIN",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Construção"
      },
      {
        "title": "Conexão ao SIN",
        "description": "Acesso à rede elétrica",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Construção"
      },
      {
        "title": "Outorga de uso de água",
        "description": "Quando aplicável",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Comissionamento"
      },
      {
        "title": "Licenciamento ambiental",
        "description": "LP, LI, LO",
        "priority": "urgent",
        "estimatedDays": 120,
        "phase": "Comissionamento"
      },
      {
        "title": "Compra de equipamentos principais",
        "description": "Aerogeradores/painéis/turbinas",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Licenciamento ambiental é o gargalo — comece cedo.",
      "Medições de recurso de pelo menos 12 meses dão bankability.",
      "Conexão à rede é tão crítico quanto a geração.",
      "ESG é exigência de financiadores, não opção.",
      "O&M de longo prazo determina o IRR real."
    ],
    "kpis": [
      "Capacity factor %",
      "LCOE (US$/MWh)",
      "Disponibilidade %",
      "Tempo até COD",
      "CAPEX vs orçado"
    ],
    "durationWeeks": 115,
    "teamSize": 21,
    "popularity": 75
  },
  {
    "id": "tpl-190",
    "name": "Parque Eólico Onshore — Pequena Escala",
    "industry": "Energia & Utilities",
    "icon": "Zap",
    "description": "Geração eólica terrestre (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Estudo de viabilidade",
      "Licenciamento",
      "Engenharia",
      "Construção",
      "Comissionamento",
      "Operação"
    ],
    "tasks": [
      {
        "title": "Estudo de recurso (sol/vento/hídrico)",
        "description": "Medições e séries históricas",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Comissionamento e energização",
        "description": "Testes e entrega ao SIN",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Estudo de viabilidade"
      },
      {
        "title": "Leilão de energia",
        "description": "ANEEL ou bilateral",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Licenciamento"
      },
      {
        "title": "Obras civis",
        "description": "Fundações e acessos",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Licenciamento"
      },
      {
        "title": "Outorga de uso de água",
        "description": "Quando aplicável",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Engenharia"
      },
      {
        "title": "Montagem eletromecânica",
        "description": "Instalação de equipamentos",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Construção"
      },
      {
        "title": "Conexão ao SIN",
        "description": "Acesso à rede elétrica",
        "priority": "urgent",
        "estimatedDays": 90,
        "phase": "Construção"
      },
      {
        "title": "Compra de equipamentos principais",
        "description": "Aerogeradores/painéis/turbinas",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Comissionamento"
      },
      {
        "title": "Projeto executivo",
        "description": "Engenharia detalhada",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Comissionamento"
      },
      {
        "title": "Licenciamento ambiental",
        "description": "LP, LI, LO",
        "priority": "urgent",
        "estimatedDays": 120,
        "phase": "Operação"
      }
    ],
    "bestPractices": [
      "Licenciamento ambiental é o gargalo — comece cedo.",
      "Medições de recurso de pelo menos 12 meses dão bankability.",
      "Conexão à rede é tão crítico quanto a geração.",
      "ESG é exigência de financiadores, não opção.",
      "O&M de longo prazo determina o IRR real."
    ],
    "kpis": [
      "Capacity factor %",
      "LCOE (US$/MWh)",
      "Disponibilidade %",
      "Tempo até COD",
      "CAPEX vs orçado"
    ],
    "durationWeeks": 115,
    "teamSize": 11,
    "popularity": 52
  },
  {
    "id": "tpl-191",
    "name": "Implementação Lean Manufacturing",
    "industry": "Manufatura & Indústria",
    "icon": "Factory",
    "description": "Eliminação de desperdícios",
    "methodology": "Waterfall",
    "phases": [
      "Diagnóstico",
      "Desenho de processos",
      "Pilotos",
      "Roll-out",
      "Sustentação",
      "Melhoria contínua"
    ],
    "tasks": [
      {
        "title": "Auditoria de processo",
        "description": "Verificação de aderência",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Kaizen events",
        "description": "Eventos rápidos de melhoria",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Diagnóstico"
      },
      {
        "title": "Implementação de 5S",
        "description": "Organização do chão de fábrica",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Desenho de processos"
      },
      {
        "title": "Definição de KPIs",
        "description": "OEE, FTT, Throughput",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Desenho de processos"
      },
      {
        "title": "Treinamento Lean para operadores",
        "description": "Capacitação inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pilotos"
      },
      {
        "title": "Value stream mapping",
        "description": "Mapeamento do fluxo de valor",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Roll-out"
      },
      {
        "title": "Implementação de kanban físico",
        "description": "Gestão visual de fluxo",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Roll-out"
      },
      {
        "title": "Análise de gargalos",
        "description": "Teoria das restrições",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Setup de OEE em tempo real",
        "description": "Sensores e dashboard",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Sustentação"
      },
      {
        "title": "Reporte mensal de resultados",
        "description": "Tracking de ganhos",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Melhoria contínua"
      }
    ],
    "bestPractices": [
      "Gemba walks: liderança no chão de fábrica.",
      "Dados em tempo real ou não há melhoria sustentável.",
      "Envolva operadores — eles conhecem o processo.",
      "Manutenção preditiva paga-se em 6-12 meses.",
      "Standard work é a base de toda melhoria."
    ],
    "kpis": [
      "OEE %",
      "FTT (First Time Through)",
      "Throughput",
      "Defeitos PPM",
      "MTBF"
    ],
    "durationWeeks": 16,
    "teamSize": 11,
    "popularity": 59
  },
  {
    "id": "tpl-192",
    "name": "Linha de Montagem Automatizada",
    "industry": "Manufatura & Indústria",
    "icon": "Factory",
    "description": "Robotização e automação",
    "methodology": "Waterfall",
    "phases": [
      "Diagnóstico",
      "Desenho de processos",
      "Pilotos",
      "Roll-out",
      "Sustentação",
      "Melhoria contínua"
    ],
    "tasks": [
      {
        "title": "Value stream mapping",
        "description": "Mapeamento do fluxo de valor",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Análise de gargalos",
        "description": "Teoria das restrições",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Implementação de kanban físico",
        "description": "Gestão visual de fluxo",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Desenho de processos"
      },
      {
        "title": "Treinamento Lean para operadores",
        "description": "Capacitação inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pilotos"
      },
      {
        "title": "Setup de OEE em tempo real",
        "description": "Sensores e dashboard",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pilotos"
      },
      {
        "title": "Kaizen events",
        "description": "Eventos rápidos de melhoria",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Roll-out"
      },
      {
        "title": "Implementação de 5S",
        "description": "Organização do chão de fábrica",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Sustentação"
      },
      {
        "title": "Reporte mensal de resultados",
        "description": "Tracking de ganhos",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Sustentação"
      },
      {
        "title": "Definição de KPIs",
        "description": "OEE, FTT, Throughput",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Melhoria contínua"
      }
    ],
    "bestPractices": [
      "Gemba walks: liderança no chão de fábrica.",
      "Dados em tempo real ou não há melhoria sustentável.",
      "Envolva operadores — eles conhecem o processo.",
      "Manutenção preditiva paga-se em 6-12 meses.",
      "Standard work é a base de toda melhoria."
    ],
    "kpis": [
      "OEE %",
      "FTT (First Time Through)",
      "Throughput",
      "Defeitos PPM",
      "MTBF"
    ],
    "durationWeeks": 15,
    "teamSize": 9,
    "popularity": 45
  },
  {
    "id": "tpl-193",
    "name": "Industria 4.0 / IIoT",
    "industry": "Manufatura & Indústria",
    "icon": "Factory",
    "description": "Sensores e dados em tempo real",
    "methodology": "Lean",
    "phases": [
      "Diagnóstico",
      "Desenho de processos",
      "Pilotos",
      "Roll-out",
      "Sustentação",
      "Melhoria contínua"
    ],
    "tasks": [
      {
        "title": "Implementação de kanban físico",
        "description": "Gestão visual de fluxo",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Implementação de 5S",
        "description": "Organização do chão de fábrica",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Diagnóstico"
      },
      {
        "title": "Análise de gargalos",
        "description": "Teoria das restrições",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Desenho de processos"
      },
      {
        "title": "Kaizen events",
        "description": "Eventos rápidos de melhoria",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Desenho de processos"
      },
      {
        "title": "Value stream mapping",
        "description": "Mapeamento do fluxo de valor",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pilotos"
      },
      {
        "title": "Setup de OEE em tempo real",
        "description": "Sensores e dashboard",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Roll-out"
      },
      {
        "title": "Reporte mensal de resultados",
        "description": "Tracking de ganhos",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Roll-out"
      },
      {
        "title": "Definição de KPIs",
        "description": "OEE, FTT, Throughput",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Sustentação"
      },
      {
        "title": "Treinamento Lean para operadores",
        "description": "Capacitação inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Auditoria de processo",
        "description": "Verificação de aderência",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Melhoria contínua"
      }
    ],
    "bestPractices": [
      "Gemba walks: liderança no chão de fábrica.",
      "Dados em tempo real ou não há melhoria sustentável.",
      "Envolva operadores — eles conhecem o processo.",
      "Manutenção preditiva paga-se em 6-12 meses.",
      "Standard work é a base de toda melhoria."
    ],
    "kpis": [
      "OEE %",
      "FTT (First Time Through)",
      "Throughput",
      "Defeitos PPM",
      "MTBF"
    ],
    "durationWeeks": 16,
    "teamSize": 6,
    "popularity": 83
  },
  {
    "id": "tpl-194",
    "name": "Certificação ISO 9001",
    "industry": "Manufatura & Indústria",
    "icon": "Factory",
    "description": "Sistema de gestão da qualidade",
    "methodology": "Lean",
    "phases": [
      "Diagnóstico",
      "Desenho de processos",
      "Pilotos",
      "Roll-out",
      "Sustentação",
      "Melhoria contínua"
    ],
    "tasks": [
      {
        "title": "Auditoria de processo",
        "description": "Verificação de aderência",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Value stream mapping",
        "description": "Mapeamento do fluxo de valor",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Definição de KPIs",
        "description": "OEE, FTT, Throughput",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Desenho de processos"
      },
      {
        "title": "Implementação de kanban físico",
        "description": "Gestão visual de fluxo",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Desenho de processos"
      },
      {
        "title": "Setup de OEE em tempo real",
        "description": "Sensores e dashboard",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pilotos"
      },
      {
        "title": "Reporte mensal de resultados",
        "description": "Tracking de ganhos",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Roll-out"
      },
      {
        "title": "Análise de gargalos",
        "description": "Teoria das restrições",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Roll-out"
      },
      {
        "title": "Implementação de 5S",
        "description": "Organização do chão de fábrica",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Sustentação"
      },
      {
        "title": "Kaizen events",
        "description": "Eventos rápidos de melhoria",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Sustentação"
      },
      {
        "title": "Treinamento Lean para operadores",
        "description": "Capacitação inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Melhoria contínua"
      }
    ],
    "bestPractices": [
      "Gemba walks: liderança no chão de fábrica.",
      "Dados em tempo real ou não há melhoria sustentável.",
      "Envolva operadores — eles conhecem o processo.",
      "Manutenção preditiva paga-se em 6-12 meses.",
      "Standard work é a base de toda melhoria."
    ],
    "kpis": [
      "OEE %",
      "FTT (First Time Through)",
      "Throughput",
      "Defeitos PPM",
      "MTBF"
    ],
    "durationWeeks": 16,
    "teamSize": 13,
    "popularity": 50
  },
  {
    "id": "tpl-195",
    "name": "Programa Six Sigma",
    "industry": "Manufatura & Indústria",
    "icon": "Factory",
    "description": "Redução de variabilidade",
    "methodology": "Lean",
    "phases": [
      "Diagnóstico",
      "Desenho de processos",
      "Pilotos",
      "Roll-out",
      "Sustentação",
      "Melhoria contínua"
    ],
    "tasks": [
      {
        "title": "Treinamento Lean para operadores",
        "description": "Capacitação inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Implementação de kanban físico",
        "description": "Gestão visual de fluxo",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Implementação de 5S",
        "description": "Organização do chão de fábrica",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Desenho de processos"
      },
      {
        "title": "Reporte mensal de resultados",
        "description": "Tracking de ganhos",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Desenho de processos"
      },
      {
        "title": "Setup de OEE em tempo real",
        "description": "Sensores e dashboard",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pilotos"
      },
      {
        "title": "Análise de gargalos",
        "description": "Teoria das restrições",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Roll-out"
      },
      {
        "title": "Value stream mapping",
        "description": "Mapeamento do fluxo de valor",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Roll-out"
      },
      {
        "title": "Definição de KPIs",
        "description": "OEE, FTT, Throughput",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Sustentação"
      },
      {
        "title": "Kaizen events",
        "description": "Eventos rápidos de melhoria",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Sustentação"
      },
      {
        "title": "Auditoria de processo",
        "description": "Verificação de aderência",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Melhoria contínua"
      }
    ],
    "bestPractices": [
      "Gemba walks: liderança no chão de fábrica.",
      "Dados em tempo real ou não há melhoria sustentável.",
      "Envolva operadores — eles conhecem o processo.",
      "Manutenção preditiva paga-se em 6-12 meses.",
      "Standard work é a base de toda melhoria."
    ],
    "kpis": [
      "OEE %",
      "FTT (First Time Through)",
      "Throughput",
      "Defeitos PPM",
      "MTBF"
    ],
    "durationWeeks": 16,
    "teamSize": 17,
    "popularity": 54
  },
  {
    "id": "tpl-196",
    "name": "Manutenção Preditiva",
    "industry": "Manufatura & Indústria",
    "icon": "Factory",
    "description": "MTBF e analytics",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho de processos",
      "Pilotos",
      "Roll-out",
      "Sustentação",
      "Melhoria contínua"
    ],
    "tasks": [
      {
        "title": "Implementação de 5S",
        "description": "Organização do chão de fábrica",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Diagnóstico"
      },
      {
        "title": "Implementação de kanban físico",
        "description": "Gestão visual de fluxo",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reporte mensal de resultados",
        "description": "Tracking de ganhos",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Desenho de processos"
      },
      {
        "title": "Value stream mapping",
        "description": "Mapeamento do fluxo de valor",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pilotos"
      },
      {
        "title": "Setup de OEE em tempo real",
        "description": "Sensores e dashboard",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pilotos"
      },
      {
        "title": "Definição de KPIs",
        "description": "OEE, FTT, Throughput",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Roll-out"
      },
      {
        "title": "Treinamento Lean para operadores",
        "description": "Capacitação inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Análise de gargalos",
        "description": "Teoria das restrições",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Auditoria de processo",
        "description": "Verificação de aderência",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Melhoria contínua"
      }
    ],
    "bestPractices": [
      "Gemba walks: liderança no chão de fábrica.",
      "Dados em tempo real ou não há melhoria sustentável.",
      "Envolva operadores — eles conhecem o processo.",
      "Manutenção preditiva paga-se em 6-12 meses.",
      "Standard work é a base de toda melhoria."
    ],
    "kpis": [
      "OEE %",
      "FTT (First Time Through)",
      "Throughput",
      "Defeitos PPM",
      "MTBF"
    ],
    "durationWeeks": 15,
    "teamSize": 21,
    "popularity": 100
  },
  {
    "id": "tpl-197",
    "name": "Lançamento de Novo Produto Industrial",
    "industry": "Manufatura & Indústria",
    "icon": "Factory",
    "description": "NPD físico",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho de processos",
      "Pilotos",
      "Roll-out",
      "Sustentação",
      "Melhoria contínua"
    ],
    "tasks": [
      {
        "title": "Implementação de kanban físico",
        "description": "Gestão visual de fluxo",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Definição de KPIs",
        "description": "OEE, FTT, Throughput",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reporte mensal de resultados",
        "description": "Tracking de ganhos",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Desenho de processos"
      },
      {
        "title": "Value stream mapping",
        "description": "Mapeamento do fluxo de valor",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho de processos"
      },
      {
        "title": "Kaizen events",
        "description": "Eventos rápidos de melhoria",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Pilotos"
      },
      {
        "title": "Auditoria de processo",
        "description": "Verificação de aderência",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Roll-out"
      },
      {
        "title": "Análise de gargalos",
        "description": "Teoria das restrições",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Roll-out"
      },
      {
        "title": "Implementação de 5S",
        "description": "Organização do chão de fábrica",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Sustentação"
      },
      {
        "title": "Setup de OEE em tempo real",
        "description": "Sensores e dashboard",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Sustentação"
      },
      {
        "title": "Treinamento Lean para operadores",
        "description": "Capacitação inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Melhoria contínua"
      }
    ],
    "bestPractices": [
      "Gemba walks: liderança no chão de fábrica.",
      "Dados em tempo real ou não há melhoria sustentável.",
      "Envolva operadores — eles conhecem o processo.",
      "Manutenção preditiva paga-se em 6-12 meses.",
      "Standard work é a base de toda melhoria."
    ],
    "kpis": [
      "OEE %",
      "FTT (First Time Through)",
      "Throughput",
      "Defeitos PPM",
      "MTBF"
    ],
    "durationWeeks": 16,
    "teamSize": 8,
    "popularity": 64
  },
  {
    "id": "tpl-198",
    "name": "Adequação ISO 14001",
    "industry": "Manufatura & Indústria",
    "icon": "Factory",
    "description": "Gestão ambiental",
    "methodology": "Lean",
    "phases": [
      "Diagnóstico",
      "Desenho de processos",
      "Pilotos",
      "Roll-out",
      "Sustentação",
      "Melhoria contínua"
    ],
    "tasks": [
      {
        "title": "Implementação de kanban físico",
        "description": "Gestão visual de fluxo",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Implementação de 5S",
        "description": "Organização do chão de fábrica",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Diagnóstico"
      },
      {
        "title": "Auditoria de processo",
        "description": "Verificação de aderência",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenho de processos"
      },
      {
        "title": "Value stream mapping",
        "description": "Mapeamento do fluxo de valor",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho de processos"
      },
      {
        "title": "Reporte mensal de resultados",
        "description": "Tracking de ganhos",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Pilotos"
      },
      {
        "title": "Setup de OEE em tempo real",
        "description": "Sensores e dashboard",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Roll-out"
      },
      {
        "title": "Definição de KPIs",
        "description": "OEE, FTT, Throughput",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Roll-out"
      },
      {
        "title": "Análise de gargalos",
        "description": "Teoria das restrições",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Treinamento Lean para operadores",
        "description": "Capacitação inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Kaizen events",
        "description": "Eventos rápidos de melhoria",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Melhoria contínua"
      }
    ],
    "bestPractices": [
      "Gemba walks: liderança no chão de fábrica.",
      "Dados em tempo real ou não há melhoria sustentável.",
      "Envolva operadores — eles conhecem o processo.",
      "Manutenção preditiva paga-se em 6-12 meses.",
      "Standard work é a base de toda melhoria."
    ],
    "kpis": [
      "OEE %",
      "FTT (First Time Through)",
      "Throughput",
      "Defeitos PPM",
      "MTBF"
    ],
    "durationWeeks": 16,
    "teamSize": 8,
    "popularity": 45
  },
  {
    "id": "tpl-199",
    "name": "Setup de Nova Fábrica",
    "industry": "Manufatura & Indústria",
    "icon": "Factory",
    "description": "Greenfield industrial",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho de processos",
      "Pilotos",
      "Roll-out",
      "Sustentação",
      "Melhoria contínua"
    ],
    "tasks": [
      {
        "title": "Implementação de kanban físico",
        "description": "Gestão visual de fluxo",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Setup de OEE em tempo real",
        "description": "Sensores e dashboard",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Diagnóstico"
      },
      {
        "title": "Reporte mensal de resultados",
        "description": "Tracking de ganhos",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Desenho de processos"
      },
      {
        "title": "Value stream mapping",
        "description": "Mapeamento do fluxo de valor",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho de processos"
      },
      {
        "title": "Auditoria de processo",
        "description": "Verificação de aderência",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Pilotos"
      },
      {
        "title": "Implementação de 5S",
        "description": "Organização do chão de fábrica",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Roll-out"
      },
      {
        "title": "Definição de KPIs",
        "description": "OEE, FTT, Throughput",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Roll-out"
      },
      {
        "title": "Treinamento Lean para operadores",
        "description": "Capacitação inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Kaizen events",
        "description": "Eventos rápidos de melhoria",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Sustentação"
      },
      {
        "title": "Análise de gargalos",
        "description": "Teoria das restrições",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Melhoria contínua"
      }
    ],
    "bestPractices": [
      "Gemba walks: liderança no chão de fábrica.",
      "Dados em tempo real ou não há melhoria sustentável.",
      "Envolva operadores — eles conhecem o processo.",
      "Manutenção preditiva paga-se em 6-12 meses.",
      "Standard work é a base de toda melhoria."
    ],
    "kpis": [
      "OEE %",
      "FTT (First Time Through)",
      "Throughput",
      "Defeitos PPM",
      "MTBF"
    ],
    "durationWeeks": 16,
    "teamSize": 4,
    "popularity": 58
  },
  {
    "id": "tpl-200",
    "name": "Programa TPM",
    "industry": "Manufatura & Indústria",
    "icon": "Factory",
    "description": "Total productive maintenance",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho de processos",
      "Pilotos",
      "Roll-out",
      "Sustentação",
      "Melhoria contínua"
    ],
    "tasks": [
      {
        "title": "Implementação de kanban físico",
        "description": "Gestão visual de fluxo",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Diagnóstico"
      },
      {
        "title": "Análise de gargalos",
        "description": "Teoria das restrições",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Treinamento Lean para operadores",
        "description": "Capacitação inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Desenho de processos"
      },
      {
        "title": "Kaizen events",
        "description": "Eventos rápidos de melhoria",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Desenho de processos"
      },
      {
        "title": "Reporte mensal de resultados",
        "description": "Tracking de ganhos",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Pilotos"
      },
      {
        "title": "Auditoria de processo",
        "description": "Verificação de aderência",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Roll-out"
      },
      {
        "title": "Setup de OEE em tempo real",
        "description": "Sensores e dashboard",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Roll-out"
      },
      {
        "title": "Value stream mapping",
        "description": "Mapeamento do fluxo de valor",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      },
      {
        "title": "Definição de KPIs",
        "description": "OEE, FTT, Throughput",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Sustentação"
      },
      {
        "title": "Implementação de 5S",
        "description": "Organização do chão de fábrica",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Melhoria contínua"
      }
    ],
    "bestPractices": [
      "Gemba walks: liderança no chão de fábrica.",
      "Dados em tempo real ou não há melhoria sustentável.",
      "Envolva operadores — eles conhecem o processo.",
      "Manutenção preditiva paga-se em 6-12 meses.",
      "Standard work é a base de toda melhoria."
    ],
    "kpis": [
      "OEE %",
      "FTT (First Time Through)",
      "Throughput",
      "Defeitos PPM",
      "MTBF"
    ],
    "durationWeeks": 16,
    "teamSize": 12,
    "popularity": 71
  },
  {
    "id": "tpl-201",
    "name": "Implementação Lean Manufacturing — Pequena Escala",
    "industry": "Manufatura & Indústria",
    "icon": "Factory",
    "description": "Eliminação de desperdícios (Pequena Escala)",
    "methodology": "Lean",
    "phases": [
      "Diagnóstico",
      "Desenho de processos",
      "Pilotos",
      "Roll-out",
      "Sustentação",
      "Melhoria contínua"
    ],
    "tasks": [
      {
        "title": "Análise de gargalos",
        "description": "Teoria das restrições",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Definição de KPIs",
        "description": "OEE, FTT, Throughput",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Diagnóstico"
      },
      {
        "title": "Implementação de kanban físico",
        "description": "Gestão visual de fluxo",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Desenho de processos"
      },
      {
        "title": "Auditoria de processo",
        "description": "Verificação de aderência",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Desenho de processos"
      },
      {
        "title": "Treinamento Lean para operadores",
        "description": "Capacitação inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pilotos"
      },
      {
        "title": "Setup de OEE em tempo real",
        "description": "Sensores e dashboard",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Roll-out"
      },
      {
        "title": "Implementação de 5S",
        "description": "Organização do chão de fábrica",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Roll-out"
      },
      {
        "title": "Value stream mapping",
        "description": "Mapeamento do fluxo de valor",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      },
      {
        "title": "Reporte mensal de resultados",
        "description": "Tracking de ganhos",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Sustentação"
      },
      {
        "title": "Kaizen events",
        "description": "Eventos rápidos de melhoria",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Melhoria contínua"
      }
    ],
    "bestPractices": [
      "Gemba walks: liderança no chão de fábrica.",
      "Dados em tempo real ou não há melhoria sustentável.",
      "Envolva operadores — eles conhecem o processo.",
      "Manutenção preditiva paga-se em 6-12 meses.",
      "Standard work é a base de toda melhoria."
    ],
    "kpis": [
      "OEE %",
      "FTT (First Time Through)",
      "Throughput",
      "Defeitos PPM",
      "MTBF"
    ],
    "durationWeeks": 16,
    "teamSize": 24,
    "popularity": 71
  },
  {
    "id": "tpl-202",
    "name": "Linha de Montagem Automatizada — Pequena Escala",
    "industry": "Manufatura & Indústria",
    "icon": "Factory",
    "description": "Robotização e automação (Pequena Escala)",
    "methodology": "Agile",
    "phases": [
      "Diagnóstico",
      "Desenho de processos",
      "Pilotos",
      "Roll-out",
      "Sustentação",
      "Melhoria contínua"
    ],
    "tasks": [
      {
        "title": "Reporte mensal de resultados",
        "description": "Tracking de ganhos",
        "priority": "normal",
        "estimatedDays": 3,
        "phase": "Diagnóstico"
      },
      {
        "title": "Treinamento Lean para operadores",
        "description": "Capacitação inicial",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Diagnóstico"
      },
      {
        "title": "Setup de OEE em tempo real",
        "description": "Sensores e dashboard",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Desenho de processos"
      },
      {
        "title": "Value stream mapping",
        "description": "Mapeamento do fluxo de valor",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Desenho de processos"
      },
      {
        "title": "Análise de gargalos",
        "description": "Teoria das restrições",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Pilotos"
      },
      {
        "title": "Definição de KPIs",
        "description": "OEE, FTT, Throughput",
        "priority": "high",
        "estimatedDays": 5,
        "phase": "Roll-out"
      },
      {
        "title": "Implementação de kanban físico",
        "description": "Gestão visual de fluxo",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Roll-out"
      },
      {
        "title": "Implementação de 5S",
        "description": "Organização do chão de fábrica",
        "priority": "normal",
        "estimatedDays": 21,
        "phase": "Sustentação"
      },
      {
        "title": "Kaizen events",
        "description": "Eventos rápidos de melhoria",
        "priority": "normal",
        "estimatedDays": 5,
        "phase": "Sustentação"
      },
      {
        "title": "Auditoria de processo",
        "description": "Verificação de aderência",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Melhoria contínua"
      }
    ],
    "bestPractices": [
      "Gemba walks: liderança no chão de fábrica.",
      "Dados em tempo real ou não há melhoria sustentável.",
      "Envolva operadores — eles conhecem o processo.",
      "Manutenção preditiva paga-se em 6-12 meses.",
      "Standard work é a base de toda melhoria."
    ],
    "kpis": [
      "OEE %",
      "FTT (First Time Through)",
      "Throughput",
      "Defeitos PPM",
      "MTBF"
    ],
    "durationWeeks": 16,
    "teamSize": 18,
    "popularity": 61
  },
  {
    "id": "tpl-203",
    "name": "Abertura de Hotel Boutique",
    "industry": "Hotelaria & Turismo",
    "icon": "Hotel",
    "description": "Lançamento de hotel-conceito",
    "methodology": "Agile",
    "phases": [
      "Conceito",
      "Branding",
      "Pré-abertura",
      "Soft opening",
      "Operação",
      "Manutenção contínua"
    ],
    "tasks": [
      {
        "title": "Análise de NPS hóspede",
        "description": "Pós-estadia",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Conceito"
      },
      {
        "title": "Recrutamento e treinamento",
        "description": "Equipa de serviço",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Conceito"
      },
      {
        "title": "Acordos com OTAs",
        "description": "Booking, Expedia, Airbnb",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Branding"
      },
      {
        "title": "Manutenção preventiva",
        "description": "Plano predial",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Branding"
      },
      {
        "title": "Gestão de revenue management",
        "description": "Pricing dinâmico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-abertura"
      },
      {
        "title": "Projeto de interiores",
        "description": "Design de espaços",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Soft opening"
      },
      {
        "title": "Setup de PMS e canais",
        "description": "OTAs e channel manager",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Soft opening"
      },
      {
        "title": "Press release e influencers",
        "description": "PR de lançamento",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Operação"
      },
      {
        "title": "Definição de conceito",
        "description": "Brand book e experiência",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Operação"
      },
      {
        "title": "Soft opening",
        "description": "Operação assistida",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Manutenção contínua"
      }
    ],
    "bestPractices": [
      "Detalhes fazem a diferença — invista em micro-momentos.",
      "Revenue management diário, não mensal.",
      "Reviews em OTAs são o seu novo balcão de reclamações.",
      "Pessoas vendem hotelaria, não tecnologia.",
      "Sustentabilidade é fator de escolha do hóspede premium."
    ],
    "kpis": [
      "RevPAR",
      "ADR",
      "Taxa de ocupação %",
      "NPS",
      "GOP margin %"
    ],
    "durationWeeks": 28,
    "teamSize": 13,
    "popularity": 87
  },
  {
    "id": "tpl-204",
    "name": "Renovação de Resort",
    "industry": "Hotelaria & Turismo",
    "icon": "Hotel",
    "description": "Revitalização de equipamento",
    "methodology": "Waterfall",
    "phases": [
      "Conceito",
      "Branding",
      "Pré-abertura",
      "Soft opening",
      "Operação",
      "Manutenção contínua"
    ],
    "tasks": [
      {
        "title": "Análise de NPS hóspede",
        "description": "Pós-estadia",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Conceito"
      },
      {
        "title": "Setup de PMS e canais",
        "description": "OTAs e channel manager",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Conceito"
      },
      {
        "title": "Press release e influencers",
        "description": "PR de lançamento",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Branding"
      },
      {
        "title": "Manutenção preventiva",
        "description": "Plano predial",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Branding"
      },
      {
        "title": "Recrutamento e treinamento",
        "description": "Equipa de serviço",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Pré-abertura"
      },
      {
        "title": "Soft opening",
        "description": "Operação assistida",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Soft opening"
      },
      {
        "title": "Gestão de revenue management",
        "description": "Pricing dinâmico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Soft opening"
      },
      {
        "title": "Definição de conceito",
        "description": "Brand book e experiência",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Operação"
      },
      {
        "title": "Acordos com OTAs",
        "description": "Booking, Expedia, Airbnb",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Operação"
      },
      {
        "title": "Projeto de interiores",
        "description": "Design de espaços",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Manutenção contínua"
      }
    ],
    "bestPractices": [
      "Detalhes fazem a diferença — invista em micro-momentos.",
      "Revenue management diário, não mensal.",
      "Reviews em OTAs são o seu novo balcão de reclamações.",
      "Pessoas vendem hotelaria, não tecnologia.",
      "Sustentabilidade é fator de escolha do hóspede premium."
    ],
    "kpis": [
      "RevPAR",
      "ADR",
      "Taxa de ocupação %",
      "NPS",
      "GOP margin %"
    ],
    "durationWeeks": 28,
    "teamSize": 18,
    "popularity": 100
  },
  {
    "id": "tpl-205",
    "name": "Implementação de PMS Cloud",
    "industry": "Hotelaria & Turismo",
    "icon": "Hotel",
    "description": "Property management system",
    "methodology": "Agile",
    "phases": [
      "Conceito",
      "Branding",
      "Pré-abertura",
      "Soft opening",
      "Operação",
      "Manutenção contínua"
    ],
    "tasks": [
      {
        "title": "Gestão de revenue management",
        "description": "Pricing dinâmico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Conceito"
      },
      {
        "title": "Acordos com OTAs",
        "description": "Booking, Expedia, Airbnb",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Conceito"
      },
      {
        "title": "Projeto de interiores",
        "description": "Design de espaços",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Branding"
      },
      {
        "title": "Soft opening",
        "description": "Operação assistida",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Branding"
      },
      {
        "title": "Setup de PMS e canais",
        "description": "OTAs e channel manager",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pré-abertura"
      },
      {
        "title": "Press release e influencers",
        "description": "PR de lançamento",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Soft opening"
      },
      {
        "title": "Análise de NPS hóspede",
        "description": "Pós-estadia",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Soft opening"
      },
      {
        "title": "Recrutamento e treinamento",
        "description": "Equipa de serviço",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Operação"
      },
      {
        "title": "Manutenção preventiva",
        "description": "Plano predial",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Operação"
      },
      {
        "title": "Definição de conceito",
        "description": "Brand book e experiência",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Manutenção contínua"
      }
    ],
    "bestPractices": [
      "Detalhes fazem a diferença — invista em micro-momentos.",
      "Revenue management diário, não mensal.",
      "Reviews em OTAs são o seu novo balcão de reclamações.",
      "Pessoas vendem hotelaria, não tecnologia.",
      "Sustentabilidade é fator de escolha do hóspede premium."
    ],
    "kpis": [
      "RevPAR",
      "ADR",
      "Taxa de ocupação %",
      "NPS",
      "GOP margin %"
    ],
    "durationWeeks": 28,
    "teamSize": 25,
    "popularity": 49
  },
  {
    "id": "tpl-206",
    "name": "Programa de Fidelidade Hoteleira",
    "industry": "Hotelaria & Turismo",
    "icon": "Hotel",
    "description": "Loyalty para hóspedes",
    "methodology": "Agile",
    "phases": [
      "Conceito",
      "Branding",
      "Pré-abertura",
      "Soft opening",
      "Operação",
      "Manutenção contínua"
    ],
    "tasks": [
      {
        "title": "Soft opening",
        "description": "Operação assistida",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Conceito"
      },
      {
        "title": "Projeto de interiores",
        "description": "Design de espaços",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Conceito"
      },
      {
        "title": "Gestão de revenue management",
        "description": "Pricing dinâmico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Branding"
      },
      {
        "title": "Acordos com OTAs",
        "description": "Booking, Expedia, Airbnb",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Branding"
      },
      {
        "title": "Setup de PMS e canais",
        "description": "OTAs e channel manager",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pré-abertura"
      },
      {
        "title": "Análise de NPS hóspede",
        "description": "Pós-estadia",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Soft opening"
      },
      {
        "title": "Press release e influencers",
        "description": "PR de lançamento",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Soft opening"
      },
      {
        "title": "Recrutamento e treinamento",
        "description": "Equipa de serviço",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Operação"
      },
      {
        "title": "Manutenção preventiva",
        "description": "Plano predial",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Operação"
      },
      {
        "title": "Definição de conceito",
        "description": "Brand book e experiência",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Manutenção contínua"
      }
    ],
    "bestPractices": [
      "Detalhes fazem a diferença — invista em micro-momentos.",
      "Revenue management diário, não mensal.",
      "Reviews em OTAs são o seu novo balcão de reclamações.",
      "Pessoas vendem hotelaria, não tecnologia.",
      "Sustentabilidade é fator de escolha do hóspede premium."
    ],
    "kpis": [
      "RevPAR",
      "ADR",
      "Taxa de ocupação %",
      "NPS",
      "GOP margin %"
    ],
    "durationWeeks": 28,
    "teamSize": 21,
    "popularity": 78
  },
  {
    "id": "tpl-207",
    "name": "Restaurante de Alta Gastronomia",
    "industry": "Hotelaria & Turismo",
    "icon": "Hotel",
    "description": "Lançamento de fine dining",
    "methodology": "Agile",
    "phases": [
      "Conceito",
      "Branding",
      "Pré-abertura",
      "Soft opening",
      "Operação",
      "Manutenção contínua"
    ],
    "tasks": [
      {
        "title": "Projeto de interiores",
        "description": "Design de espaços",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Conceito"
      },
      {
        "title": "Setup de PMS e canais",
        "description": "OTAs e channel manager",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Conceito"
      },
      {
        "title": "Press release e influencers",
        "description": "PR de lançamento",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Branding"
      },
      {
        "title": "Análise de NPS hóspede",
        "description": "Pós-estadia",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Pré-abertura"
      },
      {
        "title": "Gestão de revenue management",
        "description": "Pricing dinâmico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-abertura"
      },
      {
        "title": "Acordos com OTAs",
        "description": "Booking, Expedia, Airbnb",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Soft opening"
      },
      {
        "title": "Definição de conceito",
        "description": "Brand book e experiência",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Operação"
      },
      {
        "title": "Recrutamento e treinamento",
        "description": "Equipa de serviço",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Operação"
      },
      {
        "title": "Soft opening",
        "description": "Operação assistida",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Manutenção contínua"
      }
    ],
    "bestPractices": [
      "Detalhes fazem a diferença — invista em micro-momentos.",
      "Revenue management diário, não mensal.",
      "Reviews em OTAs são o seu novo balcão de reclamações.",
      "Pessoas vendem hotelaria, não tecnologia.",
      "Sustentabilidade é fator de escolha do hóspede premium."
    ],
    "kpis": [
      "RevPAR",
      "ADR",
      "Taxa de ocupação %",
      "NPS",
      "GOP margin %"
    ],
    "durationWeeks": 26,
    "teamSize": 17,
    "popularity": 46
  },
  {
    "id": "tpl-208",
    "name": "Pacote Turístico All-inclusive",
    "industry": "Hotelaria & Turismo",
    "icon": "Hotel",
    "description": "Produto turístico integrado",
    "methodology": "Agile",
    "phases": [
      "Conceito",
      "Branding",
      "Pré-abertura",
      "Soft opening",
      "Operação",
      "Manutenção contínua"
    ],
    "tasks": [
      {
        "title": "Projeto de interiores",
        "description": "Design de espaços",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Conceito"
      },
      {
        "title": "Acordos com OTAs",
        "description": "Booking, Expedia, Airbnb",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Conceito"
      },
      {
        "title": "Setup de PMS e canais",
        "description": "OTAs e channel manager",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Branding"
      },
      {
        "title": "Manutenção preventiva",
        "description": "Plano predial",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Pré-abertura"
      },
      {
        "title": "Press release e influencers",
        "description": "PR de lançamento",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pré-abertura"
      },
      {
        "title": "Soft opening",
        "description": "Operação assistida",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Soft opening"
      },
      {
        "title": "Análise de NPS hóspede",
        "description": "Pós-estadia",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Operação"
      },
      {
        "title": "Gestão de revenue management",
        "description": "Pricing dinâmico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Operação"
      },
      {
        "title": "Recrutamento e treinamento",
        "description": "Equipa de serviço",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Manutenção contínua"
      }
    ],
    "bestPractices": [
      "Detalhes fazem a diferença — invista em micro-momentos.",
      "Revenue management diário, não mensal.",
      "Reviews em OTAs são o seu novo balcão de reclamações.",
      "Pessoas vendem hotelaria, não tecnologia.",
      "Sustentabilidade é fator de escolha do hóspede premium."
    ],
    "kpis": [
      "RevPAR",
      "ADR",
      "Taxa de ocupação %",
      "NPS",
      "GOP margin %"
    ],
    "durationWeeks": 25,
    "teamSize": 18,
    "popularity": 89
  },
  {
    "id": "tpl-209",
    "name": "Marketing de Destino",
    "industry": "Hotelaria & Turismo",
    "icon": "Hotel",
    "description": "Promoção de região turística",
    "methodology": "Waterfall",
    "phases": [
      "Conceito",
      "Branding",
      "Pré-abertura",
      "Soft opening",
      "Operação",
      "Manutenção contínua"
    ],
    "tasks": [
      {
        "title": "Manutenção preventiva",
        "description": "Plano predial",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Conceito"
      },
      {
        "title": "Recrutamento e treinamento",
        "description": "Equipa de serviço",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Conceito"
      },
      {
        "title": "Press release e influencers",
        "description": "PR de lançamento",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Branding"
      },
      {
        "title": "Definição de conceito",
        "description": "Brand book e experiência",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Branding"
      },
      {
        "title": "Setup de PMS e canais",
        "description": "OTAs e channel manager",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pré-abertura"
      },
      {
        "title": "Soft opening",
        "description": "Operação assistida",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Soft opening"
      },
      {
        "title": "Análise de NPS hóspede",
        "description": "Pós-estadia",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Soft opening"
      },
      {
        "title": "Projeto de interiores",
        "description": "Design de espaços",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Operação"
      },
      {
        "title": "Acordos com OTAs",
        "description": "Booking, Expedia, Airbnb",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Operação"
      },
      {
        "title": "Gestão de revenue management",
        "description": "Pricing dinâmico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Manutenção contínua"
      }
    ],
    "bestPractices": [
      "Detalhes fazem a diferença — invista em micro-momentos.",
      "Revenue management diário, não mensal.",
      "Reviews em OTAs são o seu novo balcão de reclamações.",
      "Pessoas vendem hotelaria, não tecnologia.",
      "Sustentabilidade é fator de escolha do hóspede premium."
    ],
    "kpis": [
      "RevPAR",
      "ADR",
      "Taxa de ocupação %",
      "NPS",
      "GOP margin %"
    ],
    "durationWeeks": 28,
    "teamSize": 15,
    "popularity": 59
  },
  {
    "id": "tpl-210",
    "name": "Treinamento de Equipa de F&B",
    "industry": "Hotelaria & Turismo",
    "icon": "Hotel",
    "description": "Capacitação em serviço",
    "methodology": "Waterfall",
    "phases": [
      "Conceito",
      "Branding",
      "Pré-abertura",
      "Soft opening",
      "Operação",
      "Manutenção contínua"
    ],
    "tasks": [
      {
        "title": "Gestão de revenue management",
        "description": "Pricing dinâmico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Conceito"
      },
      {
        "title": "Setup de PMS e canais",
        "description": "OTAs e channel manager",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Conceito"
      },
      {
        "title": "Análise de NPS hóspede",
        "description": "Pós-estadia",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Branding"
      },
      {
        "title": "Recrutamento e treinamento",
        "description": "Equipa de serviço",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Branding"
      },
      {
        "title": "Manutenção preventiva",
        "description": "Plano predial",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Pré-abertura"
      },
      {
        "title": "Definição de conceito",
        "description": "Brand book e experiência",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Soft opening"
      },
      {
        "title": "Press release e influencers",
        "description": "PR de lançamento",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Soft opening"
      },
      {
        "title": "Soft opening",
        "description": "Operação assistida",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Operação"
      },
      {
        "title": "Projeto de interiores",
        "description": "Design de espaços",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Operação"
      },
      {
        "title": "Acordos com OTAs",
        "description": "Booking, Expedia, Airbnb",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Manutenção contínua"
      }
    ],
    "bestPractices": [
      "Detalhes fazem a diferença — invista em micro-momentos.",
      "Revenue management diário, não mensal.",
      "Reviews em OTAs são o seu novo balcão de reclamações.",
      "Pessoas vendem hotelaria, não tecnologia.",
      "Sustentabilidade é fator de escolha do hóspede premium."
    ],
    "kpis": [
      "RevPAR",
      "ADR",
      "Taxa de ocupação %",
      "NPS",
      "GOP margin %"
    ],
    "durationWeeks": 28,
    "teamSize": 13,
    "popularity": 42
  },
  {
    "id": "tpl-211",
    "name": "Sustentabilidade Hoteleira",
    "industry": "Hotelaria & Turismo",
    "icon": "Hotel",
    "description": "Certificação verde",
    "methodology": "Agile",
    "phases": [
      "Conceito",
      "Branding",
      "Pré-abertura",
      "Soft opening",
      "Operação",
      "Manutenção contínua"
    ],
    "tasks": [
      {
        "title": "Definição de conceito",
        "description": "Brand book e experiência",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Conceito"
      },
      {
        "title": "Press release e influencers",
        "description": "PR de lançamento",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Conceito"
      },
      {
        "title": "Projeto de interiores",
        "description": "Design de espaços",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Branding"
      },
      {
        "title": "Manutenção preventiva",
        "description": "Plano predial",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Pré-abertura"
      },
      {
        "title": "Gestão de revenue management",
        "description": "Pricing dinâmico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-abertura"
      },
      {
        "title": "Soft opening",
        "description": "Operação assistida",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Soft opening"
      },
      {
        "title": "Acordos com OTAs",
        "description": "Booking, Expedia, Airbnb",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Operação"
      },
      {
        "title": "Recrutamento e treinamento",
        "description": "Equipa de serviço",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Operação"
      },
      {
        "title": "Análise de NPS hóspede",
        "description": "Pós-estadia",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Manutenção contínua"
      }
    ],
    "bestPractices": [
      "Detalhes fazem a diferença — invista em micro-momentos.",
      "Revenue management diário, não mensal.",
      "Reviews em OTAs são o seu novo balcão de reclamações.",
      "Pessoas vendem hotelaria, não tecnologia.",
      "Sustentabilidade é fator de escolha do hóspede premium."
    ],
    "kpis": [
      "RevPAR",
      "ADR",
      "Taxa de ocupação %",
      "NPS",
      "GOP margin %"
    ],
    "durationWeeks": 26,
    "teamSize": 21,
    "popularity": 67
  },
  {
    "id": "tpl-212",
    "name": "Abertura de Hotel Boutique — Pequena Escala",
    "industry": "Hotelaria & Turismo",
    "icon": "Hotel",
    "description": "Lançamento de hotel-conceito (Pequena Escala)",
    "methodology": "Agile",
    "phases": [
      "Conceito",
      "Branding",
      "Pré-abertura",
      "Soft opening",
      "Operação",
      "Manutenção contínua"
    ],
    "tasks": [
      {
        "title": "Setup de PMS e canais",
        "description": "OTAs e channel manager",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Conceito"
      },
      {
        "title": "Soft opening",
        "description": "Operação assistida",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Conceito"
      },
      {
        "title": "Recrutamento e treinamento",
        "description": "Equipa de serviço",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Branding"
      },
      {
        "title": "Projeto de interiores",
        "description": "Design de espaços",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Branding"
      },
      {
        "title": "Press release e influencers",
        "description": "PR de lançamento",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pré-abertura"
      },
      {
        "title": "Análise de NPS hóspede",
        "description": "Pós-estadia",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Soft opening"
      },
      {
        "title": "Acordos com OTAs",
        "description": "Booking, Expedia, Airbnb",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Soft opening"
      },
      {
        "title": "Definição de conceito",
        "description": "Brand book e experiência",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Operação"
      },
      {
        "title": "Gestão de revenue management",
        "description": "Pricing dinâmico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Operação"
      },
      {
        "title": "Manutenção preventiva",
        "description": "Plano predial",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Manutenção contínua"
      }
    ],
    "bestPractices": [
      "Detalhes fazem a diferença — invista em micro-momentos.",
      "Revenue management diário, não mensal.",
      "Reviews em OTAs são o seu novo balcão de reclamações.",
      "Pessoas vendem hotelaria, não tecnologia.",
      "Sustentabilidade é fator de escolha do hóspede premium."
    ],
    "kpis": [
      "RevPAR",
      "ADR",
      "Taxa de ocupação %",
      "NPS",
      "GOP margin %"
    ],
    "durationWeeks": 28,
    "teamSize": 16,
    "popularity": 40
  },
  {
    "id": "tpl-213",
    "name": "Renovação de Resort — Pequena Escala",
    "industry": "Hotelaria & Turismo",
    "icon": "Hotel",
    "description": "Revitalização de equipamento (Pequena Escala)",
    "methodology": "Agile",
    "phases": [
      "Conceito",
      "Branding",
      "Pré-abertura",
      "Soft opening",
      "Operação",
      "Manutenção contínua"
    ],
    "tasks": [
      {
        "title": "Setup de PMS e canais",
        "description": "OTAs e channel manager",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Conceito"
      },
      {
        "title": "Acordos com OTAs",
        "description": "Booking, Expedia, Airbnb",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Conceito"
      },
      {
        "title": "Projeto de interiores",
        "description": "Design de espaços",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Branding"
      },
      {
        "title": "Manutenção preventiva",
        "description": "Plano predial",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Branding"
      },
      {
        "title": "Definição de conceito",
        "description": "Brand book e experiência",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Pré-abertura"
      },
      {
        "title": "Soft opening",
        "description": "Operação assistida",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Soft opening"
      },
      {
        "title": "Gestão de revenue management",
        "description": "Pricing dinâmico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Soft opening"
      },
      {
        "title": "Análise de NPS hóspede",
        "description": "Pós-estadia",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Operação"
      },
      {
        "title": "Recrutamento e treinamento",
        "description": "Equipa de serviço",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Operação"
      },
      {
        "title": "Press release e influencers",
        "description": "PR de lançamento",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Manutenção contínua"
      }
    ],
    "bestPractices": [
      "Detalhes fazem a diferença — invista em micro-momentos.",
      "Revenue management diário, não mensal.",
      "Reviews em OTAs são o seu novo balcão de reclamações.",
      "Pessoas vendem hotelaria, não tecnologia.",
      "Sustentabilidade é fator de escolha do hóspede premium."
    ],
    "kpis": [
      "RevPAR",
      "ADR",
      "Taxa de ocupação %",
      "NPS",
      "GOP margin %"
    ],
    "durationWeeks": 28,
    "teamSize": 7,
    "popularity": 56
  },
  {
    "id": "tpl-214",
    "name": "Implementação de PMS Cloud — Pequena Escala",
    "industry": "Hotelaria & Turismo",
    "icon": "Hotel",
    "description": "Property management system (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Conceito",
      "Branding",
      "Pré-abertura",
      "Soft opening",
      "Operação",
      "Manutenção contínua"
    ],
    "tasks": [
      {
        "title": "Manutenção preventiva",
        "description": "Plano predial",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Conceito"
      },
      {
        "title": "Press release e influencers",
        "description": "PR de lançamento",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Conceito"
      },
      {
        "title": "Soft opening",
        "description": "Operação assistida",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Branding"
      },
      {
        "title": "Acordos com OTAs",
        "description": "Booking, Expedia, Airbnb",
        "priority": "normal",
        "estimatedDays": 14,
        "phase": "Branding"
      },
      {
        "title": "Setup de PMS e canais",
        "description": "OTAs e channel manager",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Pré-abertura"
      },
      {
        "title": "Gestão de revenue management",
        "description": "Pricing dinâmico",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Soft opening"
      },
      {
        "title": "Definição de conceito",
        "description": "Brand book e experiência",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Soft opening"
      },
      {
        "title": "Projeto de interiores",
        "description": "Design de espaços",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Operação"
      },
      {
        "title": "Recrutamento e treinamento",
        "description": "Equipa de serviço",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Operação"
      },
      {
        "title": "Análise de NPS hóspede",
        "description": "Pós-estadia",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Manutenção contínua"
      }
    ],
    "bestPractices": [
      "Detalhes fazem a diferença — invista em micro-momentos.",
      "Revenue management diário, não mensal.",
      "Reviews em OTAs são o seu novo balcão de reclamações.",
      "Pessoas vendem hotelaria, não tecnologia.",
      "Sustentabilidade é fator de escolha do hóspede premium."
    ],
    "kpis": [
      "RevPAR",
      "ADR",
      "Taxa de ocupação %",
      "NPS",
      "GOP margin %"
    ],
    "durationWeeks": 28,
    "teamSize": 25,
    "popularity": 85
  },
  {
    "id": "tpl-215",
    "name": "Transformação Digital",
    "industry": "Consultoria",
    "icon": "Briefcase",
    "description": "Roadmap de digitalização",
    "methodology": "Agile",
    "phases": [
      "Discovery",
      "Análise",
      "Recomendações",
      "Implementação",
      "Sustentação",
      "Hand-over"
    ],
    "tasks": [
      {
        "title": "Hand-over para cliente",
        "description": "Capacitação interna",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Discovery"
      },
      {
        "title": "Entrevistas com stakeholders",
        "description": "Coleta qualitativa",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Discovery"
      },
      {
        "title": "Benchmark de mercado",
        "description": "Comparação com peers",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Quick wins",
        "description": "Resultados imediatos",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Kickoff com sponsor",
        "description": "Alinhamento e expectativas",
        "priority": "urgent",
        "estimatedDays": 2,
        "phase": "Recomendações"
      },
      {
        "title": "Change management",
        "description": "Gestão da mudança",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Implementação"
      },
      {
        "title": "Roadmap de implementação",
        "description": "Cronograma e ondas",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Business case",
        "description": "ROI e justificativa",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Diagnóstico AS-IS",
        "description": "Estado atual",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      },
      {
        "title": "Desenho TO-BE",
        "description": "Estado futuro",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Hand-over"
      }
    ],
    "bestPractices": [
      "Quick wins constroem credibilidade para mudanças maiores.",
      "Cliente precisa fazer parte da solução, não receber.",
      "Hipóteses são para serem testadas, não defendidas.",
      "Mudança falha por pessoas, não por estratégia.",
      "Documente para que o cliente sustente sem você."
    ],
    "kpis": [
      "ROI do projeto",
      "% milestones no prazo",
      "NPS do cliente",
      "Adoção pós-projeto",
      "Savings entregues"
    ],
    "durationWeeks": 24,
    "teamSize": 20,
    "popularity": 64
  },
  {
    "id": "tpl-216",
    "name": "Reestruturação Operacional",
    "industry": "Consultoria",
    "icon": "Briefcase",
    "description": "Redesenho organizacional",
    "methodology": "PRINCE2",
    "phases": [
      "Discovery",
      "Análise",
      "Recomendações",
      "Implementação",
      "Sustentação",
      "Hand-over"
    ],
    "tasks": [
      {
        "title": "Hand-over para cliente",
        "description": "Capacitação interna",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Discovery"
      },
      {
        "title": "Benchmark de mercado",
        "description": "Comparação com peers",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Discovery"
      },
      {
        "title": "Roadmap de implementação",
        "description": "Cronograma e ondas",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Análise"
      },
      {
        "title": "Diagnóstico AS-IS",
        "description": "Estado atual",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Entrevistas com stakeholders",
        "description": "Coleta qualitativa",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Recomendações"
      },
      {
        "title": "Quick wins",
        "description": "Resultados imediatos",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Implementação"
      },
      {
        "title": "Business case",
        "description": "ROI e justificativa",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Change management",
        "description": "Gestão da mudança",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Sustentação"
      },
      {
        "title": "Kickoff com sponsor",
        "description": "Alinhamento e expectativas",
        "priority": "urgent",
        "estimatedDays": 2,
        "phase": "Sustentação"
      },
      {
        "title": "Desenho TO-BE",
        "description": "Estado futuro",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Hand-over"
      }
    ],
    "bestPractices": [
      "Quick wins constroem credibilidade para mudanças maiores.",
      "Cliente precisa fazer parte da solução, não receber.",
      "Hipóteses são para serem testadas, não defendidas.",
      "Mudança falha por pessoas, não por estratégia.",
      "Documente para que o cliente sustente sem você."
    ],
    "kpis": [
      "ROI do projeto",
      "% milestones no prazo",
      "NPS do cliente",
      "Adoção pós-projeto",
      "Savings entregues"
    ],
    "durationWeeks": 24,
    "teamSize": 8,
    "popularity": 51
  },
  {
    "id": "tpl-217",
    "name": "Estratégia de Crescimento",
    "industry": "Consultoria",
    "icon": "Briefcase",
    "description": "Plano estratégico 3-5 anos",
    "methodology": "PRINCE2",
    "phases": [
      "Discovery",
      "Análise",
      "Recomendações",
      "Implementação",
      "Sustentação",
      "Hand-over"
    ],
    "tasks": [
      {
        "title": "Quick wins",
        "description": "Resultados imediatos",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Discovery"
      },
      {
        "title": "Kickoff com sponsor",
        "description": "Alinhamento e expectativas",
        "priority": "urgent",
        "estimatedDays": 2,
        "phase": "Discovery"
      },
      {
        "title": "Business case",
        "description": "ROI e justificativa",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Análise"
      },
      {
        "title": "Change management",
        "description": "Gestão da mudança",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Análise"
      },
      {
        "title": "Diagnóstico AS-IS",
        "description": "Estado atual",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Recomendações"
      },
      {
        "title": "Entrevistas com stakeholders",
        "description": "Coleta qualitativa",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Implementação"
      },
      {
        "title": "Desenho TO-BE",
        "description": "Estado futuro",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Hand-over para cliente",
        "description": "Capacitação interna",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      },
      {
        "title": "Benchmark de mercado",
        "description": "Comparação com peers",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      },
      {
        "title": "Roadmap de implementação",
        "description": "Cronograma e ondas",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Hand-over"
      }
    ],
    "bestPractices": [
      "Quick wins constroem credibilidade para mudanças maiores.",
      "Cliente precisa fazer parte da solução, não receber.",
      "Hipóteses são para serem testadas, não defendidas.",
      "Mudança falha por pessoas, não por estratégia.",
      "Documente para que o cliente sustente sem você."
    ],
    "kpis": [
      "ROI do projeto",
      "% milestones no prazo",
      "NPS do cliente",
      "Adoção pós-projeto",
      "Savings entregues"
    ],
    "durationWeeks": 24,
    "teamSize": 17,
    "popularity": 85
  },
  {
    "id": "tpl-218",
    "name": "Otimização de Custos",
    "industry": "Consultoria",
    "icon": "Briefcase",
    "description": "Programa de redução",
    "methodology": "PRINCE2",
    "phases": [
      "Discovery",
      "Análise",
      "Recomendações",
      "Implementação",
      "Sustentação",
      "Hand-over"
    ],
    "tasks": [
      {
        "title": "Quick wins",
        "description": "Resultados imediatos",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Discovery"
      },
      {
        "title": "Benchmark de mercado",
        "description": "Comparação com peers",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Discovery"
      },
      {
        "title": "Entrevistas com stakeholders",
        "description": "Coleta qualitativa",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Análise"
      },
      {
        "title": "Desenho TO-BE",
        "description": "Estado futuro",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Kickoff com sponsor",
        "description": "Alinhamento e expectativas",
        "priority": "urgent",
        "estimatedDays": 2,
        "phase": "Recomendações"
      },
      {
        "title": "Hand-over para cliente",
        "description": "Capacitação interna",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Change management",
        "description": "Gestão da mudança",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Implementação"
      },
      {
        "title": "Business case",
        "description": "ROI e justificativa",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Roadmap de implementação",
        "description": "Cronograma e ondas",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Diagnóstico AS-IS",
        "description": "Estado atual",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Hand-over"
      }
    ],
    "bestPractices": [
      "Quick wins constroem credibilidade para mudanças maiores.",
      "Cliente precisa fazer parte da solução, não receber.",
      "Hipóteses são para serem testadas, não defendidas.",
      "Mudança falha por pessoas, não por estratégia.",
      "Documente para que o cliente sustente sem você."
    ],
    "kpis": [
      "ROI do projeto",
      "% milestones no prazo",
      "NPS do cliente",
      "Adoção pós-projeto",
      "Savings entregues"
    ],
    "durationWeeks": 24,
    "teamSize": 9,
    "popularity": 89
  },
  {
    "id": "tpl-219",
    "name": "Implementação OKR",
    "industry": "Consultoria",
    "icon": "Briefcase",
    "description": "Gestão por objetivos",
    "methodology": "Agile",
    "phases": [
      "Discovery",
      "Análise",
      "Recomendações",
      "Implementação",
      "Sustentação",
      "Hand-over"
    ],
    "tasks": [
      {
        "title": "Hand-over para cliente",
        "description": "Capacitação interna",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Discovery"
      },
      {
        "title": "Quick wins",
        "description": "Resultados imediatos",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Discovery"
      },
      {
        "title": "Entrevistas com stakeholders",
        "description": "Coleta qualitativa",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Análise"
      },
      {
        "title": "Desenho TO-BE",
        "description": "Estado futuro",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Kickoff com sponsor",
        "description": "Alinhamento e expectativas",
        "priority": "urgent",
        "estimatedDays": 2,
        "phase": "Recomendações"
      },
      {
        "title": "Benchmark de mercado",
        "description": "Comparação com peers",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Roadmap de implementação",
        "description": "Cronograma e ondas",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Diagnóstico AS-IS",
        "description": "Estado atual",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      },
      {
        "title": "Business case",
        "description": "ROI e justificativa",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Change management",
        "description": "Gestão da mudança",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Hand-over"
      }
    ],
    "bestPractices": [
      "Quick wins constroem credibilidade para mudanças maiores.",
      "Cliente precisa fazer parte da solução, não receber.",
      "Hipóteses são para serem testadas, não defendidas.",
      "Mudança falha por pessoas, não por estratégia.",
      "Documente para que o cliente sustente sem você."
    ],
    "kpis": [
      "ROI do projeto",
      "% milestones no prazo",
      "NPS do cliente",
      "Adoção pós-projeto",
      "Savings entregues"
    ],
    "durationWeeks": 24,
    "teamSize": 17,
    "popularity": 46
  },
  {
    "id": "tpl-220",
    "name": "Due Diligence de Aquisição",
    "industry": "Consultoria",
    "icon": "Briefcase",
    "description": "Suporte a M&A",
    "methodology": "PRINCE2",
    "phases": [
      "Discovery",
      "Análise",
      "Recomendações",
      "Implementação",
      "Sustentação",
      "Hand-over"
    ],
    "tasks": [
      {
        "title": "Desenho TO-BE",
        "description": "Estado futuro",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Discovery"
      },
      {
        "title": "Kickoff com sponsor",
        "description": "Alinhamento e expectativas",
        "priority": "urgent",
        "estimatedDays": 2,
        "phase": "Discovery"
      },
      {
        "title": "Quick wins",
        "description": "Resultados imediatos",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Benchmark de mercado",
        "description": "Comparação com peers",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Roadmap de implementação",
        "description": "Cronograma e ondas",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Recomendações"
      },
      {
        "title": "Change management",
        "description": "Gestão da mudança",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Implementação"
      },
      {
        "title": "Diagnóstico AS-IS",
        "description": "Estado atual",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Hand-over para cliente",
        "description": "Capacitação interna",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      },
      {
        "title": "Business case",
        "description": "ROI e justificativa",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Entrevistas com stakeholders",
        "description": "Coleta qualitativa",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Hand-over"
      }
    ],
    "bestPractices": [
      "Quick wins constroem credibilidade para mudanças maiores.",
      "Cliente precisa fazer parte da solução, não receber.",
      "Hipóteses são para serem testadas, não defendidas.",
      "Mudança falha por pessoas, não por estratégia.",
      "Documente para que o cliente sustente sem você."
    ],
    "kpis": [
      "ROI do projeto",
      "% milestones no prazo",
      "NPS do cliente",
      "Adoção pós-projeto",
      "Savings entregues"
    ],
    "durationWeeks": 24,
    "teamSize": 23,
    "popularity": 80
  },
  {
    "id": "tpl-221",
    "name": "Reorganização Societária",
    "industry": "Consultoria",
    "icon": "Briefcase",
    "description": "Estrutura corporativa",
    "methodology": "PRINCE2",
    "phases": [
      "Discovery",
      "Análise",
      "Recomendações",
      "Implementação",
      "Sustentação",
      "Hand-over"
    ],
    "tasks": [
      {
        "title": "Benchmark de mercado",
        "description": "Comparação com peers",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Discovery"
      },
      {
        "title": "Hand-over para cliente",
        "description": "Capacitação interna",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Discovery"
      },
      {
        "title": "Diagnóstico AS-IS",
        "description": "Estado atual",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Roadmap de implementação",
        "description": "Cronograma e ondas",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Análise"
      },
      {
        "title": "Entrevistas com stakeholders",
        "description": "Coleta qualitativa",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Recomendações"
      },
      {
        "title": "Kickoff com sponsor",
        "description": "Alinhamento e expectativas",
        "priority": "urgent",
        "estimatedDays": 2,
        "phase": "Implementação"
      },
      {
        "title": "Change management",
        "description": "Gestão da mudança",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Implementação"
      },
      {
        "title": "Quick wins",
        "description": "Resultados imediatos",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Sustentação"
      },
      {
        "title": "Business case",
        "description": "ROI e justificativa",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Desenho TO-BE",
        "description": "Estado futuro",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Hand-over"
      }
    ],
    "bestPractices": [
      "Quick wins constroem credibilidade para mudanças maiores.",
      "Cliente precisa fazer parte da solução, não receber.",
      "Hipóteses são para serem testadas, não defendidas.",
      "Mudança falha por pessoas, não por estratégia.",
      "Documente para que o cliente sustente sem você."
    ],
    "kpis": [
      "ROI do projeto",
      "% milestones no prazo",
      "NPS do cliente",
      "Adoção pós-projeto",
      "Savings entregues"
    ],
    "durationWeeks": 24,
    "teamSize": 13,
    "popularity": 58
  },
  {
    "id": "tpl-222",
    "name": "Programa PMO",
    "industry": "Consultoria",
    "icon": "Briefcase",
    "description": "Implementação de escritório de projetos",
    "methodology": "Agile",
    "phases": [
      "Discovery",
      "Análise",
      "Recomendações",
      "Implementação",
      "Sustentação",
      "Hand-over"
    ],
    "tasks": [
      {
        "title": "Desenho TO-BE",
        "description": "Estado futuro",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Discovery"
      },
      {
        "title": "Change management",
        "description": "Gestão da mudança",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Discovery"
      },
      {
        "title": "Entrevistas com stakeholders",
        "description": "Coleta qualitativa",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Análise"
      },
      {
        "title": "Quick wins",
        "description": "Resultados imediatos",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Diagnóstico AS-IS",
        "description": "Estado atual",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Recomendações"
      },
      {
        "title": "Kickoff com sponsor",
        "description": "Alinhamento e expectativas",
        "priority": "urgent",
        "estimatedDays": 2,
        "phase": "Implementação"
      },
      {
        "title": "Benchmark de mercado",
        "description": "Comparação com peers",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Business case",
        "description": "ROI e justificativa",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Hand-over para cliente",
        "description": "Capacitação interna",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      },
      {
        "title": "Roadmap de implementação",
        "description": "Cronograma e ondas",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Hand-over"
      }
    ],
    "bestPractices": [
      "Quick wins constroem credibilidade para mudanças maiores.",
      "Cliente precisa fazer parte da solução, não receber.",
      "Hipóteses são para serem testadas, não defendidas.",
      "Mudança falha por pessoas, não por estratégia.",
      "Documente para que o cliente sustente sem você."
    ],
    "kpis": [
      "ROI do projeto",
      "% milestones no prazo",
      "NPS do cliente",
      "Adoção pós-projeto",
      "Savings entregues"
    ],
    "durationWeeks": 24,
    "teamSize": 8,
    "popularity": 85
  },
  {
    "id": "tpl-223",
    "name": "Transformação Digital — Pequena Escala",
    "industry": "Consultoria",
    "icon": "Briefcase",
    "description": "Roadmap de digitalização (Pequena Escala)",
    "methodology": "Agile",
    "phases": [
      "Discovery",
      "Análise",
      "Recomendações",
      "Implementação",
      "Sustentação",
      "Hand-over"
    ],
    "tasks": [
      {
        "title": "Diagnóstico AS-IS",
        "description": "Estado atual",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Discovery"
      },
      {
        "title": "Roadmap de implementação",
        "description": "Cronograma e ondas",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Discovery"
      },
      {
        "title": "Quick wins",
        "description": "Resultados imediatos",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Entrevistas com stakeholders",
        "description": "Coleta qualitativa",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Análise"
      },
      {
        "title": "Desenho TO-BE",
        "description": "Estado futuro",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Recomendações"
      },
      {
        "title": "Benchmark de mercado",
        "description": "Comparação com peers",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Hand-over para cliente",
        "description": "Capacitação interna",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Change management",
        "description": "Gestão da mudança",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Sustentação"
      },
      {
        "title": "Business case",
        "description": "ROI e justificativa",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Kickoff com sponsor",
        "description": "Alinhamento e expectativas",
        "priority": "urgent",
        "estimatedDays": 2,
        "phase": "Hand-over"
      }
    ],
    "bestPractices": [
      "Quick wins constroem credibilidade para mudanças maiores.",
      "Cliente precisa fazer parte da solução, não receber.",
      "Hipóteses são para serem testadas, não defendidas.",
      "Mudança falha por pessoas, não por estratégia.",
      "Documente para que o cliente sustente sem você."
    ],
    "kpis": [
      "ROI do projeto",
      "% milestones no prazo",
      "NPS do cliente",
      "Adoção pós-projeto",
      "Savings entregues"
    ],
    "durationWeeks": 24,
    "teamSize": 16,
    "popularity": 72
  },
  {
    "id": "tpl-224",
    "name": "Reestruturação Operacional — Pequena Escala",
    "industry": "Consultoria",
    "icon": "Briefcase",
    "description": "Redesenho organizacional (Pequena Escala)",
    "methodology": "Agile",
    "phases": [
      "Discovery",
      "Análise",
      "Recomendações",
      "Implementação",
      "Sustentação",
      "Hand-over"
    ],
    "tasks": [
      {
        "title": "Business case",
        "description": "ROI e justificativa",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Discovery"
      },
      {
        "title": "Quick wins",
        "description": "Resultados imediatos",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Discovery"
      },
      {
        "title": "Change management",
        "description": "Gestão da mudança",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Análise"
      },
      {
        "title": "Benchmark de mercado",
        "description": "Comparação com peers",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Desenho TO-BE",
        "description": "Estado futuro",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Recomendações"
      },
      {
        "title": "Kickoff com sponsor",
        "description": "Alinhamento e expectativas",
        "priority": "urgent",
        "estimatedDays": 2,
        "phase": "Implementação"
      },
      {
        "title": "Hand-over para cliente",
        "description": "Capacitação interna",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Roadmap de implementação",
        "description": "Cronograma e ondas",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Sustentação"
      },
      {
        "title": "Entrevistas com stakeholders",
        "description": "Coleta qualitativa",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Sustentação"
      },
      {
        "title": "Diagnóstico AS-IS",
        "description": "Estado atual",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Hand-over"
      }
    ],
    "bestPractices": [
      "Quick wins constroem credibilidade para mudanças maiores.",
      "Cliente precisa fazer parte da solução, não receber.",
      "Hipóteses são para serem testadas, não defendidas.",
      "Mudança falha por pessoas, não por estratégia.",
      "Documente para que o cliente sustente sem você."
    ],
    "kpis": [
      "ROI do projeto",
      "% milestones no prazo",
      "NPS do cliente",
      "Adoção pós-projeto",
      "Savings entregues"
    ],
    "durationWeeks": 24,
    "teamSize": 21,
    "popularity": 65
  },
  {
    "id": "tpl-225",
    "name": "Estratégia de Crescimento — Pequena Escala",
    "industry": "Consultoria",
    "icon": "Briefcase",
    "description": "Plano estratégico 3-5 anos (Pequena Escala)",
    "methodology": "PRINCE2",
    "phases": [
      "Discovery",
      "Análise",
      "Recomendações",
      "Implementação",
      "Sustentação",
      "Hand-over"
    ],
    "tasks": [
      {
        "title": "Roadmap de implementação",
        "description": "Cronograma e ondas",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Discovery"
      },
      {
        "title": "Diagnóstico AS-IS",
        "description": "Estado atual",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Discovery"
      },
      {
        "title": "Quick wins",
        "description": "Resultados imediatos",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Benchmark de mercado",
        "description": "Comparação com peers",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Hand-over para cliente",
        "description": "Capacitação interna",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Recomendações"
      },
      {
        "title": "Business case",
        "description": "ROI e justificativa",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Implementação"
      },
      {
        "title": "Desenho TO-BE",
        "description": "Estado futuro",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Implementação"
      },
      {
        "title": "Change management",
        "description": "Gestão da mudança",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Sustentação"
      },
      {
        "title": "Kickoff com sponsor",
        "description": "Alinhamento e expectativas",
        "priority": "urgent",
        "estimatedDays": 2,
        "phase": "Sustentação"
      },
      {
        "title": "Entrevistas com stakeholders",
        "description": "Coleta qualitativa",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Hand-over"
      }
    ],
    "bestPractices": [
      "Quick wins constroem credibilidade para mudanças maiores.",
      "Cliente precisa fazer parte da solução, não receber.",
      "Hipóteses são para serem testadas, não defendidas.",
      "Mudança falha por pessoas, não por estratégia.",
      "Documente para que o cliente sustente sem você."
    ],
    "kpis": [
      "ROI do projeto",
      "% milestones no prazo",
      "NPS do cliente",
      "Adoção pós-projeto",
      "Savings entregues"
    ],
    "durationWeeks": 24,
    "teamSize": 25,
    "popularity": 88
  },
  {
    "id": "tpl-226",
    "name": "Otimização de Custos — Pequena Escala",
    "industry": "Consultoria",
    "icon": "Briefcase",
    "description": "Programa de redução (Pequena Escala)",
    "methodology": "PRINCE2",
    "phases": [
      "Discovery",
      "Análise",
      "Recomendações",
      "Implementação",
      "Sustentação",
      "Hand-over"
    ],
    "tasks": [
      {
        "title": "Kickoff com sponsor",
        "description": "Alinhamento e expectativas",
        "priority": "urgent",
        "estimatedDays": 2,
        "phase": "Discovery"
      },
      {
        "title": "Entrevistas com stakeholders",
        "description": "Coleta qualitativa",
        "priority": "high",
        "estimatedDays": 10,
        "phase": "Discovery"
      },
      {
        "title": "Quick wins",
        "description": "Resultados imediatos",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Hand-over para cliente",
        "description": "Capacitação interna",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Recomendações"
      },
      {
        "title": "Roadmap de implementação",
        "description": "Cronograma e ondas",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Recomendações"
      },
      {
        "title": "Change management",
        "description": "Gestão da mudança",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Implementação"
      },
      {
        "title": "Diagnóstico AS-IS",
        "description": "Estado atual",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      },
      {
        "title": "Desenho TO-BE",
        "description": "Estado futuro",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Sustentação"
      },
      {
        "title": "Business case",
        "description": "ROI e justificativa",
        "priority": "urgent",
        "estimatedDays": 7,
        "phase": "Hand-over"
      }
    ],
    "bestPractices": [
      "Quick wins constroem credibilidade para mudanças maiores.",
      "Cliente precisa fazer parte da solução, não receber.",
      "Hipóteses são para serem testadas, não defendidas.",
      "Mudança falha por pessoas, não por estratégia.",
      "Documente para que o cliente sustente sem você."
    ],
    "kpis": [
      "ROI do projeto",
      "% milestones no prazo",
      "NPS do cliente",
      "Adoção pós-projeto",
      "Savings entregues"
    ],
    "durationWeeks": 22,
    "teamSize": 10,
    "popularity": 84
  },
  {
    "id": "tpl-227",
    "name": "Pesquisa Acadêmica",
    "industry": "Pesquisa & Desenvolvimento",
    "icon": "FlaskConical",
    "description": "Projeto de mestrado/doutoramento",
    "methodology": "Waterfall",
    "phases": [
      "Hipótese",
      "Revisão literária",
      "Experimentos",
      "Análise",
      "Publicação",
      "Aplicação"
    ],
    "tasks": [
      {
        "title": "Execução de experimentos",
        "description": "Bancada e prototipagem",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Hipótese"
      },
      {
        "title": "Desenho experimental",
        "description": "Metodologia",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Hipótese"
      },
      {
        "title": "Apresentação em congresso",
        "description": "Divulgação científica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Revisão literária"
      },
      {
        "title": "Formulação de hipótese",
        "description": "Pergunta de pesquisa",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Revisão literária"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Experimentos"
      },
      {
        "title": "Pedido de patente",
        "description": "INPI / PCT",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Análise"
      },
      {
        "title": "Submissão a journal",
        "description": "Peer review",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Redação de paper",
        "description": "Manuscrito acadêmico",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Publicação"
      },
      {
        "title": "Revisão sistemática",
        "description": "Estado da arte",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Publicação"
      },
      {
        "title": "Aquisição de materiais e reagentes",
        "description": "Compra e logística",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Aplicação"
      }
    ],
    "bestPractices": [
      "Hipótese clara > experimento brilhante sem foco.",
      "Caderno de laboratório é seu ativo de IP.",
      "Reprodutibilidade é a base da ciência.",
      "Submeta cedo e revise sempre.",
      "Patenteie antes de publicar — não depois."
    ],
    "kpis": [
      "Publicações peer-reviewed",
      "Citations index",
      "Patentes concedidas",
      "Tempo até publicação",
      "Funding raised"
    ],
    "durationWeeks": 44,
    "teamSize": 16,
    "popularity": 80
  },
  {
    "id": "tpl-228",
    "name": "Desenvolvimento de Novo Produto",
    "industry": "Pesquisa & Desenvolvimento",
    "icon": "FlaskConical",
    "description": "NPD industrial",
    "methodology": "Waterfall",
    "phases": [
      "Hipótese",
      "Revisão literária",
      "Experimentos",
      "Análise",
      "Publicação",
      "Aplicação"
    ],
    "tasks": [
      {
        "title": "Aquisição de materiais e reagentes",
        "description": "Compra e logística",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Hipótese"
      },
      {
        "title": "Redação de paper",
        "description": "Manuscrito acadêmico",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Hipótese"
      },
      {
        "title": "Revisão sistemática",
        "description": "Estado da arte",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Revisão literária"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Revisão literária"
      },
      {
        "title": "Formulação de hipótese",
        "description": "Pergunta de pesquisa",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Experimentos"
      },
      {
        "title": "Pedido de patente",
        "description": "INPI / PCT",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Análise"
      },
      {
        "title": "Submissão a journal",
        "description": "Peer review",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Apresentação em congresso",
        "description": "Divulgação científica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Publicação"
      },
      {
        "title": "Execução de experimentos",
        "description": "Bancada e prototipagem",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Publicação"
      },
      {
        "title": "Desenho experimental",
        "description": "Metodologia",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Aplicação"
      }
    ],
    "bestPractices": [
      "Hipótese clara > experimento brilhante sem foco.",
      "Caderno de laboratório é seu ativo de IP.",
      "Reprodutibilidade é a base da ciência.",
      "Submeta cedo e revise sempre.",
      "Patenteie antes de publicar — não depois."
    ],
    "kpis": [
      "Publicações peer-reviewed",
      "Citations index",
      "Patentes concedidas",
      "Tempo até publicação",
      "Funding raised"
    ],
    "durationWeeks": 44,
    "teamSize": 20,
    "popularity": 83
  },
  {
    "id": "tpl-229",
    "name": "Patente de Invenção",
    "industry": "Pesquisa & Desenvolvimento",
    "icon": "FlaskConical",
    "description": "Pedido de patente nacional/PCT",
    "methodology": "Agile",
    "phases": [
      "Hipótese",
      "Revisão literária",
      "Experimentos",
      "Análise",
      "Publicação",
      "Aplicação"
    ],
    "tasks": [
      {
        "title": "Formulação de hipótese",
        "description": "Pergunta de pesquisa",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Hipótese"
      },
      {
        "title": "Apresentação em congresso",
        "description": "Divulgação científica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Hipótese"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Revisão literária"
      },
      {
        "title": "Redação de paper",
        "description": "Manuscrito acadêmico",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Revisão literária"
      },
      {
        "title": "Pedido de patente",
        "description": "INPI / PCT",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Experimentos"
      },
      {
        "title": "Aquisição de materiais e reagentes",
        "description": "Compra e logística",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Revisão sistemática",
        "description": "Estado da arte",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Execução de experimentos",
        "description": "Bancada e prototipagem",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Publicação"
      },
      {
        "title": "Submissão a journal",
        "description": "Peer review",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Publicação"
      },
      {
        "title": "Desenho experimental",
        "description": "Metodologia",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Aplicação"
      }
    ],
    "bestPractices": [
      "Hipótese clara > experimento brilhante sem foco.",
      "Caderno de laboratório é seu ativo de IP.",
      "Reprodutibilidade é a base da ciência.",
      "Submeta cedo e revise sempre.",
      "Patenteie antes de publicar — não depois."
    ],
    "kpis": [
      "Publicações peer-reviewed",
      "Citations index",
      "Patentes concedidas",
      "Tempo até publicação",
      "Funding raised"
    ],
    "durationWeeks": 44,
    "teamSize": 6,
    "popularity": 86
  },
  {
    "id": "tpl-230",
    "name": "Pesquisa de Materiais",
    "industry": "Pesquisa & Desenvolvimento",
    "icon": "FlaskConical",
    "description": "Caracterização de novos materiais",
    "methodology": "Waterfall",
    "phases": [
      "Hipótese",
      "Revisão literária",
      "Experimentos",
      "Análise",
      "Publicação",
      "Aplicação"
    ],
    "tasks": [
      {
        "title": "Revisão sistemática",
        "description": "Estado da arte",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Hipótese"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Hipótese"
      },
      {
        "title": "Pedido de patente",
        "description": "INPI / PCT",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Revisão literária"
      },
      {
        "title": "Desenho experimental",
        "description": "Metodologia",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Experimentos"
      },
      {
        "title": "Apresentação em congresso",
        "description": "Divulgação científica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Experimentos"
      },
      {
        "title": "Aquisição de materiais e reagentes",
        "description": "Compra e logística",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Submissão a journal",
        "description": "Peer review",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Publicação"
      },
      {
        "title": "Redação de paper",
        "description": "Manuscrito acadêmico",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Publicação"
      },
      {
        "title": "Formulação de hipótese",
        "description": "Pergunta de pesquisa",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Aplicação"
      }
    ],
    "bestPractices": [
      "Hipótese clara > experimento brilhante sem foco.",
      "Caderno de laboratório é seu ativo de IP.",
      "Reprodutibilidade é a base da ciência.",
      "Submeta cedo e revise sempre.",
      "Patenteie antes de publicar — não depois."
    ],
    "kpis": [
      "Publicações peer-reviewed",
      "Citations index",
      "Patentes concedidas",
      "Tempo até publicação",
      "Funding raised"
    ],
    "durationWeeks": 31,
    "teamSize": 20,
    "popularity": 76
  },
  {
    "id": "tpl-231",
    "name": "Inovação Aberta",
    "industry": "Pesquisa & Desenvolvimento",
    "icon": "FlaskConical",
    "description": "Hackathon e parcerias com startups",
    "methodology": "Waterfall",
    "phases": [
      "Hipótese",
      "Revisão literária",
      "Experimentos",
      "Análise",
      "Publicação",
      "Aplicação"
    ],
    "tasks": [
      {
        "title": "Apresentação em congresso",
        "description": "Divulgação científica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Hipótese"
      },
      {
        "title": "Desenho experimental",
        "description": "Metodologia",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Hipótese"
      },
      {
        "title": "Submissão a journal",
        "description": "Peer review",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Revisão literária"
      },
      {
        "title": "Pedido de patente",
        "description": "INPI / PCT",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Experimentos"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Experimentos"
      },
      {
        "title": "Revisão sistemática",
        "description": "Estado da arte",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Execução de experimentos",
        "description": "Bancada e prototipagem",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Publicação"
      },
      {
        "title": "Aquisição de materiais e reagentes",
        "description": "Compra e logística",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Publicação"
      },
      {
        "title": "Redação de paper",
        "description": "Manuscrito acadêmico",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Aplicação"
      }
    ],
    "bestPractices": [
      "Hipótese clara > experimento brilhante sem foco.",
      "Caderno de laboratório é seu ativo de IP.",
      "Reprodutibilidade é a base da ciência.",
      "Submeta cedo e revise sempre.",
      "Patenteie antes de publicar — não depois."
    ],
    "kpis": [
      "Publicações peer-reviewed",
      "Citations index",
      "Patentes concedidas",
      "Tempo até publicação",
      "Funding raised"
    ],
    "durationWeeks": 42,
    "teamSize": 6,
    "popularity": 97
  },
  {
    "id": "tpl-232",
    "name": "Laboratório de Inovação",
    "industry": "Pesquisa & Desenvolvimento",
    "icon": "FlaskConical",
    "description": "Innovation lab corporativo",
    "methodology": "Waterfall",
    "phases": [
      "Hipótese",
      "Revisão literária",
      "Experimentos",
      "Análise",
      "Publicação",
      "Aplicação"
    ],
    "tasks": [
      {
        "title": "Desenho experimental",
        "description": "Metodologia",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Hipótese"
      },
      {
        "title": "Revisão sistemática",
        "description": "Estado da arte",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Hipótese"
      },
      {
        "title": "Redação de paper",
        "description": "Manuscrito acadêmico",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Revisão literária"
      },
      {
        "title": "Apresentação em congresso",
        "description": "Divulgação científica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Experimentos"
      },
      {
        "title": "Aquisição de materiais e reagentes",
        "description": "Compra e logística",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Experimentos"
      },
      {
        "title": "Submissão a journal",
        "description": "Peer review",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Pedido de patente",
        "description": "INPI / PCT",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Publicação"
      },
      {
        "title": "Formulação de hipótese",
        "description": "Pergunta de pesquisa",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Publicação"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aplicação"
      }
    ],
    "bestPractices": [
      "Hipótese clara > experimento brilhante sem foco.",
      "Caderno de laboratório é seu ativo de IP.",
      "Reprodutibilidade é a base da ciência.",
      "Submeta cedo e revise sempre.",
      "Patenteie antes de publicar — não depois."
    ],
    "kpis": [
      "Publicações peer-reviewed",
      "Citations index",
      "Patentes concedidas",
      "Tempo até publicação",
      "Funding raised"
    ],
    "durationWeeks": 31,
    "teamSize": 11,
    "popularity": 75
  },
  {
    "id": "tpl-233",
    "name": "Projeto FAPESP/H2020",
    "industry": "Pesquisa & Desenvolvimento",
    "icon": "FlaskConical",
    "description": "Pesquisa com financiamento público",
    "methodology": "Agile",
    "phases": [
      "Hipótese",
      "Revisão literária",
      "Experimentos",
      "Análise",
      "Publicação",
      "Aplicação"
    ],
    "tasks": [
      {
        "title": "Apresentação em congresso",
        "description": "Divulgação científica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Hipótese"
      },
      {
        "title": "Execução de experimentos",
        "description": "Bancada e prototipagem",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Hipótese"
      },
      {
        "title": "Formulação de hipótese",
        "description": "Pergunta de pesquisa",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Revisão literária"
      },
      {
        "title": "Redação de paper",
        "description": "Manuscrito acadêmico",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Revisão literária"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Experimentos"
      },
      {
        "title": "Desenho experimental",
        "description": "Metodologia",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Revisão sistemática",
        "description": "Estado da arte",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Pedido de patente",
        "description": "INPI / PCT",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Publicação"
      },
      {
        "title": "Submissão a journal",
        "description": "Peer review",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Publicação"
      },
      {
        "title": "Aquisição de materiais e reagentes",
        "description": "Compra e logística",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Aplicação"
      }
    ],
    "bestPractices": [
      "Hipótese clara > experimento brilhante sem foco.",
      "Caderno de laboratório é seu ativo de IP.",
      "Reprodutibilidade é a base da ciência.",
      "Submeta cedo e revise sempre.",
      "Patenteie antes de publicar — não depois."
    ],
    "kpis": [
      "Publicações peer-reviewed",
      "Citations index",
      "Patentes concedidas",
      "Tempo até publicação",
      "Funding raised"
    ],
    "durationWeeks": 44,
    "teamSize": 24,
    "popularity": 43
  },
  {
    "id": "tpl-234",
    "name": "Spin-off Universitária",
    "industry": "Pesquisa & Desenvolvimento",
    "icon": "FlaskConical",
    "description": "Empresa derivada de pesquisa",
    "methodology": "Agile",
    "phases": [
      "Hipótese",
      "Revisão literária",
      "Experimentos",
      "Análise",
      "Publicação",
      "Aplicação"
    ],
    "tasks": [
      {
        "title": "Submissão a journal",
        "description": "Peer review",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Hipótese"
      },
      {
        "title": "Redação de paper",
        "description": "Manuscrito acadêmico",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Hipótese"
      },
      {
        "title": "Revisão sistemática",
        "description": "Estado da arte",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Revisão literária"
      },
      {
        "title": "Apresentação em congresso",
        "description": "Divulgação científica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Revisão literária"
      },
      {
        "title": "Aquisição de materiais e reagentes",
        "description": "Compra e logística",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Experimentos"
      },
      {
        "title": "Execução de experimentos",
        "description": "Bancada e prototipagem",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Análise"
      },
      {
        "title": "Formulação de hipótese",
        "description": "Pergunta de pesquisa",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Desenho experimental",
        "description": "Metodologia",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Publicação"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Publicação"
      },
      {
        "title": "Pedido de patente",
        "description": "INPI / PCT",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Aplicação"
      }
    ],
    "bestPractices": [
      "Hipótese clara > experimento brilhante sem foco.",
      "Caderno de laboratório é seu ativo de IP.",
      "Reprodutibilidade é a base da ciência.",
      "Submeta cedo e revise sempre.",
      "Patenteie antes de publicar — não depois."
    ],
    "kpis": [
      "Publicações peer-reviewed",
      "Citations index",
      "Patentes concedidas",
      "Tempo até publicação",
      "Funding raised"
    ],
    "durationWeeks": 44,
    "teamSize": 8,
    "popularity": 64
  },
  {
    "id": "tpl-235",
    "name": "Pesquisa Acadêmica — Pequena Escala",
    "industry": "Pesquisa & Desenvolvimento",
    "icon": "FlaskConical",
    "description": "Projeto de mestrado/doutoramento (Pequena Escala)",
    "methodology": "Agile",
    "phases": [
      "Hipótese",
      "Revisão literária",
      "Experimentos",
      "Análise",
      "Publicação",
      "Aplicação"
    ],
    "tasks": [
      {
        "title": "Redação de paper",
        "description": "Manuscrito acadêmico",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Hipótese"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Hipótese"
      },
      {
        "title": "Desenho experimental",
        "description": "Metodologia",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Revisão literária"
      },
      {
        "title": "Apresentação em congresso",
        "description": "Divulgação científica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Revisão literária"
      },
      {
        "title": "Aquisição de materiais e reagentes",
        "description": "Compra e logística",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Experimentos"
      },
      {
        "title": "Formulação de hipótese",
        "description": "Pergunta de pesquisa",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Execução de experimentos",
        "description": "Bancada e prototipagem",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Análise"
      },
      {
        "title": "Submissão a journal",
        "description": "Peer review",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Publicação"
      },
      {
        "title": "Pedido de patente",
        "description": "INPI / PCT",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Publicação"
      },
      {
        "title": "Revisão sistemática",
        "description": "Estado da arte",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Aplicação"
      }
    ],
    "bestPractices": [
      "Hipótese clara > experimento brilhante sem foco.",
      "Caderno de laboratório é seu ativo de IP.",
      "Reprodutibilidade é a base da ciência.",
      "Submeta cedo e revise sempre.",
      "Patenteie antes de publicar — não depois."
    ],
    "kpis": [
      "Publicações peer-reviewed",
      "Citations index",
      "Patentes concedidas",
      "Tempo até publicação",
      "Funding raised"
    ],
    "durationWeeks": 44,
    "teamSize": 10,
    "popularity": 42
  },
  {
    "id": "tpl-236",
    "name": "Desenvolvimento de Novo Produto — Pequena Escala",
    "industry": "Pesquisa & Desenvolvimento",
    "icon": "FlaskConical",
    "description": "NPD industrial (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Hipótese",
      "Revisão literária",
      "Experimentos",
      "Análise",
      "Publicação",
      "Aplicação"
    ],
    "tasks": [
      {
        "title": "Redação de paper",
        "description": "Manuscrito acadêmico",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Hipótese"
      },
      {
        "title": "Pedido de patente",
        "description": "INPI / PCT",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Hipótese"
      },
      {
        "title": "Execução de experimentos",
        "description": "Bancada e prototipagem",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Revisão literária"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Experimentos"
      },
      {
        "title": "Apresentação em congresso",
        "description": "Divulgação científica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Experimentos"
      },
      {
        "title": "Submissão a journal",
        "description": "Peer review",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Análise"
      },
      {
        "title": "Aquisição de materiais e reagentes",
        "description": "Compra e logística",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Publicação"
      },
      {
        "title": "Revisão sistemática",
        "description": "Estado da arte",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Publicação"
      },
      {
        "title": "Desenho experimental",
        "description": "Metodologia",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Aplicação"
      }
    ],
    "bestPractices": [
      "Hipótese clara > experimento brilhante sem foco.",
      "Caderno de laboratório é seu ativo de IP.",
      "Reprodutibilidade é a base da ciência.",
      "Submeta cedo e revise sempre.",
      "Patenteie antes de publicar — não depois."
    ],
    "kpis": [
      "Publicações peer-reviewed",
      "Citations index",
      "Patentes concedidas",
      "Tempo até publicação",
      "Funding raised"
    ],
    "durationWeeks": 42,
    "teamSize": 24,
    "popularity": 74
  },
  {
    "id": "tpl-237",
    "name": "Patente de Invenção — Pequena Escala",
    "industry": "Pesquisa & Desenvolvimento",
    "icon": "FlaskConical",
    "description": "Pedido de patente nacional/PCT (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Hipótese",
      "Revisão literária",
      "Experimentos",
      "Análise",
      "Publicação",
      "Aplicação"
    ],
    "tasks": [
      {
        "title": "Apresentação em congresso",
        "description": "Divulgação científica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Hipótese"
      },
      {
        "title": "Desenho experimental",
        "description": "Metodologia",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Hipótese"
      },
      {
        "title": "Execução de experimentos",
        "description": "Bancada e prototipagem",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Revisão literária"
      },
      {
        "title": "Formulação de hipótese",
        "description": "Pergunta de pesquisa",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Revisão literária"
      },
      {
        "title": "Pedido de patente",
        "description": "INPI / PCT",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Experimentos"
      },
      {
        "title": "Redação de paper",
        "description": "Manuscrito acadêmico",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Revisão sistemática",
        "description": "Estado da arte",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Submissão a journal",
        "description": "Peer review",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Publicação"
      },
      {
        "title": "Aquisição de materiais e reagentes",
        "description": "Compra e logística",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Publicação"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Aplicação"
      }
    ],
    "bestPractices": [
      "Hipótese clara > experimento brilhante sem foco.",
      "Caderno de laboratório é seu ativo de IP.",
      "Reprodutibilidade é a base da ciência.",
      "Submeta cedo e revise sempre.",
      "Patenteie antes de publicar — não depois."
    ],
    "kpis": [
      "Publicações peer-reviewed",
      "Citations index",
      "Patentes concedidas",
      "Tempo até publicação",
      "Funding raised"
    ],
    "durationWeeks": 44,
    "teamSize": 13,
    "popularity": 84
  },
  {
    "id": "tpl-238",
    "name": "Pesquisa de Materiais — Pequena Escala",
    "industry": "Pesquisa & Desenvolvimento",
    "icon": "FlaskConical",
    "description": "Caracterização de novos materiais (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Hipótese",
      "Revisão literária",
      "Experimentos",
      "Análise",
      "Publicação",
      "Aplicação"
    ],
    "tasks": [
      {
        "title": "Aquisição de materiais e reagentes",
        "description": "Compra e logística",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Hipótese"
      },
      {
        "title": "Formulação de hipótese",
        "description": "Pergunta de pesquisa",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Hipótese"
      },
      {
        "title": "Apresentação em congresso",
        "description": "Divulgação científica",
        "priority": "normal",
        "estimatedDays": 7,
        "phase": "Revisão literária"
      },
      {
        "title": "Pedido de patente",
        "description": "INPI / PCT",
        "priority": "high",
        "estimatedDays": 60,
        "phase": "Revisão literária"
      },
      {
        "title": "Submissão a journal",
        "description": "Peer review",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Experimentos"
      },
      {
        "title": "Redação de paper",
        "description": "Manuscrito acadêmico",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Análise"
      },
      {
        "title": "Análise estatística",
        "description": "Tratamento de dados",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Análise"
      },
      {
        "title": "Desenho experimental",
        "description": "Metodologia",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Publicação"
      },
      {
        "title": "Execução de experimentos",
        "description": "Bancada e prototipagem",
        "priority": "high",
        "estimatedDays": 90,
        "phase": "Publicação"
      },
      {
        "title": "Revisão sistemática",
        "description": "Estado da arte",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Aplicação"
      }
    ],
    "bestPractices": [
      "Hipótese clara > experimento brilhante sem foco.",
      "Caderno de laboratório é seu ativo de IP.",
      "Reprodutibilidade é a base da ciência.",
      "Submeta cedo e revise sempre.",
      "Patenteie antes de publicar — não depois."
    ],
    "kpis": [
      "Publicações peer-reviewed",
      "Citations index",
      "Patentes concedidas",
      "Tempo até publicação",
      "Funding raised"
    ],
    "durationWeeks": 44,
    "teamSize": 7,
    "popularity": 40
  },
  {
    "id": "tpl-239",
    "name": "Programa Habitacional",
    "industry": "Governo & Setor Público",
    "icon": "Building2",
    "description": "Construção de moradia popular",
    "methodology": "PRINCE2",
    "phases": [
      "Planeamento estratégico",
      "Licitação",
      "Contratação",
      "Execução",
      "Fiscalização",
      "Avaliação"
    ],
    "tasks": [
      {
        "title": "Plano estratégico",
        "description": "Marco lógico do programa",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Edital de licitação",
        "description": "Termo de referência",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Fiscalização",
        "description": "Auditoria contínua",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Licitação"
      },
      {
        "title": "Prestação de contas",
        "description": "TCU/CGE",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Licitação"
      },
      {
        "title": "Análise de propostas",
        "description": "Comissão de licitação",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Contratação"
      },
      {
        "title": "Contratação",
        "description": "Empenho e assinatura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Execução física e financeira",
        "description": "Acompanhamento de obra/serviço",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Execução"
      },
      {
        "title": "Avaliação de impacto",
        "description": "Pós-implementação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Fiscalização"
      },
      {
        "title": "Disponibilidade orçamentária",
        "description": "Reserva fiscal",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Fiscalização"
      },
      {
        "title": "Audiência pública",
        "description": "Participação social",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Avaliação"
      }
    ],
    "bestPractices": [
      "Transparência é antídoto contra desconfiança.",
      "Participação social legitima decisões.",
      "Documente todos os atos administrativos.",
      "Evite contratação direta — licite sempre que possível.",
      "Impacto > entrega. Mensure o que importa."
    ],
    "kpis": [
      "% execução orçamentária",
      "Beneficiários atendidos",
      "Indicador de impacto setorial",
      "% conformidade legal",
      "Satisfação cidadã"
    ],
    "durationWeeks": 53,
    "teamSize": 7,
    "popularity": 89
  },
  {
    "id": "tpl-240",
    "name": "Modernização da Saúde Pública",
    "industry": "Governo & Setor Público",
    "icon": "Building2",
    "description": "Reforma sistêmica",
    "methodology": "PRINCE2",
    "phases": [
      "Planeamento estratégico",
      "Licitação",
      "Contratação",
      "Execução",
      "Fiscalização",
      "Avaliação"
    ],
    "tasks": [
      {
        "title": "Contratação",
        "description": "Empenho e assinatura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Execução física e financeira",
        "description": "Acompanhamento de obra/serviço",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Análise de propostas",
        "description": "Comissão de licitação",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Licitação"
      },
      {
        "title": "Fiscalização",
        "description": "Auditoria contínua",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Contratação"
      },
      {
        "title": "Plano estratégico",
        "description": "Marco lógico do programa",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Contratação"
      },
      {
        "title": "Edital de licitação",
        "description": "Termo de referência",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução"
      },
      {
        "title": "Avaliação de impacto",
        "description": "Pós-implementação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Fiscalização"
      },
      {
        "title": "Disponibilidade orçamentária",
        "description": "Reserva fiscal",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Fiscalização"
      },
      {
        "title": "Prestação de contas",
        "description": "TCU/CGE",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Avaliação"
      }
    ],
    "bestPractices": [
      "Transparência é antídoto contra desconfiança.",
      "Participação social legitima decisões.",
      "Documente todos os atos administrativos.",
      "Evite contratação direta — licite sempre que possível.",
      "Impacto > entrega. Mensure o que importa."
    ],
    "kpis": [
      "% execução orçamentária",
      "Beneficiários atendidos",
      "Indicador de impacto setorial",
      "% conformidade legal",
      "Satisfação cidadã"
    ],
    "durationWeeks": 52,
    "teamSize": 5,
    "popularity": 71
  },
  {
    "id": "tpl-241",
    "name": "Plataforma Cidadão Digital",
    "industry": "Governo & Setor Público",
    "icon": "Building2",
    "description": "Serviços públicos online",
    "methodology": "Waterfall",
    "phases": [
      "Planeamento estratégico",
      "Licitação",
      "Contratação",
      "Execução",
      "Fiscalização",
      "Avaliação"
    ],
    "tasks": [
      {
        "title": "Edital de licitação",
        "description": "Termo de referência",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Contratação",
        "description": "Empenho e assinatura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Avaliação de impacto",
        "description": "Pós-implementação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Licitação"
      },
      {
        "title": "Fiscalização",
        "description": "Auditoria contínua",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Licitação"
      },
      {
        "title": "Plano estratégico",
        "description": "Marco lógico do programa",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Contratação"
      },
      {
        "title": "Análise de propostas",
        "description": "Comissão de licitação",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Execução"
      },
      {
        "title": "Prestação de contas",
        "description": "TCU/CGE",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Execução"
      },
      {
        "title": "Audiência pública",
        "description": "Participação social",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Fiscalização"
      },
      {
        "title": "Execução física e financeira",
        "description": "Acompanhamento de obra/serviço",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Fiscalização"
      },
      {
        "title": "Disponibilidade orçamentária",
        "description": "Reserva fiscal",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Avaliação"
      }
    ],
    "bestPractices": [
      "Transparência é antídoto contra desconfiança.",
      "Participação social legitima decisões.",
      "Documente todos os atos administrativos.",
      "Evite contratação direta — licite sempre que possível.",
      "Impacto > entrega. Mensure o que importa."
    ],
    "kpis": [
      "% execução orçamentária",
      "Beneficiários atendidos",
      "Indicador de impacto setorial",
      "% conformidade legal",
      "Satisfação cidadã"
    ],
    "durationWeeks": 53,
    "teamSize": 11,
    "popularity": 42
  },
  {
    "id": "tpl-242",
    "name": "Transparência e Open Data",
    "industry": "Governo & Setor Público",
    "icon": "Building2",
    "description": "Portal de dados abertos",
    "methodology": "PRINCE2",
    "phases": [
      "Planeamento estratégico",
      "Licitação",
      "Contratação",
      "Execução",
      "Fiscalização",
      "Avaliação"
    ],
    "tasks": [
      {
        "title": "Contratação",
        "description": "Empenho e assinatura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Execução física e financeira",
        "description": "Acompanhamento de obra/serviço",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Edital de licitação",
        "description": "Termo de referência",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Licitação"
      },
      {
        "title": "Disponibilidade orçamentária",
        "description": "Reserva fiscal",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Licitação"
      },
      {
        "title": "Plano estratégico",
        "description": "Marco lógico do programa",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Contratação"
      },
      {
        "title": "Análise de propostas",
        "description": "Comissão de licitação",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Execução"
      },
      {
        "title": "Audiência pública",
        "description": "Participação social",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Avaliação de impacto",
        "description": "Pós-implementação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Fiscalização"
      },
      {
        "title": "Prestação de contas",
        "description": "TCU/CGE",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Fiscalização"
      },
      {
        "title": "Fiscalização",
        "description": "Auditoria contínua",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      }
    ],
    "bestPractices": [
      "Transparência é antídoto contra desconfiança.",
      "Participação social legitima decisões.",
      "Documente todos os atos administrativos.",
      "Evite contratação direta — licite sempre que possível.",
      "Impacto > entrega. Mensure o que importa."
    ],
    "kpis": [
      "% execução orçamentária",
      "Beneficiários atendidos",
      "Indicador de impacto setorial",
      "% conformidade legal",
      "Satisfação cidadã"
    ],
    "durationWeeks": 53,
    "teamSize": 14,
    "popularity": 57
  },
  {
    "id": "tpl-243",
    "name": "PPP de Infraestrutura",
    "industry": "Governo & Setor Público",
    "icon": "Building2",
    "description": "Parceria público-privada",
    "methodology": "PRINCE2",
    "phases": [
      "Planeamento estratégico",
      "Licitação",
      "Contratação",
      "Execução",
      "Fiscalização",
      "Avaliação"
    ],
    "tasks": [
      {
        "title": "Avaliação de impacto",
        "description": "Pós-implementação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Contratação",
        "description": "Empenho e assinatura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Disponibilidade orçamentária",
        "description": "Reserva fiscal",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Licitação"
      },
      {
        "title": "Análise de propostas",
        "description": "Comissão de licitação",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Contratação"
      },
      {
        "title": "Prestação de contas",
        "description": "TCU/CGE",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Contratação"
      },
      {
        "title": "Plano estratégico",
        "description": "Marco lógico do programa",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Execução"
      },
      {
        "title": "Fiscalização",
        "description": "Auditoria contínua",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Fiscalização"
      },
      {
        "title": "Execução física e financeira",
        "description": "Acompanhamento de obra/serviço",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Fiscalização"
      },
      {
        "title": "Edital de licitação",
        "description": "Termo de referência",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      }
    ],
    "bestPractices": [
      "Transparência é antídoto contra desconfiança.",
      "Participação social legitima decisões.",
      "Documente todos os atos administrativos.",
      "Evite contratação direta — licite sempre que possível.",
      "Impacto > entrega. Mensure o que importa."
    ],
    "kpis": [
      "% execução orçamentária",
      "Beneficiários atendidos",
      "Indicador de impacto setorial",
      "% conformidade legal",
      "Satisfação cidadã"
    ],
    "durationWeeks": 52,
    "teamSize": 6,
    "popularity": 96
  },
  {
    "id": "tpl-244",
    "name": "Programa de Segurança Pública",
    "industry": "Governo & Setor Público",
    "icon": "Building2",
    "description": "Investimento em policiamento",
    "methodology": "PRINCE2",
    "phases": [
      "Planeamento estratégico",
      "Licitação",
      "Contratação",
      "Execução",
      "Fiscalização",
      "Avaliação"
    ],
    "tasks": [
      {
        "title": "Análise de propostas",
        "description": "Comissão de licitação",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Avaliação de impacto",
        "description": "Pós-implementação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Contratação",
        "description": "Empenho e assinatura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Licitação"
      },
      {
        "title": "Plano estratégico",
        "description": "Marco lógico do programa",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Licitação"
      },
      {
        "title": "Prestação de contas",
        "description": "TCU/CGE",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Contratação"
      },
      {
        "title": "Audiência pública",
        "description": "Participação social",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Execução física e financeira",
        "description": "Acompanhamento de obra/serviço",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Execução"
      },
      {
        "title": "Disponibilidade orçamentária",
        "description": "Reserva fiscal",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Fiscalização"
      },
      {
        "title": "Fiscalização",
        "description": "Auditoria contínua",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Fiscalização"
      },
      {
        "title": "Edital de licitação",
        "description": "Termo de referência",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      }
    ],
    "bestPractices": [
      "Transparência é antídoto contra desconfiança.",
      "Participação social legitima decisões.",
      "Documente todos os atos administrativos.",
      "Evite contratação direta — licite sempre que possível.",
      "Impacto > entrega. Mensure o que importa."
    ],
    "kpis": [
      "% execução orçamentária",
      "Beneficiários atendidos",
      "Indicador de impacto setorial",
      "% conformidade legal",
      "Satisfação cidadã"
    ],
    "durationWeeks": 53,
    "teamSize": 23,
    "popularity": 55
  },
  {
    "id": "tpl-245",
    "name": "Educação Pública Digital",
    "industry": "Governo & Setor Público",
    "icon": "Building2",
    "description": "Computadores e conectividade nas escolas",
    "methodology": "Waterfall",
    "phases": [
      "Planeamento estratégico",
      "Licitação",
      "Contratação",
      "Execução",
      "Fiscalização",
      "Avaliação"
    ],
    "tasks": [
      {
        "title": "Contratação",
        "description": "Empenho e assinatura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Fiscalização",
        "description": "Auditoria contínua",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Audiência pública",
        "description": "Participação social",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Licitação"
      },
      {
        "title": "Avaliação de impacto",
        "description": "Pós-implementação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Licitação"
      },
      {
        "title": "Análise de propostas",
        "description": "Comissão de licitação",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Contratação"
      },
      {
        "title": "Disponibilidade orçamentária",
        "description": "Reserva fiscal",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Execução"
      },
      {
        "title": "Execução física e financeira",
        "description": "Acompanhamento de obra/serviço",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Execução"
      },
      {
        "title": "Plano estratégico",
        "description": "Marco lógico do programa",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Fiscalização"
      },
      {
        "title": "Prestação de contas",
        "description": "TCU/CGE",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Fiscalização"
      },
      {
        "title": "Edital de licitação",
        "description": "Termo de referência",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      }
    ],
    "bestPractices": [
      "Transparência é antídoto contra desconfiança.",
      "Participação social legitima decisões.",
      "Documente todos os atos administrativos.",
      "Evite contratação direta — licite sempre que possível.",
      "Impacto > entrega. Mensure o que importa."
    ],
    "kpis": [
      "% execução orçamentária",
      "Beneficiários atendidos",
      "Indicador de impacto setorial",
      "% conformidade legal",
      "Satisfação cidadã"
    ],
    "durationWeeks": 53,
    "teamSize": 21,
    "popularity": 62
  },
  {
    "id": "tpl-246",
    "name": "Modernização do Judiciário",
    "industry": "Governo & Setor Público",
    "icon": "Building2",
    "description": "Processo eletrônico",
    "methodology": "PRINCE2",
    "phases": [
      "Planeamento estratégico",
      "Licitação",
      "Contratação",
      "Execução",
      "Fiscalização",
      "Avaliação"
    ],
    "tasks": [
      {
        "title": "Contratação",
        "description": "Empenho e assinatura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Plano estratégico",
        "description": "Marco lógico do programa",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Execução física e financeira",
        "description": "Acompanhamento de obra/serviço",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Licitação"
      },
      {
        "title": "Fiscalização",
        "description": "Auditoria contínua",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Contratação"
      },
      {
        "title": "Avaliação de impacto",
        "description": "Pós-implementação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Contratação"
      },
      {
        "title": "Edital de licitação",
        "description": "Termo de referência",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução"
      },
      {
        "title": "Prestação de contas",
        "description": "TCU/CGE",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Fiscalização"
      },
      {
        "title": "Audiência pública",
        "description": "Participação social",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Fiscalização"
      },
      {
        "title": "Análise de propostas",
        "description": "Comissão de licitação",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Avaliação"
      }
    ],
    "bestPractices": [
      "Transparência é antídoto contra desconfiança.",
      "Participação social legitima decisões.",
      "Documente todos os atos administrativos.",
      "Evite contratação direta — licite sempre que possível.",
      "Impacto > entrega. Mensure o que importa."
    ],
    "kpis": [
      "% execução orçamentária",
      "Beneficiários atendidos",
      "Indicador de impacto setorial",
      "% conformidade legal",
      "Satisfação cidadã"
    ],
    "durationWeeks": 51,
    "teamSize": 19,
    "popularity": 43
  },
  {
    "id": "tpl-247",
    "name": "Programa Anticorrupção Público",
    "industry": "Governo & Setor Público",
    "icon": "Building2",
    "description": "Compliance no setor público",
    "methodology": "Waterfall",
    "phases": [
      "Planeamento estratégico",
      "Licitação",
      "Contratação",
      "Execução",
      "Fiscalização",
      "Avaliação"
    ],
    "tasks": [
      {
        "title": "Análise de propostas",
        "description": "Comissão de licitação",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Disponibilidade orçamentária",
        "description": "Reserva fiscal",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Plano estratégico",
        "description": "Marco lógico do programa",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Licitação"
      },
      {
        "title": "Prestação de contas",
        "description": "TCU/CGE",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Licitação"
      },
      {
        "title": "Avaliação de impacto",
        "description": "Pós-implementação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Contratação"
      },
      {
        "title": "Audiência pública",
        "description": "Participação social",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Execução"
      },
      {
        "title": "Edital de licitação",
        "description": "Termo de referência",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução"
      },
      {
        "title": "Execução física e financeira",
        "description": "Acompanhamento de obra/serviço",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Fiscalização"
      },
      {
        "title": "Fiscalização",
        "description": "Auditoria contínua",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Fiscalização"
      },
      {
        "title": "Contratação",
        "description": "Empenho e assinatura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Avaliação"
      }
    ],
    "bestPractices": [
      "Transparência é antídoto contra desconfiança.",
      "Participação social legitima decisões.",
      "Documente todos os atos administrativos.",
      "Evite contratação direta — licite sempre que possível.",
      "Impacto > entrega. Mensure o que importa."
    ],
    "kpis": [
      "% execução orçamentária",
      "Beneficiários atendidos",
      "Indicador de impacto setorial",
      "% conformidade legal",
      "Satisfação cidadã"
    ],
    "durationWeeks": 53,
    "teamSize": 24,
    "popularity": 92
  },
  {
    "id": "tpl-248",
    "name": "Programa Habitacional — Pequena Escala",
    "industry": "Governo & Setor Público",
    "icon": "Building2",
    "description": "Construção de moradia popular (Pequena Escala)",
    "methodology": "PRINCE2",
    "phases": [
      "Planeamento estratégico",
      "Licitação",
      "Contratação",
      "Execução",
      "Fiscalização",
      "Avaliação"
    ],
    "tasks": [
      {
        "title": "Disponibilidade orçamentária",
        "description": "Reserva fiscal",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Plano estratégico",
        "description": "Marco lógico do programa",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Execução física e financeira",
        "description": "Acompanhamento de obra/serviço",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Licitação"
      },
      {
        "title": "Contratação",
        "description": "Empenho e assinatura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Licitação"
      },
      {
        "title": "Avaliação de impacto",
        "description": "Pós-implementação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Contratação"
      },
      {
        "title": "Fiscalização",
        "description": "Auditoria contínua",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução"
      },
      {
        "title": "Edital de licitação",
        "description": "Termo de referência",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Execução"
      },
      {
        "title": "Análise de propostas",
        "description": "Comissão de licitação",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Fiscalização"
      },
      {
        "title": "Audiência pública",
        "description": "Participação social",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Fiscalização"
      },
      {
        "title": "Prestação de contas",
        "description": "TCU/CGE",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Avaliação"
      }
    ],
    "bestPractices": [
      "Transparência é antídoto contra desconfiança.",
      "Participação social legitima decisões.",
      "Documente todos os atos administrativos.",
      "Evite contratação direta — licite sempre que possível.",
      "Impacto > entrega. Mensure o que importa."
    ],
    "kpis": [
      "% execução orçamentária",
      "Beneficiários atendidos",
      "Indicador de impacto setorial",
      "% conformidade legal",
      "Satisfação cidadã"
    ],
    "durationWeeks": 53,
    "teamSize": 14,
    "popularity": 68
  },
  {
    "id": "tpl-249",
    "name": "Modernização da Saúde Pública — Pequena Escala",
    "industry": "Governo & Setor Público",
    "icon": "Building2",
    "description": "Reforma sistêmica (Pequena Escala)",
    "methodology": "PRINCE2",
    "phases": [
      "Planeamento estratégico",
      "Licitação",
      "Contratação",
      "Execução",
      "Fiscalização",
      "Avaliação"
    ],
    "tasks": [
      {
        "title": "Audiência pública",
        "description": "Participação social",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Disponibilidade orçamentária",
        "description": "Reserva fiscal",
        "priority": "urgent",
        "estimatedDays": 14,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Avaliação de impacto",
        "description": "Pós-implementação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Licitação"
      },
      {
        "title": "Prestação de contas",
        "description": "TCU/CGE",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Licitação"
      },
      {
        "title": "Análise de propostas",
        "description": "Comissão de licitação",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Contratação"
      },
      {
        "title": "Plano estratégico",
        "description": "Marco lógico do programa",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Execução"
      },
      {
        "title": "Execução física e financeira",
        "description": "Acompanhamento de obra/serviço",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Execução"
      },
      {
        "title": "Contratação",
        "description": "Empenho e assinatura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Fiscalização"
      },
      {
        "title": "Edital de licitação",
        "description": "Termo de referência",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Fiscalização"
      },
      {
        "title": "Fiscalização",
        "description": "Auditoria contínua",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Avaliação"
      }
    ],
    "bestPractices": [
      "Transparência é antídoto contra desconfiança.",
      "Participação social legitima decisões.",
      "Documente todos os atos administrativos.",
      "Evite contratação direta — licite sempre que possível.",
      "Impacto > entrega. Mensure o que importa."
    ],
    "kpis": [
      "% execução orçamentária",
      "Beneficiários atendidos",
      "Indicador de impacto setorial",
      "% conformidade legal",
      "Satisfação cidadã"
    ],
    "durationWeeks": 53,
    "teamSize": 14,
    "popularity": 66
  },
  {
    "id": "tpl-250",
    "name": "Plataforma Cidadão Digital — Pequena Escala",
    "industry": "Governo & Setor Público",
    "icon": "Building2",
    "description": "Serviços públicos online (Pequena Escala)",
    "methodology": "Waterfall",
    "phases": [
      "Planeamento estratégico",
      "Licitação",
      "Contratação",
      "Execução",
      "Fiscalização",
      "Avaliação"
    ],
    "tasks": [
      {
        "title": "Prestação de contas",
        "description": "TCU/CGE",
        "priority": "urgent",
        "estimatedDays": 21,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Contratação",
        "description": "Empenho e assinatura",
        "priority": "high",
        "estimatedDays": 14,
        "phase": "Planeamento estratégico"
      },
      {
        "title": "Audiência pública",
        "description": "Participação social",
        "priority": "high",
        "estimatedDays": 7,
        "phase": "Licitação"
      },
      {
        "title": "Fiscalização",
        "description": "Auditoria contínua",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Contratação"
      },
      {
        "title": "Edital de licitação",
        "description": "Termo de referência",
        "priority": "high",
        "estimatedDays": 30,
        "phase": "Contratação"
      },
      {
        "title": "Execução física e financeira",
        "description": "Acompanhamento de obra/serviço",
        "priority": "high",
        "estimatedDays": 180,
        "phase": "Execução"
      },
      {
        "title": "Avaliação de impacto",
        "description": "Pós-implementação",
        "priority": "normal",
        "estimatedDays": 30,
        "phase": "Fiscalização"
      },
      {
        "title": "Plano estratégico",
        "description": "Marco lógico do programa",
        "priority": "urgent",
        "estimatedDays": 30,
        "phase": "Fiscalização"
      },
      {
        "title": "Análise de propostas",
        "description": "Comissão de licitação",
        "priority": "high",
        "estimatedDays": 21,
        "phase": "Avaliação"
      }
    ],
    "bestPractices": [
      "Transparência é antídoto contra desconfiança.",
      "Participação social legitima decisões.",
      "Documente todos os atos administrativos.",
      "Evite contratação direta — licite sempre que possível.",
      "Impacto > entrega. Mensure o que importa."
    ],
    "kpis": [
      "% execução orçamentária",
      "Beneficiários atendidos",
      "Indicador de impacto setorial",
      "% conformidade legal",
      "Satisfação cidadã"
    ],
    "durationWeeks": 51,
    "teamSize": 25,
    "popularity": 59
  }
] as ProjectTemplate[];

export const INDUSTRIES = ["Telecomunicações", "Construção", "Óleo & Gás", "TI & Software", "Saúde", "Educação", "Finanças", "Varejo & E-commerce", "Logística & Supply Chain", "Agronegócio", "Marketing", "Recursos Humanos", "Jurídico & Compliance", "Mídia & Entretenimento", "Energia & Utilities", "Manufatura & Indústria", "Hotelaria & Turismo", "Consultoria", "Pesquisa & Desenvolvimento", "Governo & Setor Público"];

export const INDUSTRY_ICONS: Record<string, string> = {"Telecomunicações": "Radio", "Construção": "HardHat", "Óleo & Gás": "Flame", "TI & Software": "Code", "Saúde": "Stethoscope", "Educação": "GraduationCap", "Finanças": "Landmark", "Varejo & E-commerce": "ShoppingBag", "Logística & Supply Chain": "Truck", "Agronegócio": "Sprout", "Marketing": "Megaphone", "Recursos Humanos": "Users", "Jurídico & Compliance": "Scale", "Mídia & Entretenimento": "Film", "Energia & Utilities": "Zap", "Manufatura & Indústria": "Factory", "Hotelaria & Turismo": "Hotel", "Consultoria": "Briefcase", "Pesquisa & Desenvolvimento": "FlaskConical", "Governo & Setor Público": "Building2"};
