import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { BiCopy } from "react-icons/bi";
import { useToast } from "../../lib/toastProvider";
import ResultLinkNotice from "./ResultLinkNotice";

const ResultLink = ({ createdLink }) => {
  const { showToast } = useToast();
  if (!createdLink) return null;

  const copyToClipboard = () => {
    showToast({ text: "Copied to clipboard", type: "success" });
    navigator.clipboard.writeText(createdLink);
  };

  return (
    <>
      <Card>
        <div className="flex items-center justify-center gap-4">
          <Link to={createdLink}>{createdLink}</Link>
          <BiCopy
            onClick={() => copyToClipboard()}
            className="relative text-2xl text-primary-dark dark:text-secondary-light cursor-pointer active:top-0.5"
          />
        </div>
        <ResultLinkNotice />
      </Card>
    </>
  );
};

export default ResultLink;
