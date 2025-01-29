import { Dialog, DialogHeader, DialogTrigger,  DialogContent, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import Image from 'next/image';
import { Button } from '../ui/button';
import { projectsType } from '../sections/home/projects';
import { Badge } from '../ui/badge';
import { FiExternalLink } from "react-icons/fi";

export function DialogProject({ title, print,
  techs, detailedDescription, link }: projectsType) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Visualizar</Button>
      </DialogTrigger>

      <DialogContent className="bg-neutral-950/10 backdrop-blur-lg shadow-lg w-1/3">
        <DialogHeader className="bg-indigo-600 relative overflow-hidden rounded-t-lg aspect-3/2 w-full">
          <Image className="object-cover" src={print} alt={title} />
        </DialogHeader>

        <DialogTitle className="text-neutral-50 text-xl px-4">
          {title}
        </DialogTitle>

        <DialogDescription className="text-neutral-50 px-4">
          <div className="flex flex-wrap gap-2 mb-8">
            {techs.map((tech, index) => (
              <Badge key={index}>
                {tech}
              </Badge>
            ))}
          </div>

          aaaaaaa
        </DialogDescription>
        
        <DialogFooter className="p-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit"
          >
            <Button>Acessar <FiExternalLink /></Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}