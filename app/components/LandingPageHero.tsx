import { Link } from "@remix-run/react";
import { useEffect, useRef } from "react";

export default function LandingPageHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={heroRef} className="text-center animate-on-scroll">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
            UNLOCK CONVERSATIONAL POWER
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Empower Your</span>
            <span className="block">Conversations with Next-Gen</span>
            <span className="block">OKR Dashboard</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Unlock seamless goal management and streamline your OKR experience with our innovative dashboard solution
          </p>
          <div className="mt-10">
            <Link
              to="/signup"
              className="rounded-full bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div ref={imageRef} className="mt-16 animate-on-scroll">
          <div className="rounded-2xl bg-gray-100 p-8 dark:bg-gray-800">
            <div className="aspect-[16/9] w-full rounded-xl bg-gray-200 dark:bg-gray-700">
              {/* Placeholder for dashboard image */}
              <div className="flex h-full items-center justify-center text-gray-400 dark:text-gray-500">
                Dashboard Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}