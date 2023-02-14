import { Header } from "../components/Header/Header";
import { Inter } from "@next/font/google";
import { Navigation } from "../components/Navigation";
import { MainSection } from "@/components/MainSection/MainSection";
import "../i18n/i18n";
import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";
import { NewProductsSection } from "@/components/NewProductsSection/NewProductsSection";
import { RecommendationSection } from "@/components/RecommendationSection/RecommendationSection";
import { FormSection } from "@/components/FormSection/FormSection";
import { SaleSection } from "@/components/SaleSection/SaleSection";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <AdvantagesSection />
      <NewProductsSection />
      <SaleSection />
      <RecommendationSection />
      <FormSection />
      <Footer />
    </div>
  );
}
