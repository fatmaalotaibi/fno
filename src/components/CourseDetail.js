import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";

//style
import { DetailWrapper } from "../styles";

//components
import DeleteButton from "./Buttons/DeleteButton";

const CourseDetail = ({ courses, deleteCourse }) => {
  const { courseSlug } = useParams();

  const course = courses.find((course) => course.slug === courseSlug);
  if (!course) return <Redirect to="/courses" />;

  return (
    <DetailWrapper>
      <Link to="/courses">
        <p>Back to courses </p>
      </Link>
      <h1>{course.name}</h1>
      <img src={course.image} alt={course.id} />
      <p>{course.description}</p>
      <p>{course.price}</p>
      <DeleteButton courseId={course.id} deleteCourse={deleteCourse} />
    </DetailWrapper>
  );
};
export default CourseDetail;
