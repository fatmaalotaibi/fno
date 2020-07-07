import React, { useState } from "react";

//styles
import { ListWrapper } from "../styles";

//components
import CourseItem from "./CourseItem";
import SearchBar from "./SearchBar";

const CoursesList = (props) => {
  const [query, setQuery] = useState("");

  const courseList = props.course
    .filter((course) => course.name.includes(query))
    .map((course) => (
      <CourseItem
        course={course}
        deleteCourse={props.deleteCourse}
        selectCourse={props.selectCourse}
        key={course.id}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{courseList} </ListWrapper>
    </>
  );
};

export default CoursesList;
