import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LuGraduationCap } from "react-icons/lu";

export default function CardEducation() {
  return (
    <Card className="col-span-2 bg-indigo-800/10 border-none backdrop-blur-lg shadow-lg">
      <CardHeader className="bg-indigo-800/10 rounded-t-md">
        <div className="flex items-center gap-4">
          <LuGraduationCap className="text-neutral-50 text-3xl" />
          <h1 className="text-neutral-50 text-3xl font-bold">Educação</h1>
        </div>
      </CardHeader>
      <CardContent className="text-neutral-50 pt-4">
        <h1 className="font-bold text-2xl uppercase">
          Ciência da Computação <span className="text-indigo-600 text-xl">(Bacharel)</span>
        </h1>
        <h2 className="font-bold uppercase">
          Universidade Federal de Campina Grande
        </h2>
        <div className="h-6 flex gap-1 text-teal-400 items-center uppercase text-sm">
          Campina Grande, Paraíba - Brasil
          <Separator orientation="vertical" className="mx-2" />
          Ago 2018 - Out 2024
        </div>
        <ul className="list-disc mt-2 ml-6 text-pretty marker:text-indigo-600">
          <li>
            Disciplinas destaque: Lógica para Computação, Estrutura de Dados, Banco de Dados, Princípios de Desenvolvimento Web I e II, Engenharia de Software, Arquitetura de Software, Verificação e Validação de Software, Ciência de Dados Descritiva, Programação Concorrente e Interface Homem-Máquina.
          </li>
          <li>
            Monitor das disciplinas Projeto de Software e Interface Homem-Máquina.
          </li>
          <li>
            Tutor da disciplina Estrutura de Dados.
          </li>
          <li>
            Membro da diretoria de Cultura e Lazer do Centro Acadêmico de Estudantes de Sistemas da Informação (CAESI).
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}