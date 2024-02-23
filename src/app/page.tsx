import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-3xl text-primary font-bold">Hello World</h1>
      <Badge variant={"outline"}>Badge</Badge>
    </div>
  );
}
