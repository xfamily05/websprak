import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-primary flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8 animate-slideInLeft">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Gitesh Sahu
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-100">
                Web Developer & Designer
              </h2>
            </div>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
              I create stunning, modern websites and digital experiences that help businesses grow. 
              With expertise in web development, design, and optimization, I turn your ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="heroOutline" size="lg" className="group">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="floating" size="lg" className="bg-white/20 text-white hover:bg-white hover:text-primary">
                  View My Work
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-8 text-blue-100">
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slideInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Gitesh Sahu - Web Developer & Designer"
                  className="w-full h-auto rounded-2xl shadow-lg animate-float"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;