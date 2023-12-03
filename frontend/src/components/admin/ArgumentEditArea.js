import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import SourceEditorForm from "../sources/SourceEditorForm";
import { BiTrash } from "react-icons/bi";
import { useAdminContext } from "../../lib/AdminContext";
import { useDeleteArgumentById, useSaveSource } from "../../lib/apiHooks";

const ArgumentEditArea = ({ saveArgument, argumentId, updateLoading }) => {
  const [sourceInputValue, setSourceInputValue] = useState("");
  const [quoteInputValue, setQuoteInputValue] = useState("");
  const { selectedSources, updateSources, onDeleteArgument } =
    useAdminContext();
  const { deleteArgumentById, loading: deleteLoading } =
    useDeleteArgumentById();
  const { saveSource, data, loading: saveLoading } = useSaveSource();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await saveSource(sourceInputValue, quoteInputValue);
  };

  useEffect(() => {
    if (data) {
      setSourceInputValue("");
      setQuoteInputValue("");
      updateSources([...selectedSources, data]);
      saveArgument();
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
        onSubmit={handleSubmit}
        isLoading={saveLoading || updateLoading || deleteLoading}
      />
      <div className="flex gap-4 items-end justify-start">
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
