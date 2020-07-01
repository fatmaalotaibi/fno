import React, { useState } from "react";

//styles
import { ListWrapper } from "../styles";

//Data
import cours from "../courses";

//components
import CoursItem from "./CoursItem";

const CoursesList = () => {
  const [_cours, setCours] = useState(cours);

  const deleteCours = (coursId) => {
    const updatedCours = _cours.filter((cours) => cours.id !== +coursId);
    setCours(updatedCours);
  };

  const coursList = _cours.map((cours) => (
    <CoursItem cours={cours} key={cours.id} deleteCours={deleteCours} />
  ));

  return <ListWrapper> {coursList} </ListWrapper>;
};

export default CoursesList;
