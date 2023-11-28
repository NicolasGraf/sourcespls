import { TextInput } from "flowbite-react";
import { useState } from "react";
import InputPasteButton from "./InputPasteButton";

const SourceFormUrlInput = ({ value, onChange }) => {
  const [showPasteButton, setShowPasteButton] = useState(false);

  return (
    <div className="relative">
      <TextInput
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
      {showPasteButton && <InputPasteButton onChange={onChange} />}
    </div>
  );
};

export default SourceFormUrlInput;
