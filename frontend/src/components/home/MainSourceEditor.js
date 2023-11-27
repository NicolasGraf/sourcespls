import { Card } from "flowbite-react";
import { IoClose } from "react-icons/io5";
import SourceEditorForm from "../sources/SourceEditorForm";
import { useMainPageContext } from "../../lib/mainPageContext";

const MainSourceEditor = ({ saveSource }) => {
  const {
    sourceInputValue,
    setSourceInputValue,
    quoteInputValue,
    setQuoteInputValue,
    isSourceLoading,
    hasSourceError,
  } = useMainPageContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    saveSource();
  };

  if (sourceInputValue === null) return null;

  return (
    <Card className="mb-4 w-full text-left relative">
      <h3 className="text-xl">Create Source</h3>
      <SourceEditorForm
        onSubmit={handleSubmit}
        onUrlInputChange={setSourceInputValue}
        onQuoteInputChange={setQuoteInputValue}
        sourceValue={sourceInputValue}
        quoteValue={quoteInputValue}
        isLoading={isSourceLoading}
        hasError={hasSourceError}
      />
      <IoClose
        onClick={() => setSourceInputValue(null)}
        className="text-2xl text-gray-500 cursor-pointer absolute top-4 right-4 z-20"
      />
    </Card>
  );
};

export default MainSourceEditor;
