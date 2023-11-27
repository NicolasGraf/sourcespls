import { Button, Card, Spinner, Textarea, TextInput } from "flowbite-react";
import { IoClose } from "react-icons/io5";

const SourcesInputContainer = ({
  setSourceInputValue,
  setQuoteInputValue,
  quoteInputValue,
  sourceUrl,
  saveSource,
  isLoading,
  hasError,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    saveSource();
  };

  if (sourceUrl === null) return null;

  return (
    <Card className="mb-4 w-full text-left relative">
      <h3 className="text-xl">Create Source</h3>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="url"
          required
          placeholder={`Enter URL`}
          className="w-full mb-4"
          value={sourceUrl}
          onChange={(event) => setSourceInputValue(event.target.value)}
          color={hasError ? "failure" : "primary"}
          helperText={
            hasError && (
              <span className="font-medium">Could not save this URL</span>
            )
          }
        />
        <Textarea
          color="primary"
          value={quoteInputValue}
          className="w-full mb-4"
          placeholder="Add a quote from the source"
          rows={4}
          onChange={(event) => setQuoteInputValue(event.target.value)}
        />
        <div className="w-full flex items-center justify-between">
          <Button
            type={"submit"}
            disabled={isLoading || !sourceUrl}
            className="self-start"
          >
            Add
          </Button>
          {isLoading && <Spinner />}
        </div>
      </form>
      <IoClose
        onClick={() => setSourceInputValue(null)}
        className="text-2xl text-gray-500 cursor-pointer absolute top-4 right-4 z-20"
      />
    </Card>
  );
};

export default SourcesInputContainer;
