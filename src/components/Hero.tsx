import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Star, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
            <Zap className="h-3 w-3 mr-1" />
            Marketplace de Fotos do Tocantins
          </Badge>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Fotos63
            </span>
            <br />
            <span className="text-foreground">
              Conectando fotógrafos
            </span>
            <br />
            <span className="text-foreground/90">
              e momentos únicos
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubra e compre fotos profissionais de eventos, esportes e momentos especiais. 
            Ou venda suas criações para uma audiência apaixonada por fotografia.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-foreground/70">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              <span className="font-semibold">1000+ Fotos</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold">200+ Fotógrafos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="font-semibold">4.9 Estrelas</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6 h-auto animate-glow">
              Explorar Fotos
            </Button>
            <Button size="lg" variant="premium" className="text-lg px-8 py-6 h-auto">
              Começar a Vender
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gradient-card p-6 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Busca Inteligente</h3>
              <p className="text-foreground/70">
                Encontre fotos usando reconhecimento facial ou filtros avançados
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Download Instantâneo</h3>
              <p className="text-foreground/70">
                Compre e baixe suas fotos em alta resolução imediatamente
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Comunidade Local</h3>
              <p className="text-foreground/70">
                Conecte-se com fotógrafos e eventos do Tocantins e região
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <div className="w-4 h-4 bg-primary rounded-full animate-float"></div>
      </div>
      <div className="absolute bottom-20 right-10 hidden lg:block">
        <div className="w-6 h-6 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};