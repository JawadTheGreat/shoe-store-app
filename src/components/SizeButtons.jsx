import { useState } from "react";
import classes from "../styles/SizeButtons.module.css";

export default function SizeButtons() {
  const [activeSizeButton, setActiveSizeButton] = useState(null); // State to track which size button is active (clicked)

  // Function to determine the size button color
  const getSizeButtonStyle = (sizeButtonIndex) => {
    return {
      backgroundColor: activeSizeButton === sizeButtonIndex ? "black" : "white",
      color: activeSizeButton === sizeButtonIndex ? "white" : "black",
    };
  };

  // Function to handle size button click
  const handleSizeButtonClick = (sizeButtonIndex) => {
    setActiveSizeButton(sizeButtonIndex);
  };

  return (
    <div className={classes["productSizes"]}>
      <div
        className={classes["size"]}
        style={getSizeButtonStyle(0)}
        onClick={() => handleSizeButtonClick(0)}
      >
        42
      </div>
      <div
        className={classes["size"]}
        style={getSizeButtonStyle(1)}
        onClick={() => handleSizeButtonClick(1)}
      >
        43
      </div>
      <div
        className={classes["size"]}
        style={getSizeButtonStyle(2)}
        onClick={() => handleSizeButtonClick(2)}
      >
        44
      </div>
    </div>
  );
}
