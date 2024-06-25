"use client";

import { motion } from "framer-motion";
interface IProps {
  classname?: string;
  children: React.ReactNode;
}

export default function HoverEffect({ children, classname }: IProps) {
  return (
    <motion.div
      className={classname}
      whileHover={{
        scale: 1.05,
      }}
    >
      {children}
    </motion.div>
  );
}
