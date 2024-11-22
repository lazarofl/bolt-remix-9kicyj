import { useEffect, useRef } from 'react';

export default function TrustedBy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        container.classList.add('animate-fade-in');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400">
          Trusted by the world's most innovative teams
        </p>
        <div 
          ref={containerRef}
          className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6 opacity-0 transition-opacity duration-1000"
        >
          {/* Amazon */}
          <img
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1 dark:brightness-0 dark:invert"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            loading="lazy"
          />
          
          {/* Atlassian */}
          <img
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1 dark:brightness-0 dark:invert"
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Atlassian-logo-blue-small.svg"
            alt="Atlassian"
            loading="lazy"
          />
          
          {/* GitHub */}
          <img
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1 dark:brightness-0 dark:invert"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub"
            loading="lazy"
          />
          
          {/* LaunchDarkly */}
          <img
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1 dark:brightness-0 dark:invert"
            src="https://seeklogo.com/images/L/launchdarkly-logo-0002ACBFB8-seeklogo.com.png"
            alt="LaunchDarkly"
            loading="lazy"
          />
          
          {/* Netflix */}
          <img
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1 dark:brightness-0 dark:invert"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            loading="lazy"
          />
          
          {/* Medium */}
          <img
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1 dark:brightness-0 dark:invert"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Medium_%28website%29_logo.svg"
            alt="Medium"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}