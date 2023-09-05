import "./AddCanvas.css";
import { motion } from "framer-motion";
interface props {
  onButtonCLick: () => void;
}
const AddCanvas = ({ onButtonCLick }: props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="add-canvas"
      onClick={onButtonCLick}
    >
      <h1>add canvas</h1>
    </motion.button>
  );
};

export default AddCanvas;
