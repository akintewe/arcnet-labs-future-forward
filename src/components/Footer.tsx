import { motion } from "framer-motion";

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
              <h3 className="text-2xl font-bold text-ivory mb-2">
                Arcnet<span className="text-neural">Labs</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Engineering the future of intelligent systems.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-8"
            >
              {["About", "Work", "Philosophy", "Contact"].map((item) => (
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
