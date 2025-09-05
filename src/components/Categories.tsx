import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Camera, MapPin } from "lucide-react";
import categoryWedding from "@/assets/category-wedding.jpg";
import categorySports from "@/assets/category-sports.jpg";
import categoryNature from "@/assets/category-nature.jpg";
import categoryPortrait from "@/assets/category-portrait.jpg";

const categories = [
  {
    id: 1,
    name: "Casamentos",
    description: "Momentos únicos e emocionantes",
    image: categoryWedding,
    photoCount: 450,
    featured: true,
    color: "bg-pink-500/10 text-pink-500 border-pink-500/30"
  },
  {
    id: 2,
    name: "Esportes",
    description: "Ação e adrenalina capturada",
    image: categorySports,
    photoCount: 320,
    featured: false,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/30"
  },
  {
    id: 3,
    name: "Natureza",
    description: "Paisagens e vida selvagem",
    image: categoryNature,
    photoCount: 275,
    featured: true,
    color: "bg-green-500/10 text-green-500 border-green-500/30"
  },
  {
    id: 4,
    name: "Retratos",
    description: "Personalidade em cada clique",
    image: categoryPortrait,
    photoCount: 180,
    featured: false,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/30"
  },
];

export const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            <Camera className="h-3 w-3 mr-1" />
            Categorias Populares
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Encontre o que você
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
              procura
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Explore nossa coleção organizada por categorias para encontrar exatamente 
            o tipo de fotografia que você está buscando.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer overflow-hidden border-border/50 bg-gradient-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Featured Badge */}
                {category.featured && (
                  <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground">
                    Destaque
                  </Badge>
                )}

                {/* Category Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-white/80 mb-2">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70 flex items-center">
                      <Camera className="h-3 w-3 mr-1" />
                      {category.photoCount} fotos
                    </span>
                    <Heart className="h-4 w-4 text-white/70 hover:text-red-400 transition-colors" />
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <Badge className={`${category.color} text-xs`}>
                  Ver todas
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {[
            "Eventos Corporativos",
            "Festas",
            "Graduações",
            "Aniversários",
            "Shows",
            "Corridas"
          ].map((category, index) => (
            <Card key={index} className="p-4 text-center hover:shadow-glow transition-all duration-300 cursor-pointer bg-gradient-card border-border/50">
              <CardContent className="p-0">
                <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-medium text-sm">{category}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};