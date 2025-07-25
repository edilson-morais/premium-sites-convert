import { HeroSection } from "@/components/ui/hero-section";
import { TransformationSection } from "@/components/ui/transformation-section";
import { PortfolioSection } from "@/components/ui/portfolio-section";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { CTASection } from "@/components/ui/cta-section";
import { useToast } from "@/hooks/use-toast";

const LandingPage = () => {
  const { toast } = useToast();

  const handleCTAClick = () => {
    toast({
      title: "Consulta Agendada!",
      description: "Em breve entraremos em contato para agendar sua consulta estratégica gratuita.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onCTAClick={handleCTAClick} />
      <TransformationSection />
      <PortfolioSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection onCTAClick={handleCTAClick} />
    </div>
  );
};

export default LandingPage;