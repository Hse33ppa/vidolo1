import { Link } from "wouter";
import logoImage from "@assets/WhatsApp Image 2025-07-31 at 20.55.22_1753980976790.jpeg";


const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Get Involved", href: "/get-involved" },
  ];

  return (
    <footer className="gradient-border-b bg-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logoImage} 
                alt="Vidolo Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-display font-bold text-primary text-sharp tracking-tight">Vidolo</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md text-sharp">
              Empowering underprivileged students through public speaking workshops and educational opportunities worldwide.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold text-primary mb-4 text-sharp tracking-tight">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sharp font-medium tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold text-primary mb-4 text-sharp tracking-tight">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="text-sharp font-medium tracking-tight">vidologlobal@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Credit */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground text-sharp font-medium">
            Made by Adithyanarayan Rajesh, Global CTO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
