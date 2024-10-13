import React from "react";

const ListJadwalTiket = () => {
  return (
    <div className="my-20">
      <table className="w-full mb-8">
        <tr className="w-full flex justify-between items-center px-16 text-left">
          <div className="flex gap-6">
            <th className="w-40">Nama Kereta</th>
            <th className="w-40">Berangkat</th>
            <th className="w-40">Tiba</th>
            <th className="w-40">Durasi</th>
          </div>
          <th className="ml-48">Harga Per Orang</th>
        </tr>
      </table>

      <div className="border border-[#B7B7B7] rounded-md h-16 flex justify-between items-center px-16 py-12 mb-6">
        <div className="flex gap-6">
          <div className="w-40">
            <h1 className="font-bold text-lg">Argo Wilss</h1>
            <h5 className="text-sm font-thin text-secondary">Eksekutif (H)</h5>
          </div>
          <div className="w-40">
            <h1 className="font-bold text-lg">05.00</h1>
            <h5 className="text-sm font-thin text-secondary">Gambir</h5>
          </div>
          <div className="w-40">
            <h1 className="font-bold text-lg">10.05</h1>
            <h5 className="text-sm font-thin text-secondary">Surabaya</h5>
          </div>
          <div className="w-40">
            <h1 className="font-bold text-lg">5j 10m</h1>
            <h5 className="invisible">aa</h5>
          </div>
        </div>

        <div className="ml-48">
          <h1 className="font-bold text-lg text-primary">Rp. 250.000</h1>
          <h5 className="invisible">a</h5>
        </div>
      </div>

      <div className="border border-[#B7B7B7] rounded-md h-16 flex justify-between items-center px-16 py-12">
        <div className="flex gap-6">
          <div className="w-40">
            <h1 className="font-bold text-lg">Argo Wilss</h1>
            <h5 className="text-sm font-thin text-secondary">Eksekutif (H)</h5>
          </div>
          <div className="w-40">
            <h1 className="font-bold text-lg">05.00</h1>
            <h5 className="text-sm font-thin text-secondary">Gambir</h5>
          </div>
          <div className="w-40">
            <h1 className="font-bold text-lg">10.05</h1>
            <h5 className="text-sm font-thin text-secondary">Surabaya</h5>
          </div>
          <div className="w-40">
            <h1 className="font-bold text-lg">5j 10m</h1>
            <h5 className="invisible">aa</h5>
          </div>
        </div>

        <div className="ml-48">
          <h1 className="font-bold text-lg text-primary">Rp. 250.000</h1>
          <h5 className="invisible">a</h5>
        </div>
      </div>
    </div>
  );
};

export default ListJadwalTiket;
