import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-6">
      <div className="mx-auto container">
        <div className="grid lg:grid-cols-12 grid-cols-1 place-items-center">
          <div className="lg:col-span-4">
            <Image
              className="lg:max-w-full max-w-60"
              src={"/images/o-que-sao-games.png"}
              alt="O que são games"
              width={1000}
              height={1000}
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Badge>Módulo 1</Badge>
            <h2 className="text-secondary text-3xl my-4">O que são games?</h2>
            <p>
              Game, jogo eletrônico, jogos digitais, videogame. Todos esses termos são usados para jogos em que a pessoa
              que está jogando – jogador ou gamer – interage por meio de periféricos que são conectados ao aparelho,
              entre eles: controles (joysticks), teclados, monitores, entre outros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
