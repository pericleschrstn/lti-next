import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-3xl text-primary font-bold mb-3">Hello World</h1>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Aceite os termos</Label>
      </div>
    </div>
  );
}
