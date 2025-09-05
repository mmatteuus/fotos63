import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Camera, ShoppingCart, User, Menu } from "lucide-react";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Fotos63
            </span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar fotos, eventos, fotógrafos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card/50 border-border/50 focus:border-primary/50"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#explore" className="text-foreground/80 hover:text-foreground transition-colors">
              Explorar
            </a>
            <a href="#categories" className="text-foreground/80 hover:text-foreground transition-colors">
              Categorias
            </a>
            <a href="#for-photographers" className="text-foreground/80 hover:text-foreground transition-colors">
              Para Fotógrafos
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-primary">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* User Menu */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <a href="/login">Entrar</a>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <a href="/dashboard">Vender Fotos</a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar fotos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/50 border-border/50"
            />
          </div>
        </div>
      </div>
    </header>
  );
};