import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import ProductSection from "../components/ProductSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomGiftBanner from "../components/CustomGiftBanner";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-28">
      <Header />

      <SearchBar />

      <HeroBanner />

      <Categories />

      <ProductSection title="Best Sellers" />

      <ProductSection title="New Arrivals" />

      <WhyChooseUs />

      <CustomGiftBanner />

      <Footer />

      <WhatsAppButton />

      <BottomNav />
    </main>
  );
}