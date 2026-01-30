import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I rely on outsourced professionals?",
    answer: "Absolutely! Our rigorous vetting process ensures that all professionals meet high standards of quality and reliability. We provide ongoing training and quality assurance to maintain excellence.",
  },
  {
    question: "How do you guarantee the quality of your specialists?",
    answer: "We have a multi-step vetting process that includes skills assessment, background checks, and trial periods. Our team monitors performance continuously and provides regular training updates.",
  },
  {
    question: "Do I need to pay extra for taxes or other charges?",
    answer: "No hidden fees! Our transparent pricing includes all operational costs. You only pay for the services you use, and we handle all employment-related taxes and benefits.",
  },
  {
    question: "How quickly can I scale my team?",
    answer: "We can typically onboard new team members within 1-2 weeks. For urgent needs, we have a pool of pre-vetted professionals ready to start immediately.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              Know you have questions
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>
          </motion.div>

          {/* Right Side - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-muted/50 rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
