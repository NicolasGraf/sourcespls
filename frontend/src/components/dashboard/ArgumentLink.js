import { BiCopy } from "react-icons/bi";
import { useToast } from "../../lib/toastProvider";

const ArgumentLink = ({ url }) => {
  const { showToast } = useToast();
  const onCopy = async () => {
    await navigator.clipboard.writeText(url);
    showToast({ text: "Copied to clipboard." });
  };

  return (
    <div className="flex gap-4">
      <p>{url}</p>
      <BiCopy
        onClick={onCopy}
        className="relative text-2xl text-primary-dark dark:text-secondary-light cursor-pointer active:top-0.5"
      />
    </div>
  );
};

export default ArgumentLink;
