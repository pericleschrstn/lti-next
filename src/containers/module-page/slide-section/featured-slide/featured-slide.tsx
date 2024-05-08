"use client";

import FeaturedCard from "@/components/cards/featured-card/featured-card";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slide } from "../constants";

export default function FeaturedSlide() {
  return (
    <Splide
      className="w-3/5 mx-auto"
      hasTrack={false}
      options={{
        perPage: 1,
        type: "loop",
        pagination: false,
      }}
    >
      <SplideTrack>
        {slide.map((s, i) => (
          <SplideSlide key={i}>
            <FeaturedCard title={s.title} content={s.content} image={s.image} />
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
}
