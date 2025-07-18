import { motion } from "framer-motion";

/**
 * Step component for displaying individual steps in a stepper
 * Handles different states: inactive, active, and completed
 * @param step - The step number to display
 * @param currentStep - The current active step
 */
export function Step({
  step,
  currentStep,
}: {
  step: number;
  currentStep: number;
}) {
  const status =
    currentStep === step
      ? "active"
      : currentStep > step
        ? "completed"
        : "inactive";

  return (
    <motion.div
      animate={status}
      variants={{
        active: {},
      }}
      className="relative"
    >
      <motion.div
        variants={{
          active: {
            scale: 1.05,
            opacity: 0.4,
            transition: {
              delay: 0,
              duration: 0.3,
            },
          },
          completed: {
            scale: 1.15,
            opacity: 0.8,
          },
        }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.6,
          delay: 0.15,
        }}
        className="bg-primary/60 absolute inset-0 size-14 rounded-2xl"
      />
      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "var(--muted)",
            borderColor: "var(--border)",
            color: "var(--muted-foreground)",
          },
          active: {
            backgroundColor: "var(--background)",
            borderColor: "var(--primary)",
            color: "var(--primary) ",
          },
          completed: {
            backgroundColor: "var(--primary)",
            borderColor: "var(--primary)",
            color: "hsl(var(--primary-foreground) / 0.15)",
          },
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
        className="relative flex size-14 items-center justify-center rounded-2xl border-2 text-lg font-semibold"
      >
        <div className="flex items-center justify-center">
          {status === "completed" ? (
            <CheckIcon className="text-primary-foreground size-6" />
          ) : (
            <span>{step}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * CheckIcon component for displaying a checkmark in completed steps
 * Includes animated path drawing effect
 */
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.15,
          type: "tween",
          ease: "easeOut",
          duration: 0.2,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
