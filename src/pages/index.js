import HeroSection from "@/components/HeroSection";
import PopularCategoriesSection from "@/components/PopularCategoriesSection";
import TrendingNow from "@/components/TrendingNow";

export default function Home() {
  return ( 
    <div>
      <HeroSection />
      <PopularCategoriesSection />
      <TrendingNow /> 
    </div>
  );
}
