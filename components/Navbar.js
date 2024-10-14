import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white h-16 flex items-center bg-shadow">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <p className="text-3xl font-medium text-primary">LandTick</p>
          <Image src="/icon-navbar.png" alt="logo" width={50} height={50} />
        </div>

        <div className="flex items-center gap-4">
          <button className="border-2 border-gradientPrimary rounded-lg w-28 h-10 text-primary font-bold hover:bg-gradient-primary hover:text-white hover:border-gradientPrimary transition duration-200">
            <p className="bg-clip-text text-gradient-primary">DAFTAR</p>
          </button>
          <Button
            radius="sm"
            className="bg-gradient-primary text-white w-28 text-base font-bold"
          >
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
