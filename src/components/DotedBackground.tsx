import React from "react";

export const DotedBackground = () => {
  return (
    <>
      <div className="dot fixed -z-10 inset-0 sm:px-[1.5rem] md:grow md:px-[3rem] mx-auto w-full opacity-20 dark:opacity-100" />
      <div className="shine absolute inset-0 opacity-10 dark:opacity-100"></div>
    </>
  );
};
