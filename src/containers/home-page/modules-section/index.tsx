import { Button } from "@/components/ui/button";
import { List } from "lucide-react";
import ModulesSlide from "@/containers/home-page/modules-section/modules-slide/index";

export default function ModuleSection() {
  return (
    <section className="pt-12 bg-gray-100">
      <div className="mx-auto container">
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-span-10 flex justify-between items-center mb-6">
            <h2 className="text-3xl text-primary">Módulos deste curso:</h2>
            <Button>
              <List className="mr-2 h-4 w-4" />
              Visualização
            </Button>
          </div>
          <div className="col-start-2 col-span-10 mb-4">
            <ModulesSlide />
          </div>
          <div className="col-span-12 rounded-t-lg -mt-32" style={{ background: "#53B1D7", height: "300px" }}></div>
        </div>
      </div>
    </section>
  );
}
