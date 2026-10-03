"use client";

import { GitBranch as GitHubIcon, Download, Coffee } from "lucide-react";
import AudioButton from "@/components/audio-button";
import { Button } from "@/components/ui/button";
import { developer } from "@/dcmm.json";
import { useTheme } from "next-themes";
import { app } from "@/dcmm.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col gap-3 items-center justify-center w-full mt-50">
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
      <div className="flex justify-center w-full overflow-hidden">
        <Image
          src={
            theme === "light"
              ? "/dcmm-desktop-light.png"
              : "/dcmm-desktop-dark.png"
          }
          width={2000}
          height={2000}
          alt="DeepCleanMyMac desktop screenshot"
          className="w-6xl"
          loading="eager"
        />
      </div>
    </main>
  );
}
