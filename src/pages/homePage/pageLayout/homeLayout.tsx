import Footer from "../../../shared/footer/footer";
import {Navbar} from "../../../shared/navbar/navbar";
import Featurecard from "../components/Featurecard/featurecard";
import HeroSection from "../components/HeroSection/HeroSection";
import ResourcesComponents from "../components/RessourcesCards/ResourcesComponents.tsx";
import {GetStartedComponent} from "../components/GetStarted/GetStartedComponent.tsx";
import TestimonialCards from "../components/TestemonialCards/TestimonialCards.tsx";

import "./homeLayout.css";

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <Navbar />
      <main className="main-content">
          <HeroSection />
          <Featurecard />
          <hr className="separator" />
          <TestimonialCards />
          <hr className="separator" />
          <ResourcesComponents />
          <GetStartedComponent />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
