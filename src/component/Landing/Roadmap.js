import React from "react";
import "./roadmap.css";

const Roadmap = () => {
  const Polygon = ({ className }) => {
    return (
      <div className={className}>
        <img src="/img/Polygon 1.svg" />
        <img src="/img/Polygon 1.svg" className="mt-[-20px]" />
      </div>
    );
  };
  return (
    <div id="roadmap" className="py-10 sm:py-20">
      <h1 className="text-center text-4xl sm:text-7xl text-blue-200">Roadmap</h1>
      <div className="container mx-auto relative w-11/12 sm:w-10/12 mt-10 sm:mt-20 normal-description text-xl ">
        <span className="absolute top-[3%] left-[-30px] w-[3px] bg-gray-400 h-[95%] hidden sm:block" />
        <div className="roadbox">
          <p>
            To us, the community comes first. Ontrack Studios’ sole purpose is
            to become a community driven company most of which makes us differ
            from the others. The goal is to make our first steps as successful
            as possible, to give us the freedom to develop our first NFT drop
            ‘OTS Bunny’.
          </p>
          <p>
            Our team is determined to work around the clock to be able to
            deliver the community a desirable project. Once we are satisfied
            with the quality of our art and the technical aspects, release dates
            of whitelists and public sales will be announced. Join the Ontrack
            Studios discord group today to get the latest announcements on the
            OTS development and become member.
          </p>
          <Polygon className="absolute top-[45%] right-[10px] hidden sm:block" />
        </div>
        <div className="roadbox">
          <p>
            Official launch of our 10k NFTs will be up for purchase from our
            website and trading on Opensea.
          </p>
          <p>10% - Whitelist sale – 1000 NFTs launch to whitelist members </p>
          <p> 50% - Presale – 2000 NFTs launch to 2nd whitelist members </p>
          <p>99% - Public sale – 7000 NFTs launch to public</p>
          <p>100% - Reveal – NFTs will be revealed to holders</p>
          <Polygon className="absolute top-[45%] right-[10px]" />
        </div>
        <div className="roadbox">
          <p>
            Our holders will enjoy privileges of which our project has to offer.
            We will hold regular competitions and events where holders will be
            able to become a community and win giveaways. During which time all
            Royalties earned will be spent on marketing to promote and expand
            our project to raise the floor price and after sales on Opensea.
          </p>
          <Polygon className="absolute top-[45%] right-[10px]" />
        </div>
        <div className="roadbox">
          <p>
            We have developed an app which allows our holders to gain access.
            The app ‘iNFiniTy’ provides endless possibilities in the current
            marketplace and the Etherium blockchain, allowing holders to create
            their own art with smart contract automatically interpreted. More
            details on our service will be available on medium.
          </p>
          <Polygon className="absolute top-[45%] right-[10px]" />
        </div>
        <div className="roadbox">
          <p>
            We will further improve our app to enable development of arts on
            other blockchains, ie. Cardano and Solana.
          </p>
          <Polygon className="absolute top-[45%] right-[10px]" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
