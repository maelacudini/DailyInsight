import style from "./button.module.scss";
import { motion } from "framer-motion";

export default function Button({ isActive, setIsActive }) {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={style.button}
    >
      <motion.div
        className={style.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={style.el}>
          <PerspectiveText label="Menu" />
        </div>
        <div className={style.el}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className={style.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
