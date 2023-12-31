import PreviewSources from "../components/sources/PreviewSources";
import SeparatorResponsive from "../components/common/SeparatorResponsive";
import HomeCreateArgument from "../components/home/HomeCreateArgument";
import { useHomePageContext } from "../lib/HomePageContext";

export const HomePage = () => {
  const { sources, setSources } = useHomePageContext();

  return (
    <main className="container mx-auto px-4 py-8 text-center dark:text-primary-light md:flex md:flex-row md:flex-wrap">
      <h1 className="text-4xl md:text-5xl mb-4 w-full">Sources, Please</h1>
      <h2 className="text-2xl font-light md:text-3xl mb-12 w-full">
        Back up your argument with real sources to prove your point.
      </h2>
      <div className="flex-1">
        <HomeCreateArgument />
      </div>
      <SeparatorResponsive />
      <div className="flex-1 h-full">
        <PreviewSources
          sources={sources}
          onSetSources={setSources}
          editable={true}
        />
      </div>
    </main>
  );
};
