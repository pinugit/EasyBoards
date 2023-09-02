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
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { useSensor, PointerSensor } from "@dnd-kit/core";

const delayConstraint = {
  delay: 500, // Adjust the delay value as needed (e.g., 500ms)
  tolerance: 5, // Adjust the tolerance value as needed (e.g., 5 pixels)
};

interface cardsInterface {
  id: string;
  content: ReactElement;
}
interface props {
  Boards: string;
}
const Boards = ({ Boards }: props) => {
  const [isEditingHeading, setEditingHeading] = useState(true);
  const [headingValue, setHeadingValue] = useState("");
  const [cards, setCards] = useState<cardsInterface[]>([]);
  const [isDragging, setDragging] = useState(false);

  const { attributes, listeners, setNodeRef } = useSortable({
    id: Boards,
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const sensor = useSensor(PointerSensor, {
    activationConstraint: delayConstraint,
  });

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
    setCards((prev) => [
      ...prev,
      { id: `card-${cards.length}`, content: <Cards key={Cards.length} /> },
    ]);
    console.log("card added ");
    console.log(Cards);
  };

  const handleDraggingStart = () => {
    setDragging(true);
  };

  const handleDraggingEnd = () => {
    setDragging(false);
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
          ref={setNodeRef}
          {...attributes}
          {...listeners}
          sensors
          drag
          whileDrag={{
            scale: 1.1,
            rotate: -10,
          }}
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
          <SortableContext items={cards}>
            <div className="card-area">{cards.map((card) => card.content)}</div>
            <CardAdder onAddingCard={handleAddingCard} />
          </SortableContext>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Boards;
