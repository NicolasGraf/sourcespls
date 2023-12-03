import { Button } from "flowbite-react";
import { AiOutlinePlus } from "react-icons/ai";

const StartAddingSources = ({ hasTitle, sourceInputValue, onStartAdding }) => {
  if (sourceInputValue !== null) return null;

  return (
    <>
      <Button className="mb-4" disabled={!hasTitle} onClick={onStartAdding}>
        Add Sources
        <AiOutlinePlus className="ml-2" />
      </Button>
    </>
  );
};

export default StartAddingSources;
