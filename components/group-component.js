import { useMemo } from "react";
import styles from "./group-component.module.css";

const GroupComponent = ({
  groupsBlack24dp11,
  people,
  findATeacherCoachOrExpert,
  connect,
  propGap,
  propHeight,
  propPadding,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const peopleStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const locationEventFrameStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.frameChild} />
      <div className={styles.lockIconBlackDP}>
        <div className={styles.findPeople}>
          <img
            className={styles.groupsBlack24dp11}
            loading="lazy"
            alt=""
            src={groupsBlack24dp11}
          />
          <div className={styles.peopleWrapper}>
            <h2 className={styles.people} style={peopleStyle}>
              {people}
            </h2>
          </div>
        </div>
        <div className={styles.findATeacher}>{findATeacherCoachOrExpert}</div>
      </div>
      <button
        className={styles.locationEventFrame}
        style={locationEventFrameStyle}
      >
        <div className={styles.connect}>{connect}</div>
      </button>
    </div>
  );
};

export default GroupComponent;
