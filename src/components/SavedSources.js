import SourceContainer from "./SourceContainer";

const SavedSources = ({ sources, setSources }) => {
  const noSources = sources.length === 0;

  const onDelete = (id) => {
    const newSources = sources.filter((source) => source.id !== id);
    setSources(newSources);
  };

  return (
    <div className="">
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
            editable={true}
          />
        ))}
    </div>
  );
};

export default SavedSources;
