import SavedSources from "../components/SavedSources";
import { useState } from "react";
import Separator from "../components/Separator";
import SourceEditor from "../components/SourceEditor";
import { saveArgument } from "../lib/apiController";
import LinkCreator from "../components/LinkCreator";

export const MainPage = () => {
  const [sources, setSources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [argumentTitle, setArgumentTitle] = useState("");
  const [createdLink, setCreatedLink] = useState(null);

  const addArgument = async () => {
    const sourceIds = sources.map((source) => source.id);
    setIsLoading(true);
    try {
      const responseBody = await saveArgument({ argumentTitle, sourceIds });
      const host = window.location.origin;
      setCreatedLink(`${host}/${responseBody.slug}`);
    } catch (error) {
      console.error("Failed to fetch URL data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 text-center dark:text-white md:flex md:flex-row md:flex-wrap">
      <h1 className="text-4xl md:text-5xl mb-4 w-full">Sources, Please</h1>
      <h2 className="text-2xl font-light md:text-3xl mb-12 w-full">
        Back up your argument with real sources to prove your point.
      </h2>
      <div className="flex-1">
        <SourceEditor
          argumentTitle={argumentTitle}
          setArgumentTitle={setArgumentTitle}
          sources={sources}
          setSources={setSources}
        />
        <hr className="h-0.5 border-primary-dark dark:border-secondary-light dark:brightness-50 my-8" />
        <LinkCreator
          addArgument={addArgument}
          createdLink={createdLink}
          isLoading={isLoading}
          hasSources={sources.length !== 0}
        />
      </div>

      <Separator />
      <div className="flex-1 h-full">
        <SavedSources sources={sources} setSources={setSources} />
      </div>
    </main>
  );
};
