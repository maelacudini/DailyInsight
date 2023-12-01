"use client";
import { useState } from "react";
import Button from "./button/Button";
import style from "./header.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { menu, title } from "@/app/utils/animations";
import Nav from "./nav/Nav";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={style.header}>
      <motion.div
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className={style.menu}
      >
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </motion.div>

      <motion.h3
        variants={title}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        transition={{
          duration: 0.5,
          type: "linear",
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        Daily Insight
      </motion.h3>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </header>
  );
}
