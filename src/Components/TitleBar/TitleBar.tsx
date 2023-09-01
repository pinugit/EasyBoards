import "./TitleBar.css";
import { useParams } from "react-router-dom";

interface props {
  canvasTitle: string;
}

const TitleBar = ({ canvasTitle }: props) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="title-bar-container">
      <div className="title-bar">
        <p className="title">{id}</p>
      </div>
    </div>
  );
};

export default TitleBar;
