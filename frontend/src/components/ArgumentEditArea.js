import { Button, Spinner } from "flowbite-react";
import { useState } from "react";
import SourcesInput from "./MainSourceEditor";

const ArgumentEditArea = ({ isLoading, saveArgument }) => {
  const [isAddingSource, setIsAddingSource] = useState(false);
  const [sourceInputValue, setSourceInputValue] = useState("");
  const [quoteInputValue, setQuoteInputValue] = useState("");

  const addSource = () => {
    setIsAddingSource(true);
  };

  const onSaveSource = async () => {};

  return (
    <div>
      {isAddingSource && (
        <SourcesInput
          isLoading={isLoading}
          setSourceInputValue={setSourceInputValue}
          quoteInputValue={quoteInputValue}
          setQuoteInputValue={setQuoteInputValue}
          sourceUrl={sourceInputValue}
          hasError={false}
          saveSource={onSaveSource}
        ></SourcesInput>
      )}
      <div className="flex gap-2 items-end mt-4 justify-start">
        <Button onClick={saveArgument}>Save</Button>
        <Button onClick={addSource}>Add Source</Button>

        {isLoading && (
          <span className="ml-auto">
            <Spinner />
          </span>
        )}
      </div>
    </div>
  );
};

export default ArgumentEditArea;
