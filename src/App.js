import Header from "./components/Header";
import { MainContent } from "./components/MainContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArgumentPage from "./components/ArgumentPage";
import { Flowbite } from "flowbite-react";

const customTheme = {
  button: {
    base: "group flex items-stretch items-center justify-center p-1 text-center font-medium relative focus:z-10 focus:outline-none",
    color: {
      info: "bg-accent hover:brightness-90 dark:focus:ring-secondary-dark",
    },
  },
  navbar: {
    root: {
      base: "bg-primary-light px-2 py-2.5 dark:border-gray-700 dark:bg-secondary-dark sm:px-4",
    },
  },
  card: {
    root: {
      base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-border-dark dark:bg-secondary-dark",
    },
  },
  spinner: {
    color: {
      info: "fill-accent",
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          primary:
            "bg-gray-50 border-gray-300 text-gray-900 focus:border-accent focus:ring-accent dark:border-primary-dark dark:bg-secondary-dark dark:text-white dark:placeholder-gray-400 dark:focus:border-accent dark:focus:ring-accent",
        },
      },
    },
  },
};

function App() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  return (
    <>
      <Flowbite theme={{ dark: prefersDarkMode, theme: customTheme }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/:slug" element={<ArgumentPage />} />
          </Routes>
        </Router>
      </Flowbite>
    </>
  );
}

export default App;
