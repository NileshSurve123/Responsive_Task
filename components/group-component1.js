import { useMemo } from "react";
import styles from "./group-component1.module.css";

const GroupComponent1 = ({
  groupsBlack24dp11,
  people,
  findATeacherCoachOrExpert,
  connect,
  propGap,
  propWidth,
  propFlex,
  propAlignSelf,
  propHeight,
  propHeight1,
  propPadding,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const locationSeparatorStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupsListStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const people1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
    };
  }, [propAlignSelf, propHeight]);

  const findATeacherStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const findClassSchoolStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.rectangleParent} style={groupDiv1Style}>
      <div className={styles.frameChild} />
      <div className={styles.groupsAndProductsGroup}>
        <div
          className={styles.locationSeparator}
          style={locationSeparatorStyle}
        >
          <img
            className={styles.groupsBlack24dp11}
            loading="lazy"
            alt=""
            src={groupsBlack24dp11}
          />
          <div className={styles.groupsList} style={groupsListStyle}>
            <h2 className={styles.people} style={people1Style}>
              {people}
            </h2>
          </div>
        </div>
        <div className={styles.findATeacher} style={findATeacherStyle}>
          {findATeacherCoachOrExpert}
        </div>
      </div>
      <div className={styles.findClassSchool} style={findClassSchoolStyle}>
        <div className={styles.connect}>{connect}</div>
      </div>
    </div>
  );
};

export default GroupComponent1;
