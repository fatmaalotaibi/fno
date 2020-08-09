import React from "react";

//styles
import logo from "../images.png";
import { Logo, ThemeButton, NavItem } from "../styles";

//Components
import SignupButton from "../components/Buttons/SignupButton";

const NavBar = ({ handeleToggle, currentTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Logo className="navbar-brand" to="/">
          <img src={logo} />
        </Logo>
        <ul className="navbar-nav ml-auto mt-2 mt-rg-0">
          <NavItem
            className="nav-item"
            to="/courses"
            style={{ margin: 10, float: "right" }}
          >
            {" "}
            Courses{" "}
          </NavItem>
          <SignupButton />
          <ThemeButton className="nav-item" onClick={handeleToggle}>
            {currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
