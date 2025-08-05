import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, DollarSign, TrendingUp, Users, Calendar, Star } from "lucide-react";

interface BusinessCardProps {
  business: {
    id: string;
    name: string;
    industry: string;
    location: string;
    price: string;
    revenue: string;
    employees: number;
    readinessScore: number;
    established: string;
    description: string;
    image?: string;
    tags: string[];
  };
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 80) return "default";
    if (score >= 60) return "secondary";
    return "destructive";
  };

  return (
    <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group">
      <CardHeader className="p-0">
        <div className="h-48 bg-gradient-to-br from-muted to-muted/50 rounded-t-lg flex items-center justify-center relative overflow-hidden">
          {business.image ? (
            <img src={business.image} alt={business.name} className="w-full h-full object-cover" />
          ) : (
            <div className="text-muted-foreground text-6xl opacity-20">
              <Users />
            </div>
          )}
          <div className="absolute top-4 right-4">
            <Badge variant={getScoreBadgeVariant(business.readinessScore)} className="font-semibold">
              <Star className="w-3 h-3 mr-1" />
              {business.readinessScore}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            {business.name}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">{business.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {business.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              {business.location}
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              Est. {business.established}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm">
              <DollarSign className="w-4 h-4 mr-2 text-accent" />
              <div>
                <div className="font-semibold text-foreground">{business.price}</div>
                <div className="text-muted-foreground text-xs">Asking Price</div>
              </div>
            </div>
            
            <div className="flex items-center text-sm">
              <TrendingUp className="w-4 h-4 mr-2 text-accent" />
              <div>
                <div className="font-semibold text-foreground">{business.revenue}</div>
                <div className="text-muted-foreground text-xs">Annual Revenue</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="w-4 h-4 mr-2" />
              {business.employees} employees
            </div>
            <div className={`text-sm font-semibold ${getScoreColor(business.readinessScore)}`}>
              Readiness: {business.readinessScore}/100
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="professional" size="sm" className="flex-1">
            View Details
          </Button>
          <Button variant="hero" size="sm" className="flex-1">
            Express Interest
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessCard;