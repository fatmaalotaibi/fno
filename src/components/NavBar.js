import React from "react";

//styles
import logo from "../images.png";
import { Logo, ThemeButton, NavItem, UsernameStyled } from "../styles";
import { FiLogOut } from "react-icons/fi";

//Components
import SignupButton from "../components/Buttons/SignupButton";
import SigninButton from "./Buttons/SigninButton";

//Stores
import authStore from "../Stores/authStore";

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
        {authStore.user && (
          <>
            <UsernameStyled>
              Hello, {authStore.UsernameStyled.username}
            </UsernameStyled>
            <FiLogOut onClick={authStore.signout} size="2em" color="red" />
          </>
        )}
        {authStore.user?.role === "admin" && (
          <>
            <NavItem
              className="nav-item"
              to="/institutes"
              style={{ margin: 10, float: "right" }}
            >
              Institutes
            </NavItem>
            <NavItem
              className="nav-item"
              to="/courses"
              style={{ margin: 10, float: "right" }}
            >
              {" "}
              Courses{" "}
            </NavItem>
          </>
        )}

        <ul className="navbar-nav ml-auto mt-2 mt-rg-0">
          <SigninButton />
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
