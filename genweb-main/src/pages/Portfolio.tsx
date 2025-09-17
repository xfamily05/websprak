import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import aavasHousingImg from "@/assets/projects/aavas-housing.jpg";
import investmentExchangeImg from "@/assets/projects/investment-exchange.jpg";
import coversyncInnovationsImg from "@/assets/projects/coversync-innovations.jpg";
import drPrernaKohliImg from "@/assets/projects/dr-prerna-kohli.jpg";
import octalFramesImg from "@/assets/projects/octal-frames.jpg";
import ourCafeImg from "@/assets/projects/our-cafe.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Aavas Housing",
      description: "Modern real estate platform with advanced property search, listing management, and user-friendly interface for buyers and sellers.",
      image: aavasHousingImg,
      tags: ["React", "Node.js", "MongoDB", "Real Estate"],
      liveUrl: "https://aavashousing.com"
    },
    {
      id: 2,
      title: "The Investment Exchange",
      description: "Professional investment platform featuring real-time data, portfolio management, and comprehensive financial tools.",
      image: investmentExchangeImg,
      tags: ["Vue.js", "Express", "PostgreSQL", "Finance"],
      liveUrl: "https://investmentexchange.com"
    },
    {
      id: 3,
      title: "CoverSync Innovations",
      description: "Technology consulting website with modern design, service showcase, and client portfolio management system.",
      image: coversyncInnovationsImg,
      tags: ["WordPress", "PHP", "MySQL", "Consulting"],
      liveUrl: "https://coversync.com"
    },
    {
      id: 4,
      title: "Dr. Prerna Kohli",
      description: "Professional psychology and mental health practice website with appointment booking and patient resources.",
      image: drPrernaKohliImg,
      tags: ["WordPress", "Healthcare", "Booking System"],
      liveUrl: "http://drprernakohli.in"
    },
    {
      id: 5,
      title: "Octal Frames",
      description: "Creative digital agency portfolio showcasing design services, creative work, and client success stories.",
      image: octalFramesImg,
      tags: ["React", "Creative", "Portfolio", "Agency"],
      liveUrl: "https://octalframes.com/"
    },
    {
      id: 6,
      title: "Our Cafe",
      description: "Cozy cafe restaurant website featuring menu showcase, online reservations, and food delivery integration.",
      image: ourCafeImg,
      tags: ["Restaurant", "E-commerce", "Booking", "Food"],
      liveUrl: "https://stranger.wuaze.com/"
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
              My Portfolio
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              A showcase of my recent projects and creative work across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;