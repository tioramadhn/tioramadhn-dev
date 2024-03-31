"use client";
import Spline from "@splinetool/react-spline";
import { useTheme } from "next-themes";
import { PropsWithChildren } from "react";

const SplineTemplate = ({ scene }: { scene: string }) => {
  return <Spline scene={scene} />;
};

export default SplineTemplate;
