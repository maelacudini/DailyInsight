import Link from "next/link";
import style from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.row}>
        <div className={style.col}>
          <h2>Want to collaborate?</h2>
          <h2>We’d love to hear from you.</h2>
          <button className="button">Get in touch</button>
        </div>
        <div className={style.col}>
          <div className={style.social}>
            <Link href="#">Instagram</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Patreon</Link>
            <p>© Daily Insight - 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
