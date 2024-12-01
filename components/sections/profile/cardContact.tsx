import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { RiContactsLine } from "react-icons/ri";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export default function CardContact() {
  return (
    <Card className="col-span-1 bg-indigo-800/10 border-none backdrop-blur-lg shadow-lg">
      <CardHeader className="bg-indigo-800/20 rounded-t-md">
        <div className="flex items-center gap-4">
          <RiContactsLine className="text-neutral-50 text-3xl" />
          <h1 className="text-neutral-50 text-3xl font-bold">Contato</h1>
        </div>
      </CardHeader>
      <CardContent className="text-neutral-50 text-xl">
        <div className="flex items-center">
          <SiGithub />
          <h3>samuelribeiroc</h3>
          <HiOutlineArrowUpRight className="text-teal-400" />
        </div>
        <div className="flex items-center">
          <SiLinkedin />
          <h3>samuel-r-costa</h3>
          <HiOutlineArrowUpRight className="text-teal-400" />
        </div>
        <div className="flex items-center">
          <SiGmail />
          <h3>samuel.costa@ccc.ufcg.edu.br</h3>
          <HiOutlineArrowUpRight className="text-teal-400" />
        </div>
      </CardContent>
    </Card>
  )
}