import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logo from "@/videos/bee-town-logo.svg";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location === "/";
  const showBlur = isHomePage && !scrolled;

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showBlur 
          ? "bg-black/20 backdrop-blur-md" 
          : "bg-white shadow-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Moved slightly right with ml-6 */}
          <div className="ml-4 md:ml-10 lg:ml-16"> {/* Added margin-left here */}
            <Link
              href="/"
              className="flex items-center space-x-2 group z-50"
              onClick={() => setIsOpen(false)}
            >
              {/* SVG Logo - Better implementation */}
              <img 
                src={logo} 
                alt="Bee Town Water Park Logo"
                className={cn(
                  "h-12 md:h-14 lg:h-16 w-auto transition-all duration-300"
                )}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-normal text-sm transition-colors duration-300 hover:text-orange-500",
                    showBlur ? "text-white" : "text-black"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Right aligned */}
          <div className="hidden md:block">
            <Button
              className={cn(
                "font-normal text-sm transition-all duration-300",
                showBlur
                  ? "bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/40"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              )}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={showBlur ? "text-white" : "text-black"}
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-white">
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-2 mb-6 pt-4 ml-4"> {/* Added ml-4 here */}
                    <img 
                      src={logo} 
                      alt="Bee Town Logo"
                      className="h-12 w-auto md:h-14"
                    />
                  </div>
                  <div className="flex flex-col space-y-3 flex-grow">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "text-sm font-normal py-2 px-4 rounded-md transition-colors hover:text-orange-500",
                          "text-gray-700"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Button className="mt-auto mb-4 bg-orange-500 hover:bg-orange-600 text-white font-normal text-sm py-4">
                    Book Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}