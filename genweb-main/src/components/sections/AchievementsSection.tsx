import { useEffect, useState, useRef } from "react";

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 20, suffix: "+", label: "Happy Clients" },
    { number: 2, suffix: "+", label: "Years Experience" },
    { number: 100, suffix: "%", label: "Satisfaction Rate" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <span className="counter text-4xl lg:text-5xl font-bold text-white">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My Achievements
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Numbers that reflect my commitment to excellence and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/10 rounded-3xl backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-white/20 card-3d"
            >
              <div className="mb-4">
                <Counter end={achievement.number} suffix={achievement.suffix} />
              </div>
              <p className="text-blue-100 font-medium text-lg">
                {achievement.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;