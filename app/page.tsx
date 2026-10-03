"use client";

import { GitBranch as GitHubIcon, Download, Coffee } from "lucide-react";
import AudioButton from "@/components/audio-button";
import { Button } from "@/components/ui/button";
import { developer } from "@/dcmm.json";
import { app } from "@/dcmm.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col gap-3 items-center justify-center w-full mt-5">
        <p className="text-9xl font-bold bg-linear-to-r bg-clip-text text-transparent dark:from-secondary dark:via-zinc-100 dark:to-secondary from-zinc-300 via-zinc-950 to-zinc-300">
          {app.name}
        </p>
        <p className="mt-5">
          A native, open-source, tiny{" "}
          <span className="dark:bg-green-950 bg-green-50 text-green-500 text-sm px-2 py-1 rounded-full">
            &lt; 3MB
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
            <AudioButton
              className="capitalize bg-yellow-200 text-yellow-700 hover:bg-yellow-300 dark:bg-yellow-950 dark:text-yellow-200 dark:hover:bg-yellow-900 transition-colors duration-300"
              // onHoverAudio="hover.mp3"
              onLeaveAudio="leave.mp3"
              onClickAudio="click.mp3"
            >
              <Coffee className="w-5 h-5 fill-current" />
              buy me a coffee
            </AudioButton>
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
