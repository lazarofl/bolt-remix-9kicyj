import { useState, useEffect, useRef } from 'react';

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState('okr-tracking');
  const featuresRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-left');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  // Rest of your existing Features component code remains the same
  const features = {
    'okr-tracking': {
      title: 'OKR Tracking',
      description: 'Create and manage objectives with key results, tracking progress through intuitive metrics and reports.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        'Create and manage objectives and key results',
        'Track progress with visual metrics',
        'Generate comprehensive reports',
        'Set custom measurement periods',
      ],
    },
    'ai-assistant': {
      title: 'AI Assistant',
      description: 'Get intelligent guidance for creating and managing your OKRs with our AI-powered assistant.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'Smart objective suggestions',
        'Key result optimization',
        'Checkpoint scheduling assistance',
        'Quality management insights',
      ],
    },
    'checkpoint-notification': {
      title: 'Checkpoint Notifications',
      description: 'Stay on top of your OKRs with smart notifications that keep everyone informed and engaged.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      features: [
        'Automated check-in reminders',
        'Custom notification schedules',
        'Progress update alerts',
        'Follower notifications for changes',
      ],
    },
    'slack-integration': {
      title: 'Slack Integration',
      description: 'Seamlessly connect your OKR workflow with Slack for real-time updates and collaboration.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        'Real-time progress updates',
        'Interactive preview links',
        'Quick action shortcuts',
        'Performance charts and insights',
      ],
    },
    
  };

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            Powerful features for effective OKR management
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Everything you need to manage, track, and achieve your objectives
          </p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
          <div ref={featuresRef} className="lg:col-span-4 animate-on-scroll">
            <div className="space-y-1">
              {Object.entries(features).map(([key, feature]) => (
                <button
                  key={key}
                  onClick={() => setSelectedFeature(key)}
                  className={`w-full flex items-center gap-x-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-all ${
                    selectedFeature === key
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className={`flex-shrink-0 ${selectedFeature === key ? 'text-white' : 'text-blue-600'}`}>
                    {feature.icon}
                  </div>
                  {feature.title}
                </button>
              ))}
            </div>
          </div>

          <div ref={contentRef} className="mt-10 lg:col-span-8 lg:mt-0 animate-on-scroll">
            {/* Rest of your feature content remains the same */}
            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-50/50 dark:from-blue-900/10 dark:to-blue-900/5" />
              <div className="relative">
                <div className="flex items-center gap-x-3">
                  <div className="flex-shrink-0 text-blue-600">
                    {features[selectedFeature].icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {features[selectedFeature].title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {features[selectedFeature].description}
                </p>
                <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {features[selectedFeature].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-x-3">
                      <div className="flex-shrink-0 text-blue-600">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}