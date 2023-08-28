import { SiAddthis } from "react-icons/si";
import { motion } from "framer-motion";
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
      transition={{
        duration: 0.1,
      }}
      whileHover={{ scale: 1.2 }}
      onClick={handleBoardAdding}
      className="container"
    >
      <SiAddthis className="icon" />
    </motion.div>
  );
};

export default BoardAdder;
