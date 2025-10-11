import Featurecard from "../components/featurecard";
import HeroSection from "../components/HeroSection";
import RessourcesComponents from "../components/RessourcesComponents";
import "./homeLayout.css";

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <HeroSection />
      <Featurecard />
      <RessourcesComponents />
    </div>
  );
};

export default HomeLayout;
