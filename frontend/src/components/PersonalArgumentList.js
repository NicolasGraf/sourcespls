import { Spinner } from "flowbite-react";
import ArgumentItem from "./ArgumentItem";

const PersonalArgumentList = ({
  userArguments,
  loading,
  selectedArgument,
  onSelect,
}) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col w-full gap-4">
      {userArguments.map((argument, index) => (
        <ArgumentItem
          key={argument.id}
          argument={argument}
          isActive={index === selectedArgument}
          onSelect={() => onSelect(index)}
        />
      ))}
    </div>
  );
};

export default PersonalArgumentList;
