import { Code, Palette, Smartphone, Search, ShoppingCart, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhatIDoSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices",
      iconClass: "service-icon-web-dev"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly designs that convert visitors into customers",
      iconClass: "service-icon-ui-design"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Responsive designs that work perfectly on all devices and screen sizes",
      iconClass: "service-icon-mobile"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization to help your website rank higher",
      iconClass: "service-icon-seo"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing and inventory management",
      iconClass: "service-icon-ecommerce"
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Strategic planning and guidance for your digital transformation",
      iconClass: "service-icon-consultation"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What I Do
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I specialize in creating digital experiences that help businesses thrive in the modern world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 card-3d"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`w-20 h-20 rounded-full shadow-lg flex items-center justify-center icon-3d transition-all duration-300 ${service.iconClass}`}>
                  <service.icon className="h-10 w-10 lucide" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="gradient" size="lg" className="group">
              See More of My Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;