import { Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import { HiExclamationTriangle } from "react-icons/hi2";

const AppToast = ({ text, type }) => {
  const getIconForType = (type) => {
    switch (type) {
      case "success":
        return <HiCheck className="h-5 w-5 text-green-700" />;
      case "failure":
        return <HiExclamationTriangle className="h-5 w-5 text-red-700" />;
      default:
        return <HiCheck className="h-5 w-5 text-green-700" />;
    }
  };

  return (
    <div className="pointer-events-auto">
      <Toast>
        {getIconForType(type)}
        <div className="ml-3 text-sm font-normal">{text}</div>
        <Toast.Toggle />
      </Toast>
    </div>
  );
};

export default AppToast;
