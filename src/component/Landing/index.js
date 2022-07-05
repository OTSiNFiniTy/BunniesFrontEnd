import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import How from "./How";
import Give from "./Give";
import About from "./About";
import Roadmap from "./Roadmap";
import Partner from "./Partner";
import FAQ from "./FAQ";

const Landing = () => {
  return (
    <>
      <Nav />
      <Main />
      <How />
      <Give />
      <Roadmap />
      <Partner />
      <FAQ />

      <footer>
        <div className="container mx-auto relative py-10 sm:py-20 border-t border-gray-500">
          <h1 className="text-center text-blue-200 text-4xl sm:text-6xl normal-header">
            Join Our Community
          </h1>

          <div className="flex justify-center footer mt-5 sm:mt-10">
            <a href="https://twitter.com/OntrackStudios_" target={"_blank"} className={"mx-10 sm:mx-20"}>
              <img src="/img/twiter.svg" className="mt-2 w-[30px] sm:w-[40px]" />
            </a>
            <a href="https://www.instagram.com/ots_bunnies/" target={"_blank"} className={"mx-10 sm:mx-20"}>
              <img src="/img/instagram.svg" className="mt-1 w-[30px] sm:w-[40px]" />
            </a>
            <a href="https://discord.gg/8WHfEZs2DP" target={"_blank"} className={"mx-10 sm:mx-20"}>
              <img src="/img/discord.svg" className="mt-2 w-[30px] sm:w-[40px]" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
