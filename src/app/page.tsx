import SplineTemplate from "@/components/Spline";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="py-20 grid grid-cols-2 md:place-items-center">
      <div className="space-y-5 col-span-full ">
        <h2 className="body-medium-bold">Hi! 👋</h2>
        <h1 className="heading-section-title inline">
          I&apos;m <span className="text-primary">Tio</span> Ramadhan,
        </h1>
        <p className="boyd-large-medium">
          a <span className="font-bold">full-stack developer</span> who loves
          intuitive, clean and modern UI design.
        </p>
        <div className="flex gap-2">
          <Link href={"/contact"} passHref>
            <Button className="body-small-bold">Get in Touch</Button>
          </Link>
          <Link href={"/CV_Tio_Ramadhan.pdf"} passHref>
            <Button
              className="body-small-bold flex items-center gap-2"
              variant={"ghost"}
            >
              <FileText />
              Resume
            </Button>
          </Link>
        </div>
      </div>
      <div className="col-span-full relative">
        <SplineTemplate />
      </div>
    </main>
  );
}
