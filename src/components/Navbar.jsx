import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src="/assets/kevinRushLogo.png" alt="logo" /> */}
        <div className="mx-2 w-10 text-4xl ">AG</div>
      </div>
      <div className="m-8 flex flex-shrink-0 items-center gap-4 text-2xl">
        <a href="https://leetcode.com/u/evirac/">
          <SiLeetcode />
        </a>
        <a href="https://www.linkedin.com/in/ayushgupta348/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/evirac">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
