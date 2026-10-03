"use client";

import { useTheme } from "next-themes";

// components
import { Button } from "@/components/ui/button";
import { Moon as MoonIcon, Sun as SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <Button size="icon" variant="secondary" onClick={handleThemeToggle}>
      <MoonIcon className="hidden dark:block" />
      <SunIcon className="block dark:hidden" />
    </Button>
  )
}