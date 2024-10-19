"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";

const TicketSaya = () => {
  return (
    <div className="max-w-[1200px] mx-auto items-center justify-between mt-12 px-4">
      <p className="text-4xl font-thin text-center">Tiket Saya</p>

      <div className="mt-8 border-2 border-secondary rounded-md h-max pb-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-4 bg-primary w-max pl-4 pr-12 rounded-br-full">
            <Image src="/logo.png" alt="logo" width={150} height={50} />
          </div>

          <div className="m-2">
            <h1 className="text-sm text-secondary">
              <span className="font-bold">Saturday</span>, 21 Oktober 2024
            </h1>
          </div>
        </div>

        {/* Data Kereta */}
        <div className="px-4 mt-8 mb-8 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Argo Wills</h1>
            <h5 className="text-sm font-thin text-secondary">Eksekutif (H)</h5>

            <div className="bg-[#ffdbae] w-max px-4 py-1 rounded-md mt-4">
              <p className="text-[#F7941E] font-medium text-sm">Pending</p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            {/* <!-- Step 1 (Completed) --> */}
            <div className="flex items-center space-x-5">
              <div className="w-4 h-4 rounded-full border border-primary"></div>
              <div className="flex gap-8 justify-between">
                <div>
                  <p className="font-semibold">05.00</p>
                  <p className="text-secondary text-sm">21 Febuari 2020</p>
                </div>
                <div>
                  <p className="font-semibold">Jakarta (GMR)</p>
                  <p className="text-secondary text-sm">Stasiun Gambir</p>
                </div>
              </div>
            </div>

            {/* <!-- Vertical Divider --> */}
            <div className="h-16 w-[1.5px] bg-[#D0D0D0] ml-2 -mt-2 -mb-2"></div>

            {/* <!-- Step 2 (Active) --> */}
            <div className="flex items-center space-x-5">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <div className="flex gap-8 justify-between">
                <div>
                  <p className="font-semibold">10.05</p>
                  <p className="text-secondary text-sm">21 Febuari 2020</p>
                </div>
                <div>
                  <p className="font-semibold">Surabaya (SBY)</p>
                  <p className="text-secondary text-sm">Stasiun Surabaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* data pemesan */}
        <div className="grid grid-cols-2 px-4 gap-y-4 mb-8">
          <div className="flex flex-col gap-2">
            <h1>No. Tanda Pengenal</h1>
            <hr />
            <p className="text-sm text-secondary">31175033003970001</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Nama Pemesan</h1>
            <hr />
            <p className="text-sm text-secondary">Anto</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1>No. Handphone</h1>
            <hr />
            <p className="text-sm text-secondary">083896833112</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Email</h1>
            <hr />
            <p className="text-sm text-secondary">anto@gmail.com</p>
          </div>
        </div>

        <div className="px-4">
          <Button
            radius="sm"
            className="bg-gradient-primary text-white w-full text-base font-bold"
          >
            Bayar Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicketSaya;
