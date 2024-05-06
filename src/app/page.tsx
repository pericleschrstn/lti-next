import Banner from "@/components/banner";
import ModuleSection from "@/containers/home-page/modules-section/modules-section";
import SecondarySection from "@/containers/home-page/secondary-section/secondary-section";

export default function HomePage() {
  return (
    <>
      <Banner subtitle={"Explore o conteúdo de"} title={"Jogos digitais"} />
      <ModuleSection />
      <SecondarySection />
    </>
  );
}
