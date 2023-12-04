import { createContext, useContext, useState } from "react";

const HomePageContext = createContext(null);

export const HomePageProvider = ({ children }) => {
  const [sources, setSources] = useState([]);
  const [argumentTitle, setArgumentTitle] = useState("");
  const [sourceInputValue, setSourceInputValue] = useState(null);
  const [quoteInputValue, setQuoteInputValue] = useState(null);
  const [createdArgumentSlug, setCreatedArgumentSlug] = useState(null);

  return (
    <HomePageContext.Provider
      value={{
        sources,
        setSources,
        argumentTitle,
        setArgumentTitle,
        sourceInputValue,
        setSourceInputValue,
        quoteInputValue,
        setQuoteInputValue,
        createdArgumentSlug,
        setCreatedArgumentSlug,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageContext = () => useContext(HomePageContext);
