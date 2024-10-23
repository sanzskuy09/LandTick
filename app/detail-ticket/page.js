"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const DetailTicket = () => {
  const router = useRouter();
  return (
    <div className="max-w-[800px] mx-auto py-12">
      <button
        onClick={() => router.back()}
        className="text-bold text-2xl mb-4 hover:underline"
      >
        {" "}
        &larr; back
      </button>

      <div className=" border-2  items-center justify-between pl-8 pb-8">
        <div className="flex justify-between mb-6">
          <div className="mt-8">
            <h1 className="text-5xl font-bold">E-Ticket</h1>
            <p className="text-secondary text-sm">Kode Invoice : INV0101</p>
          </div>

          <div>
            <Image
              src="/logo-right-side.png"
              alt="ticket"
              width={200}
              height={40}
            />
          </div>
        </div>

        <div className="flex ">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Kereta Api</h1>
            <h5 className="text-sm font-thin text-[#878787]">
              <span className="font-semibold">Saturday</span>, 21 Febuari 2020
            </h5>

            <div className="mt-8">
              <h1 className="text-2xl font-bold mb-2">Argo Wilis</h1>
              <p className="text-sm font-thin">Eksekutif (H)</p>
            </div>

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

          <div className="flex-1 flex justify-center items-center">
            <Image src="/QR-code.png" alt="logo" width={200} height={50} />
          </div>
        </div>

        <div className="border border-black mr-8 mt-4"></div>

        <div className="grid grid-cols-3 gap-8 px-4 mt-4">
          <div className="flex gap-4 items-center justify-center">
            <Image src="/icon-pass.svg" alt="logo" width={40} height={40} />
            <p className="text-[12px]">
              Tunjukkan e-ticket dan identitas para penumpang saat checkin
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Image src="/icon-clock.svg" alt="logo" width={40} height={40} />
            <p className="text-[12px]">
              Check-in <strong>paling lambat 90 menit</strong> sebelum
              keberangkatan
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Image src="/icon-warning.svg" alt="logo" width={40} height={40} />
            <p className="text-[12px]">
              Waktu tertera adalah waktu stasiun setempat
            </p>
          </div>
        </div>

        <div className="border border-black mr-8 mt-4"></div>

        <div className="lg:flex w-full mt-4">
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
    </div>
  );
};

export default DetailTicket;
