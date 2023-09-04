import "./App.css";
import CanvasPage from "./Components/CanvasPage/CanvasPage";
import { Route, Routes } from "react-router-dom";
import { checkFolderExistence } from "./File IO functions/CheckForAppFolder";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    checkFolderExistence();
  });
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
