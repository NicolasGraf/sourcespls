import { useEffect, useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import ArgumentEditArea from "./ArgumentEditArea";
import { BiCopy } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useAuth } from "../lib/authProvider";
import { updateArgument } from "../lib/apiController";

const ArgumentItem = ({ argument, isActive, onSelect }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { session } = useAuth();
  const { title, slug } = argument;
  const fullUrl = `${window.location.origin}/${slug}`;
  const titleRef = useRef();

  const onEdit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (isEditing) {
      titleRef.current.focus();
    }
    titleRef.current.textContent = title;
  }, [isEditing]);

  const onSave = async () => {
    const sourceIds = argument.sources.map((source) => source.id);
    const argumentTitle = titleRef.current.innerText;

    setIsLoading(true);

    const data = await updateArgument({
      slug,
      argumentTitle: argumentTitle,
      sourceIds,
      session,
    });

    console.log(data);
    setIsLoading(false);
    setIsEditing(false);
  };

  const onVisit = () => {
    window.open(fullUrl, "_blank");
  };

  return (
    <div
      className={`${
        isActive ? "border-accent" : "border-secondary-light"
      } p-4 shadow-md relative group text-left w-full rounded-md border dark:bg-secondary-dark`}
      onClick={onSelect}
    >
      <h5
        ref={titleRef}
        className="text-xl mb-4"
        contentEditable={isEditing}
        onInput={(e) => {
          argument.title = e.target.innerText;
        }}
      ></h5>
      <div className="flex gap-2">
        <p className="font-bold">{fullUrl}</p>
        <BiCopy
          onClick={null}
          className="relative text-2xl text-primary-dark dark:text-secondary-light cursor-pointer active:top-0.5"
        />
        <FaExternalLinkAlt
          onClick={onVisit}
          className="relative text-xl text-primary-dark dark:text-secondary-light cursor-pointer active:top-0.5"
        />
      </div>

      {!isEditing && (
        <AiFillEdit
          onClick={() => onEdit()}
          className="hidden absolute top-4 right-4 group-hover:block cursor-pointer"
        />
      )}

      {isEditing && (
        <ArgumentEditArea isLoading={isLoading} saveArgument={onSave} />
      )}
    </div>
  );
};

export default ArgumentItem;
