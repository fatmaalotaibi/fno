import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//styles
import { CourseWrapper } from "../styles";

//Components
import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";

const CourseItem = ({ course }) => {
  return (
    <>
      <CourseWrapper className="col-lg-3 col-md-4 col-sm-6">
        <Link to={`/courses/${course.slug}`}>
          <img src={course.image} alt={course.name} />
        </Link>
        <p>{course.name}</p>
        <p className="course-price">{course.price} KD</p>
        <UpdateButton course={course} />
        <DeleteButton courseId={course.id} />
      </CourseWrapper>
    </>
  );
};

export default observer(CourseItem);
