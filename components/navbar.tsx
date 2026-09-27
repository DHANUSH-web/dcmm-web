"use client";

// custom imports
import { app, engine } from "@/dcmm.json";
import { AppleLogo } from "@/components/icons";

// component imports
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

// standard next imports
import { usePathname } from "next/navigation";
import Link from "next/link";

// NavBar items
const nav_items: ({ label: string; href: string; target?: string; }[]) = [
  { label: "desktop", href: app.repo_url, target: "_blank" },
  { label: "engine", href: engine.repo_url, target: "_blank" },
  { label: "developer", href: "/developer" },
  { label: "About", href: "/about" },
];

export default function NavBar() {
  const route = usePathname();

  return (
    <nav className="flex items-center justify-around fixed px-2 w-full bg-zinc-50 dark:bg-zinc-950 h-16 border-b border-b-zinc-100 dark:border-b-zinc-900">
      <Link href="/" className="font-medium">{app.name}</Link>
      <ul className="flex items-center gap-6 text-sm">
        {nav_items.map(item => (
          <Link href={item.href} key={item.href} target={item.target}>
            <li className={`capitalize ${route === item.href ? "text-foreground" : "text-neutral-400"}`}>
              { item.label }
            </li>
          </Link>
        )) }
        <li>
          <Button>
            <AppleLogo width={16} height={16} className="text-background" />
            Download
          </Button>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  )
}