//import Image from "next/image";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";
import WordRotate from "@/components/ui/word-rotate";
import Marquee from "@/components/ui/marquee";
import Introduce from "@/components/sections/home/introduce";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center bg-zinc-950 text-neutral-50 overflow-x-hidden">
      <div className="fixed w-svw h-svh">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          )}
        />

        <div className="absolute -top-1/4 -left-1/5 w-3/4 h-3/4 max-w-[75vmin] max-h-[75vmin] bg-indigo-700/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/3 w-3/4 h-3/4 max-w-[75vmin] max-h-[75vmin] bg-indigo-700/10 rounded-full filter blur-3xl"></div>
      </div>

      <Introduce />

      <Marquee pauseOnHover className="[--duration:20s]" />

      <div className="w-[90vw] h-svh flex rounded-b-[20px] bg-neutral-50 z-10">
        <WordRotate
          className="text-4xl font-bold text-neutral-400"
          words={["Desenvolvedor Frontend", "Web Designer"]}
        />
      </div>

      <div className="w-svw h-svh flex z-10">
        <WordRotate
          className="text-4xl font-bold text-violet-600"
          words={["Desenvolvedor Frontend", "Web Designer"]}
        />
      </div>
    </div>
  );
}
