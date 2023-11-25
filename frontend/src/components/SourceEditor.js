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
  const [quoteInputValue, setQuoteInputValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onAddSource = (source) => {
    setSourceInputValue("");
    setQuoteInputValue("");
    setSources([...sources, source]);
  };

  const addSource = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const responseBody = await saveSource(sourceInputValue, quoteInputValue);
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
      <h2 className="text-xl mb-4">
        Enter a title to your argument, and provide sources and quotes.
      </h2>
      <TitleInput title={argumentTitle} onChange={setArgumentTitle} />
      <AddSourceButton
        hasTitle={argumentTitle !== ""}
        sourceInputValue={sourceInputValue}
        setSourceInputValue={setSourceInputValue}
      />
      <SourcesInput
        setSourceInputValue={setSourceInputValue}
        setQuoteInputValue={setQuoteInputValue}
        sourceUrl={sourceInputValue}
        onAddSource={addSource}
        isLoading={isLoading}
        hasError={hasError}
      />
    </>
  );
};

export default SourceEditor;
