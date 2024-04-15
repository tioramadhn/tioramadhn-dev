import React from "react";
import SplineTemplate from "./Spline";

export const DotedBackground = () => {
  return (
    <>
      <div className="dot fixed -z-20 inset-0 sm:px-[1.5rem] md:grow md:px-[3rem] mx-auto w-full opacity-20 dark:opacity-100" />
      <div className="shine -z-10 absolute inset-0 opacity-10 dark:opacity-100"></div>
      <div
        className={`
      fixed top-60 md:top-0 left-0 right-0 bottom-0 -z-20 opacity-25 mix-blend-luminosity`}
      >
        {/* <SplineTemplate scene="https://prod.spline.design/4UE8v5GvIpjcYxCF/scene.splinecode" /> */}
      </div>
    </>
  );
};
