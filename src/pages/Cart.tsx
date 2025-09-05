import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  Camera, 
  CreditCard,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Zap,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Casamento do Sol - Marina & João",
      photographer: "Ana Silva",
      price: 29.90,
      originalPrice: 39.90,
      category: "Casamentos",
      thumbnail: "/api/placeholder/150/100"
    },
    {
      id: 2,
      title: "Corrida Noturna Palmas",
      photographer: "João Santos",
      price: 19.90,
      originalPrice: null,
      category: "Esportes",
      thumbnail: "/api/placeholder/150/100"
    },
    {
      id: 3,
      title: "Formatura Medicina UFT",
      photographer: "Lucia Ferreira",
      price: 18.90,
      originalPrice: null,
      category: "Graduações",
      thumbnail: "/api/placeholder/150/100"
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "fotos63") {
      setAppliedPromo("FOTOS63");
      setPromoCode("");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice || item.price), 0);
  const savings = originalTotal - subtotal;
  const promoDiscount = appliedPromo ? subtotal * 0.1 : 0; // 10% discount
  const total = subtotal - promoDiscount;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="border-b border-border/40 bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Camera className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Fotos63
                </span>
              </Link>
              <div className="h-6 w-px bg-border/50"></div>
              <h1 className="text-xl font-semibold">Carrinho</h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="bg-muted/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h2>
            <p className="text-foreground/70 mb-8">
              Explore nossa galeria e adicione fotos incríveis ao seu carrinho!
            </p>
            <Link to="/">
              <Button variant="hero" size="lg">
                Explorar Fotos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Camera className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Fotos63
                </span>
              </Link>
              <div className="h-6 w-px bg-border/50"></div>
              <h1 className="text-xl font-semibold">Carrinho ({cartItems.length} itens)</h1>
            </div>
            
            <Badge className="bg-primary/20 text-primary border-primary/30">
              <ShoppingCart className="h-3 w-3 mr-1" />
              {cartItems.length} fotos
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Itens no Carrinho
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex gap-4">
                      {/* Thumbnail */}
                      <div className="w-24 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-center">
                          <Camera className="h-6 w-6 text-primary mx-auto mb-1" />
                          <span className="text-xs text-foreground/50">#{item.id}</span>
                        </div>
                      </div>

                      {/* Item Info */}
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-foreground/70 mb-2">por {item.photographer}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {item.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-green-600">
                            <CheckCircle className="h-3 w-3" />
                            Download instantâneo
                          </div>
                        </div>
                      </div>

                      {/* Price and Actions */}
                      <div className="text-right">
                        <div className="mb-2">
                          <span className="text-lg font-bold text-primary">
                            R$ {item.price.toFixed(2)}
                          </span>
                          {item.originalPrice && (
                            <div className="text-xs text-foreground/50 line-through">
                              R$ {item.originalPrice.toFixed(2)}
                            </div>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {index < cartItems.length - 1 && <Separator className="bg-border/50" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Promo Code */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Cupom de Desconto</h3>
                <div className="flex gap-3">
                  <Input
                    placeholder="Digite seu cupom"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="bg-background/50"
                  />
                  <Button onClick={applyPromoCode} variant="outline">
                    Aplicar
                  </Button>
                </div>
                {appliedPromo && (
                  <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    Cupom {appliedPromo} aplicado! 10% de desconto
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">O que você receberá:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Fotos em alta resolução
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Sem marca d'água
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Download ilimitado
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Uso comercial permitido
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Formatos JPG e RAW
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Suporte 24/7
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkout Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="bg-gradient-card border-border/50 sticky top-4">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between">
                  <span>Subtotal ({cartItems.length} itens)</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>

                {/* Savings */}
                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Economia</span>
                    <span>-R$ {savings.toFixed(2)}</span>
                  </div>
                )}

                {/* Promo Discount */}
                {promoDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Desconto ({appliedPromo})</span>
                    <span>-R$ {promoDiscount.toFixed(2)}</span>
                  </div>
                )}

                <Separator className="bg-border/50" />

                {/* Total */}
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">R$ {total.toFixed(2)}</span>
                </div>

                {/* Security Badge */}
                <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Pagamento 100% seguro</span>
                  </div>
                </div>

                {/* Checkout Buttons */}
                <div className="space-y-3">
                  <Button className="w-full gap-2" variant="hero" size="lg">
                    <Zap className="h-5 w-5" />
                    Finalizar Compra
                  </Button>
                </div>

                <Separator className="bg-border/50" />

                {/* Payment Methods */}
                <div>
                  <h4 className="font-medium mb-3 text-sm">Formas de pagamento:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 p-2 border border-border/50 rounded-lg">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <span className="text-xs">Cartão</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 border border-border/50 rounded-lg">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="text-xs">PIX</span>
                    </div>
                  </div>
                </div>

                {/* Continue Shopping */}
                <Link to="/" className="block">
                  <Button variant="outline" className="w-full">
                    Continuar Comprando
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Help */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-2">Precisa de ajuda?</h4>
                    <p className="text-sm text-foreground/70 mb-3">
                      Nossa equipe está disponível 24/7 para te ajudar com qualquer dúvida.
                    </p>
                    <Button variant="outline" size="sm">
                      Falar com Suporte
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};