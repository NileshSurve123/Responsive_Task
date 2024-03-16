import styles from "./footer1.module.css";

const Footer1 = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.contactUsFrame}>
        <div className={styles.howDoISignUpFrame}>
          <div className={styles.socialMediaFrame}>
            <div className={styles.hobbycueLogo}>
              <b className={styles.hobbycue}>Hobbycue</b>
              <div className={styles.aboutUs}>About Us</div>
            </div>
            <div className={styles.hobbycueLogo1}>
              <b className={styles.howDoI}>How Do I</b>
              <div className={styles.signUp}>Sign Up</div>
            </div>
            <div className={styles.hobbycueLogo2}>
              <b className={styles.quickLinks}>Quick Links</b>
              <div className={styles.listings}>Listings</div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.socialMediaParent}>
                  <b className={styles.socialMedia}>Social Media</b>
                  <div className={styles.signUpFrame}>
                    <img
                      className={styles.signUpFrameChild}
                      alt=""
                      src="./group-60.svg"
                    />
                    <img
                      className={styles.signUpFrameItem}
                      alt=""
                      src="./group-61.svg"
                    />
                  </div>
                </div>
                <img className={styles.frameChild} alt="" src="./group-62.svg" />
              </div>
              <img className={styles.frameItem} alt="" src="./group-63.svg" />
              <img className={styles.frameInner} alt="" src="./group-59.svg" />
              <img className={styles.groupIcon} alt="" src="./group-58.svg" />
              <img className={styles.frameChild1} alt="" src="./group-57.svg" />
              <img className={styles.frameChild2} alt="" src="./group-56.svg" />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.ourServicesParent}>
              <div className={styles.ourServices}>Our Services</div>
              <div className={styles.workWithUs}>Work with Us</div>
              <div className={styles.faq}>FAQ</div>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
            <div className={styles.addAListingParent}>
              <div className={styles.addAListing}>Add a Listing</div>
              <div className={styles.claimListing}>Claim Listing</div>
              <div className={styles.postAQuery}>Post a Query</div>
              <div className={styles.addABlog}>Add a Blog Post</div>
              <div className={styles.otherQueries}>Other Queries</div>
            </div>
            <div className={styles.blogPostsParent}>
              <div className={styles.blogPosts}>Blog Posts</div>
              <div className={styles.shopStore}>Shop / Store</div>
              <div className={styles.community}>Community</div>
            </div>
            <div className={styles.inviteFriendsFrameWrapper}>
              <div className={styles.inviteFriendsFrame}>
                <b className={styles.inviteFriends}>Invite Friends</b>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.emailIDInput}>
                    <div className={styles.emailId}>Email ID</div>
                  </div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameChild3} />
                    <div className={styles.invite}>Invite</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.rectangleContainer}>
        <div className={styles.frameChild4} />
        <div className={styles.purpleCuesPrivate}>
          © Purple Cues Private Limited
        </div>
      </footer>
    </div>
  );
};

export default Footer1;
