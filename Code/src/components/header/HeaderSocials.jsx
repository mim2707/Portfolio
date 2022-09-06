import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/islombek-murotaliev-4a5b10139" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/mim2707" target="_blank">
        <BsGithub />
      </a>
      <a href="https://t.me/alonewolfforever" target="_blank">
        <BsTelegram />
      </a>
    </div>
  );
};

export default HeaderSocials;