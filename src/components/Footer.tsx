import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import logoWordMark from "@/assets/logo/logo-wordmark.svg";

const Footer = () => {
  const { theme, resolvedTheme } = useTheme();
  const isLightMode = (resolvedTheme || theme) === 'light';
  
  return (
    <footer className="relative py-16 border-t border-border/50 bg-background">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
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
                className="h-28 md:h-36 lg:h-44 w-auto mb-4 mx-auto md:mx-0 transition-all duration-300"
                style={{ filter: isLightMode ? 'invert(1)' : 'none' }}
              />
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                Engineering the future of AI systems.
              </p>
              <p className="text-sm text-muted-foreground/70">
                Building practical, scalable AI products and custom solutions.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-3">
                {["About", "Products", "Services", "Philosophy", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Contact & Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center md:text-left"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <p>
                  Ready to build something powerful?
                </p>
                <a
                  href="#contact"
                  className="text-neural hover:text-foreground transition-colors font-medium"
                >
                  Start a Project →
                </a>
                <p className="mt-4 text-xs text-muted-foreground/70">
                  We work with founders, teams, and businesses seeking AI-powered solutions.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8 border-t border-border/30 text-center"
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
