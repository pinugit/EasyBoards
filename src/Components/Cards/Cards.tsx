import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Variants, motion } from "framer-motion";
import "./Cards.css";
interface Props {
  parentElementRef: MutableRefObject<HTMLElement | null>;
  onCardOpen: (isOpen: boolean) => void;
}

const Cards = ({ parentElementRef, onCardOpen }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const elementRef = useRef(null);
  const [theLeftValue, setTheLeftValue] = useState<number>();
  const [TheTopValue, setTheTopValue] = useState<number>();

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (parentElementRef.current) {
      const parentRect = parentElementRef.current.getBoundingClientRect();
      const leftValue = parentRect.left + window.scrollX;
      const topValue = parentRect.top + window.scrollY;

      setTheLeftValue(leftValue);
      setTheTopValue(topValue);
    }

    onCardOpen(isOpen);
  }, [isOpen, onCardOpen, parentElementRef]);

  const variants: Variants = {
    active: {
      // here i am doing this to center the opened card by removing the distance from the left of the parent board to the left edge of the window from the final position
      // and then removing the half of the opened card height and width to its final landing position to finally center it
      y:
        window.innerHeight / 2 - TheTopValue! - (45 / 100) * window.innerHeight,
      x: window.innerWidth / 2 - theLeftValue! - (45 / 100) * window.innerWidth,
      width: "90vw",
      height: "90vh",
      position: "absolute",
    },
    inactive: {
      transition: {
        delay: 1,
      },
    },
  };

  return (
    <>
      {isOpen && <motion.div className="backdrop"></motion.div>}
      <motion.div
        className="card"
        ref={elementRef}
        variants={variants}
        initial={!isOpen ? "inactive" : "active"}
        animate={isOpen ? "active" : "inactive"}
        transition={{ type: "just" }}
        onClick={toggleCard}
      >
        <motion.h1>{isOpen ? "open" : "close"}</motion.h1>
      </motion.div>
    </>
  );
};

export default Cards;
