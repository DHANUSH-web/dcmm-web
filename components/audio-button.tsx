"use client";

import { Button } from "@/components/ui/button";
import { Button as ButtomPrimitve } from "@base-ui/react/button";
import { useRef } from "react";

export default function AudioButton({
  onHoverAudio = "",
  onLeaveAudio = "",
  onClickAudio = "",
  children,
  ...props
}: {
  onHoverAudio?: string;
  onLeaveAudio?: string;
  onClickAudio?: string;
  children?: React.ReactNode;
} & ButtomPrimitve.Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlaySound = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    let audio_file: string = "";

    switch (event.type) {
      case "mouseenter":
        audio_file = onHoverAudio;
        break;
      case "mouseleave":
        audio_file = onLeaveAudio;
        break;
      case "click":
        audio_file = onClickAudio;
        break;
      default:
        audio_file = "";
        break;
    }

    try {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      const audio = new Audio(audio_file);
      audioRef.current = audio;
      audio.play();
    } catch {
      alert("Something went wrong, please try again");
    }
  };

  return (
    <Button
      onMouseEnter={handlePlaySound}
      onMouseLeave={handlePlaySound}
      onClick={handlePlaySound}
      {...props}
    >
      {children}
    </Button>
  );
}
