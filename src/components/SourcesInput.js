import { Button, Card, Spinner, TextInput } from "flowbite-react";
import { IoClose } from "react-icons/io5";

const SourcesInputContainer = ({
  handleInputChange,
  sourceUrl,
  onAddSource,
  isLoading,
  hasError,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddSource();
  };

  if (sourceUrl === null) return null;

  return (
    <Card className="mb-4 w-full text-left relative">
      <h3 className="text-xl">Enter URL</h3>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="url"
          required
          placeholder={`Enter URL`}
          className="w-full mb-4"
          value={sourceUrl}
          onChange={(event) => handleInputChange(event.target.value)}
          color={hasError ? "failure" : "primary"}
          helperText={
            hasError && (
              <span className="font-medium">Could not save this URL</span>
            )
          }
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
        onClick={() => handleInputChange(null)}
        className="text-2xl text-gray-200 cursor-pointer absolute top-4 right-4 z-20"
      />
    </Card>
  );
};

export default SourcesInputContainer;
