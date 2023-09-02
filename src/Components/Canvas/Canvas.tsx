import { ReactElement, useState } from "react";
import Boards from "../Boards/Boards";
import BoardAdder from "./BoardAdder";
import "./Canvas.css";
import React from "react";
import { useParams } from "react-router-dom";

const Canvas = () => {
  const [boards, setBoards] = useState<ReactElement[]>([]);
  const [isBoardAdderVisible, setIsBoardAdderVisible] = useState(true);

  const handleBoardAdding = () => {
    setIsBoardAdderVisible(false);

    setTimeout(() => {
      setIsBoardAdderVisible(true);
    }, 50);
    const newBoardRef = React.createRef<HTMLDivElement>();

    setBoards((prev) => [
      ...prev,
      <Boards key={boards.length} boardRef={newBoardRef} />,
    ]);
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
