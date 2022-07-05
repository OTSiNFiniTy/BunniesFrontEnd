import { Disclosure } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import React from "react";
import "./faq.css";

const FAQ = () => {
  const disclosure = [
    {
      name: "Where can I view my NFT’s?",
      description:
        "Once you have minted your NFT, simply connect your wallet to your Open Sea account to view",
    },
    {
      name: "How can I use the NFT?",
      description:
        "Once you have purchased our NFT, you will have full rights over the ownership of an OTS Bunny NFT, and this will be stored on the Ethereum network as an ERC-721 Non-Fungible Token (NFT). As a member of our project, you have the full right to use your NFT as a profile picture and auctioning it out for sale.",
    },
    {
      name: "Will there be a Presale?",
      description:
        "Yes, there will be a presale for one day for our whitelisted members. In order to secure your place as a whitelist member, please join our Discord community for all announcements on how to become a whitelist member.",
    },
    {
      name: "Will the NFT’s be sold on open marketplaces?",
      description:
        "Primarily the NFT will be sold via our website but will also be sold on secondary site such as Open Sea.",
    },
    {
      name: "How do I purchase an OTS Bunny NFT?",
      description:
        "In order to purchase an OTS Bunny NFT. You first need to conduct two important steps. First step is to purchase ETH from a crypto currency exchange such as Coinbase, Binance or Gemini. Once you have done this your next step will be to transfer the ETH to your non-custodial digital wallet like Metamask, Portis or Wallet Connect comparable wallets. These wallets will be able to connect to our OTS Bunny website where then you can purchase your NFT.",
    },
  ];
  return (
    <div id="faq">
      <div className="container mx-auto py-10 sm:py-20">
        <h1 className="text-blue-200 text-center text-4xl sm:text-7xl">
          Frequently Asked Question
        </h1>
        <div className="mt-10 sm:mt-20 normal-description px-5">
          {disclosure.map((d, i) => {
            return (
              <Disclosure as="div" className="mt-4 sm:mt-10 disclosure" key={i}>
                {({ open }) => (
                  <>
                    <h3 className=" disclosure text-white text-[1.2rem]">
                      <Disclosure.Button className="px-4 pt-4 pb-2 w-full flex items-center dislosure justify-between text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-white">{d.name}</span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusSmIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel>
                      <div className="text-white p-5">{d.description}</div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
