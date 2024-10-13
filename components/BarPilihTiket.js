import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { DatePicker } from "@nextui-org/date-picker";
import { Button } from "@nextui-org/button";

import Image from "next/image";
import React from "react";

const BarPilihTiket = () => {
  return (
    <div className="w-full bg-[#F2F2F2] -mt-8 h-60 rounded-md flex">
      <div className="w-64 pt-4">
        <div className="bg-white h-12 flex items-center border-l-8 border-[#E67E22]">
          <Image
            src="/icon-train.png"
            alt="logo"
            width={25}
            height={25}
            className="mx-2"
          />
          <p className="text-sm font-extralight">Tiket Kereta Api</p>
        </div>
      </div>

      <div className="bg-white rounded-r-md flex-1 p-4">
        <h3 className="text-lg">Tiket Kereta Api</h3>
        <div className="flex gap-8 mt-4">
          <Input
            type="text"
            label="Asal"
            radius="sm"
            placeholder="contoh : Jakarta"
            labelPlacement="outside"
            classNames={{ label: "text-lg font-semibold" }}
          />

          <Image src="/icon-rounded.svg" alt="logo" width={50} height={20} />

          <Input
            type="text"
            label="Tujuan"
            radius="sm"
            placeholder="contoh : Gombong"
            labelPlacement="outside"
            classNames={{ label: "text-lg font-semibold" }}
          />
        </div>

        <div className="mt-4 flex justify-between gap-8 w-full">
          {/* pilih jadwal */}
          <div className="flex justify-between w-full">
            <div className="w-2/4">
              <h5>Tanggal Berangkat</h5>
              <DatePicker radius="sm" className="max-w-[284px] mt-2" />
            </div>

            <div>
              <Checkbox color="default" radius="sm">
                Pulang Pergi
              </Checkbox>
            </div>
          </div>

          <Image
            src="/icon-rounded.svg"
            alt="logo"
            width={50}
            height={20}
            className="invisible"
          />
          <div className="w-full flex gap-4">
            <Input
              type="number"
              min={0}
              label="Dewasa"
              radius="sm"
              placeholder="contoh : 2"
              isRequired
              labelPlacement="outside"
            />
            <Input
              type="number"
              min={0}
              label="Bayi"
              radius="sm"
              placeholder="contoh : 1"
              isRequired
              labelPlacement="outside"
            />
            <div className="content-end py-2">
              <Button radius="sm" className="bg-gradient-primary text-white">
                Cari Tiket
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarPilihTiket;
