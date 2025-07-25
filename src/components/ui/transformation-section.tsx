import { Card } from "@/components/ui/card";

export function TransformationSection() {
  return (
    <section className="py-20 bg-darker-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl mr-4">⚡</span>
            <h2 className="text-3xl md:text-5xl font-bold text-neon-green glow-animation">
              TRANSFORMAÇÃO COM SITES MODERNOS & ELEGANTES
            </h2>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* ANTES */}
          <Card className="p-8 bg-gradient-card border border-red-500/30 hover:border-red-500/50 transition-colors">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-red-400 mb-4">
                ANTES (Sem um site profissional)
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-400 mr-3 mt-1">❌</span>
                <span className="text-muted-foreground">Refém de templates genéricos e ultrapassados</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-400 mr-3 mt-1">❌</span>
                <span className="text-muted-foreground">Perdido com tantas opções baratas no mercado</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-400 mr-3 mt-1">❌</span>
                <span className="text-muted-foreground">Horas perdidas tentando fazer sozinho</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-400 mr-3 mt-1">❌</span>
                <span className="text-muted-foreground">Clientes em potencial fugindo para a concorrência</span>
              </div>
            </div>
          </Card>

          {/* DEPOIS */}
          <Card className="p-8 bg-gradient-card border border-neon-green/30 hover:border-neon-green/50 transition-colors shadow-neon">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-neon-green mb-4 glow-animation">
                DEPOIS (Com seu site moderno & elegante)
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-neon-green mr-3 mt-1">✅</span>
                <span className="text-foreground">Design único e exclusivo</span>
              </div>
              <div className="flex items-start">
                <span className="text-neon-green mr-3 mt-1">✅</span>
                <span className="text-foreground">Site profissional que transmite credibilidade</span>
              </div>
              <div className="flex items-start">
                <span className="text-neon-green mr-3 mt-1">✅</span>
                <span className="text-foreground">Mais tempo para focar na estratégia e vendas</span>
              </div>
              <div className="flex items-start">
                <span className="text-neon-green mr-3 mt-1">✅</span>
                <span className="text-foreground">Conversões altas e clientes impressionados</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}