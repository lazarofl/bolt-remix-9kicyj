import { useSearchParams } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import { useSubmitContactMutation } from "~/store/api";
import toast from 'react-hot-toast';
import Breadcrumb from "~/components/Breadcrumb";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us - Squadds" },
    { name: "description", content: "Get in touch with the Squadds team. We're here to help with any questions about our OKR management platform." },
  ];
};

const reasons = [
  { value: "general", label: "General Inquiry" },
  { value: "sales", label: "Sales" },
  { value: "support", label: "Technical Support" },
  { value: "partnership", label: "Partnership" },
  { value: "feedback", label: "Product Feedback" },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const reason = searchParams.get("reason") || "general";
  const [submitContact, { isLoading }] = useSubmitContactMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason,
    message: "",
  });

  const formRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

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

    if (formRef.current) observer.observe(formRef.current);
    if (illustrationRef.current) observer.observe(illustrationRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await submitContact(formData).unwrap();
      toast.success(response.message);
      setFormData({ name: "", email: "", reason, message: "" });
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Breadcrumb pageName="Contact Us" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-16">
          <div ref={formRef} className="animate-on-scroll">
            <div className="mx-auto max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Get in touch
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-12 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Reason for Contact
                  </label>
                  <div className="mt-1">
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    >
                      {reasons.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 text-base font-semibold text-white shadow-sm transition-all hover:from-blue-500 hover:to-blue-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div ref={illustrationRef} className="relative mt-12 lg:mt-0 animate-on-scroll">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
              <div className="flex h-full items-center justify-center p-8">
                <svg className="h-full w-full text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}