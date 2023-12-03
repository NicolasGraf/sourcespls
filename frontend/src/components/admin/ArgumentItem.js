import { useEffect, useRef, useState } from "react";
import { Card } from "flowbite-react";
import ArgumentLink from "./ArgumentLink";
import ArgumentItemControls from "./ArgumentItemControls";
import ArgumentItemHeader from "./ArgumentItemHeader";
import { useUpdateArgument } from "../../lib/apiHooks";

const ArgumentItem = ({ argument, isActive, onSelect }) => {
  const { updateArgument, loading } = useUpdateArgument();
  const { slug } = argument;
  const fullUrl = `${window.location.origin}/${slug}`;

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

  const onSave = async () => {
    const sourceIds = argument.sources.map((source) => source.id);
    const argumentTitle = argument.title;

    await updateArgument({
      slug,
      argumentTitle,
      sourceIds,
    });
    setIsLocalEditing(false);
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
        <ArgumentItemHeader
          isEditing={isLocalEditing}
          argument={argument}
          argumentUrl={fullUrl}
        />
        <ArgumentLink url={fullUrl} />
        <ArgumentItemControls
          isEditing={isLocalEditing}
          setIsEditing={setIsLocalEditing}
          onSave={onSave}
          argumentId={argument.id}
          updateLoading={loading}
        />
      </Card>
    </div>
  );
};

export default ArgumentItem;
