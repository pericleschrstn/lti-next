import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer } from "lucide-react";
import Image from "next/image";

export default function ModuleCard() {
  return (
    <Card>
      <CardHeader className="grid">
        <Badge className="justify-self-start">Módulo 1</Badge>
      </CardHeader>
      <CardContent className="p-0">
        <Image src={"/images/module-1.jpg"} alt="Thumb" width={1000} height={563} />
        <div className="p-6">
          <CardTitle className="text-primary mb-3">Game design</CardTitle>
          <p>O que são games e o que eles podem influenciar em nossas vidas.</p>
        </div>
      </CardContent>
      <CardFooter>
        <Timer className="w-4 h-4 mr-1 relative -top-px" />
        <p className="text-sm">30 minutos</p>
      </CardFooter>
    </Card>
  );
}
