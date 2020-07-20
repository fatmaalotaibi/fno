import React, { useState } from "react";
import { Route, Switch } from "react-router";
import slugify from "react-slugify";

//Data
import courses from "./courses";

//styles

import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

//components
import CoursesList from "./components/CoursesList";
import CourseDetail from "./components/CourseDetail";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  const theme = {
    mainColor: "#fdd365", // main font color
    backgroundColor: "#856c8b", // main background color
    gold: "#fdd365",

    light: {
      mainColor: "#242424", // main font color
      backgroundColor: "#fefafb", // main background color
      gold: "#fdd365",
      red: "#d92027",
    },
    dark: {
      mainColor: "#fdd365", // main font color
      backgroundColor: "#393e46", // main background color
      gold: "#fdd365",
      red: "#d92027",
    },
  };
  const createCourse = (newCourse) => {
    newCourse.id = _courses[_courses.length - 1].id + 1;
    newCourse.slug = slugify(newCourse.name);
    setCourse([...courses, newCourse]);
  };
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_courses, setCourse] = useState(courses);

  const handeleToggle = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  // const savedTheme = localStorage.getItem("theme") ?? "light";
  // const [currentTheme, setCurrentTheme] = useState(savedTheme);

  // const handleToggle = () => {
  //   const newTheme = currentTheme === "light" ? "dark" : "light";
  //   setCurrentTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  // };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} handeleToggle={handeleToggle} />
      <Switch>
        <Route path="/courses/:courseSlug">
          <CourseDetail />
        </Route>
        <Route path="/courses">
          <CoursesList course={_courses} createCourse={createCourse} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
