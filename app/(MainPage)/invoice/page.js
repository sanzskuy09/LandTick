"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";

const Invoice = () => {
  return (
    <div className="max-w-[1200px] mx-auto items-center justify-between mt-12 px-4">
      <p className="text-4xl font-thin text-center lg:text-left mb-7">
        Invoice
      </p>

      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div>
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
                Silakan melakukan pembayaran memalui M-Banking, E-Banking dan
                ATM Ke No.rek Yang Tertera.
              </p>
              <p>No.rek : 09812312312</p>
            </div>
          </div>

          <div className="mt-8 border-2 border-secondary rounded-md h-max pb-4">
            <div className="flex items-center gap-4 bg-primary w-max pl-4 pr-12 rounded-br-full h-12 mb-11">
              <Image
                src="/logo.png"
                alt="logo"
                width={150}
                height={20}
                className=""
              />
            </div>

            <div className="lg:flex w-full">
              <div className="lg:flex-1 grid grid-cols-2 lg:grid-cols-4 px-4 gap-y-4 mb-8">
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
            </div>
          </div>

          {/* Rincian Harga */}
          <div className="mt-8">
            <h1 className="text-4xl font-[100]">Rincian Harga</h1>

            <div className="flex flex-row-reverse">
              <div className="flex flex-col gap-2 items-center justify-center mt-4 flex-1">
                <div className="h-[220px] lg:h-[180px] bg-secondary w-1/2 lg:w-2/3 max-w-[200px] rounded-md border-2 border-black object-cover"></div>
                <p className="text-secondary">upload payment proof</p>
              </div>

              <div className="flex-auto w-1/3">
                <div className="mt-4 border-2 border-secondary rounded-md h-max">
                  <div className="flex justify-between px-5 py-6 w-full">
                    <p>Argo Wilis (Dewasa) x1</p>
                    <p>Rp.250.000</p>
                  </div>
                  <div className="flex justify-between px-5 py-2 bg-[#E6E6E6]">
                    <h3 className="text-2xl">Total</h3>
                    <h1 className="text-2xl font-bold">Rp.250.000</h1>
                  </div>
                </div>

                <Button
                  radius="sm"
                  className="bg-gradient-primary text-white w-full text-base font-bold mt-4"
                >
                  Bayar Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* jadwal kereta dan QR */}
        <div className="min-h-[414px] max-h-min md:w-3/4 lg:w-2/5 bg-[#F5F5F5]">
          <div className="bg-[#D0D0D0] px-8 py-4 flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Kereta Api</h1>
              <h5 className="text-sm font-thin text-[#878787]">
                <span className="font-semibold">Saturday</span>, 21 Febuari 2020
              </h5>
            </div>

            <Image src="/QR-code.png" alt="logo" width={80} height={50} />
          </div>

          <div className="px-8 py-4">
            <h1 className="text-2xl font-bold mb-2">Argo Wilis</h1>
            <p className="text-sm font-thin">Eksekutif (H)</p>

            <div className="flex flex-col items-start mt-4">
              {/* <!-- Step 1 (Completed) --> */}
              <div className="flex items-center space-x-5 w-full">
                <div className="w-4 h-4 rounded-full border border-primary"></div>
                <div className="flex space-x-12 w-full">
                  <div>
                    <p className="text-sm sm:text-base font-semibold">05.00</p>
                    <p className="text-secondary text-[12px] md:text-sm">
                      21 Febuari 2020
                    </p>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold">
                      Jakarta (GMR)
                    </p>
                    <p className="text-secondary text-[12px] md:text-sm">
                      Stasiun Gambir
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Vertical Divider --> */}
              <div className="h-16 w-[1.5px] bg-[#D0D0D0] ml-[6px] -mt-2 -mb-2"></div>

              {/* <!-- Step 2 (Active) --> */}
              <div className="flex items-center space-x-5 w-full">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <div className="flex space-x-12 w-full">
                  <div>
                    <p className="text-sm sm:text-base font-semibold">10.05</p>
                    <p className="text-secondary text-[12px] md:text-sm">
                      21 Febuari 2020
                    </p>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold">
                      Surabaya (SBY)
                    </p>
                    <p className="text-secondary text-[12px] md:text-sm">
                      Stasiun Surabaya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
