import Header from "./components/common/Header";
import { MainPage } from "./pages/MainPage";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ArgumentPage from "./pages/ArgumentPage";
import { Flowbite } from "flowbite-react";
import customTheme from "./lib/theme";
import AppFooter from "./components/common/AppFooter";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import RequireAuth from "./components/common/RequireAuth";
import { AuthProvider } from "./lib/authProvider";
import { MainPageProvider } from "./lib/mainPageContext";
import { DashboardProvider } from "./lib/dashboardPageContext";
import { ToastProvider } from "./lib/toastProvider";
import ToastPortal from "./components/common/ToastPortal";
import SavedArgsPage from "./pages/admin/SavedArgsPage";

function App() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  return (
    <>
      <Flowbite theme={{ dark: prefersDarkMode, theme: customTheme }}>
        <Router>
          <AuthProvider>
            <ToastProvider>
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
                  path="/admin"
                  element={
                    <RequireAuth>
                      <DashboardProvider>
                        <AdminPage />
                      </DashboardProvider>
                    </RequireAuth>
                  }
                >
                  <Route index element={<Navigate to={"saved-arguments"} />} />
                  <Route path="saved-arguments" element={<SavedArgsPage />} />
                </Route>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/:slug" element={<ArgumentPage />} />
              </Routes>
              <AppFooter />
              <ToastPortal />
            </ToastProvider>
          </AuthProvider>
        </Router>
      </Flowbite>
    </>
  );
}

export default App;
