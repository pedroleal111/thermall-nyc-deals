import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-hover rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <div className="text-xl font-bold text-foreground">
              ThermalNYC
            </div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#brands" className="text-foreground hover:text-primary transition-colors">
              Brands
            </a>
            <a href="#deals" className="text-foreground hover:text-primary transition-colors">
              Bulk Deals
            </a>
            <a href="#delivery" className="text-foreground hover:text-primary transition-colors">
              Fast Delivery
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Button 
              variant="default" 
              className="hidden md:flex"
              onClick={() => window.scrollTo({ top: document.getElementById('products')?.offsetTop || 0, behavior: 'smooth' })}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;