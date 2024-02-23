import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-3xl text-primary font-bold mb-3">Hello World</h1>
      <div>
        <Label htmlFor="name">Seu nome</Label>
        <Input id="name" type="text" placeholder="Seu nome" />
      </div>
    </div>
  );
}
