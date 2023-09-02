import "./App.css";
import CanvasPage from "./Components/CanvasPage/CanvasPage";
import { Route, Routes } from "react-router-dom";

function App() {
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
