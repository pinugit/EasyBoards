import { useState } from "react";
import "./Cards.css";
import { AnimatePresence, motion } from "framer-motion";

const Cards = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cards-container">
      <div className={`cards ${isOpen ? "open" : ""}`} onClick={toggleCard}>
        <motion.h1 layout>{isOpen ? "Close" : "Open"}</motion.h1>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              explicabo magnam veritatis eum culpa voluptas cum, porro earum
              accusamus quod!s
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cards;
