import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    number: "01",
    title: "AI as Foundation",
    description: "AI is not just the future — it is the foundation upon which we build everything."
  },
  {
    number: "02",
    title: "Human in the Loop",
    description: "The best AI amplifies human judgment. We design for collaboration, not replacement."
  },
  {
    number: "03",
    title: "Fast Iteration",
    description: "Speed is a feature. We prototype rapidly, learn quickly, and ship continuously."
  },
  {
    number: "04",
    title: "Automation + Intelligence",
    description: "True power emerges when smart automation meets adaptive intelligence."
  }
];

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="relative py-32 overflow-hidden bg-quantum/30">
      {/* Background */}
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neural/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neural/50 to-transparent" />
      
      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neural/30 to-transparent"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container px-6 md:px-8 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-ivory leading-tight">
              <span className="text-neural">"</span>
              AI is not just the future,
              <br />
              <span className="text-gradient-violet">it is the foundation.</span>
              <span className="text-neural">"</span>
            </blockquote>
          </motion.div>

          {/* Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group flex gap-6"
              >
                <span className="text-5xl font-bold text-neural/30 group-hover:text-neural/50 transition-colors">
                  {principle.number}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-ivory mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
