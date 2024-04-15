"use client";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { MotionDiv } from "./MotionDiv";

const SplineTemplate = ({ scene }: { scene: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <Spline
        className="w-full h-full transition-all"
        scene={scene}
        onLoad={handleLoad}
      />
    </MotionDiv>
  );
};

export default SplineTemplate;
