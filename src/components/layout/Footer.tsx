import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import Magnetic from "@/components/ui/magnetic";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block mb-6 hover:scale-105 transition-transform duration-300">
            <img src="/appforgex-logo.png" alt="AppforgeX" className="h-16 w-auto" />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Precision-engineered digital solutions. Build Smarter. Scale Faster. Secure Everything.
          </p>
          <div className="flex gap-4">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <Magnetic key={i} strength={20}>
                <a href="#" className="p-2 rounded-lg bg-secondary/80 border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all">
                  <Icon size={18} />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">Company</h4>
          <div className="flex flex-col gap-3">
            {[
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group">
                <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2" />
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>Web Development</span>
            <span>Mobile Apps</span>
            <span>AI & ML Solutions</span>
            <span>Cybersecurity</span>
            <span>Cloud & DevOps</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">Contact</h4>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <Magnetic strength={10}>
              <a href="mailto:hello@appforgex.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <div className="p-2 rounded-md bg-primary/5"><Mail size={16} className="text-primary" /></div>
                hello@appforgex.com
              </a>
            </Magnetic>
            <Magnetic strength={10}>
              <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-primary transition-colors">
                <div className="p-2 rounded-md bg-cyan/5"><Phone size={16} className="text-cyan" /></div>
                +1 (234) 567-890
              </a>
            </Magnetic>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-accent/5"><MapPin size={16} className="text-accent" /></div>
              Global Operations
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AppforgeX. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
