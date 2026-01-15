import type {Plan, PlanType} from "../../data/Plan.ts";
import {PlanCard} from "./PlanCard.tsx";
import {useScrollAnimation} from "../../../../hooks/useScrollAnimation.ts";

const plans: Plan[] = [
    {
        id: 'free',
        name: 'Starter',
        description: 'Perfect for trying Cloud24Connect',
        price: 'Free',
        cta: 'Start Free Trial',
        features: [
            {name: 'Up to 3 cloud accounts', included: true},
            {name: 'Basic monitoring', included: true},
            {name: 'Email support', included: true},
            {name: '7-day data retention', included: true},
            {name: 'Custom alerts', included: false},
            {name: 'Priority support', included: false},
            {name: 'Advanced analytics', included: false},
            {name: 'API access', included: false},
        ],
    },
    {
        id: 'pro',
        name: 'Professional',
        description: 'For growing teams and businesses',
        price: '$99',
        period: '/month',
        cta: 'Start Free Trial',
        highlight: true,
        features: [
            {name: 'Unlimited cloud accounts', included: true},
            {name: 'Advanced monitoring', included: true},
            {name: 'Priority email & chat support', included: true},
            {name: '90-day data retention', included: true},
            {name: 'Custom alerts', included: true},
            {name: 'Advanced analytics', included: true},
            {name: 'API access', included: true},
            {name: 'Team collaboration (up to 10)', included: true},
        ],
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'Custom solutions for large organizations',
        price: 'Custom',
        cta: 'Contact Sales',
        features: [
            {name: 'Unlimited everything', included: true},
            {name: '24/7 phone & email support', included: true},
            {name: 'Unlimited data retention', included: true},
            {name: 'Custom alerts & workflows', included: true},
            {name: 'Advanced analytics & reporting', included: true},
            {name: 'Full API access', included: true},
            {name: 'Unlimited team members', included: true},
            {name: 'Dedicated account manager', included: true},
        ],
    },
];

interface PlansSectionProps {
    selectedPlan: PlanType;
    onSelect: (plan: PlanType) => void;
}

export const PlanSection = ({selectedPlan, onSelect}: PlansSectionProps) => {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section className="flex flex-col gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 pb-2
                        bg-gradient-to-r from-secondary to-secondary-light dark:from-secondary-dark dark:to-secondary bg-clip-text text-transparent"
                    >
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-gray-300">
                        Choose the perfect plan for your infrastructure needs. Scale up as you grow.
                    </p>
                </div>
                <div className="mt-8 p-8 grid grid-cols-1 md:p-0 lg:p-0 md:grid-cols-3 gap-8 lg:gap-6">
                    {plans.map((plan) => (
                        <PlanCard
                            key={plan.id}
                            plan={plan}
                            isActive={selectedPlan === plan.id}
                            onSelect={() => onSelect(plan.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}