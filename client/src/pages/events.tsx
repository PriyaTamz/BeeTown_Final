import { useEffect, useState } from "react";
import { Calendar, Music, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Events() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const events = [
    {
      icon: Calendar,
      title: "Birthday Party Extravaganza",
      date: "March 22, 2024",
      category: "Special Event",
      description: "Special birthday packages with decorations, cake, and exclusive pool access for birthday celebrations.",
      gradient: "from-ocean-blue to-sky-blue",
      categoryColor: "bg-sunset-orange/20 text-sunset-orange"
    },
    {
      icon: Music,
      title: "Summer Music Festival",
      date: "March 28, 2024",
      category: "Music Event",
      description: "Enjoy live performances by local bands while relaxing in our pools. Food stalls and special activities included.",
      gradient: "from-sunset-orange to-coral",
      categoryColor: "bg-tropical-green/20 text-tropical-green"
    },
    {
      icon: Trophy,
      title: "Swimming Championship",
      date: "April 5, 2024",
      category: "Competition",
      description: "Annual swimming competition for all age groups with exciting prizes and professional coaching sessions.",
      gradient: "from-tropical-green to-warm-yellow",
      categoryColor: "bg-ocean-blue/20 text-ocean-blue"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-warm-yellow/10 to-sunset-orange/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-blue mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join us for special events and celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover-scale transition-all duration-300 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-48 bg-gradient-to-r ${event.gradient} flex items-center justify-center`}>
                  <event.icon className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.categoryColor}`}>
                      {event.category}
                    </span>
                    <span className="text-gray-500 text-sm">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                  <Button className="bg-ocean-blue hover:bg-sky-blue text-white font-medium">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
