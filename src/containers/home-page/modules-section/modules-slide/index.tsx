import ModuleCard from "@/components/cards/module-card/module-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ModulesSlide() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <ModuleCard />
        </CarouselItem>
        <CarouselItem>
          <ModuleCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
