import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Zap, Globe, Award } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { fadeInUp, staggerContainer, scaleOnHover, smoothFadeUp } from "@/utils/animations";
import TextReveal from "@/components/ui/text-reveal";
import Magnetic from "@/components/ui/magnetic";

const values = [
  { icon: Award, title: "Quality", desc: "We deliver production-grade code and design that meet the highest standards." },
  { icon: ShieldCheck, title: "Security", desc: "Every solution is built with security at its foundation, not as an afterthought." },
  { icon: Globe, title: "Scalability", desc: "Architecture designed to handle growth from hundreds to millions of users." },
  { icon: Zap, title: "Reliability", desc: "Systems that perform consistently with 99.9% uptime guarantees." },
];

const About = () => (
  <main className="pt-20 overflow-hidden">
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src="/assets/images/hero.jpg" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl"
        >
          <motion.span variants={smoothFadeUp} className="text-xs font-bold tracking-widest uppercase text-primary mb-6 block">About AppforgeX</motion.span>
          <div className="mb-10 lg:mb-12">
            <TextReveal className="text-4xl md:text-5xl lg:text-8xl font-black text-foreground leading-[1.1]">
              Your Long-Term
            </TextReveal>
            <TextReveal delay={0.5} className="text-4xl md:text-5xl lg:text-8xl font-black text-gradient leading-[1.1]">
              Technology Partner
            </TextReveal>
          </div>
          <motion.p variants={smoothFadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
            AppforgeX was founded to bridge the gap between ambitious organizations and world-class technology execution. We don't just build software — we engineer solutions that drive measurable outcomes.
          </motion.p>
        </motion.div>
      </div>
    </section>
    {/* Mission & Vision */}
    <section className="section-padding bg-secondary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12"
        >
          {[
            { icon: Target, label: "Our Mission", text: "To empower organizations with secure, scalable, and beautifully engineered digital solutions that accelerate growth and build lasting competitive advantage." },
            { icon: Eye, label: "Our Vision", text: "To become the most trusted technology partner for businesses worldwide — known for integrity, execution excellence, and relentless focus on client outcomes." },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={smoothFadeUp}
              className="p-10 rounded-2xl border border-border/40 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <Magnetic strength={20}>
                <div className="p-4 rounded-xl gradient-primary inline-block mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <item.icon size={28} className="text-primary-foreground" />
                </div>
              </Magnetic>
              <h3 className="text-2xl font-bold text-foreground mb-4">{item.label}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Core Values"
          title="What Drives Our Excellence"
          description="Our values aren't just words on a wall — they're the principles that guide every decision and every line of code we write."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={smoothFadeUp}
              className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm text-center hover:border-primary/30 transition-all duration-300"
            >
              <Magnetic strength={15}>
                <div className="p-4 rounded-xl bg-primary/10 inline-block mb-6">
                  <v.icon size={28} className="text-primary" />
                </div>
              </Magnetic>
              <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </main>
);

export default About;
