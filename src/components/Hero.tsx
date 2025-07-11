import { Phone, Clock, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Emergency Car Towing
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Fast, Reliable & Professional Service in Jaipur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('tel:+919829254649')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 98292 54649
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => window.open('tel:+918386039829')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency: 83860 39829
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-muted-foreground">Round the clock emergency assistance</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-muted-foreground">Professional handling of your vehicle</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
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