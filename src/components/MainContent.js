import { TextInput } from "flowbite-react";
import SourcesInput from "./SourcesInput";

export const MainContent = () => {
  return (
    <main className="container mx-auto px-4 py-8 text-center dark:text-white">
      <h1 className="text-4xl mb-8">My Sources</h1>
      <h2 className="text-2xl mb-4">
        Provide the sources for you online argument
      </h2>
      <SourcesInput />
    </main>
  );
};
