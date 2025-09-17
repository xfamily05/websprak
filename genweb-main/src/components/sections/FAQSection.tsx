import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I offer a comprehensive range of digital services including Web Development, WordPress Development, E-commerce Solutions, Graphic Design, Business Setup, and Data Entry & Management. Each service is tailored to meet your specific business needs and goals."
    },
    {
      question: "How long does it take to complete a website project?",
      answer: "Project timelines vary depending on complexity and requirements. A basic website typically takes 1-2 weeks, while more complex e-commerce or custom solutions may take 3-6 weeks. I'll provide you with a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! I offer ongoing support and maintenance services to ensure your website stays updated, secure, and performs optimally. This includes regular updates, security monitoring, backup services, and technical support whenever you need it."
    },
    {
      question: "What is your pricing structure?",
      answer: "My pricing is transparent and competitive, ranging from ₹5,000 for basic websites to ₹25,000 for comprehensive e-commerce solutions. I offer three main packages: Basic (₹5,000), Standard (₹10,000), and Premium (₹15,000). Each package includes different features and services."
    },
    {
      question: "Can you help with existing website redesign or improvements?",
      answer: "Absolutely! I can help redesign your existing website, improve its performance, add new features, or migrate it to a new platform. I'll analyze your current site and provide recommendations for enhancements that align with your business objectives."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about my services and working process
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="h-6 w-6 text-primary transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400 transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFAQ === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? I'm here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;