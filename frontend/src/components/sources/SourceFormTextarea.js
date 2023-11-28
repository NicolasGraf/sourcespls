import { Textarea } from "flowbite-react";
import { useState } from "react";
import InputPasteButton from "./InputPasteButton";

const SourceFormTextarea = ({ value, onChange }) => {
  const [showPasteButton, setShowPasteButton] = useState(false);

  return (
    <div className="relative">
      <Textarea
        color="primary"
        value={value}
        className="w-full mb-4"
        placeholder="Add a quote from the source"
        rows={4}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => setShowPasteButton(true)}
        onBlur={() => setShowPasteButton(false)}
      />
      {showPasteButton && <InputPasteButton onChange={onChange} />}
    </div>
  );
};

export default SourceFormTextarea;
