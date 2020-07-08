import React from "react";
import { Link, useParams } from "react-router-dom";

//style
import { DetailWrapper } from "../styles";

//components
import DeleteButton from "./Buttons/DeleteButton";

const CourseDetail = (props) => {
  const { courseId } = useParams();

  const course = props.course.find((course) => course.id === +courseId);

  return (
    <DetailWrapper>
      <Link to="/courses">
        <p>Back to courses </p>
      </Link>
      <h1>{course.name}</h1>
      <img src={course.image} alt={course.name} />
      <p>{course.description}</p>
      <p>{course.price}</p>
      <DeleteButton courseId={course.id} deleteCourse={props.deleteCourse} />
    </DetailWrapper>
  );
};
export default CourseDetail;
