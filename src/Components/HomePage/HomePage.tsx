import { useEffect, useState } from "react";
import "./HomePage.css";
import { ListAllCanvasFolders } from "../../Services/ListAllCanvasFolders";
import CanvasCards from "../CanvasCards/CanvasCards";
import Backdrop from "../AddCanvas/backdrop";

const HomePage = () => {
  const [canvas, setCanvas] = useState<(string | undefined)[] | undefined>();

  useEffect(() => {
    const fetchCanvas = async () => {
      try {
        const folders = await ListAllCanvasFolders();
        setCanvas(folders);
      } catch (error) {
        console.error("Error fetching canvas folders:", error);
        setCanvas([]); // Handle the error by setting an empty array or another appropriate value
      }
    };

    fetchCanvas();
  }, []);

  return (
    <div className="main">
      <div className="sidebar">{/* code for sidebar */}</div>

      <div className="Canvas-area">
        {canvas?.map((aCanvas, index) => (
          <CanvasCards key={index} name={aCanvas} image="" />
        ))}
        <Backdrop />
      </div>
    </div>
  );
};

export default HomePage;
