import ArgumentItem from "./ArgumentItem";
import LoadingArgument from "../arguments/LoadingArgument";
import { useDashBoardContext } from "../../lib/dashboardPageContext";
import { useGetAllArguments } from "../../lib/apiHooks";
import { useEffect } from "react";

const PersonalArgumentList = () => {
  const {
    userArguments,
    setUserArguments,
    selectedArgument,
    setSelectedArgument,
  } = useDashBoardContext();
  const { data, loading, error } = useGetAllArguments();

  useEffect(() => {
    if (data) {
      setUserArguments(data);
    }
  }, [data]);

  if (loading) return <LoadingArgument />;

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
