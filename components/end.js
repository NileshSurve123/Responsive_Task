import styles from "./end.module.css";

const End = () => {
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
        <div className={styles.footerFrameParent}>
          <div className={styles.footerFrame}>
            <div className={styles.footerBottomFrame}>
              <div className={styles.testimonialQuote}>
                <button className={styles.getStartedWrapper}>
                  <div className={styles.getStarted}>Get started</div>
                </button>
              </div>
              <div className={styles.wrapperGroup77}>
                <img
                  className={styles.wrapperGroup77Child}
                  loading="lazy"
                  alt=""
                  src="/group-77.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.goToTopCtrlhomeWrapper}>
            <div className={styles.goToTop}>Go to top (Ctrl+Home)</div>
          </div>
        </div>
      </div>
      <div className={styles.footerFrameGroup}>
        <div className={styles.footerFrame1}>
          <img
            className={styles.topFrameIcon}
            loading="lazy"
            alt=""
            src="/5820098-1.svg"
          />
        </div>
        <img
          className={styles.rightFrameIcon}
          loading="lazy"
          alt=""
          src="/5820000-1.svg"
        />
      </div>
    </div>
  );
};

export default End;
