import { ReactElement, useState } from "react";
import Boards from "../Boards/Boards";
import BoardAdder from "./BoardAdder";
import "./Canvas.css";
const Canvas = () => {
  const [boards, setBoards] = useState<ReactElement[]>([]);

  const handleBoardAdding = () => {
    setBoards((prev) => [...prev, <Boards key={boards.length} />]);
  };

  return (
    <div id="Canvas">
      <div className="rows">{boards.map((board) => board)}</div>
      <BoardAdder onBoardAdding={() => handleBoardAdding()} />
    </div>
  );
};

export default Canvas;
