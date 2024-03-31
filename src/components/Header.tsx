import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { GithubIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky h-16 border-b flex items-center">
      <MaxWidthWrapper className="flex justify-between">
        <Link href={"/"} passHref>
          <Button variant={"ghost"} className="body-large-bold">
            tioramadhn<span className="text-primary">dev</span>
          </Button>
        </Link>

        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <GithubIcon />
          </Button>
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;
