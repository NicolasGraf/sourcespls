import { Button, Card, Spinner } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import SourceQuote from "./SourceQuote";
import SourceImage from "./SourceImage";
import { BiTrash } from "react-icons/bi";
import SourceHeader from "./SourceHeader";

const SourceContainer = ({ source, onDelete, editable, loading }) => {
  const { id, url, title, imageUrl } = source;

  const visitUrl = () => {
    window.open(url, "_blank");
  };

  return (
    <Card className="mb-4">
      <div className="flex flex-col relative">
        <SourceImage imageUrl={imageUrl} title={title}></SourceImage>
        <div className="text-left flex flex-col mt-2">
          <SourceHeader source={source} />
          <SourceQuote source={source} />
          <Button className="self-start mt-4" onClick={visitUrl}>
            <FaExternalLinkAlt className="mr-2" />
            Visit
          </Button>
        </div>
        {editable && (
          <BiTrash
            onClick={() => onDelete(id)}
            className="absolute top-0 right-0 text-2xl text-primary-dark dark:text-secondary-light cursor-pointer"
          />
        )}
        {loading && <Spinner className="absolute bottom-0 right-0" />}
      </div>
    </Card>
  );
};

export default SourceContainer;
