import React, {
  ChangeEvent,
  useState,
  useEffect,
  useRef,
  ReactElement,
} from "react";
import Cards from "../Cards/Cards";
import "./Boards.css";
import CardAdder from "./CardAdder";
import { motion } from "framer-motion";

const Boards = () => {
  const [isEditingHeading, setEditingHeading] = useState(true);
  const [headingValue, setHeadingValue] = useState("");
  const [cards, setCards] = useState<ReactElement[]>([]);
  const [isDragging, setDragging] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isDragging) {
      const boardElement = document.getElementById("board");
      const replacerBoard = document.getElementById("rp");

      if (boardElement && replacerBoard) {
        const boardRect = boardElement.getBoundingClientRect();

        replacerBoard.style.position = "absolute";
        replacerBoard.style.height = `${boardRect.height}px`;
      }
    }
  }, [isDragging]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.select();
    }
    if (headingValue === "") {
      setHeadingValue("untitled");
    }
  }, [isEditingHeading]);

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

  return (
    <>
      {isDragging ? <div id="rp" className="board-replacer"></div> : null}
      <motion.div
        drag
        whileDrag={{
          scale: 1.1,
          rotate: -10,
        }}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
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
    </>
  );
};

export default Boards;
