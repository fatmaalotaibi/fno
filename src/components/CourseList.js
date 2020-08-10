import React, { useState } from "react";
import { observer } from "mobx-react";

//styles
import { ListWrapper } from "../styles";

//components
import CourseItem from "./CourseItem";
import SearchBar from "./SearchBar";

//stores
import courseStore from "../Stores/courseStore";

const CourseList = ({ courses }) => {
  const [query, setQuery] = useState("");

  const courseList = courseStore.courses
    .filter((course) => course.name.toLowerCase().includes(query.toLowerCase()))
    .map((course) => <CourseItem course={course} key={course.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{courseList} </ListWrapper>
    </>
  );
};

export default observer(CourseList);
