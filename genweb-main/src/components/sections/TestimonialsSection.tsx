import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import rajeshKumar from "@/assets/testimonials/rajesh-kumar.jpg";
import priyaSharma from "@/assets/testimonials/priya-sharma.jpg";
import amitPatel from "@/assets/testimonials/amit-patel.jpg";
import snehaGupta from "@/assets/testimonials/sneha-gupta.jpg";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStart Solutions",
      avatar: rajeshKumar,
      rating: 5,
      text: "Gitesh delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise is outstanding. Our online presence has significantly improved."
    },
    {
      name: "Priya Sharma",
      role: "Marketing Director, Digital Plus",
      avatar: priyaSharma,
      rating: 5,
      text: "Working with Gitesh was a pleasure. He understood our vision perfectly and created a beautiful, functional website. The project was completed on time and within budget."
    },
    {
      name: "Amit Patel",
      role: "Founder, E-commerce Hub",
      avatar: amitPatel,
      rating: 5,
      text: "Our e-commerce platform built by Gitesh has been a game-changer. Sales increased by 150% within the first month. His expertise in modern web technologies is remarkable."
    },
    {
      name: "Sneha Gupta",
      role: "Creative Director, Design Studio",
      avatar: snehaGupta,
      rating: 5,
      text: "Gitesh transformed our design concepts into a stunning website. His ability to translate creative ideas into functional code is impressive. Highly recommended!"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-gold-star fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="floating"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="floating"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;