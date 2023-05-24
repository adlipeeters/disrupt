import React, { useState, useEffect } from "react";
import styles from "../style.module.css";

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(null);

  const targetDate = new Date("2023-06-23");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      // Calculate remaining time
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Set the remaining time in the state
      setRemainingTime({ days, hours, minutes, seconds });
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    // <div>
    //   {/* <div className={styles.tek_font}> */}
    //   {remainingTime && (
    //     <div>
    //       <div className={styles.countdown_box}>{remainingTime.days}</div> days,
    //       <div className={styles.countdown_box}>{remainingTime.hours}</div>
    //       hours,
    //       <div className={styles.countdown_box}>
    //         {remainingTime.minutes}
    //       </div>{" "}
    //       minutes,
    //       <div className={styles.countdown_box}>
    //         {remainingTime.seconds}
    //       </div>{" "}
    //       seconds
    //     </div>
    //   )}
    // </div>
    <>
      {remainingTime && (
        <div className={styles.countdown_wrapper}>
          <div className={styles.countdown_container}>
            <div className={styles.countdown_box}>
              <p>
                {remainingTime.days >= 10
                  ? remainingTime.days
                  : "0" + remainingTime.days}
              </p>
            </div>
            <h1 className={styles.countdown_name}>DAYS</h1>
          </div>
          <span className={styles.countdown_colon}>:</span>
          <div className={styles.countdown_container}>
            <div className={styles.countdown_box}>
              <p>
                {remainingTime.hours >= 10
                  ? remainingTime.hours
                  : "0" + remainingTime.hours}
              </p>
            </div>
            <h1 className={styles.countdown_name}>HOURS</h1>
          </div>
          <span className={styles.countdown_colon}>:</span>
          <div className={styles.countdown_container}>
            <div className={styles.countdown_box}>
              <p>
                {remainingTime.minutes >= 10
                  ? remainingTime.minutes
                  : "0" + remainingTime.minutes}
              </p>
            </div>
            <h1 className={styles.countdown_name}>MINUTES</h1>
          </div>
          <span className={styles.countdown_colon}>:</span>
          <div className={styles.countdown_container}>
            <div className={styles.countdown_box}>
              <p>
                {remainingTime.seconds >= 10
                  ? remainingTime.seconds
                  : "0" + remainingTime.seconds}
              </p>
            </div>
            <h1 className={styles.countdown_name}>SECONDS</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
