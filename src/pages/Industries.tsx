import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, Building2, Landmark, Heart, Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, scaleOnHover, smoothFadeUp } from "@/utils/animations";
import TextReveal from "@/components/ui/text-reveal";
import Magnetic from "@/components/ui/magnetic";

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
  <main className="pt-20 overflow-hidden">
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <img src="/assets/images/industries.jpg" alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background/80 to-background" />
      </div>
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mb-24 lg:mb-32"
        >
          <motion.span variants={smoothFadeUp} className="text-xs font-bold tracking-widest uppercase text-primary mb-6 block">Industries</motion.span>
          <div className="mb-10 lg:mb-12">
            <TextReveal className="text-4xl md:text-5xl lg:text-8xl font-black text-foreground leading-[1.1]">
              Purpose-Built for
            </TextReveal>
            <TextReveal delay={0.5} className="text-4xl md:text-5xl lg:text-8xl font-black text-gradient leading-[1.1]">
              Every Sector
            </TextReveal>
          </div>
          <motion.p variants={smoothFadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
            We understand the unique operational challenges of each sector and deliver precision-engineered technology that fits your specific needs.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              variants={smoothFadeUp}
              className="p-8 rounded-[2rem] glass-card hover:border-primary/30 transition-all duration-700 flex flex-col group"
            >
              <Magnetic strength={20}>
                <div className="p-4 rounded-2xl bg-primary/10 inline-block mb-6 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <ind.icon size={28} className="text-primary" />
                </div>
              </Magnetic>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{ind.title}</h3>
              <p className="text-base text-muted-foreground mb-8 flex-1 leading-relaxed">{ind.desc}</p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-border/40">
                {ind.solutions.map((s, j) => (
                  <span key={j} className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-secondary border border-border/40 text-secondary-foreground tracking-wider uppercase">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={smoothFadeUp}
          className="mt-20 text-center"
        >
          <Magnetic strength={30}>
            <Link to="/contact">
              <Button size="lg" className="h-16 px-12 text-lg gradient-primary text-primary-foreground border-0 shadow-xl shadow-primary/25 rounded-full font-bold group">
                Discuss Your Industry Needs <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  </main>
);
export default Industries;
