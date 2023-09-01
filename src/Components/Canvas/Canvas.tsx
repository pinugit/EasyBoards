import { ReactElement, RefObject, useEffect, useState } from "react";
import Boards from "../Boards/Boards";
import BoardAdder from "./BoardAdder";
import "./Canvas.css";
import React from "react";
import { useParams } from "react-router-dom";

const Canvas = () => {
  const [boards, setBoards] = useState<ReactElement[]>([]);
  const [isBoardAdderVisible, setIsBoardAdderVisible] = useState(true);
  const [isBoardDragging, setisBoardDragging] = useState(false);
  const [boardCoordinates, setBoardCoordinates] = useState<
    {
      xCenter: number;
    }[]
  >([]);
  const [boardRefs, setBoardRefs] = useState<RefObject<HTMLDivElement>[]>([]);

  const { d } = useParams();
  console.log("from canvas", d);

  const handleBoardAdding = () => {
    setIsBoardAdderVisible(false);

    setTimeout(() => {
      setIsBoardAdderVisible(true);
    }, 50);
    const newBoardRef = React.createRef<HTMLDivElement>();

    setBoards((prev) => [
      ...prev,
      <Boards
        key={boards.length}
        boardRef={newBoardRef}
        BoardsCoordinate={boardCoordinates}
        isABoardDragging={(isDragging) => {
          setisBoardDragging(isDragging);
        }}
      />,
    ]);

    // Add the new ref to the boardRefs array
    setBoardRefs((prev) => [...prev, newBoardRef]);
  };

  useEffect(() => {
    const newBoardCoordinates = boardRefs.map((boardRef) => {
      if (boardRef.current) {
        const rect = boardRef.current.getBoundingClientRect();
        return {
          xCenter: rect.left + rect.width / 2,
        };
      }
      return {
        xCenter: 0,
      };
    });
    if (isBoardDragging) {
      setBoardCoordinates(newBoardCoordinates);
      console.log(newBoardCoordinates);
    }
  }, [isBoardDragging]);

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
