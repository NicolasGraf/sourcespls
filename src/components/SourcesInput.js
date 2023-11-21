import { useState } from "react";
import { Button, TextInput } from "flowbite-react";

const SourcesInput = () => {
  const [sourceInputs, setSourceInputs] = useState([""]);

  const handleInputChange = (e, index) => {
    const newInputs = [...sourceInputs];
    newInputs[index] = e.target.value;
    setSourceInputs(newInputs);
  };

  const addInput = () => {
    setSourceInputs([...sourceInputs, ""]);
  };

  return (
    <form>
      {sourceInputs.map((sourceInput, index) => (
        <TextInput
          type="url"
          required
          key={index}
          placeholder={`Source ${index + 1}`}
          className="mb-4"
          onChange={(event) => handleInputChange(event, index)}
        />
      ))}
      <Button className="mb-4" onClick={addInput}>
        Add Source
      </Button>
      <Button type={"submit"}>Submit</Button>
    </form>
  );
};

export default SourcesInput;
