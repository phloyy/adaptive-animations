import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Headphones, Database, TrendingUp, Calculator, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "We provide top-notch customer assistance with multichannel support, chatbots, and trained agents.",
    dark: false,
  },
  {
    icon: Database,
    title: "Data Entry & Processing",
    description: "Fast and accurate data entry and management, including data validation, cleansing and migration.",
    dark: false,
  },
  {
    icon: TrendingUp,
    title: "Sales",
    description: "Our sales team offers an in-one-package solution, a sophisticated customer management strategy with smart cold outreach automation.",
    dark: false,
  },
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description: "We specialize in the key financial operations including AP/AR, reconciliations and bank transactions.",
    dark: true,
  },
  {
    icon: Truck,
    title: "Supply Chain Consulting",
    description: "We provide expert advice on all logistics, from vendor relationship management to inventory management.",
    dark: true,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 section-dark" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-medium tracking-wider uppercase"
          >
            What Hirex is For?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mt-4 max-w-3xl mx-auto"
          >
            Scalable Support Tailored to Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto"
          >
            Hirex is designed for companies across various industries that need a reliable, ready-to-work team for customer support, data collection, and operational efficiency.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-background rounded-2xl p-8 group hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <service.icon className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {services.slice(3).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 group hover:bg-primary-foreground/15 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-foreground/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" className="group">
            Book a demo
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
