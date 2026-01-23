import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Workflow, BarChart3, Zap, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Automation Systems",
    shortDescription: "End-to-end workflow automation that eliminates repetitive tasks.",
    fullDescription: `Transform your business operations with comprehensive AI-powered automation systems. We design and implement end-to-end workflows that eliminate manual, repetitive tasks across your organization.

Our automation systems integrate seamlessly with your existing tools and processes, handling everything from data entry and document processing to complex multi-step business workflows. We focus on building systems that are reliable, scalable, and easy to maintain.

**What we deliver:**
• Custom workflow automation tailored to your business needs
• Integration with your existing software stack (CRM, ERP, databases, APIs)
• Intelligent document processing and data extraction
• Automated reporting and data synchronization
• Process monitoring and optimization tools

**Ideal for:** Companies looking to reduce operational overhead, eliminate human error in repetitive tasks, and scale operations without proportionally increasing headcount.`,
    useCases: ["Document processing automation", "Data entry and migration", "Multi-system integrations", "Workflow orchestration"]
  },
  {
    icon: Workflow,
    title: "AI Assistants & Agentic Workflows",
    shortDescription: "Autonomous agents that handle complex multi-step processes with intelligent decision-making.",
    fullDescription: `Build AI assistants and agentic systems that work autonomously while maintaining human oversight where it matters most. Our agents can handle complex, multi-step processes that require reasoning, decision-making, and adaptation.

These aren't simple chatbots—they're sophisticated systems that can research, analyze, plan, execute, and learn from outcomes. We design them with human-in-the-loop checkpoints, ensuring critical decisions always have human validation.

**What we deliver:**
• Autonomous AI agents for specific business functions
• Multi-step workflow automation with intelligent routing
• Context-aware decision-making systems
• Self-improving systems that learn from outcomes
• Human oversight and intervention points

**Ideal for:** Teams that need intelligent automation for complex processes like research, analysis, customer onboarding, or multi-department coordination.`,
    useCases: ["Research and analysis agents", "Customer onboarding automation", "Intelligent routing systems", "Multi-department coordination"]
  },
  {
    icon: BarChart3,
    title: "Decision-Support & Analytics Engines",
    shortDescription: "Real-time intelligence systems that transform data into actionable insights.",
    fullDescription: `Turn your data into a competitive advantage with AI-powered decision-support systems. We build analytics engines that process large volumes of data in real-time, identifying patterns, predicting outcomes, and recommending actions.

Our systems don't just show you what happened—they help you understand why it happened and what you should do next. We combine data analysis, predictive modeling, and business logic to create systems that support better decision-making at every level.

**What we deliver:**
• Real-time data processing and analysis systems
• Predictive analytics and forecasting models
• Automated insight generation and reporting
• Custom dashboards and visualization tools
• Recommendation engines for business decisions

**Ideal for:** Organizations with significant data assets looking to make faster, more informed decisions. Particularly valuable for operations, finance, marketing, and strategic planning teams.`,
    useCases: ["Predictive analytics", "Real-time business intelligence", "Automated reporting", "Decision recommendation systems"]
  },
  {
    icon: Zap,
    title: "Custom AI Tooling",
    shortDescription: "Tailored AI solutions built using the same frameworks powering our products.",
    fullDescription: `When off-the-shelf solutions don't fit, we build custom AI tools specifically for your needs. We use the same frameworks, principles, and engineering practices that power our own products, ensuring you get production-grade systems.

Whether it's internal tooling to improve your team's productivity or customer-facing features that differentiate your product, we build with modularity, scalability, and maintainability in mind.

**What we deliver:**
• Custom AI models and algorithms for your specific use case
• Internal productivity tools and automation
• Customer-facing AI features and capabilities
• Integration with existing systems and workflows
• Ongoing maintenance and optimization

**Ideal for:** Companies with unique requirements that can't be met by existing solutions, or those looking to build AI capabilities as a core differentiator.`,
    useCases: ["Custom AI models", "Internal productivity tools", "Customer-facing AI features", "Specialized automation"]
  }
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 overflow-hidden bg-quantum/20">
      {/* Background */}
      <div className="absolute inset-0 noise-overlay opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neural/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neural/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-neural/10 blur-[150px]" />
      
      <div className="container px-6 md:px-8" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-neural text-sm font-semibold tracking-widest uppercase mb-4 block">
              Custom Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-6">
              AI Systems & Automation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Beyond our internal products, we offer selective, high-quality custom AI and automation work. 
              We build using the same frameworks and principles that power our own products.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group card-glass rounded-2xl p-8 hover-lift border border-neural/20 hover:border-neural/40 transition-all cursor-pointer"
                onClick={() => setSelectedService(index)}
              >
                <div className="w-12 h-12 rounded-xl bg-neural/20 flex items-center justify-center mb-6 group-hover:bg-neural/30 transition-colors">
                  <service.icon className="w-6 h-6 text-neural" />
                </div>
                <h3 className="text-xl font-semibold text-ivory mb-3 group-hover:text-gradient-violet transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
                <div className="mt-4 text-xs text-neural/60 group-hover:text-neural transition-colors">
                  Click to learn more →
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service Detail Dialog */}
          <Dialog open={selectedService !== null} onOpenChange={(open) => {
            if (!open) setSelectedService(null);
          }}>
            <DialogContent className="max-w-3xl max-h-[80vh] border-neural/30 bg-background/95 backdrop-blur-xl">
              {selectedService !== null && (() => {
                const ServiceIcon = services[selectedService].icon;
                return (
                  <>
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-ivory flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-neural/20 flex items-center justify-center">
                          {ServiceIcon && (
                            <ServiceIcon className="w-5 h-5 text-neural" />
                          )}
                        </div>
                        {services[selectedService].title}
                      </DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                      {services[selectedService].shortDescription}
                    </DialogDescription>
                  </DialogHeader>
                  <ScrollArea className="max-h-[60vh] pr-4">
                    <div className="space-y-4 mt-4">
                      <div className="prose prose-invert max-w-none">
                        <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                          {services[selectedService].fullDescription}
                        </p>
                      </div>
                      {services[selectedService].useCases && (
                        <div className="pt-4 border-t border-neural/20">
                          <h4 className="text-sm font-semibold text-ivory mb-3">Common Use Cases:</h4>
                          <ul className="space-y-2">
                            {services[selectedService].useCases.map((useCase, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-neural mt-1">•</span>
                                <span>{useCase}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                  </>
                );
              })()}
            </DialogContent>
          </Dialog>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Button
              variant="hero"
              size="xl"
              type="button"
              className="group"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.pushState(null, "", "#contact");
                }
              }}
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              We work with founders, teams, and businesses seeking AI-powered solutions
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
