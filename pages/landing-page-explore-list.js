import NavBar from "../components/nav-bar";
import AgreeAndContinue from "../components/agree-and-continue";
import FrameComponent from "../components/frame-component";
import Component from "../components/component";
import GroupComponent1 from "../components/group-component1";
import Footer1 from "../components/footer1";
import styles from "./landing-page-explore-list.module.css";

const LandingPageExploreList = () => {
  return (
    <div className={styles.landingPageExploreList}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.areYouA}>
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </div>
        <div className={styles.addYourOwn}>Add your own</div>
        <img className={styles.addIcon} alt="" src="/add.svg" />
        <div className={styles.addNewWrapper}>
          <div className={styles.addNew}>Add new</div>
        </div>
      </div>
      <main className={styles.frameFooter}>
        <NavBar />
        <section className={styles.text}>
          <form className={styles.rectangle}>
            <div className={styles.homeScreen}>
              <div className={styles.homeScreenChild} />
              <AgreeAndContinue
                propMinWidth="unset"
                propDisplay="inline-block"
              />
              <div className={styles.homeScreenInner}>
                <div className={styles.frameParent}>
                  <div className={styles.signinjoininWrapper}>
                    <div className={styles.signinjoinin}>
                      <div className={styles.signInParent}>
                        <div className={styles.signIn}>Sign In</div>
                        <div className={styles.frameItem} />
                      </div>
                      <div className={styles.joinInParent}>
                        <input
                          className={styles.joinIn}
                          placeholder="Join In"
                          type="text"
                        />
                        <div className={styles.frameInner} />
                      </div>
                    </div>
                  </div>
                  <FrameComponent />
                  <div className={styles.connectWithSeparator}>
                    <div className={styles.frameforHobbiesYourCommunit}>
                      <div className={styles.frameGroupBanner} />
                    </div>
                    <div className={styles.orConnectWith}>Or connect with</div>
                    <div className={styles.frameforHobbiesYourCommunit1}>
                      <div
                        className={styles.frameforHobbiesYourCommunitChild}
                      />
                    </div>
                  </div>
                  <form className={styles.rectangleGroup}>
                    <div className={styles.byline}>
                      <div className={styles.inputFields}>
                        <input
                          className={styles.email}
                          placeholder="Email"
                          type="text"
                        />
                      </div>
                    </div>
                    <Component />
                    <div className={styles.locationTag}>
                      <div className={styles.byContinuingYouContainer}>
                        <span
                          className={styles.byContinuingYou}
                        >{`By continuing, you agree to our `}</span>
                        <span className={styles.termsOfService}>
                          Terms of Service
                        </span>
                        <span className={styles.and}>{` and `}</span>
                        <span className={styles.privacyPolicy}>
                          Privacy Policy
                        </span>
                        <span className={styles.span}>.</span>
                      </div>
                    </div>
                    <button className={styles.buttons}>
                      <div className={styles.agreeAndContinue}>
                        Agree and Continue
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className={styles.filterLabel}>
              <div className={styles.exploreList}>
                <div className={styles.textFrameSmallText}>
                  <div className={styles.frameYourHobbyYourCommunit}>
                    <div className={styles.peopleCommunity}>
                      People - Community
                    </div>
                  </div>
                  <div className={styles.frameContainer} />
                </div>
                <div className={styles.textFrameSmallText1}>
                  <div className={styles.placesVenuesWrapper}>
                    <div className={styles.placesVenues}>Places - Venues</div>
                  </div>
                  <div className={styles.textFrameSmallTextChild} />
                </div>
                <div className={styles.textFrameSmallText2}>
                  <div className={styles.programsEventsWrapper}>
                    <div className={styles.programsEvents}>
                      Programs - Events
                    </div>
                  </div>
                  <div className={styles.textFrameSmallTextItem} />
                </div>
                <div className={styles.textFrameSmallText3}>
                  <div className={styles.productsStoreWrapper}>
                    <div className={styles.productsStore}>Products - Store</div>
                  </div>
                  <div className={styles.textFrameSmallTextInner} />
                </div>
                <div className={styles.textFrameSmallText4}>
                  <div className={styles.blogs}>Blogs</div>
                </div>
              </div>
            </div>
          </form>
          <div className={styles.textChild} />
          <div className={styles.feature1}>
            <div className={styles.feature1Child} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <GroupComponent1
                  groupsBlack24dp11="/groups-black-24dp-1-1.svg"
                  people="People"
                  findATeacherCoachOrExpert="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
                  connect="Connect"
                  propGap="32px"
                  propWidth="unset"
                  propFlex="unset"
                  propAlignSelf="unset"
                  propHeight="unset"
                  propHeight1="unset"
                  propPadding="var(--padding-xs) var(--padding-10xl) var(--padding-xs) var(--padding-11xl)"
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
              <div className={styles.frameParent1}>
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
          </div>
        </section>
      </main>
      <div className={styles.frameParent2}>
        <div className={styles.testimonialsParent}>
          <div className={styles.testimonials}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <div className={styles.addParent}>
                <img className={styles.addIcon1} alt="" src="/add-1.svg" />
                <div className={styles.addYourOwnWrapper}>
                  <h2 className={styles.addYourOwn1}>Add your own</h2>
                </div>
              </div>
              <div className={styles.areYouA1}>
                Are you a teacher or expert? Do you sell or rent out equipment,
                venue or event tickets? Or, you know someone who should be on
                hobbycue? Go ahead and Add your Own page
              </div>
              <div className={styles.addNewContainer}>
                <div className={styles.addNew1}>Add new</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonials1}>
            <div className={styles.groupDiv}>
              <div className={styles.frameChild1} />
              <div className={styles.quoteParent}>
                <img className={styles.quoteIcon} alt="" src="/quote@2x.png" />
                <div className={styles.testimonialsWrapper}>
                  <h2 className={styles.testimonials2}>Testimonials</h2>
                </div>
              </div>
              <div className={styles.inAFastGrowingAndEverChaWrapper}>
                <div className={styles.inAFast}>
                  In a fast growing and ever changing city like Bangalore, it
                  sometimes becomes very difficult to find or connect with like
                  minded people. Websites like hobbycue.com is a great service
                  which helps me get in touch with, communicate, connect, and
                  exchange ideas with other dancers. It also provides the extra
                  benefit of finding products and services that I can avail,
                  which I can be assured is going to be of great quality as it
                  comes recommended by people of the hobbycue community. To have
                  discussions, to get visibility, and to be able to safely
                  explore various hobbies and activities in my city, all under
                  one roof, is an excellent idea and I highly recommend it.
                </div>
              </div>
              <div className={styles.containerFrame}>
                <div className={styles.audioTrack}>
                  <div className={styles.audioTrackChild} />
                  <div className={styles.ellipseShapeParent}>
                    <div className={styles.ellipseShape} />
                    <img
                      className={styles.playArrowBlack24dp1Icon}
                      alt=""
                      src="/play-arrow-black-24dp-1.svg"
                    />
                  </div>
                  <div className={styles.audioTrackItem} />
                  <img
                    className={styles.audioTrackInner}
                    alt=""
                    src="/ellipse-26@2x.png"
                  />
                  <img
                    className={styles.micBlack24dp1Icon}
                    alt=""
                    src="/mic-black-24dp-1.svg"
                  />
                  <div className={styles.frameParent3}>
                    <div className={styles.rectangleWrapper}>
                      <div className={styles.frameChild2} />
                    </div>
                    <div className={styles.div}>0:00</div>
                  </div>
                </div>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-12@2x.png"
                  />
                  <div className={styles.frameWrapper}>
                    <div className={styles.shubhaNagarajanParent}>
                      <div className={styles.shubhaNagarajan}>
                        Shubha Nagarajan
                      </div>
                      <div className={styles.classicalDancer}>
                        Classical Dancer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.end}>
          <div className={styles.endChild} />
          <img
            className={styles.hobbyCommunityIcon}
            alt=""
            src="/5820000-1.svg"
          />
          <div className={styles.yourHobbyFrameParent}>
            <div className={styles.yourHobbyFrame}>
              <h1 className={styles.yourHobbyYourContainer}>
                <span>{`Your `}</span>
                <span className={styles.hobby}>Hobby</span>
                <span>{`, Your `}</span>
                <span className={styles.community}>Community...</span>
              </h1>
              <div className={styles.rectangleParent1}>
                <div className={styles.frameChild3} />
                <h3 className={styles.getStarted}>Get started</h3>
              </div>
            </div>
            <img
              className={styles.footerFrameIcon}
              alt=""
              src="/5820098-1.svg"
            />
          </div>
          <img className={styles.endItem} alt="" src="/group-77.svg" />
        </div>
        <Footer1 />
      </div>
    </div>
  );
};

export default LandingPageExploreList;
