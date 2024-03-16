import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.loginWithOtherAccountsParent}>
      <button className={styles.loginWithOtherAccounts}>
        <img className={styles.googleIcon} alt="" src="./google.svg" />
        <div className={styles.continueWithGoogle}>Continue with Google</div>
      </button>
      <button className={styles.loginWithOtherAccounts1}>
        <img className={styles.facebookIcon} alt="" src="./facebook.svg" />
        <div className={styles.continueWithFacebook}>
          Continue with Facebook
        </div>
      </button>
    </div>
  );
};

export default FrameComponent;
