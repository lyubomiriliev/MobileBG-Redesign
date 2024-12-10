import CarSection from "@/components/CarSection";
import Categories from "@/components/Categories";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SearchSection />
      <CarSection />
      <Categories />
    </main>
  );
}
