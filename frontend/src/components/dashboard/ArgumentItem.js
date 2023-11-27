import { useEffect, useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import ArgumentEditArea from "./ArgumentEditArea";
import { useAuth } from "../../lib/authProvider";
import { updateArgument } from "../../lib/apiController";
import { Card, Spinner } from "flowbite-react";
import ArgumentLink from "./ArgumentLink";

const ArgumentItem = ({ argument, isActive, onSelect }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { session } = useAuth();
  const { title, slug } = argument;
  const fullUrl = `${window.location.origin}/${slug}`;
  const titleRef = useRef();
  const [isLocalEditing, setIsLocalEditing] = useState(false);
  const controlRef = useRef();

  const handleClickOutside = (event) => {
    if (!controlRef.current) return;
    if (controlRef.current.contains(event.target)) return;

    setIsLocalEditing(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  useEffect(() => {
    if (isLocalEditing) {
      titleRef.current.focus();
    }
    titleRef.current.textContent = title;
  }, [isLocalEditing]);

  const onSave = async () => {
    const sourceIds = argument.sources.map((source) => source.id);
    const argumentTitle = titleRef.current.innerText;

    setIsLoading(true);

    const { data } = await updateArgument({
      slug,
      argumentTitle,
      sourceIds,
      session,
    });

    setIsLoading(false);
    setIsLocalEditing(false);
  };

  const onTitleInputChanged = (e) => {
    argument.title = e.target.innerText;
  };

  return (
    <div ref={controlRef}>
      <Card
        className={`text-left group relative ${
          isActive
            ? "border-accent dark:border-accent"
            : "border-secondary-light "
        }`}
        onClick={onSelect}
      >
        <h5
          ref={titleRef}
          className="text-xl mb-4"
          contentEditable={isLocalEditing}
          onInput={onTitleInputChanged}
        ></h5>
        <ArgumentLink url={fullUrl} />
        {!isLocalEditing && (
          <AiFillEdit
            onClick={() => setIsLocalEditing(true)}
            className="hidden absolute top-4 right-4 group-hover:block cursor-pointer"
          />
        )}
        {isLocalEditing && <ArgumentEditArea saveArgument={onSave} />}
        {isLoading && (
          <span className="absolute">
            <Spinner />
          </span>
        )}
      </Card>
    </div>
  );
};

export default ArgumentItem;
