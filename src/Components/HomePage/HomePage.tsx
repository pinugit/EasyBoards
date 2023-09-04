import { useEffect, useState } from "react";
import "./HomePage.css";
import { ListAllCanvasFolders } from "../../File IO functions/ListAllCanvasFolders";
import CanvasCards from "../CanvasCards/CanvasCards";

const HomePage = () => {
  const [canvas, setCanvas] = useState<(string | undefined)[] | undefined>([
    "hello",
    "hello1",
    "hello 2",
    "hello 3",
    "hello 4",
    "hello 5",
    "hello 6",
    "hello 7",
  ]);
  // this code is important don't remove it
  // useEffect(() => {
  //   const fetchCanvas = async () => {
  //     try {
  //       const folders = await ListAllCanvasFolders();
  //       setCanvas(folders);
  //     } catch (error) {
  //       console.error("Error fetching canvas folders:", error);
  //       setCanvas([]); // Handle the error by setting an empty array or another appropriate value
  //     }
  //   };

  //   fetchCanvas();
  // }, []);

  return (
    <div className="main">
      <div className="sidebar">{/* code for sidebar */}</div>

      <div className="Canvas-area">
        {canvas?.map((aCanvas, index) => (
          <CanvasCards key={index} name={aCanvas} image="" />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
