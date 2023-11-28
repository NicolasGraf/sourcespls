import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ToastContainer from "./ToastContainer";

const ToastPortal = () => {
  const [isPortalReady, setPortalReady] = useState(false);

  useEffect(() => {
    let portalRoot = document.getElementById("toast-root");
    if (!portalRoot) {
      portalRoot = document.createElement("div");
      portalRoot.id = "toast-root";
      document.body.appendChild(portalRoot);
    }

    setPortalReady(true);
    return () => {
      if (portalRoot.parentNode) {
        portalRoot.parentNode.removeChild(portalRoot);
      }
    };
  }, []);

  if (!isPortalReady) {
    return null;
  }

  return ReactDOM.createPortal(
    <ToastContainer />,
    document.getElementById("toast-root"),
  );
};

export default ToastPortal;
