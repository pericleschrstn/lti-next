import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ModuleCardProps {
  id: number;
  title: string;
  resume: string;
  duration: string;
  category: string;
  image: string;
  url: string;
}

export default function ModuleCard({ id, title, resume, duration, category, image, url }: ModuleCardProps) {
  return (
    <Link href={url}>
      <Card className="h-full shadow-md hover:border-primary/50">
        <CardHeader className="grid">
          <Badge className="justify-self-start">{category}</Badge>
        </CardHeader>
        <CardContent className="p-0">
          <Image src={image} alt={title} width={1500} height={1500} sizes="80vw" />
          <div className="p-6">
            <CardTitle className="text-primary mb-3">{title}</CardTitle>
            <p>{resume}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Timer className="w-4 h-4 mr-1 relative -top-px" />
          <p className="text-sm">{duration}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
