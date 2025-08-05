import { Button } from "@/components/ui/button";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-foreground">BusinessConnect</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#marketplace" className="text-muted-foreground hover:text-foreground transition-colors">
              Marketplace
            </a>
            <a href="#sellers" className="text-muted-foreground hover:text-foreground transition-colors">
              For Sellers
            </a>
            <a href="#buyers" className="text-muted-foreground hover:text-foreground transition-colors">
              For Buyers
            </a>
            <a href="#investors" className="text-muted-foreground hover:text-foreground transition-colors">
              For Investors
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button variant="hero">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#marketplace" className="text-muted-foreground hover:text-foreground transition-colors">
                Marketplace
              </a>
              <a href="#sellers" className="text-muted-foreground hover:text-foreground transition-colors">
                For Sellers
              </a>
              <a href="#buyers" className="text-muted-foreground hover:text-foreground transition-colors">
                For Buyers
              </a>
              <a href="#investors" className="text-muted-foreground hover:text-foreground transition-colors">
                For Investors
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start">Login</Button>
                <Button variant="hero" className="justify-start">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;