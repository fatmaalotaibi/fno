import React from "react";

//Data
import cours from "./courses";

//styles
import {
  Description,
  GlobalStyle,
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
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Title> Secret Art Courses </Title>
        <Description> Memory In Another way </Description>

        <BallerinaImage
          alt="ballerina1"
          src="https://rlv.zcache.com/dancing_ballerina_pencil_drawing_postcard-r4f04d1ab983143c789ac1ec8acd63a38_vgbaq_8byvr_704.jpg"
        />

        <CoursesList />
      </div>
    </ThemeProvider>
  );
}
export default App;
