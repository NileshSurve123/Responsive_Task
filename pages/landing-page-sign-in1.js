import MainContent from "../components/main-content";
import Text1 from "../components/text1";
import GroupComponent from "../components/group-component";
import Testimonials1 from "../components/testimonials1";
import Testimonials from "../components/testimonials";
import End1 from "../components/end1";
import Footer from "../components/footer";
import styles from "./landing-page-sign-in1.module.css";

const LandingPageSignIn1 = () => {
  return (
    <div className={styles.landingPageSignIn}>
      <MainContent />
      <main className={styles.frameParent}>
        <Text1
          propPadding="unset"
          propAlignSelf="unset"
          propMaxHeight="unset"
          propHeight="216px"
          propAlignSelf1="unset"
          propMaxHeight1="unset"
          propHeight1="216px"
        />
        <section className={styles.feature1Wrapper}>
          <div className={styles.feature1}>
            <div className={styles.feature1Child} />
            <div className={styles.groupsFrameParent}>
              <div className={styles.groupsFrame}>
                <GroupComponent
                  groupsBlack24dp11="/groups-black-24dp-1-1.svg"
                  people="People"
                  findATeacherCoachOrExpert="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
                  connect="Connect"
                  propGap="32px"
                  propHeight="unset"
                  propPadding="var(--padding-xs) var(--padding-10xl) var(--padding-xs) var(--padding-11xl)"
                />
                <GroupComponent
                  groupsBlack24dp11="/location-on-black-24dp-1.svg"
                  people="Place"
                  findATeacherCoachOrExpert="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
                  connect="Meet up"
                  propGap="32px"
                  propHeight="unset"
                  propPadding="var(--padding-xs) var(--padding-12xl)"
                />
              </div>
              <div className={styles.groupsFrame1}>
                <GroupComponent
                  groupsBlack24dp11="/shopping-basket-black-24dp-2-1.svg"
                  people="Product"
                  findATeacherCoachOrExpert="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
                  connect="Get it"
                  propGap="32px"
                  propHeight="unset"
                  propPadding="var(--padding-xs) var(--padding-22xl)"
                />
                <GroupComponent
                  groupsBlack24dp11="/event-available-black-24dp-2.svg"
                  people="Program"
                  findATeacherCoachOrExpert="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
                  connect="Attend"
                  propGap="59px"
                  propHeight="unset"
                  propPadding="var(--padding-xs) var(--padding-16xl)"
                />
              </div>
            </div>
          </div>
        </section>
        <Testimonials1 />
        <Testimonials />
      </main>
      <End1 />
      <Footer />
    </div>
  );
};

export default LandingPageSignIn1;
