"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import style from "./slidingtext.module.scss";

const words = [
  "Journalism",
  "News",
  "New York",
  "Web",
  "Politics",
  "Technology",
  "Business",
  "Journalism",
  "News",
  "New York",
  "Web",
  "Politics",
  "Technology",
  "Business",
];

export default function Slidingtext() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-300, 300]);

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
