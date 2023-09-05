import { motion } from "framer-motion";
import "./Backdrop.css";
import CanvasAdderModal from "./CanvasAdderModal";
import AddCanvas from "./AddCanvas";
import { useState } from "react";

const Backdrop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonCLick = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      {isModalOpen && (
        <>
          <motion.div
            initial={{ opacity: "0" }}
            animate={{ opacity: "50%" }}
            transition={{ duration: 1 }}
            onClick={handleButtonCLick}
            className="backdrop"
          ></motion.div>
          <CanvasAdderModal />
        </>
      )}
      <AddCanvas onButtonCLick={handleButtonCLick} />
    </>
  );
};

export default Backdrop;
