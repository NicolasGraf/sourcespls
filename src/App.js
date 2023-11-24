import Header from "./components/Header";
import { MainContent } from "./components/MainContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArgumentPage from "./components/ArgumentPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/:slug" element={<ArgumentPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
