import Link from "next/link";
import style from "./nav.module.scss";
import { motion } from "framer-motion";
import { perspective } from "@/app/utils/animations";
import { useEffect, useState } from "react";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "daily@insight.com", href: "mailto:" },
];

export default function Nav() {
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
        <motion.a
          custom={0}
          variants={perspective}
          initial="initial"
          animate="enter"
          exit="exit"
          href="#footer"
        >
          Contact
        </motion.a>
        {links.map((link, index) => (
          <div key={index} className={style.linkcontainer}>
            <motion.div
              custom={index + 1}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Link href={link.href}>{link.title}</Link>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
        variants={perspective}
        custom={4}
        initial="initial"
        animate="enter"
        exit="exit"
        className={style.footer}
      >
        <p>{formattedTime}</p>
      </motion.div>
    </nav>
  );
}
