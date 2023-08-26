import { AiOutlinePlus } from "react-icons/ai";
import "./CardAdder.css";

const CardAdder = () => {
  return (
    <div className="add-button">
      <AiOutlinePlus />
      <p>Add a card</p>
    </div>
  );
};

export default CardAdder;
