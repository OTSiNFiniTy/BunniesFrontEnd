import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MInt = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center">
        <button className="main-button" onClick={() => { 
          /* setShowModal(true) */ 
          toast.warn("Let's wait until the presale mint starts!!!");  
        }}>
          MINT NOW
        </button>
        <span className="normal-description text-[#DBFF00] text-2xl sm:text-3xl mt-4 sm:mt-0 ml-0 sm:ml-4">Coming soon...</span>
        <ToastContainer />
      </div>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#000000bb]">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-[#13014B]  xl:w-[70%] m-auto sm:w-[97%] rounded-lg">
                <div className="flex items-start justify-between border-gray-300 rounded-t ">
                  <img src="/img/modallogo.png" className="m-[5px]" />
                  <button
                    className="bg-transparent border-0 text-white float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="opacity-7 h-[3.5rem] w-[3.5rem] text-2xl py- block bg-[#45484D] text-center  rounded-tr-lg">
                      x
                    </span>
                  </button>
                </div>
                <div className="p-6">
                  <h1 className="text-white text-center text-3xl">
                    MINT OTS Bunny
                  </h1>
                  <h3 className="text-white text-center text-xl">
                    10,000 Bunnies
                  </h3>
                  <div className="w-[30%] m-auto">
                    <img src="/img/4.png" />
                  </div>
                  <div className="flex flex-col w-[90%] m-auto">
                    <div className="flex items-center border-b border-white py-2 my-4 justify-between">
                      <span className="text-white">Remaining</span>
                      <input
                        className="appearance-none bg-transparent border-none text-white mr-3 py-1 px-2 leading-tight focus:outline-none "
                        type="text"
                        aria-label="remaining"
                      />
                      <span className="text-white"> / 10,000</span>
                    </div>
                    <div className="flex items-center border-b border-white py-2 my-4 justify-between">
                      <span className="text-white">Price</span>
                      <input
                        className="appearance-none bg-transparent border-none text-white mr-3 py-1 px-2 leading-tight focus:outline-none "
                        type="number"
                        aria-label="price"
                      />
                      <span className="text-white">0.03 ETH</span>
                    </div>
                    <div className="flex items-center border-b border-white py-2 my-4 justify-between">
                      <span className="text-white">Quantity</span>
                      <div>
                        <span className="text-white">-</span>
                        <input
                          className="appearance-none bg-transparent border-none text-white mr-3 py-1 px-2 leading-tight focus:outline-none text-center"
                          type="number"
                          aria-label="quantity"
                        />
                        <span className="text-white">+</span>
                      </div>
                      <span className="text-white">Max 5</span>
                    </div>
                    <div className="flex items-center border-b border-white w-full py-2 my-4 justify-between">
                      <span className="text-white">Total</span>
                      <input
                        className="appearance-none bg-transparent bordesr-none border-0 text-white mr-3 py-1 px-2 leading-tight focus:outline-none "
                        type="number"
                        aria-label="total"
                      />
                      <span className="text-white">10 Eth</span>
                    </div>
                    <button className="text-white normal-description text-center p-5 bg-[#AB9E1A] w-[100%] my-4">
                      Mint Now
                    </button>
                    <p className="text-white text-center">
                      Presale & Whitelist: Soldout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default MInt;
