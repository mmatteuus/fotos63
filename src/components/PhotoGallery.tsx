import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, ShoppingCart, Star, Download, Filter, Search, Eye } from "lucide-react";

// Mock photo data
const photos = [
  {
    id: 1,
    title: "Casamento do Sol",
    photographer: "Ana Silva",
    price: 29.90,
    originalPrice: 39.90,
    category: "Casamentos",
    rating: 4.8,
    downloads: 234,
    watermarkUrl: "/api/placeholder/400/300",
    featured: true,
    tags: ["casamento", "pôr do sol", "romântico"]
  },
  {
    id: 2,
    title: "Corrida Matinal",
    photographer: "João Santos",
    price: 19.90,
    originalPrice: null,
    category: "Esportes",
    rating: 4.6,
    downloads: 189,
    watermarkUrl: "/api/placeholder/400/300",
    featured: false,
    tags: ["corrida", "esporte", "atletismo"]
  },
  {
    id: 3,
    title: "Retrato Artístico",
    photographer: "Maria Costa",
    price: 35.90,
    originalPrice: 49.90,
    category: "Retratos",
    rating: 4.9,
    downloads: 456,
    watermarkUrl: "/api/placeholder/400/300",
    featured: true,
    tags: ["retrato", "artístico", "preto e branco"]
  },
  {
    id: 4,
    title: "Paisagem do Cerrado",
    photographer: "Carlos Lima",
    price: 24.90,
    originalPrice: null,
    category: "Natureza",
    rating: 4.7,
    downloads: 321,
    watermarkUrl: "/api/placeholder/400/300",
    featured: false,
    tags: ["natureza", "cerrado", "paisagem"]
  },
  {
    id: 5,
    title: "Show de Rock",
    photographer: "Pedro Oliveira",
    price: 22.90,
    originalPrice: 32.90,
    category: "Eventos",
    rating: 4.5,
    downloads: 178,
    watermarkUrl: "/api/placeholder/400/300",
    featured: false,
    tags: ["show", "música", "rock"]
  },
  {
    id: 6,
    title: "Formatura UFTO",
    photographer: "Lucia Ferreira",
    price: 18.90,
    originalPrice: null,
    category: "Graduações",
    rating: 4.8,
    downloads: 567,
    watermarkUrl: "/api/placeholder/400/300",
    featured: true,
    tags: ["formatura", "educação", "conquista"]
  }
];

export const PhotoGallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (photoId: number) => {
    setFavorites(prev => 
      prev.includes(photoId) 
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  const filteredPhotos = photos.filter(photo => {
    const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         photo.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || photo.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="explore" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            <Eye className="h-3 w-3 mr-1" />
            Galeria Principal
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Descubra fotos
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
              incríveis
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Explore nossa coleção crescente de fotografias profissionais de eventos e momentos únicos.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gradient-card border border-border/50 rounded-2xl p-6 mb-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar fotos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as categorias</SelectItem>
                <SelectItem value="Casamentos">Casamentos</SelectItem>
                <SelectItem value="Esportes">Esportes</SelectItem>
                <SelectItem value="Natureza">Natureza</SelectItem>
                <SelectItem value="Retratos">Retratos</SelectItem>
                <SelectItem value="Eventos">Eventos</SelectItem>
                <SelectItem value="Graduações">Graduações</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Mais populares</SelectItem>
                <SelectItem value="recent">Mais recentes</SelectItem>
                <SelectItem value="price-low">Menor preço</SelectItem>
                <SelectItem value="price-high">Maior preço</SelectItem>
                <SelectItem value="rating">Melhor avaliadas</SelectItem>
              </SelectContent>
            </Select>

            {/* Filter Button */}
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filtros avançados
            </Button>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <Card key={photo.id} className="group overflow-hidden border-border/50 bg-gradient-card hover:shadow-elegant transition-all duration-300">
              <div className="relative overflow-hidden">
                {/* Photo */}
                <div className="aspect-[4/3] bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/30">FOTOS63</span>
                  </div>
                  {/* Watermark overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {photo.featured && (
                    <Badge className="bg-primary/90 text-primary-foreground text-xs">
                      Destaque
                    </Badge>
                  )}
                  {photo.originalPrice && (
                    <Badge className="bg-green-500/90 text-white text-xs">
                      Promoção
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-8 w-8 p-0"
                    onClick={() => toggleFavorite(photo.id)}
                  >
                    <Heart 
                      className={`h-4 w-4 ${favorites.includes(photo.id) ? 'fill-red-500 text-red-500' : ''}`} 
                    />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                {/* Title and Photographer */}
                <div className="mb-3">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-foreground/70">por {photo.photographer}</p>
                </div>

                {/* Rating and Downloads */}
                <div className="flex items-center justify-between mb-3 text-sm text-foreground/70">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{photo.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="h-3 w-3" />
                    <span>{photo.downloads}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">
                      R$ {photo.price.toFixed(2)}
                    </span>
                    {photo.originalPrice && (
                      <span className="text-sm text-foreground/50 line-through">
                        R$ {photo.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {photo.category}
                  </Badge>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full gap-2" variant="hero">
                  <ShoppingCart className="h-4 w-4" />
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Carregar mais fotos
          </Button>
        </div>
      </div>
    </section>
  );
};