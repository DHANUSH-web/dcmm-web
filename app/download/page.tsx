"use client";

import { toast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { getGitHubStats } from "@/lib/utils";
import { useEffect } from "react";

async function handleDownloadOpabinia() {
  try {
    const { downloadUrl, downloadName } = await getGitHubStats();

    if (!downloadUrl) {
      throw new Error("No disk image found in the latest GitHub release");
    }

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = downloadName ?? "Opabinia.dmg";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();

    toast.add({
      title: "Notification",
      type: "success",
      description: "Opabinia download has been started...",
    });
  } catch (err) {
    toast.add({
      title: "Failed",
      type: "error",
      description: "Download failed. Error: " + err,
    });
  }
}

export default function Page() {
  useEffect(() => {
    handleDownloadOpabinia();
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen w-full -mt-20">
      <Button onClick={handleDownloadOpabinia}>
        Download Opabinia
      </Button>
    </main>
  )
}
