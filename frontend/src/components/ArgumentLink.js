import { BiCopy } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";

const ArgumentLink = ({ url }) => {
  const onVisit = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex gap-2">
      <p className="font-bold">{url}</p>
      <BiCopy
        onClick={null}
        className="relative text-2xl text-primary-dark dark:text-secondary-light cursor-pointer active:top-0.5"
      />
      <FaExternalLinkAlt
        onClick={onVisit}
        className="relative text-xl text-primary-dark dark:text-secondary-light cursor-pointer active:top-0.5"
      />
    </div>
  );
};

export default ArgumentLink;
