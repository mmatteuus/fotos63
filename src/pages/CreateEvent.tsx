import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Upload, 
  Calendar,
  MapPin,
  Save,
  Eye,
  ArrowLeft,
  Plus,
  X,
  Image
} from "lucide-react";
import { Link } from "react-router-dom";

export const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    banner: null as File | null
  });
  
  const [uploadedPhotos, setUploadedPhotos] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const categories = [
    "Casamento",
    "Formatura", 
    "Aniversário",
    "Eventos Corporativos",
    "Esportes",
    "Shows e Festivais",
    "Família",
    "Outros"
  ];

  const handleInputChange = (field: string, value: string) => {
    setEventData(prev => ({ ...prev, [field]: value }));
  };

  const handleBannerUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setEventData(prev => ({ ...prev, banner: file }));
    }
  };

  const handlePhotosUpload = (files: FileList | null) => {
    if (files) {
      const newPhotos = Array.from(files).filter(file => 
        file.type.startsWith('image/')
      );
      setUploadedPhotos(prev => [...prev, ...newPhotos]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handlePhotosUpload(e.dataTransfer.files);
  };

  const removePhoto = (index: number) => {
    setUploadedPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (action: 'draft' | 'publish') => {
    // TODO: Implementar envio para API
    console.log('Salvando evento:', { ...eventData, photos: uploadedPhotos, action });
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
              <h1 className="text-xl font-semibold">Criar Evento</h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={() => handleSubmit('draft')}>
                <Save className="h-4 w-4 mr-2" />
                Salvar Rascunho
              </Button>
              <Button variant="hero" onClick={() => handleSubmit('publish')}>
                <Eye className="h-4 w-4 mr-2" />
                Publicar Evento
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Details */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Detalhes do Evento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Nome do Evento *</Label>
                  <Input
                    id="title"
                    placeholder="Ex: Casamento Marina & João"
                    value={eventData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva o evento..."
                    value={eventData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="bg-background/50 min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Data do Evento *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={eventData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Horário</Label>
                    <Input
                      id="time"
                      type="time"
                      value={eventData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Local</Label>
                  <Input
                    id="location"
                    placeholder="Ex: Igreja São José, Palmas - TO"
                    value={eventData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Categoria *</Label>
                  <Select onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Banner Upload */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5" />
                  Banner do Evento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border/50 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleBannerUpload}
                      className="hidden"
                      id="banner-upload"
                    />
                    <label htmlFor="banner-upload" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-foreground/70 mb-1">
                        Clique para fazer upload do banner
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG até 10MB (recomendado: 1200x600px)
                      </p>
                    </label>
                  </div>
                  {eventData.banner && (
                    <Badge variant="secondary" className="w-fit">
                      Banner: {eventData.banner.name}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Photos Upload */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Fotos do Evento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div 
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      isDragOver ? 'border-primary bg-primary/5' : 'border-border/50 hover:border-primary/50'
                    }`}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={() => setIsDragOver(true)}
                    onDragLeave={() => setIsDragOver(false)}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handlePhotosUpload(e.target.files)}
                      className="hidden"
                      id="photos-upload"
                    />
                    <label htmlFor="photos-upload" className="cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-lg font-medium mb-2">
                        Arraste as fotos ou clique para fazer upload
                      </p>
                      <p className="text-sm text-foreground/70 mb-1">
                        Múltiplas fotos suportadas
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG até 10MB cada
                      </p>
                    </label>
                  </div>

                  {uploadedPhotos.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-3">
                        {uploadedPhotos.length} foto(s) selecionada(s)
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {uploadedPhotos.map((photo, index) => (
                          <div key={index} className="relative bg-background/50 rounded-lg p-2">
                            <div className="aspect-square bg-muted rounded flex items-center justify-center mb-2">
                              <Camera className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <p className="text-xs text-foreground/70 truncate">
                              {photo.name}
                            </p>
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute -top-1 -right-1 h-6 w-6"
                              onClick={() => removePhoto(index)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preview */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  {eventData.banner ? (
                    <Badge variant="secondary">Banner carregado</Badge>
                  ) : (
                    <div className="text-center">
                      <Image className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Banner do evento</p>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {eventData.title || "Nome do Evento"}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-foreground/70 mb-2">
                    <Calendar className="h-3 w-3" />
                    {eventData.date || "Data não definida"}
                    {eventData.time && ` às ${eventData.time}`}
                  </div>
                  {eventData.location && (
                    <div className="flex items-center gap-2 text-sm text-foreground/70 mb-2">
                      <MapPin className="h-3 w-3" />
                      {eventData.location}
                    </div>
                  )}
                  {eventData.category && (
                    <Badge variant="outline" className="text-xs">
                      {eventData.category}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Dicas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-foreground/70">
                <div className="flex gap-2">
                  <Plus className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p>Use um título descritivo para o evento</p>
                </div>
                <div className="flex gap-2">
                  <Plus className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p>Adicione um banner atrativo de alta qualidade</p>
                </div>
                <div className="flex gap-2">
                  <Plus className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p>Inclua data, horário e local completos</p>
                </div>
                <div className="flex gap-2">
                  <Plus className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p>Organize as fotos por ordem de relevância</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};