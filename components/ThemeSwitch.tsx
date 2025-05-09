"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-white/80 dark:bg-neutral-950 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 border border-stone-200 dark:border-neutral-800"
    >
      {theme === "dark" ? (
        <SunIcon className="h-4 w-4 text-yellow-500 dark:text-yellow-300" />
      ) : (
        <MoonIcon className="h-4 w-4 text-gray-700" />
      )}
    </button>
  );
}
