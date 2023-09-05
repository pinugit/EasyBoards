import { motion } from "framer-motion";
import { useState } from "react";
import AddCanvas from "./AddCanvas";
import "./CanvasAdderModal.css";

const CanvasAdderModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div className="modal-Container">
      {isModalOpen && <div>main content</div>}
      <AddCanvas />
    </motion.div>
  );
};

export default CanvasAdderModal;
