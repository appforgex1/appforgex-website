import { Variants, TargetAndTransition } from "framer-motion";

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
        },
    }),
};

export const simpleFade: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 0) => ({
        opacity: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const scaleOnHover: TargetAndTransition = {
    scale: 1.02,
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
    transition: {
        duration: 0.3,
        ease: "easeOut",
    },
};

export const buttonGlow: Variants = {
    hover: {
        boxShadow: "0 0 20px rgba(var(--primary), 0.4)",
        scale: 1.02,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
    tap: {
        scale: 0.98,
    },
};
