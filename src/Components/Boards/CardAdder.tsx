import { AiOutlinePlus } from "react-icons/ai";
import "./CardAdder.css";
interface props {
  onAddingCard: () => void;
}
const CardAdder = ({ onAddingCard }: props) => {
  return (
    <div onClick={() => onAddingCard()} className="add-button">
      <AiOutlinePlus />
      <p>Add a card</p>
    </div>
  );
};

export default CardAdder;
