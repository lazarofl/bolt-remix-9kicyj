import { useState } from "react";
import ContactModal from "./ContactModal";

export default function PriceSimulator() {
  const [seats, setSeats] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const basePrice = 15;
  const multiplier = Math.ceil(seats / 5);
  const totalPrice = basePrice * multiplier;
  const isEnterprise = seats >= 300;

  const displaySeats = seats >= 300 ? "300+" : seats;

  return (
    <>
      <div className="mx-auto max-w-xl rounded-2xl bg-gradient-to-br from-white via-blue-50 to-white p-6 shadow-xl ring-1 ring-blue-100 dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900 dark:ring-blue-900">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Team Size: {displaySeats}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Adjust the slider to calculate your price</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              {isEnterprise ? 'Custom' : `$${totalPrice}`}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">per month</div>
          </div>
        </div>
        
        <div className="mt-4">
          <input
            type="range"
            min="1"
            max="301"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg appearance-none cursor-pointer dark:from-blue-900 dark:to-blue-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-blue-600/20 dark:[&::-webkit-slider-thumb]:bg-blue-400"
          />
          
          <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>1 user</span>
            <span>300+ users</span>
          </div>
        </div>

        {isEnterprise && (
          <div className="mt-4 flex flex-col items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-blue-500 hover:to-blue-400"
            >
              Contact Sales Team
            </button>
            <p className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
              Get a custom quote for your enterprise needs
            </p>
          </div>
        )}
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        teamSize={seats}
      />
    </>
  );
}