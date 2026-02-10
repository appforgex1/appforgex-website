import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { textReveal } from "@/utils/animations";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            {/* Split text into words for animation. 
            Note: For Jeton style, usually it's lines or words sliding up from a mask.
        */}
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={delay}
                variants={textReveal}
                className="inline-block"
            >
                {children}
            </motion.div>
        </div>
    );
}
