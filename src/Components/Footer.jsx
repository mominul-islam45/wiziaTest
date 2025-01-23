import { Image } from "@heroui/react";
import React from "react";
import logo from "/wizia logo 2.png";

function Footer() {
  return (
    <footer className=" bg-light_bg py-8 w-full">
      <div className="container sm:px-12 lg:px-24 mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        <Image src={logo} alt="Wizia Logo" />
        <p className="text-base font-work_sans font-light text-white">
          Copyright © 2023 Wizia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
