import { Textarea } from "flowbite-react";
import { useRef, useState } from "react";
import InputPasteButton from "./InputPasteButton";

const SourceFormTextarea = ({ value, onChange }) => {
  const textAreaRef = useRef(null);
  const [showPasteButton, setShowPasteButton] = useState(false);

  return (
    <div className="relative">
      <Textarea
        color="primary"
        ref={textAreaRef}
        value={value}
        className="w-full mb-4"
        placeholder="Add a quote from the source"
        rows={4}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => setShowPasteButton(true)}
        onBlur={() => setShowPasteButton(false)}
      />
      {showPasteButton && <InputPasteButton inputRef={textAreaRef} />}
    </div>
  );
};

export default SourceFormTextarea;
