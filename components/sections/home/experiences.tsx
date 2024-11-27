import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaRegCalendarAlt } from "react-icons/fa";

interface ExperienceProps {
  title: string;
  place: string;
  firstMonth: string;
  secondMonth: string;
  regime: string;
  children: React.ReactNode;
  description: string;
}

function Experience({title, place, firstMonth, secondMonth, regime, children, description}: ExperienceProps) {
  return (
    <div className="mb-6">
      <h1 className="text-neutral-950 text-2xl font-bold">
        {title}
      </h1>

      <h2 className="text-indigo-600 font-bold">
        {place}
      </h2>

      <div className="h-6 flex gap-1 text-indigo-600 items-center uppercase text-sm">
        <FaRegCalendarAlt className="w-4 h-4" />
        {firstMonth} - {secondMonth}
        <Separator orientation="vertical" className="mx-2" />
        {regime}
      </div>

      <div className="flex flex-wrap gap-2 mt-2 mb-4">
        {children}
      </div>
              
      <span>
        {description}
      </span>
    </div>
  )
}

export default function Experiences() {
  return (
    <div className="w-[90vw] p-16 flex flex-col rounded-b-[20px] bg-neutral-50 z-10">
      <h1 className="text-neutral-950 text-4xl font-bold mb-8">
        Experiências
      </h1>

      <Tabs defaultValue="2021" className="flex" orientation="vertical">
        <TabsList className="flex flex-col h-fit bg-indigo-100">
          <TabsTrigger
            value="2021"
            className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-indigo-400 hover:bg-indigo-200 focus:bg-indigo-200"
          >
            2021
          </TabsTrigger>
          <TabsTrigger
            value="2022"
            className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-indigo-400 hover:bg-indigo-200 focus:bg-indigo-200"
          >
            2022
          </TabsTrigger>
          <TabsTrigger
            value="2023"
            className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-indigo-400 hover:bg-indigo-200 focus:bg-indigo-200"
          >
            2023
          </TabsTrigger>
          <TabsTrigger
            value="2024"
            className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-indigo-400 hover:bg-indigo-200 focus:bg-indigo-200"
          >
            2024
          </TabsTrigger>
        </TabsList>

        <TabsContent value="2021" className="w-full">
          <Card className="h-[650px] p-6 ml-4 border-indigo-100">
            <Experience
              title="Fullstack trainee"
              place="Laboratório de Engenharia de Pavimentos (LEP) - Universidade Federal de Campina Grande (Remoto)"
              firstMonth="Julho"
              secondMonth="Dezembro"
              regime="Meio período"
              description="aaa"
            >
              <Badge>FullStack</Badge>
              <Badge>React.js</Badge>
              <Badge>Node.js</Badge>
              <Badge>Javascript</Badge>
              <Badge>Typescript</Badge>
              <Badge>Styled-Components</Badge>
            </Experience>

            <Experience
              title="Estudante PD&I"
              place="Software Practices Laboratory (SPLab) - Universidade Federal de Campina Grande (Remoto)"
              firstMonth="Julho"
              secondMonth="Setembro"
              regime="Meio período"
              description="aaa"
            >
              <Badge>Ciência de dados</Badge>
              <Badge>Aprendizagem de máquina</Badge>
              <Badge>Python</Badge>
              <Badge>Pandas</Badge>
              <Badge>Sklearn</Badge>
              <Badge>Jupyter notebook</Badge>
            </Experience>

            <Experience
              title="Estudante de Capacitação"
              place="Embedded + VIRTUS - Universidade Federal de Campina Grande (Remoto)"
              firstMonth="Outubro"
              secondMonth="Dezembro"
              regime="Meio período"
              description="aaa"
            >
              <Badge>Testes automatizados</Badge>
              <Badge>Javascript</Badge>
              <Badge>Node.js</Badge>
              <Badge>Cypress</Badge>
            </Experience>
          </Card>
        </TabsContent>

        <TabsContent value="2022" className="w-full">
          <Card className="h-[650px] p-6 ml-4 border-indigo-200">
            <Experience
              title="Desenvolvedor fullstack"
              place="Laboratório de Engenharia de Pavimentos (LEP) - Universidade Federal de Campina Grande (Remoto)"
              firstMonth="Janeiro"
              secondMonth="Dezembro"
              regime="Meio período"
              description="aaa"
            >
              <Badge>Teste automatizados</Badge>
            </Experience>

            <Experience
              title="Estudante de Capacitação"
              place="Embedded + VIRTUS - Universidade Federal de Campina Grande (Remoto)"
              firstMonth="Janeiro"
              secondMonth="Março"
              regime="Meio período"
              description="aaa"
            >
              <Badge>Testes automatizados</Badge>
              <Badge>Javascript</Badge>
              <Badge>Node.js</Badge>
              <Badge>Cypress</Badge>
            </Experience>

            <Experience
              title="Web Designer e Desenvolvedor Frontend"
              place="Laboratório de Computação Inteligente Aplicada (LACINA) - Universidade Federal de Campina Grande (Remoto)"
              firstMonth="Agosto"
              secondMonth="Dezembro"
              regime="Meio período"
              description="aaa"
            >
              <Badge>Testes automatizados</Badge>
              <Badge>Javascript</Badge>
              <Badge>Node.js</Badge>
              <Badge>Cypress</Badge>
            </Experience>
          </Card>
        </TabsContent>

        <TabsContent value="2023" className="w-full">
          <Card className="h-[650px] p-6 ml-4 border-indigo-200">
            <Experience
              title="Desenvolvedor fullstack"
              place="Laboratório de Engenharia de Pavimentos (LEP) - Universidade Federal de Campina Grande (Remoto)"
              firstMonth="Janeiro"
              secondMonth="Setembro"
              regime="Meio período"
              description="aaa"
            >
              <Badge>Teste automatizados</Badge>
            </Experience>

            <Experience
              title="Web Designer e Desenvolvedor Frontend"
              place="Laboratório de Computação Inteligente Aplicada (LACINA) - Universidade Federal de Campina Grande (Remoto)"
              firstMonth="Janeiro"
              secondMonth="Março"
              regime="Meio período"
              description="aaa"
            >
              <Badge>Testes automatizados</Badge>
              <Badge>Javascript</Badge>
              <Badge>Node.js</Badge>
              <Badge>Cypress</Badge>
            </Experience>

            <Experience
              title="Engenheiro de Software"
              place="ServeSoft"
              firstMonth="Outubro"
              secondMonth="Dezembro"
              regime="Integral"
              description="aaa"
            >
              <Badge>Testes automatizados</Badge>
              <Badge>Javascript</Badge>
              <Badge>Node.js</Badge>
              <Badge>Cypress</Badge>
            </Experience>
          </Card>
        </TabsContent>

        <TabsContent value="2024" className="w-full">
          <Card className="h-[650px] p-6 ml-4 border-indigo-200">
            <Experience
              title="Engenheiro de Software"
              place="ServeSoft"
              firstMonth="Outubro"
              secondMonth="Dezembro"
              regime="Integral"
              description="aaa"
            >
              <Badge>Testes automatizados</Badge>
              <Badge>Javascript</Badge>
              <Badge>Node.js</Badge>
              <Badge>Cypress</Badge>
            </Experience>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}