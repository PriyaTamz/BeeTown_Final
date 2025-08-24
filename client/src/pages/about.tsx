import { Users, Waves, Star } from "lucide-react";
import image1 from "../videos/image1.1.jpg";

export default function About() {
  return (
    <div className="pt-16">
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <div className="space-y-8">
              <img
                src={image1}
                alt="Families enjoying water park activities"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>

            {/* Right Column - About Text and Stats */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                About Bee Town Water Park
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Experience the ultimate aquatic adventure in the heart of Tuticorin. Located conveniently near Tuticorin airport, Bee Town Water Park has been creating magical memories for families since 2020. Our mission is to provide a safe, fun, and unforgettable experience for visitors of all ages.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We also host exciting events and private celebrations, making Bee Town not just a water park but a destination for family gatherings, birthday parties, and corporate outings.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With world-class water slides, wave pools, and family-friendly attractions, we've become Tamil Nadu's premier water park destination. Our commitment to safety, cleanliness, and customer satisfaction makes us the perfect choice for your next adventure.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you’re seeking a relaxing day by the pool, an adrenaline rush on our slides, or a fun-filled weekend with loved ones, Bee Town Water Park has something special for everyone.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-sky-blue/10 rounded-xl">
                  <Users className="h-12 w-12 text-ocean-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-ocean-blue">100K+</div>
                  <div className="text-sm text-gray-600">Happy Visitors</div>
                </div>
                <div className="text-center p-4 bg-sunset-orange/10 rounded-xl">
                  <Waves className="h-12 w-12 text-sunset-orange mx-auto mb-2" />
                  <div className="text-2xl font-bold text-sunset-orange">5+</div>
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
      </section>
    </div>
  );
}
