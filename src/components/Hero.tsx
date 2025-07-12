import { Phone, Clock, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/831099f9-2c2e-4ef0-aeee-00a1ac6b7cf8.png"
          alt="Professional towing service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Car Towing
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Fast, Reliable & Professional Service in Jaipur
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="accent"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('tel:+919829254649')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 98292 54649
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-muted-foreground">Round the clock roadside assistance</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-muted-foreground">Professional handling of your vehicle</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-6">
              <Wrench className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Experienced technicians at your service</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;