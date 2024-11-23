import WordRotate from "@/components/ui/word-rotate";
import { GrFormNext } from "react-icons/gr";

export default function Introduce() {
  return (
    <div className="w-svw h-[90svh] flex flex-col justify-center px-24 z-10">
        <div className="flex text-6xl font-bold text-neutral-50">
          Samuel Costa
          <GrFormNext className="text-indigo-600"/>
        </div>
        
        <WordRotate
          className="text-4xl text-teal-400"
          words={["Desenvolvedor Frontend", "Web Designer"]}
        />
    </div>
  )
}