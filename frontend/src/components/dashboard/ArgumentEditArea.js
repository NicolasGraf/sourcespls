import { Button } from "flowbite-react";
import { useState } from "react";
import SourceEditorForm from "../sources/SourceEditorForm";
import { saveSource } from "../../lib/apiController";
import { BiSave, BiTrash } from "react-icons/bi";
import { useDashBoardContext } from "../../lib/dashboardPageContext";

const ArgumentEditArea = ({ saveArgument, argumentId }) => {
  const [sourceInputValue, setSourceInputValue] = useState("");
  const [quoteInputValue, setQuoteInputValue] = useState("");
  const { sources, onSetSources, onDeleteArgument } = useDashBoardContext();

  const onSaveSource = async (evt) => {
    evt.preventDefault();

    const { data, error } = await saveSource(sourceInputValue, quoteInputValue);
    if (error) {
      console.error(error);
      return;
    }

    onSetSources([...sources, data]);
  };

  return (
    <>
      <SourceEditorForm
        onUrlInputChange={setSourceInputValue}
        onQuoteInputChange={setQuoteInputValue}
        sourceValue={sourceInputValue}
        quoteValue={quoteInputValue}
        hasError={false}
        onSubmit={onSaveSource}
      />
      <div className="flex gap-4 items-end justify-start">
        <Button onClick={saveArgument}>
          <span>Save</span>
          <BiSave className="ml-1 text-lg" />
        </Button>
        <Button
          color="failure"
          outline
          onClick={() => onDeleteArgument(argumentId)}
        >
          Delete
          <BiTrash className="ml-1 text-lg" />
        </Button>
      </div>
    </>
  );
};

export default ArgumentEditArea;
