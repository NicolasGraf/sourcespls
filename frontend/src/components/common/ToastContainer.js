import React from "react";
import ToastComponent from "./AppToast";
import { useToast } from "../../lib/toastProvider";

const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className="flex flex-col pointer-events-none gap-2 fixed bottom-8 md:bottom-20 items-center left-0 right-0 z-20">
      {toasts.map(({ id, text, type }) => (
        <ToastComponent key={id} text={text} type={type} />
      ))}
    </div>
  );
};

export default ToastContainer;
