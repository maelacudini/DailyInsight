import Image from "next/image";
import style from "./about.module.scss";
import ny from "../../public/ny.webp";
import Slidingtext from "@/app/_components/about/slidingtext/Slidingtext";

export default function page() {
  return (
    <main>
      <section className={style.about}>
        <div className={style.row}>
          <div className={style.col}></div>
          <div className={style.col}>
            <h2>
              Daily Insight was founded on the belief that good, open
              conversations create great, meaningful work.
            </h2>
            <p>
              Welcome to Daily News, your trusted source for timely and reliable
              news coverage since 2011. Founded in the vibrant city of New York,
              we have been committed to delivering accurate and insightful news
              to our readers, keeping them informed about the events that shape
              our world. At Daily News, our mission is to provide you with
              up-to-the-minute news that matters. Whether it's breaking stories,
              in-depth analyses, or feature articles, we strive to deliver
              content that informs, engages, and empowers our diverse audience.
            </p>
            <div className={style.imagecontainer}>
              <Image
                src={ny}
                fill
                alt="nyc"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <Slidingtext />
    </main>
  );
}
