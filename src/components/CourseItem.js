import React from "react";
import { Link } from "react-router-dom";

//styles
import { CourseWrapper } from "../styles";

//Components

import DeleteButton from "./Buttons/DeleteButton";

const CourseItem = (props) => {
  const course = props.course;

  return (
    <>
      <CourseWrapper>
        <Link to={`/courses/${course.id}`}>
          <img src={course.image} alt={course.name} />
        </Link>
        <p>{course.name}</p>
        <p className="course-price">{course.price} KD</p>

        <DeleteButton courseId={course.id} deleteCourse={props.deleteCourse} />
      </CourseWrapper>
    </>
  );
};

export default CourseItem;
