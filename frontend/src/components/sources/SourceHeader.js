const SourceHeader = ({ source }) => {
  const { title, description, siteName, icon } = source;
  const shortenDescription = (description) => {
    let maxDescriptionLength = 100;
    if (window.innerWidth > 768) maxDescriptionLength = 200;
    if (description.length > maxDescriptionLength) {
      return description.slice(0, maxDescriptionLength) + "...";
    }
    return description;
  };

  return (
    <>
      <h4 className="flex items-center">
        <img className="w-4 h-4 mr-2" src={icon} alt={"icon"} />
        <span>{siteName}</span>
      </h4>
      <h3 className="text-2xl mt-4 mb-2 font-bold">{title}</h3>
      {description && (
        <p className="text-primary-dark dark:text-secondary-light">
          {shortenDescription(description)}
        </p>
      )}
    </>
  );
};

export default SourceHeader;
