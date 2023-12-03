import { Button, Spinner } from "flowbite-react";
import ResultLink from "./ResultLink";
import { useMainPageContext } from "../../lib/mainPageContext";
import { useSaveArgument } from "../../lib/apiHooks";
import { useEffect, useState } from "react";

const LinkCreator = () => {
  const { sources, argumentTitle } = useMainPageContext();
  const { saveArgument, loading, data, error } = useSaveArgument();
  const [createdLink, setCreatedLink] = useState(null);
  const hasSources = sources.length > 0;
  const createArgument = async () => {
    const sourceIds = sources.map((source) => source.id);
    await saveArgument({ argumentTitle, sourceIds });
    if (error) return console.error(error);
  };

  useEffect(() => {
    if (data) {
      const host = window.location.origin;
      setCreatedLink(`${host}/${data.slug}`);
    }
  }, [data, setCreatedLink]);

  return (
    <>
      <Button
        disabled={!hasSources}
        className="mb-4"
        onClick={() => createArgument()}
      >
        Create Argument
      </Button>
      {loading && <Spinner className="mx-auto mb-4" />}
      {!loading && <ResultLink createdLink={createdLink} />}
    </>
  );
};

export default LinkCreator;
