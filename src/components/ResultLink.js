import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiFillCopy } from "react-icons/ai";

const ResultLink = ({ createdLink }) => {
  if (!createdLink) return null;
  return (
    <Card>
      <div className="flex items-center justify-center gap-4">
        <Link to={createdLink}>{createdLink}</Link>
        <AiFillCopy className="text-2xl text-gray-500 cursor-pointer" />
      </div>
    </Card>
  );
};

export default ResultLink;
