import { ChangeEvent, useState, useEffect, useRef } from "react";
import Cards from "../Cards/Cards";
import "./Boards.css";

const Boards = () => {
  const [isEditingHeading, setEditingHeading] = useState(true);
  const [headingValue, setHeadingValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
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

  return (
    <div className="board">
      <div className="heading-area">
        {isEditingHeading ? (
          <input
            className="input"
            ref={inputRef}
            value={headingValue}
            onChange={handleHeadingChange}
            onKeyDown={handleKeyPress}
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
      <div className="card-area"></div>
    </div>
  );
};

export default Boards;
