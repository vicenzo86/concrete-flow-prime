import { Route, Headphones, CheckCircle, LayoutDashboard, Clock } from "lucide-react";

const solutions = [
  {
    icon: Route,
    title: "Roteirização Inteligente",
    description:
      "Aplicativo inteligente que otimiza rotas de entrega, reduzindo tempo e combustível. Acompanhamento GPS e comunicação direta com motoristas.",
    features: ["Otimização de rotas", "Rastreamento GPS", "Comunicação integrada"],
  },
  {
    icon: Clock,
    title: "Previsibilidade de Entregas",
    description:
      "Monitoramento dinâmico dos tempos de entrega em tempo real. O sistema identifica desvios, realiza ajustes automáticos e comunica ativamente os motoristas quando necessário.",
    features: ["Monitoramento em tempo real", "Ajustes dinâmicos de rota", "Comunicação ativa com motoristas"],
  },
  {
    icon: Headphones,
    title: "Atendimento Autônomo",
    description:
      "Nossa plataforma atende seus clientes de forma autônoma, deixando os pedidos pré-agendados automaticamente. O setor logístico precisa apenas confirmar, economizando tempo e recursos.",
    features: ["Pré-agendamento automático", "Atendimento 24 horas", "Confirmação simplificada"],
  },
  {
    icon: CheckCircle,
    title: "Confirmação Automática",
    description:
      "Sistema que evita erros e garante que nenhum caminhão fique ocioso. Máxima eficiência na alocação de equipamentos e entregas sempre no prazo.",
    features: ["Zero erros de agendamento", "Caminhões sempre ativos", "Alocação máxima de frota"],
  },
  {
    icon: LayoutDashboard,
    title: "Controle de Confirmações",
    description:
      "Não precisa mais ficar verificando WhatsApp para acompanhar confirmações. Todas as informações centralizadas em um dashboard intuitivo e completo.",
    features: ["Dashboard centralizado", "Histórico de confirmações", "Alertas em tempo real"],
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
