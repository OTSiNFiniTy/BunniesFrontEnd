import React from "react";
import "./partner.css";

const Partner = () => {
  return (
    <div id="partner">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl sm:text-7xl text-blue-200">
          The Team
        </h1>
        <div className="grid sm:grid-cols-4 gap-4 p-10 sm:py-20">
          <div className="px-[5%]">
            <img src="/avatar/umut.jpeg" className="shadow-2xl" />
            <div className="text-center">
              <p className="text-white text-xl my-2">Umut Guzel</p>
              <p className="text-white mt-[-4px]">Community Manager</p>
            </div>
          </div>
          <div className="px-[5%]">
            <img src="/avatar/shavig.png" className="shadow-2xl" />
            <div className="text-center">
              <p className="text-white text-xl my-2">Shavignan Santhakumar</p>
              <p className="text-white mt-[-4px]">Developer</p>
            </div>
          </div>
          <div className="px-[5%]">
            <img src="/avatar/ragu.jpeg" className="shadow-2xl" />
            <div className="text-center">
              <p className="text-white text-xl my-2">Ragu Prasanna</p>
              <p className="text-white mt-[-4px]">Artist</p>
            </div>
          </div>
          <div className="px-[5%]">
            <img src="/avatar/sanjee.png" className="shadow-2xl" />
            <div className="text-center">
              <p className="text-white text-xl my-2">Sanjeewanan</p>
              <p className="text-white mt-[-4px]">Artist</p>
            </div>
          </div>
          <div className="px-[5%]">
            <img src="/avatar/salvo.png" className="shadow-2xl" />
            <div className="text-center">
              <p className="text-white text-xl my-2">Salvo</p>
              <p className="text-white mt-[-4px]">Developer</p>
            </div>
          </div>
          <div className="px-[5%]">
            <img src="/avatar/marianna.jpeg" className="shadow-2xl" />
            <div className="text-center">
              <p className="text-white text-xl my-2">Marianna</p>
              <p className="text-white mt-[-4px]">Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
