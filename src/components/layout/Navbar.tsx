import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/ui/magnetic";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Why Us", to: "/why-appforgex" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/40 backdrop-blur-3xl border-b border-white/5 py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/appforgex-logo.png"
            alt="AppforgeX"
            className={`transition-all duration-300 ${scrolled ? "h-12" : "h-16"} w-auto`}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors group ${location.pathname === link.to
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <span className="relative z-10">{link.label}</span>
              {location.pathname === link.to ? (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              ) : (
                <span className="absolute inset-0 bg-primary/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact">
            <Magnetic strength={20}>
              <Button
                size="sm"
                className="gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Get a Consultation
              </Button>
            </Magnetic>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === link.to
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full gradient-primary text-primary-foreground border-0 mt-2">
                  Get a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
