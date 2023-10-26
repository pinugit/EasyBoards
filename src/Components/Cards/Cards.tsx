import { MutableRefObject, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  parentElementRef: MutableRefObject<HTMLElement | null>;
}

const Cards = ({ parentElementRef }: Props) => {
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

      console.log(`Left value of parent: ${leftValue}px`);
      setTheLeftValue(leftValue);
    }
  }, [isOpen, parentElementRef]);

  const variants = {
    active: {
      y: window.innerHeight / 3 - 300,
      x: window.innerWidth / 2 - theLeftValue! - 500,
      width: 1000,
      height: 600,
      position: "fixed",
    },
    inactive: {},
  };

  return (
    <motion.div
      style={{ background: "red" }}
      ref={elementRef}
      variants={variants}
      initial={!isOpen ? "inactive" : "active"}
      animate={isOpen ? "active" : "inactive"}
      onClick={toggleCard}
    >
      <motion.h1>{isOpen ? "open" : "close"}</motion.h1>
    </motion.div>
  );
};

export default Cards;
