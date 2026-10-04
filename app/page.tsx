"use client";

import { GitBranch as GitHubIcon, Download, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <p className="mt-5">
          A native, open-source, tiny{" "}
          <span className="dark:bg-green-950 bg-green-50 text-green-500 text-sm px-2 py-1 rounded-full">
            &lt; 2MB
          </span>
          , crazy fast!! ITS C++, BARE METAL RAW
          NATIVE PERFORMANCE
        </p>
        <div className="flex items-center space-x-2 mt-6">
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
