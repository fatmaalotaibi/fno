import React from "react";
//styles
import styles, { CoursWrapper, DeleteButtonStyled } from "../styles";
import cours from "../courses";

const CoursItem = (props) => {
  const cours = props.cours;

  const handleDelete = () => {
    props.deleteCours(cours.id);
  };

  return (
    <CoursWrapper>
      <img src={cours.image} alt={cours.name} />
      <p>{cours.name}</p>
      <p className="cours-price">{cours.price} KD</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </CoursWrapper>
  );
};

export default CoursItem;
