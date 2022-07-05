import React from "react";
import "./main.css";
import MInt from "./MInt";

const Main = () => {
  return (
    <div className="main">
      <div className="container mx-auto">
        <div className="sm:flex flex-row text-center sm:text-left items-center">
          <div className="sm:w-2/3 pt-10">
            <h2 className="text-blue-200 lg:text-6xl md:text-4xl sm:text-2xl text-4xl">
              OTS Bunnies
            </h2>
            <p className="description ml-0 xl:w-[90%] md:w-[100%] mt-12 normal-description">
              OTS Bunny is a hand drawn collection of 10k bunnies, a project
              centered around community and collaboration brought to you by
              Ontrack studios. Each NFT resides on the Ethereum blockchain as a
              unique non-fungible token. Each NFT grants access to members only
              benefits. The aim is to foster an environment where artists are
              able to share their work for their own value, allowing them to
              build and lead a community to success. This is only the beginning.
            </p>
            <div className="flex justify-center sm:justify-start mt-14 ">
              <MInt />
            </div>
          </div>
          <div className="sm:flex w-1/3 hidden">
            <div className="w-2/5 mr-3">
              <img src="/img/2.png" />
              <img src="/img/3.png" className="mt-2" />
              <img src="/img/4.png" className="mt-3" />
            </div>
            <div className="w-3/5 overflow-hidden">
              <img src="/img/5.png" className="w-[100%]" />
              <img src="/img/6.png" className="w-[100%] mt-[20px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
