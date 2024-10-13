import Image from "next/image";
import ListJadwalTiket from "@/components/ListJadwalTiket";
import BarPilihTiket from "@/components/BarPilihTiket";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <div>
      {/* navbar */}
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

      {/* list */}
      <div className="max-w-[1200px] mx-auto">
        <ListJadwalTiket />
      </div>
    </div>
  );
}
