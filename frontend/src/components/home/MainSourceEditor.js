import { Card } from "flowbite-react";
import { IoClose } from "react-icons/io5";
import SourceEditorForm from "../sources/SourceEditorForm";
import { useMainPageContext } from "../../lib/mainPageContext";
import { useSaveSource } from "../../lib/apiHooks";
import { useEffect } from "react";

const MainSourceEditor = ({ setInputsEmpty }) => {
  const {
    sourceInputValue,
    setSourceInputValue,
    quoteInputValue,
    setQuoteInputValue,
    setSources,
    sources,
  } = useMainPageContext();
  const { saveSource, data, loading, error } = useSaveSource();
  const handleSubmit = async (event) => {
    event.preventDefault();
    await saveSource(sourceInputValue, quoteInputValue);
    setInputsEmpty();
  };

  useEffect(() => {
    if (data) {
      setSources([...sources, data]);
    }
  }, [data]);

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
        isLoading={loading}
      />
      <IoClose
        onClick={() => setSourceInputValue(null)}
        className="text-2xl text-primary-dark dark:text-secondary-light cursor-pointer absolute top-4 right-4 z-20"
      />
    </Card>
  );
};

export default MainSourceEditor;
