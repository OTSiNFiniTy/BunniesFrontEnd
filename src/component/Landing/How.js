import React from "react";
import "./how.css";

const How = () => {
  const howorks = [
    {
      content: "Early competitions will take place to win whitelist spots",
    },
    {
      content: "Give away 1% (100 OTS Bunny NFTs) after first 1000 sell out",
    },
    {
      content: "Competitions will be held to win spots for second whitelist",
    },
    {
      content: "100 NFT and 5 ETH giveaways during public sale",
    },
    {
      content: "Regular giveaways and competitions will continue post reveal",
    },
  ];

  return (
    <div id="how">
      <div className="container mx-auto py-10 sm:py-20">
        <h1 className="text-center text-4xl px-4 mt-10 sm:text-7xl text-blue-200">
          How OTS Bunnies Will Work
        </h1>
        <div className="sm:flex justify-center items-center mt-10 sm:mt-24">
          <div className="flex sm:w-2/5 gap-4 px-4">
            <div className="w-2/5">
              <img src="/img/7.png" className="mb-5 rounded-lg" />
              <img src="/img/8.png" className="rounded-lg" />
            </div>

            <div className="w-3/5 ml-2 bg-[url(/img/10.png)] bg-[length:100%_100%] rounded-lg">
            </div>
          </div>

          <div className="sm:w-3/5 flex justify-center mt-5 sm:mt-0">
            <ul className="list-disc pl-10">
              {howorks.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-white font-medium text-xl sm:text-2xl mt-4 sm:mt-8 normal-description"
                  >
                    {item.content}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
