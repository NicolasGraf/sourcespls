const SourceImage = ({ imageUrl, title }) => {
  if (!imageUrl) return null;

  return (
    <img className="w-full max-w-[180px] h-full" src={imageUrl} alt={title} />
  );
};

export default SourceImage;
