import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-20 grid grid-cols-2">
      <div className="space-y-5">
        <h1 className="text-3xl font-bold">Salam koding, Gaiss!🪄</h1>
        <p>
          Selamat datang di Playful Coding World saya! Aku adalah Tio, seorang
          Fullstack Developer yang suka mengutak-atik kode dan menciptakan sihir
          digital. Yuk, kita berjalan-jalan bersama di dunia koding yang penuh
          warna ini.
        </p>
      </div>
    </main>
  );
}
