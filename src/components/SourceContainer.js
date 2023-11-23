import { Button, Card } from "flowbite-react";
import { IoClose } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

const SourceContainer = ({ source }) => {
  const { id, url, title, description, imageUrl } = source;
  let image = new Image();
  image.src = imageUrl ? imageUrl : "https://via.placeholder.com/150";

  return (
    <Card className="mb-4">
      <div className="flex flex-row items-start gap-4">
        <img
          className="w-full max-w-[100px] h-full"
          src={image.src}
          alt={title}
        />
        <div className="flex-1 text-left flex flex-col gap-4">
          <h4 className="text-lg font-medium">{title}</h4>
          <p className="text-gray-500">{description}</p>
          <Button className="self-start">
            <FaExternalLinkAlt className="mr-2" />
            Visit
          </Button>
        </div>
        <IoClose className="text-2xl text-gray-500" />
      </div>
    </Card>
  );
};

export default SourceContainer;
