import { Button, Spinner } from "flowbite-react";
import { AiOutlinePlus } from "react-icons/ai";
import SourceFormUrlInput from "./SourceFormUrlInput";
import SourceFormTextarea from "./SourceFormTextarea";

const SourceEditorForm = ({
  sourceValue,
  quoteValue,
  onQuoteInputChange,
  onSubmit,
  onUrlInputChange,
  isLoading,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <SourceFormUrlInput value={sourceValue} onChange={onUrlInputChange} />
      <SourceFormTextarea value={quoteValue} onChange={onQuoteInputChange} />
      <div className="w-full flex items-center justify-between">
        <Button
          type={"submit"}
          disabled={isLoading || !sourceValue}
          className="self-start"
        >
          Add
          <AiOutlinePlus className="ml-2" />
        </Button>
        {isLoading && <Spinner />}
      </div>
    </form>
  );
};

export default SourceEditorForm;
