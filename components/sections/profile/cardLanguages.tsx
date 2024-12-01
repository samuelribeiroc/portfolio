import { Card, CardHeader } from "@/components/ui/card";
import { TbWorld } from "react-icons/tb";

export default function CardLanguages() {
  return (
    <Card className="col-span-2 bg-neutral-800/10 border-none backdrop-blur-lg shadow-lg">
      <CardHeader className="bg-neutral-800/20 rounded-t-md">
        <div className="flex items-center gap-4">
          <TbWorld className="text-neutral-50 text-3xl" />
          <h1 className="text-neutral-50 text-3xl font-bold">Línguas</h1>
        </div>
      </CardHeader>
    </Card>
  )
}