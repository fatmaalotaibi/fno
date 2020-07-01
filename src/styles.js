import styled, { createGlobalStyle } from "styled-components";

const CoursWrapper = styled.div`
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

const Title = styled.h1`
  text-align: center;
  color: #e0dede;
`;
const Description = styled.h4`
  text-align: center;
`;
const BallerinaImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const GlobalStyle = createGlobalStyle`
 body{
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}
}
`;

export {
  Description,
  GlobalStyle,
  Title,
  ListWrapper,
  BallerinaImage,
  CoursWrapper,
};
