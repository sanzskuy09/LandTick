import React from "react";

const DashboardAdmin = () => {
  return (
    <div className="max-w-[1200px] mx-auto items-center justify-between mt-12 px-4">
      <h2 className="text-3xl font-semibold">List Transaksi</h2>

      <table className="w-full">
        <tr>
          <th>No</th>
          <th>Ticket ID</th>
          <th>Status</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
        <tr className="text-center">
          <td>1</td>
          <td>INV0101</td>
          <td>Sudah Bayar</td>
          <td>Rp. 100.000</td>
          <td>
            <button>Cari</button>
            <button>Edit</button>
            <button>Hapus</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default DashboardAdmin;
