import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, Building2, Landmark, Heart, Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Rocket,
    title: "Startups",
    desc: "Launch faster with MVPs, scalable architecture, and investor-ready platforms. We help you go from idea to product-market fit.",
    solutions: ["MVP Development", "Rapid Prototyping", "Scalable Infrastructure", "Technical Advisory"],
  },
  {
    icon: Building2,
    title: "Small & Medium Enterprises",
    desc: "Digitize operations, automate workflows, and build a competitive edge with custom software solutions.",
    solutions: ["Process Automation", "Custom CRM/ERP", "Digital Transformation", "E-commerce Solutions"],
  },
  {
    icon: Landmark,
    title: "Enterprises",
    desc: "Modernize legacy systems, strengthen security posture, and build platforms that serve millions of users.",
    solutions: ["Legacy Modernization", "Enterprise Integration", "Security Hardening", "Cloud Migration"],
  },
  {
    icon: Heart,
    title: "NGOs & Institutions",
    desc: "Technology for impact. We build donor platforms, case management systems, and data solutions for mission-driven organizations.",
    solutions: ["Donor Management", "Impact Analytics", "Field Data Collection", "Beneficiary Portals"],
  },
  {
    icon: Layers,
    title: "Digital Products & Platforms",
    desc: "Build, scale, and secure digital products that delight users and generate revenue.",
    solutions: ["SaaS Platforms", "Marketplace Development", "API-First Products", "Performance Optimization"],
  },
];

const Industries = () => (
  <main className="pt-20">
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Industries</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Purpose-Built for <span className="text-gradient">Every Sector</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We understand the nuances of your industry and deliver technology that fits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors flex flex-col"
            >
              <div className="p-2.5 rounded-md bg-primary/10 inline-block mb-4 self-start">
                <ind.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{ind.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{ind.desc}</p>
              <div className="flex flex-wrap gap-2">
                {ind.solutions.map((s, j) => (
                  <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact">
            <Button size="lg" className="gradient-primary text-primary-foreground border-0 hover:opacity-90">
              Discuss Your Industry Needs <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default Industries;
