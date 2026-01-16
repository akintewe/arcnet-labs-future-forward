import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Zap, Layers, Workflow } from "lucide-react";
import brandPattern2 from "@/assets/patterns/Brand Pattern 2.svg";

const features = [
  {
    icon: Brain,
    title: "AI-First Mindset",
    description: "Every solution we build starts with intelligence at its core."
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "Streamlining complex workflows with smart, adaptive systems."
  },
  {
    icon: Workflow,
    title: "Agentic Systems",
    description: "Autonomous agents that learn, adapt, and execute with precision."
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Built to grow from prototype to production seamlessly."
  }
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      {/* Moving Brand Pattern 2 */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${brandPattern2})`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
        }}
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-quantum/20 blur-[150px] -translate-y-1/2" />
      
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
              About Arcnet Labs
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-6">
              Engineering Intelligence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a specialized AI engineering lab focused on building products that don't just 
              use artificial intelligence — they're defined by it. From concept to deployment, 
              we engineer systems that think, learn, and evolve.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group card-glass rounded-2xl p-8 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-neural/20 flex items-center justify-center mb-6 group-hover:bg-neural/30 transition-colors">
                  <feature.icon className="w-7 h-7 text-neural" />
                </div>
                <h3 className="text-xl font-semibold text-ivory mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
