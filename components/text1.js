import { useMemo } from "react";
import styles from "./text1.module.css";

const Text1 = ({
  propPadding,
  propAlignSelf,
  propMaxHeight,
  propHeight,
  propAlignSelf1,
  propMaxHeight1,
  propHeight1,
}) => {
  const continueButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameGroupIconStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      maxHeight: propMaxHeight,
      height: propHeight,
    };
  }, [propAlignSelf, propMaxHeight, propHeight]);

  const frameGroupIcon1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      maxHeight: propMaxHeight1,
      height: propHeight1,
    };
  }, [propAlignSelf1, propMaxHeight1, propHeight1]);

  return (
    <section className={styles.text}>
      <form className={styles.homeScreen}>
        <div className={styles.homeScreenChild} />
        <div className={styles.socialMediaFrame}>
          <div className={styles.inviteFriendsFrame}>
            <h1 className={styles.exploreYourHobbyContainer}>
              <span className={styles.exploreYour}>Explore your</span>
              <span className={styles.hobby}> hobby</span>
              <span className={styles.or}>{` or `}</span>
              <span className={styles.passion}>passion</span>
            </h1>
            <div className={styles.hobbySearch}>
              <div className={styles.signInToInteract}>
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </div>
              <div className={styles.logo}>
                <div className={styles.ifYouAre}>
                  If you are an expert or a seller, you can Add your Listing and
                  promote yourself, your students, products, services or events.
                  Hop on your hobbyhorse and enjoy the ride.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleWrapper}>
            <div className={styles.rectangle}>
              <div className={styles.signinjoinin}>
                <div className={styles.signInParent}>
                  <div className={styles.signIn}>Sign In</div>
                  <div className={styles.frame} />
                </div>
                <div className={styles.joinInParent}>
                  <div className={styles.joinIn}>Join In</div>
                  <div className={styles.frameChild} />
                </div>
              </div>
              <div className={styles.findTeacher}>
                <div className={styles.group}>
                  <button className={styles.loginWithOtherAccounts}>
                    <img
                      className={styles.googleIcon}
                      alt=""
                      src="./google.svg"
                    />
                    <div className={styles.continueWithGoogle}>
                      Continue with Google
                    </div>
                  </button>
                  <button className={styles.loginWithOtherAccounts1}>
                    <img
                      className={styles.facebookIcon}
                      alt=""
                      src="./facebook.svg"
                    />
                    <div className={styles.continueWithFacebook}>
                      Continue with Facebook
                    </div>
                  </button>
                </div>
                <div className={styles.connectWithSeparator}>
                  <div className={styles.hobbySearch1}>
                    <div className={styles.frameTitle} />
                  </div>
                  <div className={styles.orConnectWith}>Or connect with</div>
                  <div className={styles.hobbySearch2}>
                    <div className={styles.hobbySearchChild} />
                  </div>
                </div>
                <div className={styles.group1}>
                  <div className={styles.inputFields}>
                    <input
                      className={styles.email}
                      placeholder="Email"
                      type="text"
                    />
                  </div>
                  <div className={styles.component7}>
                    <input
                      className={styles.password}
                      placeholder="Password"
                      type="text"
                    />
                    <img
                      className={styles.passwordIcon}
                      alt=""
                      src="./password.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleButton}>
          <div className={styles.textInput}>
            <div className={styles.continueButton} style={continueButtonStyle}>
              <img
                className={styles.frameGroupIcon}
                loading="lazy"
                alt=""
                src="./5793404-1.svg"
                style={frameGroupIconStyle}
              />
              <img
                className={styles.frameGroupIcon1}
                loading="lazy"
                alt=""
                src="./5793401-1.svg"
                style={frameGroupIcon1Style}
              />
            </div>
          </div>
          <div className={styles.peopleGroups}>
            <div className={styles.findTeacher1}>
              <div className={styles.groupSubgroup}>
                <input className={styles.checkbox} type="checkbox" />
                <div className={styles.rememberMe}>Remember me</div>
              </div>
              <div className={styles.socialMediaLinks}>
                <img
                  className={styles.lockBlack24dp1Icon}
                  alt=""
                  src="./lock-black-24dp-1.svg"
                />
                <div className={styles.forgotPassword}>Forgot password?</div>
              </div>
            </div>
            <button className={styles.buttons}>
              <div className={styles.continue}>Continue</div>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Text1;
