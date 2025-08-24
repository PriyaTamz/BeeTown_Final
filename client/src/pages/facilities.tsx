import {
  Shirt,
  Droplets,
  Plus,
  Car,
  Lock,
  ShowerHead,
  Wifi,
  Utensils,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function Facilities() {
  const facilities = [
    { icon: Shirt, title: "Changing Rooms" },
    { icon: Droplets, title: "Drinking Water" },
    { icon: Plus, title: "First Aid" },
    { icon: Car, title: "Parking" },
    { icon: Lock, title: "Individual Lockers" },
    { icon: ShowerHead, title: "Shower Areas" },
    { icon: Utensils, title: "Food Court" },
    { icon: Wifi, title: "Free WiFi" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (indexRef.current + 1) % facilities.length;
        indexRef.current = nextIndex;

        const facilityElement = scrollRef.current.children[
          nextIndex
        ] as HTMLElement;

        const offsetLeft = facilityElement.offsetLeft;
        scrollRef.current.scrollTo({
          left: offsetLeft,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-600 py-16">
      <div className="text-center mb-10 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Facilities
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          Enjoy a wide range of guest-friendly amenities designed to make your
          visit comfortable, safe, and memorable.
        </p>
      </div>

      <div className="overflow-x-hidden">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto scrollbar-hide snap-x snap-mandatory"
        >
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center space-y-3 min-w-[7rem] sm:min-w-[9rem] md:min-w-[10rem] lg:min-w-[11rem] flex-shrink-0 snap-center"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-full bg-white shadow-lg border-2 border-white transition-transform hover:scale-105 duration-300">
                <facility.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-blue-600" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white">
                {facility.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
