import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";

const projects = [
  {
    title: "Enterprise Resource Platform",
    client: "Global Manufacturing Corp",
    problem: "Legacy ERP system causing data silos and 40% operational inefficiency.",
    solution: "Custom cloud-native ERP with real-time dashboards, automated workflows, and unified data layer.",
    impact: ["60% faster reporting", "35% cost reduction", "99.9% uptime"],
    tags: ["Web Development", "Cloud Engineering", "Database Design"],
  },
  {
    title: "Fintech Mobile Application",
    client: "PayStream Inc.",
    problem: "Manual payment processing leading to delays and compliance risks.",
    solution: "Cross-platform mobile app with real-time payment processing, KYC integration, and fraud detection.",
    impact: ["3x transaction volume", "Zero compliance violations", "4.8★ app rating"],
    tags: ["Mobile Development", "AI/ML", "Cybersecurity"],
  },
  {
    title: "NGO Impact Dashboard",
    client: "Global Health Initiative",
    problem: "No visibility into field operations across 12 countries.",
    solution: "Real-time analytics dashboard with offline-first mobile data collection and donor reporting.",
    impact: ["12 countries connected", "80% faster reporting", "2x donor retention"],
    tags: ["Web Development", "UI/UX Design", "Database Design"],
  },
  {
    title: "AI-Powered Customer Platform",
    client: "RetailNext",
    problem: "Customer churn rates increasing due to lack of personalization.",
    solution: "ML-powered recommendation engine with predictive analytics and automated engagement campaigns.",
    impact: ["45% less churn", "28% revenue increase", "5M+ predictions/day"],
    tags: ["AI & ML", "Web Development", "Cloud Engineering"],
  },
];

const Portfolio = () => (
  <main className="pt-20">
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Portfolio</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Proven Impact, <span className="text-gradient">Measurable Results</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Selected case studies demonstrating how we solve complex challenges.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-3/5">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-primary mb-4">{p.client}</p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-medium">Problem:</span> {p.problem}</p>
                    <p><span className="text-foreground font-medium">Solution:</span> {p.solution}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t, j) => (
                      <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="lg:w-2/5 flex flex-col justify-center">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                    <TrendingUp size={16} className="text-cyan" /> Impact
                  </h4>
                  <div className="space-y-2">
                    {p.impact.map((imp, j) => (
                      <div key={j} className="text-sm text-cyan font-medium">{imp}</div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact">
            <Button size="lg" className="gradient-primary text-primary-foreground border-0 hover:opacity-90">
              Start Your Project <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default Portfolio;
