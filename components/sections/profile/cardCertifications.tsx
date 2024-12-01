import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { FaCertificate } from "react-icons/fa";

export default function CardCertifications() {
  return (
    <Card className="col-span-3 bg-neutral-800/10 border-none backdrop-blur-lg shadow-lg">
      <CardHeader className="bg-neutral-800/10 rounded-t-md">
        <div className="flex items-center gap-4">
          <FaCertificate className="text-neutral-50 text-3xl" />
          <h1 className="text-neutral-50 text-3xl font-bold">Certificações</h1>
        </div>
      </CardHeader>
      <CardContent>
        {/* <Image
          src="/assets/certificates/course-certificates-SCRUMstudy_Samuel_Ribeiro_Costa.png"
          alt="certificado"
          width={900}
          height={500}
        /> */}
      </CardContent>
    </Card>
  )
}