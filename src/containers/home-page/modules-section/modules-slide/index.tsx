"use client";
import ModuleCard from "@/components/cards/module-card/module-card";
import { modules } from "../constants";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./index.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ModulesSlide() {
  return (
    <Splide
      hasTrack={false}
      options={{ perPage: 2, gap: "1.5rem", pagination: false }}
      aria-label="Módulos deste curso"
      className="flex-col flex"
    >
      <SplideTrack>
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
      </SplideTrack>
      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">
          <ChevronLeft />
        </button>
        <button className="splide__arrow splide__arrow--next">
          <ChevronRight />
        </button>
      </div>
    </Splide>
  );
}
