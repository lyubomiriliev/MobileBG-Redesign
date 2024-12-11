import CarSection from "@/components/CarSection";
import Categories from "@/components/Categories";
import HeroSection from "@/components/HeroSection";
import NewestListings from "@/components/NewestListings";
import NewUsed from "@/components/NewUsed";
import SearchSection from "@/components/SearchSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SearchSection />
      <CarSection />
      <Categories />
      <NewestListings />
      <NewUsed />
      <WhyChooseUs />
    </main>
  );
}
