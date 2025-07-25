const BrandsSection = () => {
  const brands = [
    { name: "Hydro Flask", logo: "HF" },
    { name: "Yeti", logo: "Y" },
    { name: "Stanley", logo: "S" },
    { name: "Contigo", logo: "C" },
    { name: "Thermos", logo: "T" },
    { name: "Simple Modern", logo: "SM" },
    { name: "Klean Kanteen", logo: "KK" },
    { name: "S'well", logo: "SW" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by the Best Brands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We carry every major thermos brand, from budget-friendly options to premium collections
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              onClick={() => window.scrollTo({ top: document.getElementById('products')?.offsetTop || 0, behavior: 'smooth' })}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <span className="font-bold text-primary text-lg">{brand.logo}</span>
                </div>
                <h3 className="font-semibold text-foreground text-sm">{brand.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-trust rounded-full"></div>
              <span>Authorized Dealer</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-trust rounded-full"></div>
              <span>Warranty Included</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-trust rounded-full"></div>
              <span>Authentic Products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;