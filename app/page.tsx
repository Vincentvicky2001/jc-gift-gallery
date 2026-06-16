import TopMarquee from "../components/TopMarquee";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import ImageCarousel from "../components/ImageCarousel";
import Categories from "../components/Categories";
import ProductSection from "../components/ProductSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomizeSection from "../components/CustomizeSection";
import TestimonialSlider from "../components/TestimonialSlider";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-28">

      <TopMarquee />

      <Header />

      <SearchBar />

      <HeroBanner />

      <ImageCarousel />

      <Categories />

      <ProductSection title="Best Seller" />

      <ProductSection title="New Arrivals" />

      <WhyChooseUs />

      <CustomizeSection />

      <TestimonialSlider />

      <Footer />

      <WhatsAppButton />

      <BottomNav />

    </main>
  );
}