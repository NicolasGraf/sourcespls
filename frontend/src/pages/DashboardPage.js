import { useEffect, useState } from "react";
import { useAuth } from "../lib/authProvider";
import { getAllArguments } from "../lib/apiController";
import PersonalArgumentList from "../components/dashboard/PersonalArgumentList";
import PreviewSources from "../components/sources/PreviewSources";
import SeparatorResponsive from "../components/common/SeparatorResponsive";

const DashboardPage = () => {
  const { session } = useAuth();
  const [userArguments, setUserArguments] = useState([]);
  const [selectedArgument, setSelectedArgument] = useState(null);
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getArguments = async (session) => {
      const { data, error } = await getAllArguments(session);
      setLoading(false);
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
  };

  return (
    <main className="container mx-auto px-4 py-8 text-center dark:text-primary-light md:flex md:flex-row md:flex-wrap gap-4">
      <div className="flex-1 flex flex-col items-center gap-4">
        <h1 className="text-2xl">Saved Arguments</h1>
        <PersonalArgumentList
          loading={loading}
          userArguments={userArguments}
          selectedArgument={selectedArgument}
          onSelect={setSelectedArgument}
          setIsEditing={setIsEditing}
        />
      </div>
      <SeparatorResponsive />
      <div className="flex-1">
        {!loading && (
          <PreviewSources
            sources={sources}
            setSources={onSetSources}
            editable={isEditing}
          />
        )}
      </div>
    </main>
  );
};

export default DashboardPage;
