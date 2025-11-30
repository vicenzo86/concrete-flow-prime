import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    value: "30%",
    label: "Aumento de Produtividade",
    description: "Otimize processos e produza mais com os mesmos recursos.",
  },
  {
    icon: Clock,
    value: "45%",
    label: "Redução de Tempo",
    description: "Entregas mais rápidas com roteirização inteligente.",
  },
  {
    icon: DollarSign,
    value: "25%",
    label: "Economia em Custos",
    description: "Reduza desperdícios e otimize o uso de combustível.",
  },
  {
    icon: Users,
    value: "40%",
    label: "Menos Trabalho Manual",
    description: "Automação de tarefas repetitivas e burocráticas.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mt-3 mb-6">
            Resultados comprovados
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            Nossos clientes experimentam melhorias significativas em todas as
            áreas de operação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.label}
              className="bg-card rounded-2xl p-8 text-center border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>

              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {benefit.value}
              </div>

              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {benefit.label}
              </h3>

              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
