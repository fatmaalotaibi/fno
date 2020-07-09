import React, { useState } from "react";
import { Link } from "react-router-dom";

//styles
import { ListWrapper } from "../styles";

//components
import CourseItem from "./CourseItem";
import SearchBar from "./SearchBar";

const CoursesList = ({ course, deleteCourse }) => {
  const [query, setQuery] = useState("");

  const courseList = course
    .filter((course) => course.name.toLowerCase().includes(query.toLowerCase()))
    .map((course) => (
      <CourseItem course={course} deleteCourse={deleteCourse} key={course.id} />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{courseList} </ListWrapper>
    </>
  );
};

export default CoursesList;
