import Footer from "../../../shared/footer/footer";
import Navbar from "../../../shared/navbar/navbar";
import Featurecard from "../components/Featurecard/featurecard";
import HeroSection from "../components/HeroSection/HeroSection";
import RessourcesComponents from "../components/RessourcesCards/RessourcesComponents";

import "./homeLayout.css";

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <Featurecard />
        <RessourcesComponents />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
