"use client";

// custom imports
import { app, engine } from "@/opabinia-config.json";
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
    <nav className="flex flex-col md:flex-row items-center justify-center md:justify-around sticky top-0 left-0 z-50 px-2 w-full h-25 md:h-16 bg-background/80 backdrop-filter:blur-2xl backdrop-blur-lg">
      <Link href="/" className="font-medium mb-2 md:mb-0">{app.name}</Link>
      <ul className="items-center justify-around gap-6 text-sm flex w-full md:w-fit">
        {nav_items.map(item => (
          <Link href={item.href} key={item.href} target={item.target}>
            <li className={`capitalize ${route === item.href ? "text-foreground" : "text-neutral-400"}`}>
              { item.label }
            </li>
          </Link>
        )) }
        <li className="hidden md:block">
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