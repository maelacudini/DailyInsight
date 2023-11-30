import Link from "next/link";
import style from "./nav.module.scss";
import { motion } from "framer-motion";
import { perspective } from "@/app/utils/animations";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
];

export default function Nav() {
  const date = new Date().toUTCString();
  return (
    <nav className={style.nav}>
      <div className={style.body}>
        {links.map((link, index) => (
          <div key={index} className={style.linkcontainer}>
            <motion.div
              variants={perspective}
              custom={index}
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
        custom={2}
        initial="initial"
        animate="enter"
        exit="exit"
        className={style.footer}
      >
        <p>{date}</p>
      </motion.div>
    </nav>
  );
}
