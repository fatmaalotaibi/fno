import React, { useState } from "react";

//Data
import cours from "./courses";

//styles
import {
  Description,
  DeleteButtonStyled,
  GlobalStyle,
  ThemeButton,
  Title,
  ListWrapper,
  BallerinaImage,
} from "./styles";
import { ThemeProvider } from "styled-components";

//components
import CoursesList from "./components/CoursesList";

function App() {
  console.log(cours[0].name);

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
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  const handleDelete = () => {
    alert(`Delete cours #${cours.id}`);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <Title> Secret Art Courses </Title>
      <Description> Memory In Another way </Description>

      <BallerinaImage
        alt="ballerina1"
        src="https://rlv.zcache.com/dancing_ballerina_pencil_drawing_postcard-r4f04d1ab983143c789ac1ec8acd63a38_vgbaq_8byvr_704.jpg"
      />
      <CoursesList />
    </ThemeProvider>
  );
}

export default App;
