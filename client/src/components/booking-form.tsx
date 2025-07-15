import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { User, Users, Baby, Minus, Plus, MessageCircle } from "lucide-react";

type TicketType = 'adult' | 'kids' | 'group';

interface TicketCounts {
  adult: number;
  kids: number;
  group: number;
}

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [ticketCounts, setTicketCounts] = useState<TicketCounts>({
    adult: 0,
    kids: 0,
    group: 0
  });

  const ticketPrices = {
    adult: 599,
    kids: 399,
    group: 499
  };

  const ticketIcons = {
    adult: User,
    kids: Baby,
    group: Users
  };

  const ticketColors = {
    adult: "from-sky-blue/10 to-ocean-blue/10 hover:border-ocean-blue text-ocean-blue",
    kids: "from-sunset-orange/10 to-coral/10 hover:border-sunset-orange text-sunset-orange",
    group: "from-tropical-green/10 to-warm-yellow/10 hover:border-tropical-green text-tropical-green"
  };

  const updateTicketCount = (type: TicketType, change: number) => {
    setTicketCounts(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + change)
    }));
  };

  const getTotalPrice = () => {
    return Object.entries(ticketCounts).reduce((total, [type, count]) => {
      return total + (count * ticketPrices[type as TicketType]);
    }, 0);
  };

  const getTotalTickets = () => {
    return Object.values(ticketCounts).reduce((total, count) => total + count, 0);
  };

  const handleWhatsAppBooking = () => {
    const message = `Hello! I'd like to book tickets for Bee Town Water Park:
    
Date: ${selectedDate}
Adult tickets: ${ticketCounts.adult} × ₹${ticketPrices.adult}
Kids tickets: ${ticketCounts.kids} × ₹${ticketPrices.kids}
Group tickets: ${ticketCounts.group} × ₹${ticketPrices.group}

Total: ₹${getTotalPrice()}

Please confirm my booking. Thank you!`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const stepIndicators = [
    { number: 1, label: "Select Date" },
    { number: 2, label: "Choose Tickets" },
    { number: 3, label: "Confirm" }
  ];

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent className="p-8 md:p-12">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            {stepIndicators.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      currentStep >= step.number
                        ? "bg-ocean-blue text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`ml-2 text-sm font-medium ${
                      currentStep >= step.number
                        ? "text-ocean-blue"
                        : "text-gray-600"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < stepIndicators.length - 1 && (
                  <div className="w-8 h-0.5 bg-gray-300 ml-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Date Selection */}
        {currentStep === 1 && (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Choose Your Visit Date
            </h3>
            <div className="max-w-md mx-auto">
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-4 border-2 text-lg"
                min={new Date().toISOString().split('T')[0]}
              />
              <div className="mt-8">
                <Button
                  onClick={() => setCurrentStep(2)}
                  disabled={!selectedDate}
                  className="bg-ocean-blue hover:bg-sky-blue text-white px-8 py-4 text-lg font-semibold hover-scale"
                >
                  Next: Choose Tickets
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Ticket Selection */}
        {currentStep === 2 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Select Ticket Types
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {Object.entries(ticketPrices).map(([type, price]) => {
                const Icon = ticketIcons[type as TicketType];
                const count = ticketCounts[type as TicketType];
                
                return (
                  <div
                    key={type}
                    className={`bg-gradient-to-br ${ticketColors[type as TicketType]} p-6 rounded-xl border-2 border-transparent cursor-pointer transition-all duration-300`}
                  >
                    <div className="text-center">
                      <Icon className="h-12 w-12 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-gray-800 mb-2 capitalize">
                        {type}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {type === 'adult' ? 'Ages 12+' : 
                         type === 'kids' ? 'Ages 3-11' : 
                         '10+ people'}
                      </p>
                      <div className="text-2xl font-bold mb-4">₹{price}</div>
                      <div className="flex items-center justify-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateTicketCount(type as TicketType, -1)}
                          disabled={count === 0}
                          className="w-8 h-8 p-0 rounded-full"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-lg font-semibold w-8 text-center">
                          {count}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateTicketCount(type as TicketType, 1)}
                          className="w-8 h-8 p-0 rounded-full"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3"
              >
                Back
              </Button>
              <Button
                onClick={() => setCurrentStep(3)}
                disabled={getTotalTickets() === 0}
                className="bg-ocean-blue hover:bg-sky-blue text-white px-8 py-4 font-semibold hover-scale"
              >
                Next: Confirm Booking
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {currentStep === 3 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Confirm Your Booking
            </h3>
            <div className="max-w-md mx-auto bg-gray-50 rounded-xl p-6 mb-8">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold">
                    {new Date(selectedDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                {Object.entries(ticketCounts).map(([type, count]) => {
                  if (count === 0) return null;
                  return (
                    <div key={type} className="flex justify-between">
                      <span className="text-gray-600 capitalize">{type}:</span>
                      <span className="font-semibold">
                        {count} × ₹{ticketPrices[type as TicketType]}
                      </span>
                    </div>
                  );
                })}
                <hr className="my-3" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-ocean-blue">₹{getTotalPrice()}</span>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-gray-600 mb-4">
                Click below to confirm your booking via WhatsApp
              </p>
              <Button
                onClick={handleWhatsAppBooking}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 font-semibold hover-scale"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Confirm via WhatsApp
              </Button>
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(2)}
                className="px-6 py-3"
              >
                Back to Tickets
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
