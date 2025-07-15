import { Link } from "wouter";
import { Waves, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-ocean-blue" />
              <span className="text-xl font-bold">Bee Town Water Park</span>
            </div>
            <p className="text-gray-400">
              Creating magical water adventures for families in Tuticorin since 2020.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-white transition-colors">
                  Book Tickets
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Facilities</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/facilities" className="hover:text-white transition-colors">
                  Changing Rooms
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-white transition-colors">
                  Lockers
                </Link>
              </li>
              <li>
                <Link href="/food" className="hover:text-white transition-colors">
                  Food Court
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-white transition-colors">
                  Parking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-ocean-blue rounded-full flex items-center justify-center hover:bg-sky-blue transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-ocean-blue rounded-full flex items-center justify-center hover:bg-sky-blue transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-ocean-blue rounded-full flex items-center justify-center hover:bg-sky-blue transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bee Town Water Park. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
