import { createContext, useContext, useState } from "react";

const MainPageContext = createContext(null);

export const MainPageProvider = ({ children }) => {
  const [sources, setSources] = useState([]);
  const [isLinkLoading, setIsLinkLoading] = useState(false);
  const [argumentTitle, setArgumentTitle] = useState("");
  const [createdLink, setCreatedLink] = useState(null);
  const [sourceInputValue, setSourceInputValue] = useState(null);
  const [quoteInputValue, setQuoteInputValue] = useState(null);
  const [isSourceLoading, setIsSourceLoading] = useState(false);
  const [hasSourceError, setHasSourceError] = useState(false);

  return (
    <MainPageContext.Provider
      value={{
        sources,
        setSources,
        isLinkLoading,
        setIsLinkLoading,
        argumentTitle,
        setArgumentTitle,
        createdLink,
        setCreatedLink,
        sourceInputValue,
        setSourceInputValue,
        quoteInputValue,
        setQuoteInputValue,
        isSourceLoading,
        setIsSourceLoading,
        hasSourceError,
        setHasSourceError,
      }}
    >
      {children}
    </MainPageContext.Provider>
  );
};

export const useMainPageContext = () => useContext(MainPageContext);
