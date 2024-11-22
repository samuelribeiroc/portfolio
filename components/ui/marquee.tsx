import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons";
import {
  SiCss3, SiHtml5, SiJavascript, SiNextdotjs,
  SiReact, SiTypescript
} from "react-icons/si";

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
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const techs = [
    { Icon: SiTypescript, name: 'Typescript' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: SiReact, name: 'React' },
    { Icon: SiJavascript, name: 'JavaScript' },
    { Icon: SiCss3, name: 'CSS3' },
    { Icon: SiHtml5, name: 'HTML5' },
  ]

  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-3 [--duration:40s] [--gap:1rem] [gap:var(--gap)] bg-violet-600 z-10 w-full",
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
