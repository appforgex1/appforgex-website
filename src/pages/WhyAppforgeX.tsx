import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Zap, DollarSign, HeadphonesIcon, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { fadeInUp, staggerContainer, scaleOnHover, buttonGlow, smoothFadeUp } from "@/utils/animations";
import TextReveal from "@/components/ui/text-reveal";
import Magnetic from "@/components/ui/magnetic";

const advantages = [
  { icon: Code2, title: "Expert Execution", desc: "Our team brings deep expertise across the full stack. We don't experiment on your project — we execute with precision." },
  { icon: ShieldCheck, title: "Security-First Mindset", desc: "Security isn't a checkbox. It's embedded in our architecture, code reviews, and deployment pipelines from day one." },
  { icon: Zap, title: "Fast Delivery", desc: "Agile sprints, automated testing, and CI/CD pipelines mean your product reaches users faster without compromising quality." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "Clear scoping, fixed-price options, and detailed invoicing. No surprise costs, no scope creep fees." },
  { icon: Users, title: "Dedicated Teams", desc: "Every project gets a dedicated team with a single point of contact. Communication is direct and accountability is clear." },
  { icon: HeadphonesIcon, title: "Ongoing Support", desc: "We don't disappear after launch. Maintenance, monitoring, and iterative improvements are part of our partnership." },
];

const WhyAppforgeX = () => (
  <main className="pt-20 overflow-hidden">
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <img src="/assets/images/whyappforgex.jpg" alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background/80 to-background" />
      </div>
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mb-24 lg:mb-32"
        >
          <motion.span variants={smoothFadeUp} className="text-xs font-bold tracking-widest uppercase text-primary mb-6 block">Why AppforgeX</motion.span>
          <div className="mb-10 lg:mb-12">
            <TextReveal className="text-4xl md:text-5xl lg:text-8xl font-black text-foreground leading-[1.1]">
              Clear Advantages,
            </TextReveal>
            <TextReveal delay={0.5} className="text-4xl md:text-5xl lg:text-8xl font-black text-gradient leading-[1.1]">
              Proven Results
            </TextReveal>
          </div>
          <motion.p variants={smoothFadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
            We earn trust through consistent execution, ironclad security, and transparent communication, not marketing promises.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              variants={smoothFadeUp}
              className="p-8 rounded-[2rem] border border-border bg-card/50 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 shadow-xl group"
            >
              <Magnetic strength={20}>
                <div className="p-4 rounded-2xl bg-primary/10 inline-block mb-6 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <a.icon size={28} className="text-primary" />
                </div>
              </Magnetic>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{a.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{a.desc}</p>
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
          <Link to="/contact">
            <Magnetic strength={40}>
              <motion.div whileHover="hover" whileTap="tap" variants={buttonGlow} className="inline-block">
                <Button size="lg" className="h-16 px-12 text-lg gradient-primary text-primary-foreground border-0 shadow-2xl shadow-primary/25 rounded-full font-bold group">
                  Ready to Work With Us? <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Magnetic>
          </Link>
        </motion.div>
      </div>
    </section>
  </main>
);
export default WhyAppforgeX;
