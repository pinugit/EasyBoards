import React, {
  ChangeEvent,
  useState,
  useEffect,
  useRef,
  ReactElement,
  RefObject,
} from "react";
import Cards from "../Cards/Cards";
import "./Boards.css";
import CardAdder from "./CardAdder";
import { PanInfo, motion } from "framer-motion";

interface props {
  boardRef: RefObject<HTMLDivElement>;
  isABoardDragging: (isDragging: boolean) => void;
  BoardsCoordinate: { xCenter: number }[];
}

const Boards = ({ boardRef, isABoardDragging, BoardsCoordinate }: props) => {
  const [isEditingHeading, setEditingHeading] = useState(true);
  const [headingValue, setHeadingValue] = useState("");
  const [cards, setCards] = useState<ReactElement[]>([]);
  const [isDragging, setDragging] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleHeadingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHeadingValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setEditingHeading(false);
    }
  };

  const handleSubmitWhenFocusLose = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setHeadingValue(event.target.value);
    setEditingHeading(false);
  };

  const handleAddingCard = () => {
    setCards((prev) => [...prev, <Cards key={Cards.length} />]);
  };

  const handleDraggingStart = () => {
    setDragging(true);
    isABoardDragging(true);
  };

  const handleDraggingEnd = () => {
    setDragging(false);
    isABoardDragging(false);
  };

  const handleDragSnapping = (info: PanInfo) => {
    const xPosition = info.point.x;
    if (BoardsCoordinate.length != 0) {
      // Check if the dragging card is to the left of the first card
      if (xPosition < BoardsCoordinate[0].xCenter) {
        console.log("Dragging card is to the left of the first card");
        return;
      }

      // Check if the dragging card is to the right of the last card
      if (xPosition > BoardsCoordinate[BoardsCoordinate.length - 1].xCenter) {
        console.log("Dragging card is to the right of the last card");
        return;
      }

      // Find the index of the card based on the xPosition
      const cardIndex = BoardsCoordinate.findIndex(
        (coordinate, index) =>
          xPosition >= coordinate.xCenter &&
          (index === BoardsCoordinate.length - 1 ||
            xPosition < BoardsCoordinate[index + 1].xCenter)
      );

      if (cardIndex !== -1) {
        console.log(
          "Dragging card is between cards:",
          cardIndex,
          "and",
          cardIndex + 1
        );
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.select();
    }
    if (headingValue === "") {
      setHeadingValue("untitled");
    }
  }, [isEditingHeading]);

  return (
    <>
      <motion.div
        layout
        initial={{ scaleY: "50%", opacity: "10%" }}
        animate={{ scaleY: "100%", opacity: "100%" }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className={`rows ${isDragging ? "dragging " : ""}`}
      >
        {isDragging ? <div id="rp" className="board-replacer"></div> : null}
        <motion.div
          ref={boardRef}
          drag
          whileDrag={{
            scale: 1.1,
            rotate: -10,
          }}
          onDrag={(event, info) => handleDragSnapping(info)}
          onDragStart={handleDraggingStart}
          onDragEnd={handleDraggingEnd}
          dragSnapToOrigin={true}
          dragTransition={{ bounceDamping: 40, bounceStiffness: 600 }}
          id="board"
          className="board"
        >
          <div className="heading-area">
            {isEditingHeading ? (
              <input
                className="input"
                ref={inputRef}
                value={headingValue}
                onChange={handleHeadingChange}
                onKeyDown={handleKeyPress}
                onBlur={handleSubmitWhenFocusLose}
              />
            ) : (
              <h1
                className="heading"
                onDoubleClick={() => {
                  setEditingHeading(true);
                }}
              >
                {headingValue}
              </h1>
            )}
          </div>
          <div className="card-area">{cards.map((card) => card)}</div>
          <CardAdder onAddingCard={handleAddingCard} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Boards;
