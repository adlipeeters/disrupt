import React from "react";
import images from "../constants";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => {
  return (
    <div className={styles.header__wrapper}>
      {/* <img
        src={images.logo}
        alt="Disrupt Creative Logo"
        className={styles.logo}
      /> */}
      <Logo className={styles.logo} />
    </div>
  );
};

export default Header;
