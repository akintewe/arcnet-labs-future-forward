import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import contactBg from "@/assets/images/social-media/arc Lab 14.png";
import businessCard from "@/assets/images/stationery/business card 1 back.pdf";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPdfLoading, setIsPdfLoading] = useState(true);

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60" />
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-neural/10 blur-[150px]" />

      <div className="container px-6 md:px-8" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-6 drop-shadow-lg">
              Let's build something
              <br />
              <span className="text-gradient-violet drop-shadow-lg">intelligent.</span>
            </h2>
            <p className="text-lg text-ivory/90 max-w-xl mx-auto mb-12 drop-shadow-md">
              Ready to transform your ideas into AI-powered reality? 
              We're here to help you build the future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="group shadow-2xl shadow-neural/40 hover:shadow-neural/60 hover:scale-105 transition-all brightness-110"
              onClick={() => setIsDialogOpen(true)}
            >
              <Mail className="w-5 h-5" />
              Get in Touch
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => {
        setIsDialogOpen(open);
        if (open) setIsPdfLoading(true);
      }}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[95vh] p-0 border-neural/30 bg-background/95 backdrop-blur-xl overflow-hidden flex flex-col m-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col h-full"
          >
            {/* Animated Glow Border */}
            <motion.div
              className="absolute inset-0 rounded-lg -z-10"
              animate={{
                boxShadow: [
                  "0 0 40px hsl(var(--neural-violet) / 0.3)",
                  "0 0 60px hsl(var(--neural-violet) / 0.5)",
                  "0 0 40px hsl(var(--neural-violet) / 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <DialogHeader className="p-4 md:p-6 pb-3 md:pb-4 flex-shrink-0">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-ivory text-center">
                Get in Touch
              </DialogTitle>
              <DialogDescription className="text-center text-muted-foreground text-sm md:text-base">
                Connect with us to start building something intelligent
              </DialogDescription>
            </DialogHeader>
            
            {/* Business Card Display */}
            <div className="relative p-4 md:p-6 pt-0 flex-1 min-h-0 overflow-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative w-full rounded-2xl overflow-hidden bg-background/50 border border-neural/20 shadow-xl"
                style={{ 
                  aspectRatio: '3.5 / 2',
                  minHeight: '400px',
                  height: 'auto'
                }}
              >
                {isPdfLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10 rounded-2xl">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 border-4 border-neural/30 border-t-neural rounded-full animate-spin mb-4 mx-auto" />
                      <p className="text-ivory/60 text-sm md:text-base">Loading business card...</p>
                    </motion.div>
                  </div>
                )}
                <iframe
                  src={`${businessCard}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit&view=Fit`}
                  className="w-full h-full rounded-xl border-0"
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    minHeight: '400px',
                    border: 'none',
                    display: 'block'
                  }}
                  onLoad={() => setIsPdfLoading(false)}
                  title="Business Card"
                />
              </motion.div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
