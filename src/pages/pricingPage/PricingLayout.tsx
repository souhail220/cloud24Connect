import { useState } from 'react';
import {Navbar} from "../../shared/navbar/navbar.tsx";
import Footer from "../../shared/footer/footer.tsx";
import {PricingCalculator} from "./components/PricingCalculator.tsx";
import type {PlanType} from "./data/Plan.ts";
import {FAQSection} from "./components/FAQSection.tsx";
import {ComparisonTable} from "./components/ComparisonTable.tsx";
import {VolumeDiscountSection} from "./components/VolumeDiscountSection.tsx";
import {FreeTrialCTA} from "./components/FreeTrialCTA.tsx";
import {PlanSection} from "./components/PlanSection/PlanSection.tsx";

export const PricingLayout = () => {

  const [selectedPlan, setSelectedPlan] = useState<PlanType>('pro');

  return (
    <div className="min-h-screen mt-8 bg-gradient-to-br from-primary-dark via-primary to-primary-dark flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
          <PlanSection selectedPlan={selectedPlan} onSelect={setSelectedPlan} />
          <FreeTrialCTA />
          <PricingCalculator />
          <VolumeDiscountSection />
          <ComparisonTable />
          <FAQSection />
      </main>

      <Footer />
    </div>
  );
};
