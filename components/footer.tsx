// custom imports
import {
  developer,
  deployer,
  app,
  engine,
  web,
} from "@/dcmm.json";

// components and types imports
import { Badge } from "@/components/ui/badge";

// standard next imports
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col py-5 gap-5 items-center justify-center">
      <div className="flex items-center gap-5">
        <Link href={app.repo_url} target="_blank" className="text-neutral-400 hover:text-neutral-950">
          {app.repo_name}
        </Link>
        <span>/</span>
        <Link href={engine.repo_url} target="_blank" className="text-neutral-400 hover:text-neutral-950">
          {engine.repo_name}
        </Link>
        <span>/</span>
        <Link href={web.repo_url} target="_blank" className="text-neutral-400 hover:text-neutral-950">
          {web.repo_name}
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <span>Developed by</span>
        <Link href="/about">
          <Badge className="text-sm">
            { developer.name }
          </Badge>
        </Link>
        <span>with</span>
        <Link href={web.framework_website} target="_blank">
          <Badge variant="outline" className="text-sm">
            {web.framework}
          </Badge>
        </Link>
        <span>and</span>
        <Link href={web.lang_website} target="_blank">
          <Badge variant="outline" className="text-sm">
            {web.lang}
          </Badge>
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <span>Deployed on</span>
        <Link href={deployer.website} target="_blank">
          <Badge className="text-sm">
            {deployer.name}
          </Badge>
        </Link>
      </div>
    </footer>
  )
}