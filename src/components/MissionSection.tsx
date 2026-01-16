import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = [
    "To accelerate",
    "the future of work",
    "by engineering AI systems",
    "that automate the repetitive,",
    "enhance human creativity,",
    "and unlock new levels of",
    "efficiency and intelligence."
  ];

  return (
    <section id="mission" className="relative py-40 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-neural/5 blur-[150px]" />
      
      <div className="container px-6 md:px-8" ref={ref}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-12"
          >
            <Sparkles className="w-5 h-5 text-neural" />
            <span className="text-neural text-sm font-semibold tracking-widest uppercase">
              Our Mission
            </span>
            <Sparkles className="w-5 h-5 text-neural" />
          </motion.div>

          {/* Mission Statement */}
          <div className="space-y-2">
            {words.map((word, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
                  index === 1 || index === 5 || index === 6
                    ? "text-gradient-violet"
                    : "text-ivory"
                }`}
              >
                {word}
              </motion.p>
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex justify-center gap-2"
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-neural animate-pulse-glow"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
