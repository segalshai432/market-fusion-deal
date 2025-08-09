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
            <span className="text-xl font-bold text-foreground">BusinessConnect SA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#buy" className="text-muted-foreground hover:text-foreground transition-colors">
              Buy a Business
            </a>
            <a href="#sell" className="text-muted-foreground hover:text-foreground transition-colors">
              Sell a Business
            </a>
            <a href="#investors" className="text-muted-foreground hover:text-foreground transition-colors">
              Find Investors
            </a>
            <a href="#capital" className="text-muted-foreground hover:text-foreground transition-colors">
              Raise Capital
            </a>
            <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
              SA Business Resources
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="/auth">Login</a>
            </Button>
            <Button variant="hero" asChild>
              <a href="/auth">Get Started</a>
            </Button>
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
              <a href="#buy" className="text-muted-foreground hover:text-foreground transition-colors">
                Buy a Business
              </a>
              <a href="#sell" className="text-muted-foreground hover:text-foreground transition-colors">
                Sell a Business
              </a>
              <a href="#investors" className="text-muted-foreground hover:text-foreground transition-colors">
                Find Investors
              </a>
              <a href="#capital" className="text-muted-foreground hover:text-foreground transition-colors">
                Raise Capital
              </a>
              <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
                SA Business Resources
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start" asChild>
                  <a href="/auth">Login</a>
                </Button>
                <Button variant="hero" className="justify-start" asChild>
                  <a href="/auth">Get Started</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;