import SourceContainer from "./SourceContainer";
import { useAuth } from "../../lib/authProvider";
import { useDeleteSourceById } from "../../lib/apiHooks";

const PreviewSources = ({ sources, onSetSources, editable }) => {
  const noSources = sources.length === 0;
  const { session } = useAuth();
  const { deleteSourceById } = useDeleteSourceById();

  const onDelete = async (id) => {
    await deleteSourceById(id, session);
    const newSources = sources.filter((source) => source.id !== id);
    onSetSources(newSources);
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
