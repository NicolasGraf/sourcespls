import React, { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = ({ text, type, duration = 2500 }) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((currentToasts) => [
      ...currentToasts,
      { id, text, type, duration },
    ]);

    setTimeout(() => {
      console.log("removing toast");
      setToasts((currentToasts) =>
        currentToasts.filter((toast) => toast.id !== id),
      );
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};
