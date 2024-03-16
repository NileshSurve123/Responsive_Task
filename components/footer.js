import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.headerGroupFooter}>
        <div className={styles.hobbycueFrame}>
          <div className={styles.purpleCuesPrivateLimitedFr}>
            <div className={styles.hobbycueAboutUs}>
              <b className={styles.hobbycue}>Hobbycue</b>
              <div className={styles.aboutUs}>About Us</div>
            </div>
            <div className={styles.hobbycueAboutUs1}>
              <b className={styles.howDoI}>How Do I</b>
              <div className={styles.signUp}>Sign Up</div>
            </div>
            <div className={styles.hobbycueAboutUs2}>
              <b className={styles.quickLinks}>Quick Links</b>
              <div className={styles.listings}>Listings</div>
            </div>
            <div className={styles.socialMediaFrame}>
              <b className={styles.socialMedia}>Social Media</b>
              <div className={styles.frameParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-60.svg"
                />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/group-61.svg"
                />
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/group-62.svg"
                />
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-63.svg"
                />
                <img
                  className={styles.frameChild1}
                  loading="lazy"
                  alt=""
                  src="/group-59.svg"
                />
                <img
                  className={styles.frameChild2}
                  loading="lazy"
                  alt=""
                  src="/group-58.svg"
                />
                <img
                  className={styles.frameChild3}
                  loading="lazy"
                  alt=""
                  src="/group-57.svg"
                />
                <img
                  className={styles.frameChild4}
                  alt=""
                  src="/group-56.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.footerContent}>
            <div className={styles.aboutUsLinkGroup}>
              <div className={styles.ourServices}>Our Services</div>
              <div className={styles.workWithUs}>Work with Us</div>
              <div className={styles.faq}>FAQ</div>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
            <div className={styles.addListing}>
              <div className={styles.addAListing}>Add a Listing</div>
              <div className={styles.claimListing}>Claim Listing</div>
              <div className={styles.postAQuery}>Post a Query</div>
              <div className={styles.addABlog}>Add a Blog Post</div>
              <div className={styles.otherQueries}>Other Queries</div>
            </div>
            <div className={styles.postQuery}>
              <div className={styles.blogPosts}>Blog Posts</div>
              <div className={styles.shopStore}>Shop / Store</div>
              <div className={styles.community}>Community</div>
            </div>
            <div className={styles.sharingHubFrame}>
              <div className={styles.purpleCuesLogo}>
                <b className={styles.inviteFriends}>Invite Friends</b>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.contactInviterInput}>
                    <div className={styles.emailId}>Email ID</div>
                  </div>
                  <button className={styles.listings1}>
                    <div className={styles.listingsChild} />
                    <div className={styles.invite}>Invite</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.rectangleGroup}>
        <div className={styles.frameChild5} />
        <div className={styles.purpleCuesPrivate}>
          © Purple Cues Private Limited
        </div>
      </footer>
    </div>
  );
};

export default Footer;
