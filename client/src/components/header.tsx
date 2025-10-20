import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import logoImage from "@assets/WhatsApp Image 2025-07-31 at 20.55.22_1753980976790.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 border-b border-border backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src={logoImage} 
              alt="Vidolo Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-display font-bold text-primary text-sharp tracking-tight">Vidolo</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-foreground hover:text-warm-accent transition-colors font-medium text-sharp tracking-tight relative ${
                  isActiveLink(item.href) ? "text-warm-accent" : ""
                }`}
              >
                {item.name}
                {isActiveLink(item.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-warm-accent rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <img 
                      src={logoImage} 
                      alt="Vidolo Logo" 
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-xl font-display font-bold text-primary text-sharp tracking-tight">Vidolo</span>
                  </div>
                </div>
                <nav className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block py-2 px-4 rounded-lg hover:bg-warm-accent/10 hover:text-warm-accent transition-colors font-medium text-sharp tracking-tight ${
                        isActiveLink(item.href) ? "bg-warm-accent/10 text-warm-accent border-l-2 border-warm-accent" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
