"use client";

import { GitBranch as GitHubIcon, Download, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import CurvedLoop from "@/components/CurvedLoop";
import MainLogo from "@/components/main-logo";
import { developer } from "@/dcmm.json";
import { app } from "@/dcmm.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col gap-3 items-center justify-center w-full mt-5">
        <MainLogo />
        <p className="z-5 -mt-6 mb-2 text-zinc-400 max-w-3xl text-center">
          A personal, free, blazing fast, fully native and very light
          <span className="bg-green-950 text-green-500 text-sm px-2 py-1 ml-1 rounded-full">
            &lt; 2MB
          </span>
          , advanced Mac SSD cleaner, because your SSD is not immortal and
          definitely too expensive to upgrade
        </p>
        <div className="flex items-center space-x-2 z-5">
          <Link href="/">
            <Button>
              <Download width={16} height={16} />
              Download for Mac
            </Button>
          </Link>
          <Link href={app.repo_url} target="_blank">
            <Button variant="secondary">
              <GitHubIcon className="w-5 h-5" />
              Elite Dimension
            </Button>
          </Link>
          <Link href={developer.buymecoffee} target="_blank">
            <Button
              variant="secondary"
              className="capitalize"
            >
              <Coffee className="w-5 h-5 fill-current" />
              buy me a coffee
            </Button>
          </Link>
        </div>
        <div className="absolute w-full -z-50 opacity-20 blur-sm">
          <CurvedLoop
            marqueeText="Fully Native * Blazing Fast * Open-Source * Less than 2MB * "
            speed={1}
            curveAmount={500}
            direction="left"
            interactive
          />
        </div>
      </div>
      <div className="relative flex justify-center w-full h-160 mt-5 mb-50 overflow-hidden">
        <Image
          src="/dcmm-desktop-light.png"
          width={2000}
          height={2000}
          alt="DeepCleanMyMac desktop screenshot"
          className="block w-270 h-256 dark:hidden"
          loading="eager"
        />
        <Image
          src="/dcmm-desktop-dark.png"
          width={2000}
          height={2000}
          alt="DeepCleanMyMac desktop screenshot"
          className="hidden w-270 h-256 dark:block"
          loading="eager"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-linear-to-b from-transparent to-background"
          style={{
            backdropFilter: "blur(2px)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
          }}
        />
      </div>
    </main>
  );
}
