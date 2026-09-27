import { Button } from "@/components/ui/button";
import { Undo2Icon as ReturnIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col gap-5 justify-center items-center min-h-screen">
      <p>The page you are looking for is not found</p>
      <Link href="/">
        <Button className="capitalize">
          go home
          <ReturnIcon className="w-5 h-5" />
        </Button>
      </Link>
    </main>
  )
}