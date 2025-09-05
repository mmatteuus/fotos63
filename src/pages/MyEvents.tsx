import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Camera, 
  Plus,
  Search,
  Calendar,
  MapPin,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  Filter,
  ArrowLeft,
  Image,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

export const MyEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data
  const events = [
    {
      id: 1,
      title: "Casamento Marina & João",
      description: "Cerimônia religiosa seguida de festa",
      date: "2024-02-15",
      time: "16:00",
      location: "Igreja São José, Palmas - TO",
      category: "Casamento",
      status: "published",
      banner: "/api/placeholder/400/200",
      photosCount: 234,
      views: 1250,
      sales: 18,
      earnings: 1350.00,
      createdAt: "2024-01-10"
    },
    {
      id: 2,
      title: "Formatura Medicina UFT 2024",
      description: "Colação de grau da turma de Medicina",
      date: "2024-03-22",
      time: "19:00",
      location: "Teatro Fernanda Montenegro, Palmas - TO",
      category: "Formatura",
      status: "published",
      banner: "/api/placeholder/400/200",
      photosCount: 156,
      views: 890,
      sales: 12,
      earnings: 720.00,
      createdAt: "2024-01-20"
    },
    {
      id: 3,
      title: "Corrida Noturna Palmas",
      description: "5ª edição da corrida noturna",
      date: "2024-04-05",
      time: "18:30",
      location: "Orla de Palmas - TO",
      category: "Esportes",
      status: "draft",
      banner: "/api/placeholder/400/200",
      photosCount: 89,
      views: 0,
      sales: 0,
      earnings: 0,
      createdAt: "2024-02-01"
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || event.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Publicado</Badge>;
      case 'draft':
        return <Badge variant="outline">Rascunho</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Camera className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Fotos63
                </span>
              </Link>
              <div className="h-6 w-px bg-border/50"></div>
              <Link to="/dashboard" className="flex items-center gap-2 text-foreground/70 hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Dashboard
              </Link>
              <div className="h-6 w-px bg-border/50"></div>
              <h1 className="text-xl font-semibold">Meus Eventos</h1>
            </div>
            
            <Button variant="hero" asChild>
              <Link to="/create-event" className="gap-2">
                <Plus className="h-4 w-4" />
                Criar Evento
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Total Eventos</p>
                  <p className="text-2xl font-bold">{events.length}</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Total Fotos</p>
                  <p className="text-2xl font-bold">
                    {events.reduce((sum, event) => sum + event.photosCount, 0)}
                  </p>
                </div>
                <div className="bg-blue-500/10 p-3 rounded-xl">
                  <Image className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Visualizações</p>
                  <p className="text-2xl font-bold">
                    {events.reduce((sum, event) => sum + event.views, 0).toLocaleString()}
                  </p>
                </div>
                <div className="bg-purple-500/10 p-3 rounded-xl">
                  <Eye className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Vendas Totais</p>
                  <p className="text-2xl font-bold">
                    {events.reduce((sum, event) => sum + event.sales, 0)}
                  </p>
                </div>
                <div className="bg-green-500/10 p-3 rounded-xl">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="bg-gradient-card border-border/50 mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Buscar eventos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("all")}
                >
                  Todos
                </Button>
                <Button
                  variant={filterStatus === "published" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("published")}
                >
                  Publicados
                </Button>
                <Button
                  variant={filterStatus === "draft" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("draft")}
                >
                  Rascunhos
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.length === 0 ? (
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-12 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Nenhum evento encontrado</h3>
                <p className="text-foreground/70 mb-6">
                  {searchQuery ? "Tente ajustar sua busca" : "Crie seu primeiro evento para começar"}
                </p>
                <Button variant="hero" asChild>
                  <Link to="/create-event" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Criar Primeiro Evento
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            filteredEvents.map((event) => (
              <Card key={event.id} className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Event Banner */}
                    <div className="lg:w-64 flex-shrink-0">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <Image className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </div>

                    {/* Event Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{event.title}</h3>
                            {getStatusBadge(event.status)}
                          </div>
                          <p className="text-foreground/70 mb-3">{event.description}</p>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-foreground/70">
                              <Calendar className="h-4 w-4" />
                              {formatDate(event.date)} às {event.time}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground/70">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </div>
                            <Badge variant="outline" className="w-fit">
                              {event.category}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/event/${event.id}`}>
                              <Eye className="h-4 w-4 mr-1" />
                              Ver
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Editar
                          </Button>
                          <Button variant="outline" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border/30">
                        <div className="text-center">
                          <p className="text-lg font-semibold">{event.photosCount}</p>
                          <p className="text-xs text-foreground/70">Fotos</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-semibold">{event.views.toLocaleString()}</p>
                          <p className="text-xs text-foreground/70">Visualizações</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-semibold">{event.sales}</p>
                          <p className="text-xs text-foreground/70">Vendas</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-semibold text-green-400">
                            R$ {event.earnings.toFixed(2)}
                          </p>
                          <p className="text-xs text-foreground/70">Ganhos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};