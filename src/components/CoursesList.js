import React, { useState } from "react";
import { Link } from "react-router-dom";

//styles
import { ListWrapper } from "../styles";

//components
import CourseItem from "./CourseItem";
import SearchBar from "./SearchBar";
import AddButton from "./Buttons/addButton";

const CoursesList = ({ course, deleteCourse, createCourse }) => {
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
      <AddButton createCourse={createCourse} />
    </>
  );
};

export default CoursesList;
