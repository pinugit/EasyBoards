import { SiAddthis } from "react-icons/si";
import "./BoardAdder.css";

interface props {
  onBoardAdding: () => void;
}

const BoardAdder = ({ onBoardAdding }: props) => {
  const handleBoardAdding = () => {
    onBoardAdding();
  };

  return (
    <div onClick={handleBoardAdding} className="container">
      <SiAddthis />
    </div>
  );
};

export default BoardAdder;
