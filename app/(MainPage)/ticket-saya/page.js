import Image from "next/image";
import React from "react";

const TicketSaya = () => {
  return (
    <div className="max-w-[1200px] mx-auto items-center justify-between mt-16">
      <p className="text-2xl font-thin">Tiket Saya</p>

      <div className="mt-8 border-2 border-secondary rounded-md h-52">
        <div className="flex items-center gap-4 bg-primary w-[186px] p-4">
          <p className="text-2xl font-thin text-white">LandTick</p>
          <Image
            src="/icon-train-white.svg"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketSaya;
