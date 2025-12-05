import Footer from "../../../shared/footer/footer";
import {Navbar} from "../../../shared/navbar/navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import ResourcesComponents from "../components/RessourcesCards/ResourcesComponents.tsx";
import {GetStartedComponent} from "../components/GetStarted/GetStartedComponent.tsx";
import TestimonialCards from "../components/TestimonialCards/TestimonialCards.tsx";
import "./homeLayout.css";
import {Features} from "../components/Featurecard/Features.tsx";
import WorldMapSection from "../components/Map/Map.tsx";

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <Navbar />
      <main className="main-content">
          <HeroSection />
          <WorldMapSection />
          <Features />
          <TestimonialCards />
          <ResourcesComponents />
          <GetStartedComponent />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
