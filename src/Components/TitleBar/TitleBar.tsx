import "./TitleBar.css";

interface props {
  canvasTitle: string;
}

const TitleBar = ({ canvasTitle }: props) => {
  return (
    <div className="title-bar-container">
      <div className="title-bar">
        <p className="title">{canvasTitle}</p>
      </div>
    </div>
  );
};

export default TitleBar;
