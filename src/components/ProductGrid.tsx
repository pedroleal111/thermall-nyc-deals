import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Hydro Flask Standard Mouth",
      brand: "Hydro Flask",
      price: 44.95,
      originalPrice: 54.95,
      rating: 4.8,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      badge: "Best Seller",
      colors: ["Blue", "Black", "White", "Pink"]
    },
    {
      id: 2,
      name: "Yeti Rambler 20oz",
      brand: "Yeti",
      price: 35.00,
      originalPrice: 40.00,
      rating: 4.9,
      reviews: 892,
      image: "https://images.pexels.com/photos/6378651/pexels-photo-6378651.jpeg",
      badge: "Premium",
      colors: ["Stainless", "Navy", "Charcoal"]
    },
    {
      id: 3,
      name: "Stanley Classic Vacuum",
      brand: "Stanley",
      price: 25.99,
      originalPrice: 32.99,
      rating: 4.7,
      reviews: 2156,
      image: "https://images.unsplash.com/photo-1544961503-a10e582e0f4e?w=400",
      badge: "Budget Pick",
      colors: ["Green", "Black", "Hammertone"]
    },
    {
      id: 4,
      name: "Contigo AUTOSEAL",
      brand: "Contigo",
      price: 29.99,
      originalPrice: 34.99,
      rating: 4.6,
      reviews: 756,
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400",
      badge: "One-Hand Operation",
      colors: ["Black", "Blue", "Red"]
    },
    {
      id: 5,
      name: "S'well Stainless Steel",
      brand: "S'well",
      price: 45.00,
      originalPrice: 55.00,
      rating: 4.5,
      reviews: 634,
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400",
      badge: "Designer",
      colors: ["Rose Gold", "Silver", "Marble"]
    },
    {
      id: 6,
      name: "Simple Modern Summit",
      brand: "Simple Modern",
      price: 19.99,
      originalPrice: 26.99,
      rating: 4.4,
      reviews: 1089,
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400",
      badge: "Great Value",
      colors: ["Sage", "Blush", "Midnight"]
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Best Seller": return "default";
      case "Premium": return "secondary";
      case "Budget Pick": return "outline";
      default: return "secondary";
    }
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Thermos Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From budget-friendly options to premium designs, find the perfect thermos for your lifestyle. 
            All products come with our price match guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevation transition-all duration-300 hover:-translate-y-2">
              {/* Image container */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={getBadgeVariant(product.badge)} className="shadow-sm">
                    {product.badge}
                  </Badge>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-5 h-5 text-muted-foreground hover:text-accent" />
                </button>
                
                {/* Discount badge */}
                {product.originalPrice > product.price && (
                  <div className="absolute bottom-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <div className="text-sm text-muted-foreground font-medium">{product.brand}</div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Colors */}
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-2">Available in {product.colors.length} colors</div>
                  <div className="flex space-x-2">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div key={color} className="w-6 h-6 rounded-full border-2 border-border bg-gradient-to-br from-primary/20 to-accent/20" />
                    ))}
                    {product.colors.length > 3 && (
                      <div className="w-6 h-6 rounded-full border-2 border-border bg-muted flex items-center justify-center text-xs font-medium">
                        +{product.colors.length - 3}
                      </div>
                    )}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-foreground">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-xs text-trust font-medium">✓ Same-day NYC delivery</div>
                  </div>
                  <Button variant="cta" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-lg px-8">
            View All 500+ Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
