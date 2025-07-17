import { 
  Shirt, 
  Droplets, 
  Plus, 
  Car, 
  Lock, 
  ShowerHead, 
  Wifi, 
  Utensils 
} from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      icon: Shirt,
      title: "Changing Rooms",
      description: "Clean, spacious changing facilities with lockers",
      gradient: "from-sky-blue/10 to-ocean-blue/10",
      iconColor: "bg-ocean-blue"
    },
    {
      icon: Droplets,
      title: "Drinking Water",
      description: "Purified water stations throughout the park",
      gradient: "from-sunset-orange/10 to-coral/10",
      iconColor: "bg-sunset-orange"
    },
    {
      icon: Plus,
      title: "First Aid",
      description: "Professional medical assistance available",
      gradient: "from-tropical-green/10 to-warm-yellow/10",
      iconColor: "bg-tropical-green"
    },
    {
      icon: Car,
      title: "Parking",
      description: "Secure parking for cars and two-wheelers",
      gradient: "from-coral/10 to-sunset-orange/10",
      iconColor: "bg-coral"
    },
    {
      icon: Lock,
      title: "Individual Lockers",
      description: "Personal storage for your belongings",
      gradient: "from-warm-yellow/10 to-tropical-green/10",
      iconColor: "bg-warm-yellow"
    },
    {
      icon: ShowerHead,
      title: "ShowerHead Areas",
      description: "Hot and cold water shower facilities",
      gradient: "from-ocean-blue/10 to-sky-blue/10",
      iconColor: "bg-ocean-blue"
    },
    {
      icon: Utensils,
      title: "Food Court",
      description: "Variety of dining options and snacks",
      gradient: "from-tropical-green/10 to-warm-yellow/10",
      iconColor: "bg-tropical-green"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-blue mb-4">
              Park Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for a comfortable visit
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${facility.gradient} p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`w-16 h-16 ${facility.iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <facility.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
