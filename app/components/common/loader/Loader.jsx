"use client";
import { motion } from "framer-motion";
import style from "./loader.module.scss";
import { loader } from "@/app/utils/animations";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Loader() {
  const pathname = usePathname();

  return (
    <motion.div
      variants={loader}
      initial="initial"
      //   initial={pathname === "/" ? "" : "initial"}
      animate="animate"
      exit="exit"
      className={style.loader}
    >
      <h3>Daily Insight</h3>
    </motion.div>
  );
}
