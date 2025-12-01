import { Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="ConcreteHub" className="h-14 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 mb-6">
              Tecnologia inteligente para usinas de concreto. Roteirização
              e atendimento autônomo para transformar sua operação.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin size={18} className="text-background" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={18} className="text-background" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube size={18} className="text-background" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-background font-semibold mb-4">Soluções</h4>
            <ul className="space-y-3">
              <li>
                <a href="#solucoes" className="text-background/70 hover:text-primary transition-colors">
                  Roteirização Inteligente
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-background/70 hover:text-primary transition-colors">
                  Atendimento Autônomo
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-background/70 hover:text-primary transition-colors">
                  Confirmação Automática
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-background/70 hover:text-primary transition-colors">
                  Controle de Confirmações
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-background font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-background/70 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-background font-semibold mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} ConcreteHub. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
