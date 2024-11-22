import type { MetaFunction } from "@remix-run/node";
import Breadcrumb from "~/components/Breadcrumb";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Terms of Service - Squadds" },
    { name: "description", content: "Terms of service and user agreement for Squadds platform." },
  ];
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Breadcrumb pageName="Terms of Service" />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Terms of Service
          </h1>
          <div className="mt-10 space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                1. Acceptance of Terms
              </h2>
              <p className="mt-6">
                By accessing or using Squadds, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                2. Use License
              </h2>
              <p className="mt-6">
                Permission is granted to temporarily access Squadds for personal or business use, subject to the following conditions:
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2">
                <li>You must not modify or copy the materials</li>
                <li>You must not use the materials for commercial purposes</li>
                <li>You must not attempt to reverse engineer any software</li>
                <li>You must not remove any copyright or proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                3. User Obligations
              </h2>
              <p className="mt-6">
                As a user of Squadds, you agree to:
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2">
                <li>Provide accurate information</li>
                <li>Maintain the security of your account</li>
                <li>Not share account credentials</li>
                <li>Use the service in compliance with laws</li>
              </ul>
            </section>

            <section>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                4. Service Modifications
              </h2>
              <p className="mt-6">
                We reserve the right to:
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2">
                <li>Modify or discontinue any part of our service</li>
                <li>Update pricing and features</li>
                <li>Change terms with reasonable notice</li>
              </ul>
            </section>

            <section>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                5. Contact
              </h2>
              <p className="mt-6">
                Questions about the Terms of Service should be sent to:
              </p>
              <p className="mt-4">
                Email: legal@squadds.com<br />
                Address: 123 Legal Avenue, 10001 New York, NY
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}