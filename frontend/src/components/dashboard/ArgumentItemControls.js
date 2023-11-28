import { Button } from "flowbite-react";
import ArgumentEditArea from "./ArgumentEditArea";
import { BiEdit } from "react-icons/bi";

const ArgumentItemControls = ({
  isEditing,
  setIsEditing,
  onSave,
  argumentId,
}) => {
  if (!isEditing)
    return (
      <Button className="self-start mt-4" onClick={() => setIsEditing(true)}>
        Edit
        <BiEdit className="ml-1 text-lg" />
      </Button>
    );

  return <ArgumentEditArea saveArgument={onSave} argumentId={argumentId} />;
};

export default ArgumentItemControls;
