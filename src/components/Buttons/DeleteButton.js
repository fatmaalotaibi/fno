import React from "react";
import { useHistory } from "react-router-dom";

//styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const history = useHistory();

  const handleDelete = () => {
    props.deleteCourse(props.courseId);
    history.push("/courses");
  };
  return (
    <div>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </div>
  );
};

export default DeleteButton;
