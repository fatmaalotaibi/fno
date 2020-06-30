import React from "react";

//styles
import styles from "../styles";

//Data
import cours from "../courses";

//components
import CoursItem from "./CoursItem";

const CoursesList = () => {
  const coursList = cours.map((cours) => (
    <CoursItem cours={cours} key={cours.id} />
  ));

  return <div style={styles.list}>{coursList}</div>;
};

export default CoursesList;
