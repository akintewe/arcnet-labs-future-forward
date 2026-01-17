import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import brandPattern1 from "@/assets/patterns/Brand Pattern 1.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Brand Pattern Background - Prominent */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${brandPattern1})`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
          backgroundPosition: '0 0',
        }}
      />
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      
      {/* Animated Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-neural/10 blur-[120px] animate-pulse-glow" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neural/30 bg-neural/10 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-ivory/80">AI-First Engineering Lab</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            <span className="text-gradient">Building Practical AI</span>
            <br />
            <span className="text-ivory">for Everyone</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            We design, prototype, and develop AI-powered products and systems 
            that help people work smarter, make better decisions, and unlock new capabilities 
            through automation and AI agents.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" className="group" onClick={() => {
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore Products
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Work With Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
