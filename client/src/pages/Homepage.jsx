import React from "react";

const Homepage = () => {
  // generate the URL uuid
  const UUID = Math.floor(Math.random() * 10000000);
  const link = `http://localhost:3000/${UUID}`;

  return (
    <div className="bg-gradient-to-r from-primaryDark to-primaryLight h-screen  flex flex-col justify-center items-center">
      <div
        className="bg-gradient-to-r from-primaryDark to-primaryLight w-[80vw] rounded-2xl 
                      max-w-[80rem] m-[auto] flex flex-col sm:flex-row h-[80vh] justify-center items-center
                      "
      >
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
          value={link}
          readOnly
        />
      </div>
    </div>
  );
};

export default Homepage;
