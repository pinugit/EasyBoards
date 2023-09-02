import { ReactElement, useState } from "react";
import Boards from "../Boards/Boards";
import BoardAdder from "./BoardAdder";
import "./Canvas.css";
import React from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

interface Boards {
  id: string;
  content: ReactElement;
}

const Canvas = () => {
  const [theBoards, setTheBoards] = useState<Boards[]>([]);
  const [isBoardAdderVisible, setIsBoardAdderVisible] = useState(true);

  const handleBoardAdding = () => {
    setIsBoardAdderVisible(false);

    setTimeout(() => {
      setIsBoardAdderVisible(true);
    }, 50);
    const newBoardRef = React.createRef<HTMLDivElement>();

    setTheBoards((prev) => [
      ...prev,
      {
        id: `Board${theBoards.length}`,
        content: (
          <Boards key={theBoards.length} Boards={`Board${theBoards.length}`} />
        ),
      },
    ]);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    console.log(active.id, over?.id);

    if ((active.id, over?.id)) {
      setTheBoards((items) => {
        const activeIndex = items.findIndex((board) => board.id === active.id);
        const overIndex = items.findIndex((board) => board.id === over.id);

        if (activeIndex !== -1 && overIndex !== -1) {
          return arrayMove(items, activeIndex, overIndex);
        }

        return items;
      });
    }
  };

  return (
    <div id="Canvas">
      <div className="canvas-background"></div>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="content-container">
          <SortableContext
            items={theBoards}
            strategy={horizontalListSortingStrategy}
          >
            {theBoards.map((board) => board.content)}
          </SortableContext>

          {isBoardAdderVisible && (
            <BoardAdder onBoardAdding={() => handleBoardAdding()} />
          )}
        </div>
      </DndContext>
    </div>
  );
};

export default Canvas;
