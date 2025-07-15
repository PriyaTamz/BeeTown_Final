import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Play, Ticket, Sun, Waves } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-sky-blue/20 to-ocean-blue/20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Welcome to{" "}
          <span className="text-warm-yellow">Bee Town</span>{" "}
          Water Park
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Dive into endless fun at Tuticorin's most exciting water adventure destination!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-sunset-orange hover:bg-coral text-white px-8 py-4 text-lg font-semibold hover-scale shadow-lg"
            >
              <Ticket className="mr-2 h-5 w-5" />
              Book Your Adventure
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 text-lg font-semibold border-2 border-white hover-scale backdrop-blur-sm"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Video
          </Button>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Waves className="h-12 w-12 text-sky-blue/60" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <Sun className="h-16 w-16 text-warm-yellow/70" />
      </div>
    </section>
  );
}
