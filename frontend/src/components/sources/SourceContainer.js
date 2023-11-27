import { Button, Card } from "flowbite-react";
import { IoClose } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import SourceQuote from "./SourceQuote";
import SourceImage from "./SourceImage";

const SourceContainer = ({ source, onDelete, editable }) => {
  const { id, url, title, description, imageUrl, siteName, icon } = source;

  const visitUrl = () => {
    window.open(url, "_blank");
  };

  return (
    <Card className="mb-4">
      <div className="flex flex-col items-start gap-4 relative">
        <SourceImage imageUrl={imageUrl} title={title}></SourceImage>
        <div className="text-left flex flex-col gap-2">
          <h4 className="flex items-center">
            <img className="w-4 h-4 mr-2" src={icon} alt={"icon"} />
            <span>{siteName}</span>
          </h4>
          <h3 className="text-lg font-medium">{title}</h3>
          {description && (
            <p className="text-primary-dark dark:text-secondary-light">
              {description}
            </p>
          )}
          <SourceQuote source={source} />
          <Button className="self-start mt-4" onClick={visitUrl}>
            <FaExternalLinkAlt className="mr-2" />
            Visit
          </Button>
        </div>
        {editable && (
          <IoClose
            onClick={() => onDelete(id)}
            className="absolute top-0 right-0 text-2xl text-gray-500 cursor-pointer"
          />
        )}
      </div>
    </Card>
  );
};

export default SourceContainer;
