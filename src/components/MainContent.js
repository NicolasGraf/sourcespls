import SourcesInputContainer from "./SourcesInputContainer";
import SavedSources from "./SavedSources";
import { useState } from "react";
import Separator from "./Separator";
import TitleInput from "./TitleInput";

export const MainContent = () => {
  const [sources, setSources] = useState([]);
  const [argumentTitle, setArgumentTitle] = useState("");

  return (
    <main className="container mx-auto px-4 py-8 text-center dark:text-white">
      <h1 className="text-4xl mb-4">My Sources</h1>
      <h2 className="text-2xl mb-4">
        Provide the sources for you online argument
      </h2>
      <TitleInput title={argumentTitle} onChange={setArgumentTitle} />
      <SourcesInputContainer
        hasTitle={argumentTitle !== ""}
        sources={sources}
        setSources={setSources}
      />
      <Separator />
      <SavedSources
        argumentTitle={argumentTitle}
        sources={sources}
        setSources={setSources}
      />
    </main>
  );
};
