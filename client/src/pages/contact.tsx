import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 w-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Get in touch with our friendly team for any inquiries or feedback
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Form */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 block mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:from-blue-600 hover:to-orange-600 transition"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-gray-800 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      Near Tuticorin Airport,<br />
                      Tuticorin, Tamil Nadu
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-gray-800 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">
                      +91 98765 43210<br />
                      +91 98765 43211
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-gray-800 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">
                      info@beetownwaterpark.com<br />
                      support@beetownwaterpark.com
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-gray-800 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Opening Hours</h4>
                    <p className="text-gray-600">
                      Daily: 9:00 AM – 7:00 PM<br />
                      Closed on Mondays
                    </p>
                  </div>
                </div>

                {/* Booking Time (Optional) */}
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-gray-800 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Booking Time</h4>
                    <p className="text-gray-600">
                      Online booking: 24/7<br />
                      Phone booking: 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full overflow-hidden border-t border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31404.089899039267!2d78.12903!3d8.7642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0331c8b7c9b5c1%3A0x1b1b1b1b1b1b1b1b!2sTuticorin%20Airport!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
          width="100%"
          height="500"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition duration-500"
          title="Bee Town Water Park Location"
        />
      </div>
    </div>
  );
}
