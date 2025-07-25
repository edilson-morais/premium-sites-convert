import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CTASectionProps {
  onCTAClick: () => void;
}

export function CTASection({ onCTAClick }: CTASectionProps) {
  return (
    <section className="py-20 bg-darker-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Processo exclusivo */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl mr-4">📞</span>
              <h2 className="text-3xl md:text-5xl font-bold text-neon-green glow-animation">
                COMO GARANTIR SEU PROJETO
              </h2>
            </div>
          </div>

          <Card className="p-8 bg-gradient-card border border-neon-green/30 mb-12">
            <h3 className="text-2xl font-bold text-neon-green mb-6 text-center">
              Processo exclusivo:
            </h3>
            
            <div className="grid md:grid-cols-5 gap-4">
              {[
                "1. Consulta Estratégica Gratuita (60 minutos)",
                "2. Análise Completa do Seu Negócio", 
                "3. Proposta Personalizada",
                "4. Desenvolvimento Premium",
                "5. Lançamento e Otimização"
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-neon-green/20 rounded-full mb-3">
                    <span className="text-neon-green font-bold">{index + 1}</span>
                  </div>
                  <p className="text-sm text-foreground">{step.split('. ')[1]}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Investimento e garantias */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Investimento */}
            <Card className="p-6 bg-gradient-card border border-neon-green/30">
              <h3 className="text-xl font-bold text-neon-green mb-4 text-center">
                Investimento:
              </h3>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground mb-2">
                  A partir de R$ 8.900
                </p>
                <p className="text-lg text-neon-green mb-2">em até 12x</p>
                <p className="text-sm text-muted-foreground">
                  Valor pode variar conforme complexidade e funcionalidades
                </p>
              </div>
            </Card>

            {/* Garantias */}
            <Card className="p-6 bg-gradient-card border border-neon-green/30">
              <h3 className="text-xl font-bold text-neon-green mb-4 text-center">
                Garantias:
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-neon-green mr-2">✅</span>
                  <span className="text-foreground">30 dias para aprovação final</span>
                </div>
                <div className="flex items-center">
                  <span className="text-neon-green mr-2">✅</span>
                  <span className="text-foreground">Satisfação 100% garantida</span>
                </div>
                <div className="flex items-center">
                  <span className="text-neon-green mr-2">✅</span>
                  <span className="text-foreground">Suporte por 6 meses incluído</span>
                </div>
                <div className="flex items-center">
                  <span className="text-neon-green mr-2">✅</span>
                  <span className="text-foreground">Entrega em até 15 dias úteis</span>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Final */}
          <Card className="p-8 bg-gradient-card border border-neon-green/30 text-center shadow-intense">
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl mr-4">🚀</span>
              <h3 className="text-2xl font-bold text-neon-green glow-animation">
                AGENDE SUA CONSULTA GRATUITA
              </h3>
            </div>
            
            <blockquote className="text-xl text-foreground italic mb-8 font-medium">
              "Sua presença digital é o cartão de visitas do século XXI. Faça valer cada visita."
            </blockquote>

            <div className="mb-8">
              <p className="text-lg text-neon-green font-semibold mb-4">Reserve sua vaga hoje:</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span>📱 WhatsApp: (XX) XXXXX-XXXX</span>
                <span>📧 E-mail: contato@seudominio.com</span>
                <span>🌐 Calendário: [Link para agendamento]</span>
              </div>
            </div>

            <Button 
              onClick={onCTAClick}
              size="lg"
              className="px-12 py-4 bg-neon-green hover:bg-neon-green-glow text-darker-surface font-bold text-lg rounded-xl shadow-intense hover:shadow-neon transition-all duration-300 pulse-neon mb-6"
            >
              QUERO MINHA CONSULTA GRATUITA AGORA
            </Button>

            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 font-semibold">
                <span className="font-bold">Atenção:</span> Devido à alta demanda e qualidade Premium, 
                aceito apenas 5 projetos por mês. Garante já sua vaga para não ficar na lista de espera.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}