import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-3xl text-primary font-bold">Hello World</h1>
      <RadioGroup defaultValue="option-one">
        <div className="flex space-x-2 items-center ">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Item 1</Label>
        </div>
        <div className="flex space-x-2 items-center ">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Item 2</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
