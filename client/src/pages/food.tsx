import React from "react";
import veg from "@/videos/veg.jpg";

export default function FoodCarousel() {
  const foodItems = [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=400&h=300",
  ];

  return (
    <div className="relative py-16 overflow-hidden bg-white">
      {/* Food wave background */}

      <div className="absolute inset-0 z-0">
        <img
          src={veg}
          alt="Veg background"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      {/* Title with updated colors */}
      <div className="relative px-4 md:px-10 mb-12 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="font-serif italic font-medium text-gray-800">
            The Hunger Zone
          </span>
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Where every craving meets its perfect match
        </p>
      </div>

      {/* Carousels with updated colors */}
      <div className="relative space-y-8">
        {/* Top carousel layer */}
        <div className="relative w-full overflow-hidden">
          <div className="scroll-track inline-flex whitespace-nowrap animate-marquee-fast">
            {[...foodItems, ...foodItems].map((item, index) => (
              <div
                key={`top-${index}`}
                className="flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-2 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center overflow-hidden"
              >
                <div className="relative group w-full h-full">
                  <img
                    src={item}
                    alt={`food-${index}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-sm sm:text-base">
                      Dish #{(index % 6) + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom carousel layer (reverse direction) */}
        <div className="relative w-full overflow-hidden">
          <div className="scroll-track inline-flex whitespace-nowrap animate-marquee-slow">
            {[...foodItems, ...foodItems].map((item, index) => (
              <div
                key={`bottom-${index}`}
                className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-2 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center overflow-hidden"
              >
                <div className="relative group w-full h-full">
                  <img
                    src={item}
                    alt={`food-${index}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white font-medium text-xs sm:text-sm">
                      Dish #{(index % 6) + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS (unchanged) */}
      <style jsx>{`
        @keyframes marquee-fast {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-slow {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-fast {
          animation: marquee-fast 15s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee-slow 20s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee-fast {
            animation-duration: 10s;
          }
          .animate-marquee-slow {
            animation-duration: 15s;
          }
        }
        .scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
