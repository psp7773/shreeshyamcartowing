import { Car, Truck, Wrench, Battery, Key, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Car Towing",
      description: "Safe and reliable car towing service for all types of vehicles"
    },
    {
      icon: Truck,
      title: "Heavy Vehicle Towing",
      description: "Specialized towing for trucks, buses and heavy commercial vehicles"
    },
    {
      icon: Wrench,
      title: "Roadside Assistance",
      description: "On-spot minor repairs and maintenance services"
    },
    {
      icon: Battery,
      title: "Jump Start Service",
      description: "Dead battery? We'll get your car running in no time"
    },
    {
      icon: Key,
      title: "Lockout Service",
      description: "Locked out of your car? Professional lockout assistance"
    },
    {
      icon: AlertTriangle,
      title: "Accident Recovery",
      description: "Emergency recovery services for accident-damaged vehicles"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive car towing and roadside assistance services across Jaipur
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;