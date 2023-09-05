import { motion } from "framer-motion";
import "./Backdrop.css";
import CanvasAdderModal from "./CanvasAdderModal";

const Backdrop = () => {
  return (
    <motion.div
      initial={{ opacity: "100%" }}
      animate={{ opacity: "60%" }}
      className="backdrop"
    >
      <CanvasAdderModal />
    </motion.div>
  );
};

export default Backdrop;
