import { Button, Spinner } from "flowbite-react";
import ResultLink from "./ResultLink";
import { useMainPageContext } from "../lib/mainPageContext";

const LinkCreator = ({ createLink }) => {
  const { sources, createdLink, isLinkLoading } = useMainPageContext();
  const hasSources = sources.length > 0;

  return (
    <>
      <Button
        disabled={!hasSources}
        className="mb-4"
        onClick={() => createLink()}
      >
        Create Link
      </Button>
      {isLinkLoading && <Spinner className="mx-auto mb-4" />}
      {!isLinkLoading && <ResultLink createdLink={createdLink} />}
    </>
  );
};

export default LinkCreator;
