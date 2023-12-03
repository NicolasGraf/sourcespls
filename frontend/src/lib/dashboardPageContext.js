import { createContext, useContext, useEffect, useState } from "react";

const DashBoardContext = createContext(null);

export const DashboardProvider = ({ children }) => {
  const [userArguments, setUserArguments] = useState([]);
  const [selectedArgument, setSelectedArgument] = useState(null);
  const [selectedSources, setSelectedSources] = useState([]);

  useEffect(() => {
    if (selectedArgument !== null) {
      setSelectedSources(userArguments[selectedArgument].sources);
    } else {
      if (userArguments.length > 0) {
        setSelectedArgument(0);
      }
    }
  }, [selectedArgument, userArguments]);

  const updateSources = (sources) => {
    const newArguments = [...userArguments];
    newArguments[selectedArgument].sources = sources;
    setUserArguments(newArguments);
    setSelectedSources(sources);
  };

  const onDeleteArgument = async (id) => {
    const newArguments = [...userArguments];
    const index = newArguments.findIndex((argument) => argument.id === id);
    newArguments.splice(index, 1);
    setUserArguments(newArguments);
    setSelectedArgument(0);
  };

  const onUpdateArgument = (argument) => {
    const updatedArguments = [...userArguments];
    updatedArguments[selectedArgument] = argument;
    setUserArguments(updatedArguments);
  };

  return (
    <DashBoardContext.Provider
      value={{
        selectedSources,
        userArguments,
        setUserArguments,
        selectedArgument,
        setSelectedArgument,
        updateSources,
        onDeleteArgument,
        onUpdateArgument,
      }}
    >
      {children}
    </DashBoardContext.Provider>
  );
};

export const useDashBoardContext = () => useContext(DashBoardContext);
