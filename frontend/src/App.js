import Header from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArgumentPage from "./pages/ArgumentPage";
import { Flowbite } from "flowbite-react";
import customTheme from "./lib/theme";
import AppFooter from "./components/AppFooter";
import LoginPage from "./pages/LoginPage";
import RedirectPage from "./pages/RedirectPage";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./lib/authProvider";

function App() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  return (
    <>
      <Flowbite theme={{ dark: prefersDarkMode, theme: customTheme }}>
        <Router>
          <AuthProvider>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/redirect" element={<RedirectPage />} />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <h1>Restricted Dashboard</h1>
                  </RequireAuth>
                }
              />
              <Route path="/:slug" element={<ArgumentPage />} />
            </Routes>
            <AppFooter />
          </AuthProvider>
        </Router>
      </Flowbite>
    </>
  );
}

export default App;
