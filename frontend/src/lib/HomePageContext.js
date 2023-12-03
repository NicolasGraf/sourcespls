import { createContext, useContext, useState } from "react";

const HomePageContext = createContext(null);

export const HomePageProvider = ({ children }) => {
  const [sources, setSources] = useState([]);
  const [isLinkLoading, setIsLinkLoading] = useState(false);
  const [argumentTitle, setArgumentTitle] = useState("");
  const [sourceInputValue, setSourceInputValue] = useState(null);
  const [quoteInputValue, setQuoteInputValue] = useState(null);
  const [isSourceLoading, setIsSourceLoading] = useState(false);
  const [hasSourceError, setHasSourceError] = useState(false);
  const [createdArgumentSlug, setCreatedArgumentSlug] = useState(null);

  return (
    <HomePageContext.Provider
      value={{
        sources,
        setSources,
        isLinkLoading,
        setIsLinkLoading,
        argumentTitle,
        setArgumentTitle,
        sourceInputValue,
        setSourceInputValue,
        quoteInputValue,
        setQuoteInputValue,
        isSourceLoading,
        setIsSourceLoading,
        hasSourceError,
        setHasSourceError,
        createdArgumentSlug,
        setCreatedArgumentSlug,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageContext = () => useContext(HomePageContext);
