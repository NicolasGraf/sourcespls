import SourceContainer from "./SourceContainer";

const SavedSources = ({ sources }) => {
  const noSources = sources.length === 0;
  return (
    <div className="">
      <h2 className="text-2xl mb-4">Sources</h2>
      {noSources && <p className="text-gray-500">No sources added yet.</p>}
      {!noSources &&
        sources.map((source) => (
          <SourceContainer key={source.id} source={source} />
        ))}
    </div>
  );
};

export default SavedSources;
