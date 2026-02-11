import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { fadeInUp, staggerContainer, buttonGlow, smoothFadeUp } from "@/utils/animations";
import Magnetic from "@/components/ui/magnetic";
import TextReveal from "@/components/ui/text-reveal";

// ─── Google Form Configuration ───────────────────────────────────────────────
const GOOGLE_FORM_ID = "1FAIpQLSdxB5xE0SShal0HfzijOhze1RtZB-mDBZewFbnWNJ3QzGf7fQ";
const GOOGLE_FORM_FIELDS = {
  name: "entry.628056361",          // Full Name
  email: "entry.187930539",         // Email Address
  organization: "entry.356924468",  // Organization
  message: "entry.2013073021",      // Project Details / Message
};
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Submits form data to a Google Form endpoint.
 * Uses no-cors mode because Google Forms doesn't return CORS headers.
 */
async function submitToGoogleForm(data: {
  name: string;
  email: string;
  organization: string;
  message: string;
}) {
  const formData = new FormData();
  formData.append(GOOGLE_FORM_FIELDS.name, data.name);
  formData.append(GOOGLE_FORM_FIELDS.email, data.email);
  formData.append(GOOGLE_FORM_FIELDS.organization, data.organization || "");
  formData.append(GOOGLE_FORM_FIELDS.message, data.message);

  await fetch(
    `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`,
    {
      method: "POST",
      body: formData,
      mode: "no-cors", // Google Forms doesn't support CORS
    }
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  organization: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(10000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });
  const [hp, setHp] = useState(""); // Honeypot field (anti-spam)
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check: If bot fills this hidden field, silently "succeed" but don't submit.
    if (hp) {
      setForm({ name: "", email: "", organization: "", message: "" });
      setHp("");
      toast({ title: "Message Sent ✓" });
      return;
    }

    // 2. Rate limiting (5 mins)
    const lastSub = localStorage.getItem("contact_last_sub");
    if (lastSub && Date.now() - parseInt(lastSub) < 300000) {
      toast({
        title: "Slow down",
        description: "Please wait a few minutes before sending another message.",
        variant: "destructive",
      });
      return;
    }

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
    setIsSubmitting(true);

    try {
      await submitToGoogleForm(form);
      localStorage.setItem("contact_last_sub", Date.now().toString());
      toast({
        title: "Message Sent ✓",
        description: "Thank you! We'll get back to you within 24 hours.",
      });
      setForm({ name: "", email: "", organization: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <main className="pt-20">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
        <div className="absolute inset-0 -z-10">
          <img src="/assets/images/contact.jpg" alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background/80 to-background" />
        </div>
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          >
            {/* Info */}
            <motion.div variants={smoothFadeUp} custom={0}>
              <span className="text-xs font-bold tracking-widest uppercase text-primary mb-6 block">Contact Us</span>

              <div className="mb-10 lg:mb-12">
                <TextReveal className="text-4xl md:text-5xl lg:text-8xl font-black text-foreground leading-[1.1]">
                  Let's Build
                </TextReveal>
                <TextReveal delay={1} className="text-4xl md:text-5xl lg:text-8xl font-black text-gradient leading-[1.1]">
                  Together
                </TextReveal>
              </div>

              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-lg font-medium">
                Tell us about your project and we'll respond within 24 hours with a tailored approach and timeline.
              </motion.p>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "hello@appforgex.com", href: "mailto:hello@appforgex.com" },
                  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us directly", href: "https://wa.me/+250794500945" },
                  { icon: Phone, label: "Phone", value: "+250794500945", href: "tel:+250794500945" },
                  { icon: MapPin, label: "Location", value: "Serving clients globally", href: null }
                ].map((item, i) => (
                  <motion.div key={i} custom={i + 2} variants={smoothFadeUp}>
                    <div className="flex items-center gap-3">
                      {item.href ? (
                        <a href={item.href} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors w-full group">
                          <Magnetic strength={20}>
                            <div className="p-2.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <item.icon size={18} className="text-primary" />
                            </div>
                          </Magnetic>
                          <div>
                            <div className="text-sm font-medium">{item.label}</div>
                            <div className="text-sm text-muted-foreground">{item.value}</div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-3 w-full">
                          <Magnetic strength={20}>
                            <div className="p-2.5 rounded-md bg-primary/10">
                              <item.icon size={18} className="text-primary" />
                            </div>
                          </Magnetic>
                          <div>
                            <div className="text-sm font-medium">{item.label}</div>
                            <div className="text-sm text-muted-foreground">{item.value}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="mt-8 p-4 rounded-lg border border-border bg-card">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  🔒 Your information is secure and submitted via Google Forms. We never share your data with third parties.
                </p>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div variants={smoothFadeUp} custom={1} className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-2xl -z-10" />
              <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-xl border border-border bg-card space-y-5 shadow-lg">
                {/* Honeypot field (hidden from users) */}
                <div className="hidden" aria-hidden="true">
                  <input type="text" value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} autoComplete="off" />
                </div>
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground block mb-1.5">Full Name *</label>
                  <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="John Smith" disabled={isSubmitting} className="bg-secondary border-border focus:ring-1 focus:ring-primary/20 transition-all duration-300" />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground block mb-1.5">Email Address *</label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="john@company.com" disabled={isSubmitting} className="bg-secondary border-border focus:ring-1 focus:ring-primary/20 transition-all duration-300" />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="org" className="text-sm font-medium text-foreground block mb-1.5">Organization</label>
                  <Input id="org" value={form.organization} onChange={(e) => update("organization", e.target.value)} placeholder="Your Company" disabled={isSubmitting} className="bg-secondary border-border focus:ring-1 focus:ring-primary/20 transition-all duration-300" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-1.5">Project Details *</label>
                  <Textarea id="message" rows={6} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your project, goals, and timeline..." disabled={isSubmitting} className="bg-secondary border-border resize-none focus:ring-1 focus:ring-primary/20 transition-all duration-300 min-h-[150px]" />
                  <div className="flex justify-between items-center mt-1.5">
                    {errors.message ? (
                      <p className="text-xs text-destructive">{errors.message}</p>
                    ) : (
                      <div />
                    )}
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded">
                      {form.message.length.toLocaleString()} / 10,000
                    </span>
                  </div>
                </div>

                <Magnetic strength={40}>
                  <motion.div whileHover="hover" whileTap="tap" variants={buttonGlow} className="w-full">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full gradient-primary text-primary-foreground border-0 hover:opacity-90 font-medium tracking-wide disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={16} />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2" size={16} />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </Magnetic>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
