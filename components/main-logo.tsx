"use client";

import TechText from "@/components/TechText";

import { useTheme } from "next-themes";

import { app } from "@/opabinia-config.json";

export default function MainLogo() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-full h-56 md:h-96 overflow-hidden">
      <TechText
        text={ app.name }
        style={{}}
        color={ resolvedTheme === "dark" ? "white" : "black" }
        accentColor={ resolvedTheme === "dark" ? "white" : "black" }
        fontWeight={650}
        fontSize={200}
        reveal="letter"
        dashLength={5}
        dashGap={2}
        specks={15}
        letterSpacing={0}
        reach={20}
        softness={0.7}
        strokeWidth={1.5}
        speed={1}
        lineStyle="dashed"
        sweep
        labels
        selection
        draggable={false}
      />
    </div>
  )
}