import { buttonVariants } from "@/components/ui/button";
import WordRotate from "@/components/ui/word-rotate";
import Link from "next/link";
import { GrFormNext } from "react-icons/gr";

export default function Introduce() {
  return (
    <div className="w-svw h-[95svh] flex justify-between items-center px-40 z-10">
      <div>
        <div className="flex text-6xl font-semibold text-neutral-50">
          {/* <GrFormPrevious className="text-indigo-600"/> */}
          {/*<span className="text-indigo-600">{"<"}</span>*/} Samuel Costa {/*<span className="text-indigo-600">{" />"}</span>*/}
          {/* <GrFormNext className="text-indigo-600"/> */}
        </div>
        
        <WordRotate
          className="text-4xl text-teal-400 font-thin mb-2"
          words={["Desenvolvedor Frontend", "Web Designer", "Engenheiro de Software"]}
        />

        <Link className={buttonVariants({ variant: "default" })} href={"/profile"}>
          Ver perfil
        </Link>
      </div>

      <div className="h-[440px] w-[470px] relative">
        <div className="h-[400px] w-[400px] rounded-[20px] bg-neutral-800/10 backdrop-blur-2xl absolute bottom-0 left-[40px] z-[6]" />
        <div className="h-[300px] w-[300px] rounded-[20px] bg-indigo-600 absolute top-0 left-0 z-[5]"/>
        <div className="h-[200px] w-[200px] rounded-[20px] bg-teal-400 absolute top-1/3 right-0 z-[4]"/>
      </div>
    </div>
  )
}