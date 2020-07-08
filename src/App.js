import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

//Data
import courses from "./courses";

//styles
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";

//components
import CoursesList from "./components/CoursesList";
import CourseDetail from "./components/CourseDetail";
import Home from "./components/HomePage";

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

  const [currentTheme, setCurrentTheme] = useState("light");
  const [_course, setCourse] = useState(courses);

  const deleteCourse = (courseId) => {
    const updatedCourse = _course.filter((course) => course.id !== +courseId);
    setCourse(updatedCourse);
  };

  const selectCourse = (courseId) => {
    const selectedCourse = courses.find((course) => course.id === courseId);
    setCourse(selectedCourse);
  };

  const handeleToggle = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const handleDelete = () => {
    alert(`Delete cours #${courses.id}`);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Link to="/courses" style={{ margin: 10, float: "right" }}>
        {" "}
        Courses{" "}
      </Link>
      <ThemeButton onClick={handeleToggle}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <Switch>
        <Route path="/coursrs/:courseId">
          <CourseDetail course={_course} deleteCourse={deleteCourse} />
        </Route>

        <Route path="/courses">
          <CoursesList course={_course} deleteCourse={deleteCourse} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
