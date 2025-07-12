import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shree Shyam Car Towing Service</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Your trusted partner for car towing and roadside assistance in Jaipur. 
              We're committed to providing fast, reliable, and professional service.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 9829254649</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 8386039829</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>F-1, Bohra Bhawan, Opp. Lohamandi Road, V.K.I. Area Road no. 14, Jaipur, Rajasthan - 302013</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <div className="text-sm space-y-1">
              <p>• Jaipur City</p>
              <p>• V.K.I. Area</p>
              <p>• Surrounding Areas</p>
              <div className="flex items-center gap-2 mt-4">
                <Clock className="h-4 w-4" />
                <span className="font-semibold">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2024 Shree Shyam Car Towing Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;