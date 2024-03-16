import styles from "./end1.module.css";

const End1 = () => {
  return (
    <div className={styles.end}>
      <div className={styles.endChild} />
      <div className={styles.yourHobbyYourCommunityParent}>
        <h1 className={styles.yourHobbyYourContainer}>
          <span>{`Your `}</span>
          <span className={styles.hobby}>Hobby</span>
          <span>{`, Your `}</span>
          <span className={styles.community}>Community...</span>
        </h1>
        <div className={styles.callToAction}>
          <div className={styles.getStartedFrame}>
            <button className={styles.getStartedWrapper}>
              <div className={styles.getStarted}>Get started</div>
            </button>
          </div>
          <div className={styles.wrapperGroup77}>
            <img
              className={styles.wrapperGroup77Child}
              loading="lazy"
              alt=""
              src="./group-77.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footerInfo}>
        <div className={styles.bodyFrame}>
          <img
            className={styles.quickLinksIcon}
            loading="lazy"
            alt=""
            src="./5820098-1.svg"
          />
        </div>
        <img
          className={styles.eventFrameIcon}
          loading="lazy"
          alt=""
          src="./5820000-1.svg"
        />
      </div>
    </div>
  );
};

export default End1;
