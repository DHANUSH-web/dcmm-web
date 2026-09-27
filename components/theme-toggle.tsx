"use client";

import { useTheme } from "next-themes";

// components
import { Button } from "./ui/button";
import { Moon as MoonIcon, Sun as SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button size="icon" variant="secondary" onClick={handleThemeToggle}>
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}