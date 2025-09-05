import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Camera, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Fotos63
              </span>
            </div>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              A maior plataforma de venda de fotos do Tocantins. Conectando fotógrafos 
              talentosos com pessoas que valorizam momentos únicos.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#explore" className="text-foreground/70 hover:text-foreground transition-colors">Explorar Fotos</a></li>
              <li><a href="#categories" className="text-foreground/70 hover:text-foreground transition-colors">Categorias</a></li>
              <li><a href="#for-photographers" className="text-foreground/70 hover:text-foreground transition-colors">Para Fotógrafos</a></li>
              <li><a href="#pricing" className="text-foreground/70 hover:text-foreground transition-colors">Planos</a></li>
              <li><a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li><a href="#help" className="text-foreground/70 hover:text-foreground transition-colors">Central de Ajuda</a></li>
              <li><a href="#faq" className="text-foreground/70 hover:text-foreground transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">Contato</a></li>
              <li><a href="#terms" className="text-foreground/70 hover:text-foreground transition-colors">Termos de Uso</a></li>
              <li><a href="#privacy" className="text-foreground/70 hover:text-foreground transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Fique por dentro</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@fotos63.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <Phone className="h-4 w-4 text-primary" />
                <span>(63) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Palmas, TO - Brasil</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div>
              <p className="text-sm text-foreground/70 mb-3">
                Receba novidades e dicas de fotografia
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Seu email"
                  className="bg-background/50 border-border/50"
                />
                <Button variant="hero" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-border/50" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/70">
          <div className="flex items-center gap-2">
            <span>© 2024 Fotos63. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex items-center gap-1">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>no coração do Tocantins</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-foreground transition-colors">Termos</a>
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacidade</a>
            <a href="#cookies" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};