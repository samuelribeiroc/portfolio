import Image from 'next/image';

//components ui
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//icons
import { FaRegCalendarAlt } from "react-icons/fa";

//certifications
import portfolio from "../../../public/assets/certificates/course-certificates-SCRUMstudy_Samuel_Ribeiro_Costa.png";

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

function Experience({title, place, firstMonth,
  secondMonth, regime, children, description,
  link, declaration}: ExperienceProps) {
  return (
    <div className="mb-8 flex flex-col">
      <h1 className="text-neutral-950 text-2xl font-semibold">
        {title}
      </h1>

      <h2 className="text-indigo-600 font-semibold">
        {place}
      </h2>

      <div className="h-6 flex gap-1 text-indigo-600 items-center uppercase text-sm">
        <FaRegCalendarAlt className="w-4 h-4" />
        {firstMonth} - {secondMonth}
        <Separator orientation="vertical" className="mx-2" />
        {regime}
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {children}
      </div>
              
      <span className="my-4 font-light">
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

export default function Experiences() {
  return (
    <Card className="w-[90vw] flex flex-col rounded-t-none rounded-b-[20px] border-none bg-neutral-50 z-10">
      <CardHeader className="rounded-t-none">
        <h1 className="text-neutral-950 text-4xl font-bold mb-8">
          Experiências
        </h1>
      </CardHeader>

      <CardContent>
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
            <Card className="h-[800px] p-6 ml-4 border-indigo-100">
              <Experience
                title="Fullstack trainee"
                place="Laboratório de Engenharia de Pavimentos (LEP) - Universidade Federal de Campina Grande (Remoto)"
                firstMonth="Julho"
                secondMonth="Dezembro"
                regime="Meio período"
                description="Neste projeto do LEP em conjunto com a JRB Engenharia pude aprender a utilizar 
                React e Node para desenvolver uma solução real com usuários reais pela primeira vez, o 
                FASTENG. O projeto consiste em uma plataforma para anotações e realizações de cálculos na 
                área de Engenharia Civil. Na plataforma é possível cadastrar amostras coletadas de materiais
                de asfalto e solos e realizar ensaios seguindo as regras da DNIT Inicialmente
                tive a responsabilidade de corrigir alguns erros de Javascript e na responsividade das telas."
                link="https://smartdoser.fastengapp.com.br/"
              >
                <Badge>FullStack</Badge>
                <Badge>React.js</Badge>
                <Badge>Node.js</Badge>
                <Badge>Express</Badge>
                <Badge>Axios</Badge>
                <Badge>Javascript</Badge>
                <Badge>Typescript</Badge>
                <Badge>Styled-Components</Badge>
                <Badge>SCRUM</Badge>
                <Badge>Trello</Badge>
                <Badge>Github</Badge>
              </Experience>

              <Experience
                title="Estudante PD&I"
                place="Software Practices Laboratory (SPLab) - Universidade Federal de Campina Grande (Remoto)"
                firstMonth="Julho"
                secondMonth="Setembro"
                regime="Meio período"
                description="Neste projeto de Pesquisa, Desenvolvimento e Inovação, que foi uma parceria entre
                o SPLab e a empresa Siteware. Inicialmente me foi disponibilizado alguns minicursos sobre
                análise de dados. Realizamos algumas reuniões de alinhamento com o representante da Siteware.
                Então, começamos a tratar e produzir visualizações com os dados que tínhamos para entender
                melhor o contexto. Depois dessa visualização inicial, iniciamos o processo de realizar predições
                com os dados tratados."
                declaration={portfolio}
              >
                <Badge>Ciência de dados</Badge>
                <Badge>Aprendizagem de máquina</Badge>
                <Badge>Python</Badge>
                <Badge>Pandas</Badge>
                <Badge>Sklearn</Badge>
                <Badge>Jupyter notebook</Badge>
                <Badge>SCRUM</Badge>
                <Badge>Github</Badge>
              </Experience>

              <Experience
                title="Estudante de Capacitação"
                place="Embedded + VIRTUS - Universidade Federal de Campina Grande (Remoto)"
                firstMonth="Outubro"
                secondMonth="Dezembro"
                regime="Meio período"
                description="Nesta capacitação pude estudar sobre testes manuais e automatizados e pude
                aplicar esses estudos em um projeto real já em desenvolvimento pelo Laboratório VIRTUS."
                declaration={portfolio}
              >
                <Badge>Testes automatizados</Badge>
                <Badge>Javascript</Badge>
                <Badge>Node.js</Badge>
                <Badge>Cypress</Badge>
                <Badge>SCRUM</Badge>
                <Badge>Github</Badge>
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
      </CardContent>
    </Card>
  )
}