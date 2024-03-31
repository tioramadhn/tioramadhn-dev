import SplineTemplate from "@/components/Spline";
import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline";
import { FileText } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20 md:pt-0 grid grid-cols-2 md:place-items-center relative">
      <div
        className={`
      h-screen w-screen fixed top-0 left-0 -z-20 opacity-25 mix-blend-luminosity`}
      >
        <SplineTemplate scene="https://prod.spline.design/4UE8v5GvIpjcYxCF/scene.splinecode" />
      </div>
      <div className="space-y-5 col-span-full md:col-span-1">
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
              className="body-small-bold flex items-center gap-2 text-muted-foreground"
              variant={"ghost"}
            >
              <FileText />
              Resume
            </Button>
          </Link>
        </div>
      </div>
      <div className="col-span-full md:col-span-1 relative"></div>
    </main>
  );
}
