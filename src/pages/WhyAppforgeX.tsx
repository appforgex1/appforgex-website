import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Zap, DollarSign, HeadphonesIcon, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { fadeInUp, staggerContainer, scaleOnHover, buttonGlow } from "@/utils/animations";

const advantages = [
  { icon: Code2, title: "Expert Execution", desc: "Our team brings deep expertise across the full stack. We don't experiment on your project — we execute with precision." },
  { icon: ShieldCheck, title: "Security-First Mindset", desc: "Security isn't a checkbox. It's embedded in our architecture, code reviews, and deployment pipelines from day one." },
  { icon: Zap, title: "Fast Delivery", desc: "Agile sprints, automated testing, and CI/CD pipelines mean your product reaches users faster without compromising quality." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "Clear scoping, fixed-price options, and detailed invoicing. No surprise costs, no scope creep fees." },
  { icon: Users, title: "Dedicated Teams", desc: "Every project gets a dedicated team with a single point of contact. Communication is direct and accountability is clear." },
  { icon: HeadphonesIcon, title: "Ongoing Support", desc: "We don't disappear after launch. Maintenance, monitoring, and iterative improvements are part of our partnership." },
];

const WhyAppforgeX = () => (
  <main className="pt-20">
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Why AppforgeX</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Clear Advantages, <span className="text-gradient">Proven Results</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We earn trust through consistent execution, not marketing promises.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={scaleOnHover}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="p-2.5 rounded-md bg-primary/10 inline-block mb-4">
                <a.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <Link to="/contact">
            <motion.div whileHover="hover" whileTap="tap" variants={buttonGlow} className="inline-block">
              <Button size="lg" className="gradient-primary text-primary-foreground border-0 hover:opacity-90">
                Work With Us <ArrowRight className="ml-2" size={18} />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  </main>
);

export default WhyAppforgeX;
