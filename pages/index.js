import MainContent from "../components/main-content";
import Text1 from "../components/text1";
import GroupComponent from "../components/group-component";
import Testimonials1 from "../components/testimonials1";
import Testimonials from "../components/testimonials";
import End from "../components/end";
import Footer from "../components/footer";
import styles from "./index.module.css";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

const LandingPageSignIn = () => {
  return (
    <div className={styles.landingPageSignIn}>
      <MainContent />
      <main className={styles.text}>
        <Text1 />
        <section className={styles.postABlog}>
          <div className={styles.feature1}>
            <div className={styles.feature1Child} />
            <div className={styles.hobbySearchPanelParent}>
              <div className={styles.hobbySearchPanel}>
                <GroupComponent
                  groupsBlack24dp11="./groups-black-24dp-1-1.svg"
                  people="People"
                  findATeacherCoachOrExpert="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
                  connect="Connect"
                />
                <GroupComponent
                  groupsBlack24dp11="./location-on-black-24dp-1.svg"
                  people="Place"
                  findATeacherCoachOrExpert="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
                  connect="Meet up"
                  propGap="32px"
                  propHeight="unset"
                  propPadding="var(--padding-xs) var(--padding-12xl)"
                />
              </div>
              <div className={styles.hobbySearchPanel1}>
                <GroupComponent
                  groupsBlack24dp11="./shopping-basket-black-24dp-2-1.svg"
                  people="Product"
                  findATeacherCoachOrExpert="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
                  connect="Get it"
                  propGap="32px"
                  propHeight="unset"
                  propPadding="var(--padding-xs) var(--padding-22xl)"
                />
                <GroupComponent
                  groupsBlack24dp11="./event-available-black-24dp-2.svg"
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
      <End />
      <Footer />
    </div>
  );
};

export default LandingPageSignIn;
