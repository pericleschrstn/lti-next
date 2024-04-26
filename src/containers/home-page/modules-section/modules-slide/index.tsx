"use client";
import ModuleCard from "@/components/cards/module-card/module-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { modules } from "../constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function ModulesSlide() {
  return (
    <Splide options={{ perPage: 2, gap: "1.5rem", pagination: false }}>
      {modules.map((m, i) => (
        <SplideSlide key={i}>
          <ModuleCard
            id={m.id}
            title={m.title}
            resume={m.resume}
            duration={m.duration}
            category={m.category}
            image={m.image}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}
