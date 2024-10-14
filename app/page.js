import Image from "next/image";
import ListJadwalTiket from "@/components/ListJadwalTiket";
import BarPilihTiket from "@/components/BarPilihTiket";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* Jumbotron */}
      <div className="bg-gradient-primary h-80">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 items-center justify-between w-full h-full">
          <div className="text-white">
            <p className="font-semibold text-4xl mb-8">
              Selamat Pagi, Ticket Seekers !
            </p>
            <p className="font-thin mb-2 text-xl">
              Ingin Pulkam dengan Good Deal ?
            </p>
            <p className="font-thin text-xl">Masuk atau Daftar Sekarang ! !</p>
          </div>

          <div className="relative h-[211px] w-[526px]">
            <Image
              src="/img-header.png"
              alt="hero"
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto shadow-lg">
        <BarPilihTiket />
      </div>

      <div className="max-w-[1200px] mx-auto">
        <ListJadwalTiket />
      </div>
    </div>
  );
}
