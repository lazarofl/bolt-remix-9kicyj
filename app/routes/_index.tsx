import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import LandingPageHero from "~/components/LandingPageHero";
import TrustedBy from "~/components/TrustedBy";
import Features from "~/components/Features";
import Pricing from "~/components/Pricing";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Squadds - Master Your Objectives and Key Results" },
    { name: "description", content: "Streamline your OKR management with our intuitive tracking platform. Set, track, and achieve your objectives with ease." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Header />
      <LandingPageHero />
      <TrustedBy />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}