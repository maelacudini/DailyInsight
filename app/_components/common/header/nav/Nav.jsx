import Link from "next/link";
import style from "./nav.module.scss";
import { motion } from "framer-motion";
import { perspective } from "@/app/_utils/animations";
import { useEffect, useState } from "react";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "#footer" },
  { title: "daily@insight.com", href: "mailto:" },
];

export default function Nav({ isActive, setIsActive }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toUTCString();

  return (
    <nav className={style.nav}>
      <div className={style.body}>
        {links.map((link, index) => (
          <div key={index} className={style.linkcontainer}>
            <motion.div
              variants={perspective}
              custom={index + 1}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Link
                onClick={() => {
                  setIsActive(!isActive);
                }}
                href={link.href}
              >
                {link.title}
              </Link>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
        variants={perspective}
        custom={4}
        initial="initial"
        animate="animate"
        exit="exit"
        className={style.footer}
      >
        <p>{formattedTime}</p>
      </motion.div>
    </nav>
  );
}
