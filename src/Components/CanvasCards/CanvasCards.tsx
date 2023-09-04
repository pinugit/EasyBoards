interface props {
  name: string | undefined;
  image: string;
}
const CanvasCards = ({ name }: props) => {
  return <div className="Container">{name}</div>;
};

export default CanvasCards;
