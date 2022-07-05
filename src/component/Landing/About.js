import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <div className="md:container md:mx-auto p-10">
        <div className="grid grid-cols-2 gap-2 mb-10 p-10">
          <div>
            <h1 className="text-white text-5xl py-10">What Is OTS Bunnies</h1>
            <p className="width-300p text-white text-xl mb-5">
              OTS Bunnies is a collection of 666 alien-like humanoids created by
              DeStorm Power. The Genesis collection name is derived from the
              premier release of the MetaTars collectables. This is only the
              beginning - there is much more to come
            </p>
            <p className="width-300p text-white text-xl mb-5">
              The Genesis collection name is derived from the premier release of
              the MetaTars collectables. This is only the beginning - there is
              much more to come
            </p>
            <div className="flex">
              <button className="border-white border-2 rounded-full text-white flex px-5 py-3 mr-10">
                <img src="/img/twiter.svg" className="mr-3" /> TWITTER
              </button>
              <button className="border-white border-2 rounded-full text-white flex px-5 py-3 ml-10">
                <img src="/img/discord.svg" className="mr-3" /> DISCORD
              </button>
            </div>
          </div>
          <div className="relative">
            <img src="/img/12.png" className="absolute image-1" />
            <img src="/img/11.png" className="absolute w-[80%]" />
            <img src="/img/13.png" className="absolute image-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
