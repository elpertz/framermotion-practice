import { motion } from "framer-motion";
import { FadeIn, ScaleIn } from "./components/motion";
import "./App.css";
import { Button } from "./components/ui/button";
import { useTheme } from "./hooks/useTheme";
import { StepperMotion } from "./components/motion-class";

function App() {
  const { theme, setTheme, effectiveTheme } = useTheme();

  return (
    <div data-theme={effectiveTheme === "dark" ? "dark" : undefined}>
      <section className="h-screen p-20">
        <div className="bg-card mx-auto grid h-full place-items-center rounded-3xl border">
          <StepperMotion totalSteps={5} />
        </div>
      </section>

      <section className="h-screen p-20">
        <div className="text-foreground bg-card mx-auto flex h-full flex-col items-center justify-center rounded-3xl border">
          <FadeIn delay={0.2} direction="up">
            <h1 className="mb-4 text-4xl font-bold">Hello World</h1>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <p className="text-muted-foreground mb-8 text-lg">
              Welcome to Motion Components
            </p>
          </FadeIn>

          <ScaleIn delay={0.6} type="spring">
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95, rotate: 1 }}
              style={{ display: "inline-block" }}
            >
              <Button>Click me!</Button>
            </motion.div>
          </ScaleIn>

          <div className="mt-8 flex gap-4">
            <ScaleIn delay={0.8} scale={0.5}>
              <motion.div
                className="h-16 w-16 cursor-pointer rounded-lg bg-red-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
            </ScaleIn>

            <ScaleIn delay={1.0} scale={0.5}>
              <motion.div
                className="h-16 w-16 cursor-pointer rounded-lg bg-green-500"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </ScaleIn>

            <ScaleIn delay={1.2} scale={0.5}>
              <motion.div
                className="h-16 w-16 cursor-pointer rounded-lg bg-purple-500"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </ScaleIn>
          </div>

          {/* Theme Toggle */}
          <div className="mt-8 flex gap-2">
            <Button
              variant={theme === "light" ? "default" : "outline"}
              onClick={() => setTheme("light")}
              size="sm"
            >
              Light
            </Button>
            <Button
              variant={theme === "dark" ? "default" : "outline"}
              onClick={() => setTheme("dark")}
              size="sm"
            >
              Dark
            </Button>
            <Button
              variant={theme === "system" ? "default" : "outline"}
              onClick={() => setTheme("system")}
              size="sm"
            >
              System
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
