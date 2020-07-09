import React from "react";
import { Link } from "react-router-dom";

//styles
import { CourseWrapper } from "../styles";

//Components

import DeleteButton from "./Buttons/DeleteButton";

const CourseItem = ({ course, deleteCourse }) => {
  return (
    <>
      <CourseWrapper className="col-lg-3 col-md-4 col-sm-6">
        <Link to={`/courses/${course.slug}`}>
          <img src={course.image} alt={course.name} />
        </Link>
        <p>{course.name}</p>
        <p className="course-price">{course.price} KD</p>

        <DeleteButton courseId={course.id} deleteCourse={deleteCourse} />
      </CourseWrapper>
    </>
  );
};

export default CourseItem;
