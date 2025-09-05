import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, TrendingUp, DollarSign, Users, Star, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Gratuito",
    commission: "35%",
    features: [
      "Upload ilimitado de fotos",
      "Galeria básica",
      "Suporte por email",
      "Marca d'água automática"
    ],
    highlighted: false
  },
  {
    name: "Pro",
    commission: "25%",
    price: "R$ 29,90/mês",
    features: [
      "Tudo do plano Gratuito",
      "Analytics avançadas",
      "Suporte prioritário",
      "Personalização de perfil",
      "SEO otimizado"
    ],
    highlighted: true
  },
  {
    name: "Business",
    commission: "15%",
    price: "R$ 79,90/mês",
    features: [
      "Tudo do plano Pro",
      "API dedicada",
      "White label disponível",
      "Gerente de conta",
      "Relatórios personalizados"
    ],
    highlighted: false
  }
];

const testimonials = [
  {
    name: "Maria Silva",
    role: "Fotógrafa de Casamentos",
    avatar: "MS",
    rating: 5,
    comment: "O Fotos63 revolucionou meu negócio! Agora consigo vender muito mais fotos e focar no que amo: fotografar.",
    earnings: "R$ 3.450"
  },
  {
    name: "João Santos",
    role: "Fotógrafo de Esportes",
    avatar: "JS",
    rating: 5,
    comment: "A plataforma é intuitiva e os clientes encontram facilmente suas fotos. Recomendo para todos os colegas!",
    earnings: "R$ 2.180"
  }
];

export const PhotographerCTA = () => {
  return (
    <section id="for-photographers" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            <Camera className="h-3 w-3 mr-1" />
            Para Fotógrafos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transforme sua paixão em
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
              renda
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            Junte-se à maior plataforma de venda de fotos do Tocantins. 
            Exponha seu trabalho, conecte-se com clientes e monetize seu talento.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 bg-gradient-card border-border/50">
            <CardContent className="p-0">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">R$ 2.5M+</h3>
              <p className="text-foreground/70">Ganhos dos fotógrafos</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-gradient-card border-border/50">
            <CardContent className="p-0">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">50K+</h3>
              <p className="text-foreground/70">Clientes ativos</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-gradient-card border-border/50">
            <CardContent className="p-0">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-foreground/70">Taxa de satisfação</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-gradient-card border-border/50">
            <CardContent className="p-0">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">1M+</h3>
              <p className="text-foreground/70">Fotos vendidas</p>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Escolha seu plano e comece a vender
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative p-6 ${plan.highlighted ? 'border-primary shadow-glow bg-gradient-card' : 'bg-gradient-card border-border/50'}`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Mais Popular
                  </Badge>
                )}
                
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                    {plan.price && (
                      <p className="text-lg text-foreground/70 mb-2">{plan.price}</p>
                    )}
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-block">
                      <span className="font-bold text-xl">{plan.commission}</span>
                      <span className="text-sm ml-1">de comissão</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="bg-primary/20 rounded-full p-1 mt-0.5">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full gap-2" 
                    variant={plan.highlighted ? "hero" : "outline"}
                  >
                    {plan.name === "Gratuito" ? "Começar Grátis" : "Escolher Plano"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            O que nossos fotógrafos dizem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/70 mb-2">{testimonial.role}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.earnings}/mês
                    </Badge>
                  </div>
                  <p className="text-foreground/80 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-card border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-0">
              <Camera className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Pronto para começar a vender?
              </h3>
              <p className="text-foreground/70 mb-6">
                Crie sua conta gratuita em menos de 2 minutos e comece a monetizar suas fotos hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="gap-2">
                  <Camera className="h-5 w-5" />
                  Criar Conta Gratuita
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Ver Dashboard Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};