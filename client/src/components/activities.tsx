import { useState } from "react";
import { Waves, Mountain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const waterActivities = [
  "🏄‍♂️ Big Family Water Slide",
  "🛝 Two Kids' Slides",
  "🪣 Giant Splash Bucket",
  "💃 Rain Dance",
  "🌊 Artificial Waterfall",
  "🏊‍♀️ Swimming Pool"
];

const landActivities = null;

export default function Activities() {
  const [activeTab, setActiveTab] = useState<"water" | "land">("water");
  const activities = activeTab === "water" ? waterActivities : landActivities;

  return (
    <section className="min-h-screen w-full relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className={`absolute inset-0 z-0 transition-all duration-700 ${
        activeTab === "water" 
          ? "bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700" 
          : "bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700"
      }`}>
        {activeTab === "water" && (
          <svg 
            className="absolute bottom-0 w-full opacity-20"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
          >
            <path 
              fill="#ffffff" 
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12 sm:py-16 text-white">
        {/* Centered Title - Responsive Sizing */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 px-2"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-100">
            {activeTab === "water" ? "Water Adventures" : "Coming Soon"}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            {activeTab === "water" 
              ? "Dive into exciting water activities for the whole family" 
              : "We're preparing amazing land activities"}
          </p>
        </motion.div>

        {/* Toggle Buttons - Responsive Sizing */}
        <div className="flex gap-2 sm:gap-4 mb-8 sm:mb-12 p-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <button
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold flex items-center gap-1 sm:gap-2 transition-all ${
              activeTab === "water"
                ? "bg-white text-blue-700 shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setActiveTab("water")}
          >
            <Waves className="w-4 h-4 sm:w-5 sm:h-5" /> 
            <span className="hidden xs:inline">Water</span>
            <span className="xs:hidden">W</span>
          </button>
          <button
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold flex items-center gap-1 sm:gap-2 transition-all ${
              activeTab === "land"
                ? "bg-white text-green-700 shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setActiveTab("land")}
          >
            <Mountain className="w-4 h-4 sm:w-5 sm:h-5" /> 
            <span className="hidden xs:inline">Land</span>
            <span className="xs:hidden">L</span>
          </button>
        </div>

        {/* Activities Grid - Responsive Layout */}
        {activeTab === "water" && (
          <div className="w-full max-w-4xl grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 px-2 sm:px-0">
            <AnimatePresence>
              {waterActivities.map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }}
                  whileHover={{ y: -3 }}
                  className="bg-white/10 text-white text-lg sm:text-xl text-center py-4 sm:py-6 px-3 sm:px-4 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{activity.split(" ")[0]}</div>
                  <div className="text-sm sm:text-base md:text-lg">{activity.split(" ").slice(1).join(" ")}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Decorative Elements - Responsive Positioning */}
        {activeTab === "water" ? (
          <>
            <div className="hidden sm:block absolute bottom-10 sm:bottom-20 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-cyan-400/30 blur-xl"></div>
            <div className="hidden sm:block absolute top-1/4 sm:top-1/3 right-4 sm:right-16 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-blue-400/20 blur-xl"></div>
          </>
        ) : (
          <>
            <div className="hidden sm:block absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-emerald-400/30 blur-xl"></div>
            <div className="hidden sm:block absolute top-1/4 left-4 sm:left-20 w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-green-400/20 blur-xl"></div>
          </>
        )}
      </div>
    </section>
  );
}