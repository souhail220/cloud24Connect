import { useState } from 'react';
import { Check, X, Zap } from 'lucide-react';
import {Navbar} from "../../shared/navbar/navbar.tsx";
import Footer from "../../shared/footer/footer.tsx";
import {PricingCalculator} from "./components/PricingCalculator.tsx";

type PlanType = 'free' | 'pro' | 'enterprise';

interface Plan {
  id: PlanType;
  name: string;
  description: string;
  price: string;
  period?: string;
  cta: string;
  highlight?: boolean;
  features: Array<{
    name: string;
    included: boolean;
  }>;
}

interface VolumeDiscount {
  usage: string;
  monthly: string;
  savings: string;
}

const plans: Plan[] = [
  {
    id: 'free',
    name: 'Starter',
    description: 'Perfect for trying Cloud24Connect',
    price: 'Free',
    cta: 'Start Free Trial',
    features: [
      { name: 'Up to 3 cloud accounts', included: true },
      { name: 'Basic monitoring', included: true },
      { name: 'Email support', included: true },
      { name: '7-day data retention', included: true },
      { name: 'Custom alerts', included: false },
      { name: 'Priority support', included: false },
      { name: 'Advanced analytics', included: false },
      { name: 'API access', included: false },
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
      { name: 'Unlimited cloud accounts', included: true },
      { name: 'Advanced monitoring', included: true },
      { name: 'Priority email & chat support', included: true },
      { name: '90-day data retention', included: true },
      { name: 'Custom alerts', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'API access', included: true },
      { name: 'Team collaboration (up to 10)', included: true },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 'Custom',
    cta: 'Contact Sales',
    features: [
      { name: 'Unlimited everything', included: true },
      { name: '24/7 phone & email support', included: true },
      { name: 'Unlimited data retention', included: true },
      { name: 'Custom alerts & workflows', included: true },
      { name: 'Advanced analytics & reporting', included: true },
      { name: 'Full API access', included: true },
      { name: 'Unlimited team members', included: true },
      { name: 'Dedicated account manager', included: true },
    ],
  },
];

const volumeDiscounts: VolumeDiscount[] = [
  { usage: '0-100K requests/month', monthly: '$99', savings: 'Baseline' },
  { usage: '100K-500K requests/month', monthly: '$89', savings: '10% off' },
  { usage: '500K-2M requests/month', monthly: '$79', savings: '20% off' },
  { usage: '2M-5M requests/month', monthly: '$69', savings: '30% off' },
  { usage: '5M+ requests/month', monthly: 'Contact us', savings: '40%+ off' },
];

export const Pricing = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_selectedPlan, setSelectedPlan] = useState<PlanType>('pro');

  return (
    <div className="min-h-screen mt-8 bg-gradient-to-br from-primary-dark via-primary to-primary-dark flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300">
              Choose the perfect plan for your infrastructure needs. Scale up as you grow.
            </p>
          </div>
        </section>

        {/* Plans Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl transition-all duration-300 ${
                  plan.highlight
                    ? 'md:scale-105 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-secondary-light shadow-2xl'
                    : 'bg-slate-800/50 border border-gray-600 hover:border-cyan-500/50'
                } backdrop-blur-sm p-8`}
                onMouseEnter={() => setSelectedPlan(plan.id)}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary-light to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-400">{plan.period}</span>
                    )}
                  </div>
                </div>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-secondary-light to-secondary text-white hover:from-secondary hover:to-secondary-dark transform hover:scale-105'
                      : 'bg-slate-700/50 text-gray-200 hover:bg-slate-600/50 border border-gray-600'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-gray-300' : 'text-gray-500'
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Free Trial CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 rounded-2xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start with a 14-day free trial. No credit card required. Full access to all Pro features.
            </p>
            <button className="bg-gradient-to-r from-secondary-light to-secondary hover:from-secondary hover:to-secondary-dark text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
              Claim Your Free Trial
            </button>
          </div>
        </section>

        {/* Custom Calculator Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <PricingCalculator />
        </section>

        {/* Volume Discounts Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Volume Discounts
            </h2>
            <p className="text-gray-300 text-lg">
              The more you use, the more you save. Pricing shown is for Professional plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {volumeDiscounts.map((discount, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 border border-gray-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <p className="text-gray-400 text-sm mb-3">{discount.usage}</p>
                <p className="text-2xl font-bold text-white mb-2">{discount.monthly}</p>
                <p className="text-cyan-400 font-semibold text-sm">{discount.savings}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Compare All Plans
            </h2>
            <p className="text-gray-300 text-lg">
              See exactly what's included in each tier
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-4 px-4 font-semibold text-white w-48">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-white">
                    Starter
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-white">
                    Professional
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-white">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 text-gray-300">Cloud accounts</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">3</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>

                <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 text-gray-300">Data retention</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">7 days</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">90 days</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">Unlimited</span>
                  </td>
                </tr>

                <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 text-gray-300">Monitoring</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">Basic</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">Advanced</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">Custom</span>
                  </td>
                </tr>

                <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 text-gray-300">Alerts & notifications</td>
                  <td className="py-4 px-4 text-center">
                    <X className="w-5 h-5 text-gray-500 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>

                <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 text-gray-300">Advanced analytics</td>
                  <td className="py-4 px-4 text-center">
                    <X className="w-5 h-5 text-gray-500 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>

                <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 text-gray-300">API access</td>
                  <td className="py-4 px-4 text-center">
                    <X className="w-5 h-5 text-gray-500 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>

                <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 text-gray-300">Support</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">Email</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">Priority</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">24/7</span>
                  </td>
                </tr>

                <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 text-gray-300">Team members</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">1</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">Up to 10</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">Unlimited</span>
                  </td>
                </tr>

                <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 text-gray-300">Custom integrations</td>
                  <td className="py-4 px-4 text-center">
                    <X className="w-5 h-5 text-gray-500 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <X className="w-5 h-5 text-gray-500 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 text-gray-300">SLA guarantee</td>
                  <td className="py-4 px-4 text-center">
                    <X className="w-5 h-5 text-gray-500 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">99.5%</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-white font-semibold">99.99%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-slate-800/50 border border-gray-600 rounded-2xl p-12 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Have questions?</h3>
            <p className="text-gray-300 mb-8">
              Check our FAQ or contact our sales team for more information about custom plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 border border-gray-600 rounded-lg text-white font-semibold transition-all duration-300">
                View FAQ
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
