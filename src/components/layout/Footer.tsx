import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <span className="text-xl font-bold text-gradient">AppforgeX</span>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Build Smarter. Scale Faster. Secure Everything. End-to-end digital solutions for modern organizations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
          <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="mailto:hello@appforgex.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> hello@appforgex.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> +1 (234) 567-890
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Global Operations
            </span>
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
