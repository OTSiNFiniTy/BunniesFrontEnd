import React from "react";
import "./give.css";

const Give = () => {
  const steps = [
    { content: "Purchase a OTS Bunny", img: "step1.png" },
    { content: "Connect your wallet for verification", img: "step2.png" },
    { content: "Begin Generating", img: "step3.png" },
  ];
  return (
    <div id="give">
      <div className="container mx-auto pt-10 text-center py-10">
        <h1 className="text-center text-white text-4xl sm:text-7xl py-10 text-blue-200">
          How i<span className="text-orange-500 font-semibold">NF</span>ini<span className="text-orange-500 font-semibold">T</span>y will work
        </h1>
        <p className="text-white text-[21px] w-[80%] m-auto normal-description">
          Our iNFiniTy app will release immediately after the reveal stage. The
          app allows only OTS Bunny holders to gain access. iNFiniTy is an app
          which we have built from scratch and used to generate our collection
          of 10000 OTS Bunny tokens. Our holders will have the privilege to also
          do the same. Once you own a minimum of one OTS Bunny NFT you can
          connect to our app to begin generating your own NFT collection,
          alongside this, smart contracts will be deployed in the launchpad.
        </p>
        <div className="sm:grid grid-cols-3 gap-[100px] mt-10 mx-10">
          {steps.map((item, index) => {
            return (
              <div
                key={index}
                className="flex slide-text flex-col text-center mt-10"
              >
                <img src={`/img/${item.img}`} className="w-[100%]" />
                <div className="row-span-2 p-5 text-white text-center text-[1.2rem] normal-description">
                  Step {index + 1}: {item.content}
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-white text-[18px] w-[80%] m-auto mt-10 normal-description">
          We will have a step by step tutorial on our website, medium and
          discord channel. Our team will also help out with any queries via
          email and discord.
        </p>
      </div>
    </div>
  );
};

export default Give;
