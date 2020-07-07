import styled, { createGlobalStyle } from "styled-components";

export const CourseWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;

    .cours-price {
      color: ${(props) => props.theme.gold};
    }
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
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
  width: 50%;
`;
export const SearchBarStyled = styled.input`
  height: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  background-color: #f5f5f5;
`;
