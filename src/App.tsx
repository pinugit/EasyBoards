import "./App.css";
import Canvas from "./Components/Canvas/Canvas";
import TitleBar from "./Components/TitleBar/TitleBar";

function App() {
  return (
    <>
      <TitleBar canvasTitle="First canvas" />
      <Canvas />
    </>
  );
}

export default App;
