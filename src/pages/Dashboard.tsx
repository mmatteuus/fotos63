import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Camera, 
  Upload, 
  DollarSign, 
  Eye, 
  Download, 
  TrendingUp, 
  Users, 
  Star,
  Plus,
  MoreHorizontal,
  Settings,
  BarChart3,
  CalendarDays
} from "lucide-react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const stats = {
    totalPhotos: 127,
    totalSales: 89,
    totalEarnings: 2340.50,
    monthlyEarnings: 485.20,
    totalViews: 12453,
    conversionRate: 7.2
  };

  const recentPhotos = [
    {
      id: 1,
      title: "Casamento Marina & João",
      views: 234,
      sales: 12,
      earnings: 358.80,
      uploadDate: "2024-01-15",
      status: "published"
    },
    {
      id: 2,
      title: "Corrida Noturna Palmas",
      views: 189,
      sales: 8,
      earnings: 159.20,
      uploadDate: "2024-01-14",
      status: "published"
    },
    {
      id: 3,
      title: "Formatura Medicina UFT",
      views: 445,
      sales: 23,
      earnings: 434.70,
      uploadDate: "2024-01-13",
      status: "published"
    }
  ];

  const recentSales = [
    {
      id: 1,
      photoTitle: "Retrato Corporativo",
      buyer: "Ana Silva",
      amount: 29.90,
      date: "2024-01-15",
      commission: 7.47
    },
    {
      id: 2,
      photoTitle: "Evento Empresarial",
      buyer: "Carlos Lima",
      amount: 39.90,
      date: "2024-01-15",
      commission: 9.98
    }
  ];

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
              <h1 className="text-xl font-semibold">Dashboard do Fotógrafo</h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Settings className="h-4 w-4" />
                Configurações
              </Button>
              <Button variant="hero" size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Nova Foto
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <Card className="mb-8 bg-gradient-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Olá, Matheus! 👋</h2>
                <p className="text-foreground/70 mb-4">
                  Você teve {recentSales.length} vendas hoje. Continue o ótimo trabalho!
                </p>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Plano Pro • Comissão 25%
                </Badge>
              </div>
              <div className="text-right">
                <p className="text-sm text-foreground/70">Saldo disponível</p>
                <p className="text-3xl font-bold text-primary">R$ {stats.monthlyEarnings.toFixed(2)}</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Solicitar Saque
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Total de Fotos</p>
                  <p className="text-2xl font-bold">{stats.totalPhotos}</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Vendas Totais</p>
                  <p className="text-2xl font-bold">{stats.totalSales}</p>
                </div>
                <div className="bg-green-500/10 p-3 rounded-xl">
                  <DollarSign className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Visualizações</p>
                  <p className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</p>
                </div>
                <div className="bg-blue-500/10 p-3 rounded-xl">
                  <Eye className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Taxa Conversão</p>
                  <p className="text-2xl font-bold">{stats.conversionRate}%</p>
                </div>
                <div className="bg-purple-500/10 p-3 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="photos">Minhas Fotos</TabsTrigger>
            <TabsTrigger value="sales">Vendas</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Photos */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Fotos Recentes</CardTitle>
                  <Button variant="ghost" size="sm">Ver todas</Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPhotos.map((photo) => (
                    <div key={photo.id} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{photo.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-foreground/70">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {photo.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {photo.sales}
                          </span>
                          <span className="text-green-500 font-medium">
                            R$ {photo.earnings.toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Sales */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Vendas Recentes</CardTitle>
                  <Button variant="ghost" size="sm">Ver todas</Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentSales.map((sale) => (
                    <div key={sale.id} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{sale.photoTitle}</h4>
                        <p className="text-sm text-foreground/70">
                          Comprado por {sale.buyer} • {sale.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-500">+R$ {(sale.amount - sale.commission).toFixed(2)}</p>
                        <p className="text-xs text-foreground/70">de R$ {sale.amount.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Progress Section */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Meta Mensal</CardTitle>
                <p className="text-sm text-foreground/70">
                  Você está a {(1000 - stats.monthlyEarnings).toFixed(2)} de atingir sua meta de R$ 1.000,00
                </p>
              </CardHeader>
              <CardContent>
                <Progress 
                  value={(stats.monthlyEarnings / 1000) * 100} 
                  className="h-3 mb-2"
                />
                <div className="flex justify-between text-sm text-foreground/70">
                  <span>R$ {stats.monthlyEarnings.toFixed(2)}</span>
                  <span>R$ 1.000,00</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Minhas Fotos ({stats.totalPhotos})</CardTitle>
                <Button variant="hero" className="gap-2">
                  <Upload className="h-4 w-4" />
                  Upload Nova Foto
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recentPhotos.map((photo) => (
                    <div key={photo.id} className="bg-background/50 rounded-lg p-4">
                      <div className="aspect-[4/3] bg-muted rounded-lg mb-3 flex items-center justify-center">
                        <Camera className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h4 className="font-medium mb-2">{photo.title}</h4>
                      <div className="flex items-center justify-between text-sm text-foreground/70">
                        <span>{photo.views} visualizações</span>
                        <Badge variant="secondary" className="text-xs">
                          {photo.status === 'published' ? 'Publicada' : 'Rascunho'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sales Tab */}
          <TabsContent value="sales">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Histórico de Vendas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSales.map((sale) => (
                    <div key={sale.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <Camera className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium">{sale.photoTitle}</h4>
                          <p className="text-sm text-foreground/70">
                            Vendido para {sale.buyer}
                          </p>
                          <p className="text-xs text-foreground/50">{sale.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-500">+R$ {(sale.amount - sale.commission).toFixed(2)}</p>
                        <p className="text-xs text-foreground/70">
                          Comissão: R$ {sale.commission.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Performance Mensal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-foreground/50">
                    Gráfico de performance (integração futura)
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Top Categorias
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { category: "Casamentos", sales: 34, percentage: 45 },
                    { category: "Esportes", sales: 28, percentage: 35 },
                    { category: "Eventos", sales: 27, percentage: 20 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.category}</span>
                        <span>{item.sales} vendas</span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};