import { useState, useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const Homepage = () => {
  const [messageReceived, setMessageReceived] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [UUID, setUUID] = useState(null);

  socket.on("connect", (data) => {
    console.log("data", socket);
    setUUID(socket.id);
  });

  socket.on("receive_message", (msg) => {
    alert(`OMG! you got a message: ${msg}`);
  });

  const sendMessage = () => {
    if (inputValue) {
      socket.emit("send_message", inputValue);
      alert("Join Request sent!");
    } else alert("Missing connection code");
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="bg-gradient-to-r from-primaryDark to-primaryLight h-screen  flex flex-col justify-center items-center">
      <div
        className="bg-gradient-to-r from-primaryDark to-primaryLight w-[80vw] rounded-2xl 
                      max-w-[80rem] m-[auto] flex flex-col h-[80vh] justify-center items-center
                      "
      >
        <div className="flex flex-col sm:flex-row">
          <h1
            className="text-[#eb2cfc] font-[consolas] text-secondary text-4xl bold text-center relative z-[10000] tracking-tighter 
                        before:absolute before:content-['Invite'] before:-top-[2px] before:-left-[2px] before:text-cyan-400 before:-z-[1]
                        after:absolute after:content-['Invite'] after:-bottom-[2px] after:-right-[2px] after:text-[#0048ff] after:-z-[2]
        "
          >
            Invite
          </h1>

          <input
            className="rounded-md box-border p-1 w-[20rem] ml-5 bg-primaryLight text-white"
            value={UUID}
            readOnly
          />
        </div>

        <div className="flex flex-col justify-center items-center m-10">
          <div className="flex  m-10">
            <h1
              className="text-[#eb2cfc] font-[consolas] text-secondary text-4xl bold text-center relative z-[10000] tracking-tighter 
                        before:absolute before:content-['Join'] before:-top-[2px] before:-left-[2px] before:text-cyan-400 before:-z-[1]
                        after:absolute after:content-['Join'] after:-bottom-[2px] after:-right-[2px] after:text-[#0048ff] after:-z-[2]
        "
            >
              Join
            </h1>

            <input
              className="rounded-md box-border p-1 w-[20rem] ml-5 bg-primaryLight text-white"
              onChange={onChange}
              value={inputValue}
            />
          </div>
          <button
            onClick={sendMessage}
            className="rounded-md w-[10rem] bg-primaryDarker p-1.5 text-white hover:bg-primaryDark hover:transition "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
