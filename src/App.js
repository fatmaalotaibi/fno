import React, { useState } from "react";
import { observer } from "mobx-react";

//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

//components
import NavBar from "./components/NavBar";
import Routes from "./Routes";

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
function App() {
  const savedTheme = localStorage.getItem("theme") ?? "light";
  const [currentTheme, setCurrentTheme] = useState(savedTheme);

  const handleToggle = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} handleToggle={handleToggle} />
      {/* {true ? <h1> Loading </h1> : <Routes />} */}
      <Routes />
    </ThemeProvider>
  );
}

export default observer(App);
