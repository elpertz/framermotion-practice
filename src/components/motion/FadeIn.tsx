import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

/**
 * FadeIn Component
 *
 * A reusable motion component that fades in content with optional directional movement.
 * Perfect for creating smooth entrance animations for any content.
 *
 * @param children - The content to animate
 * @param delay - Delay before animation starts (in seconds)
 * @param duration - Duration of the animation (in seconds)
 * @param direction - Direction of the movement during fade in
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  ...props
}: FadeInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 20 };
      case "down":
        return { opacity: 0, y: -20 };
      case "left":
        return { opacity: 0, x: 20 };
      case "right":
        return { opacity: 0, x: -20 };
      default:
        return { opacity: 0, y: 20 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
