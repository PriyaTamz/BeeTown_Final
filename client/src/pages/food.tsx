import FoodCarousel from "@/components/food-carousel";

export default function Food() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-coral/5 to-sunset-orange/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-blue mb-4">
              Delicious Food Menu
            </h2>
            <p className="text-xl text-gray-600">
              Tasty treats to fuel your water adventure
            </p>
          </div>

          <FoodCarousel />
        </div>
      </section>
    </div>
  );
}
