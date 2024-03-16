import NavBar from "../components/nav-bar";
import AgreeAndContinue from "../components/agree-and-continue";
import FrameComponent from "../components/frame-component";
import Component from "../components/component";
import GroupComponent1 from "../components/group-component1";
import styles from "./landing-page-join-in.module.css";

const LandingPageJoinIn = () => {
  return (
    <div className={styles.landingPageJoinIn}>
      <NavBar />
      <main className={styles.emailText}>
        <section className={styles.homeScreen}>
          <div className={styles.homeScreenChild} />
          <AgreeAndContinue />
          <div className={styles.fRAME}>
            <form className={styles.iNSTANCE}>
              <div className={styles.rectangle}>
                <div className={styles.signinjoinin}>
                  <div className={styles.signInParent}>
                    <div className={styles.signIn}>Sign In</div>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.joinInParent}>
                    <input
                      className={styles.joinIn}
                      placeholder="Join In"
                      type="text"
                    />
                    <div className={styles.gROUP} />
                  </div>
                </div>
              </div>
              <FrameComponent />
              <div className={styles.connectWithSeparator}>
                <div className={styles.fRAME1}>
                  <div className={styles.fRAMEChild} />
                </div>
                <div className={styles.orConnectWith}>Or connect with</div>
                <div className={styles.fRAME2}>
                  <div className={styles.fRAMEItem} />
                </div>
              </div>
              <div className={styles.inputFieldContainer}>
                <div className={styles.emailInput}>
                  <div className={styles.inputFields}>
                    <input
                      className={styles.email}
                      placeholder="Email"
                      type="text"
                    />
                  </div>
                </div>
                <Component />
                <div className={styles.textLabel}>
                  <div className={styles.byContinuingYouContainer}>
                    <span
                      className={styles.byContinuingYou}
                    >{`By continuing, you agree to our `}</span>
                    <span className={styles.termsOfService}>
                      Terms of Service
                    </span>
                    <span className={styles.and}>{` and `}</span>
                    <span className={styles.privacyPolicy}>Privacy Policy</span>
                    <span className={styles.span}>.</span>
                  </div>
                </div>
                <button className={styles.buttons}>
                  <div className={styles.agreeAndContinue}>
                    Agree and Continue
                  </div>
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className={styles.feature1}>
          <div className={styles.feature1Child} />
          <div className={styles.peopleGroupParent}>
            <div className={styles.peopleGroup}>
              <GroupComponent1
                groupsBlack24dp11="/groups-black-24dp-1-1.svg"
                people="People"
                findATeacherCoachOrExpert="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
                connect="Connect"
              />
              <GroupComponent1
                groupsBlack24dp11="/location-on-black-24dp-1.svg"
                people="Place"
                findATeacherCoachOrExpert="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
                connect="Meet up"
                propGap="32px"
                propWidth="unset"
                propFlex="unset"
                propAlignSelf="unset"
                propHeight="unset"
                propHeight1="unset"
                propPadding="var(--padding-xs) var(--padding-12xl)"
              />
            </div>
            <div className={styles.peopleGroup1}>
              <GroupComponent1
                groupsBlack24dp11="/shopping-basket-black-24dp-2-1.svg"
                people="Product"
                findATeacherCoachOrExpert="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
                connect="Get it"
                propGap="32px"
                propWidth="160px"
                propFlex="1"
                propAlignSelf="stretch"
                propHeight="36px"
                propHeight1="81px"
                propPadding="var(--padding-xs) var(--padding-22xl)"
              />
              <GroupComponent1
                groupsBlack24dp11="/event-available-black-24dp-2.svg"
                people="Program"
                findATeacherCoachOrExpert="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
                connect="Attend"
                propGap="59px"
                propWidth="171px"
                propFlex="1"
                propAlignSelf="stretch"
                propHeight="36px"
                propHeight1="54px"
                propPadding="var(--padding-xs) var(--padding-16xl) var(--padding-xs) var(--padding-17xl)"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPageJoinIn;
