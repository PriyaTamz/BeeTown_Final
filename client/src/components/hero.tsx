import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "@/videos/sea.avif";
import image2 from "@/videos/bridge.avif";

const images = [image1, image2];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"down" | "up">("down");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection("down");
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection("up");
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Reset transitioning state after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Match this with your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="relative w-full h-[70vh] sm:h-[85vh] lg:h-screen overflow-hidden">
      {/* Images with vertical slide transitions */}
      <div className="absolute w-full h-full max-h-screen">
        {images.map((src, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out
              ${index === activeIndex ? "z-10" : "z-0"}
              ${
                index === activeIndex
                  ? "translate-y-0"
                  : direction === "down"
                  ? "translate-y-full"
                  : "-translate-y-full"
              }
            `}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-xl">
            Bee Town Water Park
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium drop-shadow-lg">
            Fun & Splash in Tuticorin!
          </p>
          <button className="mt-8 sm:mt-10 px-8 py-3 sm:px-10 sm:py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Book Now
          </button>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== activeIndex) {
                setDirection(index > activeIndex ? "down" : "up");
                setActiveIndex(index);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
