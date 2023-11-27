import { useEffect, useState } from "react";
import { useAuth } from "../lib/authProvider";
import { getAllArguments } from "../lib/apiController";
import PersonalArgumentList from "../components/PersonalArgumentList";
import SavedSources from "../components/SavedSources";

const DashboardPage = () => {
  const { session } = useAuth();
  const [userArguments, setUserArguments] = useState([]);
  const [selectedArgument, setSelectedArgument] = useState(null);
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArguments = async (session) => {
      const data = await getAllArguments(session);
      setUserArguments(data);
      setSelectedArgument(0);
      setLoading(false);
    };
    getArguments(session);
  }, []);

  useEffect(() => {
    if (userArguments.length === 0) return;
    setSources(userArguments[selectedArgument].sources);
  }, [selectedArgument]);

  return (
    <main className="container mx-auto px-4 py-8 text-center dark:text-primary-light md:flex md:flex-row md:flex-wrap gap-4">
      <div className="flex-1 flex flex-col items-center gap-4">
        <h1 className="text-2xl">Saved Arguments</h1>
        <PersonalArgumentList
          loading={loading}
          userArguments={userArguments}
          selectedArgument={selectedArgument}
          onSelect={setSelectedArgument}
        />
      </div>
      <div className="flex-1">
        {!loading && <SavedSources sources={sources} setSources={setSources} />}
      </div>
    </main>
  );
};

export default DashboardPage;
