import Image from "next/image";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="bg-primary py-14">
      <div className="mx-auto container text-center">
        <Image
          src={"/images/logotipo-fiemg-white.svg"}
          alt="Logotipo"
          width={150}
          height={40}
          className="inline-block mb-4"
        />
        <p className="text-white">&copy;{currentYear} - Jogos digitais</p>
      </div>
    </footer>
  );
}
