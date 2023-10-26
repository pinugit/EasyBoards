import "./App.css";
import CanvasPage from "./Components/CanvasPage/CanvasPage";
import { Route, Routes } from "react-router-dom";
import { checkFolderExistence } from "./Services/CheckForAppFolder";
import { useEffect } from "react";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  useEffect(() => {
    checkFolderExistence();
  }, []);

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<CanvasPage />} />
        <Route path="canvas/:name/" element={<CanvasPage />} />
      </Routes>
    </>
  );
}

export default App;
