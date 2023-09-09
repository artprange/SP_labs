import React from "react";
import "./styles.scss";

const CustomVideo = () => {
  return (
    <div>
      <iframe
        width="512"
        height="297"
        src="https://www.youtube.com/embed/Sagg08DrO5U"
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CustomVideo;
