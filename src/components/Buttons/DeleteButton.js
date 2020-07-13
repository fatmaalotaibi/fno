import React from "react";
import { useHistory } from "react-router-dom";

//styles
import { DeleteButtonStyled } from "../../styles";

//stores
import courseStore from "../../courseStore";

const DeleteButton = ({ courseId }) => {
  const history = useHistory();

  const handleDelete = () => courseStore.deleteCourse(courseId);

  return (
    <div>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </div>
  );
};

export default DeleteButton;
