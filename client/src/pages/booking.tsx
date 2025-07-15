import BookingForm from "@/components/booking-form";

export default function Booking() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-sky-blue/5 to-ocean-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-blue mb-4">
              Book Your Adventure
            </h2>
            <p className="text-xl text-gray-600">
              Reserve your spot for an unforgettable water park experience
            </p>
          </div>

          <BookingForm />
        </div>
      </section>
    </div>
  );
}
