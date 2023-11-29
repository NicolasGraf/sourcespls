import { Button, Card } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import SourceQuote from "./SourceQuote";
import SourceImage from "./SourceImage";
import { BiTrash } from "react-icons/bi";

const SourceContainer = ({ source, onDelete, editable }) => {
  const { id, url, title, description, imageUrl, siteName, icon } = source;

  const visitUrl = () => {
    window.open(url, "_blank");
  };

  const shortenDescription = (description) => {
    let maxDescriptionLength = 100;
    if (window.innerWidth > 768) maxDescriptionLength = 200;
    if (description.length > maxDescriptionLength) {
      return description.slice(0, maxDescriptionLength) + "...";
    }
    return description;
  };

  return (
    <Card className="mb-4">
      <div className="flex flex-col relative">
        <SourceImage imageUrl={imageUrl} title={title}></SourceImage>
        <div className="text-left flex flex-col mt-2">
          <h4 className="flex items-center">
            <img className="w-4 h-4 mr-2" src={icon} alt={"icon"} />
            <span>{siteName}</span>
          </h4>
          <h3 className="text-2xl mt-4 mb-2 font-bold">{title}</h3>
          {description && (
            <p className="text-primary-dark dark:text-secondary-light">
              {shortenDescription(description)}
            </p>
          )}
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
      </div>
    </Card>
  );
};

export default SourceContainer;
