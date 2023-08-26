import { useState } from "react";
import "./App.css";
import Canvas from "./Components/Canvas/Canvas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Canvas />
    </div>
  );
}

export default App;
