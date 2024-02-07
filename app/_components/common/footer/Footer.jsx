import Link from "next/link";
import style from "./footer.module.scss";

export default function Footer() {
  return (
    <footer id="footer" className={style.footer}>
      <div className={style.row}>
        <div className={style.col}>
          <p className="h2">Want to collaborate?</p>
          <p className="h2">We’d love to hear from you.</p>
          <p className="gray">
            Please note that this is a personal project, it's not based on real
            events or people and it's purely fictional.
          </p>
          <button className="button">Get in touch</button>
        </div>
        <div className={style.col}>
          <div className={style.social}>
            <Link href="#">Instagram</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Patreon</Link>
            <p className="gray">© Daily Insight - 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
