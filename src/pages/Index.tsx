import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsSection from "@/components/BrandsSection";
import ProductGrid from "@/components/ProductGrid";
import BulkDeals from "@/components/BulkDeals";
import DeliverySection from "@/components/DeliverySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BrandsSection />
      <ProductGrid />
      <BulkDeals />
      <DeliverySection />
      <Footer />
    </div>
  );
};

export default Index;
