import React, { useState } from "react";

const ChatBox = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="font-bold mb-4">Chat</h2>

      <div className="border p-3 h-40 mb-3">
        Messages...
      </div>

      <input
        type="text"
        placeholder="Type message"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        className="border w-full p-2 rounded"
      />
    </div>
  );
};

export default ChatBox;