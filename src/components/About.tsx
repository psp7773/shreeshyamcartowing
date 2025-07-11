import { Award, Users, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "1000+" },
    { icon: Clock, label: "Years Experience", value: "10+" },
    { icon: Award, label: "Successful Recoveries", value: "5000+" },
    { icon: Shield, label: "Safe Operations", value: "100%" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Shree Shyam Car Towing Service
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                हमारी सेवा जयपुर में <strong>24/7 emergency car towing</strong> और roadside assistance प्रदान करती है। 
                हमारे पास experienced team और modern equipment है जो आपकी गाड़ी को safely handle करता है।
              </p>
              <p className="leading-relaxed">
                We specialize in all types of vehicle recovery - from small cars to heavy commercial vehicles. 
                Our professional team ensures your vehicle is transported safely to your desired destination.
              </p>
              <p className="leading-relaxed">
                <strong>V.K.I. Area</strong> में स्थित हमारी service center से हम जयपुर के सभी areas में 
                quick response time के साथ service provide करते हैं।
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-md">
                  <CardContent className="p-4">
                    <stat.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/lovable-uploads/013dc310-c893-41fb-b5d7-d4d8b9cca850.png"
                alt="Professional towing team"
                className="rounded-lg shadow-lg object-cover h-48"
              />
              <img
                src="/lovable-uploads/c757fd0b-9d6b-421e-b1ff-8598bce3c94a.png"
                alt="Car carrier service"
                className="rounded-lg shadow-lg object-cover h-48 mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-white p-4 rounded-lg shadow-xl">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;