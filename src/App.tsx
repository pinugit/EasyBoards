import "./App.css";
import Canvas from "./Components/Canvas/Canvas";
import HomePage from "./Components/HomePage/HomePage";
import TitleBar from "./Components/TitleBar/TitleBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <TitleBar canvasTitle="First canvas" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/canvas" element={<Canvas />} />
        <Route path="/canvas/:id" element={<Canvas />} />
      </Routes>
    </>
  );
}

export default App;
