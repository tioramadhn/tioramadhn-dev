import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:relative justify-between md:grow min-h-screen overflow-x-hidden after:absolute after:-z-10 after:inset-0 after:sm:px-[1.5rem] md:grow after:md:px-[3rem] after:mx-auto after:w-full after:opacity-20 dark:after:opacity-100">
      <ModeToggle />
    </main>
  );
}
