"use client";

import TechText from "@/components/TechText";
import "@/components/TechText.css";

import { useTheme } from "next-themes";

import { app } from "@/dcmm.json";

export default function MainLogo() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-full h-56 overflow-hidden">
      <TechText
        text={ app.name }
        style={{}}
        color={ resolvedTheme === "dark" ? "white" : "black" }
        accentColor={ resolvedTheme === "dark" ? "white" : "black" }
        fontWeight={600}
        fontSize={100}
        reveal="letter"
        dashLength={5}
        dashGap={2}
        specks={15}
        letterSpacing={-0.05}
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