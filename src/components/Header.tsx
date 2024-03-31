import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { GithubIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky h-16 border-b flex items-center">
      <MaxWidthWrapper className="flex justify-between items-center">
        <Link href={"/"} passHref>
          <div className="body-large-bold flex items-center gap-1">
            <Button className="text-lg font-bold w-6 h-6">#</Button>
            <p>
              tioramadhn
              <span className="text-primary">dev</span>
            </p>
          </div>
        </Link>

        <div className="flex gap-2">
          <Link href={"https://github.com/tioramadhn"} passHref>
            <Button variant="outline" size="icon">
              <GithubIcon />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;
