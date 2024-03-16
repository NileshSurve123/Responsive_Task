import styles from "./nav-bar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.frameJoinIn} />
      <div className={styles.hobbycueLogoV21Parent}>
        <img
          className={styles.hobbycueLogoV21}
          loading="lazy"
          alt=""
          src="./hobbycue-logo@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameSearchHere}>
              <div className={styles.searchHere}>Search here...</div>
            </div>
            <div className={styles.frameNotificationsBlackDpParent}>
              <div className={styles.frameNotificationsBlackDp} />
              <img
                className={styles.icons8Search1}
                loading="lazy"
                alt=""
                src="./icons8-search-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameExploreIconsExpandArr}>
        <div className={styles.homeScreenFrameParent}>
          <div className={styles.homeScreenFrame}>
            <div className={styles.exploreParent}>
              <img className={styles.exploreIcon} alt="" src="./explore.svg" />
              <div className={styles.connectWithSeparator}>
                <div className={styles.explore}>Explore</div>
              </div>
              <img
                className={styles.icons8ExpandArrow1}
                alt=""
                src="./icons8-expand-arrow-1.svg"
              />
            </div>
          </div>
          <div className={styles.bookmarkFrame}>
            <div className={styles.productFrameParent}>
              <div className={styles.productFrame}>
                <img className={styles.hobbiesIcon} alt="" src="./hobbies.svg" />
                <div className={styles.hobbies}>
                  <img
                    className={styles.signInText}
                    alt=""
                    src="./remember-me-button.svg"
                  />
                  <img
                    className={styles.exploreGroupIcon}
                    loading="lazy"
                    alt=""
                    src="./buttons.svg"
                  />
                </div>
              </div>
              <div className={styles.homeScreenFrame1}>
                <div className={styles.hobbies1}>Hobbies</div>
              </div>
              <img
                className={styles.icons8ExpandArrow11}
                alt=""
                src="./icons8-expand-arrow-1.svg"
              />
            </div>
          </div>
          <div className={styles.bookmarkDP}>
            <img
              className={styles.bookmarkBlack24dp1Icon}
              loading="lazy"
              alt=""
              src="./bookmark-black-24dp-1.svg"
            />
          </div>
          <div className={styles.bookmarkDP1}>
            <img
              className={styles.notificationsBlack24dp1Icon}
              loading="lazy"
              alt=""
              src="./notifications-black-24dp-1.svg"
            />
          </div>
          <div className={styles.bookmarkDP2}>
            <img
              className={styles.product3Icon}
              loading="lazy"
              alt=""
              src="./product-3.svg"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.agreeTermsButtonParent}>
              <div className={styles.agreeTermsButton} />
              <div className={styles.signIn}>Sign In</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
