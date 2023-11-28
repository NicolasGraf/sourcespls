import { TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import InputPasteButton from "./InputPasteButton";

const SourceFormUrlInput = ({ value, onChange }) => {
  const textInputRef = useRef(null);
  const [showPasteButton, setShowPasteButton] = useState(false);

  return (
    <div className="relative">
      <TextInput
        ref={textInputRef}
        type="url"
        sizing="lg"
        color="primary"
        required
        placeholder={`Enter URL`}
        className="w-full mb-4 relative"
        value={value}
        onFocus={() => setShowPasteButton(true)}
        onBlur={() => setShowPasteButton(false)}
        onChange={(event) => onChange(event.target.value)}
      />
      {showPasteButton && <InputPasteButton inputRef={textInputRef} />}
    </div>
  );
};

export default SourceFormUrlInput;
