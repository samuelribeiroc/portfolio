import { Badge } from "@/components/ui/badge";
import {
  Card, CardContent, CardDescription,
  CardHeader, CardTitle
} from "@/components/ui/card";
import {
  Carousel, CarouselContent, CarouselItem,
  CarouselNext, CarouselPrevious
} from "@/components/ui/carousel";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import logomoveit from "../../../public/assets/logos/logo-moveit.svg";
import printmoveit from "../../../public/assets/prints/printmoveit.png";
import logofasteng from "../../../public/assets/logos/logo-fasteng.png";
import logoconectadiu from "../../../public/assets/logos/logo-conectadiu.png";
import logoyouthtracker from "../../../public/assets/logos/logo-youthtracker.png";
import Image from "next/image";
import { DialogProject } from "@/components/templates/dialog-project";

export interface projectsType {
  title: string,
  logo: string | StaticImport,
  tag: string,
  print: string | StaticImport,
  shortDescription: string,
  techs: string[],
  detailedDescription: string,
  link: string
}

export default function Projects() {
  const arrayProjects: projectsType[] = [
    {
      title: "move.it",
      logo: logomoveit,
      tag: "Frontend",
      print: printmoveit,
      shortDescription: "Software developed for the 4th edition of Next Level Week that simulates a dinamic pomodoro.",
      techs: ["Next.ts", "Typescript", "CSS"],
      detailedDescription: "Software developed for the 4th edition of Next Level Week that simulates a dinamic pomodoro.",
      link: "https://github.com/samuelribeiroc/move.it"
    },
    {
      title: "Fasteng",
      logo: logofasteng,
      tag: "Protótipo UI",
      print: printmoveit,
      shortDescription: "",
      techs: ["Figma"],
      detailedDescription: "",
      link: ""
    },
    {
      title: "VacinaJa",
      logo: "",
      tag: "Backend",
      print: "",
      shortDescription: "",
      techs: ["Next.ts", "Typescript", "CSS"],
      detailedDescription: "",
      link: ""
    },
    {
      title: "ConectaDIU",
      logo: logoconectadiu,
      tag: "Protótipo UI",
      print: "",
      shortDescription: "",
      techs: ["Next.ts", "Typescript", "CSS"],
      detailedDescription: "",
      link: ""
    },
    {
      title: "AppNavegação",
      logo: "",
      tag: "Backend",
      print: "",
      shortDescription: "",
      techs: ["Next.ts", "Typescript", "CSS"],
      detailedDescription: "",
      link: "https://github.com/samuelribeiroc/move.it"
    },
    {
      title: "YouthTracker",
      logo: logoyouthtracker,
      tag: "Frontend",
      print: "",
      shortDescription: "",
      techs: ["Next.ts", "Typescript", "CSS"],
      detailedDescription: "",
      link: "https://github.com/samuelribeiroc/move.it"
    },
    {
      title: "ConvertaX Invest",
      logo: "",
      tag: "Frontend",
      print: "",
      shortDescription: "",
      techs: ["Next.ts", "Typescript", "CSS"],
      detailedDescription: "",
      link: "https://github.com/samuelribeiroc/move.it"
    },
    {
      title: "Challenge",
      logo: "",
      tag: "Frontend",
      print: "",
      shortDescription: "",
      techs: ["Next.ts", "Typescript", "CSS"],
      detailedDescription: "",
      link: "https://github.com/samuelribeiroc/move.it"
    }
  ]

  return (
    <div className="w-svw flex flex-col justify-center items-center px-24 py-44 z-10">
      <div className="w-full h-full p-8 flex flex-col items-start rounded-2xl bg-neutral-800/10 backdrop-blur-lg shadow-lg">
        <h1 className="text-neutral-50 text-4xl font-bold mb-8">
          Projetos
        </h1>

        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent>
            {arrayProjects.map((project, index) => (
              <CarouselItem key={index} className="basis-1/4 select-none">
                <div className="p-1">
                  <Card className="rounded-xl border-indigo-900 bg-indigo-950/10">
                    <CardHeader className="relative">
                      <div className="rounded-lg flex justify-center align-center bg-indigo-900/10 w-full h-48">
                        <Image className="w-full object-contain" src={project.logo} alt={project.title} />
                      </div>
                      
                      <Badge className="absolute right-6 bottom-6 border-2 border-neutral-950 bg-teal-400 text-neutral-950">{project.tag}</Badge>
                    </CardHeader>

                    <CardTitle className="text-neutral-50 px-6">
                      {project.title}
                    </CardTitle>

                    <CardDescription className="p-6 min-h-32">
                      {project.shortDescription}
                    </CardDescription>

                    <CardContent className="flex items-center justify-center p-6">
                      <DialogProject {...project} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}