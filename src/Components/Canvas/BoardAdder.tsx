import { SiAddthis } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import "./BoardAdder.css";

interface props {
  onBoardAdding: () => void;
}

const BoardAdder = ({ onBoardAdding }: props) => {
  const handleBoardAdding = () => {
    onBoardAdding();
  };

  return (
    <motion.div
      layout
      initial={{ scale: "70%", opacity: "30%" }}
      animate={{ scale: "100%", opacity: "100%" }}
      onClick={handleBoardAdding}
      className="container"
    >
      <SiAddthis className="icon" />
    </motion.div>
  );
};

export default BoardAdder;
