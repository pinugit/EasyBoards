import { useEffect, useState } from "react";
import "./HomePage.css";
import { ListAllCanvasFolders } from "../../File IO functions/ListAllCanvasFolders";
import CanvasCards from "../CanvasCards/CanvasCards";

const HomePage = () => {
  const [canvas, setCanvas] = useState<(string | undefined)[] | undefined>([]);

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
    <div>
      <div className="sidebar">{/* code for sidebar */}</div>

      <div>
        {canvas?.map((aCanvas) => (
          <CanvasCards name={aCanvas} image="" />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
