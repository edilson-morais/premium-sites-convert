import { Card } from "@/components/ui/card";

export function PortfolioSection() {
  const services = [
    {
      category: "🏢 SITES CORPORATIVOS",
      icon: "🏢",
      items: [
        { name: "Landing Pages de Alta Conversão", desc: "Páginas que vendem enquanto você dorme" },
        { name: "Sites Institucionais Premium", desc: "Credibilidade e autoridade em cada pixel" },
        { name: "Portfólios Executivos", desc: "Destaque-se da concorrência com elegância" },
        { name: "Sites de Consultoria", desc: "Transmita expertise e conquiste clientes premium" }
      ]
    },
    {
      category: "💼 E-COMMERCE & VENDAS",
      icon: "💼",
      items: [
        { name: "Lojas Virtuais Modernas", desc: "Design que aumenta ticket médio" },
        { name: "Páginas de Vendas VSL", desc: "Converta visitantes em compradores" },
        { name: "Checkout Otimizado", desc: "Reduza abandono de carrinho" },
        { name: "Funis de Vendas Visuais", desc: "Jornada do cliente perfeita" }
      ]
    },
    {
      category: "🎨 DESIGN & EXPERIÊNCIA",
      icon: "🎨",
      items: [
        { name: "UI/UX Profissional", desc: "Interface intuitiva e envolvente" },
        { name: "Design Responsivo Premium", desc: "Perfeito em todos os dispositivos" },
        { name: "Animações Sofisticadas", desc: "Movimento que encanta e engaja" },
        { name: "Tipografia Exclusiva", desc: "Personalidade única para sua marca" }
      ]
    },
    {
      category: "🚀 PERFORMANCE & TECNOLOGIA",
      icon: "🚀",
      items: [
        { name: "Sites Ultra-Rápidos", desc: "Carregamento em menos de 2 segundos" },
        { name: "SEO Avançado", desc: "Apareça no topo do Google" },
        { name: "Integrações Complexas", desc: "CRM, automações e ferramentas premium" },
        { name: "Segurança Máxima", desc: "Proteção total para seu negócio" }
      ]
    },
    {
      category: "📱 MOBILE & SOCIAL",
      icon: "📱",
      items: [
        { name: "Progressive Web Apps", desc: "App nativo sem complicação" },
        { name: "Integração Social Media", desc: "Conecte todos seus canais" },
        { name: "WhatsApp Business", desc: "Vendas diretas pelo site" },
        { name: "Stories Integrados", desc: "Conte sua história de forma envolvente" }
      ]
    },
    {
      category: "📊 ANALYTICS & CONVERSÃO",
      icon: "📊",
      items: [
        { name: "Heatmaps e Comportamento", desc: "Entenda seus visitantes" },
        { name: "A/B Testing Profissional", desc: "Otimize constantemente" },
        { name: "Pixel de Conversão", desc: "Rastreie cada venda" },
        { name: "Relatórios Executivos", desc: "Dados que geram insights" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl mr-4">🎯</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              PORTFÓLIO DE SOLUÇÕES
            </h2>
          </div>
          <p className="text-xl text-neon-green font-semibold glow-animation">
            (Especializações Premium)
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border border-neon-green/20 hover:border-neon-green/40 transition-all duration-300 hover:shadow-neon group"
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-neon-green mb-2 group-hover:glow-animation transition-all">
                  {service.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-2 border-neon-green/30 pl-4 py-2">
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}