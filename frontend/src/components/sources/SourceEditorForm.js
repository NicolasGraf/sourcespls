import { Button, Spinner } from "flowbite-react";
import SourceFormUrlInput from "./SourceFormUrlInput";
import SourceFormTextarea from "./SourceFormTextarea";
import { BiSave } from "react-icons/bi";

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
          Save
          <BiSave className="ml-1 text-lg" />
        </Button>
        {isLoading && (
          <p className="mr-auto ml-4 pr-4">
            This should only take a couple of seconds...
          </p>
        )}
        {isLoading && <Spinner />}
      </div>
    </form>
  );
};

export default SourceEditorForm;
