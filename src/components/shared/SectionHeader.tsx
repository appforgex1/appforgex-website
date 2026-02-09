import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeader = ({ label, title, description, center = true }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}
  >
    {label && (
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
        {label}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed text-base md:text-lg mx-auto">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;
