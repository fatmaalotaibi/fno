import React from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router";

//Stores
import authStore from "../Stores/authStore";

//styles
import { Description, Title, BallerinaImage } from "../styles";

const Home = () => {
  // if (!authStore.user) return <Redirect to="/signin" />;
  return (
    <>
      <Title> Secret Art Courses </Title>
      <Description> Memory In Another way </Description>

      <BallerinaImage
        alt="ballerina1"
        src="https://rlv.zcache.com/dancing_ballerina_pencil_drawing_postcard-r4f04d1ab983143c789ac1ec8acd63a38_vgbaq_8byvr_704.jpg"
      />
    </>
  );
};

export default observer(Home);
