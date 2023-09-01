import Canvas from "../Canvas/Canvas";
import TitleBar from "../TitleBar/TitleBar";

const CanvasPage = () => {
  return (
    <>
      <TitleBar canvasTitle="hello" />
      <Canvas />
    </>
  );
};

export default CanvasPage;
