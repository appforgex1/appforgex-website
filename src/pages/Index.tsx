import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Globe, Code, Smartphone, Brain, Lock, Cloud, Database, Box, ArrowRight, CheckCircle2, Rocket, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import heroBg from "@/assets/hero-bg.jpg";
import ProjectLifecycleScenario from "@/components/ProjectLifecycleScenario";
import { fadeInUp, staggerContainer, scaleOnHover, buttonGlow, smoothFadeUp } from "@/utils/animations";
import TextReveal from "@/components/ui/text-reveal";
import Magnetic from "@/components/ui/magnetic";

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

const industries = [
  "Startups & Founders", "Small & Medium Enterprises", "Large Enterprises",
  "NGOs & Institutions", "Digital Platforms", "Healthcare & Fintech",
];

const Index = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden" ref={ref}>
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-black">
          <motion.div style={{ y, opacity }} className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/images/hero.jpg"
              className="w-full h-full object-cover opacity-60"
            >
              <source src="/assets/videos/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-background/80 to-background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="flex justify-center items-center text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={smoothFadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold mb-10 border border-primary/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Enterprise Digital Solutions
              </motion.div>
              <div className="mb-10 lg:mb-14">
                <TextReveal className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground mb-6 leading-[1.05]">
                  End-to-End
                </TextReveal>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="h-1.5 bg-gradient-to-r from-primary to-cyan rounded-full mb-8"
                />
                <TextReveal delay={0.5} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gradient leading-[1.05]">
                  Digital Excellence
                </TextReveal>
              </div>

              <motion.p variants={smoothFadeUp} className="text-lg md:text-xl text-muted-foreground mb-14 lg:mb-20 max-w-2xl mx-auto leading-relaxed font-medium">
                Precision engineering for the modern enterprise. We design, build, and secure technology that scales. From startups to global institutions, AppforgeX delivers measurable results.
              </motion.p>

              <motion.div variants={smoothFadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Magnetic strength={30}>
                  <Link to="/contact">
                    <Button size="lg" className="h-14 px-8 text-base gradient-primary text-primary-foreground border-0 hover:opacity-95 transition-all rounded-xl shadow-xl shadow-primary/25 font-semibold group">
                      Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </Magnetic>
                <Magnetic strength={20}>
                  <Link to="/services">
                    <Button variant="outline" size="lg" className="h-14 px-8 text-base rounded-xl border-border hover:bg-secondary/50 transition-all font-medium backdrop-blur-sm">
                      Explore Our Services
                    </Button>
                  </Link>
                </Magnetic>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-secondary/20 relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none"
        >
          <source src="/assets/videos/services.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={smoothFadeUp}
                whileHover={{ y: -5, borderColor: "rgba(var(--primary), 0.3)" }}
                className="group p-8 rounded-2xl glass-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700"
              >
                <div className="p-3 rounded-xl bg-primary/10 inline-block mb-6 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <s.icon size={26} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Highlight with Graphic */}
      <section className="section-padding relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={smoothFadeUp}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-[100px] opacity-20" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/40">
                <img src="/assets/images/ai.jpg" alt="Technology Visualization" className="w-full h-auto" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-1 lg:order-2"
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                A Technology Partner You Can <span className="text-gradient">Trust</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Expert Engineering", desc: "Senior teams with deep expertise in cloud, security, and AI." },
                  { title: "Security-First Mindset", desc: "We build secure by design, protecting your data and users." },
                  { title: "Transparent Execution", desc: "Clear communication and predictable delivery at every stage." },
                ].map((item, i) => (
                  <motion.div key={i} variants={smoothFadeUp} className="flex gap-4 p-5 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold text-sm">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-cyan/10 opacity-30" />
        <div className="container relative mx-auto px-4 lg:px-8 text-center bg-card/50 backdrop-blur-xl border border-border/60 py-20 rounded-[40px] shadow-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={smoothFadeUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Ready to Build Something <span className="text-gradient">Remarkable</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Let's discuss your project and discover how AppforgeX can accelerate your digital transformation.
            </p>
            <Magnetic strength={40}>
              <Link to="/contact">
                <Button size="lg" className="h-16 px-12 text-lg gradient-primary text-primary-foreground border-0 hover:opacity-95 transition-all rounded-full shadow-2xl shadow-primary/30 font-bold group">
                  Start Your Project <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
