import AudioEnhancer from "./_components/AudioEnhancer/AudioEnhancer";
import CategorySelection from "./_components/category/CategorySelection";
import ExploreProducts from "./_components/ExploreProducts";
import NewArrivals from "./_components/NewArrivals";
import GoToBtn from "./_components/ui/GoToBtn";
import ServiceHighlights from "./_components/ServiceHighlights";
import FlashSales from "./_components/FlashSales/FlashSales";
import BestSellers from "./_components/BestSellingProducts/BestSellers";
import Hero from "./_components/hero/Hero";
export default function Home() {
  return (
    <main className="relative ">
      <Hero />
      <FlashSales />
      <CategorySelection />
      <BestSellers />
      <AudioEnhancer />
      <ExploreProducts />
      <NewArrivals />
      <ServiceHighlights />
      <GoToBtn />
    </main>
  );
}
