"use client";
import style from "./header.module.scss";
import Nav from "./nav/Nav";
import Button from "./button/Button";
import { menu } from "@/app/utils/animations";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  return (
    <header className={style.header}>
      <motion.div
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className={style.menu}
      >
        <AnimatePresence>{isActive && <Nav key="nav" />}</AnimatePresence>
      </motion.div>

      <h2 onClick={() => router.push("/")}>Daily Insight</h2>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </header>
  );
}
