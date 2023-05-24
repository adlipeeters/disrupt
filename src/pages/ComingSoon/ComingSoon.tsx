import React from "react";
import BackgroundVideo from "./components/BackgroundVideo";
import CountdownTimer from "./components/Countdown";
import { Container } from "@mui/material";
import Header from "../../layout/Header";
import styles from "./style.module.css";
import Footer from "../../layout/Footer";
import { ReactComponent as ContactIcon } from "../../assets/contact.svg";
import ContactDialog from "./components/ContactDialog";

const ComingSoon = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Header />
        <div className={styles.hero_wrapper}>
          <div className={styles.absolute}></div>
          <div>
            <h1 className={styles.hero_title}>
              WE ARE UNDER
              <br /> CONSTRUCTION
            </h1>
          </div>
          <div>
            <CountdownTimer />
          </div>
          <div>
            <button
              className={styles.hero_button}
              onClick={() => setOpen(true)}
            >
              <span>Contact Us</span>
              <ContactIcon />
            </button>
          </div>
        </div>
        <Footer />
        <BackgroundVideo />
      </Container>
      <ContactDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default ComingSoon;
