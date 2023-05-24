import React from "react";
import styles from "../style.module.css";
import images from "../../../constants";

const BackgroundVideo = () => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef) {
      videoRef.current.play();
    }
  }, [videoRef]);
  return (
    <div className={styles.background_video}>
      <video autoPlay={true} loop muted ref={videoRef}>
        <source src={images.background_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
