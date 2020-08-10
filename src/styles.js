import styled, { createGlobalStyle } from "styled-components";

import { Link, NavLink } from "react-router-dom";

export const CourseWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: left;

    &.cours-price {
      color: ${(props) => props.theme.gold};
    }
  }
`;
export const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: ${(props) => props.theme.gold};
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
  color: #e0dede;
`;
export const Description = styled.h4`
  text-align: center;
`;
export const BallerinaImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const GlobalStyle = createGlobalStyle`
 body{
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}
}
`;
export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  img {
    width: 30%;
    height: 30%;
  }
`;
export const SearchBarStyled = styled.input`
  height: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  background-color: #f5f5f5;
`;

export const Logo = styled(Link)`
  padding: 0.75em;
  img {
    width: 50px;
    margin: 10;
    float: "left";
  }
`;
export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
export const UpdateButtonStyled = styled.p`
  color: ${(props) => props.theme.pink};
`;

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-right: 0.5em;
  border-radius: 3px;
  background-color: ___CSS_0___;
  color: ___CSS_1___;
`;
