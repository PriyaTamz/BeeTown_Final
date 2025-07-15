import { useEffect, useState } from "react";
import { Users, Waves, Star } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-ocean-blue mb-4">
                About Bee Town Water Park
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the ultimate aquatic adventure in the heart of Tuticorin
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <img
                  src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Families enjoying water park activities"
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>

              <div className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Located conveniently near Tuticorin airport, Bee Town Water Park has been
                  creating magical memories for families since 2020. Our mission is to provide
                  a safe, fun, and unforgettable experience for visitors of all ages.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With world-class water slides, wave pools, and family-friendly attractions,
                  we've become Tamil Nadu's premier water park destination. Our commitment to
                  safety, cleanliness, and customer satisfaction makes us the perfect choice
                  for your next adventure.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-sky-blue/10 rounded-xl">
                    <Users className="h-12 w-12 text-ocean-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-ocean-blue">100K+</div>
                    <div className="text-sm text-gray-600">Happy Visitors</div>
                  </div>
                  <div className="text-center p-4 bg-sunset-orange/10 rounded-xl">
                    <Waves className="h-12 w-12 text-sunset-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold text-sunset-orange">25+</div>
                    <div className="text-sm text-gray-600">Attractions</div>
                  </div>
                  <div className="text-center p-4 bg-tropical-green/10 rounded-xl">
                    <Star className="h-12 w-12 text-tropical-green mx-auto mb-2" />
                    <div className="text-2xl font-bold text-tropical-green">4.8</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
