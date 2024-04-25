import { Button } from "@/components/ui/button";
import { List } from "lucide-react";

export default function ModuleSection() {
  return (
    <section className="pt-12 bg-gray-100">
      <div className="mx-auto container">
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-span-10 flex justify-between items-center">
            <h2 className="text-3xl text-primary">Módulos deste curso:</h2>
            <Button>
              <List className="mr-2 h-4 w-4" />
              Visualização
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
