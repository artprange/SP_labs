import React from "react";
import "./styles.scss";

const CustomVideo = () => {
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IdkCEioCp24?si=hEICzuomxG7Ori4Y&amp;start=71"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default CustomVideo;
