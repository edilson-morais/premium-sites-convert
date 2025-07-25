import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-web-design.jpg";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Grid overlay for tech effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(90,255,124,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(90,255,124,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="w-2 h-2 bg-neon-green rounded-full absolute top-1/4 left-1/4 animate-float opacity-60" />
        <div className="w-1 h-1 bg-neon-green-glow rounded-full absolute top-1/3 right-1/3 animate-float delay-1000 opacity-40" />
        <div className="w-3 h-3 bg-neon-green rounded-full absolute bottom-1/4 right-1/4 animate-float delay-2000 opacity-50" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          
          {/* Badge exclusivo */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-card border border-neon-green/30 mb-8">
            <span className="text-sm font-medium text-neon-green glow-animation">
              SERVIÇO PREMIUM EXCLUSIVO
            </span>
          </div>

          {/* Headline principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">PARE DE PERDER</span>
            <br />
            <span className="text-neon-green glow-animation">CLIENTES</span>
            <br />
            <span className="text-foreground">PARA SITES FEIOS</span>
          </h1>

          {/* Subheadline */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-muted-foreground">
            TENHA UM SITE QUE TRANSFORMA VISITANTES EM CLIENTES
          </h2>

          {/* Descrição principal */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl mr-4">🎨</span>
              <h3 className="text-xl font-bold text-neon-green">APRESENTAÇÃO DO SERVIÇO</h3>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              O primeiro serviço de criação de sites premium do mercado com design de elite à sua disposição, 
              24 horas por dia, 7 dias por semana, em um único profissional.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Eu faço o trabalho técnico e complexo enquanto você foca no que interessa para colocar mais dinheiro no bolso.
            </p>
          </div>

          {/* CTA Principal */}
          <Card className="inline-block p-8 bg-gradient-card border border-neon-green/30 shadow-neon">
            <div className="mb-6">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl mr-3">📅</span>
                <h3 className="text-xl font-bold text-neon-green">INFORMAÇÕES DA OFERTA ESPECIAL</h3>
              </div>
              
              <div className="space-y-2 text-left max-w-md mx-auto mb-6">
                <div className="flex items-center">
                  <span className="text-neon-green mr-2">*</span>
                  <span className="text-foreground">Disponibilidade: Limitada - Apenas 5 projetos por mês</span>
                </div>
                <div className="flex items-center">
                  <span className="text-neon-green mr-2">*</span>
                  <span className="text-foreground">Público: Exclusivo para empreendedores sérios</span>
                </div>
                <div className="flex items-center">
                  <span className="text-neon-green mr-2">*</span>
                  <span className="text-foreground">Contato: Consulta estratégica gratuita</span>
                </div>
              </div>
            </div>

            <Button 
              onClick={onCTAClick}
              size="lg"
              className="w-full md:w-auto px-12 py-4 bg-neon-green hover:bg-neon-green-glow text-darker-surface font-bold text-lg rounded-xl shadow-intense hover:shadow-neon transition-all duration-300 pulse-neon"
            >
              AGENDAR CONSULTA GRATUITA
            </Button>
          </Card>

          {/* Proposta de valor */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-neon-green mb-4">Proposta de Valor</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Não é sobre criar sites genéricos. É sobre amplificar sua presença digital com designs que convertem 
              visitantes em clientes, enquanto você foca no que realmente importa: fazer seu negócio crescer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}