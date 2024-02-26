import List from "@/components/list";

export default function Home() {
  const listItens = [
    {
      title: "Olá, mundo",
      content: "Isso é um texto...",
    },
    {
      title: "Titulo 2",
      content: "Outro texto...",
    },
    {
      title: "Titulo 3",
      content: "Mais um texto...",
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-3xl text-primary font-bold mb-3">Hello World</h1>
      <List items={listItens} />
    </div>
  );
}
