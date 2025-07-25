interface FooterProps {
  companyDescription?: string;
  copyright?: string;
  developerName?: string;
  email?: string;
  companyName?: string;
  termsLink?: string;
  privacyLink?: string;
}

const Footer = ({
  companyDescription = "A Comunidade suzano express não é uma empresa associada ao WhatsApp INC, Facebook INC, META ou qualquer uma de suas empresas, e não possui relação comercial ou consentimento para uso.",
  copyright = "Copyright © 2025. Desenvolvido por Edilson Morais. Ao fazer seu cadastro em nosso site, você concorda com os nossos Termos de Uso e Política de Privacidade.",
  developerName = "Edilson Morais",
  email = "edilsomdil@gmail.com",
  companyName = "suzano express",
  termsLink = "#",
  privacyLink = "#"
}: FooterProps) => {
  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        {/* Company Description */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {companyDescription}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {copyright}
          </p>
        </div>

        {/* Company Logo/Name */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary glow-text">
            {companyName}
          </h3>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-8 mb-8">
          <a 
            href={termsLink}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Termos de Uso
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href={privacyLink}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Política de Privacidade
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 pt-8">
          <div className="text-center space-y-4">
            <p className="text-sm">
              <span className="text-muted-foreground">Todos os direitos reservados – </span>
              <span className="text-primary font-semibold">{developerName} 2025</span>
            </p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>📧</span>
              <span>Contato:</span>
              <a 
                href={`mailto:${email}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {email}
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Desenvolvido por{" "}
              <span className="text-primary font-semibold">{developerName}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };