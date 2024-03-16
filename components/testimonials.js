import styles from "./testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.listingsFrame}>
          <img
            className={styles.quoteIcon}
            loading="lazy"
            alt=""
            src="./quote@2x.png"
          />
          <div className={styles.hobbycueAboutUs}>
            <h2 className={styles.testimonials1}>Testimonials</h2>
          </div>
        </div>
        <div className={styles.ctrlHomeFrame}>
          <div className={styles.inAFast}>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </div>
          <div className={styles.audioTrackParent}>
            <div className={styles.audioTrack}>
              <div className={styles.audioTrackChild} />
              <div className={styles.frameFooter}>
                <div className={styles.mediaPlayerTestimonial} />
                <img
                  className={styles.playArrowBlack24dp1Icon}
                  loading="lazy"
                  alt=""
                  src="./play-arrow-black-24dp-1.svg"
                />
              </div>
              <div className={styles.audioControl} />
              <img
                className={styles.playArrowIcon}
                loading="lazy"
                alt=""
                src="./ellipse-26@2x.png"
              />
              <img
                className={styles.micBlack24dp1Icon}
                alt=""
                src="./mic-black-24dp-1.svg"
              />
              <div className={styles.quoteFrame}>
                <div className={styles.textarea}>
                  <div className={styles.textareaChild} />
                </div>
                <div className={styles.locationFrame}>0:00</div>
              </div>
            </div>
            <div className={styles.quoteReviewCollection}>
              <img
                className={styles.userProfileIcon}
                loading="lazy"
                alt=""
                src="./ellipse-12@2x.png"
              />
              <div className={styles.sharpCorner}>
                <div className={styles.testimonialSpeaker}>
                  <div className={styles.shubhaNagarajan}>Shubha Nagarajan</div>
                  <div className={styles.classicalDancer}>Classical Dancer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
