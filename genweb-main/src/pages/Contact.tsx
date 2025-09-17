import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
    honeypot: "" // Honeypot field for bot protection
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);
  const { toast } = useToast();

  const MAX_SUBMISSIONS = 5;

  const validateName = (name: string) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!name.trim()) return "Name is required";
    if (!nameRegex.test(name)) return "Name should contain only letters and spaces";
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const sanitizeMessage = (message: string) => {
    return message.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                  .replace(/<[^>]+>/g, '')
                  .trim();
  };

  const validateMessage = (message: string) => {
    const sanitized = sanitizeMessage(message);
    if (!sanitized) return "Message is required";
    
    const bannedWords = ['scam', 'fraud', 'money', 'bitcoin', 'crypto', 'investment', 'earn', 'guarantee', 'free money', 'get rich', 'mlm', 'pyramid'];
    const linkPattern = /(https?:\/\/|www\.|\.com|\.org|\.net)/i;
    
    const lowerMessage = sanitized.toLowerCase();
    
    for (const word of bannedWords) {
      if (lowerMessage.includes(word)) {
        return "Message contains inappropriate content";
      }
    }
    
    if (linkPattern.test(sanitized)) {
      return "Links are not allowed in messages";
    }
    
    return "";
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }

    if (field === 'name') {
      const error = validateName(value);
      setFormErrors(prev => ({ ...prev, name: error }));
    } else if (field === 'email') {
      const error = validateEmail(value);
      setFormErrors(prev => ({ ...prev, email: error }));
    } else if (field === 'message') {
      const error = validateMessage(value);
      setFormErrors(prev => ({ ...prev, message: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (submissionCount >= MAX_SUBMISSIONS) {
      toast({
        title: "Submission Limit Reached",
        description: "You have reached the maximum number of submissions for this session.",
        variant: "destructive"
      });
      return;
    }

    if (formData.honeypot) {
      toast({
        title: "Spam Detected",
        description: "Your submission was flagged as spam.",
        variant: "destructive"
      });
      return;
    }

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    setFormErrors({
      name: nameError,
      email: emailError,
      message: messageError
    });

    if (nameError || emailError || messageError || !formData.projectType) {
      toast({
        title: "Form Validation Error",
        description: "Please fix the errors and fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const sanitizedMessage = sanitizeMessage(formData.message);
      const message = `Hello Gitesh 👋,%0A%0AI'm interested in your services. Here are my details:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AProject Type: ${formData.projectType}%0AMessage: ${sanitizedMessage}%0A%0AThank you for choosing my services%0AI look forward to your response!`;

      const whatsappUrl = `https://wa.me/918821063490?text=${message}`;
      window.open(whatsappUrl, '_blank');
      
      setFormData({ name: "", email: "", projectType: "", message: "", honeypot: "" });
      setSubmissionCount(prev => prev + 1);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Your message has been forwarded to WhatsApp. I'll get back to you soon!",
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to start your project? Let's discuss your ideas and bring them to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let's Work Together
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm always excited to work on new projects and help businesses achieve their digital goals. 
                  Whether you need a website, design work, or consultation, I'm here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">giteshh05@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Response Time</h3>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Available Worldwide</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/giteshwar-sahu-32b309353" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://www.fb.com/l/6lp1kJRRR" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://www.instagram.com/aayansh_sahuu?igsh=MTIyc29zdTc2enA3cw==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <form onSubmit={handleSubmit} method="POST" data-netlify="true" className="space-y-6">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="website"
                  value={formData.honeypot}
                  onChange={(e) => handleInputChange('honeypot', e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Name"
                    required
                    className={`w-full ${formErrors.name ? 'border-red-500' : ''}`}
                  />
                  {formErrors.name && <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Email"
                    required
                    className={`w-full ${formErrors.email ? 'border-red-500' : ''}`}
                  />
                  {formErrors.email && <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
                  <Select name="projectType" value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="wordpress">WordPress Development</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Solutions</SelectItem>
                      <SelectItem value="design">Graphic Design</SelectItem>
                      <SelectItem value="mobile">Mobile Optimization</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Your Message"
                    required
                    rows={5}
                    className={`w-full ${formErrors.message ? 'border-red-500' : ''}`}
                  />
                  {formErrors.message && <p className="text-sm text-red-500 mt-1">{formErrors.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting || submissionCount >= MAX_SUBMISSIONS}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-5 w-5" /></>}
                </Button>

                {submissionCount > 0 && (
                  <p className="text-sm text-gray-500 text-center">
                    Submissions used: {submissionCount}/{MAX_SUBMISSIONS}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
