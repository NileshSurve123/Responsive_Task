
import styles from "./main-content.module.css"

const Frame = () => {
  return (
    <div className={styles.hobbycueLogoV21Parent}>
      <img
        className={styles.hobbycueLogoV21}
        alt=""
        src="./hobbycue-logo-v2-1@2x.png"
      />
      <div className={styles.searchHereParent}>
        <div className={styles.searchHere}>Search here...</div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img
            className={styles.icons8Search1}
            alt=""
            src="/icons8-search-1.svg"
          />
        </div>
      </div>
      <section className={styles.groupParent}>
        <div className={styles.exploreParent}>
          <div className={styles.explore}>Explore</div>
          <div className={styles.explore1}>
            <img className={styles.layer2Icon} alt="" src="/layer-2.svg" />
          </div>
          <div className={styles.icons8ExpandArrow1}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
        <div className={styles.hobbiesParent}>
          <div className={styles.hobbies}>
            <img className={styles.layer2Icon} alt="" src="/vector-1.svg" />
          </div>
          <div className={styles.hobbies1}>Hobbies</div>
          <div className={styles.hobbies}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
        <img
          className={styles.bookmarkBlack24dp1Icon}
          alt=""
          src="/bookmark-black-24dp-1.svg"
        />
        <img
          className={styles.bookmarkBlack24dp1Icon}
          alt=""
          src="/notifications-black-24dp-1.svg"
        />
        <div className={styles.product3}>
          <img className={styles.vectorIcon3} alt="" src="/vector-3.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector-4.svg" />
          <img className={styles.vectorIcon5} alt="" src="/vector-4.svg" />
        </div>
        <img className={styles.frameChild} alt="" src="/ellipse-23@2x.png" />
        <div className={styles.arrow}>
          <img className={styles.vectorIcon6} alt="" />
          <img className={styles.vectorIcon7} alt="" src="/vector-7.svg" />
        </div>
      </section>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon8} alt="" src="/vector-8.svg" />
      </div>
    </div>
  );
};

export default Frame;
