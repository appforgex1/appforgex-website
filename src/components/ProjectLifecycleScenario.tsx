
import React from "react";
import { motion } from "framer-motion";
import {
    Search,
    LayoutTemplate,
    Code2,
    ShieldCheck,
    GitMerge,
    TestTube2,
    Rocket,
    CheckCircle2,
    Server,
    Database,
    Smartphone,
    Globe,
    Lock,
    Zap,
    BarChart3,
    Users,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";

const timelineSteps = [
    {
        id: "discovery",
        title: "1. Discovery & Strategy",
        icon: Search,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        description: "We align technology with your business goals before writing a single line of code.",
        details: [
            "Stakeholder interviews & KPI definition",
            "System architecture design",
            "Tech stack selection (Node.js, React, Python)",
            "Security requirement analysis"
        ],
        visual: "Architecture Diagram"
    },
    {
        id: "design",
        title: "2. UI/UX Design",
        icon: LayoutTemplate,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        description: "Designing intuitive, accessible, and converting user experiences.",
        details: [
            "Wireframes & interactive prototypes",
            "Accessibility (WCAG) compliance",
            "User journey mapping",
            "Mobile-first responsive design"
        ],
        visual: "Mockups"
    },
    {
        id: "dev",
        title: "3. Development Phase",
        icon: Code2,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        description: "Building scalable, modular, and high-performance applications.",
        details: [
            "Backend: Node.js / Django / Go",
            "Frontend: React / Next.js / React Native",
            "Database: PostgreSQL / MongoDB / Redis",
            "Clean Code & SOLID principles"
        ],
        visual: "Code"
    },
    {
        id: "security",
        title: "4. Cybersecurity & Risk",
        icon: ShieldCheck,
        color: "text-red-500",
        bg: "bg-red-500/10",
        description: "Enterprise-grade security integrated at every layer of the stack.",
        details: [
            "OAuth2 / JWT Authentication",
            "Role-Based Access Control (RBAC)",
            "Data Encryption (AES-256) at rest & transit",
            "Regular Penetration Testing"
        ],
        visual: "Security Badges"
    },
    {
        id: "cicd",
        title: "5. CI/CD & DevOps",
        icon: GitMerge,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        description: "Automated pipelines for safe, fast, and reliable deployments.",
        details: [
            "Git workflow with code reviews",
            "Docker containerization",
            "Automated testing pipelines",
            "Blue-Green deployments"
        ],
        visual: "Pipeline"
    },
    {
        id: "qa",
        title: "6. Quality Assurance",
        icon: TestTube2,
        color: "text-green-500",
        bg: "bg-green-500/10",
        description: "Rigorous testing to ensure zero defects and high availability.",
        details: [
            "Unit & Integration testing",
            "Load & Performance testing",
            "Security regression testing",
            "Cross-device compatibility"
        ],
        visual: "Checklist"
    },
    {
        id: "delivery",
        title: "7. Delivery & Handover",
        icon: Rocket,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        description: "Launching your product with full documentation and support.",
        details: [
            "Production deployment monitoring",
            "Admin & user training",
            "Detailed technical documentation",
            "SLA - based support & maintenance"
        ],
        visual: "Launch"
    }
];

const impactMetrics = [
    { value: "60%", label: "Faster Operations", icon: Zap },
    { value: "99.9%", label: "Uptime Guaranteed", icon: Server },
    { value: "0", label: "Critical Vulnerabilities", icon: ShieldCheck },
    { value: "10k+", label: "Concurrent Users", icon: Users },
];

const ProjectLifecycleScenario = () => {
    return (
        <section className="section-padding relative overflow-hidden bg-background">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <SectionHeader
                    label="From Idea to Secure Production"
                    title="How AppforgeX Delivers Excellence"
                    description="A transparent, security-first process designed to take your project from concept to enterprise-ready reality."
                />

                <div className="mt-16 relative">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

                    <div className="space-y-12 lg:space-y-0">
                        {timelineSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 w-full lg:text-right">
                                    {index % 2 === 0 ? (
                                        <div className="hidden lg:block">
                                            {/* Right Side Content for Even Index (flipped) means Text is on Left? No wait.
                             lg:flex-row-reverse means Right is First (Content), Left is Second (Visual).
                             So Content is on Right.
                             Actually let's just use standard logic and adjust text alignment.
                         */}
                                        </div>
                                    ) : null}

                                    <div className={`p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 ${index % 2 !== 0 ? "lg:text-right" : "lg:text-left"}`}>
                                        <div className={`flex items-center gap-3 mb-4 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                                            <div className={`p-2.5 rounded-lg ${step.bg} ${step.color}`}>
                                                <step.icon size={24} />
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-4">{step.description}</p>
                                        <ul className={`space-y-2 ${index % 2 !== 0 ? "lg:items-end" : "lg:items-start"} flex flex-col`}>
                                            {step.details.map((detail, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                    {index % 2 === 0 ? <CheckCircle2 size={16} className="text-primary shrink-0" /> : null}
                                                    <span>{detail}</span>
                                                    {index % 2 !== 0 ? <CheckCircle2 size={16} className="text-primary shrink-0" /> : null}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="relative z-10 flex items-center justify-center shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(var(--primary),0.5)] flex items-center justify-center">
                                        <div className="w-3 h-3 bg-primary rounded-full" />
                                    </div>
                                </div>

                                {/* Visual Side (Placeholder for now, can be replaced with images) */}
                                <div className="flex-1 w-full">
                                    <div className={`glass-panel p-6 rounded-xl flex items-center justify-center min-h-[200px] border border-border/50 bg-secondary/20 relative overflow-hidden group`}>
                                        {/* Abstract Visual Representation */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <div className="text-center relative z-10">
                                            {step.id === 'discovery' && <BarChart3 className="w-16 h-16 text-muted-foreground/20 mx-auto mb-2" />}
                                            {step.id === 'design' && <LayoutTemplate className="w-16 h-16 text-muted-foreground/20 mx-auto mb-2" />}
                                            {step.id === 'dev' && <Code2 className="w-16 h-16 text-muted-foreground/20 mx-auto mb-2" />}
                                            {step.id === 'security' && <Lock className="w-16 h-16 text-muted-foreground/20 mx-auto mb-2" />}
                                            {step.id === 'cicd' && <GitMerge className="w-16 h-16 text-muted-foreground/20 mx-auto mb-2" />}
                                            {step.id === 'qa' && <TestTube2 className="w-16 h-16 text-muted-foreground/20 mx-auto mb-2" />}
                                            {step.id === 'delivery' && <Rocket className="w-16 h-16 text-muted-foreground/20 mx-auto mb-2" />}
                                            <span className="text-sm font-mono text-muted-foreground/60 uppercase tracking-widest">{step.visual}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Business Impact Section */}
                <div className="mt-24 pt-12 border-t border-border">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Real Business Impact</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our engineering standards don't just look good on paper—they drive measurable results for our clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {impactMetrics.map((metric, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-colors"
                            >
                                <metric.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{metric.value}</div>
                                <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-24 rounded-2xl bg-gradient-to-r from-background to-secondary/30 border border-border p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 bg-primary/5 rounded-bl-full blur-3xl" />

                    <h3 className="text-3xl font-bold text-foreground mb-6 relative z-10">
                        Your Project Could Be Next.
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto relative z-10">
                        Partner with an engineering team that prioritizes security, scalability, and delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Link to="/contact">
                            <Button size="lg" className="gradient-primary text-primary-foreground border-0 hover:opacity-90 w-full sm:w-auto">
                                Start Your Project
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link to="/consultation">
                            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-secondary w-full sm:w-auto">
                                Request Technical Consultation
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProjectLifecycleScenario;
