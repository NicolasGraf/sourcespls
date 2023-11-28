import { createContext, useContext, useEffect, useState } from "react";
import { deleteArgumentById, getAllArguments } from "./apiController";
import { useAuth } from "./authProvider";

const DashBoardContext = createContext(null);

export const DashboardProvider = ({ children }) => {
  const [userArguments, setUserArguments] = useState([]);
  const [selectedArgument, setSelectedArgument] = useState(null);
  const [sources, setSources] = useState([]);
  const [argumentsLoading, setArgumentsLoading] = useState(true);
  const [editLoading, setEditLoading] = useState(false);

  const { session } = useAuth();

  useEffect(() => {
    const getArguments = async (session) => {
      const { data, error } = await getAllArguments(session);
      setArgumentsLoading(false);
      if (error) {
        console.error(error);
        return;
      }
      setUserArguments(data);
      setSelectedArgument(0);
    };
    getArguments(session);
  }, [session]);

  useEffect(() => {
    if (userArguments.length === 0) return;
    setSources(userArguments[selectedArgument].sources);
  }, [userArguments, selectedArgument]);

  const onSetSources = (sources) => {
    const newArguments = [...userArguments];
    newArguments[selectedArgument].sources = sources;
    setUserArguments(newArguments);
    setSources(sources);
  };

  const onDeleteArgument = async (id) => {
    setEditLoading(true);
    const { error } = await deleteArgumentById(id, session);
    setEditLoading(false);
    if (error) {
      console.error(error);
      return;
    }

    const newArguments = [...userArguments];
    const index = newArguments.findIndex((argument) => argument.id === id);
    newArguments.splice(index, 1);
    setUserArguments(newArguments);
    setSelectedArgument(0);
  };

  return (
    <DashBoardContext.Provider
      value={{
        sources,
        userArguments,
        setUserArguments,
        selectedArgument,
        setSelectedArgument,
        argumentsLoading,
        setArgumentsLoading,
        editLoading,
        setEditLoading,
        onSetSources,
        onDeleteArgument,
      }}
    >
      {children}
    </DashBoardContext.Provider>
  );
};

export const useDashBoardContext = () => useContext(DashBoardContext);
