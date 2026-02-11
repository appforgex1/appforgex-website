import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Brain, Lock, Cloud, Database, Box, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { fadeInUp, staggerContainer, scaleOnHover, smoothFadeUp } from "@/utils/animations";
import TextReveal from "@/components/ui/text-reveal";
import Magnetic from "@/components/ui/magnetic";

const services = [
  {
    icon: Code,
    title: "Web Development",
    img: "/assets/images/mobiledev.jpg",
    problem: "Your business needs a performant, scalable web presence that converts visitors into customers.",
    benefits: ["Custom web applications", "E-commerce platforms", "Progressive Web Apps", "API-first architecture"],
    useCases: "SaaS dashboards, client portals, marketplace platforms, enterprise intranets.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    img: "/assets/images/mobile.jpg",
    problem: "Reaching customers on mobile requires polished, reliable apps that work across platforms.",
    benefits: ["iOS & Android development", "Cross-platform solutions", "Offline-first architecture", "App Store optimization"],
    useCases: "Fintech apps, logistics tracking, social platforms, on-demand services.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    img: "/assets/images/design.jpg",
    problem: "Poor design costs conversions. Users abandon confusing, unattractive interfaces.",
    benefits: ["User research & personas", "Wireframing & prototyping", "Design systems", "Usability testing"],
    useCases: "Product redesigns, new product launches, design system creation.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    img: "/assets/images/ai.jpg",
    problem: "Unstructured data and manual processes slow decision-making and reduce efficiency.",
    benefits: ["Predictive analytics", "Natural language processing", "Computer vision", "Recommendation engines"],
    useCases: "Fraud detection, chatbots, demand forecasting, content classification.",
  },
  {
    icon: Lock,
    title: "Cybersecurity & Risk Management",
    img: "/assets/images/cybersecurity.jpg",
    problem: "A single breach can cost millions in damages and destroy customer trust.",
    benefits: ["Penetration testing", "Security audits", "Compliance consulting", "Incident response planning"],
    useCases: "SOC 2 compliance, GDPR readiness, vulnerability assessments, security training.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Engineering",
    img: "/assets/images/DevOps.jpg",
    problem: "Slow deployments and fragile infrastructure limit your ability to ship and scale.",
    benefits: ["CI/CD pipelines", "Container orchestration", "Multi-cloud strategy", "Infrastructure as code"],
    useCases: "Cloud migrations, auto-scaling systems, zero-downtime deployments.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    img: "/assets/images/database.jpg",
    problem: "Poorly designed data layers lead to performance bottlenecks and data integrity issues.",
    benefits: ["Schema design", "Query optimization", "Data migration", "High-availability setups"],
    useCases: "Data warehouse design, legacy database migration, real-time analytics.",
  },
  {
    icon: Box,
    title: "3D Modeling & Visualization",
    img: "/assets/images/design.jpg",
    problem: "Complex products and spaces are difficult to communicate with flat media alone.",
    benefits: ["Product visualization", "Architectural rendering", "Interactive 3D", "AR/VR assets"],
    useCases: "E-commerce product views, real estate tours, manufacturing prototypes.",
  },
];

const Services = () => (
  <main className="pt-20 overflow-hidden">
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <video autoPlay muted loop playsInline poster="/assets/images/hero.jpg" className="w-full h-full object-cover opacity-60">
          <source src="/assets/videos/services.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-background/80 to-background" />
      </div>
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mb-24 lg:mb-32"
        >
          <motion.span variants={smoothFadeUp} className="text-xs font-bold tracking-widest uppercase text-primary mb-6 block">Our Services</motion.span>
          <div className="mb-10 lg:mb-12">
            <TextReveal className="text-4xl md:text-5xl lg:text-8xl font-black text-foreground leading-tight">
              Solutions That
            </TextReveal>
            <TextReveal delay={0.5} className="text-4xl md:text-5xl lg:text-8xl font-black text-gradient leading-tight">
              Deliver Results
            </TextReveal>
          </div>
          <motion.p variants={smoothFadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
            Every service is designed to solve real business problems with measurable outcomes through precision engineering and world-class design.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-12"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={smoothFadeUp}
              className="p-8 md:p-12 rounded-[2rem] glass-card hover:border-primary/30 transition-all duration-700 shadow-2xl group"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <div className="relative mb-8 rounded-2xl overflow-hidden h-48 md:h-64 border border-border/30">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-6 flex items-center gap-4">
                      <Magnetic strength={20}>
                        <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 group-hover:scale-110 transition-all">
                          <s.icon size={28} className="text-primary" />
                        </div>
                      </Magnetic>
                      <h3 className="text-3xl font-bold text-foreground drop-shadow-lg">{s.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{s.problem}</p>
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border/40 inline-block">
                    <p className="text-sm font-medium text-muted-foreground">
                      <span className="text-cyan">Typical Use Cases:</span> {s.useCases}
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                      <div className="w-8 h-px bg-primary" /> Core Benefits
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {s.benefits.map((b, j) => (
                        <li key={j} className="flex items-center gap-3 text-muted-foreground">
                          <CheckCircle2 size={18} className="text-primary shrink-0" />
                          <span className="text-sm md:text-base">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12 flex items-center justify-between border-t border-border/30 pt-8">
                    <p className="text-sm text-muted-foreground italic max-w-[200px]">Strategic execution at every layer.</p>
                    <Link to="/contact">
                      <Magnetic strength={20}>
                        <Button size="lg" className="gradient-primary text-primary-foreground border-0 shadow-lg shadow-primary/20 group/btn">
                          Request a Quote <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Magnetic>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </main>
);

export default Services;
