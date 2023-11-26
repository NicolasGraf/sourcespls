import { Button } from "flowbite-react";
import { AiOutlinePlus } from "react-icons/ai";

const AddSourceButton = ({
  hasTitle,
  sourceInputValue,
  setSourceInputValue,
}) => {
  if (sourceInputValue !== null) return null;

  return (
    <>
      <Button
        className="mb-4"
        disabled={!hasTitle}
        onClick={() => setSourceInputValue("")}
      >
        Add Source
        <AiOutlinePlus className="ml-2" />
      </Button>
    </>
  );
};

export default AddSourceButton;
