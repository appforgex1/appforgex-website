import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Brain, Lock, Cloud, Database, Box, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  {
    icon: Code,
    title: "Web Development",
    problem: "Your business needs a performant, scalable web presence that converts visitors into customers.",
    benefits: ["Custom web applications", "E-commerce platforms", "Progressive Web Apps", "API-first architecture"],
    useCases: "SaaS dashboards, client portals, marketplace platforms, enterprise intranets.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    problem: "Reaching customers on mobile requires polished, reliable apps that work across platforms.",
    benefits: ["iOS & Android development", "Cross-platform solutions", "Offline-first architecture", "App Store optimization"],
    useCases: "Fintech apps, logistics tracking, social platforms, on-demand services.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    problem: "Poor design costs conversions. Users abandon confusing, unattractive interfaces.",
    benefits: ["User research & personas", "Wireframing & prototyping", "Design systems", "Usability testing"],
    useCases: "Product redesigns, new product launches, design system creation.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    problem: "Unstructured data and manual processes slow decision-making and reduce efficiency.",
    benefits: ["Predictive analytics", "Natural language processing", "Computer vision", "Recommendation engines"],
    useCases: "Fraud detection, chatbots, demand forecasting, content classification.",
  },
  {
    icon: Lock,
    title: "Cybersecurity & Risk Management",
    problem: "A single breach can cost millions in damages and destroy customer trust.",
    benefits: ["Penetration testing", "Security audits", "Compliance consulting", "Incident response planning"],
    useCases: "SOC 2 compliance, GDPR readiness, vulnerability assessments, security training.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Engineering",
    problem: "Slow deployments and fragile infrastructure limit your ability to ship and scale.",
    benefits: ["CI/CD pipelines", "Container orchestration", "Multi-cloud strategy", "Infrastructure as code"],
    useCases: "Cloud migrations, auto-scaling systems, zero-downtime deployments.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    problem: "Poorly designed data layers lead to performance bottlenecks and data integrity issues.",
    benefits: ["Schema design", "Query optimization", "Data migration", "High-availability setups"],
    useCases: "Data warehouse design, legacy database migration, real-time analytics.",
  },
  {
    icon: Box,
    title: "3D Modeling & Visualization",
    problem: "Complex products and spaces are difficult to communicate with flat media alone.",
    benefits: ["Product visualization", "Architectural rendering", "Interactive 3D", "AR/VR assets"],
    useCases: "E-commerce product views, real estate tours, manufacturing prototypes.",
  },
];

const Services = () => (
  <main className="pt-20">
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Our Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Solutions That <span className="text-gradient">Deliver Results</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every service is designed to solve real business problems with measurable outcomes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-md bg-primary/10">
                      <s.icon size={22} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.problem}</p>
                  <p className="text-xs text-muted-foreground"><span className="text-cyan font-medium">Use cases:</span> {s.useCases}</p>
                </div>
                <div className="lg:w-1/2">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Business Benefits</h4>
                  <ul className="space-y-2">
                    {s.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-block mt-4">
                    <Button size="sm" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 text-xs">
                      Request a Quote <ArrowRight className="ml-1" size={14} />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Services;
