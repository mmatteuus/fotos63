import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Share2, 
  Download, 
  ShoppingCart, 
  Star, 
  Camera, 
  Eye,
  Calendar,
  MapPin,
  Tag,
  ArrowLeft,
  MoreHorizontal,
  Shield,
  CheckCircle,
  Zap
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

export const PhotoDetail = () => {
  const { id } = useParams();
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock photo data
  const photo = {
    id: parseInt(id || "1"),
    title: "Casamento do Sol - Marina & João",
    description: "Uma cerimônia mágica ao pôr do sol, capturando todos os momentos especiais deste dia único. Fotos profissionais em alta resolução com edição artística.",
    photographer: {
      name: "Ana Silva",
      avatar: "AS",
      rating: 4.9,
      totalPhotos: 1250,
      joined: "2022",
      verified: true
    },
    price: 29.90,
    originalPrice: 39.90,
    category: "Casamentos",
    tags: ["casamento", "pôr do sol", "romântico", "cerimônia", "casal"],
    uploadDate: "2024-01-15",
    location: "Palmas, TO",
    downloads: 234,
    views: 1456,
    rating: 4.8,
    reviews: 23,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    specifications: {
      resolution: "6000x4000px",
      format: "JPG/RAW",
      size: "12.5 MB",
      camera: "Canon EOS R5",
      lens: "RF 70-200mm f/2.8",
      settings: "f/2.8, 1/500s, ISO 400"
    },
    license: "Uso comercial permitido",
    related: [
      { id: 2, title: "Casamento Clássico", price: 24.90, thumbnail: "/api/placeholder/200/150" },
      { id: 3, title: "Cerimônia Noturna", price: 34.90, thumbnail: "/api/placeholder/200/150" },
      { id: 4, title: "Festa de Casamento", price: 19.90, thumbnail: "/api/placeholder/200/150" }
    ]
  };

  const reviews = [
    {
      id: 1,
      user: "Carlos Lima",
      avatar: "CL",
      rating: 5,
      comment: "Foto incrível! Qualidade excepcional e entrega rápida.",
      date: "15/01/2024"
    },
    {
      id: 2,
      user: "Maria Santos",
      avatar: "MS",
      rating: 5,
      comment: "Exatamente o que eu estava procurando. Recomendo!",
      date: "14/01/2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur sticky top-0 z-50">
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
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsFavorited(!isFavorited)}
              >
                <Heart className={`h-5 w-5 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card className="overflow-hidden bg-gradient-card border-border/50">
              <div className="aspect-[4/3] relative bg-muted">
                {/* Main Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl font-bold text-primary/30 block mb-2">FOTOS63</span>
                    <span className="text-lg text-foreground/50">Prévia com marca d'água</span>
                  </div>
                </div>
                
                {/* Watermark */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                  Foto #{photo.id}
                </div>

                {/* Navigation */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {photo.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-3 h-3 rounded-full ${
                        selectedImage === index ? 'bg-primary' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* Photo Info */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6 space-y-6">
                {/* Title and Badges */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {photo.category}
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <CheckCircle className="h-3 w-3" />
                      Verificado
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Zap className="h-3 w-3" />
                      Download Instantâneo
                    </Badge>
                  </div>
                  <h1 className="text-3xl font-bold mb-2">{photo.title}</h1>
                  <p className="text-foreground/70 leading-relaxed">{photo.description}</p>
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Calendar className="h-4 w-4" />
                    <span>{photo.uploadDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <MapPin className="h-4 w-4" />
                    <span>{photo.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Eye className="h-4 w-4" />
                    <span>{photo.views} visualizações</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Download className="h-4 w-4" />
                    <span>{photo.downloads} downloads</span>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {photo.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                <div>
                  <h3 className="font-medium mb-3">Especificações Técnicas</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-foreground/70">Resolução:</span>
                      <p className="font-medium">{photo.specifications.resolution}</p>
                    </div>
                    <div>
                      <span className="text-foreground/70">Formato:</span>
                      <p className="font-medium">{photo.specifications.format}</p>
                    </div>
                    <div>
                      <span className="text-foreground/70">Tamanho:</span>
                      <p className="font-medium">{photo.specifications.size}</p>
                    </div>
                    <div>
                      <span className="text-foreground/70">Câmera:</span>
                      <p className="font-medium">{photo.specifications.camera}</p>
                    </div>
                    <div>
                      <span className="text-foreground/70">Lente:</span>
                      <p className="font-medium">{photo.specifications.lens}</p>
                    </div>
                    <div>
                      <span className="text-foreground/70">Config:</span>
                      <p className="font-medium">{photo.specifications.settings}</p>
                    </div>
                  </div>
                </div>

                {/* License */}
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="font-medium">Licença de Uso</span>
                  </div>
                  <p className="text-sm text-foreground/70">{photo.license}</p>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Avaliações ({photo.reviews})</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(photo.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="font-medium">{photo.rating}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{review.user}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-xs text-foreground/50">{review.date}</span>
                        </div>
                        <p className="text-sm text-foreground/70">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <Card className="bg-gradient-card border-border/50 sticky top-24">
              <CardContent className="p-6 space-y-6">
                {/* Price */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">
                      R$ {photo.price.toFixed(2)}
                    </span>
                    {photo.originalPrice && (
                      <span className="text-lg text-foreground/50 line-through">
                        R$ {photo.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  {photo.originalPrice && (
                    <Badge className="bg-green-500/20 text-green-600 border-green-500/30">
                      Economize R$ {(photo.originalPrice - photo.price).toFixed(2)}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button className="w-full gap-2" variant="hero" size="lg">
                    <ShoppingCart className="h-5 w-5" />
                    Adicionar ao Carrinho
                  </Button>
                  <Button className="w-full gap-2" variant="outline" size="lg">
                    <Zap className="h-5 w-5" />
                    Comprar Agora
                  </Button>
                </div>

                <Separator className="bg-border/50" />

                {/* Features */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Download em alta resolução
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Sem marca d'água
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Uso comercial permitido
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Suporte 24/7
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photographer Card */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary text-lg">
                      {photo.photographer.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{photo.photographer.name}</h4>
                      {photo.photographer.verified && (
                        <CheckCircle className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{photo.photographer.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{photo.photographer.totalPhotos.toLocaleString()} fotos</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    Ver Perfil
                  </Button>
                  <Button variant="ghost" className="w-full">
                    Seguir Fotógrafo
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Photos */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Fotos Relacionadas</h3>
                <div className="space-y-4">
                  {photo.related.map((related) => (
                    <Link 
                      key={related.id} 
                      to={`/photo/${related.id}`}
                      className="flex gap-3 hover:bg-background/50 rounded-lg p-2 transition-colors"
                    >
                      <div className="w-16 h-12 bg-muted rounded flex items-center justify-center flex-shrink-0">
                        <Camera className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">{related.title}</h4>
                        <p className="text-sm text-primary font-medium">
                          R$ {related.price.toFixed(2)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};