import Image from "next/image";

export default function SecondarySection() {
  return (
    <section className="py-12">
      <div className="mx-auto container">
        <div className="grid grid-cols-12 bg-gradient-to-b from-info to-primary rounded-md shadow-md place-content-around">
          <div className="lg:col-start-2 lg:col-span-4 col-span-12 flex justify-center flex-col text-white p-4 xl:p-0 order-3 lg:order-2">
            <h3 className="text-3xl mb-4">O que você aprenderá</h3>
            <p className="font-light">
              A principal característica dos jogos de luta é contar com dois ou mais personagens que se enfrentam entre
              si, utilizando golpes ou poderes extraordinários, geralmente em uma arena.
            </p>
          </div>
          <div className="lg:col-start-8 col-span-8 lg:col-span-4 order-2 lg:order-3">
            <Image className="-mt-12 " src={"/images/secondary-section.png"} alt="Imagem" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </section>
  );
}
