import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Users, TrendingDown } from "lucide-react";

const BulkDeals = () => {
  const deals = [
    {
      quantity: "3-5 Items",
      discount: "15%",
      icon: Package,
      description: "Perfect for families or small teams",
      savings: "Save up to $25",
      popular: false
    },
    {
      quantity: "6-11 Items", 
      discount: "20%",
      icon: Users,
      description: "Ideal for offices or sports teams",
      savings: "Save up to $75",
      popular: true
    },
    {
      quantity: "12+ Items",
      discount: "25%",
      icon: TrendingDown,
      description: "Best value for bulk orders",
      savings: "Save up to $150+",
      popular: false
    }
  ];

  return (
    <section id="deals" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            💰 Bulk Savings
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            The More You Buy, The More You Save
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our volume pricing makes it easy to outfit your entire team, family, or organization 
            with premium thermos flasks at unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {deals.map((deal, index) => {
            const IconComponent = deal.icon;
            return (
              <div 
                key={index}
                className={`relative bg-card p-8 rounded-2xl shadow-card hover:shadow-elevation transition-all duration-300 hover:-translate-y-2 ${
                  deal.popular ? 'ring-2 ring-primary/20 scale-105' : ''
                }`}
              >
                {deal.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="bg-primary text-primary-foreground font-semibold px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                    deal.popular 
                      ? 'bg-gradient-to-br from-primary to-primary-hover' 
                      : 'bg-gradient-to-br from-accent/10 to-primary/10'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${deal.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{deal.quantity}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{deal.discount} OFF</div>
                  <p className="text-muted-foreground mb-4">{deal.description}</p>
                  <div className="text-trust font-semibold mb-6">{deal.savings}</div>
                  
                  <Button 
                    variant={deal.popular ? "hero" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    {deal.popular ? "Start Bulk Order" : "Learn More"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground font-semibold mb-1">Products Available</div>
              <div className="text-sm text-muted-foreground">Mix and match any items</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">24hrs</div>
              <div className="text-foreground font-semibold mb-1">Fast Processing</div>
              <div className="text-sm text-muted-foreground">Quick bulk order fulfillment</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Free</div>
              <div className="text-foreground font-semibold mb-1">NYC Delivery</div>
              <div className="text-sm text-muted-foreground">On orders over $99</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom quote for larger quantities? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Get Custom Quote
            </Button>
            <Button variant="outline" size="lg">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkDeals;