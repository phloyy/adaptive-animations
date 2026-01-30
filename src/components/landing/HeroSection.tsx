import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCube = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    <motion.div
      className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl backdrop-blur-sm border border-accent/20"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen section-dark overflow-hidden pt-20">
      {/* Floating Elements */}
      <FloatingCube className="top-32 left-[10%] hidden md:block" delay={0} />
      <FloatingCube className="top-48 right-[15%] hidden md:block" delay={0.3} />
      <FloatingCube className="bottom-32 left-[5%] hidden md:block" delay={0.6} />
      <FloatingCube className="bottom-48 right-[8%] hidden md:block" delay={0.9} />

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary-foreground max-w-4xl leading-tight"
          >
            All-In-One Outsourcing
            <br />
            <span className="gradient-text">& Expert Support.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl"
          >
            Revolutionize your operations with our skilled professionals. Scale your team, cut costs, and accelerate growth with hirex outsourcing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl">
              Book a demo
            </Button>
            <Button variant="heroOutline" size="xl">
              Get a quote
            </Button>
          </motion.div>

          {/* Video Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 w-full max-w-4xl"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              {/* Placeholder Video Preview */}
              <div className="aspect-video bg-gradient-to-br from-primary/40 to-accent/20 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover opacity-80"
                />
                {/* Play Button Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-primary/30"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                >
                  <motion.div
                    className="w-20 h-20 bg-primary-foreground rounded-full flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120V60C240 20 480 0 720 0C960 0 1200 20 1440 60V120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
