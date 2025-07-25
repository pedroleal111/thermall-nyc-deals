import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, DollarSign, Star } from "lucide-react";
import heroImage from "@/assets/hero-thermos.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/30 to-muted py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                🏆 #1 Thermos Store in NYC
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Premium <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Thermos Flasks</span> for Every Need
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Discover the best thermos brands at unbeatable prices. Fast NYC delivery, bulk discounts, and satisfaction guaranteed.
              </p>
            </div>

            {/* Value props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-card p-4 rounded-lg shadow-card">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Same-Day</div>
                  <div className="text-xs text-muted-foreground">NYC Delivery</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-card p-4 rounded-lg shadow-card">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Best Prices</div>
                  <div className="text-xs text-muted-foreground">Guaranteed</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-card p-4 rounded-lg shadow-card">
                <div className="w-10 h-10 bg-trust/10 rounded-lg flex items-center justify-center">
                  <Star className="h-5 w-5 text-trust" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Top Brands</div>
                  <div className="text-xs text-muted-foreground">All Price Points</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Shop Now - Free NYC Delivery
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Bulk Discounts
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span>4.9/5 (2,847 reviews)</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="hidden sm:block">Free returns</div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevation">
              <img 
                src={heroImage} 
                alt="Premium thermos flasks collection" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating deal badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-lg font-bold text-lg transform rotate-12">
              Buy 3+ Save 20%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;