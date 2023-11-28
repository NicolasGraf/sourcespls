import { BiCopy } from "react-icons/bi";

const ArgumentLink = ({ url }) => {
  const onVisit = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex gap-4">
      <p className="font-bold">{url}</p>
      <BiCopy
        onClick={null}
        className="relative text-2xl text-primary-dark dark:text-secondary-light cursor-pointer active:top-0.5"
      />
    </div>
  );
};

export default ArgumentLink;
