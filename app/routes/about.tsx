import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef } from "react";
import Breadcrumb from "~/components/Breadcrumb";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us - Squadds" },
    { name: "description", content: "Learn more about Squadds and our mission to help teams achieve their goals through effective OKR management." },
  ];
};

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const purposeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const foundersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [heroRef.current, purposeRef.current, statsRef.current, foundersRef.current];
    elements.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Breadcrumb pageName="About Us" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Hero Section */}
        <div ref={heroRef} className="mx-auto max-w-3xl text-center animate-on-scroll">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            About Squadds
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Empowering teams to achieve their goals through effective OKR management
          </p>
        </div>

        <div className="mt-20 space-y-32">
          {/* Purpose Section */}
          <section className="relative">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div ref={purposeRef} className="animate-on-scroll">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Purpose</h2>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                  At Squadds, we believe that success comes from alignment, transparency, and focused execution. 
                  Our purpose is to revolutionize how teams set, track, and achieve their objectives.
                </p>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  We're building more than just an OKR platform – we're creating a foundation for organizational 
                  excellence where teams can collaborate effectively, measure progress accurately, and celebrate 
                  achievements together.
                </p>
                <div ref={statsRef} className="mt-8 grid grid-cols-2 gap-8 animate-on-scroll">
                  <div className="transform transition-all duration-500 hover:scale-105">
                    <div className="text-3xl font-bold text-blue-600">98%</div>
                    <div className="mt-2 text-gray-600 dark:text-gray-300">Team alignment improvement</div>
                  </div>
                  <div className="transform transition-all duration-500 hover:scale-105">
                    <div className="text-3xl font-bold text-blue-600">2.5x</div>
                    <div className="mt-2 text-gray-600 dark:text-gray-300">Faster goal achievement</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 transform transition-all duration-500 hover:scale-105">
                  <div className="flex h-full items-center justify-center p-8">
                    <svg className="h-full w-full text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Founders Section */}
          <section ref={foundersRef} className="relative animate-on-scroll">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet Our Founders</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                A team of passionate entrepreneurs with decades of combined experience in product management and software development
              </p>
            </div>
            <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Chen",
                  role: "CEO & Co-founder",
                  bio: "Former Product Lead at Google with 15 years of experience in OKR implementation",
                },
                {
                  name: "Michael Rodriguez",
                  role: "CTO & Co-founder",
                  bio: "Previously led engineering teams at Atlassian, focusing on scalable enterprise solutions",
                },
                {
                  name: "David Kim",
                  role: "CPO & Co-founder",
                  bio: "Product strategy expert with experience at leading tech companies",
                },
              ].map((founder, index) => (
                <div 
                  key={founder.name} 
                  className="text-center transform transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mx-auto h-40 w-40 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className="flex h-full items-center justify-center">
                      <svg className="h-20 w-20 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14.016q2.906 0 5.016 2.039t2.109 4.945h-14.25q0-2.906 2.109-4.945t5.016-2.039zM12 12q-1.641 0-2.813-1.172t-1.172-2.813 1.172-2.836 2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{founder.name}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{founder.role}</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{founder.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}