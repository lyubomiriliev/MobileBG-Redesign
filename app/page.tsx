import HeroSection from "@/components/HeroSection";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SearchForm />
    </main>
  );
}
