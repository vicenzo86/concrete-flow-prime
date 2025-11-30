import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Mais de 10 anos de experiência no setor de concreto",
  "Equipe especializada em tecnologia e logística",
  "Suporte técnico 24/7 em todo o Brasil",
  "Integração com sistemas ERP existentes",
  "Treinamento completo para sua equipe",
  "Atualizações constantes e sem custo adicional",
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre a ConcreteHub
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Especialistas em tecnologia para o setor de concreto
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A ConcreteHub nasceu da união entre profissionais de tecnologia e
              especialistas do setor de concreto. Entendemos os desafios únicos
              da sua operação porque vivemos essa realidade.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nossa missão é transformar usinas de concreto em operações
              inteligentes, eficientes e lucrativas através de tecnologia de
              ponta e atendimento humanizado.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-6 text-center border border-border">
                  <div className="text-4xl font-bold text-primary mb-1">+150</div>
                  <div className="text-muted-foreground text-sm">
                    Usinas Atendidas
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center border border-border">
                  <div className="text-4xl font-bold text-primary mb-1">+10</div>
                  <div className="text-muted-foreground text-sm">
                    Anos de Experiência
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center border border-border">
                  <div className="text-4xl font-bold text-primary mb-1">50+</div>
                  <div className="text-muted-foreground text-sm">
                    Profissionais
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center border border-border">
                  <div className="text-4xl font-bold text-primary mb-1">98%</div>
                  <div className="text-muted-foreground text-sm">
                    Taxa de Retenção
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
