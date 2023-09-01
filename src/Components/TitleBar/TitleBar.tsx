import { useParams } from "react-router-dom";
import "./TitleBar.css";
import { useEffect } from "react";

interface props {
  canvasTitle: string;
}

const TitleBar = ({ canvasTitle }: props) => {
  let { name } = useParams();

  return (
    <div className="title-bar-container">
      <div className="title-bar">
        <p className="title">{name}</p>
      </div>
    </div>
  );
};

export default TitleBar;
