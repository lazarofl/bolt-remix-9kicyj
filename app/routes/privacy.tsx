import type { MetaFunction } from "@remix-run/node";
import Breadcrumb from "~/components/Breadcrumb";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy Policy - Squadds" },
    { name: "description", content: "Privacy policy and data protection information for Squadds users." },
  ];
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Breadcrumb pageName="Privacy Policy" />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <div className="mt-10 space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                1. Information We Collect
              </h2>
              <p className="mt-6">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2">
                <li>Account information (name, email, password)</li>
                <li>Company information</li>
                <li>Usage data and preferences</li>
                <li>Communication data</li>
              </ul>
            </section>

            <section>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                2. How We Use Your Information
              </h2>
              <p className="mt-6">
                We use the information we collect to:
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Improve and personalize your experience</li>
                <li>Communicate with you about our services</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                3. Data Security
              </h2>
              <p className="mt-6">
                We implement appropriate technical and organizational measures to maintain the security of your personal information, including encryption, access controls, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                4. Your Rights
              </h2>
              <p className="mt-6">
                You have the right to:
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                5. Contact Us
              </h2>
              <p className="mt-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                Email: privacy@squadds.com<br />
                Address: 123 Privacy Street, 10001 New York, NY
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}