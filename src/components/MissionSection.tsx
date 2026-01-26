import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const missionPages = [
  {
    title: "Our Mission",
    content: [
      "To build practical,",
      "scalable AI systems",
      "that meaningfully improve",
      "how people think, work,",
      "and interact with technology."
    ]
  },
  {
    title: "Why Practical AI",
    content: [
      "We focus on AI systems that solve real problems,",
      "not just demonstrate capabilities.",
      "Every system we build must deliver measurable value:",
      "saving time, reducing errors, enabling new possibilities,",
      "or improving decision-making quality."
    ]
  },
  {
    title: "Scalability from Day One",
    content: [
      "Scalability isn't an afterthought—it's built into our architecture.",
      "We design systems that start small but can grow",
      "to handle enterprise-scale workloads without",
      "requiring complete rewrites. This means modular design,",
      "efficient resource usage, and clear scaling paths."
    ]
  },
  {
    title: "Meaningful Impact",
    content: [
      "We measure success by the impact on how people work.",
      "Our systems should make people more effective,",
      "help them make better decisions, and unlock",
      "capabilities they didn't have before.",
      "Technology for technology's sake isn't our goal."
    ]
  }
];

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-scroll carousel every 5 seconds with fade animation
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        // Loop back to the first slide
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="mission" className="relative py-40 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:opacity-40 opacity-25"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)",
          backgroundPosition: "center"
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/70 dark:from-background/70 dark:via-background/50 dark:to-background/70" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-neural/5 blur-[150px]" />
      
      <div className="container px-6 md:px-8 relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-neural text-sm font-semibold tracking-widest uppercase">
              Our Mission
            </span>
          </motion.div>

          {/* Carousel */}
          <div className="relative min-h-[350px]">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent className="relative [&>*]:transition-opacity [&>*]:duration-800 [&>*]:ease-in-out">
                {missionPages.map((page, pageIndex) => (
                  <CarouselItem
                    key={pageIndex}
                    className="relative"
                    style={{
                      opacity: pageIndex + 1 === current ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out'
                    }}
                  >
                    <div className="min-h-[350px] flex items-center justify-center px-4">
                      <div className="card-glass rounded-2xl p-8 md:p-10 max-w-2xl w-full">
                        <h3 className="text-lg md:text-xl font-semibold text-neural mb-6 text-center">
                          {page.title}
                        </h3>
                        <div className="space-y-1">
                          {page.content.map((line, lineIndex) => (
                            <p
                              key={lineIndex}
                              className={`text-base md:text-lg lg:text-xl font-medium leading-relaxed text-center ${
                                lineIndex === 1 || lineIndex === 2
                                  ? "text-gradient-violet"
                                  : "text-foreground/90"
                              }`}
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 md:left-8" />
              <CarouselNext className="right-4 md:right-8" />
            </Carousel>
          </div>

          {/* Carousel Indicators - More Clear */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-col items-center gap-3"
          >
            <div className="flex justify-center gap-2">
              {missionPages.map((_, i) => (
                <button
                key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i + 1 === current ? "bg-neural w-8" : "bg-neural/40 w-2"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
              />
            ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {current} of {missionPages.length}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
