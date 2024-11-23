import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons";
import {
  SiAdobephotoshop,
  SiCss3, SiCypress, SiDocker, SiFastify, SiFigma, SiHtml5, SiJavascript, SiJest, SiJunit5, SiMongodb, SiMysql, SiNestjs, SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPrisma,
  SiPython,
  SiReact, SiSpring, SiTypescript, 
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";

interface ArrayProps {
  Icon: IconType;
  name: string;
}

const TechIcon: React.FC<ArrayProps> = ({ Icon, name }) => (
  <div className="flex items-center m-2 transition-transform">
    <Icon className="w-4 h-4 text-neutral-50" />
    <span className="ml-2 text-sm font-medium">{name}</span>
  </div>
)

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const techs = [
    { Icon: SiTypescript, name: 'Typescript' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: SiNestjs, name: 'Nest.js' },
    { Icon: SiFastify, name: 'Fastify' },
    { Icon: SiReact, name: 'React' },
    { Icon: SiNodedotjs, name: 'Node.js' },
    { Icon: SiJavascript, name: 'JavaScript' },
    { Icon: SiCss3, name: 'CSS3' },
    { Icon: SiHtml5, name: 'HTML5' },
    { Icon: SiFigma, name: 'Figma' },
    { Icon: SiAdobephotoshop, name: 'Photoshop' },
    { Icon: FaJava, name: 'Java' },
    { Icon: SiSpring, name: 'Spring' },
    { Icon: SiPython, name: 'Python' },
    { Icon: SiPandas, name: 'Pandas' },
    { Icon: SiMysql, name: 'MySQL' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiCypress, name: 'Cypress' },
    { Icon: SiJest, name: 'Jest' },
    { Icon: SiJunit5, name: 'Junit 5' },
    { Icon: FaAws, name: 'AWS' },
    { Icon: SiDocker, name: 'Docker' },
    { Icon: SiPrisma, name: 'Prisma' },
  ]

  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-3 [--duration:40s] [--gap:1rem] [gap:var(--gap)] bg-indigo-600 z-10 w-full",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {techs.map((tech, index) => (
              <TechIcon key={`${i}-${index}`} Icon={tech.Icon} name={tech.name} />
            ))}
          </div>
        ))}
    </div>
  );
}
