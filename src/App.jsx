import TopNav from "./components/TopNav";
import HeroBooking from "./components/HeroBooking";
import Services from "./components/Services";
import StatsStrip from "./components/StatsStrip";
import AppPromo from "./components/AppPromo";
import Articles from "./components/Articles";
import BottomBanner from "./components/BottomBanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <TopNav />
      <HeroBooking />
      <Services />
      <StatsStrip />
      <AppPromo />
      <Articles />
      <BottomBanner />
      <Footer />
    </>
  );
}
