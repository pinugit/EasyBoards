import { useNavigate, useParams } from "react-router-dom";
import "./TitleBar.css";
import { IoIosArrowBack } from "react-icons/io";

const TitleBar = () => {
  const navigate = useNavigate();

  let { name } = useParams();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="title-bar-container">
      <div className="title-bar">
        <div onClick={handleGoHome} className="logo">
          <IoIosArrowBack />
        </div>
        <p className="title">{name}</p>
        <div></div>
      </div>
    </div>
  );
};

export default TitleBar;
