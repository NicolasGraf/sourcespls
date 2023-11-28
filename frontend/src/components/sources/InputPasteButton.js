const InputPasteButton = ({ inputRef }) => {
  const handlePaste = (e) => {
    e.preventDefault();
    navigator.clipboard.readText().then((text) => {
      inputRef.current.value = text;
    });
  };

  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={handlePaste}
      className="absolute z-10 active:translate-y-0.5 dark:bg-secondary-dark top-3 right-3 p-1 px-2 border border-primary-dark dark:border-secondary-light rounded-lg"
    >
      Paste
    </button>
  );
};

export default InputPasteButton;
