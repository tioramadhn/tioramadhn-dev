"use client";
import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
export const MotionDiv = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};
