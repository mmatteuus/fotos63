import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Camera, 
  Calendar,
  MapPin,
  Users,
  Heart,
  Share2,
  Search,
  Filter,
  Upload,
  ShoppingCart,
  Eye,
  Download,
  ArrowUp,
  Star,
  MapIcon
} from "lucide-react";
import { useParams, Link } from "react-router-dom";

export const EventDetail = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Mock event data
  const event = {
    id: 1,
    title: "Casamento Marina & João",
    description: "Uma cerimônia inesquecível realizada na Igreja São José, seguida de uma festa maravilhosa com a família e amigos mais próximos. O casal escolheu um estilo clássico e elegante para seu grande dia.",
    date: "2024-02-15",
    time: "16:00",
    location: "Igreja São José, Palmas - TO",
    category: "Casamento",
    photographer: {
      name: "Matheus Ferreira",
      avatar: "/api/placeholder/40/40",
      rating: 4.9,
      totalEvents: 127
    },
    banner: "/api/placeholder/1200/400",
    views: 1250,
    totalPhotos: 234
  };

  // Mock photos data
  const photos = [
    {
      id: 1,
      title: "Entrada da Noiva",
      price: 15.90,
      category: "Cerimônia",
      thumbnail: "/api/placeholder/300/300",
      views: 45,
      isWatermarked: true
    },
    {
      id: 2,
      title: "Troca de Alianças",
      price: 18.90,
      category: "Cerimônia",
      thumbnail: "/api/placeholder/300/300",
      views: 67,
      isWatermarked: true
    },
    {
      id: 3,
      title: "Primeiro Beijo",
      price: 22.90,
      category: "Cerimônia",
      thumbnail: "/api/placeholder/300/300",
      views: 89,
      isWatermarked: true
    },
    {
      id: 4,
      title: "Festa - Valsa dos Noivos",
      price: 16.90,
      category: "Festa",
      thumbnail: "/api/placeholder/300/300",
      views: 34,
      isWatermarked: true
    },
    {
      id: 5,
      title: "Buquê da Noiva",
      price: 12.90,
      category: "Detalhes",
      thumbnail: "/api/placeholder/300/300",
      views: 28,
      isWatermarked: true
    },
    {
      id: 6,
      title: "Decoração do Altar",
      price: 14.90,
      category: "Detalhes",
      thumbnail: "/api/placeholder/300/300",
      views: 19,
      isWatermarked: true
    }
  ];

  const categories = ["all", "Cerimônia", "Festa", "Detalhes", "Família"];
  const priceRanges = [
    { value: "all", label: "Todos os preços" },
    { value: "0-15", label: "Até R$ 15" },
    { value: "15-25", label: "R$ 15 - R$ 25" },
    { value: "25+", label: "Acima de R$ 25" }
  ];

  const filteredPhotos = photos.filter(photo => {
    const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || photo.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(p => p === "+" ? Infinity : parseFloat(p));
      matchesPrice = max ? (photo.price >= min && photo.price <= max) : photo.price >= min;
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const togglePhotoSelection = (photoId: number) => {
    setSelectedPhotos(prev => 
      prev.includes(photoId) 
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  const handleFaceSearch = () => {
    // TODO: Implementar busca facial
    console.log("Iniciando busca facial...");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Camera className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Fotos63
              </span>
            </Link>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Favoritar
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/cart">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Carrinho ({selectedPhotos.length})
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Event Hero */}
      <div className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.banner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  {event.category}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-foreground/70">
                  <Eye className="h-4 w-4" />
                  {event.views.toLocaleString()} visualizações
                </div>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
              
              <div className="flex flex-col md:flex-row gap-4 text-foreground/80">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  {formatDate(event.date)} às {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-primary" />
                  {event.totalPhotos} fotos disponíveis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Event Info */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Fotógrafo: {event.photographer.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {event.photographer.rating}
                      </div>
                      <span>{event.photographer.totalEvents} eventos fotografados</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Ver Perfil</Button>
                </div>
                
                <p className="text-foreground/80 leading-relaxed">{event.description}</p>
              </CardContent>
            </Card>

            {/* Face Search */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Busca por Reconhecimento Facial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-background/50 rounded-lg p-6 text-center">
                  <div className="max-w-md mx-auto">
                    <Camera className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">Encontre suas fotos facilmente</h4>
                    <p className="text-sm text-foreground/70 mb-4">
                      Faça upload de uma selfie e nossa IA encontrará todas as fotos onde você aparece
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="face-upload"
                      />
                      <label htmlFor="face-upload" className="flex-1">
                        <Button className="w-full" onClick={handleFaceSearch}>
                          <Upload className="h-4 w-4 mr-2" />
                          Fazer Upload da Selfie
                        </Button>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Search and Filters */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Buscar fotos..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-background/50"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Categoria</Label>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category === "all" ? "Todas" : category}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Preço</Label>
                      <div className="flex flex-wrap gap-2">
                        {priceRanges.map((range) => (
                          <Button
                            key={range.value}
                            variant={priceRange === range.value ? "default" : "outline"}
                            size="sm"
                            onClick={() => setPriceRange(range.value)}
                          >
                            {range.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photos Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  Fotos do Evento ({filteredPhotos.length})
                </h2>
                {selectedPhotos.length > 0 && (
                  <Button variant="hero">
                    Adicionar {selectedPhotos.length} ao Carrinho
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhotos.map((photo) => (
                  <Card 
                    key={photo.id} 
                    className={`bg-gradient-card border-border/50 cursor-pointer transition-all hover:scale-105 ${
                      selectedPhotos.includes(photo.id) ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => togglePhotoSelection(photo.id)}
                  >
                    <CardContent className="p-4">
                      <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                        <Camera className="h-8 w-8 text-muted-foreground" />
                        {photo.isWatermarked && (
                          <div className="absolute inset-0 bg-background/20 flex items-center justify-center">
                            <span className="text-foreground/50 font-bold text-lg transform -rotate-45">
                              FOTOS63
                            </span>
                          </div>
                        )}
                        {selectedPhotos.includes(photo.id) && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold">✓</span>
                          </div>
                        )}
                      </div>
                      
                      <h4 className="font-medium mb-2 line-clamp-2">{photo.title}</h4>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {photo.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-foreground/70">
                          <Eye className="h-3 w-3" />
                          {photo.views}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/30">
                        <span className="text-lg font-bold text-primary">
                          R$ {photo.price.toFixed(2)}
                        </span>
                        <Button size="sm" variant="outline">
                          Ver Detalhes
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Quick Info */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Informações do Evento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{formatDate(event.date)}</p>
                    <p className="text-sm text-foreground/70">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Local</p>
                    <p className="text-sm text-foreground/70">{event.location}</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full gap-2">
                  <MapIcon className="h-4 w-4" />
                  Ver no Mapa
                </Button>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-sm">
                      Como funciona a compra?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-foreground/70">
                      Selecione as fotos desejadas, adicione ao carrinho e finalize a compra. 
                      Você receberá as fotos em alta resolução sem marca d'água.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-sm">
                      Por quanto tempo as fotos ficam disponíveis?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-foreground/70">
                      As fotos ficam disponíveis por 90 dias após o evento. 
                      Recomendamos fazer o download logo após a compra.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-sm">
                      Posso usar a busca facial?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-foreground/70">
                      Sim! Faça upload de uma selfie e nossa IA encontrará todas as fotos 
                      onde você aparece no evento.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Dúvidas sobre este evento? Entre em contato com o fotógrafo.
                </p>
                <Button variant="outline" className="w-full">
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          variant="hero"
          size="icon"
          className="fixed bottom-6 right-6 z-50"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};