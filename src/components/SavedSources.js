import SourceContainer from "./SourceContainer";

const SavedSources = ({ sources, setSources }) => {
  const noSources = sources.length === 0;

  const onDelete = (id) => {
    const newSources = sources.filter((source) => source.id !== id);
    setSources(newSources);
  };

  return (
    <div className="">
      <h2 className="text-2xl mb-4">Sources</h2>
      {noSources && <p className="text-gray-500 mb-4">No sources added yet.</p>}
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
