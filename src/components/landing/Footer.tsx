import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Contact */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 text-2xl font-display font-bold text-primary-foreground mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">hx</span>
              </div>
              <span>hirex</span>
            </motion.a>
            
            <div className="space-y-3 text-primary-foreground/70">
              <a href="tel:+11233211122" className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5" />
                +1 (123) 321-11-22
              </a>
              <a href="mailto:info@hirx.ai" className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
                info@hirx.ai
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "Services", "How It Works", "About Us"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {["Customer Support", "Data Entry", "Sales", "Accounting"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © hirex 2026
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/20 hover:text-primary-foreground transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-primary-foreground/50 text-sm">
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
