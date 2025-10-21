import Footer from "../../../shared/footer/footer";
import {Navbar} from "../../../shared/navbar/navbar";
import Featurecard from "../components/Featurecard/featurecard";
import HeroSection from "../components/HeroSection/HeroSection";
import ResourcesComponents from "../components/RessourcesCards/ResourcesComponents.tsx";

import "./homeLayout.css";
import {GetStartedComponent} from "../components/GetStarted/GetStartedComponent.tsx";

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <Navbar />
      <main className="main-content">
          <HeroSection />
          <Featurecard />
          <hr className="separator" />
          <ResourcesComponents />
          <GetStartedComponent />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
