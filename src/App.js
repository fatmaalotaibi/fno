import React, { useState } from "react";

//Data
import courses from "./courses";

//styles
import {
  Description,
  GlobalStyle,
  ThemeButton,
  Title,
  BallerinaImage,
} from "./styles";
import { ThemeProvider } from "styled-components";

//components
import CoursesList from "./components/CoursesList";
import CourseDetail from "./components/CourseDetail";

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
      backgroundColor: "#856c8b", // main background color
      gold: "#fdd365",
      red: "#d92027",
    },
  };

  const [currentTheme, setCurrentTheme] = useState("light");
  const [course, setCourse] = useState(null);
  const [_course, setCourses] = useState(course);

  const deleteCourse = (courseId) => {
    const updatedCourse = _course.filter((course) => course.id !== +courseId);
    setCourses(updatedCourse);
    setCourses(null);
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

  const setView = () =>
    course ? (
      <CourseDetail
        course={course}
        deleteCourse={deleteCourse}
        setCourse={setCourse}
      />
    ) : (
      <CoursesList
        course={_course}
        deleteCourse={deleteCourse}
        selectCourse={selectCourse}
      />
    );

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={handeleToggle}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <div>
        <Title> Secret Art Courses </Title>
        <Description> Memory In Another way </Description>

        <BallerinaImage
          alt="ballerina1"
          src="https://rlv.zcache.com/dancing_ballerina_pencil_drawing_postcard-r4f04d1ab983143c789ac1ec8acd63a38_vgbaq_8byvr_704.jpg"
        />
      </div>
      {setView()}
    </ThemeProvider>
  );
}

export default App;
