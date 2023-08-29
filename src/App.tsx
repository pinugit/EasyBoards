import "./App.css";
import Canvas from "./Components/Canvas/Canvas";
import TopBar from "./Components/Topbar/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <div className="main-area">
        <Canvas />
      </div>
    </>
  );
}

export default App;
