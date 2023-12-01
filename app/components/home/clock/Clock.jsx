"use client";
import { useState, useEffect } from "react";
import style from "./clock.module.scss";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toUTCString();

  return (
    <div className={style.clock}>
      <div className={style.container}>
        <h2 className="times">Welcome to Daily Insight</h2>
        <div className={style.time}>
          <h2>{formattedTime}</h2>
        </div>
      </div>
    </div>
  );
}
