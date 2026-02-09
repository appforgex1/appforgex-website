import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Zap, Globe, Award } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const values = [
  { icon: Award, title: "Quality", desc: "We deliver production-grade code and design that meet the highest standards." },
  { icon: ShieldCheck, title: "Security", desc: "Every solution is built with security at its foundation, not as an afterthought." },
  { icon: Globe, title: "Scalability", desc: "Architecture designed to handle growth from hundreds to millions of users." },
  { icon: Zap, title: "Reliability", desc: "Systems that perform consistently with 99.9% uptime guarantees." },
];

const About = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">About Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Your Long-Term <span className="text-gradient">Technology Partner</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AppforgeX was founded to bridge the gap between ambitious organizations and world-class technology execution. We don't just build software — we engineer solutions that drive measurable outcomes.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-8">
        {[
          { icon: Target, label: "Our Mission", text: "To empower organizations with secure, scalable, and beautifully engineered digital solutions that accelerate growth and build lasting competitive advantage." },
          { icon: Eye, label: "Our Vision", text: "To become the most trusted technology partner for businesses worldwide — known for integrity, execution excellence, and relentless focus on client outcomes." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="p-8 rounded-xl border border-border bg-card"
          >
            <div className="p-2.5 rounded-md gradient-primary inline-block mb-4">
              <item.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{item.label}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Problem We Solve */}
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <SectionHeader
          label="The Problem"
          title="Technology Should Accelerate Your Business, Not Slow It Down"
          description="Many organizations struggle with fragmented tech stacks, security vulnerabilities, and vendors who over-promise and under-deliver. AppforgeX exists to change that."
        />
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader label="Core Values" title="What Drives Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-lg border border-border bg-card text-center"
            >
              <div className="p-3 rounded-md bg-primary/10 inline-block mb-4">
                <v.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
