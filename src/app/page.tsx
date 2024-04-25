import Banner from "@/components/banner";
import ModuleSection from "@/containers/home-page/modules-section/modules-section";

export default function HomePage() {
  return (
    <>
      <Banner subtitle={"Explore o conteúdo de"} title={"Jogos digitais"} />
      <ModuleSection />
    </>
  );
}
