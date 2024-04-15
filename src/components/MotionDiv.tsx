"use client";
import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export const MotionDiv = ({
  children,
  initial,
  animate,
  transition,
}: PropsWithChildren & {
  initial?: object;
  animate?: object;
  transition?: object;
}) => {
  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
};
