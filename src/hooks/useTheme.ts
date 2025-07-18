import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

/**
 * useTheme Hook
 *
 * A custom hook for managing theme state with localStorage persistence
 * and system preference detection. Follows best practices for React + Tailwind v4.
 *
 * @returns Object with current theme, setTheme function, and system preference
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme") as Theme;
      if (stored && ["light", "dark", "system"].includes(stored)) {
        return stored;
      }
    }
    return "system";
  });

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  // Update system theme
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateSystemTheme = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
    };

    updateSystemTheme();
    mediaQuery.addEventListener("change", updateSystemTheme);

    return () => mediaQuery.removeEventListener("change", updateSystemTheme);
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    const effectiveTheme = theme === "system" ? systemTheme : theme;

    // Remove existing theme attributes
    root.removeAttribute("data-theme");

    // Apply new theme
    if (effectiveTheme === "dark") {
      root.setAttribute("data-theme", "dark");
    }

    // Store in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme, systemTheme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return {
    theme,
    setTheme,
    systemTheme,
    effectiveTheme: theme === "system" ? systemTheme : theme,
  };
}
