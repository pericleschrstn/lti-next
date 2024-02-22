import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-3xl text-primary font-bold">Hello World</h1>
      <Alert variant={"warning"}>
        <Check className="h-4 w-4"></Check>
        <AlertTitle>Alerta</AlertTitle>
        <AlertDescription>Corpo do alerta...</AlertDescription>
      </Alert>
    </div>
  );
}
