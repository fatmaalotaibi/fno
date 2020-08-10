import React from "react";
import { useHistory } from "react-router-dom";

//styles
import { DeleteButtonStyled } from "../../styles";

//stores
import courseStore from "../../Stores/courseStore";
import instituteStore from "../../Stores/instituteStore";

const DeleteButton = ({ courseId, instituteId }) => {
  const history = useHistory();

  const handleDelete = () => {
    if (courseId) courseStore.deleteCourse(courseId);
    else instituteStore.deleteInstitute(instituteId);
  };

  return (
    <div>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </div>
  );
};

export default DeleteButton;
