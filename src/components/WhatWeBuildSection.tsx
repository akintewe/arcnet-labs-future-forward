import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Bot, 
  BarChart3, 
  Lightbulb, 
  Gamepad2, 
  Building2, 
  Users 
} from "lucide-react";

const offerings = [
  {
    icon: Bot,
    title: "Intelligent Automation Tools",
    description: "End-to-end workflow automation that eliminates repetitive tasks and accelerates productivity.",
    gradient: "from-neural/20 to-quantum/20"
  },
  {
    icon: Users,
    title: "AI Assistants & Agentic Workflows",
    description: "Autonomous agents that handle complex multi-step processes with human-like reasoning.",
    gradient: "from-rose/20 to-neural/20"
  },
  {
    icon: BarChart3,
    title: "Decision-Support & Analytics",
    description: "Real-time intelligence engines that transform data into actionable insights.",
    gradient: "from-quantum/20 to-neural/20"
  },
  {
    icon: Lightbulb,
    title: "Creative & Productivity AI",
    description: "Tools that amplify human creativity and supercharge individual output.",
    gradient: "from-neural/20 to-rose/20"
  },
  {
    icon: Gamepad2,
    title: "Gaming AI Products",
    description: "Intelligent systems for game development, player analytics, and immersive experiences.",
    gradient: "from-rose/20 to-quantum/20"
  },
  {
    icon: Building2,
    title: "B2B & B2C SaaS Platforms",
    description: "Vertical AI products designed for specific industries and use cases.",
    gradient: "from-quantum/20 to-rose/20"
  }
];

const WhatWeBuildSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-neural/10 blur-[120px]" />
      
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
              What We Build
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-6">
              Intelligent Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From autonomous agents to enterprise platforms, we engineer 
              AI-native solutions across domains.
            </p>
          </motion.div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${offering.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative card-glass rounded-2xl p-8 h-full hover-lift border border-transparent group-hover:border-neural/30 transition-all">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <offering.icon className="w-6 h-6 text-neural" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-ivory mb-3 group-hover:text-gradient-violet transition-all">
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {offering.description}
                  </p>

                  {/* Hover Glow */}
                  <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neural to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuildSection;
