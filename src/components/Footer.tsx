import { motion } from "framer-motion";
import logoWordMark from "@/assets/logo/word-mark/logo word Mark Transparent.svg";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <img 
                src={logoWordMark} 
                alt="Arcnet Labs" 
                className="h-16 md:h-20 lg:h-24 w-auto mb-3 mx-auto md:mx-0"
              />
              <p className="text-base md:text-lg text-muted-foreground">
                Engineering the future of AI systems.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-8"
            >
              {["About", "Products", "Services", "Philosophy", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-ivory transition-colors"
                >
                  {item}
                </a>
              ))}
            </motion.nav>
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border/30 text-center"
          >
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Arcnet Labs. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
