import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamSize: number;
}

export default function ContactModal({ isOpen, onClose, teamSize }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    teamSize,
  });

  // Separate state for country to persist it
  const [country, setCountry] = useState('US');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, country });
    onClose();
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData(prev => ({
      ...prev,
      phone: value || '',
    }));
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-blue-50 p-6 shadow-xl dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20">
          <div className="absolute inset-0 bg-grid-gray-100/[0.025] bg-[size:20px_20px]" />
          
          <div className="relative">
            <div className="flex justify-between items-start">
              <div>
                <Dialog.Title className="text-xl font-semibold leading-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                  Contact Sales Team
                </Dialog.Title>
                <Dialog.Description className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Tell us about your needs and our team will get back to you shortly.
                </Dialog.Description>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              >
                <span className="sr-only">Close</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Name Field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="block w-full rounded-lg border border-gray-200 bg-white/50 p-2.5 text-gray-900 backdrop-blur-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-800 dark:bg-gray-900/50 dark:text-white dark:placeholder:text-gray-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label 
                    htmlFor="company" 
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="block w-full rounded-lg border border-gray-200 bg-white/50 p-2.5 text-gray-900 backdrop-blur-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-800 dark:bg-gray-900/50 dark:text-white dark:placeholder:text-gray-500"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Enter your company name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="block w-full rounded-lg border border-gray-200 bg-white/50 p-2.5 text-gray-900 backdrop-blur-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-800 dark:bg-gray-900/50 dark:text-white dark:placeholder:text-gray-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label 
                    htmlFor="phone" 
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Phone (optional)
                  </label>
                  <PhoneInput
                    international
                    defaultCountry={country}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onCountryChange={setCountry}
                    countrySelectProps={{ unicodeFlags: true }}
                    className="block w-full rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-gray-800 dark:bg-gray-900/50"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:from-blue-500 hover:to-blue-400 hover:shadow-md hover:shadow-blue-500/25"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}