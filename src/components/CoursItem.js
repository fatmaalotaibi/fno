import React from "react";
//styles
import styles, { CoursWrapper } from "../styles";

const CoursItem = (props) => {
  return (
    <CoursWrapper>
      <img src={props.cours.image} alt={props.cours.name} />
      <p>{props.cours.name}</p>
      <p className="cours-price">{props.cours.price} KD</p>
    </CoursWrapper>
  );
};

export default CoursItem;
