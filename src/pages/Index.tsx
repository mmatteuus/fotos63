import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { PhotoGallery } from "@/components/PhotoGallery";
import { PhotographerCTA } from "@/components/PhotographerCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <PhotoGallery />
      <PhotographerCTA />
      <Footer />
    </div>
  );
};

export default Index;
