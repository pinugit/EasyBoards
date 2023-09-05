import "./AddCanvas.css";
import { motion } from "framer-motion";
const AddCanvas = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="add-canvas"
    >
      <h1>add canvas</h1>
    </motion.div>
  );
};

export default AddCanvas;
