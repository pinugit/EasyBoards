import { motion } from "framer-motion";
import "./CanvasAdderModal.css";

const CanvasAdderModal = () => {
  return (
    <motion.div className="modal-container">
      <motion.div className="modal">
        <input type="text" />
      </motion.div>
    </motion.div>
  );
};

export default CanvasAdderModal;
