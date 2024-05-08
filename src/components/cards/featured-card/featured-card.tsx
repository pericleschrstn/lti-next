import Image from "next/image";

interface FeaturedCardProps {
  title: string;
  content: string;
  image: string;
}

export default function FeaturedCard({ title, content, image }: FeaturedCardProps) {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-gradient-to-r from-info to-primary text-white p-6 flex items-center">
        <div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p>{content}</p>
        </div>
      </div>
      <div>
        <Image src={image} alt="Foto" width={1000} height={1000} />
      </div>
    </div>
  );
}
