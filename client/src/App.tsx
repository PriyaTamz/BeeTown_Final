import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Booking from "@/pages/booking";
import Gallery from "@/pages/gallery";
import Events from "@/pages/events";
import Facilities from "@/pages/facilities";
import Food from "@/pages/food";
import Contact from "@/pages/contact";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/booking" component={Booking} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/events" component={Events} />
          <Route path="/facilities" component={Facilities} />
          <Route path="/food" component={Food} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
