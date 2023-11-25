import Header from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArgumentPage from "./pages/ArgumentPage";
import { Flowbite } from "flowbite-react";
import customTheme from "./lib/theme";
import AppFooter from "./components/AppFooter";

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
            <Route path="/" element={<MainPage />} />
            <Route path="/:slug" element={<ArgumentPage />} />
          </Routes>
          <AppFooter />
        </Router>
      </Flowbite>
    </>
  );
}

export default App;
