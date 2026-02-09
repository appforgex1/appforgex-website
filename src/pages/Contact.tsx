import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { fadeInUp, staggerContainer, buttonGlow } from "@/utils/animations";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  organization: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Message Sent", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", organization: "", message: "" });
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Info */}
            <motion.div variants={fadeInUp}>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Contact Us</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Let's Build <span className="text-gradient">Together</span>
              </h1>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Tell us about your project and we'll respond within 24 hours with a tailored approach and timeline.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "hello@appforgex.com", href: "mailto:hello@appforgex.com" },
                  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us directly", href: "https://wa.me/1234567890" },
                  { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: null },
                  { icon: MapPin, label: "Location", value: "Serving clients globally", href: null }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors w-full group">
                        <div className="p-2.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <item.icon size={18} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{item.label}</div>
                          <div className="text-sm text-muted-foreground">{item.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 w-full">
                        <div className="p-2.5 rounded-md bg-primary/10">
                          <item.icon size={18} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{item.label}</div>
                          <div className="text-sm text-muted-foreground">{item.value}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg border border-border bg-card">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  🔒 Your information is secure and will only be used to respond to your inquiry. We never share your data with third parties.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeInUp}>
              <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-xl border border-border bg-card space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground block mb-1.5">Full Name *</label>
                  <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="John Smith" className="bg-secondary border-border" />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground block mb-1.5">Email Address *</label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="john@company.com" className="bg-secondary border-border" />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="org" className="text-sm font-medium text-foreground block mb-1.5">Organization</label>
                  <Input id="org" value={form.organization} onChange={(e) => update("organization", e.target.value)} placeholder="Your Company" className="bg-secondary border-border" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-1.5">Project Details *</label>
                  <Textarea id="message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your project, goals, and timeline..." className="bg-secondary border-border resize-none" />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>

                <motion.div whileHover="hover" whileTap="tap" variants={buttonGlow} className="w-full">
                  <Button type="submit" className="w-full gradient-primary text-primary-foreground border-0 hover:opacity-90">
                    Send Message <Send className="ml-2" size={16} />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
