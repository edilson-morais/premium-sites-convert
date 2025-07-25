import { Card } from "@/components/ui/card";

export function BenefitsSection() {
  const benefits = [
    "Site único e personalizado",
    "Design moderno e elegante", 
    "Alta velocidade de carregamento",
    "Otimização para conversões",
    "Suporte técnico premium",
    "Atualizações por 6 meses",
    "Treinamento completo"
  ];

  const results = [
    "Mais credibilidade",
    "Mais conversões", 
    "Mais vendas"
  ];

  return (
    <section className="py-20 bg-darker-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl mr-4">🎯</span>
            <h2 className="text-3xl md:text-5xl font-bold text-neon-green glow-animation">
              BENEFÍCIOS EXCLUSIVOS
            </h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* O que você terá */}
          <Card className="p-8 bg-gradient-card border border-neon-green/30 shadow-neon">
            <h3 className="text-2xl font-bold text-neon-green mb-6 text-center">
              O que você terá:
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-neon-green mr-3 text-xl">✓</span>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Resultados garantidos */}
          <Card className="p-8 bg-gradient-card border border-neon-green/30 shadow-neon">
            <h3 className="text-2xl font-bold text-neon-green mb-6 text-center">
              Resultados garantidos:
            </h3>
            
            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-neon-green/20 rounded-full mb-3">
                    <span className="text-neon-green text-2xl font-bold">⭐</span>
                  </div>
                  <p className="text-lg font-semibold text-foreground">{result}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Seção exclusividade */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-card border border-neon-green/30 text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl mr-4">🔐</span>
              <h3 className="text-2xl font-bold text-neon-green">
                POR QUE TRABALHO APENAS COM CLIENTES SELECIONADOS?
              </h3>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Minha filosofia:</h4>
              <blockquote className="text-lg text-neon-green italic font-medium glow-animation">
                "Prefiro criar 5 sites excepcionais por mês do que 50 sites mediocres."
              </blockquote>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  O que isso significa para você:
                </h4>
                <div className="space-y-2 text-left">
                  <div className="flex items-start">
                    <span className="text-neon-green mr-2">•</span>
                    <span className="text-muted-foreground">Atenção 100% dedicada ao seu projeto</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-neon-green mr-2">•</span>
                    <span className="text-muted-foreground">Qualidade sem compromissos</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-neon-green mr-2">•</span>
                    <span className="text-muted-foreground">Relacionamento próximo e personalizado</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-neon-green mr-2">•</span>
                    <span className="text-muted-foreground">Resultados que superam expectativas</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Vantagens exclusivas:
                </h4>
                <div className="space-y-2 text-left">
                  <div className="flex items-start">
                    <span className="text-neon-green mr-2">⭐</span>
                    <span className="text-muted-foreground">Acesso direto comigo durante todo o projeto</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-neon-green mr-2">⭐</span>
                    <span className="text-muted-foreground">Revisões ilimitadas até aprovação final</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-neon-green mr-2">⭐</span>
                    <span className="text-muted-foreground">Garantia de satisfação total</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-neon-green mr-2">⭐</span>
                    <span className="text-muted-foreground">Prioridade em atualizações e suporte</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}