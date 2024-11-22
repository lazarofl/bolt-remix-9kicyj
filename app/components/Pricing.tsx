import { useState, useEffect, useRef } from "react";
import { Link } from "@remix-run/react";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'standard' | 'enterprise' | null>('standard');
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (pricingRef.current) observer.observe(pricingRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            Simple, transparent pricing
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Choose the plan that best fits your team's needs
          </p>
        </div>

        <div ref={pricingRef} className="grid gap-6 lg:grid-cols-3 animate-on-scroll">
          {/* Free Plan */}
          <div 
            className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
              selectedPlan === 'free'
                ? 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 scale-[1.02] shadow-2xl ring-2 ring-blue-300'
                : 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-lg hover:shadow-xl hover:scale-[1.01]'
            }`}
            onClick={() => setSelectedPlan('free')}
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className={`text-lg font-semibold ${selectedPlan === 'free' ? 'text-white' : 'text-gray-900 dark:text-white'}`}>Free</h3>
                <p className={`mt-2 text-sm ${selectedPlan === 'free' ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>Up to 20 team members</p>
                <p className={`mt-4 flex items-baseline ${selectedPlan === 'free' ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  <span className="text-4xl font-bold">$0</span>
                  <span className={`ml-1 text-sm ${selectedPlan === 'free' ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>/month</span>
                </p>
                <ul className={`mt-6 space-y-3 text-sm ${selectedPlan === 'free' ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                  {['Up to 20 team members', 'Unlimited OKRs', 'Community support', 'Limited AI assistant'].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className={`mr-2 h-5 w-5 ${selectedPlan === 'free' ? 'text-white' : 'text-blue-500'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  to="/signup?plan=free"
                  className={`flex h-12 w-40 items-center justify-center rounded-xl text-sm font-medium text-white shadow-sm transition-all mx-auto ${
                    selectedPlan === 'free'
                      ? 'bg-white/10 hover:bg-white/20'
                      : 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600'
                  } hover:shadow-lg`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div 
            className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
              selectedPlan === 'standard'
                ? 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 scale-[1.02] shadow-2xl ring-2 ring-blue-300'
                : 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-lg hover:shadow-xl hover:scale-[1.01]'
            }`}
            onClick={() => setSelectedPlan('standard')}
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className={`text-lg font-semibold ${selectedPlan === 'standard' ? 'text-white' : 'text-gray-900 dark:text-white'}`}>Standard</h3>
                <p className={`mt-2 text-sm ${selectedPlan === 'standard' ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>For growing teams</p>
                <p className={`mt-4 flex items-baseline ${selectedPlan === 'standard' ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  <span className="text-4xl font-bold">$3</span>
                  <span className={`ml-1 text-sm ${selectedPlan === 'standard' ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>/seat/month</span>
                </p>
                <ul className={`mt-6 space-y-3 text-sm ${selectedPlan === 'standard' ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                  {['Everything in Free', 'Up to 300 members', 'OKR templates', 'Priority support', 'Unlimited AI assistant'].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className={`mr-2 h-5 w-5 ${selectedPlan === 'standard' ? 'text-white' : 'text-blue-500'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  to="/signup?plan=standard&price=3"
                  className={`flex h-12 w-40 items-center justify-center rounded-xl text-sm font-medium text-white shadow-sm transition-all mx-auto ${
                    selectedPlan === 'standard'
                      ? 'bg-white/10 hover:bg-white/20'
                      : 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600'
                  } hover:shadow-lg`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div 
            className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
              selectedPlan === 'enterprise'
                ? 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 scale-[1.02] shadow-2xl ring-2 ring-blue-300'
                : 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-lg hover:shadow-xl hover:scale-[1.01]'
            }`}
            onClick={() => setSelectedPlan('enterprise')}
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className={`text-lg font-semibold ${selectedPlan === 'enterprise' ? 'text-white' : 'text-gray-900 dark:text-white'}`}>Enterprise</h3>
                <p className={`mt-2 text-sm ${selectedPlan === 'enterprise' ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>Custom solutions</p>
                <p className={`mt-4 flex items-baseline ${selectedPlan === 'enterprise' ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  <span className="text-4xl font-bold">Custom</span>
                </p>
                <ul className={`mt-6 space-y-3 text-sm ${selectedPlan === 'enterprise' ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                  {['Everything in Standard', 'Custom domain', 'SSO authentication', 'Annual billing support'].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className={`mr-2 h-5 w-5 ${selectedPlan === 'enterprise' ? 'text-white' : 'text-blue-500'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  to="/contact?reason=sales"
                  className={`flex h-12 w-40 items-center justify-center rounded-xl text-sm font-medium text-white shadow-sm transition-all mx-auto ${
                    selectedPlan === 'enterprise'
                      ? 'bg-white/10 hover:bg-white/20'
                      : 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600'
                  } hover:shadow-lg`}
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}