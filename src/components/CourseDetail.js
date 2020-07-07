import React from "react";

//style
import { DetailWrapper } from "../styles";

//components
import DeleteButton from "./Buttons/DeleteButton";
const CourseDetail = (props) => {
  const course = props.course;

  return (
    <DetailWrapper>
      <p onClick={() => props.setCourse()}>Back to courses </p>
      <h1>{course.name}</h1>
      <img src={course.image} alt={course.name} />
      <p>{course.description}</p>
      <p>{course.price}</p>
      <DeleteButton courseId={course.id} deleteCourse={props.deleteCourse} />
    </DetailWrapper>
  );
};
export default CourseDetail;
