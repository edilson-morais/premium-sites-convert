import { Card } from "@/components/ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Meu site anterior convertia 2%. Com o novo site, chegamos a 15% de conversão. O investimento se pagou em 30 dias.",
      author: "CEO, Consultoria Premium"
    },
    {
      text: "Nunca recebi tantos elogios sobre um site. Os clientes chegam até mim já impressionados, facilita muito o fechamento.",
      author: "Arquiteto de Luxo"
    },
    {
      text: "Design impecável, carregamento rápido e suporte excepcional. Exatamente o que minha marca precisava.",
      author: "Coach Executivo"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl mr-4">🏆</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              DEPOIMENTOS DE CLIENTES
            </h2>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border border-neon-green/30 hover:border-neon-green/50 transition-all duration-300 hover:shadow-neon group"
            >
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-neon-green text-4xl group-hover:glow-animation">⭐⭐⭐⭐⭐</span>
                </div>
                
                <blockquote className="text-lg text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t border-neon-green/20 pt-4">
                  <p className="font-semibold text-neon-green">
                    - {testimonial.author}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}