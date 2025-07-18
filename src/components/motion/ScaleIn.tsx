import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface ScaleInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  scale?: number;
  type?: "spring" | "tween";
}

/**
 * ScaleIn Component
 *
 * A reusable motion component that scales in content with smooth animations.
 * Great for creating attention-grabbing entrance effects for buttons, cards, and other UI elements.
 *
 * @param children - The content to animate
 * @param delay - Delay before animation starts (in seconds)
 * @param duration - Duration of the animation (in seconds)
 * @param scale - Initial scale value (0 = completely scaled down)
 * @param type - Animation type - spring for bouncy effect, tween for smooth linear
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  scale = 0,
  type = "spring",
  ...props
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ scale }}
      animate={{ scale: 1 }}
      transition={{
        duration,
        delay,
        type,
        ...(type === "spring" && { stiffness: 200, damping: 20 }),
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
