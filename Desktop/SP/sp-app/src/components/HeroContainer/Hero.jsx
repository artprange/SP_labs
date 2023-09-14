import React, { useState } from "react";
import LargeBtn from "../UI/LargeButton/LargeBtn";
import NavBar from "../NavBarContainer/NavBar";
import "./styles.scss";

import Chat from "../ChatContainer/Chat";

function Hero() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const handleChatIconClick = () => {
    setIsChatboxOpen(!isChatboxOpen); // Toggle the visibility
  };
  return (
    <div className="hero-container">
      <NavBar />
      <div className="hero-container__text">
        <h1>
          Imagine, crie,<br></br> implemente e{" "}
          <span className="evolua-text">evolua</span>
        </h1>
        <h5>Porque não basta resolver os conflitos do mundo do direito.</h5>
        <LargeBtn className="hero-btn" text={"Inicie sua jornada"} />
        <button
          type="button"
          alt="chat"
          onClick={handleChatIconClick}
          style={{ cursor: "pointer" }}
          className="chat-icon"
        />

        {isChatboxOpen && <Chat />}
      </div>
    </div>
  );
}

export default Hero;
