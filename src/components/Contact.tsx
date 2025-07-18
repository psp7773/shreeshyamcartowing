import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground">
            Need immediate assistance? Contact us now!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <Phone className="h-8 w-8 text-accent mx-auto" />
              <CardTitle className="text-lg">Primary Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-lg mb-2">+91 9829254649</p>
              <Button 
                size="sm" 
                className="w-full"
                onClick={() => window.open('tel:+919829254649')}
              >
                Call Now
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Phone className="h-8 w-8 text-accent mx-auto" />
              <CardTitle className="text-lg">Contact Line</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-lg mb-2">+91 8386039829</p>
              <Button 
                size="sm" 
                variant="secondary"
                className="w-full"
                onClick={() => window.open('tel:+918386039829')}
              >
                Call Now
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <MapPin className="h-8 w-8 text-accent mx-auto" />
              <CardTitle className="text-lg">Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Near CKS Hospital<br />
                V.K.I.A Area Road no. 6<br />
                Sikar Road, Jaipur, Rajasthan
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Clock className="h-8 w-8 text-accent mx-auto" />
              <CardTitle className="text-lg">Working Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-primary">24/7 Available</p>
              <p className="text-sm text-muted-foreground mt-2">
                Professional services<br />
                available round the clock
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-primary/10 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Need Help? Call Immediately!</h3>
            <p className="text-muted-foreground mb-6">
              Don't wait when you're stranded. Our team is ready to assist you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('tel:+919829254649')}
                className="text-lg px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 98292 54649
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('tel:+918386039829')}
                className="text-lg px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 83860 39829
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;