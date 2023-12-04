import ArgumentItem from "./ArgumentItem";
import LoadingArgument from "../arguments/LoadingArgument";
import { useAdminContext } from "../../lib/AdminContext";
import { useGetAllArguments } from "../../lib/apiHooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PersonalArgumentList = () => {
  const {
    userArguments,
    setUserArguments,
    selectedArgument,
    setSelectedArgument,
  } = useAdminContext();

  const { data, loading, error } = useGetAllArguments(true);

  useEffect(() => {
    if (!data) return;
    setUserArguments(data);
  }, [data]);

  if (loading) return <LoadingArgument />;

  return (
    <div className="flex flex-col w-full gap-4">
      {userArguments.length === 0 && (
        <>
          <p>No saved arguments</p>
          <Link to={`/`}>Create your first argument</Link>
        </>
      )}
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
