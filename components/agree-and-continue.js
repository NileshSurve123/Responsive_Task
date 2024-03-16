import { useMemo } from "react";
import styles from "./agree-and-continue.module.css";

const AgreeAndContinue = ({ propMinWidth, propDisplay }) => {
  const agreeAndContinueStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const signInToInteractStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={styles.agreeAndContinue} style={agreeAndContinueStyle}>
      <div className={styles.termsOfService}>
        <h1 className={styles.exploreYourHobbyContainer}>
          <span>Explore your</span>
          <span className={styles.hobby}> hobby</span>
          <span>{` or `}</span>
          <span className={styles.passion}>passion</span>
        </h1>
        <div className={styles.exploreYourHobby}>
          <div
            className={styles.signInToInteract}
            style={signInToInteractStyle}
          >
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </div>
          <div className={styles.signInFrame}>
            <div className={styles.ifYouAre}>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fRAME}>
        <img
          className={styles.rECTANGLE}
          loading="lazy"
          alt=""
          src="/5793404-1.svg"
        />
        <img
          className={styles.rECTANGLE1}
          loading="lazy"
          alt=""
          src="/5793401-1.svg"
        />
      </div>
    </div>
  );
};

export default AgreeAndContinue;
