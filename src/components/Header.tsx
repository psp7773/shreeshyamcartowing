import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold">Shree Shyam Car Towing Service</h1>
            <p className="text-sm opacity-90">24/7 Emergency Roadside Assistance</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Jaipur, Rajasthan</span>
            </div>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => window.open('tel:+919829254649')}
              className="flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">9829254649</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;