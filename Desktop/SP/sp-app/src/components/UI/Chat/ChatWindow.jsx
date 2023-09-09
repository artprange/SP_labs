import React from "react";
import "./styles.scss";

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.user ? "user" : "bot"}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
