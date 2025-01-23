import Image from 'next/image';

//components ui
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

//icons
import { FaRegCalendarAlt } from "react-icons/fa";

interface ExperienceProps {
  title: string;
  place: string;
  firstMonth: string;
  secondMonth: string;
  regime: string;
  children: React.ReactNode;
  description: string;
  link?: string;
  declaration?: any;
}

export function Experience({title, place, firstMonth,
  secondMonth, regime, children, description,
  link, declaration}: ExperienceProps) {
  return (
    <div className="mb-8 p-4 flex flex-col bg-indigo-100">
      <h1 className="text-indigo-600 text-2xl font-semibold">
        {title}
      </h1>

      <h2 className="text-indigo-500 font-semibold">
        {place}
      </h2>

      <div className="h-6 flex gap-1 text-indigo-500 items-center uppercase text-sm">
        <FaRegCalendarAlt className="w-4 h-4" />
        {firstMonth} - {secondMonth}
        <Separator orientation="vertical" className="mx-2" />
        {regime}
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {children}
      </div>
              
      <span className="my-4 font-light bg-neutral-50 p-2 rounded-md text-base text-indigo-600">
        {description}
      </span>

      {link &&
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit"
        >
          <Button>Acessar</Button>
        </a>
      }

      {declaration &&
        <Dialog>
          <DialogTrigger className="w-fit">
            <Button>Ver declaração</Button>
          </DialogTrigger>
          <DialogContent>
            <Image
              width="2000"
              height="2000"
              src={declaration}
              alt="declaração de participação de projeto"
            />
          </DialogContent>
        </Dialog>
      }
    </div>
  )
}