const TechnologiesSection = () => {
  const technologies = [
    {
      name: "HTML5",
      icon: "🌐",
      color: "#E34F26"
    },
    {
      name: "CSS3",
      icon: "🎨",
      color: "#1572B6"
    },
    {
      name: "JavaScript",
      icon: "⚡",
      color: "#F7DF1E"
    },
    {
      name: "React",
      icon: "⚛️",
      color: "#61DAFB"
    },
    {
      name: "WordPress",
      icon: "📝",
      color: "#21759B"
    },
    {
      name: "Figma",
      icon: "🎭",
      color: "#F24E1E"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technologies & Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The modern technologies I use to build amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center space-y-4"
            >
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center icon-3d border-2 border-gray-100 group-hover:border-primary/20 transition-all duration-300">
                <span className="text-3xl" role="img" aria-label={tech.name}>
                  {tech.icon}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-primary text-white rounded-full shadow-lg">
            <span className="text-sm font-medium">Always learning new technologies</span>
            <span className="animate-pulse">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;