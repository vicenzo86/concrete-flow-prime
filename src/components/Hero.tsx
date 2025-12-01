import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">
              Tecnologia de ponta para usinas de concreto
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Transforme sua{" "}
            <span className="text-primary">usina de concreto</span> com
            inteligência artificial
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Software de automação, aplicativo de roteirização e agentes de IA
            que revolucionam sua operação logística. Reduza custos e aumente a
            eficiência.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contato"
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/30"
            >
              Solicite uma Demo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#solucoes"
              className="group bg-card/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-card/20 transition-all flex items-center gap-2"
            >
              <Play size={20} className="text-primary" />
              Conheça as Soluções
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "20%", label: "Redução de Custos" },
              { value: "15+", label: "Anos de Experiência" },
              { value: "98%", label: "Satisfação" },
              { value: "24/7", label: "Suporte Técnico" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
