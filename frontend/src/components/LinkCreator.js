import { Button, Spinner } from "flowbite-react";
import ResultLink from "./ResultLink";

const LinkCreator = ({ addArgument, isLoading, createdLink, hasSources }) => {
  return (
    <>
      <Button
        disabled={!hasSources}
        className="w-full mb-4"
        onClick={() => addArgument()}
      >
        Create Link
      </Button>
      {isLoading && <Spinner className="mx-auto mb-4" />}
      {!isLoading && <ResultLink createdLink={createdLink} />}
    </>
  );
};

export default LinkCreator;
