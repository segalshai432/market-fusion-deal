import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Store, 
  ShoppingCart, 
  Rocket, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Users,
  DollarSign,
  Shield,
  Zap
} from "lucide-react";

const UserTypes = () => {
  const userTypes = [
    {
      icon: Store,
      title: "Business Sellers",
      subtitle: "Ready to exit? We'll help you maximize value",
      description: "Get your business acquisition-ready with our comprehensive preparation platform.",
      features: [
        "Free business readiness assessment",
        "Professional valuation guidance", 
        "Pre-qualified buyer matching",
        "Transaction support & guidance"
      ],
      cta: "List Your Business",
      variant: "default" as const,
      color: "accent"
    },
    {
      icon: ShoppingCart,
      title: "Business Buyers", 
      subtitle: "Find your next acquisition opportunity",
      description: "Access vetted businesses with comprehensive due diligence materials ready for review.",
      features: [
        "Curated business opportunities",
        "Detailed financial analysis",
        "Direct seller communication",
        "Secure transaction processing"
      ],
      cta: "Browse Businesses",
      variant: "professional" as const,
      color: "primary"
    },
    {
      icon: Rocket,
      title: "Entrepreneurs",
      subtitle: "Seeking growth capital for expansion", 
      description: "Connect with investors who understand your vision and can fuel your growth journey.",
      features: [
        "Investor network access",
        "Pitch deck optimization",
        "Funding readiness scoring",
        "Growth strategy support"
      ],
      cta: "Raise Capital",
      variant: "hero" as const,
      color: "success"
    },
    {
      icon: TrendingUp,
      title: "Investors",
      subtitle: "Discover high-potential SME investments",
      description: "Access pre-screened investment opportunities with transparent financials and growth potential.",
      features: [
        "Deal flow pipeline",
        "Risk assessment tools", 
        "Portfolio management",
        "Exit strategy planning"
      ],
      cta: "View Opportunities",
      variant: "success" as const,
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Built for Every Stakeholder
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're looking to buy, sell, fund, or invest in businesses, BusinessConnect provides the tools and network you need to succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {userTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-accent/20">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${type.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 text-${type.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {type.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {type.subtitle}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={type.variant} 
                    className="w-full group-hover:shadow-lg transition-all duration-300"
                  >
                    {type.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-16">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Secure & Verified</h4>
            <p className="text-sm text-muted-foreground">All users undergo identity verification</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Expert Network</h4>
            <p className="text-sm text-muted-foreground">Access to legal, financial, and business experts</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Transparent Pricing</h4>
            <p className="text-sm text-muted-foreground">No hidden fees, clear pricing structure</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Fast Transactions</h4>
            <p className="text-sm text-muted-foreground">Average deal closure in 45 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTypes;