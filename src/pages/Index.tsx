import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, Code, Smartphone, Brain, Lock, Cloud, Database, Box, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import heroBg from "@/assets/hero-bg.jpg";
import ProjectLifecycleScenario from "@/components/ProjectLifecycleScenario";
import { fadeInUp, staggerContainer, scaleOnHover, buttonGlow } from "@/utils/animations";

const services = [
  { icon: Code, title: "Web Development", desc: "Scalable web platforms built with modern frameworks." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile experiences." },
  { icon: Brain, title: "AI & Machine Learning", desc: "Intelligent automation and data-driven insights." },
  { icon: Lock, title: "Cybersecurity", desc: "End-to-end security and risk management." },
  { icon: Cloud, title: "DevOps & Cloud", desc: "Infrastructure that scales with your business." },
  { icon: Database, title: "Database Design", desc: "Optimized data architecture for performance." },
  { icon: Box, title: "3D Modeling", desc: "Immersive visualization and product rendering." },
  { icon: Globe, title: "UI/UX Design", desc: "User-centered design that converts." },
];

const trustItems = [
  { icon: Shield, label: "Security-First", desc: "Every solution is built with enterprise-grade security." },
  { icon: Zap, label: "Fast Delivery", desc: "Agile processes that get you to market faster." },
  { icon: Globe, label: "Scalable", desc: "Architecture designed to grow with your organization." },
];

const industries = [
  "Startups & Founders", "Small & Medium Enterprises", "Large Enterprises",
  "NGOs & Institutions", "Digital Platforms", "Healthcare & Fintech",
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="container relative mx-auto px-4 lg:px-8 pt-24 pb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4 border border-primary/30 px-3 py-1 rounded-full">
              Enterprise Digital Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              End-to-End Digital Solutions for{" "}
              <span className="text-gradient">Modern Organizations</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              We design, build, and secure technology that scales. From startups to enterprises, AppforgeX delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <motion.div whileHover="hover" whileTap="tap" variants={buttonGlow}>
                  <Button size="lg" className="gradient-primary text-primary-foreground border-0 px-8 glow-on-hover">
                    Get a Free Consultation
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary px-8">
                    View Our Services
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {trustItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card/50"
              >
                <div className="p-2 rounded-md gradient-primary shrink-0">
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{item.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="What We Do"
            title="Comprehensive Digital Services"
            description="From concept to deployment, we deliver solutions that drive growth and operational excellence."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={scaleOnHover}
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors duration-300"
              >
                <div className="p-2.5 rounded-md bg-primary/10 inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Why AppforgeX</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Technology Partner You Can <span className="text-gradient">Trust</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We combine deep technical expertise with a security-first approach and transparent execution. Every project is delivered with precision, on time, and within budget.
              </p>
              <div className="space-y-4">
                {["Expert engineers with 10+ years experience", "Security integrated at every layer", "Transparent pricing, no hidden costs", "Post-launch support & maintenance"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-cyan shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/why-appforgex" className="inline-block mt-8">
                <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "200+", label: "Projects Delivered" },
                { num: "99.9%", label: "Uptime SLA" },
                { num: "50+", label: "Enterprise Clients" },
                { num: "24/7", label: "Support Coverage" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-6 rounded-lg border border-border bg-card text-center"
                >
                  <div className="text-3xl font-bold text-gradient mb-1">{s.num}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Lifecycle Scenario */}
      <ProjectLifecycleScenario />

      {/* Industries */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="Industries"
            title="Tailored Solutions Across Sectors"
            description="We understand the unique challenges of each industry and deliver purpose-built technology."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3"
          >
            {industries.map((ind, i) => (
              <motion.span
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2.5 rounded-full border border-border bg-card text-sm text-foreground hover:border-primary/40 transition-colors cursor-default"
              >
                {ind}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-cyan/5" />
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Build Something <span className="text-gradient">Remarkable</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let's discuss your project and find the right solution for your organization.
            </p>
            <Link to="/contact">
              <motion.div whileHover="hover" whileTap="tap" variants={buttonGlow} className="inline-block">
                <Button size="lg" className="gradient-primary text-primary-foreground border-0 px-10 glow-on-hover">
                  Start Your Project <ArrowRight className="ml-2" size={18} />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
