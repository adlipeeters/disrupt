import React from "react";
import styles from "../style.module.css";
import images from "../../../constants";

const BackgroundVideo = () => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <div className={styles.background_video}>
      <video ref={videoRef} autoPlay loop muted playsinline>
        <source src={images.background_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
