import { Button } from "flowbite-react";
import ArgumentEditArea from "./ArgumentEditArea";
import { BiEdit } from "react-icons/bi";

const ArgumentItemControls = ({
  isEditing,
  setIsEditing,
  onSave,
  argumentId,
  updateLoading,
}) => {
  if (!isEditing)
    return (
      <Button className="self-start" onClick={() => setIsEditing(true)}>
        Edit
        <BiEdit className="ml-1 text-lg" />
      </Button>
    );

  return (
    <ArgumentEditArea
      saveArgument={onSave}
      argumentId={argumentId}
      updateLoading={updateLoading}
    />
  );
};

export default ArgumentItemControls;
