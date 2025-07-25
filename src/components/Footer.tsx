import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg">T</span>
              </div>
              <div className="text-xl font-bold">ThermalNYC</div>
            </div>
            <p className="text-background/80">
              New York's premier destination for premium thermos flasks and insulated bottles. 
              Fast delivery, unbeatable prices, guaranteed satisfaction.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <span className="sr-only">Facebook</span>
                f
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <span className="sr-only">Instagram</span>
                i
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <span className="sr-only">Twitter</span>
                t
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#products" className="hover:text-primary transition-colors">All Products</a></li>
              <li><a href="#brands" className="hover:text-primary transition-colors">Top Brands</a></li>
              <li><a href="#deals" className="hover:text-primary transition-colors">Bulk Deals</a></li>
              <li><a href="#delivery" className="hover:text-primary transition-colors">Delivery Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Customer Reviews</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Customer Service</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Broadway, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@thermalnyc.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 ThermalNYC. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center space-x-6 text-sm text-background/80">
              <span>🚚 Same-day NYC delivery</span>
              <span>💰 Price match guarantee</span>
              <span>🛡️ Secure checkout</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;