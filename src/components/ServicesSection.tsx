import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Workflow, BarChart3, Zap, Sparkles } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Automation Systems",
    description: "End-to-end workflow automation that eliminates repetitive tasks and accelerates productivity across your organization."
  },
  {
    icon: Workflow,
    title: "AI Assistants & Agentic Workflows",
    description: "Autonomous agents that handle complex multi-step processes with human-like reasoning and decision-making."
  },
  {
    icon: BarChart3,
    title: "Decision-Support & Analytics Engines",
    description: "Real-time intelligence systems that transform data into actionable insights for better business decisions."
  },
  {
    icon: Zap,
    title: "Custom AI Tooling",
    description: "Tailored AI solutions for internal operations or customer-facing use cases, built using the same frameworks powering our products."
  }
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neural/30 bg-neural/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-neural" />
              <span className="text-sm text-ivory/80">Selective • High-Quality • AI-First</span>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group card-glass rounded-2xl p-8 hover-lift border border-neural/20 hover:border-neural/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-neural/20 flex items-center justify-center mb-6 group-hover:bg-neural/30 transition-colors">
                  <service.icon className="w-6 h-6 text-neural" />
                </div>
                <h3 className="text-xl font-semibold text-ivory mb-3 group-hover:text-gradient-violet transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

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
              className="group"
              onClick={() => {
                // Update URL hash and scroll
                window.location.hash = 'contact';
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
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
