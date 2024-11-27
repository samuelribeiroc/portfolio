import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import RetroGrid from "@/components/ui/retro-grid";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { SiTypescript } from "react-icons/si";

export default function Profile() {
  return (
    <div className="relative flex flex-col items-center bg-[#060606] text-neutral-50 overflow-x-hidden">
      <div className="fixed w-svw h-svh">
        <RetroGrid />

        <div className="absolute -top-1/4 -left-1/5 w-3/4 h-3/4 max-w-[75vmin] max-h-[75vmin] bg-indigo-700/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/3 w-3/4 h-3/4 max-w-[75vmin] max-h-[75vmin] bg-indigo-700/10 rounded-full filter blur-3xl"></div>
      </div>

      <Button
        asChild
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 bg-neutral-700/20 hover:bg-neutral-700/40 text-neutral-50 rounded-full"
      >
        <Link href="/">
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Voltar</span>
        </Link>
      </Button>

      <div className="w-svw min-h-svh flex flex-col justify-center items-center p-24 z-10">
        <BentoGrid>
          <BentoCard
            name={"Perfil"}
            className={"col-span-1"}
            background={"bg-neutral-50"}
            Icon={SiTypescript}
            description={""}
            href={""}
            cta={""}
          />
          <BentoCard
            name={"Perfil"}
            className={"col-span-2 bg-indigo-800/10"}
            background={""}
            Icon={SiTypescript}
            description={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
            href={""}
            cta={""}
          />
          <BentoCard
            name={"Perfil"}
            className={"col-span-3 bg-neutral-800/10"}
            background={""}
            Icon={SiTypescript}
            description={"aaaaaaaaaaaaa"}
            href={""}
            cta={""}
          />
          <BentoCard
            name={"Perfil"}
            className={"col-span-2 bg-neutral-800/10"}
            background={""}
            Icon={SiTypescript}
            description={"sssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
            href={""}
            cta={""}
          />
          <BentoCard
            name={"Perfil"}
            className={"col-span-1 bg-indigo-800/10"}
            background={""}
            Icon={SiTypescript}
            description={"asasassa"}
            href={""}
            cta={""}
          />
        </BentoGrid>
      </div>
    </div>
  );
}
