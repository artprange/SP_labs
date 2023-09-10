import React, { useState } from "react";
import ChatWindow from "../UI/Chat/ChatWindow";
import SendBtn from "../UI/SendMessageBUtton/SendBtn";
import ExpandBtn from "../UI/ExpandBtn/ExpandBtn";
import chatImg from "../../components/assets/chat-avatar.svg";

import "./styles.scss";

const Chat = ({ isOpen }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatExpanded, setIsChatExpanded] = useState(false);

  const sendMessage = async () => {
    try {
      const response = await fetch("https://sp-labs.vercel.app/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: input,
        }),
      });
      if (!response.ok) {
        throw new Error("something broke :(");
      }
      const responseData = await response.text();

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, user: true },
        { text: responseData, user: false },
      ]);

      setInput("");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  const toggleChat = () => {
    setIsChatExpanded(!isChatExpanded);
  };

  return (
    <div className="chat-container">
      <div className={`chat-window ${isChatExpanded ? "expanded" : ""}`}>
        <ChatWindow messages={messages} />
      </div>
      <div className="chat-window__header">
        <img src={chatImg} alt="chat" />
        <ExpandBtn className="expand-button" onClick={toggleChat}>
          {isChatExpanded ? "Minimizar" : "Expandir"}
        </ExpandBtn>
      </div>
      <section className="help-text">
        <h5> 🖖 Como posso ajudar?</h5>
      </section>
      <span className="line-element"></span>

      <div className="chat-input__container">
        <input
          className="chat-input__message"
          type="text"
          placeholder="Digite sua pergunta"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <SendBtn onClick={sendMessage}></SendBtn>
      </div>
    </div>
  );
};

export default Chat;
