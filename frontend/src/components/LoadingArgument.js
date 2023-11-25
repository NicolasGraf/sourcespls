import { Spinner } from "flowbite-react";

const LoadingArgument = () => {
  return (
    <div className="py-12 px-4 flex justify-center">
      <Spinner className="text-4xl text-gray-500 inline-block" />
    </div>
  );
};

export default LoadingArgument;
