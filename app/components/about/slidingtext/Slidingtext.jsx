"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import style from "./slidingtext.module.scss";
import { useRef } from "react";

const words = [
  "Journalism",
  "News",
  "New York",
  "Web",
  "Politics",
  "Technology",
  "Business",
];

export default function Slidingtext() {
  const ref = useRef();
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <div className={style.slidingtext}>
      <motion.div style={{ x }} className={style.container}>
        {words.map((word, index) => (
          <h1 key={index}>{word}</h1>
        ))}
      </motion.div>
    </div>
  );
}
