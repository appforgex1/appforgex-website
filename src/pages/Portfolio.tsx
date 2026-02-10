import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { fadeInUp, staggerContainer, scaleOnHover, smoothFadeUp } from "@/utils/animations";
import TextReveal from "@/components/ui/text-reveal";
import Magnetic from "@/components/ui/magnetic";

const projects = [
  {
    title: "Enterprise Resource Platform",
    client: "Global Manufacturing Corp",
    img: "/assets/images/database.jpg",
    problem: "Legacy ERP system causing data silos and 40% operational inefficiency.",
    solution: "Custom cloud-native ERP with real-time dashboards, automated workflows, and unified data layer.",
    impact: ["60% faster reporting", "35% cost reduction", "99.9% uptime"],
    tags: ["Web Development", "Cloud Engineering", "Database Design"],
  },
  {
    title: "Fintech Mobile Application",
    client: "PayStream Inc.",
    img: "/assets/images/mobile.jpg",
    problem: "Manual payment processing leading to delays and compliance risks.",
    solution: "Cross-platform mobile app with real-time payment processing, KYC integration, and fraud detection.",
    impact: ["3x transaction volume", "Zero compliance violations", "4.8★ app rating"],
    tags: ["Mobile Development", "AI/ML", "Cybersecurity"],
  },
  {
    title: "NGO Impact Dashboard",
    client: "Global Health Initiative",
    img: "/assets/images/industries.jpg",
    problem: "No visibility into field operations across 12 countries.",
    solution: "Real-time analytics dashboard with offline-first mobile data collection and donor reporting.",
    impact: ["12 countries connected", "80% faster reporting", "2x donor retention"],
    tags: ["Web Development", "UI/UX Design", "Database Design"],
  },
  {
    title: "AI-Powered Customer Platform",
    client: "RetailNext",
    img: "/assets/images/ai.jpg",
    problem: "Customer churn rates increasing due to lack of personalization.",
    solution: "ML-powered recommendation engine with predictive analytics and automated engagement campaigns.",
    impact: ["45% less churn", "28% revenue increase", "5M+ predictions/day"],
    tags: ["AI & ML", "Web Development", "Cloud Engineering"],
  },
];

const Portfolio = () => (
  <main className="pt-20 overflow-hidden">
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
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
          <motion.span variants={smoothFadeUp} className="text-xs font-bold tracking-widest uppercase text-primary mb-6 block">Portfolio</motion.span>
          <div className="mb-10 lg:mb-12">
            <TextReveal className="text-4xl md:text-5xl lg:text-8xl font-black text-foreground leading-[1.1]">
              Proven Impact,
            </TextReveal>
            <TextReveal delay={0.5} className="text-4xl md:text-5xl lg:text-8xl font-black text-gradient leading-[1.1]">
              Measurable Results
            </TextReveal>
          </div>
          <motion.p variants={smoothFadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
            Selected case studies demonstrating how we solve complex organizational challenges through precision engineering and strategic technology.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-8"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={smoothFadeUp}
              className="p-8 md:p-12 rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 overflow-hidden group"
            >
              <div className="flex flex-col xl:flex-row gap-12">
                <div className="xl:w-1/3">
                  <div className="relative h-64 xl:h-full min-h-[300px] rounded-2xl overflow-hidden border border-border/30">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
                <div className="xl:w-2/3 flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-xs font-bold text-primary tracking-widest uppercase">{p.client}</span>
                      <div className="h-px flex-1 bg-border/40" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">{p.title}</h3>
                    <div className="space-y-6 text-muted-foreground">
                      <p className="leading-relaxed"><span className="text-foreground font-bold border-b border-primary/30 pb-0.5">Problem:</span> {p.problem}</p>
                      <p className="leading-relaxed"><span className="text-foreground font-bold border-b border-cyan/30 pb-0.5">Solution:</span> {p.solution}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-10">
                      {p.tags.map((t, j) => (
                        <span key={j} className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-secondary border border-border/60 text-secondary-foreground tracking-wider uppercase">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/5 flex flex-col justify-center bg-primary/5 p-8 rounded-3xl border border-primary/10">
                  <h4 className="flex items-center gap-3 text-lg font-bold text-foreground mb-6">
                    <Magnetic strength={15}>
                      <div className="p-2 rounded-lg bg-cyan/10">
                        <TrendingUp size={20} className="text-cyan" />
                      </div>
                    </Magnetic>
                    Business Impact
                  </h4>
                  <div className="space-y-4">
                    {p.impact.map((imp, j) => (
                      <div key={j} className="flex items-center gap-3 text-xl font-bold text-gradient">
                        <ArrowRight size={16} className="text-primary" />
                        {imp}
                      </div>
                    ))}
                  </div>
                </div>
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
                Start Your Project <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  </main>
);
export default Portfolio;
