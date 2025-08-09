import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="South African business professionals connecting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Connect, Trade & Fund
              <span className="text-accent block">Business Success in South Africa</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              The South African marketplace where SMEs meet their perfect match - whether it's a buyer, seller, investor, or growth partner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Explore SA Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                List Your SA Business
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-white/80">Businesses Listed in SA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">R950M+</div>
                <div className="text-white/80">Transactions in SA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/95 backdrop-blur border-0 shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Smart SA Valuation</h3>
                  <p className="text-muted-foreground">AI-powered business readiness scoring and valuation for the South African market.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur border-0 shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Verified SA Network</h3>
                  <p className="text-muted-foreground">Connect with pre-qualified South African buyers, sellers, and investors.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur border-0 shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Secure SA Transactions</h3>
                  <p className="text-muted-foreground">End-to-end encrypted negotiations and secure payment processing in Rands.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur border-0 shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Fast SA Process</h3>
                  <p className="text-muted-foreground">Streamlined workflows reduce deal time by 60% for South African businesses.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;