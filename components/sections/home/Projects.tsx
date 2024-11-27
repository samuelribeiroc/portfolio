import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export default function Projects() {
  return (
    <div className="w-svw flex flex-col justify-center items-center px-24 py-20 z-10">
      <div className="w-full h-full p-8 flex flex-col items-start rounded-[20px] bg-neutral-800/10 backdrop-blur-lg shadow-lg">
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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card className="border-indigo-900 bg-indigo-950/10">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
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