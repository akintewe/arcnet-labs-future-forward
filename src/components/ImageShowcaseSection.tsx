import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { MouseEvent } from "react";

// Import social media post samples
import img1 from "@/assets/images/social-media/arc Lab 1.png";
import img2 from "@/assets/images/social-media/arc Lab 2.png";
import img3 from "@/assets/images/social-media/arc Lab 5.png";
import img4 from "@/assets/images/social-media/arc Lab 6.png";
import img5 from "@/assets/images/social-media/arc Lab 9.png";
import img6 from "@/assets/images/social-media/arc Lab 10.png";
import img7 from "@/assets/images/social-media/arc Lab 11.png";
import img8 from "@/assets/images/social-media/arc Lab 12.png";
import img9 from "@/assets/images/social-media/arc Lab 13.png";
import img10 from "@/assets/images/social-media/arc Lab 14.png";
import img11 from "@/assets/images/social-media/arc Lab 15.png";

const images = [
  { src: img1, alt: "Arcnet Labs Social Media Post 1", size: "medium" as const },
  { src: img2, alt: "Arcnet Labs Social Media Post 2", size: "large" as const },
  { src: img3, alt: "Arcnet Labs Social Media Post 3", size: "medium" as const },
  { src: img4, alt: "Arcnet Labs Social Media Post 4", size: "small" as const },
  { src: img5, alt: "Arcnet Labs Social Media Post 5", size: "large" as const },
  { src: img6, alt: "Arcnet Labs Social Media Post 6", size: "medium" as const },
  { src: img7, alt: "Arcnet Labs Social Media Post 7", size: "small" as const },
  { src: img8, alt: "Arcnet Labs Social Media Post 8", size: "medium" as const },
  { src: img9, alt: "Arcnet Labs Social Media Post 9", size: "large" as const },
  { src: img10, alt: "Arcnet Labs Social Media Post 10", size: "medium" as const },
  { src: img11, alt: "Arcnet Labs Social Media Post 11", size: "small" as const },
];

// 3D Tilt Card Component
const TiltCard = ({ image, index, isInView }: { image: typeof images[0], index: number, isInView: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const gridCols = image.size === "large" ? "md:col-span-2 lg:col-span-2" : "";
  const gridRows = image.size === "large" ? "md:row-span-2" : "";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.08,
        type: "spring",
        stiffness: 100
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative overflow-hidden rounded-2xl ${gridCols} ${gridRows} ${
        image.size === "large" ? "aspect-[2/1] md:aspect-[2/1]" : "aspect-[4/3]"
      }`}
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neural/30 via-quantum/20 to-rose/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
        animate={isHovered ? {
          backgroundPosition: ["0% 0%", "100% 100%"],
        } : {}}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Image with Parallax Effect */}
      <motion.img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
        style={{
          scale: isHovered ? 1.15 : 1,
          filter: isHovered ? "brightness(1.1) saturate(1.2)" : "brightness(1) saturate(1)",
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 border-2 border-neural/30 rounded-2xl"
        animate={isHovered ? {
          boxShadow: [
            "0 0 20px hsl(var(--neural-violet) / 0.3)",
            "0 0 40px hsl(var(--neural-violet) / 0.5)",
            "0 0 20px hsl(var(--neural-violet) / 0.3)",
          ],
        } : {
          boxShadow: "0 0 0px hsl(var(--neural-violet) / 0)",
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        initial={{ x: "-100%" }}
        animate={isHovered ? { x: "200%" } : { x: "-100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Floating Particles Effect */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-neural/60 blur-sm"
              initial={{
                x: "50%",
                y: "50%",
                scale: 0,
              }}
              animate={{
                x: `${50 + (Math.random() - 0.5) * 100}%`,
                y: `${50 + (Math.random() - 0.5) * 100}%`,
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 z-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="w-12 h-1 bg-gradient-to-r from-neural to-rose mb-3 rounded-full" />
          <p className="text-sm text-ivory/80 font-medium">{image.alt}</p>
        </motion.div>
      </div>

      {/* Light Ray Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 0%, rgba(0,0,0,0.3) 100%)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const ImageShowcaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Animated Glow Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-neural/10 blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-quantum/10 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container px-6 md:px-8 relative z-10" ref={ref}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              className="text-neural text-sm font-semibold tracking-widest uppercase mb-4 block"
              animate={isInView ? {
                opacity: [0.5, 1, 0.5],
              } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Discover Our Work
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">Explore Us</span>{" "}
              <span className="text-ivory">Today</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience our creative vision through our latest social media content and brand expressions.
            </motion.p>
          </motion.div>

          {/* Magical Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {images.map((image, index) => (
              <TiltCard key={index} image={image} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
