import { useState } from "react";
import { Button } from "flowbite-react";
import SourcesInput from "./SourcesInput";
import { AiOutlinePlus } from "react-icons/ai";

const SourcesInputContainer = ({ hasTitle, sources, setSources }) => {
  const [sourceInputValue, setSourceInputValue] = useState(null);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSourceInputValue(value);
  };

  const addInput = () => {
    setSourceInputValue("");
  };

  const onAddSource = (source) => {
    setSourceInputValue(null);
    setSources([...sources, source]);
  };

  return (
    <>
      {sourceInputValue === null && (
        <Button className="mb-4 w-full" onClick={addInput} disabled={!hasTitle}>
          Add Source
          <AiOutlinePlus className="ml-2" />
        </Button>
      )}
      {sourceInputValue !== null && (
        <SourcesInput
          handleInputChange={handleInputChange}
          sourceUrl={sourceInputValue}
          onAddSource={onAddSource}
        />
      )}
    </>
  );
};

export default SourcesInputContainer;
