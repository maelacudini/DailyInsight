import Image from "next/image";
import style from "./about.module.scss";

export default function page() {
  return (
    <div className={style.about}>
      <div className={style.row}>
        <div className={style.col}></div>
        <div className={style.col}>
          <h2>
            <span className="times">Daily Insight</span> was founded on the
            belief that good, open conversations create great, meaningful work.
          </h2>
          <p>
            Welcome to Daily News, your trusted source for timely and reliable
            news coverage since 2011. Founded in the vibrant city of New York,
            we have been committed to delivering accurate and insightful news to
            our readers, keeping them informed about the events that shape our
            world. At Daily News, our mission is to provide you with
            up-to-the-minute news that matters. Whether it's breaking stories,
            in-depth analyses, or feature articles, we strive to deliver content
            that informs, engages, and empowers our diverse audience.
          </p>
          <div className={style.imagecontainer}>
            <Image src="/ny.webp" fill alt="nyc" loading="lazy" />
          </div>
          <p>
            Our team of dedicated journalists and editors work tirelessly to
            bring you comprehensive and unbiased reporting. We adhere to the
            highest standards of journalistic integrity, ensuring that our
            readers receive news they can trust. From local stories that impact
            the New York community to global events with far-reaching
            consequences, Daily News covers it all.
          </p>
          <a href="mailto:" className="button">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}
