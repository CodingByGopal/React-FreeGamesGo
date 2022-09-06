import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import LoadingBar from "react-top-loading-bar";
import DeveloperInfo from "./pages/DeveloperInfo";
import ErrorPage from "./pages/ErrorPage";
import GameList from "./pages/GameList";
import Home from "./pages/Home";
import SingleGame from "./pages/SingleGame";
import { useState } from "react";

const App = () => {
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <div className=" overflow-x-hidden overflow-hidden pb-10   bg-slate-900 text-gray-50  w-full min-h-screen  ">
        <LoadingBar
          height={4}
          color="#67e8f9"
          shadow={true}
          waitingTime={300}
          progress={progress}
          onLoaderFinished={() => setProgress(100)}
        />

        <ScrollToTop />
        <Navbar setProgress={setProgress} />

        <Routes>
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route
            path="/allgames"
            element={<GameList setProgress={setProgress} />}
          />
          <Route
            path="/game/:id"
            element={<SingleGame setProgress={setProgress} />}
          />
          <Route
            path="/developer"
            element={<DeveloperInfo setProgress={setProgress} />}
          />
          <Route path="*" element={<ErrorPage setProgress={setProgress} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
