import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ImageGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/03c136ba-67f7-4e7b-95b3-1fd4e4ac935d.png",
      alt: "Professional towing service in action",
      title: "Expert Car Recovery"
    },
    {
      src: "/lovable-uploads/bd510d95-b89c-44b7-8359-18f3482ea653.png",
      alt: "Roadside emergency towing service",
      title: "Emergency Roadside Assistance"
    },
    {
      src: "/lovable-uploads/831099f9-2c2e-4ef0-aeee-00a1ac6b7cf8.png",
      alt: "Car carrier truck with luxury vehicle",
      title: "Safe Vehicle Transportation"
    },
    {
      src: "/lovable-uploads/013dc310-c893-41fb-b5d7-d4d8b9cca850.png",
      alt: "Professional towing with owner",
      title: "Experienced Team Service"
    },
    {
      src: "/lovable-uploads/c757fd0b-9d6b-421e-b1ff-8598bce3c94a.png",
      alt: "Car carrier service with professional staff",
      title: "Professional Car Carrier"
    },
    {
      src: "/lovable-uploads/8422630c-ee52-4553-bd85-4473abdc0c01.png",
      alt: "Heavy vehicle bus towing service",
      title: "Heavy Vehicle Towing"
    },
    {
      src: "/lovable-uploads/53eca856-6397-43f4-8f0d-2cccd97ee1b1.png",
      alt: "Urban car towing operation",
      title: "City Towing Operations"
    },
    {
      src: "/lovable-uploads/40e9631c-421b-42c5-8d14-fc7e8bbee182.png",
      alt: "Compact car towing service",
      title: "All Vehicle Types Supported"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Work Gallery</h2>
          <p className="text-lg text-muted-foreground">
            See our professional towing services in action
          </p>
        </div>

        <Card className="relative max-w-4xl mx-auto overflow-hidden bg-card">
          <div 
            className="relative h-64 md:h-96 lg:h-[500px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main Image */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{images[currentIndex].title}</h3>
                <p className="text-sm opacity-90">{images[currentIndex].alt}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0 backdrop-blur-sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0 backdrop-blur-sm"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 bg-black/40 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-2 p-4 bg-card">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Strip - Hidden on mobile */}
          <div className="hidden md:flex gap-2 p-4 bg-muted/30 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? "border-primary ring-2 ring-primary/20" 
                    : "border-transparent hover:border-muted-foreground/50"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </Card>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            {isAutoPlaying ? "🔄 Auto-playing" : "⏸️ Paused on hover"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;