import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import ProductSection from "../components/ProductSection";
import WhyChooseUs from "../components/WhyChooseUs";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] pb-32">
      <Header />
      <SearchBar />
      <HeroBanner />
      <Categories />
      <ProductSection title="Best Sellers" />
      <ProductSection title="New Arrivals" />
      <WhyChooseUs />
      <Footer />
      <WhatsAppButton />
      <BottomNav />
    </main>
  );
}