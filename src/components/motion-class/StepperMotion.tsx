import { useState } from "react";
import { Step } from "../motion/Step";
import { Button } from "../ui/button";

/**
 * StepperMotion component for displaying a multi-step progress indicator
 * Includes navigation controls and animated step transitions
 * @param totalSteps - Total number of steps (default: 5)
 */
export function StepperMotion({ totalSteps = 4 }: { totalSteps?: number }) {
  // step: current step in the cycle (1-5)
  const [step, setStep] = useState(1);

  return (
    <div className="border-accent bg-background mx-auto w-full max-w-sm rounded-3xl shadow">
      <div className="flex justify-between p-8">
        {Array.from({ length: totalSteps }, (_, index) => (
          <Step key={index + 1} step={index + 1} currentStep={step} />
        ))}
      </div>
      <div className="px-8 pb-8">
        <div>
          <div className="space-y-2">
            <div className="bg-foreground/15 mb-4 h-6 w-2/5 rounded"></div>
            <div className="bg-foreground/15 h-4 w-5/6 rounded" />
            <div className="bg-foreground/15 h-4 rounded" />
            <div className="bg-foreground/15 h-4 w-4/6 rounded" />
          </div>
        </div>
        <div className="mt-12 flex justify-between">
          <Button
            onClick={() => setStep(step < 2 ? step : step - 1)}
            variant="outline"
            disabled={step === 1}
          >
            Back
          </Button>
          <Button
            onClick={() => setStep(step > totalSteps ? step : step + 1)}
            disabled={step === totalSteps + 1}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
