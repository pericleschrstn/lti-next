export type ModulesType = {
  id: number;
  title: string;
  resume: string;
  duration: string;
  category: string;
  image: string;
  url: string;
};

export const modules: ModulesType[] = [
  {
    id: 1,
    title: "Game design",
    resume: "O que são games e o que eles podem influenciar em nossas vidas.",
    duration: "30 minutos",
    category: "Módulo 1",
    image: "/images/module-1.jpg",
    url: "/modulos/game-design",
  },
  {
    id: 2,
    title: "Gamificação",
    resume: "O que é gamificação e como usar para educação.",
    duration: "20 minutos",
    category: "Módulo 2",
    image: "/images/module-2.jpg",
    url: "/modulos/gamificacao",
  },
  {
    id: 3,
    title: "Jogos mobile",
    resume: "O impacto dos jogos mobiles na população de classe média e baixa.",
    duration: "40 minutos",
    category: "Módulo 3",
    image: "/images/module-3.jpg",
    url: "/modulos/jogos-mobile",
  },
  {
    id: 4,
    title: "Jogos AAA x jogos indies",
    resume: "Entenda a diferença entre jogos AAA e indies.",
    duration: "20 minutos",
    category: "Módulo 4",
    image: "/images/module-3.jpg",
    url: "/modulos/jogos-aaa-jogos-indies",
  },
];
