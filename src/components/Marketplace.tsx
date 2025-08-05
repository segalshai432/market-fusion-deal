import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import BusinessCard from "./BusinessCard";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Mock data for businesses
  const businesses = [
    {
      id: "1",
      name: "TechFlow Solutions",
      industry: "Technology",
      location: "San Francisco, CA",
      price: "$2.5M",
      revenue: "$1.2M",
      employees: 25,
      readinessScore: 92,
      established: "2019",
      description: "Leading SaaS platform for workflow automation",
      tags: ["SaaS", "B2B", "High-Growth", "Profitable"]
    },
    {
      id: "2",
      name: "Green Valley Organics",
      industry: "Agriculture",
      location: "Portland, OR",
      price: "$800K",
      revenue: "$650K",
      employees: 12,
      readinessScore: 78,
      established: "2017",
      description: "Organic food production and distribution company",
      tags: ["Organic", "Sustainable", "Growing", "B2C"]
    },
    {
      id: "3",
      name: "Urban Fitness Hub",
      industry: "Health & Fitness",
      location: "Austin, TX",
      price: "$1.2M",
      revenue: "$850K",
      employees: 18,
      readinessScore: 85,
      established: "2020",
      description: "Modern fitness center chain with digital integration",
      tags: ["Fitness", "Franchise", "Digital", "Expansion"]
    },
    {
      id: "4",
      name: "Craft Coffee Roasters",
      industry: "Food & Beverage",
      location: "Seattle, WA",
      price: "$450K",
      revenue: "$380K",
      employees: 8,
      readinessScore: 71,
      established: "2018",
      description: "Artisan coffee roasting with local retail presence",
      tags: ["Artisan", "Local", "Retail", "Established"]
    },
    {
      id: "5",
      name: "DataSecure Analytics",
      industry: "Technology",
      location: "Boston, MA",
      price: "$3.2M",
      revenue: "$2.1M",
      employees: 35,
      readinessScore: 88,
      established: "2016",
      description: "Cybersecurity and data analytics consulting firm",
      tags: ["Cybersecurity", "Consulting", "Enterprise", "Recurring"]
    },
    {
      id: "6",
      name: "EcoClean Services",
      industry: "Environmental",
      location: "Denver, CO",
      price: "$675K",
      revenue: "$520K",
      employees: 15,
      readinessScore: 82,
      established: "2019",
      description: "Eco-friendly commercial cleaning services",
      tags: ["Eco-Friendly", "Commercial", "Service", "Scalable"]
    }
  ];

  const industries = ["Technology", "Agriculture", "Health & Fitness", "Food & Beverage", "Environmental"];
  const locations = ["San Francisco, CA", "Portland, OR", "Austin, TX", "Seattle, WA", "Boston, MA", "Denver, CO"];

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = !selectedIndustry || business.industry === selectedIndustry;
    const matchesLocation = !selectedLocation || business.location === selectedLocation;
    
    return matchesSearch && matchesIndustry && matchesLocation;
  });

  return (
    <section id="marketplace" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Business Marketplace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover investment-ready businesses, from tech startups to established enterprises. Find your perfect acquisition or funding opportunity.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <SlidersHorizontal className="w-5 h-5 mr-2 text-accent" />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search businesses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Industries</SelectItem>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="professional" className="w-full">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-muted-foreground">
            Showing {filteredBusinesses.length} of {businesses.length} businesses
          </p>
          <Select defaultValue="readiness">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="readiness">Sort by Readiness Score</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="revenue">Revenue</SelectItem>
              <SelectItem value="newest">Newest Listed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Business Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBusinesses.map(business => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Businesses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;