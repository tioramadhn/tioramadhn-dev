import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="min-h-16 border-t flex items-center">
      <MaxWidthWrapper className="flex justify-center items-center">
        Build with 💖 by{" "}
        <Link href={"https://www.linkedin.com/in/tioramadhn/"} passHref>
          <Button variant={"ghost"} className="px-2">
            @tioramadhn
          </Button>
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
