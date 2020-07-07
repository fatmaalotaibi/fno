import React from "react";

//styles
import { CourseWrapper } from "../styles";

//Components

import DeleteButton from "./Buttons/DeleteButton";

const CourseItem = (props) => {
  const course = props.course;

  return (
    <>
      <CourseWrapper>
        <img
          src={course.image}
          alt={course.name}
          onClick={() => props.selectCourse(course.id)}
        />
        <p>{course.name}</p>
        <p className="course-price">{course.price} KD</p>

        <DeleteButton courseId={course.id} deleteCourse={props.deleteCourse} />
      </CourseWrapper>
    </>
  );
};

export default CourseItem;
