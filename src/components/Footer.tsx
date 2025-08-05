import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">BusinessConnect</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Connecting SMEs with growth opportunities through our comprehensive digital marketplace for business transactions and funding.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>contact@businessconnect.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* For Sellers */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Sellers</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">List Your Business</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Readiness Assessment</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Valuation Tools</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Seller Resources</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* For Buyers */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Buyers & Investors</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Browse Businesses</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Investment Opportunities</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Due Diligence Tools</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Market Insights</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Buyer's Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Security & Trust</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 BusinessConnect. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;