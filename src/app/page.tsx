import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-3xl text-primary font-bold mb-3">Hello World</h1>
      <div>
        <Label htmlFor="name">Mensagem</Label>
        <Textarea id="name" className="mb-4" placeholder="Input" />
        <Input placeholder="Input" />
      </div>
    </div>
  );
}
