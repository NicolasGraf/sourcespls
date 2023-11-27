import Header from "./components/common/Header";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArgumentPage from "./pages/ArgumentPage";
import { Flowbite } from "flowbite-react";
import customTheme from "./lib/theme";
import AppFooter from "./components/common/AppFooter";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./lib/authProvider";
import { MainPageProvider } from "./lib/mainPageContext";

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
              <Route
                path="/"
                element={
                  <MainPageProvider>
                    <MainPage />
                  </MainPageProvider>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <DashboardPage />
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
