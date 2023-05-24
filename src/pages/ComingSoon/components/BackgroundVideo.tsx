import React from "react";
import styles from "../style.module.css";
import images from "../../../constants";

const BackgroundVideo = () => {
  return (
    <div className={styles.background_video}>
      <video autoPlay loop muted>
        <source src={images.background_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
