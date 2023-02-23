import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";
import { Footer } from "@/components/Footer/Footer";
import { FormSection } from "@/components/FormSection/FormSection";
import { MainSection } from "@/components/MainSection/MainSection";
import { NewProductsSection } from "@/components/NewProductsSection/NewProductsSection";
import { RecommendationSection } from "@/components/RecommendationSection/RecommendationSection";
import { SaleSection } from "@/components/SaleSection/SaleSection";
import { Header } from "../components/Header/Header";
import "../i18n/i18n";

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
