import styles from "./nav-bar1.module.css";

const NavBar1 = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarChild} />
      <img
        className={styles.hobbycueLogoV21}
        alt=""
        src="/hobbycue-logo-v2-1@2x.png"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.searchHere}>Search here...</div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <img
            className={styles.icons8Search1}
            alt=""
            src="/icons8-search-1.svg"
          />
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.exploreParent}>
          <div className={styles.explore}>Explore</div>
          <img className={styles.exploreIcon} alt="" src="/explore.svg" />
          <img
            className={styles.icons8ExpandArrow1}
            alt=""
            src="/icons8-expand-arrow-1.svg"
          />
        </div>
        <div className={styles.hobbiesParent}>
          <div className={styles.hobbies}>Hobbies</div>
          <img className={styles.hobbiesIcon} alt="" src="/hobbies.svg" />
          <img
            className={styles.icons8ExpandArrow11}
            alt=""
            src="/icons8-expand-arrow-1.svg"
          />
        </div>
        <img
          className={styles.bookmarkBlack24dp1Icon}
          alt=""
          src="/bookmark-black-24dp-1.svg"
        />
        <img
          className={styles.notificationsBlack24dp1Icon}
          alt=""
          src="/notifications-black-24dp-1.svg"
        />
        <img className={styles.product3Icon} alt="" src="/product-3.svg" />
        <img className={styles.groupInner} alt="" src="/ellipse-23@2x.png" />
        <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
      </div>
    </nav>
  );
};

export default NavBar1;
