import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import aavasHousingImg from "@/assets/projects/aavas-housing.jpg";
import investmentExchangeImg from "@/assets/projects/investment-exchange.jpg";
import coversyncInnovationsImg from "@/assets/projects/coversync-innovations.jpg";

const RecentWorkSection = () => {
  const projects = [
    {
      id: 1,
      title: "Aavas Housing",
      description: "Modern real estate platform with advanced property search and listing management",
      image: aavasHousingImg,
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://aavashousing.com"
    },
    {
      id: 2,
      title: "The Investment Exchange",
      description: "Professional investment platform with real-time data and portfolio management",
      image: investmentExchangeImg,
      tags: ["Vue.js", "Express", "PostgreSQL"],
      liveUrl: "https://investmentexchange.com"
    },
    {
      id: 3,
      title: "CoverSync Innovations",
      description: "Technology consulting website with modern design and service showcase",
      image: coversyncInnovationsImg,
      tags: ["WordPress", "PHP", "MySQL"],
      liveUrl: "https://coversync.com"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my latest projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-3d"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="heroOutline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </Button>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-300"
                >
                  Visit Project
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio">
            <Button variant="gradient" size="lg" className="group">
              View More Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentWorkSection;