import React, { useState } from "react";
import ChatWindow from "../UI/Chat/ChatWindow";
import "./styles.scss";

const Chat = ({ isOpen }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const sendMessage = async () => {
    try {
      const response = await fetch("https://sp-labs.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: input,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao se comunicar com o servidor");
      }

      const data = await response.json();

      // Adicionar a resposta do servidor às mensagens
      setMessages([
        ...messages,
        { text: input, user: true },
        { text: data.answer, user: false },
      ]);

      setInput("");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      // Trate o erro de acordo com suas necessidades (ex: exibir uma mensagem de erro)
    }
  };

  return (
    <div>
      {isOpen && <ChatWindow messages={messages} />}
      <div>
        <input
          type="text"
          placeholder="Digite sua pergunta"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
