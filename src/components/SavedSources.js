import SourceContainer from "./SourceContainer";
import { Button, Card, Spinner } from "flowbite-react";
import { AiFillCopy } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SavedSources = ({ argumentTitle, sources, setSources }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [createdLink, setCreatedLink] = useState(null);
  const [hasNewInformation, setHasNewInformation] = useState(true);
  const noSources = sources.length === 0;

  useEffect(() => {
    setHasNewInformation(true);
  }, [sources]);

  const onDelete = (id) => {
    const newSources = sources.filter((source) => source.id !== id);
    setSources(newSources);
    setHasNewInformation(true);
  };

  const addArgument = async () => {
    const sourceIds = sources.map((source) => source.id);
    const body = {
      title: argumentTitle,
      sourceIds,
    };

    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3030/arguments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const responseBody = await response.json();
      const host = window.location.origin;
      setCreatedLink(`${host}/${responseBody.slug}`);
      setHasNewInformation(false);
    } catch (error) {
      console.error("Failed to fetch URL data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <h2 className="text-2xl mb-4">Sources</h2>
      {noSources && <p className="text-gray-500 mb-4">No sources added yet.</p>}
      {!noSources &&
        sources.map((source) => (
          <SourceContainer
            key={source.id}
            source={source}
            onDelete={() => onDelete(source.id)}
          />
        ))}
      <Button
        disabled={sources.length === 0 || !hasNewInformation}
        className="w-full mb-4"
        onClick={() => addArgument()}
      >
        Create Link
      </Button>
      {isLoading && <Spinner className="mx-auto mb-4" />}
      {createdLink && (
        <Card>
          <div className="flex items-center justify-center gap-4">
            <Link to={createdLink}>{createdLink}</Link>
            <AiFillCopy className="text-2xl text-gray-500 cursor-pointer" />
          </div>
        </Card>
      )}
    </div>
  );
};

export default SavedSources;
