const SourceImage = ({ imageUrl, title }) => {
  if (!imageUrl) return null;
  const image = new Image(imageUrl);

  return (
    <img className="w-full max-w-[100px] h-full" src={image.src} alt={title} />
  );
};

export default SourceImage;
