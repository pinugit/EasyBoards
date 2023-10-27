import { MutableRefObject, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Cards.css";
interface Props {
  parentElementRef: MutableRefObject<HTMLElement | null>;
  onCardOpen: (isOpen: boolean) => void;
}

const Cards = ({ parentElementRef, onCardOpen }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const elementRef = useRef(null);
  const [theLeftValue, setTheLeftValue] = useState<number>();

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (parentElementRef.current) {
      const parentRect = parentElementRef.current.getBoundingClientRect();
      const leftValue = parentRect.left + window.scrollX;

      setTheLeftValue(leftValue);
    }

    onCardOpen(isOpen);
  }, [isOpen, parentElementRef]);

  const variants = {
    active: {
      y: window.innerHeight / 3 - 300,
      x: window.innerWidth / 2 - theLeftValue! - 500,
      width: 1000,
      height: 600,
      position: "absolute",
    },
    inactive: {
      height: "fit-content",
      // transition: {
      //   duration: 0.1,
      // },
    },
  };

  return (
    <>
      <motion.div
        className="card"
        ref={elementRef}
        variants={variants}
        initial={!isOpen ? "inactive" : "active"}
        animate={isOpen ? "active" : "inactive"}
        transition={{}}
        onClick={toggleCard}
      >
        <motion.h1>{isOpen ? "open" : "close"}</motion.h1>
      </motion.div>
    </>
  );
};

export default Cards;
