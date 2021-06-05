import React, { useState } from "react";
import Button from "./button";

// styling the individual images
const imageStyles = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: " 4em 0 0 12em",
  borderRadius: "10px",
};

// styling the buttons renders
const buttonStyles = {
  display: "flex",
  flexDirection: "row",
};

// Image component
// renders the Button component
// receives three props (width, height, url)

const Image = ({ width, height, url }) => {
  // states to change the width and height of the image
  const [imageWidth, setImageWidth] = useState(width);
  const [imageHeight, setImageHeight] = useState(height);

  // function to increase the width and height by 20%
  const expand = () => {
    setImageWidth(width + width * 0.2);
    setImageHeight(height + height * 0.2);
  };

  // function to shrink the width and height by 20%
  const shrink = () => {
    setImageWidth(width - width * 0.2);
    setImageHeight(height - height * 0.2);
  };
  return (
    <div style={imageStyles}>
      <img
        src={url}
        alt="nothing  here"
        style={{
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
          borderRadius: "10px",
          boxShadow:
            "0 4px 8px 0 rgba(102, 97, 97, 0.99), 0 6px 20px 0 rgba(102, 97, 97, 0.97)",
          transition: "all 1s ease-in-out",
        }}
      />
      {/* div to contain the rendered buttons */}
      <div style={buttonStyles}>
        <Button text="expand" onClick={expand} />
        <Button text="shrink" onClick={shrink} />
      </div>
    </div>
  );
};

export default Image;
