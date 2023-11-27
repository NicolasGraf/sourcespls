import ArgumentItem from "./ArgumentItem";
import LoadingArgument from "../arguments/LoadingArgument";

const PersonalArgumentList = ({
  userArguments,
  loading,
  selectedArgument,
  onSelect,
  setIsEditing,
}) => {
  if (loading) {
    return <LoadingArgument />;
  }

  return (
    <div className="flex flex-col w-full gap-4">
      {userArguments.length === 0 && <p>No saved arguments</p>}
      {userArguments.map((argument, index) => (
        <ArgumentItem
          key={argument.id}
          argument={argument}
          isActive={index === selectedArgument}
          onSelect={() => onSelect(index)}
          setIsEditing={setIsEditing}
        />
      ))}
    </div>
  );
};

export default PersonalArgumentList;
