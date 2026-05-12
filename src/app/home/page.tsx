import HeroScreen from "./HeroScreen";
import FiltersScreen from "./FiltersScreen";
import TrendingLocations from "./TrendingLocations";
import PopularFarmlands from "./PopularFarmlands";
import UnlockedDocs from "./UnlockedDocs";
import YourListings from "./YourListings";
import TrendingFarmlands from "./TrendingFarmlands";
import SustainableYieldsBanner from "./SustainableYieldsBanner";
import PlatformStats from "./PlatformStats";
import PoolInvestments from "./PoolInvestments";
import CompareAssets from "./CompareAssets";
import DocumentUnlocks from "./DocumentUnlocks";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";



export default function UserHomePage() {
  return (
    <main style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <HeroScreen />
      <FiltersScreen />
      <TrendingLocations />
      <PopularFarmlands />
      <UnlockedDocs />
      <YourListings />
      <TrendingFarmlands />
      <SustainableYieldsBanner />
      <PlatformStats />
      <PoolInvestments />
      <CompareAssets />
      <DocumentUnlocks />
      <Testimonials />
      <Newsletter />
      <CTA />
      <Footer />
    </main>
  );
}
