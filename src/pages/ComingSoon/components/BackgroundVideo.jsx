// import React from "react";

// const BackgroundVideo = () => {
//   const videoRef = React.useRef(null);

//   React.useEffect(() => {
//     videoRef.current.play();
//   }, []);
//   return (
//     <div className={styles.background_video}>
//       <video
//         ref={videoRef}
//         autoPlay={true}
//         loop={true}
//         muted={true}
//         playsinline={true}
//         src={images.background_video}
//       >
//         {/* <source src={images.background_video} type="video/mp4" />
//         Your browser does not support the video tag. */}
//       </video>
//     </div>
//   );
// };

// export default BackgroundVideo;

import React, { useRef, useState, useEffect } from "react";
import styles from "../style.module.css";
import images from "../../../constants";

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

const mainVideo = images.background_video;

export default function App() {
  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);
  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0];

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", ""); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = "none";
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  }, []);

  return shouldUseImage ? (
    <img src={mainVideo} alt="Muted Video" />
  ) : (
    <div
      // className={styles.background_video}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2,
      }}
      ref={videoParentRef}
      dangerouslySetInnerHTML={{
        __html: `
        <video
        style=" width: 100%;
    height: 100%;
    object-fit: cover;"
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
        >
        <source src="${mainVideo}" type="video/mp4" />
        </video>`,
      }}
    />
  );
}
