import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useRef } from "react";

const ArgumentItemHeader = ({ argument, isEditing, argumentUrl }) => {
  const titleRef = useRef();
  useEffect(() => {
    if (isEditing) {
      titleRef.current.focus();
    }
    titleRef.current.textContent = argument.title;
  }, [isEditing]);

  const onTitleInputChanged = (e) => {
    argument.title = e.target.innerText;
  };

  return (
    <div className="flex gap-4">
      <h5
        ref={titleRef}
        className="text-xl flex-1 focus:outline-accent focus:ring-0 focus:outline"
        contentEditable={isEditing}
        onInput={onTitleInputChanged}
      ></h5>
      <FaExternalLinkAlt
        onClick={() => window.open(argumentUrl, "_blank")}
        className="relative text-xl text-primary-dark dark:text-secondary-light cursor-pointer active:top-0.5"
      />
    </div>
  );
};

export default ArgumentItemHeader;
