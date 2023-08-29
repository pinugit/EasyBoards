import { ReactElement, useState } from "react";
import Boards from "../Boards/Boards";
import BoardAdder from "./BoardAdder";
import "./Canvas.css";

const Canvas = () => {
  const [boards, setBoards] = useState<ReactElement[]>([]);
  const [isBoardAdderVisible, setIsBoardAdderVisible] = useState(true);

  const handleBoardAdding = () => {
    setIsBoardAdderVisible(false);

    setTimeout(() => {
      setIsBoardAdderVisible(true);
    }, 50);
    setBoards((prev) => [...prev, <Boards key={boards.length} />]);
  };

  return (
    <div id="Canvas">
      <div className="canvas-background"></div>
      <div className="content-container">
        {boards.map((board) => board)}
        {isBoardAdderVisible && (
          <BoardAdder onBoardAdding={() => handleBoardAdding()} />
        )}
      </div>
    </div>
  );
};

export default Canvas;
