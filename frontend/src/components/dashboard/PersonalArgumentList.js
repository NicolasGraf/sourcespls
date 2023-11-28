import ArgumentItem from "./ArgumentItem";
import LoadingArgument from "../arguments/LoadingArgument";
import { useDashBoardContext } from "../../lib/dashboardPageContext";

const PersonalArgumentList = () => {
  const {
    argumentsLoading,
    userArguments,
    selectedArgument,
    setSelectedArgument,
  } = useDashBoardContext();
  if (argumentsLoading) return <LoadingArgument />;

  return (
    <div className="flex flex-col w-full gap-4">
      {userArguments.length === 0 && <p>No saved arguments</p>}
      {userArguments.map((argument, index) => (
        <ArgumentItem
          key={argument.id}
          argument={argument}
          isActive={index === selectedArgument}
          onSelect={() => setSelectedArgument(index)}
        />
      ))}
    </div>
  );
};

export default PersonalArgumentList;
