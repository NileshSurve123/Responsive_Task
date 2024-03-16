import NavBar1 from "./nav-bar1";
import styles from "./group.module.css";

const Group = () => {
  return (
    <div className={styles.navbarParent}>
      <div className={styles.navbar}>
        <div className={styles.navbarWrapper}>
          <NavBar1 />
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default Group;
