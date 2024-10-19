"use client";

import Image from "next/image";
import React from "react";

const Invoice = () => {
  return (
    <div className="max-w-[1200px] mx-auto items-center justify-between mt-12 px-4">
      <p className="text-4xl font-thin text-center lg:text-left mb-7">
        Invoice
      </p>

      <div className="flex gap-4">
        <div className="bg-[#EEEEEE] border border-secondary rounded-sm h-40 flex items-center p-10 py-8">
          <Image
            src="/icon-warning-triangle.svg"
            alt="invoice"
            width={50}
            height={50}
            // className="w-1/2"
          />
          <div className="flex flex-col justify-between h-full ml-8">
            <p>
              Silakan melakukan pembayaran memalui M-Banking, E-Banking dan ATM
              Ke No.rek Yang Tertera .
            </p>
            <p>No.rek : 09812312312</p>
          </div>
        </div>

        <div className="bg-[#D0D0D0] w-2/5 px-8 py-4 flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Kereta Api</h1>
            <h5 className="text-sm font-thin text-[#878787]">
              <span className="font-semibold">Saturday</span>, 21 Febuari 2020
            </h5>
          </div>

          <Image src="/QR-code.png" alt="logo" width={80} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
