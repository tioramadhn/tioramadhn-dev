import { MotionDiv } from "@/components/MotionDiv";
import SplineTemplate from "@/components/Spline";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="pt-20 md:pt-0 grid grid-cols-1 md:place-items-center relative overflow-hidden">
      <div className="space-y-5 col-span-full md:col-span-1 animate-fade-up">
        <h2 className="body-medium-bold">Hi! 👋</h2>
        <h1 className="heading-section-title inline">
          I&apos;m <span className="text-primary">Tio</span> Ramadhan,
        </h1>
        <p className="boyd-large-medium">
          a <span className="font-bold">full-stack developer</span> who loves
          intuitive, clean and modern UI design.
        </p>
        <div className="flex gap-2">
          <Link prefetch href={"/contact"} passHref>
            <Button className="body-small-bold">Get in Touch</Button>
          </Link>
          <Link prefetch href={"/CV_Tio_Ramadhan.pdf"} passHref>
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
    </main>
  );
}
