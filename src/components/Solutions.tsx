import { Settings, Route, Bot, Truck, BarChart3, Shield } from "lucide-react";

const solutions = [
  {
    icon: Settings,
    title: "Automação de Usinas",
    description:
      "Software completo para automação de processos em usinas de concreto. Controle de dosagem, gestão de estoque e monitoramento em tempo real.",
    features: ["Controle de dosagem automático", "Gestão de matéria-prima", "Relatórios em tempo real"],
  },
  {
    icon: Route,
    title: "App de Roteirização",
    description:
      "Aplicativo inteligente que otimiza rotas de entrega, reduzindo tempo e combustível. Acompanhamento GPS e comunicação direta com motoristas.",
    features: ["Otimização de rotas", "Rastreamento GPS", "Comunicação integrada"],
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    description:
      "Inteligência artificial que automatiza tarefas de logística, previsão de demanda e atendimento ao cliente. Decisões mais rápidas e precisas.",
    features: ["Previsão de demanda", "Atendimento automatizado", "Análise preditiva"],
  },
  {
    icon: Truck,
    title: "Gestão de Frota",
    description:
      "Controle completo da sua frota de betoneiras. Manutenção preventiva, disponibilidade e histórico de entregas em uma única plataforma.",
    features: ["Manutenção preventiva", "Histórico de entregas", "Indicadores de desempenho"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Dashboards executivos com métricas de produção, vendas e logística. Tome decisões baseadas em dados concretos.",
    features: ["Dashboards interativos", "Exportação de relatórios", "Alertas personalizados"],
  },
  {
    icon: Shield,
    title: "Qualidade e Compliance",
    description:
      "Controle de qualidade do concreto com rastreabilidade total. Laudos automáticos e conformidade com normas técnicas.",
    features: ["Rastreabilidade total", "Laudos automáticos", "Conformidade ABNT"],
  },
];

const Solutions = () => {
  return (
    <section id="solucoes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Tecnologia completa para sua operação
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções integradas que transformam cada etapa do seu processo,
            desde a produção até a entrega final.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {solution.title}
              </h3>

              <p className="text-muted-foreground mb-5 leading-relaxed">
                {solution.description}
              </p>

              <ul className="space-y-2">
                {solution.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
