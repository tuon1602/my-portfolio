import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "/public/assets/images/ava.png";
import Image from "next/image";
import ChangeLanguage from "./ChangeLanguage";

const Navbar = () => {
  return(
    <section className="container">
      <div className="flex justify-between items-center">
        <div className="flex items-center aspect-square max-w-[150px] w-[150px] relative">
          <Image src={Logo} alt="Logo" fill className="object-cover"/>
        </div>
        <div className="flex items-center gap-5">
          <ChangeLanguage/>
          <ThemeToggle />
        </div>
      </div>
    </section>
  )
};

export default Navbar;
