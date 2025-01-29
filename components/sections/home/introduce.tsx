import { buttonVariants } from "@/components/ui/button";
import WordRotate from "@/components/ui/word-rotate";
import Link from "next/link";
import Image from 'next/image';
import eupng from "../../../public/assets/images/eupng.png";
import { GoPerson } from "react-icons/go";

export default function Introduce() {
  return (
    <div className="w-svw h-[95svh] flex justify-between items-center px-48 z-10">
      <div>
        <div className="flex text-6xl font-semibold text-neutral-50">
          Samuel Costa
        </div>
        
        <WordRotate
          className="text-4xl text-teal-400 font-thin mb-2"
          words={["Desenvolvedor Frontend", "Web Designer", "Engenheiro de Software"]}
        />

        <Link className={buttonVariants({ variant: "default" })} href={"/profile"}>
          <GoPerson className="stroke-1" />
          Ver perfil
        </Link>
      </div>

      <div className="h-[440px] w-[470px] relative">
        <Image
          width={450}
          alt="profile picture"
          src={eupng}
          className="absolute bottom-0 justify-center z-[7]"
        />
        <div className="h-[400px] w-[400px] rounded-[20px] bg-neutral-800/10 backdrop-blur-2xl absolute bottom-0 left-[40px] z-[6]" />
        <div className="h-[300px] w-[300px] rounded-[20px] bg-indigo-600 absolute top-0 left-0 z-[5]"/>
        <div className="h-[200px] w-[200px] rounded-[20px] bg-teal-400 absolute top-1/3 right-0 z-[4]"/>
      </div>
    </div>
  )
}