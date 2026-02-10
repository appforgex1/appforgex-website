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

// Text Reveal (Masked Slide Up)
export const textReveal: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number = 0) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: i * 0.05,
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1], // Cubic bezier for "premium" feel
        },
    }),
};

// Smooth Fade Up (Slower, heavier)
export const smoothFadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

// Zoom In
export const zoomIn: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: (i: number = 0) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export const buttonGlow: Variants = {
    hover: {
        boxShadow: "0 0 20px rgba(var(--primary), 0.4)",
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
    tap: {
        scale: 0.95,
    },
};
