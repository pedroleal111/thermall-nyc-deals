import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, MapPin, Shield } from "lucide-react";

const DeliverySection = () => {
  const deliveryFeatures = [
    {
      icon: Clock,
      title: "Same-Day Delivery",
      description: "Order by 2 PM for same-day delivery across Manhattan, Brooklyn, Queens, and Bronx",
      highlight: "As fast as 2 hours"
    },
    {
      icon: MapPin,
      title: "All NYC Boroughs",
      description: "Complete coverage of New York City with multiple fulfillment centers",
      highlight: "100% NYC coverage"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Free shipping on orders over $50, or $4.99 for smaller orders",
      highlight: "Always affordable"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Insured packages with real-time tracking and delivery confirmation",
      highlight: "100% guaranteed"
    }
  ];

  const boroughs = [
    { name: "Manhattan", time: "1-2 hours" },
    { name: "Brooklyn", time: "2-3 hours" },
    { name: "Queens", time: "2-4 hours" },
    { name: "Bronx", time: "2-4 hours" },
    { name: "Staten Island", time: "3-5 hours" }
  ];

  return (
    <section id="delivery" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🚚 Lightning Fast Delivery
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Get Your Thermos Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why wait? With our same-day delivery across NYC, you can be sipping from your new 
            premium thermos flask before dinner time.
          </p>
        </div>

        {/* Delivery features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {deliveryFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-card p-6 rounded-xl shadow-card hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                <Badge variant="outline" className="text-xs">
                  {feature.highlight}
                </Badge>
              </div>
            );
          })}
        </div>

        {/* NYC Coverage Map */}
        <div className="bg-card rounded-2xl p-8 shadow-card mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            NYC Delivery Coverage & Times
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {boroughs.map((borough, index) => (
              <div key={index} className="text-center p-4 bg-secondary/50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-lg">{borough.name[0]}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{borough.name}</h4>
                <p className="text-sm text-trust font-medium">{borough.time}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Delivery times may vary based on traffic and weather conditions. 
              Track your order in real-time with our delivery app.
            </p>
          </div>
        </div>

        {/* Emergency delivery CTA */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need it ASAP? Express Delivery Available
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Rush orders can be delivered in as little as 1 hour for an additional fee. 
            Perfect for last-minute gifts or urgent replacements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Order Express Delivery
            </Button>
            <Button variant="outline" size="lg">
              Check Delivery Time
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;