import { useState } from "react";
import { Button, Card, Spinner, TextInput } from "flowbite-react";

const SourcesInputContainer = ({
  handleInputChange,
  sourceUrl,
  onAddSource,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    addSource(sourceUrl);
  };

  const addSource = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const response = await fetch(`http://localhost:3030/sources`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: sourceUrl,
        }),
      });
      const responseBody = await response.json();
      if (responseBody.error) {
        throw responseBody.error;
      } else {
        onAddSource(responseBody);
      }
    } catch (error) {
      setHasError(true);
      console.error("Failed to fetch URL data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mb-4 w-full text-left">
      <h3 className="text-xl">Enter URL</h3>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="url"
          required
          placeholder={`Enter URL`}
          className="w-full mb-4"
          onChange={(event) => handleInputChange(event)}
          color={hasError ? "failure" : "gray"}
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
    </Card>
  );
};

export default SourcesInputContainer;
