import { MotionDiv } from "@/components/MotionDiv";
import SplineTemplate from "@/components/Spline";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="pt-20 md:pt-0 grid grid-cols-1 md:place-items-center relative ">
      <div className="space-y-5 col-span-full md:col-span-1">
        {[
          "Hi! 👋",
          "I'm Tio Ramadhan,",
          "a full-stack developer who loves intuitive, clean and modern UI design.",
          "Get in Touch",
        ].map((text, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 + index * 0.1 }}
          >
            {index === 0 && <h2 className="body-medium-bold">{text}</h2>}
            {index === 1 && (
              <h1 className="heading-section-title inline">
                {text.split(" ")[0]}{" "}
                <span className="text-primary">{text.split(" ")[1]}</span>{" "}
                {text.split(" ").slice(2)}
              </h1>
            )}
            {index === 2 && (
              <p className="boyd-large-medium">
                {text.split(" ")[0]}{" "}
                <span className="font-bold">{text.split(" ")[1]}</span>{" "}
                {text.split(" ").slice(2).join(" ")}
              </p>
            )}
            {index === 3 && (
              <div className="flex gap-2">
                <Link prefetch href={"/contact"} passHref>
                  <Button className="body-small-bold">{text}</Button>
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
            )}
          </MotionDiv>
        ))}
      </div>
    </main>
  );
}
