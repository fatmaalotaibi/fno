import React from "react";

//styles
import { ListWrapper } from "../styles";

//Data
import cours from "../courses";

//components
import CoursItem from "./CoursItem";

const CoursesList = () => {
  const coursList = cours.map((cours) => (
    <CoursItem cours={cours} key={cours.id} />
  ));

  return <ListWrapper> {coursList} </ListWrapper>;
};

export default CoursesList;
