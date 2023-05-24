import React from "react";
import styles from "./Footer.module.css";
import images from "../constants";
import { ReactComponent as BehanceIcon } from "../assets/behance.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <a href="#" className={styles.footer_link}>
        <BehanceIcon className={styles.footer_icon} />
      </a>
      <a href="#" className={styles.footer_link}>
        <InstagramIcon className={styles.footer_icon} />
      </a>
      <a href="#" className={styles.footer_link}>
        <TwitterIcon className={styles.footer_icon} />
      </a>
      <a href="#" className={styles.footer_link}>
        <LinkedinIcon className={styles.footer_icon} />
      </a>
    </div>
  );
};

export default Footer;
