import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, ArrowRight } from "lucide-react";

const WorkflowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase block mb-4">
              Workflow Process
            </span>

            {/* Workflow Diagram */}
            <div className="relative mt-8">
              {/* Your Business Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card p-6 rounded-2xl inline-flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-foreground" />
                </div>
                <span className="font-semibold text-foreground">Your Business</span>
              </motion.div>

              {/* Connection Lines */}
              <div className="flex items-center gap-4 ml-8 mb-8">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="h-0.5 w-20 bg-gradient-to-r from-border to-accent origin-left"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="w-3 h-3 rounded-full bg-accent"
                />
              </div>

              {/* Process Buttons */}
              <div className="flex flex-wrap gap-4 ml-16">
                {["Workflows", "Expert Services"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium text-sm shadow-lg"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* Arrow to hirex */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex items-center gap-4 ml-8 my-8"
              >
                <ArrowRight className="w-6 h-6 text-accent" />
              </motion.div>

              {/* hirex Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="section-dark p-6 rounded-2xl inline-flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">hx</span>
                </div>
                <span className="font-bold text-primary-foreground text-xl">hirex</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Revolutionizing Your
              <br />
              Business Workflow
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At hirex, we transform your operational processes by seamlessly integrating our expert outsourcing services, resulting in greater efficiency, lower costs and superior outcomes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
