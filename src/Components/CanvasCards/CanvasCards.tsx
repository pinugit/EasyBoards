import "./CanvasCards.css";
interface props {
  name: string | undefined;
  image: string;
}
const CanvasCards = ({ name }: props) => {
  return (
    <div className="canvas-cards">
      <h1>{name}</h1>
    </div>
  );
};

export default CanvasCards;
