import TitleInput from "./TitleInput";
import AddSourceButton from "./AddSourceButton";
import { useState } from "react";
import SourcesInput from "./SourcesInput";
import { saveSource } from "../lib/apiController";

const SourceEditor = ({
  sources,
  setSources,
  argumentTitle,
  setArgumentTitle,
}) => {
  const [sourceInputValue, setSourceInputValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onAddSource = (source) => {
    setSourceInputValue("");
    setSources([...sources, source]);
  };

  const addSource = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const responseBody = await saveSource(sourceInputValue);
      if (responseBody.error) {
        throw responseBody.error;
      } else {
        onAddSource(responseBody);
      }
    } catch (error) {
      setHasError(true);
      console.error("Failed to fetch URL data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-4xl mb-4">My Sources</h1>
      <h2 className="text-2xl mb-4">
        Provide the sources for you online argument
      </h2>
      <TitleInput title={argumentTitle} onChange={setArgumentTitle} />
      <AddSourceButton
        hasTitle={argumentTitle !== ""}
        sourceInputValue={sourceInputValue}
        setSourceInputValue={setSourceInputValue}
      />
      <SourcesInput
        handleInputChange={setSourceInputValue}
        sourceUrl={sourceInputValue}
        onAddSource={addSource}
        isLoading={isLoading}
        hasError={hasError}
      />
    </>
  );
};

export default SourceEditor;
