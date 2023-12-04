const SourcePageImages = ({ sources }) => {
  const seenSiteNames = new Set();
  const uniqueSources = sources.filter((source) => {
    if (seenSiteNames.has(source.siteName)) {
      return false;
    }
    seenSiteNames.add(source.siteName);
    return true;
  });

  return (
    <div className="flex gap-4 justify-center">
      {uniqueSources.map(({ icon, siteName }, index) => (
        <div
          key={index}
          className="shadow-md dark:bg-secondary-dark py-2 px-4 rounded-md flex items-center"
        >
          <img className="w-4 h-4 mr-2" src={icon} alt={"icon"} />
          <span>{siteName}</span>
        </div>
      ))}
    </div>
  );
};

export default SourcePageImages;
