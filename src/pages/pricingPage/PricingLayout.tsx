import {type RefObject, useRef, useState} from 'react';
import {Navbar} from "../../shared/navbar/navbar.tsx";
import Footer from "../../shared/footer/footer.tsx";
import {PricingCalculator} from "./components/PricingCalculator/PricingCalculator.tsx";
import type {PlanType} from "./data/Plan.ts";
import {FAQSection} from "./components/FAQSection.tsx";
import {ComparisonTable} from "./components/ComparisonTable.tsx";
import {VolumeDiscountSection} from "./components/VolumeDiscountSection.tsx";
import {FreeTrialCTA} from "./components/FreeTrialCTA.tsx";
import {PlanSection} from "./components/PlanSection/PlanSection.tsx";
import {useTheme} from "../../context/ThemeContext.tsx";

const PricingLayout = () => {

    // Refs for each section
    const planRef = useRef<HTMLDivElement>(null);
    const freeTrialRef = useRef<HTMLDivElement>(null);
    const calculatorRef = useRef<HTMLDivElement>(null);
    const volumeDiscountRef = useRef<HTMLDivElement>(null);
    const comparisonRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
        const headerOffset = 100; // height of your fixed header
        if (ref.current) {
            const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - headerOffset,
                behavior: 'smooth',
            });
        }
    };
    const {theme} = useTheme();

    const [selectedPlan, setSelectedPlan] = useState<PlanType>('pro');

  return (
    <div className="min-h-screen flex flex-col gap-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-primary-dark dark:via-primary dark:to-primary-dark">
        <Navbar
            onLinkClick={(section) => {
                switch(section) {
                    case 'plans': scrollToSection(planRef); break;
                    case 'trial': scrollToSection(freeTrialRef); break;
                    case 'calculator': scrollToSection(calculatorRef); break;
                    case 'discounts': scrollToSection(volumeDiscountRef); break;
                    case 'comparison': scrollToSection(comparisonRef); break;
                    case 'faq': scrollToSection(faqRef); break;
                }
            }}
        />

        <main className="pricing-main-content flex-1 pb-20 space-y-20">
            <div className={`pt-32 pb-8 ${theme === 'light' ? 'bg-[#1d4ed8]' : ''}`} ref={planRef}>
                <PlanSection selectedPlan={selectedPlan} onSelect={setSelectedPlan} />
            </div>

            <div ref={freeTrialRef}>
                <FreeTrialCTA />
            </div>

            <div ref={calculatorRef}>
                <PricingCalculator />
            </div>

            <div ref={comparisonRef}>
                <ComparisonTable />
            </div>

            <div ref={volumeDiscountRef}>
                <VolumeDiscountSection />
            </div>

            <div ref={faqRef}>
                <FAQSection />
            </div>
        </main>
      <Footer />
    </div>
  );
};
export default PricingLayout;
