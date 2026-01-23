import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/api/contact";
import contactBg from "@/assets/images/social-media/arc Lab 14.png";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        toast({
          title: "Message sent! 🎉",
          description: "We'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          message: "",
        });
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
      
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden scroll-mt-28">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat dark:opacity-60 opacity-30"
        style={{ 
          backgroundImage: `url(${contactBg})`,
          backgroundPosition: 'center bottom'
        }}
      />
      
      {/* Mobile-only: Cover top half of background */}
      <div className="md:hidden absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-background via-background to-transparent" />
      
      {/* Desktop-only: Cover more of top half */}
      <div className="hidden md:block absolute top-0 left-0 right-0 h-[55%] bg-gradient-to-b from-background via-background/95 to-transparent" />
      
      {/* Desktop: Position background to show bottom portion */}
      <style>{`
        @media (min-width: 768px) {
          #contact > div:first-child {
            background-position: center 95% !important;
          }
        }
      `}</style>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60" />
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-neural/10 blur-[150px]" />

      <div className="container px-6 md:px-8" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 drop-shadow-lg" style={{ lineHeight: '1.2', overflow: 'visible' }}>
              Let's build something
              <br />
              <span className="text-gradient-violet drop-shadow-lg">powerful.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-4 drop-shadow-md">
              Hire ArcnetLabs for custom AI systems and automation work.
            </p>
            <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8 drop-shadow-md">
              We work with founders, teams, and businesses seeking AI-powered solutions. 
              <br className="hidden sm:block" />
              <span className="block sm:inline mt-2 sm:mt-0">Partnerships and general inquiries welcome.</span>
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="card-glass rounded-2xl p-6 md:p-8 border border-neural/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-background/50 border-neural/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-background/50 border-neural/30"
                    />
        </div>
      </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company name (optional)"
                      className="bg-background/50 border-neural/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-foreground">Project Type</Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-neural/30"
                    >
                      <option value="">Select project type</option>
                      <option value="automation">AI-Powered Automation</option>
                      <option value="ai-assistant">AI Assistant & Workflows</option>
                      <option value="analytics">Decision-Support & Analytics</option>
                      <option value="custom-tooling">Custom AI Tooling</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, or how we can help..."
                    rows={6}
                    className="bg-background/50 border-neural/30 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                      <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
