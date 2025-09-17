import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold">Gitesh Sahu</span>
            </div>
            <p className="text-white/80 text-sm">
              Professional Web Developer & Designer creating amazing digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/80 hover:text-white transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Web Development</li>
              <li className="text-white/80">WordPress Development</li>
              <li className="text-white/80">E-commerce Solutions</li>
              <li className="text-white/80">Graphic Design</li>
              <li className="text-white/80">Mobile Optimization</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span className="text-white/80">giteshh05@gmail.com</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/giteshwar-sahu-32b309353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.fb.com/l/6lp1kJRRR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/aayansh_sahuu?igsh=MTIyc29zdTc2enA3cw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © {currentYear} Gitesh Sahu. All rights reserved. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;