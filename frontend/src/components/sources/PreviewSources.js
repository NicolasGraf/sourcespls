import SourceContainer from "./SourceContainer";
import { deleteSourceById } from "../../lib/apiController";
import { useAuth } from "../../lib/authProvider";

const PreviewSources = ({ sources, setSources, editable }) => {
  const noSources = sources.length === 0;
  const { session } = useAuth();

  const onDelete = async (id) => {
    const { error } = await deleteSourceById(id, session);
    if (error) {
      console.error(error);
      return;
    }

    const newSources = sources.filter((source) => source.id !== id);
    setSources(newSources);
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Preview</h2>
      {noSources && (
        <p className="mb-4 text-secondary-light brightness-50">
          No sources added yet.
        </p>
      )}
      {!noSources &&
        sources.map((source) => (
          <SourceContainer
            key={source.id}
            source={source}
            onDelete={() => onDelete(source.id)}
            editable={editable}
          />
        ))}
    </div>
  );
};

export default PreviewSources;
