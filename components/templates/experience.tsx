"use client"

import Image from 'next/image';
import { useState } from 'react';

//components ui
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

//icons
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

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
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="mb-8 flex flex-col rounded-md border border-neutral-200
      transform transition-transform duration-300 ease-in-out"
    >
      <div className="p-4 flex flex-col">
        <h1 className="text-neutral-950 text-2xl font-semibold">
          {title}
        </h1>

        <h2
          className={`
            text-indigo-500 font-semibold
            transform transition-transform duration-300 ease-in-out
            ${expanded ? "opacity-100 translate-y-0 visible max-h-20"
            : "opacity-0 -translate-y-4 invisible max-h-0 overflow-hidden"}
          `}
        >
          {place}
        </h2>

        <div className={`
          h-6 flex gap-1 text-indigo-500 items-center uppercase text-sm
          transform transition-transform duration-300 ease-in-out
          ${expanded ? "opacity-100 translate-y-0 visible max-h-20"
          : "opacity-0 -translate-y-4 invisible max-h-0 overflow-hidden"}
        `}>
          <FaRegCalendarAlt className="w-4 h-4" />
          {firstMonth} - {secondMonth}
          <Separator orientation="vertical" className="mx-2" />
          {regime}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {children}
        </div>

        <span className={`
          font-light bg-neutral-50 rounded-md text-base text-neutral-700
          transform transition-transform duration-300 ease-in-out
          ${expanded ? "my-4 p-2 opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-4 invisible max-h-0 overflow-hidden"}
        `}>
          {description}
        </span>

        {link && expanded &&
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit"
          >
            <Button>Acessar</Button>
          </a>
        }

        {declaration && expanded &&
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
      
      <div className="w-full">
        <Button
          variant="arrow"
          onClick={() => setExpanded(!expanded)}
        >
          <IoIosArrowDown
            className={`
              text-neutral-50 
              transform transition-transform duration-300 ease-in-out
              ${expanded ? "rotate-180" : "rotate-0"}
            `}
          />
        </Button>
      </div>
    </div>
  )
}