import React from "react";
import "./styles.scss";
import chatMessage from "../../assets/chat-message.svg";

const ChatWindow = ({ messages, isChatExpanded }) => {
  return (
    <div className={`chat-window ${isChatExpanded ? "expanded" : ""}`}>
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

// const ChatWindow = ({ messages, isChatExpanded }) => {
//   return (
//     <div className={`chat-window ${isChatExpanded ? "expanded" : ""}`}>
//       <div className="message-wrapper">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`message ${message.user ? "user" : "bot"}`}
//           >
//             {message.user ? (

//               <span>{message.text}</span>
//             ) : (
//               <div className="bot-message">
//                 <img src={chatMessage} alt="Bot" className="bot-image" />
//                 <span>{message.text}</span>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;
