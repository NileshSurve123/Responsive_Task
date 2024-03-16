import styles from "./component.module.css";

const Component = () => {
  return (
    <div className={styles.component7}>
      <div className={styles.agreeButton}>
        <input className={styles.password} placeholder="Password" type="text" />
        <img className={styles.passwordIcon} alt="" src="/password1.svg" />
      </div>
      <div className={styles.groupContainerParent}>
        <div className={styles.groupContainer} />
        <div className={styles.groupContainer1} />
        <div className={styles.groupContainer2} />
        <div className={styles.passwordStrength}>Password strength</div>
      </div>
    </div>
  );
};

export default Component;
