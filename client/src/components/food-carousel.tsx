import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function FoodCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const foodItems = [
    {
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Colorful burger with fries",
      title: "Bee Town Burger",
      description: "Juicy beef patty with fresh vegetables and special sauce",
      price: "₹249"
    },
    {
      src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Crispy golden pizza slice",
      title: "Pool Side Pizza",
      description: "Fresh cheese pizza with your favorite toppings",
      price: "₹299"
    },
    {
      src: "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Refreshing tropical fruit smoothie",
      title: "Tropical Smoothie",
      description: "Refreshing blend of tropical fruits and coconut",
      price: "₹149"
    },
    {
      src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Colorful ice cream sundae",
      title: "Sundae Delight",
      description: "Perfect ice cream treat to cool down after swimming",
      price: "₹199"
    },
    {
      src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Grilled chicken sandwich",
      title: "Grilled Chicken Wrap",
      description: "Healthy grilled chicken with fresh salad in a wrap",
      price: "₹219"
    },
    {
      src: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Fresh fruit salad bowl",
      title: "Fresh Fruit Bowl",
      description: "Seasonal fresh fruits perfect for a healthy snack",
      price: "₹129"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % foodItems.length);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [foodItems.length]);

  // Create a doubled array for seamless scrolling
  const displayItems = [...foodItems, ...foodItems];

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (320 + 24)}px)`, // 320px width + 24px gap
          width: `${displayItems.length * (320 + 24)}px`
        }}
      >
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden mr-6"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-ocean-blue">
                  {item.price}
                </span>
                <Button className="bg-sunset-orange hover:bg-coral text-white font-medium">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
