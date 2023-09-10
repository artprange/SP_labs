import React from "react";
import "./styles.scss";

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      <div className="message-wrapper">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user ? "user" : "bot"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
