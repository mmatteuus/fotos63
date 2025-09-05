import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Camera, Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria integrado com o backend
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <Camera className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Fotos63
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}
          </h1>
          <p className="text-foreground/70">
            {isLogin 
              ? "Entre para acessar suas fotos e vendas" 
              : "Junte-se à maior plataforma de fotos do Tocantins"
            }
          </p>
        </div>

        {/* Form Card */}
        <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl">
              {isLogin ? "Entrar na conta" : "Criar conta"}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field (only for register) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Nome completo
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 bg-background/50"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Email field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 bg-background/50"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 bg-background/50"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password field (only for register) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirmar senha
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirme sua senha"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="pl-10 bg-background/50"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Remember me / Forgot password */}
              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-foreground/70">Lembrar de mim</span>
                  </label>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    Esqueci minha senha
                  </a>
                </div>
              )}

              {/* Terms (only for register) */}
              {!isLogin && (
                <div className="flex items-start space-x-2 text-sm">
                  <input type="checkbox" className="rounded mt-1" required />
                  <span className="text-foreground/70">
                    Eu concordo com os{" "}
                    <a href="#" className="text-primary hover:text-primary/80">
                      Termos de Uso
                    </a>{" "}
                    e{" "}
                    <a href="#" className="text-primary hover:text-primary/80">
                      Política de Privacidade
                    </a>
                  </span>
                </div>
              )}

              {/* Submit button */}
              <Button type="submit" className="w-full" variant="hero" size="lg">
                {isLogin ? "Entrar" : "Criar conta"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </form>

            <Separator className="bg-border/50" />

            {/* Switch between login/register */}
            <div className="text-center">
              <p className="text-sm text-foreground/70">
                {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  {isLogin ? "Criar conta" : "Fazer login"}
                </button>
              </p>
            </div>

            {/* Benefits (only for register) */}
            {!isLogin && (
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Ao criar sua conta você terá:
                </h4>
                <ul className="space-y-2 text-xs text-foreground/70">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Acesso a milhares de fotos profissionais
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Download em alta resolução
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Busca por reconhecimento facial
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Suporte 24/7
                  </li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Back to home */}
        <div className="text-center mt-6">
          <Link 
            to="/" 
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            ← Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
};