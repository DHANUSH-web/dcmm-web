import { engine } from "@/opabinia-config.json";

export default function Page() {
  return (
    <main className="flex min-h-screen w-full items-center -mt-20">
      <p className="text-center w-full">{ engine.name } Engine</p>
    </main>
  )
}