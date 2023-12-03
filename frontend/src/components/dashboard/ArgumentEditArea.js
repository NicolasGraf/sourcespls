import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import SourceEditorForm from "../sources/SourceEditorForm";
import { BiSave, BiTrash } from "react-icons/bi";
import { useDashBoardContext } from "../../lib/dashboardPageContext";
import { useDeleteArgumentById, useSaveSource } from "../../lib/apiHooks";

const ArgumentEditArea = ({ saveArgument, argumentId }) => {
  const [sourceInputValue, setSourceInputValue] = useState("");
  const [quoteInputValue, setQuoteInputValue] = useState("");
  const { selectedSources, updateSources, onDeleteArgument } =
    useDashBoardContext();
  const { deleteArgumentById, loading: deleteLoading } =
    useDeleteArgumentById();
  const { saveSource, data, loading: saveLoading } = useSaveSource();

  const onSaveSource = async (evt) => {
    evt.preventDefault();
    await saveSource(sourceInputValue, quoteInputValue);
  };

  useEffect(() => {
    if (data) {
      updateSources([...selectedSources, data]);
      setSourceInputValue("");
      setQuoteInputValue("");
    }
  }, [data]);

  const onDeleteArgumentById = async (id) => {
    await deleteArgumentById(id);
    onDeleteArgument(id);
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
        isLoading={deleteLoading || saveLoading}
      />
      <div className="flex gap-4 items-end justify-start">
        <Button onClick={saveArgument}>
          <span>Save</span>
          <BiSave className="ml-1 text-lg" />
        </Button>
        <Button
          color="failure"
          outline
          onClick={() => onDeleteArgumentById(argumentId)}
        >
          Delete
          <BiTrash className="ml-1 text-lg" />
        </Button>
      </div>
    </>
  );
};

export default ArgumentEditArea;
