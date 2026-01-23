import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    number: "01",
    title: "AI as Foundation",
    description: "We don't add AI as an afterthought—it's the core architecture. Every system we build assumes AI capabilities from day one, enabling capabilities that wouldn't be possible with traditional approaches."
  },
  {
    number: "02",
    title: "Human in the Loop",
    description: "The most effective AI systems amplify human expertise rather than replace it. We design clear decision points where human judgment adds critical value, creating collaborative workflows that leverage both human intuition and AI scale."
  },
  {
    number: "03",
    title: "Fast Iteration",
    description: "We prioritize shipping working prototypes over perfect plans. Our process emphasizes rapid cycles of build, test, learn, and refine—getting real feedback from real users in weeks, not months."
  },
  {
    number: "04",
    title: "Automation + Intelligence",
    description: "Simple automation saves time; intelligent automation transforms how work gets done. We combine rule-based automation with adaptive AI that learns patterns, handles edge cases, and improves over time."
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
              We don't build with AI as an add-on.
              <br />
              <span className="text-gradient-violet">We build on AI as the foundation.</span>
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
