import { Button, Spinner, Textarea, TextInput } from "flowbite-react";
import { AiOutlinePlus } from "react-icons/ai";

const SourceEditorForm = ({
  sourceValue,
  quoteValue,
  onQuoteInputChange,
  onSubmit,
  onUrlInputChange,
  isLoading,
  hasError,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        type="url"
        required
        placeholder={`Enter URL`}
        className="w-full mb-4"
        value={sourceValue}
        onChange={(event) => onUrlInputChange(event.target.value)}
        color={hasError ? "failure" : "primary"}
        helperText={
          hasError && (
            <span className="font-medium">Could not save this URL</span>
          )
        }
      />
      <Textarea
        color="primary"
        value={quoteValue}
        className="w-full mb-4"
        placeholder="Add a quote from the source"
        rows={4}
        onChange={(event) => onQuoteInputChange(event.target.value)}
      />
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
