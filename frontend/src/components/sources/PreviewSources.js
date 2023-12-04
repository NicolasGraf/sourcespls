import SourceContainer from "./SourceContainer";
import { useDeleteSourceById } from "../../lib/apiHooks";
import { useEffect } from "react";

const PreviewSources = ({ sources, onSetSources, editable }) => {
  const noSources = sources.length === 0;
  const { deleteSourceById, data, loading, idToDelete } = useDeleteSourceById();

  const onDelete = async (id) => {
    await deleteSourceById(id);
  };

  const isLoading = (id) => {
    return loading && idToDelete === id;
  };

  useEffect(() => {
    if (data) {
      const newSources = sources.filter((source) => source.id !== data.id);
      onSetSources(newSources);
    }
  }, [data]);

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
            loading={isLoading(source.id)}
          />
        ))}
    </div>
  );
};

export default PreviewSources;
