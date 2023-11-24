import SourcesInputContainer from "./SourcesInputContainer";
import SavedSources from "./SavedSources";
import { useState } from "react";
import Separator from "./Separator";

export const MainContent = () => {
  const [sources, setSources] = useState([]);
  return (
    <main className="container mx-auto px-4 py-8 text-center dark:text-white">
      <h1 className="text-4xl mb-8">My Sources</h1>
      <h2 className="text-2xl mb-4">
        Provide the sources for you online argument
      </h2>
      <SourcesInputContainer sources={sources} setSources={setSources} />
      <Separator />
      <SavedSources sources={sources} setSources={setSources} />
    </main>
  );
};
