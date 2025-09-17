import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { Code, Palette, ShoppingCart, Database, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with modern technologies",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Cross-browser Compatible"],
      price: "₹15,000",
      popular: false,
      iconClass: "service-icon-web-dev"
    },
    {
      icon: Palette,
      title: "WordPress Development",
      description: "Professional WordPress websites and themes",
      features: ["Custom Themes", "Plugin Development", "Admin Training", "Ongoing Support"],
      price: "₹12,000",
      popular: false,
      iconClass: "service-icon-ui-design"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Mobile Optimized"],
      price: "₹25,000",
      popular: true,
      iconClass: "service-icon-ecommerce"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative designs for digital and print media",
      features: ["Logo Design", "Branding", "Social Media Graphics", "Print Design"],
      price: "₹8,000",
      popular: false,
      iconClass: "service-icon-consultation"
    },
    {
      icon: Database,
      title: "Data Entry & Management",
      description: "Professional data handling and organization",
      features: ["Data Entry", "Database Management", "Content Upload", "Quality Assurance"],
      price: "₹5,000",
      popular: false,
      iconClass: "service-icon-mobile"
    },
    {
      icon: Users,
      title: "Business Setup",
      description: "Complete digital business setup and consultation",
      features: ["Domain & Hosting", "Email Setup", "Social Media", "Analytics Setup"],
      price: "₹18,000",
      popular: false,
      iconClass: "service-icon-seo"
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: "₹5,000",
      features: [
        "Single Page Website",
        "Basic Design",
        "Mobile Responsive",
        "Contact Form",
        "1 Month Support"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "₹10,000",
      features: [
        "Up to 5 Pages",
        "Custom Design",
        "Mobile Responsive",
        "SEO Optimization",
        "Contact Forms",
        "Social Media Integration",
        "3 Months Support"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "₹15,000",
      features: [
        "Unlimited Pages",
        "Premium Design",
        "Mobile Responsive",
        "Advanced SEO",
        "E-commerce Ready",
        "Blog Integration",
        "Analytics Setup",
        "6 Months Support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
       {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              My Services
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Professional web development and design services to help your business succeed
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 card-3d ${
                  service.popular 
                    ? "border-primary bg-gradient-to-br from-primary/5 to-secondary/5" 
                    : "border-gray-100 bg-white hover:border-primary/20"
                }`}
              >
                {service.popular && (
                  <div className="flex items-center justify-center mb-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm rounded-full font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      Popular
                    </span>
                  </div>
                )}
                
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
                  
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-gray-200 w-full">
                    <div className="text-2xl font-bold text-primary mb-4">
                      {service.price}
                    </div>
                    <Button variant="gradient" className="w-full">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Development Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Website Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your website needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl shadow-lg transition-all duration-500 card-3d ${
                  pkg.popular
                    ? "border-2 border-primary bg-white shadow-2xl scale-105 lg:scale-110"
                    : "border border-gray-200 bg-white hover:shadow-xl hover:border-primary/20"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-6 py-2 bg-primary text-white text-sm rounded-full font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {pkg.name}
                  </h3>
                  
                  <div className="text-4xl font-bold text-primary">
                    {pkg.price}
                  </div>
                  
                  <ul className="space-y-4 text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={pkg.popular ? "hero" : "outline"} 
                    size="lg" 
                    className="w-full"
                  >
                    Choose {pkg.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;