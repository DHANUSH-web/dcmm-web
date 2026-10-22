import { app } from "@/opabinia-config.json";

export default function Page() {
  return (
    <main className="flex items-center min-h-screen w-full -mt-20">
      <p className="text-center w-full">{ app.name } Desktop</p>
    </main>
  )
}