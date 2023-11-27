import { Button, Spinner } from "flowbite-react";

const ArgumentEditArea = ({ isLoading, saveArgument }) => {
  return (
    <div className="flex gap-2 items-end mt-4 justify-between">
      <Button onClick={saveArgument}>Save</Button>
      {isLoading && <Spinner />}
    </div>
  );
};

export default ArgumentEditArea;
