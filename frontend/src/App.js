import Header from "./components/common/Header";
import { HomePage } from "./pages/HomePage";
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
import { HomePageProvider } from "./lib/HomePageContext";
import { AdminProvider } from "./lib/AdminContext";
import { ToastProvider } from "./lib/toastProvider";
import ToastPortal from "./components/common/ToastPortal";
import SavedArgsPage from "./pages/admin/SavedArgsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (window.location.hostname === "localhost") {
    window.localStorage.setItem("umami.disabled", "true");
  }

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
                    <HomePageProvider>
                      <HomePage />
                    </HomePageProvider>
                  }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route
                  path="/admin"
                  element={
                    <RequireAuth>
                      <AdminProvider>
                        <AdminPage />
                      </AdminProvider>
                    </RequireAuth>
                  }
                >
                  <Route index element={<Navigate to={"saved-arguments"} />} />
                  <Route path="saved-arguments" element={<SavedArgsPage />} />
                </Route>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
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
