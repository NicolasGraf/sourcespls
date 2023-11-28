const SourceImage = ({ imageUrl, title }) => {
  if (!imageUrl) return null;

  return (
    <img className="w-full max-w-[100px] h-full" src={imageUrl} alt={title} />
  );
};

export default SourceImage;
