import React from "react";
import { observer } from "mobx-react";
import { Link, useParams, Redirect } from "react-router-dom";

//style
import { DetailWrapper } from "../styles";

//components
import DeleteButton from "./Buttons/DeleteButton";

//stores
import courseStore from "../Stores/courseStore";
import UpdateButton from "./Buttons/UpdateButton";

const CourseDetail = () => {
  const { courseSlug } = useParams();

  const course = courseStore.courses.find(
    (course) => course.slug === courseSlug
  );
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
      <UpdateButton course={course} />
      <DeleteButton courseId={course.id} />
    </DetailWrapper>
  );
};
export default observer(CourseDetail);
